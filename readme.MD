
# (ON GOING) Binar FSW Challenge - Chapter 6. Penggunaan Database Management System

## Deskripsi

Repository ini ditujukan untuk melengkapi tugas yang diberikan oleh Binar berupa **Penggunaan Database Management System**

## Cara Menjalankan
1. Clone repository ini
```
git clone https://github.com/pashateuku/binar-fsw6.git
```
2. Masuk ke direktori 
```
cd binar-fsw6
```
3.  Buat file  `.env`  dengan isi sesuai contoh (lihat  `.env.example`)
4.  Install modules yang diperlukan
```
npm install
```
4.  Jalankan program
```
npm start
```
## Route

| No | Method | Path | Penjelasan |
|--|--|--|--|
| 1 |  `GET`  |  `/`  | Menampilkan halaman awal |
| 2 |  `GET`  |  `/game`  | Menampilkan game Gunting Batu Kertas |
| 3 |  `GET`  |  `/user`  | Mengambil dan menampilkan semua data user |
| 4 |  `GET`  |  `/user/:id`  | Mengambil dan menampilkan salah satu data user |
| 5 |  `GET`  |  `/login`  | Menampilkan halaman login |
| 6 |  `POST`  |  `/login`  | Melakukan validasi email dan password |