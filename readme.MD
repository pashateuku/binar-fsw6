
# (On Going Project) Binar FSW Challenge - Chapter 6. Penggunaan Database Management System

## Deskripsi

Repository ini ditujukan untuk melengkapi tugas yang diberikan oleh Binar berupa **Penggunaan Database Management System**

## Cara Menjalankan

In progress

## Route

| No | Method | Path | Penjelasan |
|--|--|--|--|
| 1 |  `GET`  |  `/`  | Menampilkan halaman awal |
| 2 |  `GET`  |  `/game`  | Menampilkan game Gunting Batu Kertas |
| 5 |  `GET`  |  `/login`  | Menampilkan halaman login |
| 6 |  `POST`  |  `/login`  | Melakukan validasi email dan password |
| 7 |  `GET`  |  `/register`  | Melakukan registrasi user |
| 8 |  `POST`  |  `/register`  | Menambahkan data user dan 1 biodatanya pada database |
| 9 |  `GET`  |  `/admin`  | Menampilkan halaman login admin|
| 10 |  `POST`  |  `/register`  | Melakukan validasi email dan password admin |
| 11 |  `GET`  |  `/dashboard`  | Menampilkan halaman awal dashboard |
| 12 |  `GET`  |  `/dashboard/users`  | Menampilkan halaman dashboard dan semua data user_game |
| 13 |  `GET`  |  `/dashboard/users/:id`  | Menampilkan halaman dashboard dan semua data user_game_biodata yang dimiliki oleh salah satu user |
| 14 |  `GET`  |  `/dashboard/create`  | Menampilkan form create user pada dashboard |
| 14 |  `GET`  |  `/dashboard/create/:id`  | Menampilkan form create user's biodata pada dashboard |
| 14 |  `POST`  |  `/dashboard/create`  |  Menambahkan data user dan 1 biodatanya pada database |
| 14 |  `POST`  |  `/dashboard/create:id`  |  Menambahkan biodata user pada database |
| 14 |  `GET`  |  `/dashboard/users/update/:id`  | Menampilkan form update user pada dashboard |
| 14 |  `GET`  |  `/dashboard/users/update_bio/:id`  | Menampilkan form update biodata pada dashboard |
| 14 |  `POST`  |  `/dashboard/users/update/:id`  |  Melakukan update data user pada database |
| 14 |  `POST`  |  `/dashboard/users/update_bio/:id`  |  Melakukan update biodata user pada database |
| 14 |  `GET`  |  `/dashboard/users/delete/:id`  | Menghapus data user pada database |
| 14 |  `GET`  |  `/dashboard/users/delete_bio/:id`  | Menghapus biodata user pada database |





