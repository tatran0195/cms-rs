# Frontend Migration Plan - Original Nibleaf to Rust Backend

## Date: 2026-08-27

## 🎯 Objective

Migrate the original Nibleaf frontend (`apps/app/`) from its Node.js + Hono backend to our new Rust + Axum backend, while preserving all UI/UX, features, and user workflows.

---

## 📊 Original Frontend Analysis

### Stack
- **Framework**: Vite 8 + @tanstack/react-start (SSR)
- **Routing**: @tanstack/react-router
- **Data Fetching**: @tanstack/react-query
- **Styling**: Tailwind CSS v4
- **i18n**: @nibleaf/i18n (Paraglide-based)
- **MDX**: @mdx-js/rollup
- **Rich Text**: @tiptap/*
- **UI Components**: @nibleaf/design-system (workspace package)

### Size
- **Files**: 48 route files + 100+ component files
- **Dependencies**: 50+ npm packages
- **Lines of Code**: ~20,000+ (estimated)

### Key Features
- Marketing pages (home, about, pricing, etc.)
- Authentication (sign-in, sign-up, forgot password)
- Dashboard with projects
- Documentation viewer
- Admin interface
- MDX-based documentation
- i18n (English + Arabic)
- Custom domain support

---

## 🔄 Migration Strategy: Hybrid (Client-Side Only)

### Why Hybrid?
1. **Simpler**: No need to integrate SSR with Rust
2. **Faster**: Can be done incrementally
3. **Cleaner**: Clear separation between frontend and backend
4. **Production-Ready**: Works well for documentation sites

### What We Keep
- ✅ Vite 8 (already using it)
- ✅ @tanstack/react-router (client-side routing)
- ✅ @tanstack/react-query (data fetching)
- ✅ Tailwind CSS (styling)
- ✅ All React components
- ✅ All pages and layouts
- ✅ MDX support (for documentation)

### What We Remove
- ❌ @tanstack/react-start (SSR framework)
- ❌ nitro (server framework)
- ❌ Server functions (functions/*.ts)
- ❌ Workspace package dependencies (@nibleaf/*)

### What We Replace
- 🔄 @nibleaf/server/rpc → Our Rust API client
- 🔄 @nibleaf/i18n → Standalone i18n or copy from original
- 🔄 @nibleaf/design-system → Keep or replace with our own
- 🔄 @nibleaf/auth → Our Rust auth

---

## 📋 Migration Phases

### Phase 1: Setup (1 hour) ✅ COMPLETED
- [x] Copy `apps/app/` to `frontend/`
- [x] Update package.json (remove workspace dependencies)
- [x] Update vite.config.ts (remove SSR plugins, add proxy)

### Phase 2: Core Infrastructure (2-3 hours) 🚧 IN PROGRESS
- [ ] Create Rust API client (services/api-client.ts)
- [ ] Update package.json with axios
- [ ] Create i18n wrapper or copy i18n package
- [ ] Update env.ts to use Rust backend URL
- [ ] Remove server.ts (SSR entry point)
- [ ] Update main.tsx (client-side entry point)

### Phase 3: API Migration (4-6 hours)
- [ ] Update all server functions to client-side API calls
- [ ] Update all route loaders to use client-side data fetching
- [ ] Update authentication (Better Auth → Rust auth)
- [ ] Update all API endpoint paths (/api/app/* → /api/*)

### Phase 4: Design System (2-3 hours)
- [ ] Copy @nibleaf/design-system or replace with our own
- [ ] Update all component imports
- [ ] Ensure Tailwind CSS works

### Phase 5: Testing (2-4 hours)
- [ ] Test all pages
- [ ] Test authentication flow
- [ ] Test API calls
- [ ] Test MDX rendering
- [ ] Test i18n

### Phase 6: Integration (1-2 hours)
- [ ] Configure Rust to serve frontend in production
- [ ] Set up Vite proxy for development
- [ ] Configure CORS
- [ ] Set up fallback to index.html

---

## 🎯 Detailed Implementation

### Phase 2: Core Infrastructure

#### 1. Update package.json
**Remove:**
- `@nibleaf/auth`
- `@nibleaf/design-system`
- `@nibleaf/i18n`
- `@nibleaf/server`
- `@nibleaf/shared`
- `@nibleaf/usage`
- `@nibleaf/validators`
- `nitro`
- `@tanstack/react-start`

**Add:**
- `axios` (for API calls)
- `@nibleaf/design-system` (copy from original or replace)
- `@nibleaf/i18n` (copy from original or replace)

#### 2. Create Rust API Client
```typescript
// services/api-client.ts
import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  withCredentials: true, // For session cookies
});

export const rustApi = {
  auth: { login, register, logout, me, refresh },
  orgs: { list, get, create, update, delete },
  projects: { list, get, create, update, delete },
  // ... all other endpoints
};
```

#### 3. i18n Solution
**Option A**: Copy @nibleaf/i18n package from original
**Option B**: Use react-i18next
**Option C**: Use Paraglide directly (standalone)

**Recommendation**: Option A (copy the package) to preserve all translations

#### 4. Update env.ts
```typescript
// Change from:
const API_URL = typeof window === 'undefined' ? env.VITE_APP_URL : window.location.origin;

// To:
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
```

#### 5. Remove server.ts
This file is the SSR entry point. We don't need it for client-side only.

#### 6. Update main.tsx
```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { startRouter } from './router';

const queryClient = new QueryClient();
const router = startRouter();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
```

---

### Phase 3: API Migration

#### Pattern: Server Function → Client-Side API Call

**Before:**
```typescript
// functions/site.ts
import { createServerFn } from '@tanstack/react-start';

export const getSiteFn = createServerFn({ method: 'GET' })
  .validator(siteInput)
  .handler(async ({ data }) => {
    const response = await api.public.sites[':id'].$get({
      param: { id: data.projectId },
      query: { ...(data.language ? { lang: data.language } : {}) },
    });
    return getData(response, 'site');
  });
```

**After:**
```typescript
// services/site-api.ts
import { rustApi } from './api-client';

export const getSite = async (projectId: string, language?: string) => {
  const response = await rustApi.public.sites.get(projectId);
  return response.data;
};
```

**In Route:**
```typescript
// routes/sites/$projectId/index.tsx
import { createFileRoute } from '@tanstack/react-router';
import { getSite } from '@/services/site-api';

export const Route = createFileRoute('/sites/$projectId/')({
  loader: async ({ params }) => {
    const site = await getSite(params.projectId);
    return { site };
  },
  component: SitePage,
});
```

#### Endpoint Mapping

| Original (Hono) | Rust (Axum) | Action |
|-----------------|-------------|--------|
| `/api/auth/sign-in/email` | `/api/auth/login` | Update |
| `/api/auth/sign-up/email` | `/api/auth/register` | Update |
| `/api/auth/sign-out` | `/api/auth/logout` | Update |
| `/api/auth/session` | `/api/auth/me` | Update |
| `/api/app/orgs/*` | `/api/orgs/*` | Search & replace |
| `/api/app/projects/*` | `/api/projects/*` | Search & replace |
| `/api/app/pages/*` | `/api/pages/*` | Search & replace |
| `/api/app/*` | `/api/*` | **Global search & replace** |

---

## 📊 File Changes Summary

### Files to Update
1. **package.json** - Remove workspace deps, add axios
2. **vite.config.ts** - Remove SSR plugins, add proxy to Rust
3. **main.tsx** - Client-side entry point
4. **router.tsx** - Update to use client-side data
5. **env.ts** - Update API URL
6. **services/api-client.ts** - New Rust API client
7. **All functions/*.ts** - Convert to client-side API calls (4 files)
8. **All routes/*.tsx** - Update loaders to use client-side API (48 files)

### Files to Remove
1. **server.ts** - SSR entry point
2. **routeTree.gen.ts** - Will be regenerated

### Files to Add
1. **services/api-client.ts** - Rust API client
2. **i18n wrapper** - If not copying @nibleaf/i18n

---

## 🚀 Quick Start Commands

### Phase 1: Setup (Already Done)
```bash
cp -r /home/user/nibleaf-original/apps/app /home/user/nibleaf-rs/frontend
```

### Phase 2: Update Dependencies
```bash
cd /home/user/nibleaf-rs/frontend
npm install axios
npm uninstall @tanstack/react-start nitro @nibleaf/server @nibleaf/auth @nibleaf/i18n @nibleaf/design-system @nibleaf/shared @nibleaf/usage @nibleaf/validators
```

### Phase 3: Install Missing Dependencies
```bash
npm install @nibleaf/design-system @nibleaf/i18n  # Or copy these packages
```

---

## 💡 Recommendations

### For Fastest Migration
1. **Copy @nibleaf/i18n and @nibleaf/design-system** from original
2. **Use global search & replace** for `/api/app/` → `/api/`
3. **Convert server functions** one module at a time
4. **Test incrementally** as we go

### For Cleanest Migration
1. **Remove all SSR** (server functions, Nitro, @tanstack/react-start)
2. **Use client-side only** with @tanstack/react-router
3. **Create new API client** from scratch
4. **Copy i18n translations** but use simpler i18n library

---

## ⚠️ Challenges & Solutions

### Challenge 1: Workspace Package Dependencies
**Problem**: Frontend depends on `@nibleaf/*` workspace packages
**Solution**: Copy the needed packages or replace with alternatives

### Challenge 2: Server Functions
**Problem**: 4+ server function files use `@tanstack/react-start`
**Solution**: Convert to client-side API calls using our Rust API client

### Challenge 3: i18n
**Problem**: Uses `@nibleaf/i18n` workspace package with Paraglide
**Solution**: Copy the i18n package or use react-i18next

### Challenge 4: Design System
**Problem**: Uses `@nibleaf/design-system` workspace package
**Solution**: Copy the design system or build our own

### Challenge 5: API Endpoint Differences
**Problem**: Original uses `/api/app/*`, Rust uses `/api/*`
**Solution**: Global search & replace + update specific endpoints

---

## 📝 Next Steps

**Would you like me to:**

1. **Proceed with Phase 2** - Update package.json, create API client, update main.tsx
2. **Copy workspace packages** - Copy @nibleaf/i18n and @nibleaf/design-system
3. **Create migration scripts** - Automated scripts for global changes
4. **Focus on specific area** - Auth, or routes, or components

**My recommendation**: Proceed with Phase 2 now - update the core infrastructure files.
