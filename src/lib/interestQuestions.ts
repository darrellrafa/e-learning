// Bank Soal Interest-Based (Progressive Difficulty)
// Floor 1: Node 1-8 (Boss di Node 4 dan 8)
// Setiap Node memiliki minimal 7 soal, sistem akan mengambil 5 secara acak

export interface InterestQuestion {
  text: string;
  options: string[];
  correct: number; // index of correct answer in options array
}

type QuestionBank = Record<number, InterestQuestion[]>;

// ==========================================
// COMPUTER INTEREST — Floor 1 (Node 1-8)
// ==========================================
export const computerQuestions: QuestionBank = {
  // Node 1: Mengenal Perangkat Keras Dasar
  1: [
    { text: 'Alat untuk mengetik huruf di komputer?', options: ['Keyboard', 'Mouse', 'Speaker'], correct: 0 },
    { text: 'Layar komputer untuk melihat gambar disebut?', options: ['Printer', 'Monitor', 'CPU'], correct: 1 },
    { text: 'Alat yang digeser dan diklik di atas meja?', options: ['Headset', 'Keyboard', 'Mouse'], correct: 2 },
    { text: 'Alat untuk mencetak dokumen ke kertas?', options: ['Printer', 'Scanner', 'Mouse'], correct: 0 },
    { text: 'Suara dari komputer keluar melalui?', options: ['Monitor', 'Speaker', 'Keyboard'], correct: 1 },
    { text: 'Alat untuk mendengar suara sendiri di komputer?', options: ['Mic', 'Speaker', 'Headset'], correct: 2 },
    { text: 'Webcam digunakan untuk?', options: ['Mengetik', 'Merekam video', 'Mencetak'], correct: 1 },
  ],

  // Node 2: Mengenal Perangkat Lunak Dasar
  2: [
    { text: 'Untuk menulis cerita di komputer, pakai aplikasi?', options: ['Microsoft Word', 'Paint', 'Calculator'], correct: 0 },
    { text: 'Untuk menggambar di komputer, pakai?', options: ['Notepad', 'Paint', 'Excel'], correct: 1 },
    { text: 'Untuk menghitung angka di komputer, pakai?', options: ['Word', 'Paint', 'Calculator'], correct: 2 },
    { text: 'Browser digunakan untuk?', options: ['Menggambar', 'Membuka internet', 'Mencetak'], correct: 1 },
    { text: 'Contoh browser internet adalah?', options: ['Chrome', 'Word', 'Paint'], correct: 0 },
    { text: 'Aplikasi untuk membuat presentasi?', options: ['Excel', 'Paint', 'PowerPoint'], correct: 2 },
    { text: 'Tombol "Save" berguna untuk?', options: ['Menghapus file', 'Menyimpan file', 'Membuka file'], correct: 1 },
  ],

  // Node 3: Internet & Komunikasi
  3: [
    { text: 'Internet berguna untuk?', options: ['Memasak', 'Mencari informasi', 'Tidur'], correct: 1 },
    { text: 'Email digunakan untuk?', options: ['Mengirim surat digital', 'Bermain game', 'Menggambar'], correct: 0 },
    { text: 'Tanda "@" biasa ditemukan di?', options: ['Nomor telepon', 'Alamat email', 'Alamat rumah'], correct: 1 },
    { text: 'WiFi digunakan untuk?', options: ['Memasak', 'Menyalakan lampu', 'Menghubungkan ke internet'], correct: 2 },
    { text: 'YouTube adalah tempat untuk?', options: ['Menonton video', 'Menulis surat', 'Menghitung'], correct: 0 },
    { text: 'Video call artinya?', options: ['Telepon dengan gambar', 'Mengirim email', 'Mencetak foto'], correct: 0 },
    { text: 'Google digunakan untuk?', options: ['Mencetak kertas', 'Mencari di internet', 'Menulis surat'], correct: 1 },
  ],

  // Node 4 (BOSS): Campuran Perangkat & Internet
  4: [
    { text: 'Disimpan dimana file yang sudah di-save?', options: ['Di internet', 'Di penyimpanan komputer', 'Di printer'], correct: 1 },
    { text: 'Ctrl + C pada keyboard berfungsi untuk?', options: ['Menghapus', 'Menyalin / Copy', 'Menyimpan'], correct: 1 },
    { text: 'Apa yang terjadi jika komputer tidak ada listrik?', options: ['Tetap menyala', 'Mati', 'Semakin cepat'], correct: 1 },
    { text: 'USB Flash Drive disebut juga?', options: ['Flashdisk', 'Hardisk', 'Monitor'], correct: 0 },
    { text: 'Mana yang BUKAN perangkat keras komputer?', options: ['Mouse', 'Keyboard', 'Microsoft Word'], correct: 2 },
    { text: 'Website yang aman biasanya diawali dengan?', options: ['http://', 'https://', 'ftp://'], correct: 1 },
    { text: 'Apa fungsi tombol "Delete" di keyboard?', options: ['Menyimpan', 'Menghapus', 'Mencetak'], correct: 1 },
  ],

  // Node 5: Jenis-jenis Komputer & Gadget
  5: [
    { text: 'Komputer yang bisa dibawa kemana-mana disebut?', options: ['Desktop', 'Laptop', 'Server'], correct: 1 },
    { text: 'Tablet adalah komputer yang dioperasikan dengan?', options: ['Keyboard fisik', 'Layar sentuh', 'Mouse'], correct: 1 },
    { text: 'Smartwatch adalah jam yang bisa?', options: ['Terbang', 'Terhubung ke internet', 'Memasak'], correct: 1 },
    { text: 'Smartphone adalah gabungan dari?', options: ['Telepon dan komputer', 'TV dan radio', 'Printer dan scanner'], correct: 0 },
    { text: 'Console gaming digunakan untuk?', options: ['Memasak', 'Bermain video game', 'Menulis email'], correct: 1 },
    { text: 'Komputer besar yang melayani banyak pengguna disebut?', options: ['Laptop', 'Tablet', 'Server'], correct: 2 },
    { text: 'VR Headset digunakan untuk?', options: ['Membaca buku', 'Melihat dunia virtual', 'Menulis kode'], correct: 1 },
  ],

  // Node 6: Keamanan & Etika Digital
  6: [
    { text: 'Password sebaiknya?', options: ['Dibagikan ke semua teman', 'Disimpan rahasia', 'Ditulis di kertas'], correct: 1 },
    { text: 'Jika ada orang asing minta data pribadi online, sebaiknya?', options: ['Berikan saja', 'Laporkan ke orang tua', 'Abaikan dan blokir'], correct: 2 },
    { text: 'Virus komputer bisa menyebar melalui?', options: ['File yang diunduh', 'Layar monitor', 'Speaker'], correct: 0 },
    { text: 'Antivirus berguna untuk?', options: ['Mempercepat internet', 'Melindungi dari virus', 'Menggambar'], correct: 1 },
    { text: 'Cyberbullying artinya?', options: ['Bermain game', 'Mengejek orang di internet', 'Belajar online'], correct: 1 },
    { text: 'Informasi pribadi yang TIDAK boleh dibagikan online?', options: ['Warna kesukaan', 'Alamat rumah', 'Hobby'], correct: 1 },
    { text: 'Spam email sebaiknya?', options: ['Dibuka semua', 'Dibalas', 'Dihapus / diabaikan'], correct: 2 },
  ],

  // Node 7: Dasar-dasar Coding & Logika
  7: [
    { text: 'Coding artinya?', options: ['Menulis instruksi untuk komputer', 'Menggambar', 'Bermain game'], correct: 0 },
    { text: 'Bahasa pemrograman yang mudah untuk anak-anak?', options: ['Scratch', 'C++', 'Assembly'], correct: 0 },
    { text: 'Bug dalam pemrograman artinya?', options: ['Serangga', 'Kesalahan dalam kode', 'Virus'], correct: 1 },
    { text: 'Apa hasil dari logika: "Jika hujan, bawa payung"?', options: ['Selalu bawa payung', 'Bawa payung saat hujan saja', 'Tidak pernah bawa payung'], correct: 1 },
    { text: 'Robot digerakkan oleh?', options: ['Sihir', 'Program / kode', 'Angin'], correct: 1 },
    { text: 'Loop dalam coding artinya?', options: ['Berhenti selamanya', 'Mengulang perintah', 'Menghapus file'], correct: 1 },
    { text: 'Algoritma adalah?', options: ['Jenis komputer', 'Langkah-langkah menyelesaikan masalah', 'Nama aplikasi'], correct: 1 },
  ],

  // Node 8 (BOSS): Campuran Semua Materi Floor 1
  8: [
    { text: 'Mana yang termasuk perangkat INPUT?', options: ['Monitor', 'Speaker', 'Keyboard'], correct: 2 },
    { text: 'Apa singkatan dari CPU?', options: ['Central Processing Unit', 'Computer Personal Use', 'Central Power Unit'], correct: 0 },
    { text: 'Manakah yang merupakan sistem operasi?', options: ['Windows', 'Google', 'YouTube'], correct: 0 },
    { text: 'RAM pada komputer berfungsi untuk?', options: ['Menyimpan data sementara', 'Mencetak dokumen', 'Menampilkan gambar'], correct: 0 },
    { text: 'Coding "print(Hello)" akan menghasilkan?', options: ['Mencetak kertas', 'Menampilkan tulisan Hello di layar', 'Menghapus file Hello'], correct: 1 },
    { text: 'Berapa byte dalam 1 Kilobyte?', options: ['100', '1024', '500'], correct: 1 },
    { text: 'Apa kepanjangan dari HTML?', options: ['HyperText Markup Language', 'High Tech Modern Language', 'Home Tool Making Language'], correct: 0 },
  ],

  // ================= FLOOR 2 (Node 9-16) =================
  9: [
    { text: 'Sistem Operasi untuk Apple Mac disebut?', options: ['Windows', 'macOS', 'Linux'], correct: 1 },
    { text: 'Sistem Operasi open source berlogo penguin?', options: ['Linux', 'Windows', 'Android'], correct: 0 },
    { text: 'Bagian alamat web ".com" singkatan dari?', options: ['Community', 'Commercial', 'Computer'], correct: 1 },
    { text: 'Apa fungsi utama RAM?', options: ['Menyimpan data permanen', 'Menyimpan data sementara', 'Mendinginkan CPU'], correct: 1 },
    { text: 'Sistem penamaan alamat website disebut?', options: ['URL', 'USB', 'UFO'], correct: 0 },
  ],
  10: [
    { text: 'Basa pemrograman utama untuk web interaktif?', options: ['Java', 'JavaScript', 'C++'], correct: 1 },
    { text: 'Tag HTML untuk paragraf adalah?', options: ['<p>', '<br>', '<h1>'], correct: 0 },
    { text: 'Untuk mengatur gaya web (warna, tata letak), digunakan?', options: ['HTML', 'CSS', 'PHP'], correct: 1 },
    { text: 'MySQL adalah salah satu bentuk dari?', options: ['Sistem Operasi', 'Database', 'Browser'], correct: 1 },
    { text: 'Framework CSS yang terkenal adalah?', options: ['Tailwind', 'React', 'Node'], correct: 0 },
  ],
  11: [
    { text: 'Komponen utama jaringan nirkabel?', options: ['Kabel LAN', 'Router / Access Point', 'Monitor'], correct: 1 },
    { text: 'Alat pengubah sinyal digital ke analog?', options: ['Modem', 'Switch', 'Hub'], correct: 0 },
    { text: 'Apa itu Ping?', options: ['Cek kecepatan prosesor', 'Cek koneksi jaringan', 'Menghapus file'], correct: 1 },
    { text: 'Protokol transfer hypertext aman?', options: ['HTTP', 'HTTPS', 'FTP'], correct: 1 },
    { text: 'Penyimpanan data di server internet disebut?', options: ['Cloud storage', 'Harddisk', 'Flashdisk'], correct: 0 },
  ],
  12: [
    { text: 'Teknik mengaburkan data agar aman disebut?', options: ['Enkripsi', 'Kompresi', 'Ekstraksi'], correct: 0 },
    { text: 'Hacker yang bekerja untuk tujuan baik disebut?', options: ['Black Hat', 'White Hat', 'Grey Hat'], correct: 1 },
    { text: 'Serangan memanipulasi orang (contoh: tipuan telepon) disebut?', options: ['Phishing', 'Social Engineering', 'Malware'], correct: 1 },
    { text: 'Software berbahaya disebut?', options: ['Freeware', 'Malware', 'Software'], correct: 1 },
    { text: 'Pencurian data dengan membuat web palsu disebut?', options: ['Phishing', 'Carding', 'DDoS'], correct: 0 },
  ],
  13: [
    { text: 'Kecerdasan buatan disebut dengan singkatan?', options: ['VR', 'AI', 'AR'], correct: 1 },
    { text: 'Teknologi AI dari OpenAI yang bisa diajak mengobrol?', options: ['Siri', 'Alexa', 'ChatGPT'], correct: 2 },
    { text: 'Bagian AI yang belajar dari data disebut?', options: ['Machine Learning', 'Data Mining', 'Big Data'], correct: 0 },
    { text: 'AI untuk mengenali wajah di foto disebut?', options: ['Speech Recognition', 'Computer Vision', 'NLP'], correct: 1 },
    { text: 'Contoh penerapan AI sehari-hari?', options: ['Keyboard mekanik', 'Rekomendasi YouTube', 'Kabel USB'], correct: 1 },
  ],
  14: [
    { text: 'Pemrograman berorientasi objek disingkat?', options: ['OOP', 'API', 'UI'], correct: 0 },
    { text: 'Tempat programmer menyimpan kode secara kolaboratif?', options: ['Google Drive', 'GitHub', 'Dropbox'], correct: 1 },
    { text: 'Menemukan dan memperbaiki error kode disebut?', options: ['Deploying', 'Debugging', 'Compiling'], correct: 1 },
    { text: 'Penulisan logika True atau False disebut tipe data?', options: ['String', 'Integer', 'Boolean'], correct: 2 },
    { text: 'Struktur data dengan kunci dan nilai (key-value)?', options: ['Array', 'Dictionary', 'String'], correct: 1 },
  ],
  15: [
    { text: 'Uang digital yang aman karena kriptografi?', options: ['E-money', 'Cryptocurrency', 'Kartu Kredit'], correct: 1 },
    { text: 'Teknologi di balik Bitcoin adalah?', options: ['Cloud', 'Blockchain', 'AI'], correct: 1 },
    { text: 'Realitas virtual menggunakan alat bernama?', options: ['Mouse', 'VR Headset', 'Webcam'], correct: 1 },
    { text: 'Augmented Reality (AR) berarti?', options: ['Dunia palsu total', 'Objek digital di dunia nyata', 'Dunia fantasi film'], correct: 1 },
    { text: 'Game AR yang terkenal mencari monster nyata?', options: ['PUBG', 'Pokemon GO', 'Minecraft'], correct: 1 },
  ],
  16: [
    { text: 'Apa itu IoT (Internet of Things)?', options: ['Alat biasa yang terkoneksi internet', 'Internet luar angkasa', 'Komputer gaming super'], correct: 0 },
    { text: 'Mana perangkat keras tercepat untuk simpan OS?', options: ['SSD', 'HDD', 'Flashdisk'], correct: 0 },
    { text: 'Port display modern selain HDMI?', options: ['VGA', 'DisplayPort', 'USB-A'], correct: 1 },
    { text: 'Jaringan super cepat terbaru setelah 4G?', options: ['3G', '5G', 'WiFi 6'], correct: 1 },
    { text: 'Aplikasi penghubung backend dan frontend disebut?', options: ['OS', 'API', 'SQL'], correct: 1 },
  ],

  // ================= FLOOR 3 (Node 17-24) =================
  17: [
    { text: 'Bahasa pemrograman paling populer untuk Data Science?', options: ['Java', 'PHP', 'Python'], correct: 2 },
    { text: 'Apa kepanjangan dari SQL?', options: ['System Query Language', 'Structured Query Language', 'Simple Question Logic'], correct: 1 },
    { text: 'Database yang tidak menggunakan struktur tabel (NoSQL)?', options: ['MySQL', 'PostgreSQL', 'MongoDB'], correct: 2 },
    { text: 'Tipe data untuk angka dengan desimal disebut?', options: ['Integer', 'Float', 'String'], correct: 1 },
    { text: 'Simbol komentar 1 baris di JavaScript?', options: ['//', '<!--', '#'], correct: 0 },
  ],
  18: [
    { text: 'Apa itu DDoS attack?', options: ['Menjebol password', 'Membanjiri server dengan traffic fiktif', 'Mengirim email palsu'], correct: 1 },
    { text: 'Apa itu Ransomware?', options: ['Virus pencuri password', 'Virus yang menyandera data dan minta tebusan', 'Virus pembuat iklan'], correct: 1 },
    { text: 'Kepanjangan dari VPN adalah?', options: ['Virtual Private Network', 'Versatile Public Network', 'Visual Proxy Name'], correct: 0 },
    { text: 'Protokol keamanan koneksi web modern disebut?', options: ['SSL/TLS', 'WPA', 'HTTP'], correct: 0 },
    { text: 'Bypass keamanan menggunakan kelemahan manusia disebut?', options: ['Brute Force', 'Social Engineering', 'SQL Injection'], correct: 1 },
  ],
  19: [
    { text: 'Perusahaan raksasa Cloud terbesar (AWS) dimiliki?', options: ['Google', 'Microsoft', 'Amazon'], correct: 2 },
    { text: 'Layanan Cloud Microsoft disebut?', options: ['Azure', 'GCP', 'AWS'], correct: 0 },
    { text: 'IaaS singkatan dari?', options: ['Internet as a Service', 'Infrastructure as a Service', 'Item as a Service'], correct: 1 },
    { text: 'Skalabilitas (Scalability) dalam server berarti?', options: ['Kemampuan di-hack', 'Kemampuan menangani lonjakan beban', 'Kemampuan desain UI'], correct: 1 },
    { text: 'Alat populer pembungkus aplikasi (Containerization)?', options: ['Docker', 'Windows', 'Android'], correct: 0 },
  ],
  20: [
    { text: 'Bagian RAM komputer yang berfungsi menyimpan grafis?', options: ['VRAM', 'SRAM', 'DRAM'], correct: 0 },
    { text: 'Prosesor dengan inti arsitektur mikro ARM banyak dijumpai di?', options: ['PC Gaming', 'Smartphone', 'Server Database'], correct: 1 },
    { text: 'Kecepatan layar (Refresh Rate) diukur dalam satuan?', options: ['MHz', 'Hz', 'RPM'], correct: 1 },
    { text: 'Komponen pendingin prosesor cair disebut?', options: ['Heatsink', 'Liquid Cooling', 'Thermal Paste'], correct: 1 },
    { text: 'Apa yang mengontrol seluruh komunikasi dari/ke CPU?', options: ['Motherboard / Chipset', 'Powersupply', 'Casing'], correct: 0 },
  ],
  21: [
    { text: 'NLP dalam AI berkaitan dengan?', options: ['Mengenali gambar mobil', 'Memahami teks dan bahasa manusia', 'Bermain catur'], correct: 1 },
    { text: 'Keluarga jaringan saraf tiruan dinamakan?', options: ['Neural Network', 'Biological Network', 'Social Network'], correct: 0 },
    { text: 'Model AI pembuat gambar dari teks yang terkenal?', options: ['Midjourney / DALL-E', 'Google Docs', 'Spotify'], correct: 0 },
    { text: 'AI yang bisa lolos sebagai manusia diuji dengan?', options: ['Turing Test', 'IQ Test', 'TOEFL Test'], correct: 0 },
    { text: 'Robot otonom seperti Tesla menggunakan AI di bidang?', options: ['Web Dev', 'Self-Driving / Computer Vision', 'Data Entry'], correct: 1 },
  ],
  22: [
    { text: 'Tahap mencari konsep dan tampilan UI sebelum coding?', options: ['Deployment', 'Prototyping / Wireframing', 'Server Setup'], correct: 1 },
    { text: 'Perbedaan UX dan UI?', options: ['UX itu bentuk, UI itu pengalaman', 'UX itu pengalaman, UI itu tampilan visual', 'Sama saja'], correct: 1 },
    { text: 'Agile dalam software development adalah metodologi?', options: ['Lambat dan pasti', 'Kaku', 'Cepat, fleksibel, berulang'], correct: 2 },
    { text: 'Bekerja bagi tampilan aplikasi ke pengguna adalah?', options: ['Frontend', 'Backend', 'Database'], correct: 0 },
    { text: 'Sistem pengontrol versi kode terbaik selain Git/SVN?', options: ['Mercurial', 'GitHub', 'Google Drive'], correct: 0 }, // Git is most popular, Mercurial is an alternative
  ],
  23: [
    { text: 'Tanda baca titik dua ganda (::) di C++ disebut?', options: ['Scope Resolution', 'Comments', 'Pointer'], correct: 0 },
    { text: 'Tipe data angka heksadesimal berbasis?', options: ['10', '2', '16'], correct: 2 },
    { text: '1 Byte terdiri dari berapa Bit?', options: ['4', '8', '16'], correct: 1 },
    { text: 'Operasi logika jika kedua input Benar, maka hasil Benar disebut?', options: ['OR', 'NOT', 'AND'], correct: 2 },
    { text: 'Fungsi yang memanggil dirinya sendiri disebut?', options: ['Iteratif', 'Rekursif', 'Looping'], correct: 1 },
  ],
  24: [
    { text: 'Komputer Kuantum menggunakan unit dasar berupa?', options: ['Bit', 'Byte', 'Qubit'], correct: 2 },
    { text: 'Apa itu Zero-Day Exploit?', options: ['Serangan di malam hari', 'Serangan dari kerentanan yang belum ditambal developer', 'Serangan menghapus data total'], correct: 1 },
    { text: 'Algoritma pencarian tercepat (Log N) adalah?', options: ['Linear Search', 'Binary Search', 'Bubble Sort'], correct: 1 },
    { text: 'Sistem operasi pesawat ruang angkasa Mars Rover?', options: ['Windows 10', 'VxWorks (Linux-based)', 'macOS'], correct: 1 },
    { text: 'Komponen silikon mikroskopis dasar di dalam CPU?', options: ['Transistor', 'Resistor', 'Kapasitor'], correct: 0 },
  ],
};

// ==========================================
// SPORT INTEREST — Floor 1 (Node 1-8)
// ==========================================
export const sportQuestions: QuestionBank = {
  // Node 1: Mengenal Olahraga Dasar
  1: [
    { text: 'Olahraga menendang bola ke gawang disebut?', options: ['Sepak Bola', 'Basket', 'Tenis'], correct: 0 },
    { text: 'Olahraga di air disebut?', options: ['Lari', 'Berenang', 'Bersepeda'], correct: 1 },
    { text: 'Olahraga lari jarak pendek disebut?', options: ['Maraton', 'Sprint', 'Jogging'], correct: 1 },
    { text: 'Bulu tangkis menggunakan alat?', options: ['Raket', 'Tongkat', 'Sarung tangan'], correct: 0 },
    { text: 'Bola basket dimasukkan ke?', options: ['Gawang', 'Ring', 'Jaring'], correct: 1 },
    { text: 'Olahraga memukul bola kecil dengan tongkat?', options: ['Golf', 'Renang', 'Lari'], correct: 0 },
    { text: 'Olahraga bela diri dari Jepang?', options: ['Karate', 'Tinju', 'Gulat'], correct: 0 },
  ],

  // Node 2: Peralatan Olahraga
  2: [
    { text: 'Sarung tangan tinju disebut?', options: ['Helm', 'Gloves', 'Sepatu'], correct: 1 },
    { text: 'Shuttlecock digunakan dalam olahraga?', options: ['Tenis', 'Bulu Tangkis', 'Basket'], correct: 1 },
    { text: 'Gawang terdapat dalam olahraga?', options: ['Basket', 'Voli', 'Sepak Bola'], correct: 2 },
    { text: 'Kacamata renang disebut juga?', options: ['Goggles', 'Helmet', 'Gloves'], correct: 0 },
    { text: 'Net / jaring digunakan dalam olahraga?', options: ['Lari', 'Voli', 'Senam'], correct: 1 },
    { text: 'Sepatu khusus untuk berlari disebut?', options: ['Boots', 'Running shoes', 'Sandal'], correct: 1 },
    { text: 'Cone / kerucut digunakan untuk?', options: ['Latihan dribbling', 'Berenang', 'Memanah'], correct: 0 },
  ],

  // Node 3: Aturan Dasar Olahraga
  3: [
    { text: 'Dalam sepak bola, berapa pemain per tim?', options: ['9', '11', '7'], correct: 1 },
    { text: 'Kartu merah dalam sepak bola artinya?', options: ['Gol', 'Dikeluarkan dari pertandingan', 'Pemanasan'], correct: 1 },
    { text: 'Offside dalam sepak bola adalah?', options: ['Posisi pemain di belakang bek lawan', 'Tendangan bebas', 'Pergantian pemain'], correct: 0 },
    { text: 'Set poin dalam bulu tangkis berapa?', options: ['15', '21', '25'], correct: 1 },
    { text: 'Traveling dalam basket artinya?', options: ['Berjalan membawa bola tanpa dribble', 'Melempar bola tinggi', 'Memasukkan bola ke ring'], correct: 0 },
    { text: 'Dalam voli, satu tim boleh memukul bola maksimal?', options: ['2 kali', '3 kali', '5 kali'], correct: 1 },
    { text: 'Wasit menggunakan peluit untuk?', options: ['Bernyanyi', 'Memberi tanda / sinyal', 'Memanggil penonton'], correct: 1 },
  ],

  // Node 4 (BOSS): Campuran Olahraga Dasar
  4: [
    { text: 'Olimpiade diadakan setiap berapa tahun?', options: ['2 tahun', '4 tahun', '5 tahun'], correct: 1 },
    { text: 'Olahraga apa yang menggunakan raket dan net?', options: ['Renang', 'Bulu Tangkis', 'Lari'], correct: 1 },
    { text: 'Berapa lama waktu dalam 1 babak sepak bola?', options: ['30 menit', '45 menit', '60 menit'], correct: 1 },
    { text: 'Penalty kick ditendang dari jarak?', options: ['6 meter', '12 meter', '18 meter'], correct: 1 },
    { text: 'Kolam renang standar olimpiade panjangnya?', options: ['25 meter', '50 meter', '100 meter'], correct: 1 },
    { text: 'Bola yang dipakai dalam tenis meja berwarna?', options: ['Merah', 'Hijau', 'Putih / Oranye'], correct: 2 },
    { text: 'Freestyle dalam renang artinya gaya?', options: ['Bebas', 'Punggung', 'Kupu-kupu'], correct: 0 },
  ],

  // Node 5: Cabang Olahraga Dunia
  5: [
    { text: 'Olahraga nasional Indonesia adalah?', options: ['Sepak Bola', 'Pencak Silat', 'Bulu Tangkis'], correct: 1 },
    { text: 'Baseball sangat populer di negara?', options: ['Indonesia', 'Amerika & Jepang', 'India'], correct: 1 },
    { text: 'Cricket populer di negara?', options: ['Brasil', 'India & Inggris', 'Jerman'], correct: 1 },
    { text: 'Piala Dunia FIFA untuk olahraga?', options: ['Basket', 'Sepak Bola', 'Tenis'], correct: 1 },
    { text: 'Wimbledon adalah turnamen terkenal untuk?', options: ['Tenis', 'Golf', 'Renang'], correct: 0 },
    { text: 'Sumo adalah olahraga tradisional dari?', options: ['China', 'Jepang', 'Korea'], correct: 1 },
    { text: 'NBA adalah liga profesional untuk?', options: ['Sepak Bola', 'Tenis', 'Basket'], correct: 2 },
  ],

  // Node 6: Kesehatan & Kebugaran
  6: [
    { text: 'Pemanasan sebelum olahraga berguna untuk?', options: ['Menurunkan badan', 'Mencegah cedera', 'Menambah kecepatan'], correct: 1 },
    { text: 'Setelah olahraga sebaiknya?', options: ['Langsung tidur', 'Minum air dan istirahat', 'Makan banyak gorengan'], correct: 1 },
    { text: 'Berapa lama minimal olahraga per hari?', options: ['5 menit', '30 menit', '3 jam'], correct: 1 },
    { text: 'Dehidrasi artinya tubuh kekurangan?', options: ['Udara', 'Air', 'Makanan'], correct: 1 },
    { text: 'Stretching artinya?', options: ['Berlari cepat', 'Peregangan otot', 'Melompat tinggi'], correct: 1 },
    { text: 'Olahraga yang baik untuk jantung disebut?', options: ['Kardio', 'Angkat besi', 'Catur'], correct: 0 },
    { text: 'Tidur yang cukup untuk anak-anak adalah?', options: ['4-5 jam', '8-10 jam', '12-14 jam'], correct: 1 },
  ],

  // Node 7: Tokoh & Sejarah Olahraga
  7: [
    { text: 'Lionel Messi terkenal dalam olahraga?', options: ['Basket', 'Sepak Bola', 'Tenis'], correct: 1 },
    { text: 'Michael Jordan terkenal dalam olahraga?', options: ['Basket', 'Renang', 'Golf'], correct: 0 },
    { text: 'Usain Bolt adalah pelari tercepat di nomor?', options: ['Maraton', '100 meter', '400 meter'], correct: 1 },
    { text: 'Olimpiade modern pertama diadakan di kota?', options: ['London', 'Athena', 'Paris'], correct: 1 },
    { text: 'Susi Susanti adalah legenda Indonesia di olahraga?', options: ['Renang', 'Bulu Tangkis', 'Senam'], correct: 1 },
    { text: 'Piala Thomas adalah kejuaraan dunia untuk?', options: ['Bulu Tangkis Putra', 'Sepak Bola', 'Tenis'], correct: 0 },
    { text: 'Cristiano Ronaldo berasal dari negara?', options: ['Brasil', 'Spanyol', 'Portugal'], correct: 2 },
  ],

  // Node 8 (BOSS): Campuran Semua Materi Floor 1
  8: [
    { text: 'Berapa jumlah ring basket dalam satu lapangan?', options: ['1', '2', '4'], correct: 1 },
    { text: 'Tendangan sudut dalam sepak bola disebut?', options: ['Penalty', 'Corner kick', 'Free kick'], correct: 1 },
    { text: 'Lintasan lari di stadion berbentuk?', options: ['Kotak', 'Oval', 'Segitiga'], correct: 1 },
    { text: 'Deuce dalam tenis artinya skor?', options: ['30-30', '40-40', '15-15'], correct: 1 },
    { text: 'Hat-trick artinya mencetak gol sebanyak?', options: ['2 gol', '3 gol', '5 gol'], correct: 1 },
    { text: 'Olahraga triathlon terdiri dari?', options: ['Renang, Sepeda, Lari', 'Lari, Loncat, Lempar', 'Renang, Senam, Tenis'], correct: 0 },
    { text: 'Shuttle run adalah latihan untuk meningkatkan?', options: ['Kekuatan', 'Kelincahan', 'Kelenturan'], correct: 1 },
  ],

  // ================= FLOOR 2 (Node 9-16) =================
  9: [
    { text: 'Cabang atletik lompat jauh, atlet harus mendarat di?', options: ['Matras', 'Bak pasir', 'Kolam air'], correct: 1 },
    { text: 'Gaya lompat tinggi dengan punggung menghadap palang disebut?', options: ['Straddle', 'Fosbury Flop', 'Bebas'], correct: 1 },
    { text: 'Tolak peluru menggunakan bola berat dari bahan?', options: ['Karet', 'Kayu', 'Logam / Besi'], correct: 2 },
    { text: 'Lari estafet tongkat diserahkan di zona sepanjang?', options: ['10 meter', '20 meter', '30 meter'], correct: 1 },
    { text: 'Gaya renang dada disebut juga gaya?', options: ['Katak', 'Lumba-lumba', 'Anjing'], correct: 0 },
  ],
  10: [
    { text: 'Senam yang membutuhkan alat bantu seperti pita/bola disebut?', options: ['Senam Ritmik', 'Senam Aerobik', 'Yoga'], correct: 0 },
    { text: 'Sikap tubuh berdiri terbalik dengan kepala di bawah?', options: ['Handstand', 'Roll depan', 'Headstand'], correct: 2 },
    { text: 'Gerakan loncat harimau diakhiri dengan posisi?', options: ['Tidur', 'Telentang', 'Berdiri / Jongkok'], correct: 2 },
    { text: 'Induk organisasi senam dunia adalah?', options: ['FIFA', 'FIG', 'FIBA'], correct: 1 },
    { text: 'Alat papan pantul di senam lantai disebut?', options: ['Matras', 'Springboard', 'Kuda-kuda pelana'], correct: 1 },
  ],
  11: [
    { text: 'Olahraga tinju dibagi menjadi ronde selama?', options: ['3 Menit', '5 Menit', '10 Menit'], correct: 0 },
    { text: 'Knockout (KO) terjadi jika petinju jatuh dan hitungan sampai?', options: ['5', '10', '15'], correct: 1 },
    { text: 'Posisi bertahan dengan menyilangkan tangan di depan wajah?', options: ['Jab', 'Hook', 'Guard'], correct: 2 },
    { text: 'Pukulan tinju mengayun dari bawah ke atas dagu disebut?', options: ['Uppercut', 'Jab', 'Cross'], correct: 0 },
    { text: 'Wasit di olahraga gulat bertugas untuk?', options: ['Melatih', 'Menilai kuncian', 'Memukul'], correct: 1 },
  ],
  12: [
    { text: 'Formasi taktik bola 4-3-3 berarti menggunakan berapa striker?', options: ['2', '3', '4'], correct: 1 },
    { text: 'Teknik "Tiki-Taka" dalam sepak bola berfokus pada?', options: ['Langsung menyeberang', 'Umpan pendek cepat', 'Bertahan total'], correct: 1 },
    { text: 'Kick-off tenis meja, bola harus dipukul dan memantul di?', options: ['Meja sendiri lalu meja kawan', 'Meja sendiri lalu meja lawan', 'Langsung meja lawan'], correct: 1 },
    { text: 'Jumping smash dalam bulu tangkis digunakan untuk?', options: ['Bertahan', 'Menyerang keras', 'Menipu lawan'], correct: 1 },
    { text: 'Serangan umpan tinggi (Lob) di tenis bertujuan untuk?', options: ['Cepat mati', 'Melewati pemain yang maju ke depan net', 'Pemanasan'], correct: 1 },
  ],
  13: [
    { text: 'Olimpiade Musim Dingin memiliki olahraga?', options: ['Renang', 'Ski Salju', 'Lari 100m'], correct: 1 },
    { text: 'Induk organisasi sepak bola Indonesia?', options: ['PSSI', 'PBSI', 'PRSI'], correct: 0 },
    { text: 'Medali olimpiade tertinggi terbuat dari?', options: ['Emas', 'Perak', 'Perunggu'], correct: 0 },
    { text: 'Bela diri asal Korea yang mengandalkan tendangan?', options: ['Karate', 'Taekwondo', 'Wushu'], correct: 1 },
    { text: 'Moto Olimpiade "Citius, Altius, Fortius" berarti?', options: ['Lebih Lemah, Pendek, Kecil', 'Lebih Cepat, Tinggi, Kuat', 'Lebih Lari, Loncat, Jauh'], correct: 1 },
  ],
  14: [
    { text: 'Di dalam basket, waktu shot clock untuk melakukan tembakan adalah?', options: ['12 detik', '24 detik', '60 detik'], correct: 1 },
    { text: 'Angka dari tembakan luar garis lengkung basket (Three-point line) bernilai?', options: ['2', '3', '4'], correct: 1 },
    { text: 'Free-throw di basket bernilai berapa poin?', options: ['1 poin', '2 poin', '3 poin'], correct: 0 },
    { text: 'Teknik merebut bola pantul (tidak masuk) disebut?', options: ['Layup', 'Rebound', 'Slam Dunk'], correct: 1 },
    { text: 'Berapa jumlah wasit utama dalam pertandingan resmi basket?', options: ['1', '3', '5'], correct: 1 },
  ],
  15: [
    { text: 'Jalur Formula 1 disebut juga dengan istilah?', options: ['Lintasan lari', 'Sirkuit', 'Jalan Tol'], correct: 1 },
    { text: 'Di dalam balap sepeda, rombongan pesepeda disebut?', options: ['Peoton', 'Peloton', 'Squad'], correct: 1 },
    { text: 'Balap mobil di jalan off-road dengan rute tertentu disebut?', options: ['NASCAR', 'Reli (Rally)', 'Formula E'], correct: 1 },
    { text: 'Motor balap terkenal dunia adalah ajang?', options: ['Tour de France', 'MotoGP', 'Wimbledon'], correct: 1 },
    { text: 'Pit Stop adalah tempat kendaraan balap untuk?', options: ['Mandi', 'Mengganti ban / isi bensin', 'Parkir malam'], correct: 1 },
  ],
  16: [
    { text: 'Kartu kuning kedua untuk pemain sepak bola yang sama menyebabkan adanya kartu?', options: ['Hijau', 'Biru', 'Merah'], correct: 2 },
    { text: 'Libero dalam permainan bola voli hanya diperbolehkan berada di posisi?', options: ['Depan blok', 'Garis Serang', 'Baris Belakang'], correct: 2 },
    { text: 'Golf memiliki target memasukkan bola dengan pukulan paling?', options: ['Banyak', 'Sedikit', 'Lama'], correct: 1 },
    { text: 'Berat palu (hammer) atletik lempar martil pria standar adalah?', options: ['5 kg', '7.26 kg', '10 kg'], correct: 1 },
    { text: 'Pukulan bisbol disebut memukul batas home run jika arah bola?', options: ['Datar', 'Tertangkap lawan', 'Melewati garis batas luar (Outfield wall)'], correct: 2 },
  ],

  // ================= FLOOR 3 (Node 17-24) =================
  17: [
    { text: 'Sistem energi utama olahraga sprint 100m adalah?', options: ['Aerobik', 'Anaerobik Alaktik', 'Lemak'], correct: 1 },
    { text: 'Laktat dalam otot otot menyebabkan rasa?', options: ['Lapar', 'Pegal & lelah', 'Kenyang'], correct: 1 },
    { text: 'Karbohidrat dipecah dan disimpan di otot dalam bentuk?', options: ['Glikogen', 'Kalsium', 'Protein'], correct: 0 },
    { text: 'Tugas ligamen di lutut adalah?', options: ['Memompa darah', 'Menghubungkan tulang dengan tulang', 'Menyimpan lemak'], correct: 1 },
    { text: 'Pemulihan cedera olahraga sering dibantu dengan es untuk mengatur mengurangi?', options: ['Rasa manis', 'Peradangan / bengkak', 'Air mata'], correct: 1 },
  ],
  18: [
    { text: 'Klub peraih trofi Liga Champions Eropa (UCL) terbanyak?', options: ['Barcelona', 'Real Madrid', 'AC Milan'], correct: 1 },
    { text: 'Trofi Super Bowl berasal dari olahraga?', options: ['American Football', 'Baseball', 'Basketball'], correct: 0 },
    { text: 'Siapakah pemegang rekor gol terbanyak di dunia (resmi FIFA)?', options: ['Pele', 'Ronaldo / Messi', 'Maradona'], correct: 1 },
    { text: 'Istilah "Grand Slam" merujuk turnamen utama pada olahraga?', options: ['Tenis', 'Tinju', 'Renang'], correct: 0 },
    { text: 'Siapakah yang dijuluki legenda "Raja Tinju Kesayangan Dunia" (Float like a butterfly)?', options: ['Mike Tyson', 'Muhammad Ali', 'Floyd Mayweather'], correct: 1 },
  ],
  19: [
    { text: 'Gaya angkat punggung (Snatch) ada di olahraga?', options: ['Angkat Besi (Weightlifting)', 'Binaraga', 'Crossfit'], correct: 0 },
    { text: 'Sikap tubuh membungkuk aerodinamis pengendara sepeda berguna untuk?', options: ['Terlihat keren', 'Mengurangi hambatan angin', 'Tidur di jalan'], correct: 1 },
    { text: 'Alat ukur kecepatan berlari dinamakan?', options: ['Chronometer / Speed radar', 'Termometer', 'Barometer'], correct: 0 },
    { text: 'Senjata "Epee, Foil, Sabre" digunakan dalam olahraga?', options: ['Memanah', 'Anggar (Fencing)', 'Menembak'], correct: 1 },
    { text: 'Papan seluncur meluncur di atas salju menggunakan?', options: ['Snowboard', 'Skateboard', 'Sepatu Roda'], correct: 0 },
  ],
  20: [
    { text: 'VAR (Video Assistant Referee) digunakan di sepak bola untuk?', options: ['Merekam iklan', 'Menambah skor', 'Membantu wasit mengambil keputusan sulit'], correct: 2 },
    { text: 'Tugas fisioterapis olahraga?', options: ['Melatih kiper', 'Merawat dan merehabilitasi cedera atlet', 'Memasak makanan atlet'], correct: 1 },
    { text: 'VO2 Max mengukur?', options: ['Kekuatan tulang', 'Kapasitas maksimum oksigen saat olahraga berat', 'Tinggi loncatan'], correct: 1 },
    { text: 'Pakaian renang canggih dilarang di tahun 2010 karena berbahan dasar mirip?', options: ['Kulit hiu (Polyurethane)', 'Karet biasa', 'Kapas murni'], correct: 0 },
    { text: 'Suplemen kreatin berfungsi meningkatkan daya untuk olahraga tipe?', options: ['Maraton ketahanan', 'Eksplosif berintensitas tinggi', 'Yoga'], correct: 1 },
  ],
  21: [
    { text: 'Posisi gelandang bertahan sepak bola sering disebut?', options: ['Striker', 'Playmaker', 'Defensive Midfielder (DM)'], correct: 2 },
    { text: 'Taktik menekan lawan garis tinggi dinamakan?', options: ['Parkir Bus', 'Gegenpressing / High Press', 'Long Ball'], correct: 1 },
    { text: 'Istilah "Pick and Roll" sering dipakai di olahraga?', options: ['Sepak Bola', 'Basket', 'Voli'], correct: 1 },
    { text: 'Dalam bisbol, pelempar bola disebut?', options: ['Catcher', 'Pitcher', 'Batter'], correct: 1 },
    { text: 'Dalam bola voli, posisi pemberi umpan jitu dinamakan?', options: ['Spiker', 'Blocker', 'Setter / Tosser'], correct: 2 },
  ],
  22: [
    { text: 'Berapa berat maksimal tongkat lembing atletik putra?', options: ['500 gr', '600 gr', '800 gr'], correct: 2 },
    { text: 'Dasalomba (Decathlon) memiliki nomor pertandingan sebanyak?', options: ['5 nomor', '10 nomor', '20 nomor'], correct: 1 },
    { text: 'Bola air (Water Polo) 1 tim beranggotakan berapa pemain aktif dalam kolam?', options: ['5', '7', '11'], correct: 1 },
    { text: 'Lama pertandingan bola tangan (Handball) adalah?', options: ['2x30 menit', '2x45 menit', '4x10 menit'], correct: 0 },
    { text: 'Dalam Rugby, bola tidak boleh diumpankan ke arah?', options: ['Belakang', 'Samping', 'Depan'], correct: 2 },
  ],
  23: [
    { text: 'Berapa jarak lari maraton standar internasional?', options: ['10 KM', '21.097 KM', '42.195 KM'], correct: 2 },
    { text: 'Posisi senam palang sejajar dinamakan palang sejajar dengan?', options: ['Asymmetric', 'Parallel Bars', 'Horizontal Bar'], correct: 1 },
    { text: 'Cabang renang gaya kupu-kupu memiliki tendangan yang mirip dengan ekor?', options: ['Ikan Pari', 'Lumba-lumba / Dolphin Kick', 'Katak'], correct: 1 },
    { text: 'Lapangan voli lantai indoor memiliki panjang dan lebar?', options: ['18m x 9m', '20m x 10m', '15m x 7m'], correct: 0 },
    { text: 'Tinggi ring basket standar NBA / FIBA dari lantai adalah?', options: ['2.50 Meter', '3.05 Meter', '3.50 Meter'], correct: 1 },
  ],
  24: [
    { text: 'Teknik lompat galah melibatkan galah dari material berbahan serat?', options: ['Fiberglass / Carbon Fiber', 'Kayu jati', 'Besi baja'], correct: 0 },
    { text: 'Negara tersukses sepanjang sejarah Piala Dunia sepak bola adalah?', options: ['Jerman', 'Argentina', 'Brasil (5 Gelar)'], correct: 2 },
    { text: 'Senam artistik putri lantai dan pria palang beregu diperlombakan pada?', options: ['SEA Games saja', 'Olimpiade', 'Piala Dunia FIFA'], correct: 1 },
    { text: 'Pukulan drive jarak pendek ke lubang kecil di golf disebut pukulan?', options: ['Putting', 'Smash', 'Free Hit'], correct: 0 },
    { text: 'Gelar juara tenis beregu pria dunia adalah memperebutkan?', options: ['Uber Cup', 'Davis Cup', 'Thomas Cup'], correct: 1 },
  ],
};

// ==========================================
// ART INTEREST — Floor 1 (Node 1-8)
// ==========================================
export const artQuestions: QuestionBank = {
  // Node 1: Mengenal Alat-alat Seni
  1: [
    { text: 'Alat utama untuk menggambar?', options: ['Pensil', 'Panci', 'Sapu'], correct: 0 },
    { text: 'Kuas digunakan untuk?', options: ['Menulis', 'Melukis', 'Memotong'], correct: 1 },
    { text: 'Cat air dicampur dengan?', options: ['Minyak', 'Air', 'Susu'], correct: 1 },
    { text: 'Kertas khusus untuk melukis disebut?', options: ['Kanvas', 'Koran', 'Karton'], correct: 0 },
    { text: 'Palet digunakan untuk?', options: ['Memotong kertas', 'Mencampur cat', 'Menggambar garis'], correct: 1 },
    { text: 'Penghapus digunakan untuk?', options: ['Mewarnai', 'Menghapus kesalahan', 'Menggunting'], correct: 1 },
    { text: 'Crayon terbuat dari bahan?', options: ['Kayu', 'Lilin berwarna', 'Plastik'], correct: 1 },
  ],

  // Node 2: Mengenal Warna Dasar
  2: [
    { text: 'Warna primer adalah?', options: ['Merah, Kuning, Biru', 'Hijau, Oranye, Ungu', 'Hitam, Putih, Abu'], correct: 0 },
    { text: 'Campuran merah dan kuning menghasilkan?', options: ['Hijau', 'Oranye', 'Ungu'], correct: 1 },
    { text: 'Campuran biru dan kuning menghasilkan?', options: ['Hijau', 'Oranye', 'Cokelat'], correct: 0 },
    { text: 'Campuran merah dan biru menghasilkan?', options: ['Hijau', 'Kuning', 'Ungu'], correct: 2 },
    { text: 'Campuran merah dan putih menghasilkan?', options: ['Merah Muda', 'Oranye', 'Ungu'], correct: 0 },
    { text: 'Warna pelangi ada berapa?', options: ['5', '7', '10'], correct: 1 },
    { text: 'Warna hitam dan putih disebut warna?', options: ['Primer', 'Sekunder', 'Netral'], correct: 2 },
  ],

  // Node 3: Bentuk & Pola Dasar
  3: [
    { text: 'Bentuk yang memiliki 3 sisi disebut?', options: ['Kotak', 'Segitiga', 'Lingkaran'], correct: 1 },
    { text: 'Bentuk yang tidak memiliki sudut?', options: ['Persegi', 'Segitiga', 'Lingkaran'], correct: 2 },
    { text: 'Pola yang berulang secara teratur disebut?', options: ['Acak', 'Motif / Pattern', 'Lukisan'], correct: 1 },
    { text: 'Simetris artinya?', options: ['Tidak beraturan', 'Sama kiri dan kanan', 'Berwarna-warni'], correct: 1 },
    { text: 'Garis melengkung memberi kesan?', options: ['Kaku', 'Lembut dan dinamis', 'Tajam'], correct: 1 },
    { text: 'Bentuk bintang memiliki berapa ujung?', options: ['4', '5', '6'], correct: 1 },
    { text: 'Mozaik adalah seni menempel?', options: ['Potongan kecil membentuk gambar', 'Cat di atas kanvas', 'Tanah liat'], correct: 0 },
  ],

  // Node 4 (BOSS): Campuran Alat, Warna & Bentuk
  4: [
    { text: 'Warna sekunder dihasilkan dari campuran warna?', options: ['Netral', 'Primer', 'Tersier'], correct: 1 },
    { text: 'Berapa warna primer yang ada?', options: ['2', '3', '5'], correct: 1 },
    { text: 'Tekstur dalam seni rupa berkaitan dengan?', options: ['Suara', 'Permukaan benda', 'Bau'], correct: 1 },
    { text: 'Garis lurus memberi kesan?', options: ['Lembut', 'Tegas dan kuat', 'Berantakan'], correct: 1 },
    { text: 'Gradasi warna artinya?', options: ['Warna yang sama rata', 'Perubahan warna bertahap', 'Tidak ada warna'], correct: 1 },
    { text: 'Origami adalah seni melipat?', options: ['Kain', 'Kertas', 'Logam'], correct: 1 },
    { text: 'Mana yang BUKAN merupakan elemen seni rupa?', options: ['Garis', 'Warna', 'Suara'], correct: 2 },
  ],

  // Node 5: Jenis-jenis Karya Seni
  5: [
    { text: 'Lukisan dibuat di atas?', options: ['Kanvas', 'Tanah', 'Air'], correct: 0 },
    { text: 'Patung adalah karya seni berbentuk?', options: ['2 dimensi', '3 dimensi', '1 dimensi'], correct: 1 },
    { text: 'Mural adalah lukisan di atas?', options: ['Kertas', 'Dinding', 'Kain'], correct: 1 },
    { text: 'Kolase dibuat dengan cara?', options: ['Memahat', 'Menempel potongan bahan', 'Melukis dengan cat air'], correct: 1 },
    { text: 'Sketsa adalah gambar?', options: ['Kasir / detail', 'Berantakan', 'Kasar / kerangka awal'], correct: 2 },
    { text: 'Fotografi adalah seni?', options: ['Melukis', 'Memotret', 'Memahat'], correct: 1 },
    { text: 'Batik adalah seni kain dari negara?', options: ['Jepang', 'Indonesia', 'India'], correct: 1 },
  ],

  // Node 6: Komposisi & Prinsip Seni
  6: [
    { text: 'Harmoni dalam seni artinya?', options: ['Berantakan', 'Keselarasan unsur-unsur', 'Menggunakan 1 warna'], correct: 1 },
    { text: 'Kontras artinya?', options: ['Perbedaan mencolok', 'Sama semua', 'Warna pudar'], correct: 0 },
    { text: 'Proporsi dalam menggambar tubuh artinya?', options: ['Ukuran yang seimbang', 'Warna yang cocok', 'Garis yang lurus'], correct: 0 },
    { text: 'Ruang kosong dalam desain disebut?', options: ['Negative space', 'Hitam', 'Outline'], correct: 0 },
    { text: 'Fokus utama dalam sebuah lukisan disebut?', options: ['Background', 'Focal point', 'Bingkai'], correct: 1 },
    { text: 'Warna hangat memberi kesan?', options: ['Dingin dan sejuk', 'Ceria dan energik', 'Sedih'], correct: 1 },
    { text: 'Warna dingin contohnya?', options: ['Merah dan kuning', 'Biru dan hijau', 'Oranye dan pink'], correct: 1 },
  ],

  // Node 7: Seniman & Karya Terkenal
  7: [
    { text: 'Siapa yang melukis "Mona Lisa"?', options: ['Picasso', 'Leonardo da Vinci', 'Van Gogh'], correct: 1 },
    { text: 'Lukisan "Starry Night" karya?', options: ['Monet', 'Van Gogh', 'Rembrandt'], correct: 1 },
    { text: 'Affandi adalah pelukis terkenal dari?', options: ['Jepang', 'Indonesia', 'Italia'], correct: 1 },
    { text: 'Raden Saleh dikenal sebagai pelukis bergaya?', options: ['Abstrak', 'Romantisme', 'Pop Art'], correct: 1 },
    { text: 'Pablo Picasso dikenal dengan aliran?', options: ['Realisme', 'Kubisme', 'Naturalisme'], correct: 1 },
    { text: 'Patung Liberty terletak di?', options: ['Paris', 'New York', 'London'], correct: 1 },
    { text: 'Wayang kulit adalah seni pertunjukan dari?', options: ['Bali', 'Jawa', 'Sumatra'], correct: 1 },
  ],

  // Node 8 (BOSS): Campuran Semua Materi Floor 1
  8: [
    { text: 'Apa perbedaan seni rupa 2D dan 3D?', options: ['2D datar, 3D memiliki volume', '2D berwarna, 3D hitam putih', 'Tidak ada perbedaan'], correct: 0 },
    { text: 'Contoh karya seni rupa terapan?', options: ['Lukisan abstrak', 'Vas bunga keramik', 'Patung museum'], correct: 1 },
    { text: 'Aliran seni yang menggambar sesuai kenyataan?', options: ['Abstrak', 'Realisme', 'Kubisme'], correct: 1 },
    { text: 'Warna tersier dihasilkan dari campuran?', options: ['Primer + Primer', 'Primer + Sekunder', 'Sekunder + Sekunder'], correct: 1 },
    { text: 'Impresionisme fokus pada?', options: ['Garis tegas', 'Kesan cahaya dan warna', 'Bentuk geometris'], correct: 1 },
    { text: 'Seni instalasi adalah karya yang?', options: ['Digantung di dinding', 'Mengisi ruangan / lingkungan', 'Dibuat dari kertas saja'], correct: 1 },
  ],

  // ================= FLOOR 2 (Node 9-16) =================
  9: [
    { text: 'Zaman kesenian melahirkan kelahiran kembali budaya klasik Eropa?', options: ['Baroque', 'Renaissance', 'Romantisme'], correct: 1 },
    { text: 'Mona Lisa (Leonardo Da Vinci) dibuat pada zaman?', options: ['Renaissance', 'Modern', 'Surrealisme'], correct: 0 },
    { text: 'Pelukis kubisme yang melukis wajah terpecah geometris?', options: ['Monet', 'Van Gogh', 'Pablo Picasso'], correct: 2 },
    { text: 'Aliran yang melukiskan mimpi atau alam bawah sadar?', options: ['Surrealisme', 'Realisme', 'Naturalisme'], correct: 0 },
    { text: 'Salvador Dali dari aliran Surrealisme terkenal dengan lukisan?', options: ['Bunga Matahari', 'Jam tangan meleleh', 'Pasar burung'], correct: 1 },
  ],
  10: [
    { text: 'Seni pahat menggunakan media marmer populer di negara?', options: ['Inggris', 'Italia (Yunani-Romawi)', 'Belanda'], correct: 1 },
    { text: 'Seni grafiti yang populer di dinding adalah dari era dan jalanan negara mana muncul?', options: ['Jepang (1800s)', 'Jalanan kota Amerika (1970s)', 'Eropa kuno'], correct: 1 },
    { text: 'Gaya seni Pop Art sering menampilkan figur budaya populer terkenal. Siapa pionirnya?', options: ['Andy Warhol (Gambar Marilyn Monroe / Sup Campbell)', 'Michelangelo', 'Raden Saleh'], correct: 0 },
    { text: 'Lukisan potret diri (Self-Portrait) populer bagi seniman yang kehabisan uang model, seniman yang memotong telinganya adalah?', options: ['Affandi', 'Vincent Van Gogh', 'Picasso'], correct: 1 },
    { text: 'Apa itu kaligrafi?', options: ['Seni menulis huruf indah', 'Seni memahat kayu', 'Seni melipat besi'], correct: 0 },
  ],
  11: [
    { text: 'Teknik melukis cat menembul tebal dengan olesan kuas atau pisau palet (impasto) khas dipakai oleh?', options: ['Realisme halus', 'Vincent Van Gogh / Impresionisme ekspresif', 'Fotografi'], correct: 1 },
    { text: 'Seni mengukir kayu untuk cap / cetak tinggi ke kertas dinamakan cukil kayu atau?', options: ['Woodcut', 'Digital art', 'Watercolor'], correct: 0 },
    { text: 'Seni membentuk tanah liat lalu dibakar untuk dijadikan vas atau patung dinamakan?', options: ['Seni Kriya Logam', 'Seni Keramik (Ceramics)', 'Seni Tembok'], correct: 1 },
    { text: 'Teknik melukis di dinding plester dinding semen basah sejak zaman mesir-romawi disebut lukisan?', options: ['Mural', 'Fresco', 'Kanvas'], correct: 1 },
    { text: 'Teknik menggambar menggunakan titik-titik kecil warna (Pointilisme) akan menghasilkan efek campuran jika dilihat dari?', options: ['Sangat dekat', 'Sedikit merem', 'Dilihat dari jarak jauh'], correct: 2 },
  ],
  12: [
    { text: 'Gamelan adalah seni ansambel musik asal?', options: ['Malaysia', 'Jawa dan Bali', 'India'], correct: 1 },
    { text: 'Seni teater tradisional topeng Cirebon sangat sakral bermakna teater apa?', options: ['Komedi modern', 'Mistik / Tarian tradisi budaya Jawa', 'Sulap api'], correct: 1 },
    { text: 'Seni tarian yang matanya melirik tajam tanpa putus asal Bali?', options: ['Tari Legong / Kecak', 'Tari Piring', 'Tari Lilin'], correct: 0 },
    { text: 'Wayang Golek khas Jawa Barat menggunakan boneka kayu berformat?', options: ['Datar 2D disorot lampu', '3 Dimensi berbayang nyata yang dimainkan tangan', 'Wayang orang dengan aktor'], correct: 1 },
    { text: 'Seniman pembuat keris asal tanah Jawa disebut sebagai profesor keris kuno, yaitu?', options: ['Pendeta', 'Dalang', 'Empu'], correct: 2 },
  ],
  13: [
    { text: 'CMYK adalah standar warna untuk?', options: ['Percetakan tinta / Printer', 'Layar monitor', 'Lampu jalan'], correct: 0 },
    { text: 'Kepanjangan dari RGB?', options: ['Red, Green, Blue', 'Red, Gold, Black', 'Right, Great, Best'], correct: 0 },
    { text: 'Ilustrator modern hari ini banyak menggambar menggunakan tablet grafis merek?', options: ['Nintendo', 'Wacom / iPad', 'Macbook Pro trackpad'], correct: 1 },
    { text: 'Seni manipulasi bentuk huruf dalam poster, majalah, desain web disebut?', options: ['Animasi', 'Videografi', 'Tipografi (Typography)'], correct: 2 },
    { text: 'Seni desain karakter grafis bitmap 8-bit kuno (Pixel Art) banyak dijumpai pada?', options: ['Lukisan museum', 'Game Retro (Era 90an seperti Mario Bros)', 'Foto koran'], correct: 1 },
  ],
  14: [
    { text: 'Seniman arsitektur merancang sketsa gambar berupa?', options: ['Denah dan Struktur bangunan', 'Puisi', 'Resep masakan'], correct: 0 },
    { text: 'Seni fotografi dari sudut pandang cacing menatap atas berjuluk teknik memotret?', options: ['Bird Eye View', 'Worm Eye View', 'Eye Level'], correct: 1 },
    { text: 'Pada fotografi malam, cara agar pendaran lampu motor tampak seperti garis sinar panjang adalah dengan memperlambat pengaturan apa di kamera?', options: ['Aperture', 'ISO (Kecerahan Sensor)', 'Shutter Speed (Waktu tangkap rana lambat)'], correct: 2 },
    { text: 'Aliran Naturalisme sangat menjunjung nilai melukis alam yang?', options: ['Seadanya / Berantakan', 'Secantik mirip foto kenyataan indah', 'Berbentuk segi-segi aneh (Abstrak)'], correct: 1 },
    { text: 'Seni ukir relief banyak dikerjakan / pahat di Indonesia utamanya menempel terpasang ikonik di karya megah leluhur bernama?', options: ['Keris', 'Batik Solo', 'Candi (E.g. Prambanan/Borobudur)'], correct: 2 },
  ],
  15: [
    { text: 'Estetika artinya secara umum berbicara menilai benda dari segi apa?', options: ['Kekuatan fisiknya', 'Keindahan filosofi rasa haru pandang', 'Nilai harga dan sejarah materialnya'], correct: 1 },
    { text: 'Warna Hitam dan Putih sering kali dimaknai berkonotasi pada perasaan apa di gambar ilustrasi kuno psikologis barat?', options: ['Kehangatan pesta', 'Misteri / Elegan dan Suci', 'Kesehatan vitalitas alam hutan'], correct: 1 },
    { text: 'Lukisan cat air sering mempunyai karakter transparan basah. Sifat media alat transparan basah dinamakan aquarel, kebalikannya yang solid menutup warna latar dinamakan?', options: ['Pointilis', 'Plakat', 'Kolase'], correct: 1 },
    { text: 'Menyusun barang bekas rongsokan dibentuk jadi patung gajah, ini jenis daur ulang seni perakitan bernama?', options: ['Seni Assemblage', 'Tukang barang loak', 'Patung Cor'], correct: 0 },
    { text: 'Ikon pop-culture "Mickey Mouse" dikomikkan Disney dilukis seluloid dengan gaya desain disebut?', options: ['Realis binatang', 'Karikatur', 'Animasi Kartun (Cel Animation)'], correct: 2 },
  ],
  16: [
    { text: 'Seniman Leonardo da Vinci selain pandai melukis, ia membuat sketsa benda rancangan penemuan seperti mesin helikopter. Hal ini membuatnya disebut seniman jenius dari era?', options: ['Pencerahan / Renaissance Man', 'Zaman prasejarah gua', 'Bapak Komputer Grafis'], correct: 0 },
    { text: 'Karya instalasi seni yang dibikin sebentar kemudian sengaja dibakar hilang hancur sementara waktu (Contoh lukisan semangka dan roti membusuk) masuk ke aliran seni?', options: ['Seni Pertunjukan', 'Seni Ephemeral (Cepat Hilang)', 'Seni Permanen Arca'], correct: 1 },
    { text: 'Tokoh besar pelukis Maestro yang memuja ekspresi gaya abstrak-ekspresionis Indonesia coretan liar kebebasan "mengamuk" emosi perih sosial rakyat adalah?', options: ['Affandi', 'Raden Saleh', 'S. Sudjojono'], correct: 0 },
    { text: 'Warna ungu pada spektrum pelangi dikaitkan sejarah psikologis kerajaan pada zaman romawi / eropa tengah menandakan warna?', options: ['Biasa miskin alam bawah kelas', 'Mewah / Bangsawan Raja', 'Tanda bahaya'], correct: 1 },
    { text: 'Seni merancang kostum teater fiksi futuristik baju armor tempur (Cosplay Designer) termasuk desain rumpun seni?', options: ['Seni Arsitektur', 'Seni Tari', 'Seni Kriya Mode & Tekstil Terapan'], correct: 2 },
  ],

  // ================= FLOOR 3 (Node 17-24) =================
  17: [
    { text: 'Teknik bayangan chiaroscuro (gelap terang mendramatisir) sangat sering dimainkan dalam lukisan tokoh era Baroque bernama?', options: ['Vincent Van Gogh', 'Caravaggio / Rembrandt', 'Picasso'], correct: 1 },
    { text: 'Seni kontemporer masa kini ciri khas uniknya tidak mengikat teknik, kadang berisi pesan mengkritik?', options: ['Kebiasaan burung terbang belaka', 'Politik, masyarakat, isu lingkungan, krisis modern', 'Pendidikan kuno'], correct: 1 },
    { text: 'Menggunakan program komputer generasi gambar algoritma AI hari ini, dinamakan dengan sebutan jenis seni?', options: ['Seni Lukis Klasik Tradisional', 'Generative / AI Art', 'Pixel 8-bit Analog'], correct: 1 },
    { text: 'Dalam anatomi gambar kepala manusia normal standar da Vinci proporsi sempurna letak mata diposisikan ada di membagi bagian muka pada?', options: ['Garis tepat tengah vertikal kepala 1/2 mata hidung mulut', 'Ujung pucuk rambut dahi atas', 'Di atas dagu dikit sangat bawah'], correct: 0 },
    { text: 'Melukis model manusia berdiri tanpa memakai sehelai baju utuh sebagai subjek membedah pelajari tata gerak simpul otot struktur murni murni untuk wibawa anatomi dinamakan?', options: ['Figure drawing nudes / Life drawing', 'Cartoon drawing', 'Fashion sketch'], correct: 0 },
  ],
  18: [
    { text: 'Seni membuat barang perhiasan gelang dan logam ukir dari emas-perak murni dinamakan seni?', options: ['Seni Lukis cat', 'Seni Patung Monumental batu besar', 'Seni Kriya Logam / Kriya Perhiasan'], correct: 2 },
    { text: 'Cincin dan ukiran Jepara dibedakan nilai estetikanya. Di mebel meja hias kursi, selain keindahan wujud ia harus bisa menduduki fungsinya (dilirik faedah duduk). Seni mebel kursi Jepara digolongkan?', options: ['Seni Rupa Murni / Murni pajangan', 'Seni Rupa Terapan / Applied Art fungsional praktis', 'Pertunjukan mebel'], correct: 1 },
    { text: 'Ilmu susun tata huruf teks mengatur spasi logo tipografi agar mata pengguna HP (user) mudah membacanya dalam desain User Interface disebut kaidah?', options: ['UX Copywriting and Typography Layout (Kaidah Hirarki Visual Layout Tipografi)', 'Ngecat huruf grafiti ngawur', 'Cukil Kaligrafi kuno Tiongkok'], correct: 0 },
    { text: 'Bentuk tulisan hieroglif Tiongkok digambar sangat filosofis memakai sapuan kuas halus tebal-tipis, disebut seni?', options: ['Kaligrafi China / Shufa', 'Kaca patri eropa', 'Lukisan Cat Minyak'], correct: 0 },
    { text: 'Persepektif mata tiga titik hilang paling rumit sering dipakai perancang game membuat level?', options: ['Bangunan ruangan dalam (Interior ruang kecil sudut sempit)', 'Gedung pencakar langit distorsi tinggi dari menatap gedung bertingkat atau atas menatap jalanan kecil distorsi (Cityscape aerial/ant view)', 'Bunga daun dekat mikroskop datar'], correct: 1 },
  ],
  19: [
    { text: 'Aliran Dadaisme pasca-perang dunia di dunia seni terkenal lahir menjadi gaya seni yang?', options: ['Sangat fotorealistis', 'Menolak logika & menghina seni elitis dengan komedi dan surealis ketidakmasukakalan satir, contoh memahat gantungan baju menjadi patung absurd', 'Harmoni romantis pemandangan alam'], correct: 1 },
    { text: 'Manga / Anime Jepang digemari belahan dunia. Karakter animasi 2D pertama dan pencipta istilah studio dewa magna pelopor Astroboy dan Kimba?', options: ['Hayao Miyazaki', 'Osamu Tezuka', 'Junji Ito'], correct: 1 },
    { text: 'Tinta emas dalam keris atau iluminasi buku kerajaan dilukis bukan dicetak print, disebut melukis?', options: ['Seni Tipografi komputer stiker lapis cetak emas (goldfoil modern)', 'Seni iluminasi manuskrip murni (menggunakan serpihan daun emas prada tempel)', 'Menyedot tinta pulpen'], correct: 1 },
    { text: 'Warna ungu pada pigmen pelukis klasik Romawi jarang dibeli rakyat miskin sebab terbuat dari cairan lendir murni sejenis siput perasa keras laut Mediterania pelarut yang disebut cat pewarna ungu bernama?', options: ['Biru lapis lazuli', 'Tyrian Purple', 'Cadmium Yellow'], correct: 1 },
    { text: 'Aktivasi interaktif pertunjukan seni yang tidak punya lokasi lukis tapi sang seniman berlarian sambil cat tumpah aksi "action painting" sambil berguling di kanvas, ini aksi gaya ekslusif milik Jackson Pollock beraliran eksperimentasi aliran?', options: ['Kubisme garis', 'Abstrak Ekspresionisme / Action Painting', 'Realisme tenang manis'], correct: 1 },
  ],
  20: [
    { text: 'Desain logo Apple yang hanya bentuk potongan apel sederhana mengikuti filosofi seni kaidah masa kini yang bernama pedoman?', options: ['Minimalisme desain', 'Baroque meriah', 'Pop Art warna mencolok'], correct: 0 },
    { text: 'Animasi stop motion yang sukses seperti tokoh gemuk patung Pingu / Shaun the Sheep dibuat perlahan menggeser mili demi mili patung dari adonan kerangka dasar patung tanah plastisin bernama teknik pergerakan bahan?', options: ['Claymation (Plasticine stop frame)', 'CGI render canggih 3D maya', 'Vector flat frame draw'], correct: 0 },
    { text: 'Seni digital memakai pen tablet Wacom / iPad (Ipad procreate) pada dasarnya format grafisnya (kalau PNG/JPG diperbesar layarnya titik pecah pixel). Program Adobe Photoshop mengolah gambar berorientasi layar kotak disebut?', options: ['Grafis vektor presisi titik koordinat (seperti program Coreldraw / Adobe Illustrator)', 'Grafis bitmap/raster piksel', 'Analog Cat Air'], correct: 1 },
    { text: 'Pewarnaan lukisan zaman dulu "Fresco" Michelangelo Sistine Chapel atap dilukis terindah saat lapisan?', options: ['Tembok kering kapurnya sudah jamuran parah', 'Cat minyak tebal bertumpuk tumpuk pelarut damar kering seminggu', 'Plester kapur tembok masih kondisi lembab setengah basah dicampur pigmen air lalu menjadi kristal awet bebatuan ribuan tahun memadat kuat'], correct: 2 },
    { text: 'Dalam merancang film fiksi ilusi film film superhero efek ledakan hantu monster nyata raksasa yang tidak ada sungguhan di set panggung kamera lokasi dibantu layar hijau kemudian diarsir poles komputer dinamakan proses industri efek VFX divisi ini disebut?', options: ['Seni Sutradara / Teater Make up Muka', 'Seni Komputer Grafis Pilihan Ahli CGI (Visual Effects Computer-Generated Imagery Compositing)', 'Penyanyi Audio Nada suara studio dubbing'], correct: 1 },
  ],
  21: [
    { text: 'Patung raksasa GWK (Garuda Wisnu Kencana) setinggi ratusan meter di bali diciptakan oleh seniman handal monumental?', options: ['Basuki Abdullah', 'I Nyoman Nuarta', 'Hendra Gunawan', 'Sudjoyono'], correct: 1 },
    { text: 'Langkah memproyeksikan film sinema gambar siluet kartun bayangan bergerak memutar memakai gulungan kaca lampu lentera era mainan zaman victorian sebelum ada sinema / film di bioskop lahir dinamakan dengan pertunjukan dari ilusi gulungan mainan?', options: ['Kamera SLR', 'Zoetrope / Kamera pra-sinema mainan optik memutar', 'Kacamata VR Virtual Oculus canggih'], correct: 1 },
    { text: 'Warna Putih Titanium (Titanium White) adalah cat pigmen yang aman kuat zaman modern, di zaman dahulu cat putih pelukis banyak dihindari (membuat seniman keracunan dan sakit mati muda) bahan metal logam berat beracun zat pigmen apa pembuat warna itu?', options: ['Timbal Kuningan berat tebal kapur seng karat timah timbal oksida cat racun timah (Lead White)', 'Oksida Besi tanah liat gosong merah (Ochre red tanah)', 'Ekor cumi-cumi (Cat sepia hitam) tinta kelam lautan pekat'], correct: 0 },
    { text: 'Musik dan tari panggung musikal broadway (seperti teater Kucing Cats / Lion King Broadway New York Costume Show) diklasifikasikan para akedemis barat dari pakar estetika dikelompokkan disiplin hibrida paduan seni yaitu?', options: ['Seni Audio / suara semata (Hanya musik didengar)', 'Seni Visual (Hanya untuk dilihat pelan digantung)', 'Seni Pertunjukan Teatrikal Perpaduan (Performing Arts Audio Visual Gerak Terapan dan Murni)'], correct: 2 },
    { text: 'Motif batik megamendung (Awan Hujan menumpuk gaya tiongkok pesisiran timur pantai keraton piring keramik ming tiongkok paduan jawa) asalnya kota dan warna dominan utamanya warna?', options: ['Cirebon Jawa Barat & Kombinasi Cerah Biru/Merah Langit', 'Solo pedalaman Keraton Jawa & Putih Soga Cokelat Suram', 'Bali Pantai laut selatan & Ukiran kayu Emas'], correct: 0 },
  ],
  22: [
    { text: 'Sebuah gambar ilustrasi buku anak-anak memakai sapuan transparan kertas yang basah-basah menumpuk warnanya gampang luntur tak dapat direvisi putihnya disisakan ruang kertas murni menuntut fokus. Medium alat yang digambar anak tersebut namanya?', options: ['Cat Minyak', 'Cat Air (Watercolor) Aquarrel', 'Pensil Arang (Charcoal)'], correct: 1 },
    { text: 'Istilah "Golden Ratio" (Rasio Kesadaran Emas) 1:1,618 dalam lukisan / fotografi / desain daun kerang siput sering dipakai para jenius sebagai rumus jitu untuk meletakkan fokus utama dengan tujuan?', options: ['Gambar pasti jadi berantakan acak dan jelek buang memusingkan mata menjauh rusak simetri desain murni tak karuan abstrak aneh membingungkan', 'Untuk membentuk proposi titik fokus komposisi harmoni estetika visual yang alami / indah pas sempurna secara otomatis menurut fitrah mata (seperti garis ukur keong cangkang siput simetris berputar Fibonacci spiraling proporsional ideal dinamis cantik ke dalam intinya)', 'Bikin garis bantu hilang sama rata presisi kertas lipat lurus'], correct: 1 },
    { text: 'Origami yaitu teknik mendaur manipulasi satu helai kertas lipat di Jepang. Teknik kirigami berbeda sedikit dengan origami konvensional biasa yaitu kirigami membolehkan kita memakai alat tambahan di helai kertas itu agar jadi 3D indah menyebar memutar berupa pemakaian kebolehan?', options: ['Memakai teknik pelarisan basah kuas air tebal warna air membasahi (membuat hancur bubur)', 'Boleh memakai potong alat meremas dan digunting melukai kertas memangkas di tengah pola (Pemotretan & pengguntingan)', 'Dilarang kuat keras memakai tangan tapi pakai kaki dilipat merobek sembarang kasar meliuk kusut'], correct: 1 },
    { text: 'Lukisan "The Scream" yang ekspresi menjerit mengerikan auranya merah darah meliuk-liuk gelisah pusing yang memanifestasikan kecemasan abad milenium dunia modern manusia cemas batin (seperti gambar emoji ketakutan HP), Pelukis Norwegia mahakarya tersebut bernama?', options: ['Edvard Munch', 'Claude Monet', 'Leonardo da Vinci'], correct: 0 },
    { text: 'Istilah Kesenian "Avant-garde" (Garda Depan) untuk seniman eksentrik memelopori gerakan di bidang fesyen / seni / desain radikal mendobrak kebaruan revolusioner adalah istilah berakar makna militer jerman/prancis artinya?', options: ['Hanya orang kolot patuh lama pengikut tradisi belakang memalsir gaya kuno pelukis usang diam klasik diam mematok pasif biasa tidak aneh pasaran (konservatif tua merenung diam penurut) belakang kuno tradisi usang mati stagnan basi basi tradisi masa lalu menua tradisi pudar masa lampau (klasik diam tak gerak pakem tua)', 'Pasukan barisan pelopor terdepan pemberani pembawa pembaharu inovator pejuang hal-hal karya ekstrim baru tabu aneh diluar kebiasaan zaman berani liar merubah tatanan karya (Inovasi eksperimental masa depan nyeleneh tapi pelopor utama trend) merombak gebrakan gila unik aneh di depan waktu maju pembaruan berani', 'Peniru seni plagiat (Tukang Fotocopy) meminjam pasrah curi hak paten milik teman persis menjiplak mirip hasil curian pasaran pabrikan'], correct: 1 },
  ],
  23: [
    { text: 'Dalam film, tata letak adegan sebelum disuting sutradara di lapangan agar paham urutan gambar sudut kamera kameramen paham, di coret pelan cepat kotak-kotak mirip buku komik draf kasar untuk patokan skrip pengambilan video di set panggung/lapang dinamakan merancang?', options: ['Storyboard (Papan Cerita Sketsa Adegan Panel)', 'Poster Promosi Iklan Bioskop (Thumbnail Cover Gambar)', 'Kamera Lensa Zoom Setting Fokus Alat (DSLR gear)'], correct: 0 },
    { text: 'Karya seni rupa 2 dimensi yang dibikin dari teknik simpul temali ikatan memilin-milin tali kain bersatu menganyam rumit dengan teknik menyimpul pita dan ikat jadi pola benang rajut berhias taplak rumbai gantung makrama/hiasan dinamakan seni membuat kerajinan kriya yang bernama?', options: ['Seni Mengukir Tatah Sablon Baju', 'Seni Mengikat Tali Macramé (Makrame Tali Rajut Ikat Gubah Rumbai simpul menyilang pola padat menyilang seni mengikat rumit)', 'Seni Mozaik Beling Potongan Kaca Hancur'], correct: 1 },
    { text: 'Gambar pemandangan yang letak warna jauh di horison langit biru warnanya agak sedikit kebiruan dan keabu-abuan memudar pudar luntur dikaburkan dengan warna udara tebal dibanding warna gunung pohon dekat yang cerah solid. Perspektif ini dalam teknik melukis landscape realisme di Eropa alam dinamakan perspektif kabut jarak dinamakan perspektif apa?', options: ['Perspektif Udara / Aerial Perspective (Warna objek kejauhan akan dimodifikasi luntur mendekati atmosfer udara pucat warna ambient kabut biru udara hilang saturasi)', 'Perspektif Linear Geometris 3 Titik Hilang Garis Sinar Tajam Keras Lurus Tajam Titik Fokus Bangunan Lurus Tajam Keras Lurus', 'Isometrik Datar Permainan Perspektif Jepang Miring Katak'], correct: 0 },
    { text: 'Di dalam melukis objek digital gambar UI vector desain minimalis, terdapat teknik mengaplikasikan memudarkan perubahan mulus lembut lambat (smooth transition blending fade) pelan dari satu warna 1 (merah muda) memudar merata halus berubah licin lembut tercampur bersaur menjadi warna ke 2 (biru toska) tanpa melihat garis patahan kasar blok. Teknik memudar transisi mulus ini namanya apa di Photoshop / software desain digital?', options: ['Stroke / Outline Border Hitam Luar Kasar Kasar Solid Tunggal Satu Tone Halus', 'Gradient / Gradasi Halus Mulus', 'Drop Shadow Blur Efek Gelap Bayangan Belakang Buram'], correct: 1 },
    { text: 'Di desain grafis produk, warna merah cerah pekat mendominasi logo brand cepat saji burger ayam goreng KFC Mcd karena warna hangat tajam itu psikologis ilmiah desain mampu menggerakkan insting merangsang manusia agar?', options: ['Mengantuk, Damai tidur tenteram tenang santai rebahan lambat ngantuk bosan penenang pikiran istirahat (Cool calm sleepy passive)', 'Merasa Cepat terburu emosi cepat lincah dan membangkitkan selera makan merangsang hasrat kuat agresif detak jantung berdebar selera nafsu tinggi perut haus sigap tanggap ingin gairah cepat selesai (Appetite speed urgent hunger)', 'Merasa bersih murni cermat elit klinis rapi kosong higienis suci bersih hampa tak bernoda (Pure sterile clean clinical neutral empty space blank white)'], correct: 1 },
  ],
  24: [
    { text: 'Seni kerajinan perak yang dibentuk dengan benang-benang kawat perak halus dipelintir, dikeduk, dijalin, dirangkai berongga dan ditekuk rumit seperti renda / sarang laba-laba kerawang (biasa di kerajinan Kotagede Yogyakarta untuk bros kawat perhiasan bross kecil rumit indah) kawat kecil logam disolder, kerajinan ukapan filigree ini biasa dikenal sebutan khas seni?', options: ['Perak Tempel Plakat Cor Tebal Tuang Patung Emas murni balok cetak tuang (Casting mold tebal tebal ukir berat)', 'Seni Mengukir Patung Logam', 'Seni Kriya Logam Perak Filigri (Kerajinan Perak Kawat Halus Batik Kerawang Anyaman Kawat Perak Murni Pelintir Kotagede halus hias renda renda terangkai transparan bolong-bolong hiasan filigree)'], correct: 2 },
    { text: 'Masa pra-sejarah awal mula nenek moyang berkarya di gua prancis (Lascaux) & sulawesi maros menggambar telapak tangan kuno dan gambar hewan perburuan babi rusa memakai cara purba primitif di dinding menggunakan medium apa untuk pigmen mereka berkarya awal mula peradaban desain manusia melukis jejak tangannya itu?', options: ['Spidol Permanen Kapur Papan Akrilik Spray Pilox', 'Tanah oker berpigmen besi campur ludah sembur ditiup ke tangan / getah kayu tanah merah dan ditiup ke tebing sebagai cap stensil telapak tangan darah campuran mineral arang kuno purba getah', 'Kuas Kuas Emas dan Minyak zaitun khusus canvas linen romawi cat basah akrilik kanvas rapi'], correct: 1 },
    { text: 'Sebuah mahakarya pahat marmer patung "Peita" Maria memangku tuhan Yesus disisihkan dengan pahatan presisi kejeniusan patung sangat realistis melipat kain patung otot sempurna sedih anatomi (Seni Romawi Katolik Basilika). Sang maestro seniman genius pelopor renaissance pencipta patung dan arsitek dan pelukis atap gereja Sistine tersebut adalah sang genius legenda maestro siapa?', options: ['Michelangelo Buonarroti', 'Donatello', 'Raphael Sanzio'], correct: 0 },
    { text: 'Aliran Seni Pop Art (Populer Seni) muncul kritik meledak amerika di tahun 60-an mencibir seni halus murni pelukis tinggi arogan. Pop Art sering membuat gambar besar dari bahan bahan remeh temeh kampungan keseharian massa murahan pop disulap direpaint pewarnaan komik pop neon (spt komik koran titik benday campbell soup kaleng sup coca cola dicetak ratusan seri silkscreen sablon kotak warna tajam nyentrik mencolok kotor norak) dan ini sangat laku keras menggeser budaya modern estetika kuno klasik ke modern desain masa kini. Sang Pahlawan raja pencetus budaya komersil Pop Art seniman ini bernama siapa?', options: ['Henri Matisse pelukis liar hewan fauvisme warnawarni cat tebal serampangan (Fauvisme binatang)', 'Andy Warhol si pelukis nyentrik grafis sablon iklan seleb dan roy lichtenstein titik komik besar (Pop Art Comersial Consumerism Mass Media culture icon sablon komersil)', 'Jackson pollock penyiprat cat acak gila emosi bebas abstraksi lukisan abstrak seratus tumpahan liar (Abstrak Ekspresionis)'], correct: 1 },
    { text: 'Boss Terakhir Kuis Seni Ujian (Ultimate Final Boss Art)! Salah satu jenis ilusi seni trik pandang mata visual yang menyapu akal logika karena lukisan 2 Dimensi tersebut menipu mata jadi kelihatan seperti 3D asli menonjol dari kertas menipu bayangan otak menembus ruangan kedalaman ruang menipu pengamat kaget tertipu gambar di trotoar dibilang bolong jurang jebakan. Istilah prancis kuno ini melukis trik mata realisme hyper 3D tipu daya ilusi optik pengelabuan mata perspektif sempurna dinamakan lukisan tipe teknik apa penipu mata ajaib ini (Istilah prancisnya tipu matamu)?', options: ['"Impresso-Mural" (Cetak dinding besar ilusi air terjun warna acak bayang pelan)', '"Trompe l`Oeil" (Deceive the eye / Menipu mata ilusi optik hiper 3D seakan barang menonjol keluar 3 dimensi realistis efek bayang pas distorsi titik hilang perspektif nyata jalan mural trotoar aneh tebing jurang palsu trik ruang jalan gambar kapur kapur palsu menipu retina)', '"Mozaik Kaca Patri" (menyusun tempelan gelas ilusi warna transparan sinar)'], correct: 1 },
  ],
};

// Fungsi untuk mengambil soal berdasarkan interest dan nodeId
export function getInterestQuestions(interest: string, nodeId: number): InterestQuestion[] {
  let bank: QuestionBank;
  
  switch (interest) {
    case 'computer':
      bank = computerQuestions;
      break;
    case 'sport':
      bank = sportQuestions;
      break;
    case 'art':
    default:
      bank = artQuestions;
      break;
  }

  const questions = bank[nodeId];
  
  if (!questions || questions.length === 0) {
    // Fallback: return generic questions if nodeId not found
    return bank[1] || [];
  }

  // Shuffle and pick 5
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 5);
}
