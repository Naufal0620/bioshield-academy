# 🌊 Alur Sistem (System Flow) - BioShield Academy v2.0

Dokumen ini menjelaskan alur pengguna (user journey), logika penyimpanan progres, dan fitur-fitur teknis dalam BioShield Academy versi terbaru.

## 1. Alur Pengguna (User Journey)

1.  **Entry Point (Lobby):**
    *   Mahasiswa masuk ke halaman Lobby utama dengan tema *Cyber-Lab*.
    *   Sistem mengecek `localStorage` (`bioshield_progress`) untuk memuat status progres terakhir.
    *   Secara default, hanya **Modul 1** yang terbuka. Modul 2 hingga 6 terkunci hingga syarat kelulusan dipenuhi.

2.  **Fase Pembelajaran (Material Review):**
    *   Mahasiswa masuk ke modul yang telah terbuka (unlocked).
    *   Membaca materi akademik yang telah diringkas (berdasarkan referensi Said Muhammad Naufal).
    *   Untuk lanjut ke ujian, mahasiswa harus mengklik tombol **"START MODULE ASSESSMENT →"** di bagian akhir materi.

3.  **Fase Evaluasi (Final Assessment):**
    *   Mahasiswa diarahkan ke halaman kuis terpisah (`/modul/:id/quiz`).
    *   Menjawab serangkaian pertanyaan pilihan ganda dengan feedback instan (Correct/Incorrect berwarna).
    *   Sistem menghitung akurasi jawaban secara real-time.

4.  **Logika Kelulusan & Unlocking:**
    *   **Syarat Lulus:** Mahasiswa harus menjawab minimal **70%** soal dengan benar.
    *   Jika Lulus: Muncul tombol **"COMPLETE MODULE & PROCEED"**. Mengklik tombol ini akan mengupdate state global, menyimpan ke `localStorage`, dan mengarahkan kembali ke Lobby di mana modul berikutnya sekarang sudah terbuka.
    *   Jika Gagal: Mahasiswa diminta untuk melakukan **"REBOOT ASSESSMENT"** (mengulang kuis) atau kembali membaca materi.

5.  **Prosedur Purge Data:**
    *   Terdapat tombol **"PURGE_DATA"** di Lobby untuk mereset seluruh progres.
    *   Prosedur ini dilindungi oleh modal konfirmasi **SweetAlert2** untuk mencegah penghapusan tidak sengaja.

## 2. Fitur Khusus (Special Protocols)

### 🔐 Cheat Code: Bypass Access
*   Mahasiswa dapat mengetikkan kata kunci **`unlockall`** secara langsung di halaman Lobby.
*   Sistem menggunakan *Keyboard Listener* untuk mendeteksi kode tersebut.
*   Jika berhasil, seluruh 6 modul akan terbuka secara instan dan ditandai sebagai "Completed" melalui overlay konfirmasi khusus.

### 🤖 SweetAlert2 Integration
*   Seluruh dialog sistem (Alert, Konfirmasi, Sukses) menggunakan library **SweetAlert2** untuk menjamin stabilitas posisi (viewport centering) dan estetika premium.

## 3. Logika Progres (Persistence)

Progres disimpan secara lokal pada browser pengguna:
*   **Key:** `bioshield_progress`
*   **Data Structure:** `{"completedLevels": [1, 2, 3, 4, 5, 6]}`

### Matriks Kurikulum:
| Level | Judul Modul | Syarat Unlock |
| :--- | :--- | :--- |
| 1 | Foundations of Bioregulation | Terbuka Otomatis |
| 2 | Biosafety Concepts & Philosophy | Level 1 Selesai |
| 3 | The Microbe Monsters (BSL 1-4) | Level 2 Selesai |
| 4 | Containment & PPE Armor | Level 3 Selesai |
| 5 | Regulatory Frameworks (PP 21/2005) | Level 4 Selesai |
| 6 | The Future: AI & CRISPR Risks | Level 5 Selesai |

## 4. Arsitektur State
*   **State Provider:** `ProgressProvider` (Context API).
*   **Global Actions:** `completeLevel(id)`, `isLevelUnlocked(id)`, `resetProgress()`, `unlockAllLevels()`.
*   **Animations:** Menggunakan `animations.css` dengan *cubic-bezier* transisi untuk pengalaman UI yang halus dan organik.
