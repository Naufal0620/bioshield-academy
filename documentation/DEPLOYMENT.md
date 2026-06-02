# 🚀 Panduan Deployment (Deployment) - BioShield Academy

Website ini dirancang untuk di-deploy ke **Vercel** dengan konfigurasi minimal.

## 1. Prasyarat Deployment
*   Akun Vercel.
*   Project sudah di-push ke GitHub/GitLab/Bitbucket.

## 2. Konfigurasi Vercel
Karena aplikasi ini adalah Single Page Application (SPA) yang menggunakan `react-router-dom`, kita perlu menangani rute agar tidak menghasilkan error 404 saat halaman di-refresh.

File `vercel.json` akan ditambahkan di root folder:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

## 3. Langkah Deployment di Dashboard Vercel
1.  Klik **"New Project"**.
2.  Impor repositori `bioshield-academy`.
3.  Vercel akan otomatis mendeteksi **Vite** sebagai Framework Preset.
4.  Pastikan:
    *   **Build Command:** `npm run build`
    *   **Output Directory:** `dist`
5.  Klik **"Deploy"**.

## 4. Local Build Test
Sebelum deploy, pastikan aplikasi bisa di-build secara lokal tanpa error:
```bash
npm run build
```
Jika berhasil, folder `dist` akan tercipta.
