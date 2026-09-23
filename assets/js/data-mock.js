/**
 * DAIDANU Mock Data & Local Storage Store
 * Mensimulasikan basis data MySQL (9 Tabel sesuai PRD) pada browser localStorage
 */

const DEFAULT_TOPIK = [
    { id_topik: 1, nama_topik: "Fikih Ibadah", deskripsi: "Thaharah, Shalat, Puasa, Zakat, Haji, Jenazah, dan ibadah fardhu/sunnah lainnya." },
    { id_topik: 2, nama_topik: "Fikih Muamalah", deskripsi: "Jual beli kontemporer, pinjaman syariah, e-wallet, paylater, akad sewa, dan permodalan." },
    { id_topik: 3, nama_topik: "Fikih Munakahat (Keluarga)", deskripsi: "Pernikahan, hak & kewajiban suami istri, waris (mawarits), thalaq, dan parenting Islam." },
    { id_topik: 4, nama_topik: "Aqidah & Tasawuf", deskripsi: "Kemurnian iman Ahlussunnah wal Jama'ah Asy'ariyah-Maturidiyah, tazkiyatun nafs, tarekat muktabarah." },
    { id_topik: 5, nama_topik: "Adab & Tradisi Kultural NU", deskripsi: "Tahlilan, ziarah kubur, maulid Nabi, manaqiban, tawasul, dan etika sowan ulama." }
];

const DEFAULT_KIAI = [
    {
        id_kiai: 1,
        id_user: 2,
        nama_kiai: "KH. Ahmad Fauzan Al-Hafidz, M.Pd.",
        gelar: "Ketua PC LDNU Kebumen / Pengasuh Ponpes Al-Hidayah",
        bidang_keahlian: "Fikih Ibadah & Ulumul Quran",
        bio: "Alumnus Pesantren Lirboyo Kediri dan Pascasarjana UIN Sunan Kalijaga. Mengampu Bahtsul Masail PCNU Kebumen sejak tahun 2018.",
        foto: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&auto=format&fit=crop&q=80",
        alamat_ndalem: "Komplek Ponpes Al-Hidayah, Kutowinangun, Kebumen",
        no_hp: "081234567801",
        status_aktif: "aktif",
        jadwal_tersedia: "Senin - Kamis (Ba'da Ashar & Isya)"
    },
    {
        id_kiai: 2,
        id_user: 3,
        nama_kiai: "Gus Muhammad Sholahuddin, S.Ag.",
        gelar: "Wakil Katib Syuriyah & Dai Muda LDNU",
        bidang_keahlian: "Fikih Muamalah & Fikih Kontemporer",
        bio: "Pernah menimba ilmu di Ponpes Al-Falah Ploso Kediri. Aktif mengisi kajian ekonomi syariah dan literasi muamalah digital bagi generasi muda.",
        foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
        alamat_ndalem: "Kedungwinangun, Klirong, Kebumen",
        no_hp: "081234567802",
        status_aktif: "aktif",
        jadwal_tersedia: "Sabtu & Ahad (Pagi / Malam)"
    },
    {
        id_kiai: 3,
        id_user: 4,
        nama_kiai: "Kiai Nur Hidayatullah, M.H.",
        gelar: "Lajnah Bahtsul Masail (LBM) PCNU Kebumen",
        bidang_keahlian: "Fikih Munakahat & Mawarits (Hukum Waris)",
        bio: "Santri senior Ponpes Krapyak Yogyakarta. Spesialis hukum perdata Islam, mediasi keluarga sakinah, dan pembagian waris secara syar'i.",
        foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
        alamat_ndalem: "Pejagoan, Kabupaten Kebumen",
        no_hp: "081234567803",
        status_aktif: "aktif",
        jadwal_tersedia: "Selasa, Jumat & Ahad"
    },
    {
        id_kiai: 4,
        id_user: 5,
        nama_kiai: "Gus Fathur Rohman Al-Bantani",
        gelar: "Da'i Cyber & Penggiat Remaja Masjid LDNU",
        bidang_keahlian: "Aqidah, Akhlak & Retorika Dakwah Remaja",
        bio: "Khatib dan da'i muda berkarakter santai dan komunikatif. Berfokus pada bimbingan problematika spiritual pemuda, adab medsos, dan pencegahan paham ekstrim.",
        foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
        alamat_ndalem: "Gombong, Kebumen",
        no_hp: "081234567804",
        status_aktif: "aktif",
        jadwal_tersedia: "Fleksibel dengan konfirmasi"
    }
];

const DEFAULT_KONSULTASI = [
    {
        id_konsultasi: 1,
        id_user: 1,
        nama_jamaah: "Nurul Hidayati",
        id_topik: 2,
        nama_topik: "Fikih Muamalah",
        judul: "Hukum Menggunakan Fitur Paylater untuk Kebutuhan Mendesak",
        pertanyaan: "Assalamu'alaikum Kiai. Bagaimana hukumnya dalam fikih Aswaja jika seseorang memakai paylater dengan ada tambahan bunga atau denda keterlambatan saat benar-benar darurat?",
        tanggal_kirim: "2026-09-20 09:30",
        status: "dijawab",
        jawaban: {
            id_jawaban: 1,
            id_kiai: 2,
            nama_kiai: "Gus Muhammad Sholahuddin, S.Ag.",
            tanggal_jawab: "2026-09-20 15:45",
            teks_jawaban: "Wa'alaikumsalam Wr. Wb. Saudari Nurul yang dirahmati Allah. Berdasarkan fatwa Bahtsul Masail NU, akad pinjaman yang mensyaratkan adanya tambahan nominal yang diperjanjikan sejak awal atau denda bunga bertingkat masuk dalam kategori riba nasiah yang dilarang. Jika dalam kondisi darurat muamalah, dianjurkan menggunakan akad qardhul hasan (pinjaman kebajikan) dari koperasi syariah atau lembaga terpercaya, serta menghindari akad yang berpotensi membebani denda riba. Wallahu a'lam bishawab."
        }
    },
    {
        id_konsultasi: 2,
        id_user: 1,
        nama_jamaah: "Muhammad Ridwan",
        id_topik: 1,
        nama_topik: "Fikih Ibadah",
        judul: "Sahkah Shalat Jamaah bila Shaf Tidak Rapat karena Bawa Anak Kecil?",
        pertanyaan: "Bismillah. Mohon penjelasan Kiai, apakah shalat jamaah di masjid tetap sah dan sempurna pahalanya bila shaf agak renggang karena orang tua mendampingi anak kecil yang belum baligh?",
        tanggal_kirim: "2026-09-22 14:10",
        status: "dijawab",
        jawaban: {
            id_jawaban: 2,
            id_kiai: 1,
            nama_kiai: "KH. Ahmad Fauzan Al-Hafidz, M.Pd.",
            tanggal_jawab: "2026-09-22 18:20",
            teks_jawaban: "Shalat jamaahnya tetap sah. Menurut mazhab Syafi'i, merapatkan shaf hukumnya sunnah muakkadah, sedangkan ketidakrapian shaf makruh dan mengurangi keutamaan fadhilah jamaah, tetapi tidak membatalkan shalat. Membawa anak kecil yang sudah mumayyiz justru baik untuk edukasi shalat jamaah."
        }
    },
    {
        id_konsultasi: 3,
        id_user: 1,
        nama_jamaah: "Nanda NurFaiz",
        id_topik: 3,
        nama_topik: "Fikih Munakahat (Keluarga)",
        judul: "Pembagian Harta Warisan Rumah Tua Keluarga",
        pertanyaan: "Assalamu'alaikum. Kami 3 bersaudara (1 laki-laki, 2 perempuan) memiliki warisan rumah orang tua. Bagaimana ketentuan ilmu faraidh yang adil sesuai tuntunan syariat Islam?",
        tanggal_kirim: "2026-09-23 10:15",
        status: "menunggu",
        jawaban: null
    }
];

const DEFAULT_NGATURI = [
    {
        id_ngaturi: 1,
        id_user: 1,
        nama_pemohon: "Nanda NurFaiz (Ketua Remaja Masjid Baiturrahim)",
        kontak_pemohon: "085712349988",
        id_kiai: 1,
        nama_kiai: "KH. Ahmad Fauzan Al-Hafidz, M.Pd.",
        nama_acara: "Peringatan Maulid Nabi Muhammad SAW & Santunan Anak Yatim",
        tanggal_acara: "2026-10-12 19:30",
        lokasi: "Masjid Baiturrahim, RT 03/RW 02 Desa Panjer, Kebumen",
        keterangan: "Dihadiri sekitar 400 jamaah warga sekitar. Tema ceramah: Meneladani Akhlak Rasulullah dalam Merajut Ukhuwah.",
        status: "disetujui_kiai", // pending -> verifikasi_admin -> disetujui_kiai -> selesai
        alur_o2o: "menunggu_kunjungan_panitia", // Adab Kultural Sowan
        riwayat_verifikasi: {
            petugas_admin: "Admin PC LDNU Kebumen",
            tanggal_verifikasi: "2026-09-21 11:00",
            status_verifikasi: "diteruskan",
            catatan_admin: "Data panitia dan lokasi valid. Direkomendasikan diteruskan ke KH. Ahmad Fauzan."
        },
        riwayat_konfirmasi: {
            keputusan: "bersedia",
            tanggal_konfirmasi: "2026-09-21 16:30",
            catatan_kiai: "Alhamdulillah insyaAllah bersedia. Diharapkan panitia dapat sowan silaturahim ke ndalem H-7 untuk koordinasi teknis dan penyerahan jadwal."
        }
    },
    {
        id_ngaturi: 2,
        id_user: 1,
        nama_pemohon: "Ahmad Saeful (Panitia Pengajian Ahad Pagi)",
        kontak_pemohon: "081988776655",
        id_kiai: 2,
        nama_kiai: "Gus Muhammad Sholahuddin, S.Ag.",
        nama_acara: "Kajian Tematik Fikih Milenial Kebumen",
        tanggal_acara: "2026-10-18 08:30",
        lokasi: "Gedung MWC NU Pejagoan, Kebumen",
        keterangan: "Peserta santri dan pemuda Ansor-IPNU. Tema: Fiqh Finansial untuk Pemuda.",
        status: "verifikasi_admin",
        alur_o2o: "menunggu_konfirmasi_kiai",
        riwayat_verifikasi: {
            petugas_admin: "Admin PC LDNU Kebumen",
            tanggal_verifikasi: "2026-09-23 09:00",
            status_verifikasi: "diteruskan",
            catatan_admin: "Acara resmi binaan MWC NU. Jadwal Gus Sholahuddin pada tanggal tersebut terpantau masih luang."
        },
        riwayat_konfirmasi: null
    },
    {
        id_ngaturi: 3,
        id_user: 1,
        nama_pemohon: "Budi Santoso (Panitia RW 04)",
        kontak_pemohon: "087711223344",
        id_kiai: 4,
        nama_kiai: "Gus Fathur Rohman Al-Bantani",
        nama_acara: "Halal bi Halal & Doa Bersama Warga RT 02",
        tanggal_acara: "2026-10-25 19:30",
        lokasi: "Balai Pertemuan Warga Gombong",
        keterangan: "Kajian malam keakraban warga.",
        status: "pending",
        alur_o2o: "menunggu_verifikasi_admin",
        riwayat_verifikasi: null,
        riwayat_konfirmasi: null
    }
];

const DEFAULT_NOTIFIKASI = [
    {
        id_notifikasi: 1,
        id_user: 1,
        judul: "Permohonan Ngaturi Disetujui!",
        pesan: "KH. Ahmad Fauzan Al-Hafidz telah menyetujui permohonan acara Maulid Nabi. Silakan lakukan adab sowan fisik ke ndalem.",
        tipe: "ngaturi",
        status_baca: "belum_dibaca",
        created_at: "2026-09-21 16:35"
    },
    {
        id_notifikasi: 2,
        id_user: 1,
        judul: "Konsultasi Keislaman Anda Telah Dijawab",
        pesan: "Gus Muhammad Sholahuddin telah menjawab pertanyaan seputar Paylater. Klik untuk membaca fatwa lengkap.",
        tipe: "konsultasi",
        status_baca: "dibaca",
        created_at: "2026-09-20 15:45"
    }
];

// Helper functions for LocalStorage Data Storage
const DataStore = {
    init: function() {
        if (!localStorage.getItem('daidanu_topik')) {
            localStorage.setItem('daidanu_topik', JSON.stringify(DEFAULT_TOPIK));
        }
        if (!localStorage.getItem('daidanu_kiai')) {
            localStorage.setItem('daidanu_kiai', JSON.stringify(DEFAULT_KIAI));
        }
        if (!localStorage.getItem('daidanu_konsultasi')) {
            localStorage.setItem('daidanu_konsultasi', JSON.stringify(DEFAULT_KONSULTASI));
        }
        if (!localStorage.getItem('daidanu_ngaturi')) {
            localStorage.setItem('daidanu_ngaturi', JSON.stringify(DEFAULT_NGATURI));
        }
        if (!localStorage.getItem('daidanu_notifikasi')) {
            localStorage.setItem('daidanu_notifikasi', JSON.stringify(DEFAULT_NOTIFIKASI));
        }
    },
    getTopik: () => JSON.parse(localStorage.getItem('daidanu_topik') || '[]'),
    getKiai: () => JSON.parse(localStorage.getItem('daidanu_kiai') || '[]'),
    getKonsultasi: () => JSON.parse(localStorage.getItem('daidanu_konsultasi') || '[]'),
    getNgaturi: () => JSON.parse(localStorage.getItem('daidanu_ngaturi') || '[]'),
    getNotifikasi: () => JSON.parse(localStorage.getItem('daidanu_notifikasi') || '[]'),

    addKonsultasi: function(item) {
        const list = this.getKonsultasi();
        item.id_konsultasi = list.length > 0 ? Math.max(...list.map(x => x.id_konsultasi)) + 1 : 1;
        item.tanggal_kirim = new Date().toISOString().replace('T', ' ').substring(0, 16);
        item.status = 'menunggu';
        item.jawaban = null;
        list.unshift(item);
        localStorage.setItem('daidanu_konsultasi', JSON.stringify(list));
        return item;
    },

    jawabKonsultasi: function(id_konsultasi, id_kiai, nama_kiai, teks_jawaban) {
        const list = this.getKonsultasi();
        const item = list.find(x => x.id_konsultasi === parseInt(id_konsultasi));
        if (item) {
            item.status = 'dijawab';
            item.jawaban = {
                id_jawaban: Date.now(),
                id_kiai: id_kiai,
                nama_kiai: nama_kiai,
                tanggal_jawab: new Date().toISOString().replace('T', ' ').substring(0, 16),
                teks_jawaban: teks_jawaban
            };
            localStorage.setItem('daidanu_konsultasi', JSON.stringify(list));
        }
    },

    addNgaturi: function(item) {
        const list = this.getNgaturi();
        item.id_ngaturi = list.length > 0 ? Math.max(...list.map(x => x.id_ngaturi)) + 1 : 1;
        item.status = 'pending';
        item.alur_o2o = 'menunggu_verifikasi_admin';
        item.riwayat_verifikasi = null;
        item.riwayat_konfirmasi = null;
        list.unshift(item);
        localStorage.setItem('daidanu_ngaturi', JSON.stringify(list));
        return item;
    },

    verifikasiNgaturi: function(id_ngaturi, status_verifikasi, catatan) {
        const list = this.getNgaturi();
        const item = list.find(x => x.id_ngaturi === parseInt(id_ngaturi));
        if (item) {
            if (status_verifikasi === 'diteruskan') {
                item.status = 'verifikasi_admin';
                item.alur_o2o = 'menunggu_konfirmasi_kiai';
            } else {
                item.status = 'ditolak';
                item.alur_o2o = 'ditolak_admin';
            }
            item.riwayat_verifikasi = {
                petugas_admin: "Admin PC LDNU Kebumen",
                tanggal_verifikasi: new Date().toISOString().replace('T', ' ').substring(0, 16),
                status_verifikasi: status_verifikasi,
                catatan_admin: catatan
            };
            localStorage.setItem('daidanu_ngaturi', JSON.stringify(list));
        }
    },

    konfirmasiNgaturi: function(id_ngaturi, keputusan, catatan) {
        const list = this.getNgaturi();
        const item = list.find(x => x.id_ngaturi === parseInt(id_ngaturi));
        if (item) {
            if (keputusan === 'bersedia') {
                item.status = 'disetujui_kiai';
                item.alur_o2o = 'menunggu_kunjungan_panitia'; // Pemicu Tradisi Sowan O2O
            } else {
                item.status = 'ditolak';
                item.alur_o2o = 'ditolak_kiai';
            }
            item.riwayat_konfirmasi = {
                keputusan: keputusan,
                tanggal_konfirmasi: new Date().toISOString().replace('T', ' ').substring(0, 16),
                catatan_kiai: catatan
            };
            localStorage.setItem('daidanu_ngaturi', JSON.stringify(list));
        }
    },

    resetToDefault: function() {
        localStorage.removeItem('daidanu_topik');
        localStorage.removeItem('daidanu_kiai');
        localStorage.removeItem('daidanu_konsultasi');
        localStorage.removeItem('daidanu_ngaturi');
        localStorage.removeItem('daidanu_notifikasi');
        this.init();
    }
};

// Auto initialize on script load
DataStore.init();
