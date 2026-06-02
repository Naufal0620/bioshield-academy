# 🌊 Alur Sistem (System Flow) - BioShield Academy

Dokumen ini menjelaskan alur pengguna (user journey) dan logika penyimpanan progres dalam aplikasi.

## 1. Alur Pengguna (User Journey)

1.  **Entry Point (Lobby):**
    *   Mahasiswa masuk ke halaman Lobby.
    *   Sistem mengecek `localStorage` untuk melihat progres terakhir.
    *   Hanya Modul 1 yang terbuka secara default. Modul 2 dan 3 terkunci (disabled).

2.  **Pembelajaran (Modul):**
    *   Mahasiswa memilih modul yang sudah terbuka.
    *   Membaca materi visual dan ringkas.
    *   Di bagian bawah modul, terdapat tombol "Mulai Ujian" atau embed Game.

3.  **Evaluasi (Mini-Game/Quiz):**
    *   Mahasiswa memainkan game Wordwall yang di-embed.
    *   Setelah menyelesaikan game, mahasiswa mengklik tombol "Selesaikan Modul & Klaim Sertifikat/Lulus".
    *   *Catatan:* Karena Wordwall di-embed via iframe, kita menggunakan tombol manual di bawah iframe untuk men-trigger status "Lulus".

4.  **Unlock Level:**
    *   Setelah tombol "Selesai" diklik, sistem mengupdate state `completedLevels` di `ProgressContext`.
    *   Data disimpan ke `localStorage`.
    *   Mahasiswa diarahkan kembali ke Lobby, dan modul berikutnya sekarang sudah terbuka.

## 2. Logika Progres (Persistence)

Progres disimpan dalam satu key di `localStorage`:
*   **Key:** `bioshield_progress`
*   **Value:** `{"completedLevels": [1, 2]}`

| Level | Modul | Syarat Unlock |
| :--- | :--- | :--- |
| 1 | The Microbe Monsters | Terbuka Otomatis |
| 2 | The Armor | Level 1 Selesai |
| 3 | The Laws | Level 2 Selesai |

## 3. State Management
Aplikasi menggunakan **React Context API** untuk menyediakan state global `progress` ke seluruh komponen tanpa perlu passing props secara manual.
