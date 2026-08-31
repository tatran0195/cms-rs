# Nibleaf Deployment Guide

## Windows Deployment (Single Machine)

This guide covers deploying Nibleaf to a single AWS Windows machine as specified in the architecture requirements.

---

## 📋 Prerequisites

### 1. System Requirements
- Windows Server 2019 or later (recommended: Windows Server 2022)
- Minimum 4GB RAM (recommended: 8GB+ for production)
- Minimum 2 vCPUs (recommended: 4+ vCPUs)
- Minimum 50GB disk space (SSD recommended)
- Static IP address or Elastic IP

### 2. Software Requirements
- [Rust](https://www.rust-lang.org/tools/install) 1.70+ (MSVC toolchain)
- [Node.js](https://nodejs.org/) 18+ (for frontend build)
- [PostgreSQL](https://www.postgresql.org/) 14+ (or managed PostgreSQL)
- [NSSM](https://nssm.cc/download) (Non-Sucking Service Manager)
- [Git](https://git-scm.com/) (optional, for source control)

---

## 🚀 Deployment Steps

### Step 1: Prepare the Server

1. **Launch EC2 Instance**
   - AMI: Windows Server 2022 Base
   - Instance Type: t3.medium or larger
   - Storage: 50GB+ SSD (gp3 recommended)
   - Security Group: Open ports 80, 443, 22 (SSH optional)

2. **Connect to Instance**
   ```powershell
   # Use RDP or Session Manager
   mstsc /v:your-ec2-public-ip
   ```

3. **Install Prerequisites**
   ```powershell
   # Install Rust (MSVC toolchain)
   winget install --id Rustlang.Rust
   
   # Or use rustup
   rustup-init -y --default-toolchain stable -t x86_64-pc-windows-msvc
   
   # Install Node.js
   winget install --id OpenJS.NodeJS
   
   # Install PostgreSQL (or use RDS)
   winget install --id PostgreSQL.PostgreSQL
   
   # Install NSSM
   choco install nssm
   # Or download from: https://nssm.cc/download
   ```

---

### Step 2: Clone and Build

1. **Clone Repository**
   ```powershell
   cd C:\apps
   git clone https://github.com/your-org/nibleaf.git
   cd nibleaf
   ```

2. **Configure Environment**
   - Copy `config/dev.env` to `config/deploy.env`
   - Edit `config/deploy.env` with production values:
     ```env
     NIBLEAF_ENV=deploy
     NIBLEAF_SERVER__PORT=80
     NIBLEAF_DATABASE__URL=postgres://user:password@localhost:5432/nibleaf
     NIBLEAF_AUTH__JWT_SECRET=your-jwt-secret-here
     NIBLEAF_AUTH__SESSION_SECRET=your-session-secret-here
     NIBLEAF_STORAGE__BACKEND=local
     NIBLEAF_STORAGE__LOCAL_ROOT=C:\\apps\\nibleaf\\storage
     ```

3. **Build Backend**
   ```powershell
   cargo build --release
   ```

4. **Build Frontend**
   ```powershell
   cd frontend
   npm install
   npm run build
   cd ..
   ```

---

### Step 3: Configure PostgreSQL

1. **Create Database**
   ```sql
   CREATE DATABASE nibleaf;
   CREATE USER nibleaf_user WITH PASSWORD 'secure-password';
   GRANT ALL PRIVILEGES ON DATABASE nibleaf TO nibleaf_user;
   ```

2. **Run Migrations**
   ```powershell
   # Migrations will run automatically on first startup
   # Or manually:
   sqlx migrate run --database-url postgres://nibleaf_user:secure-password@localhost:5432/nibleaf
   ```

---

### Step 4: Install as Windows Service

1. **Copy Files**
   ```powershell
   # Create deployment directory
   mkdir C:\\apps\\nibleaf\\deploy
   
   # Copy binary
   copy target\\release\\nibleaf-server.exe C:\\apps\\nibleaf\\deploy\\
   
   # Copy config
   mkdir C:\\apps\\nibleaf\\config
   copy config\\deploy.env C:\\apps\\nibleaf\\config\\
   
   # Copy frontend
   xcopy /E /Y dist\\frontend C:\\apps\\nibleaf\\deploy\\frontend\\
   ```

2. **Install Service**
   ```powershell
   cd deploy
   nssm-install.bat
   ```

   Or manually:
   ```powershell
   nssm install NibleafServer "C:\apps\nibleaf\deploy\nibleaf-server.exe"
   nssm set NibleafServer AppDirectory "C:\apps\nibleaf\deploy"
   nssm set NibleafServer AppEnvironmentExtra NIBLEAF_ENV=deploy
   nssm set NibleafServer AppEnvironmentExtra NIBLEAF_CONFIG_PATH="C:\apps\nibleaf\config\deploy.env"
   nssm set NibleafServer Start SERVICE_AUTO_START
   ```

3. **Start Service**
   ```powershell
   nssm start NibleafServer
   ```

4. **Verify Service**
   ```powershell
   nssm status NibleafServer
   nssm logs NibleafServer
   ```

---

### Step 5: Configure Reverse Proxy (Optional)

For production, use IIS or Nginx as a reverse proxy:

#### IIS Configuration
```powershell
# Install IIS
Install-WindowsFeature -Name Web-Server -IncludeManagementTools

# Install URL Rewrite Module
Install-WindowsFeature -Name Web-URL-Rewrite

# Configure site in IIS Manager:
# - Bindings: http:80, https:443
# - Reverse Proxy to localhost:3000 (or your configured port)
```

#### Nginx Configuration (if using Windows Nginx)
```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
    
    # Static files
    location /assets/ {
        alias C:/apps/nibleaf/deploy/frontend/assets/;
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
}
```

---

## 📊 Configuration Reference

### Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `NIBLEAF_ENV` | Environment (dev/deploy) | Yes | dev |
| `NIBLEAF_SERVER__PORT` | Server port | Yes | 3000 |
| `NIBLEAF_SERVER__HOST` | Server host | No | 0.0.0.0 |
| `NIBLEAF_DATABASE__URL` | PostgreSQL connection URL | Yes | - |
| `NIBLEAF_AUTH__JWT_SECRET` | JWT secret key | Yes | - |
| `NIBLEAF_AUTH__SESSION_SECRET` | Session secret key | Yes | - |
| `NIBLEAF_STORAGE__BACKEND` | Storage backend (local/s3) | No | local |
| `NIBLEAF_STORAGE__LOCAL_ROOT` | Local storage path | No | ./storage |
| `NIBLEAF_RATE_LIMIT__ENABLED` | Enable rate limiting | No | true |
| `NIBLEAF_RATE_LIMIT__REQUESTS_PER_SECOND` | Rate limit RPS | No | 100 |
| `NIBLEAF_RATE_LIMIT__BURST_SIZE` | Rate limit burst | No | 200 |

### Storage Configuration

For S3 storage:
```env
NIBLEAF_STORAGE__BACKEND=s3
NIBLEAF_STORAGE__S3_ENDPOINT=https://s3.amazonaws.com
NIBLEAF_STORAGE__S3_REGION=us-east-1
NIBLEAF_STORAGE__S3_BUCKET=your-bucket
NIBLEAF_STORAGE__S3_ACCESS_KEY=your-access-key
NIBLEAF_STORAGE__S3_SECRET_KEY=your-secret-key
```

---

## 🔧 Service Management

### Start Service
```powershell
nssm start NibleafServer
```

### Stop Service
```powershell
nssm stop NibleafServer
```

### Restart Service
```powershell
nssm restart NibleafServer
```

### Check Status
```powershell
nssm status NibleafServer
```

### View Logs
```powershell
nssm logs NibleafServer
```

### Uninstall Service
```powershell
nssm remove NibleafServer confirm
```

---

## 📝 Monitoring

### Health Check
```powershell
curl http://localhost:3000/health
# Expected response: OK
```

### Metrics (if Prometheus enabled)
```powershell
# Add prometheus feature to nibleaf-middleware
# Then access: http://localhost:9090/metrics
```

### Log Files
- Application logs: Use `nssm logs NibleafServer`
- Windows Event Log: Check Application log in Event Viewer

---

## 🔄 Updates

### Update Backend
```powershell
cd C:\apps\nibleaf
git pull
cargo build --release
nssm stop NibleafServer
copy target\release\nibleaf-server.exe C:\apps\nibleaf\deploy\\
nssm start NibleafServer
```

### Update Frontend
```powershell
cd C:\apps\nibleaf\frontend
npm install
npm run build
xcopy /E /Y dist\frontend C:\apps\nibleaf\deploy\frontend\\
```

---

## 🚨 Troubleshooting

### Service Won't Start
1. Check service logs: `nssm logs NibleafServer`
2. Check Windows Event Log
3. Try running manually: `nibleaf-server.exe`
4. Verify config file exists and is valid

### Database Connection Failed
1. Verify PostgreSQL is running
2. Check connection string in config
3. Test connection: `psql -h localhost -U nibleaf_user -d nibleaf`
4. Verify firewall allows connections

### Port Already in Use
1. Check for running service: `nssm status NibleafServer`
2. Stop existing service: `nssm stop NibleafServer`
3. Check for other processes: `netstat -ano | findstr :3000`

### Frontend Not Loading
1. Verify frontend files exist in deploy directory
2. Check browser console for errors
3. Verify static file paths in config

---

## 📚 Architecture Notes

### Deployment Model
- **Single AWS Windows machine** (no Docker)
- **In-process auth** (no GoTrue)
- **Process-local rate limiting** (appropriate for single machine)
- **Pluggable backends** (local/S3, pgvector/Qdrant, memory/Redis)

### Scaling
This deployment is designed for a single machine. For horizontal scaling:
- Use Redis backend for job queue
- Use Redis or distributed rate limiter
- Use load balancer with multiple instances
- Configure shared storage (S3)

---

## 📞 Support

For issues with deployment:
1. Check the [CODING_PROGRESS.md](../CODING_PROGRESS.md) for implementation details
2. Review the [WORKSPACE_AUDIT.md](../WORKSPACE_AUDIT.md) for architecture decisions
3. Check the [architecture documents](../../uploads/) for design decisions
