# 🏗️ Arsitektur Aplikasi (Architecture) - BioShield Academy

Dokumen ini menjelaskan struktur teknis dan organisasi komponen dalam proyek.

## 1. Struktur Folder

*   `src/context/ProgressContext.jsx`: Mengelola state progres (level mana yang sudah selesai).
*   `src/pages/`: Berisi halaman utama (Lobby) dan halaman tiap modul.
*   `src/components/`: Komponen UI yang dapat digunakan kembali.
    *   `ModuleCard.jsx`: Menampilkan kartu modul di Lobby (Status: Terkunci/Terbuka).
    *   `GameEmbed.jsx`: Container untuk iframe Wordwall.
    *   `Navigation.jsx`: Header/Navbar sederhana.
*   `src/styles/`:
    *   `variables.css`: Definisi warna neon (hijau #39FF14, kuning #FFD700).
    *   `global.css`: Reset CSS dan gaya dasar.
    *   `modules/*.module.css`: CSS Modules untuk komponen spesifik.

## 2. Komponen Utama

### App.jsx
Mengatur routing menggunakan `react-router-dom`.
Rute:
*   `/` -> `Lobby.jsx`
*   `/modul/1` -> `Modul1.jsx`
*   `/modul/2` -> `Modul2.jsx`
*   `/modul/3` -> `Modul3.jsx`

### ProgressContext.jsx
Menyediakan fungsi:
*   `completeLevel(levelId)`: Menandai level selesai.
*   `isLevelUnlocked(levelId)`: Mengecek apakah level bisa diakses.
*   `resetProgress()`: Menghapus data di localStorage.

## 3. Desain Visual (Look & Feel)
*   **Tema:** Dark Mode (Background: `#0a0a0a`).
*   **Font:** Monospace atau Sans-serif modern (Inter/Roboto).
*   **Aksen:** Border neon dan efek glow pada elemen interaktif.
