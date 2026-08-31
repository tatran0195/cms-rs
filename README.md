# Nibleaf - Modern Documentation Platform

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Rust](https://img.shields.io/badge/rust-1.70+-orange.svg)](https://www.rust-lang.org/)
[![Status](https://img.shields.io/badge/status-beta-yellow.svg)]

Nibleaf is a modern, fast, and searchable documentation platform built with Rust and React. It provides a seamless experience for creating and hosting beautiful documentation sites.

---

## ✨ Features

- **Modern Stack**: Rust backend with Axum, React frontend with Vite
- **Markdown First**: Write documentation in Markdown, get beautiful HTML
- **Japanese Search**: Lindera tokenizer for Japanese-aware search
- **Pluggable Backends**: Local/S3 storage, pgvector/Qdrant search, memory/Redis queue
- **Production Ready**: Rate limiting, security headers, observability
- **Single Machine Deployment**: Optimized for AWS Windows deployment

---

## 🏗️ Architecture

Following AppFlowy's layering discipline:

```
┌─────────────────────────────────────────────────────────────┐
│                    API Layer (nibleaf-api)                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────────┐ │
│  │   Routes    │  │  Handlers   │  │   Middleware (RateLimit) │ │
│  └─────────────┘  └─────────────┘  └─────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                  Business Logic (nibleaf-biz)                  │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────────┐ │
│  │   Services  │  │   Traits    │  │   Orchestration         │ │
│  └─────────────┘  └─────────────┘  └─────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                    Data Layer (nibleaf-db)                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────────┐ │
│  │   Queries   │  │   Models    │  │   SQLx Operations        │ │
│  └─────────────┘  └─────────────┘  └─────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                  Infrastructure Layer                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────────┐ │
│  │  Storage    │  │   Search    │  │      Queue              │ │
│  │  (Local/S3) │  │ (pgvector/  │  │   (Memory/Redis)        │ │
│  └─────────────┘  │  Qdrant)     │  └─────────────────────────┘ │
│                  └─────────────┘                                  │
└─────────────────────────────────────────────────────────────┘
```

**Key Design Decisions:**
- ✅ No ORM - Hand-written SQLx queries
- ✅ No Actix - Axum for async web
- ✅ No GoTrue - In-process auth
- ✅ No Docker - Single Windows machine deployment
- ✅ Pluggable backends - Swap implementations without code changes

---

## 🚀 Quick Start

### Prerequisites
- Rust 1.70+ (MSVC toolchain for Windows)
- Node.js 18+ (for frontend)
- PostgreSQL 14+

### Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/nibleaf.git
   cd nibleaf
   ```

2. **Configure environment**
   ```bash
   # Copy example config
   cp config/dev.env.example config/dev.env
   
   # Edit config with your settings
   nano config/dev.env
   ```

3. **Setup database**
   ```bash
   # Create database
   createdb nibleaf_dev
   
   # Run migrations (will run automatically on first startup)
   sqlx migrate run
   ```

4. **Build and run**
   ```bash
   # Build and start
   cargo run
   
   # Or build separately
   cargo build
   ./target/debug/nibleaf-server
   ```

5. **Frontend development**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

6. **Access the application**
   - API: http://localhost:3000/api
   - Sites: http://localhost:3000
   - Frontend: http://localhost:3001

---

## 📦 Project Structure

```
nibleaf-rs/
├── Cargo.toml                    # Workspace manifest
├── src/                           # Binary crate (composition root)
│   └── main.rs                    # Entry point
├── crates/                        # Library crates
│   ├── nibleaf-config/            # Configuration
│   ├── nibleaf-error/             # Error handling
│   ├── nibleaf-entity/            # Entity types (24 files)
│   ├── nibleaf-db/                # Database queries (23 files)
│   ├── nibleaf-auth/              # Authentication
│   ├── nibleaf-access-control/   # Access control
│   ├── nibleaf-storage/           # Storage (Local/S3)
│   ├── nibleaf-search/            # Search (pgvector/Qdrant)
│   ├── nibleaf-queue/             # Job queue (Memory/Redis)
│   ├── nibleaf-analytics/         # Analytics (Postgres/ClickHouse)
│   ├── nibleaf-mcp/               # MCP protocol
│   ├── nibleaf-biz/               # Business logic (26 files)
│   ├── nibleaf-sites/             # Published sites (6 files)
│   ├── nibleaf-api/               # API routes/handlers (72 files)
│   ├── nibleaf-worker/            # Background jobs
│   └── nibleaf-middleware/        # Middleware (7 files)
├── migrations/                    # Database migrations
│   └── 20260101000000_init.sql     # Initial schema
├── frontend/                      # Frontend (Vite 8 + React)
│   ├── src/                       # Source files
│   │   ├── components/            # React components
│   │   ├── pages/                 # Page components
│   │   ├── hooks/                 # React hooks
│   │   ├── services/              # API services
│   │   ├── styles/                # CSS files
│   │   └── main.tsx               # Entry point
│   ├── public/                    # Static files
│   ├── package.json               # Dependencies
│   └── vite.config.ts             # Vite config
├── deploy/                        # Deployment scripts
│   ├── nssm-install.bat           # Install Windows service
│   ├── nssm-uninstall.bat         # Uninstall Windows service
│   └── README.md                  # Deployment guide
└── uploads/                       # Architecture documents
    ├── 00-executive-summary.md     # Executive summary
    ├── 01-architecture-overview.md # Architecture
    └── ...
```

---

## 📊 Statistics

| Metric | Value |
|--------|-------|
| **Total Crates** | 15 library + 1 binary |
| **Total Rust Files** | 175+ |
| **API Handlers** | 150+ across 25 modules |
| **Database Tables** | 40+ |
| **Lines of Code** | ~40,000+ (Rust) |

---

## 🎯 Implementation Status

### ✅ Completed
- All 15 crates implemented
- All entity types defined
- All database queries implemented
- All business logic services implemented
- All API handlers implemented (150+)
- All middleware production-ready
- All sites modules implemented
- Authentication middleware complete
- Request validation (validator crate)
- OpenAPI documentation (utoipa)
- **Refactored to ecosystem crates** (governor, metrics)
- **Workspace audit complete**
- **Comprehensive tests added**

### 🚧 In Progress
- Frontend migration (Vite 8 SPA) - Basic structure created
- Windows deployment packaging - NSSM scripts created

### 📋 Remaining
- Comprehensive integration tests
- Frontend feature completion
- Deployment testing

---

## 🔧 Configuration

### Environment Variables

Create `config/dev.env` or `config/deploy.env`:

```env
# Server
NIBLEAF_ENV=dev
NIBLEAF_SERVER__PORT=3000
NIBLEAF_SERVER__HOST=0.0.0.0

# Database
NIBLEAF_DATABASE__URL=postgres://user:password@localhost:5432/nibleaf

# Auth
NIBLEAF_AUTH__JWT_SECRET=your-jwt-secret
NIBLEAF_AUTH__SESSION_SECRET=your-session-secret

# Storage
NIBLEAF_STORAGE__BACKEND=local
NIBLEAF_STORAGE__LOCAL_ROOT=./storage

# Rate Limiting
NIBLEAF_RATE_LIMIT__ENABLED=true
NIBLEAF_RATE_LIMIT__REQUESTS_PER_SECOND=100
NIBLEAF_RATE_LIMIT__BURST_SIZE=200

# Security Headers
NIBLEAF_SECURITY_HEADERS__ENABLE_HSTS=true
NIBLEAF_SECURITY_HEADERS__HSTS_MAX_AGE=31536000

# Admin Origin
NIBLEAF_ADMIN_ORIGIN__ALLOWED_ORIGINS=https://admin.nibleaf.com,https://app.nibleaf.com
NIBLEAF_ADMIN_ORIGIN__ENFORCE=true
NIBLEAF_ADMIN_ORIGIN__ALLOW_LOCALHOST=true
```

---

## 🏃 Running the Application

### Development
```bash
# Start backend
cargo run

# Start frontend (in another terminal)
cd frontend
npm run dev
```

### Production
```bash
# Build everything
cargo build --release
cd frontend && npm run build

# Run with production config
NIBLEAF_ENV=deploy cargo run --release
```

### With NSSM (Windows Service)
```powershell
# Install service
cd deploy
nssm-install.bat
nssm start NibleafServer

# Check status
nssm status NibleafServer
```

---

## 🧪 Testing

### Run all tests
```bash
cargo test --workspace
```

### Run specific crate tests
```bash
cargo test -p nibleaf-middleware
cargo test -p nibleaf-api
cargo test -p nibleaf-db
```

### Integration tests
```bash
cargo test --test middleware_test
```

---

## 📚 Documentation

- **[Architecture Documents](uploads/)** - Design decisions and architecture
- **[CODING_PROGRESS.md](CODING_PROGRESS.md)** - Implementation progress tracking
- **[PRODUCTION_READY_SUMMARY.md](PRODUCTION_READY_SUMMARY.md)** - Production readiness status
- **[WORKSPACE_AUDIT.md](WORKSPACE_AUDIT.md)** - Complete workspace audit results
- **[REFACTORING_COMPLETE.md](REFACTORING_COMPLETE.md)** - Refactoring to ecosystem crates
- **[MIDDLEWARE_PRODUCTION_IMPROVEMENTS.md](MIDDLEWARE_PRODUCTION_IMPROVEMENTS.md)** - Middleware improvements
- **[Deployment Guide](deploy/README.md)** - Windows deployment instructions

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Inspired by [AppFlowy](https://github.com/AppFlowy-IO/AppFlowy)
- Built with [Rust](https://www.rust-lang.org/) and [React](https://react.dev/)
- Uses [Axum](https://github.com/tokio-rs/axum) for async web
- Uses [SQLx](https://github.com/launchbadge/sqlx) for database access
- Uses [Governor](https://github.com/Skopp/governor) for rate limiting
- Uses [Metrics](https://github.com/metrics-rs/metrics) for observability
