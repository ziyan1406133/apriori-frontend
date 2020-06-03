Aplikasi Kasir sederhana dengan algoritma apriori

Prerequisite :
- Koneksi internet

A. Frontend
   - Buka cmd
   - Navigasi ke folder apriori-frontend,
     contoh :
     ~ d:
     ~ cd xampp/htdocs/apriori-frontend

   - Jalankan perintah berikut :
     ~ serve -s dist 
     -- Jika perintah gagal, install node.js 
        (https://nodejs.org/en/download/)
        kemudian jalankan perintah berikut :
        ~ npm run serve

   - Sistem akan memberi tahu url webapp
     contoh : http://localhost:5000 atau http://localhost:8080

   - Akses url tersebut untuk membuka aplikasi dari browser

   - Jangan tutup cmd sampai penggunaan aplikasi selesai

B. Backend
   Backend untuk aplikasi ini telah diunggah ke webhost
   sehingga tidak memerlukan setup lagi. File yang dikirimkan
   hanya untuk keperluan review kode

Step By Step Algoritma :
http://otojuara-prototype.com/aptest/public/step-by-step

Lokasi Algoritma Apriori :
apriori-backend/app/Http/Controllers/ApriariController.php
