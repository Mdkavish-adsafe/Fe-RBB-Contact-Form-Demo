# Rising Beyond Borders – Contact Form Frontend

React 19 single-page contact & advisory request interface for **Rising Beyond Borders**, featuring:
- **Tailwind CSS v4** styling
- **Cloudflare Turnstile** bot protection widget
- Comprehensive client-side form validation
- Responsive layout with desktop/mobile navigation
- Direct channels contact cards for `kavish@risingbeyondborders.org` and `+91 8983791881`

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Variables:
- `VITE_TURNSTILE_SITE_KEY`: Cloudflare Turnstile Site Key (defaults to Cloudflare's always-passing testing key `1x00000000000000000000AA` for local development).
- `VITE_API_BASE_URL`: Base URL for the backend API. Leave blank in local development to use the Vite `/api` proxy to `http://localhost:8787`.

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```
Build output is saved to the `dist/` directory.

---

## Deployment (Cloudflare Pages / Vercel / Netlify)

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Environment Variables**:
  - `VITE_TURNSTILE_SITE_KEY`: `<Your Production Turnstile Site Key>`
  - `VITE_API_BASE_URL`: `<Your Deployed Backend Worker URL>`
