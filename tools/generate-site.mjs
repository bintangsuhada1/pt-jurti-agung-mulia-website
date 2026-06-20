import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const SITE = "https://ptjurtiagungmulia.com";
const ROOT = process.cwd();
const LASTMOD = "2026-06-20";
const PHONE_DISPLAY = "+62 831-8403-7448";
const PHONE_WA = "6283184037448";
const EMAIL = "ptjurtiagungmulia@gmail.com";
const OG_IMAGE = `${SITE}/assets/img/pt-jurti-agung-mulia-kontraktor-listrik.png`;

const services = [
  {
    key: "instalasi",
    slug: "/layanan/jasa-instalasi-listrik/",
    nav: "Instalasi Listrik",
    title: "Jasa Instalasi Listrik Gedung dan Industri Kepri | PT Jurti Agung Mulia",
    ogTitle: "Jasa Instalasi Listrik Gedung dan Industri | PT Jurti Agung Mulia",
    meta: "Jasa instalasi listrik gedung, rumah, ruko, hotel, pabrik, dan fasilitas komersial di Kepri dengan perencanaan beban, proteksi, grounding, dan commissioning.",
    label: "Instalasi gedung, industri, ruko, hotel",
    h1: "Jasa Instalasi Listrik Gedung, Industri, Rumah, dan Ruko",
    lead: "Pekerjaan instalasi listrik untuk bangunan baru, renovasi, perubahan layout, perluasan daya, dan kebutuhan operasional fasilitas dengan jalur kabel, proteksi, panel, grounding, dan pengujian yang direncanakan sejak awal.",
    summaryTitle: "Instalasi listrik yang aman, rapi, dan mudah dirawat",
    summary: [
      "Instalasi listrik yang baik tidak berhenti pada lampu menyala atau stop kontak berfungsi. Sistem harus dirancang sesuai beban, pembagian sirkit, kapasitas kabel, proteksi, ruang panel, jalur pipa, dan akses maintenance.",
      "PT Jurti Agung Mulia membantu pekerjaan instalasi listrik dengan pendekatan teknis yang realistis untuk rumah, ruko, gedung, hotel, pabrik, dan fasilitas komersial di Kepulauan Riau."
    ],
    facts: [
      ["Fokus pekerjaan", "Instalasi tenaga, penerangan, panel distribusi, grounding, dan commissioning."],
      ["Kebutuhan umum", "Bangunan baru, renovasi, tambah daya, perluasan area, dan perapian instalasi."],
      ["Output kerja", "Instalasi fungsional, rapi, mudah diperiksa, dan siap dilanjutkan ke kebutuhan dokumen teknis."]
    ],
    info: [
      "Perencanaan pembagian beban dan sirkit.",
      "Pemasangan kabel, tray, conduit, titik lampu, stop kontak, dan panel.",
      "Koordinasi dengan grounding, penangkal petir, SLO NIDI, dan commissioning."
    ],
    scopeIntro: "Cakupan pekerjaan disesuaikan dengan jenis bangunan, kapasitas daya, kondisi eksisting, dan target operasional.",
    scope: [
      ["Instalasi gedung dan ruko", "Pekerjaan instalasi penerangan, daya, panel distribusi, dan titik utilitas untuk bangunan komersial."],
      ["Instalasi rumah dan villa", "Penataan instalasi listrik rumah tinggal dengan pembagian beban dan proteksi yang mudah dirawat."],
      ["Instalasi pabrik dan industri", "Dukungan distribusi daya untuk mesin, area produksi, panel, dan kebutuhan operasional."],
      ["Renovasi dan perapian", "Perbaikan jalur kabel, panel, terminal, dan proteksi pada instalasi eksisting."],
      ["Grounding dan proteksi", "Integrasi sistem pembumian, proteksi hubung singkat, dan perlindungan perangkat."],
      ["Testing commissioning", "Pemeriksaan fungsi, pengujian dasar, dokumentasi, dan rekomendasi teknis sesuai lingkup."]
    ],
    advantages: [
      ["Rencana beban jelas", "Pembagian sirkit dan panel dibahas agar instalasi tidak asal tersambung."],
      ["Pekerjaan rapi", "Jalur kabel, pipa, panel, dan terminasi dibuat mudah diperiksa saat maintenance."],
      ["Terhubung layanan lain", "Instalasi dapat dikaitkan dengan panel, SLO NIDI, grounding, dan commissioning."],
      ["Komunikasi teknis", "Kebutuhan material dan batas pekerjaan disampaikan sejak awal."]
    ],
    faqs: [
      ["Apakah melayani instalasi listrik rumah dan ruko?", "Ya. PT Jurti Agung Mulia melayani instalasi listrik rumah, ruko, gedung, hotel, pabrik, dan fasilitas komersial sesuai kebutuhan proyek."],
      ["Data apa yang perlu disiapkan sebelum konsultasi?", "Siapkan lokasi, jenis bangunan, daya listrik, kebutuhan titik, foto kondisi lapangan, dan target waktu pekerjaan bila sudah ada."],
      ["Apakah instalasi bisa sekaligus panel dan grounding?", "Bisa. Pekerjaan instalasi dapat digabung dengan panel distribusi, grounding, penangkal petir, SLO NIDI, dan commissioning sesuai lingkup."],
      ["Apakah melayani area Batam dan Karimun?", "Ya. Area layanan meliputi Tanjungpinang, Batam, Bintan, Karimun, Kepulauan Riau, serta proyek tertentu di Indonesia setelah konsultasi."]
    ],
    wa: "Halo PT Jurti Agung Mulia, saya ingin konsultasi instalasi listrik.\nLokasi:\nJenis bangunan:\nDaya listrik:\nKebutuhan titik/area:\nStatus bangunan: baru/renovasi/eksisting\nTarget waktu:"
  },
  {
    key: "slo",
    slug: "/layanan/jasa-slo-nidi/",
    nav: "SLO & NIDI",
    title: "Jasa SLO dan NIDI Kepri untuk Instalasi Listrik | PT Jurti Agung Mulia",
    ogTitle: "Jasa SLO dan NIDI untuk Instalasi Listrik | PT Jurti Agung Mulia",
    meta: "Pendampingan teknis SLO dan NIDI untuk instalasi listrik rumah, ruko, gedung, pasang baru, perubahan daya, dan kebutuhan kWh meter di Kepri.",
    label: "SLO, NIDI, pasang baru, perubahan daya",
    h1: "Jasa SLO dan NIDI untuk Instalasi Listrik",
    lead: "Pendampingan administratif-teknis untuk kebutuhan Sertifikat Laik Operasi dan Nomor Identitas Instalasi pada instalasi listrik yang memerlukan dokumen sesuai ketentuan pihak terkait.",
    summaryTitle: "Pendampingan SLO NIDI yang tertib secara teknis dan administratif",
    summary: [
      "SLO dan NIDI berkaitan dengan kelayakan instalasi, identitas instalasi, dan proses penyambungan atau perubahan daya. Kebutuhan dokumen dapat berbeda menurut jenis bangunan, kapasitas daya, kondisi instalasi, dan ketentuan lembaga terkait.",
      "PT Jurti Agung Mulia membantu pelanggan menyiapkan data teknis, memeriksa kondisi instalasi, dan memahami batas proses secara realistis tanpa menjanjikan hasil di luar kewenangan pihak penerbit."
    ],
    facts: [
      ["Fokus pekerjaan", "SLO, NIDI, pasang baru, perubahan daya, kWh meter, dan verifikasi instalasi."],
      ["Kebutuhan umum", "Rumah, ruko, gedung, fasilitas komersial, dan instalasi yang perlu dokumen laik operasi."],
      ["Output kerja", "Arahan data teknis, pemeriksaan instalasi, dan pendampingan proses sesuai ketentuan."]
    ],
    info: [
      "Pendampingan kebutuhan SLO dan NIDI untuk pasang baru atau perubahan daya.",
      "Pemeriksaan kondisi instalasi sebelum proses dokumen.",
      "Koordinasi data daya, titik instalasi, panel, dan kWh meter sesuai kebutuhan."
    ],
    scopeIntro: "Cakupan SLO NIDI bersifat administratif-teknis dan mengikuti ketentuan lembaga atau pihak terkait.",
    scope: [
      ["Pasang baru listrik", "Pendampingan data instalasi untuk kebutuhan penyambungan baru sesuai kondisi proyek."],
      ["Perubahan daya", "Pemeriksaan instalasi dan panel saat ada kebutuhan tambah daya atau penyesuaian kapasitas."],
      ["Instalasi ruko dan gedung", "Dukungan dokumen teknis untuk instalasi komersial yang memerlukan kelayakan operasi."],
      ["Pemeriksaan instalasi", "Pengecekan panel, kabel, pembagian sirkit, proteksi, dan grounding sebelum pengajuan."],
      ["Kebutuhan kWh meter", "Koordinasi data instalasi yang relevan dengan kebutuhan penyambungan dan meterisasi."],
      ["Arahan perbaikan", "Rekomendasi teknis bila instalasi perlu dirapikan sebelum proses dokumen dilanjutkan."]
    ],
    advantages: [
      ["Bahasa proses jelas", "Pelanggan mendapat penjelasan mana bagian teknis dan mana kewenangan pihak penerbit."],
      ["Pemeriksaan realistis", "Kondisi instalasi dicek agar potensi kendala diketahui lebih awal."],
      ["Terhubung instalasi", "Bila perlu perbaikan, pekerjaan dapat dilanjutkan ke instalasi, panel, atau grounding."],
      ["Dokumen tidak dikarang", "Tidak ada nomor atau klaim legalitas yang dibuat tanpa dokumen resmi."]
    ],
    faqs: [
      ["Apa bedanya SLO dan NIDI?", "Secara umum, SLO berkaitan dengan laik operasi instalasi, sedangkan NIDI adalah identitas instalasi. Kebutuhan dan proses mengikuti ketentuan pihak terkait."],
      ["Apakah hasil penerbitan SLO bisa dijanjikan sejak awal?", "Tidak membuat janji di luar kewenangan. Tim membantu pemeriksaan teknis dan pendampingan proses sesuai data serta ketentuan yang berlaku."],
      ["Dokumen apa yang perlu disiapkan?", "Biasanya diperlukan data pemilik atau bangunan, lokasi, daya, kondisi instalasi, foto, dan informasi teknis lain sesuai kebutuhan proses."],
      ["Apakah bisa untuk ruko atau gedung?", "Ya. Layanan SLO NIDI dapat dikonsultasikan untuk rumah, ruko, gedung, dan fasilitas komersial."]
    ],
    wa: "Halo PT Jurti Agung Mulia, saya ingin konsultasi SLO/NIDI.\nLokasi:\nDaya listrik:\nKebutuhan: pasang baru/perubahan daya/lainnya\nStatus instalasi:\nTarget waktu:"
  },
  {
    key: "panel",
    slug: "/layanan/panel-listrik/",
    nav: "Panel Listrik",
    title: "Panel Listrik LVMDP MDP SDP ATS AMF Kepri | PT Jurti Agung Mulia",
    ogTitle: "Panel Listrik LVMDP MDP SDP ATS AMF | PT Jurti Agung Mulia",
    meta: "Pembuatan dan instalasi panel listrik LVMDP, MDP, SDP, ATS/AMF, capacitor bank, wiring, proteksi, dan commissioning untuk gedung serta industri.",
    label: "LVMDP, MDP, SDP, ATS/AMF, capacitor bank",
    h1: "Jasa Pembuatan Panel Listrik LVMDP, MDP, SDP, dan ATS/AMF",
    lead: "Pembuatan dan instalasi panel distribusi daya untuk gedung, pabrik, hotel, ruko, dan fasilitas komersial dengan perhatian pada wiring, busbar, proteksi, labeling, ruang kerja, dan kemudahan maintenance.",
    summaryTitle: "Panel listrik yang teknis, rapi, dan siap dioperasikan",
    summary: [
      "Panel listrik adalah pusat distribusi dan proteksi daya. Kualitas panel tidak hanya ditentukan oleh merek komponen, tetapi juga desain rangkaian, koordinasi proteksi, kapasitas busbar, kerapian wiring, ventilasi, labeling, dan akses troubleshooting.",
      "PT Jurti Agung Mulia menangani kebutuhan panel LVMDP, MDP, SDP, ATS/AMF, capacitor bank, instalasi panel, terminasi kabel, dan commissioning sesuai lingkup proyek."
    ],
    facts: [
      ["Fokus pekerjaan", "LVMDP, MDP, SDP, ATS/AMF, capacitor bank, wiring, labeling, dan testing panel."],
      ["Kebutuhan proyek", "Gedung, pabrik, hotel, ruko, fasilitas komersial, dan sistem distribusi daya."],
      ["Output kerja", "Panel siap instalasi, terdokumentasi, dan mudah diperiksa untuk maintenance."]
    ],
    info: [
      "Pembuatan panel LVMDP, MDP, SDP, ATS/AMF, dan capacitor bank.",
      "Wiring, proteksi, labeling, terminasi, dan pengujian fungsi.",
      "Dapat dikaitkan dengan instalasi listrik, SLO NIDI, dan maintenance."
    ],
    scopeIntro: "Cakupan pekerjaan panel disesuaikan dengan kapasitas daya, jenis beban, integrasi genset, dan kebutuhan operasi fasilitas.",
    scope: [
      ["Panel LVMDP", "Panel distribusi utama tegangan rendah untuk pembagian daya ke sistem turunan."],
      ["Panel MDP dan SDP", "Panel distribusi utama dan sub distribusi untuk gedung, ruko, hotel, dan fasilitas industri."],
      ["Panel ATS/AMF", "Panel integrasi suplai genset dan perpindahan sumber daya sesuai desain operasi."],
      ["Capacitor bank", "Dukungan koreksi faktor daya berdasarkan kebutuhan teknis dan kondisi beban."],
      ["Wiring dan proteksi", "Penataan kabel kontrol, terminal, busbar, MCB, MCCB, fuse, relay, dan perangkat proteksi."],
      ["Commissioning panel", "Pemeriksaan wiring, fungsi proteksi, labeling, urutan kerja, dan dokumentasi serah terima."]
    ],
    advantages: [
      ["Desain mengikuti beban", "Panel disesuaikan dengan kapasitas, pola beban, ruang panel, dan target operasional."],
      ["Wiring lebih tertata", "Kerapian kabel dan labeling membantu inspeksi, troubleshooting, dan maintenance."],
      ["Koordinasi sistem", "Panel dapat dikaitkan dengan instalasi, grounding, genset, PLTS, atau kebutuhan proteksi."],
      ["Spesifikasi jelas", "Komponen dan lingkup pekerjaan dibahas sejak awal agar tidak kabur saat pelaksanaan."]
    ],
    faqs: [
      ["Panel apa saja yang bisa dikerjakan?", "PT Jurti Agung Mulia melayani panel LVMDP, MDP, SDP, ATS/AMF, capacitor bank, dan panel distribusi lain sesuai spesifikasi proyek."],
      ["Apakah bisa konsultasi sebelum pembuatan panel?", "Bisa. Kirimkan data daya, single line diagram bila ada, kebutuhan beban, foto lokasi panel, dan target penggunaan."],
      ["Apakah panel bisa dipasang sekaligus dengan instalasi listrik?", "Bisa. Pekerjaan panel dapat digabung dengan instalasi listrik, grounding, test commissioning, dan kebutuhan dokumen teknis sesuai lingkup."],
      ["Apakah melayani panel listrik di Batam?", "Ya. Area layanan meliputi Batam, Tanjungpinang, Bintan, Karimun, Kepulauan Riau, dan proyek di Indonesia sesuai kebutuhan."]
    ],
    wa: "Halo PT Jurti Agung Mulia, saya ingin konsultasi panel listrik.\nJenis panel:\nKapasitas daya:\nLokasi:\nKebutuhan: baru/perbaikan/upgrade\nTarget waktu:"
  },
  {
    key: "maintenance",
    slug: "/layanan/maintenance-listrik/",
    nav: "Maintenance Listrik",
    title: "Maintenance Panel dan Instalasi Listrik Kepri | PT Jurti Agung Mulia",
    ogTitle: "Maintenance Panel dan Instalasi Listrik | PT Jurti Agung Mulia",
    meta: "Maintenance panel listrik dan instalasi listrik untuk gedung, hotel, ruko, pabrik, dan fasilitas komersial di Kepri: inspeksi, thermoscanning, tightening, dan rekomendasi teknis.",
    label: "Maintenance panel dan instalasi listrik",
    h1: "Maintenance Panel Listrik dan Instalasi Listrik",
    lead: "Perawatan preventif dan korektif untuk panel serta instalasi listrik agar risiko panas berlebih, koneksi longgar, kerusakan proteksi, dan downtime operasional dapat dikurangi.",
    summaryTitle: "Maintenance listrik untuk mengurangi risiko gangguan operasional",
    summary: [
      "Panel dan instalasi listrik yang terlihat normal tetap dapat menyimpan risiko seperti baut terminal longgar, panas pada koneksi, pembagian beban tidak seimbang, isolasi menurun, atau komponen proteksi yang tidak bekerja optimal.",
      "PT Jurti Agung Mulia membantu pemilik gedung, hotel, ruko, pabrik, dan fasilitas komersial melakukan inspeksi, pembersihan, tightening, thermoscanning, pengujian dasar, serta rekomendasi perbaikan sesuai kondisi lapangan."
    ],
    facts: [
      ["Fokus pekerjaan", "Inspeksi panel, tightening, thermoscanning, pembersihan, dan pengujian dasar."],
      ["Kebutuhan umum", "Gedung, hotel, ruko, fasilitas komersial, pabrik, dan area operasional."],
      ["Output kerja", "Catatan temuan, rekomendasi teknis, dan prioritas perbaikan bila diperlukan."]
    ],
    info: [
      "Maintenance panel listrik dan instalasi eksisting.",
      "Pemeriksaan koneksi, proteksi, panas, kebersihan, dan pembagian beban.",
      "Dapat digabung dengan perbaikan panel, penggantian komponen, dan test commissioning."
    ],
    scopeIntro: "Jenis pemeriksaan dapat disesuaikan dengan tingkat risiko operasional, jadwal shutdown, dan akses panel di lokasi.",
    scope: [
      ["Inspeksi visual panel", "Pemeriksaan kondisi enclosure, kabel, terminal, labeling, bau panas, debu, dan tanda kerusakan."],
      ["Thermoscanning", "Pendeteksian titik panas pada koneksi, breaker, busbar, dan area panel yang berisiko."],
      ["Tightening dan pembersihan", "Pengencangan koneksi dan pembersihan panel sesuai kondisi serta standar keselamatan kerja."],
      ["Pengukuran dasar", "Pemeriksaan tegangan, arus, ketidakseimbangan beban, dan indikasi gangguan sederhana."],
      ["Rekomendasi perbaikan", "Prioritas temuan dan tindakan yang disarankan agar downtime lebih terkendali."],
      ["Maintenance berkala", "Penyusunan jadwal perawatan untuk fasilitas yang membutuhkan kesiapan sistem lebih tinggi."]
    ],
    advantages: [
      ["Berbasis temuan", "Rekomendasi disampaikan berdasarkan kondisi panel dan instalasi di lapangan."],
      ["Mengurangi downtime", "Pemeriksaan preventif membantu menemukan risiko sebelum menjadi gangguan besar."],
      ["Rapi terdokumentasi", "Temuan teknis dapat dirangkum untuk kebutuhan internal pengelola fasilitas."],
      ["Fleksibel jadwal", "Pekerjaan dapat disesuaikan dengan jam operasional dan kebutuhan shutdown."]
    ],
    faqs: [
      ["Seberapa sering panel listrik perlu maintenance?", "Frekuensi bergantung pada beban, usia panel, lingkungan, dan risiko operasional. Fasilitas dengan beban tinggi biasanya membutuhkan pemeriksaan berkala lebih disiplin."],
      ["Apakah maintenance harus mematikan listrik?", "Sebagian pemeriksaan dapat dilakukan tanpa pemadaman, tetapi pekerjaan tertentu seperti tightening atau penggantian komponen biasanya perlu kondisi aman dan terisolasi."],
      ["Apakah termasuk thermoscanning?", "Thermoscanning dapat masuk lingkup pekerjaan bila dibutuhkan untuk melihat indikasi panas pada panel atau koneksi."],
      ["Apakah bisa untuk hotel dan pabrik?", "Ya. Maintenance panel dan instalasi dapat dikonsultasikan untuk hotel, pabrik, gedung, ruko, dan fasilitas komersial."]
    ],
    wa: "Halo PT Jurti Agung Mulia, saya ingin konsultasi maintenance listrik.\nLokasi:\nJenis fasilitas:\nKeluhan/tujuan maintenance:\nJumlah panel/area:\nBisa shutdown: ya/tidak\nTarget waktu:"
  },
  {
    key: "trafo",
    slug: "/layanan/trafo-20kv/",
    nav: "Trafo 20 kV",
    title: "Maintenance Trafo 20 kV Kepri: BDV TTR Insulation Test | PT Jurti Agung Mulia",
    ogTitle: "Maintenance Trafo 20 kV: BDV, TTR, Insulation Test | PT Jurti Agung Mulia",
    meta: "Maintenance trafo 20 kV di Kepri dengan pemeriksaan preventif, BDV, TTR, insulation test, thermoscanning, dan rekomendasi teknis untuk mengurangi risiko downtime.",
    label: "Trafo 20 kV, BDV, TTR, insulation test",
    h1: "Maintenance Trafo 20 kV untuk Fasilitas Kritis",
    lead: "Perawatan preventif trafo 20 kV untuk membantu menjaga keandalan suplai listrik, memantau kondisi minyak dan isolasi, serta mengurangi risiko downtime pada fasilitas komersial dan industri.",
    summaryTitle: "Trafo 20 kV perlu dipantau sebelum muncul gangguan besar",
    summary: [
      "Trafo merupakan aset kritis. Penurunan kualitas minyak, kelembapan, panas berlebih, koneksi bermasalah, atau perubahan rasio dapat berdampak pada suplai daya dan operasi fasilitas.",
      "PT Jurti Agung Mulia membantu maintenance trafo 20 kV melalui pemeriksaan visual, insulation test, BDV, TTR, thermoscanning, dan rekomendasi teknis sesuai lingkup yang disepakati."
    ],
    facts: [
      ["Fokus pekerjaan", "Preventive maintenance, BDV, TTR, insulation test, thermoscanning, dan inspeksi visual."],
      ["Kebutuhan umum", "Pabrik, gedung besar, hotel, fasilitas publik, dan pelanggan dengan trafo sendiri."],
      ["Output kerja", "Hasil pemeriksaan, catatan temuan, dan rekomendasi teknis untuk tindak lanjut."]
    ],
    info: [
      "Maintenance trafo 20 kV dan aset pendukungnya.",
      "Pengujian BDV, TTR, insulation test, serta thermoscanning sesuai kebutuhan.",
      "Pekerjaan memperhatikan jadwal shutdown dan keselamatan area tegangan menengah."
    ],
    scopeIntro: "Pekerjaan trafo perlu direncanakan dengan jadwal aman, kondisi operasional, dan akses ke ruang trafo.",
    scope: [
      ["Inspeksi visual trafo", "Pemeriksaan kebocoran, suhu, suara, kondisi bushing, koneksi, grounding, dan area sekitar."],
      ["BDV minyak trafo", "Pengujian kekuatan dielektrik minyak untuk melihat indikasi penurunan kualitas isolasi."],
      ["TTR", "Transformer Turns Ratio test untuk memeriksa kesesuaian rasio belitan sesuai kebutuhan teknis."],
      ["Insulation test", "Pemeriksaan tahanan isolasi untuk membantu membaca kondisi isolasi komponen."],
      ["Thermoscanning", "Pendeteksian titik panas pada koneksi, panel pendukung, atau area yang relevan."],
      ["Rekomendasi preventive", "Saran tindakan lanjutan berdasarkan temuan agar risiko downtime lebih terkendali."]
    ],
    advantages: [
      ["Fokus aset kritis", "Pemeriksaan diarahkan pada risiko yang dapat mengganggu suplai listrik fasilitas."],
      ["Pengujian relevan", "BDV, TTR, insulation test, dan thermoscanning digunakan sesuai kebutuhan lapangan."],
      ["Koordinasi shutdown", "Jadwal dan metode kerja disesuaikan dengan operasional pelanggan."],
      ["Rekomendasi realistis", "Temuan disampaikan sebagai dasar keputusan maintenance atau perbaikan lanjutan."]
    ],
    faqs: [
      ["Apa tujuan BDV pada trafo?", "BDV membantu melihat kekuatan dielektrik minyak trafo sebagai salah satu indikator kualitas isolasi."],
      ["Apa itu TTR?", "TTR atau Transformer Turns Ratio test digunakan untuk memeriksa rasio belitan trafo sesuai kebutuhan pengujian teknis."],
      ["Apakah maintenance trafo perlu shutdown?", "Beberapa pekerjaan membutuhkan kondisi aman dan terisolasi. Jadwal shutdown perlu dikonsultasikan sesuai kondisi fasilitas."],
      ["Apakah melayani trafo 20 kV di Kepri?", "Ya. PT Jurti Agung Mulia melayani konsultasi maintenance trafo 20 kV di Kepulauan Riau dan proyek tertentu di Indonesia."]
    ],
    wa: "Halo PT Jurti Agung Mulia, saya ingin konsultasi maintenance trafo 20 kV.\nLokasi:\nKapasitas trafo:\nKebutuhan: BDV/TTR/insulation test/thermoscanning/lainnya\nKeluhan jika ada:\nJadwal shutdown:"
  },
  {
    key: "plts",
    slug: "/layanan/plts-solar-panel/",
    nav: "PLTS / Solar Panel",
    title: "Jasa Instalasi PLTS dan Solar Panel Kepri | PT Jurti Agung Mulia",
    ogTitle: "Jasa Instalasi PLTS dan Solar Panel | PT Jurti Agung Mulia",
    meta: "Jasa instalasi PLTS dan solar panel untuk gedung, rumah, hotel, ruko, dan fasilitas komersial di Kepri dengan perencanaan kapasitas, panel, inverter, dan integrasi listrik.",
    label: "PLTS, solar panel, energi terbarukan",
    h1: "Jasa Instalasi PLTS dan Solar Panel",
    lead: "Perencanaan dan instalasi PLTS untuk kebutuhan efisiensi energi pada rumah, gedung, hotel, ruko, dan fasilitas komersial dengan perhitungan kapasitas yang realistis.",
    summaryTitle: "PLTS perlu dihitung dari beban, ruang, dan pola pemakaian",
    summary: [
      "Sistem PLTS tidak cukup dipilih dari jumlah panel. Perencanaan perlu melihat profil beban, luas area, orientasi atap, struktur pemasangan, inverter, proteksi DC/AC, grounding, dan integrasi dengan instalasi eksisting.",
      "PT Jurti Agung Mulia membantu konsultasi, perencanaan, instalasi, dan integrasi PLTS sesuai kebutuhan fasilitas tanpa membuat klaim penghematan yang tidak berdasarkan data lapangan."
    ],
    facts: [
      ["Fokus pekerjaan", "Perencanaan kapasitas, instalasi modul, inverter, proteksi, grounding, dan integrasi sistem."],
      ["Kebutuhan umum", "Rumah, gedung, hotel, ruko, kantor, dan fasilitas komersial."],
      ["Output kerja", "Sistem PLTS yang terpasang rapi, diuji, dan dapat dirawat secara berkala."]
    ],
    info: [
      "Konsultasi kapasitas PLTS berdasarkan kebutuhan beban.",
      "Instalasi panel surya, inverter, proteksi, grounding, dan kabel DC/AC.",
      "Integrasi dengan panel listrik dan instalasi eksisting."
    ],
    scopeIntro: "Setiap rencana PLTS perlu menyesuaikan lokasi, beban, ruang panel, dan kondisi instalasi eksisting.",
    scope: [
      ["Survey teknis", "Pemeriksaan area pemasangan, jalur kabel, panel eksisting, dan kebutuhan proteksi."],
      ["Perencanaan kapasitas", "Estimasi kapasitas berdasarkan data beban dan tujuan penggunaan."],
      ["Instalasi modul surya", "Pemasangan panel surya dan struktur pendukung sesuai kondisi area."],
      ["Inverter dan proteksi", "Instalasi inverter, proteksi DC/AC, isolator, dan perangkat pendukung."],
      ["Grounding sistem", "Integrasi pembumian untuk mendukung keselamatan sistem PLTS."],
      ["Commissioning", "Pemeriksaan fungsi, dokumentasi dasar, dan arahan maintenance."]
    ],
    advantages: [
      ["Perhitungan realistis", "Kapasitas dibahas berdasarkan data, bukan janji penghematan umum."],
      ["Integrasi kelistrikan", "PLTS dikaitkan dengan panel, grounding, dan instalasi eksisting."],
      ["Rapi untuk maintenance", "Jalur kabel dan perangkat dibuat agar mudah diperiksa."],
      ["Cocok fasilitas komersial", "Kebutuhan hotel, gedung, ruko, dan fasilitas publik dapat dikonsultasikan."]
    ],
    faqs: [
      ["Apakah PLTS cocok untuk hotel atau gedung?", "Bisa dikonsultasikan. Kelayakan teknis bergantung pada beban, area pemasangan, pola penggunaan, dan kondisi instalasi listrik."],
      ["Apakah ada jaminan penghematan tertentu?", "Penghematan perlu dihitung dari data beban dan kondisi lokasi. PT Jurti Agung Mulia tidak membuat klaim angka tanpa data pendukung."],
      ["Apakah perlu grounding khusus?", "Sistem PLTS perlu memperhatikan proteksi dan grounding. Detailnya disesuaikan dengan desain dan kondisi instalasi."],
      ["Apakah melayani PLTS di Kepri?", "Ya. Area utama meliputi Tanjungpinang, Batam, Bintan, Karimun, Kepulauan Riau, dan proyek tertentu di Indonesia."]
    ],
    wa: "Halo PT Jurti Agung Mulia, saya ingin konsultasi PLTS/solar panel.\nLokasi:\nJenis bangunan:\nTujuan: efisiensi/cadangan/komersial/lainnya\nDaya listrik saat ini:\nPerkiraan area pemasangan:\nTarget waktu:"
  },
  {
    key: "grounding",
    slug: "/layanan/grounding-penangkal-petir/",
    nav: "Grounding & Penangkal Petir",
    title: "Jasa Grounding dan Penangkal Petir Kepri | PT Jurti Agung Mulia",
    ogTitle: "Jasa Grounding dan Penangkal Petir | PT Jurti Agung Mulia",
    meta: "Jasa grounding, sistem pembumian, dan penangkal petir untuk rumah, ruko, gedung, hotel, pabrik, panel listrik, dan fasilitas komersial di Kepri.",
    label: "Grounding, pembumian, penangkal petir",
    h1: "Jasa Grounding dan Penangkal Petir",
    lead: "Pekerjaan sistem pembumian dan proteksi petir untuk membantu melindungi instalasi listrik, panel, perangkat elektronik, dan area bangunan dari risiko gangguan kelistrikan.",
    summaryTitle: "Grounding bukan sekadar menanam batang tembaga",
    summary: [
      "Sistem grounding perlu memperhatikan kondisi tanah, nilai tahanan, koneksi, jalur penghantar, bonding, panel, dan kebutuhan proteksi bangunan. Pemasangan yang asal dapat membuat sistem sulit diperiksa dan kurang efektif.",
      "PT Jurti Agung Mulia menangani pekerjaan grounding dan penangkal petir untuk rumah, ruko, gedung, hotel, pabrik, panel listrik, dan fasilitas komersial sesuai kondisi lapangan."
    ],
    facts: [
      ["Fokus pekerjaan", "Grounding panel, grounding instalasi, pembumian, bonding, dan penangkal petir."],
      ["Kebutuhan umum", "Rumah, gedung, hotel, ruko, pabrik, fasilitas publik, dan perangkat sensitif."],
      ["Output kerja", "Sistem pembumian terpasang rapi, dapat diuji, dan mudah diperiksa saat maintenance."]
    ],
    info: [
      "Pemasangan grounding untuk panel, instalasi, dan peralatan listrik.",
      "Pekerjaan penangkal petir dan jalur down conductor sesuai kebutuhan bangunan.",
      "Pengukuran dan rekomendasi teknis disesuaikan dengan kondisi tanah dan sistem."
    ],
    scopeIntro: "Cakupan grounding dan proteksi petir ditentukan oleh jenis bangunan, risiko operasional, dan kondisi tanah.",
    scope: [
      ["Grounding panel", "Pembumian panel distribusi dan perangkat listrik agar sistem lebih aman diperiksa."],
      ["Grounding instalasi", "Sistem pembumian untuk instalasi gedung, rumah, ruko, dan fasilitas komersial."],
      ["Penangkal petir", "Pemasangan komponen proteksi petir sesuai kebutuhan bangunan dan area risiko."],
      ["Down conductor", "Penataan jalur penghantar turun yang rapi, aman, dan mudah diperiksa."],
      ["Pengukuran grounding", "Pemeriksaan nilai tahanan pembumian sesuai alat dan kondisi lapangan."],
      ["Perbaikan sistem lama", "Evaluasi koneksi, korosi, jalur kabel, dan titik grounding eksisting."]
    ],
    advantages: [
      ["Berbasis kondisi tanah", "Rekomendasi sistem menyesuaikan hasil pemeriksaan dan karakter lokasi."],
      ["Terintegrasi panel", "Grounding dapat dikaitkan dengan panel listrik, instalasi, dan PLTS."],
      ["Mudah diperiksa", "Koneksi dan titik uji dirancang agar maintenance lebih jelas."],
      ["Proteksi realistis", "Tim menjelaskan fungsi dan batas perlindungan tanpa klaim berlebihan."]
    ],
    faqs: [
      ["Apakah grounding wajib untuk panel listrik?", "Grounding adalah bagian penting dalam keselamatan dan proteksi sistem listrik. Detail kebutuhan disesuaikan dengan jenis instalasi dan standar yang relevan."],
      ["Berapa nilai tahanan grounding yang baik?", "Target nilai bergantung pada kebutuhan sistem, standar rujukan, dan kondisi lapangan. Pengukuran perlu dilakukan dengan alat yang sesuai."],
      ["Apakah grounding dan penangkal petir bisa dikerjakan sekaligus?", "Bisa. Lingkup pekerjaan dapat mencakup grounding panel, pembumian instalasi, down conductor, dan proteksi petir."],
      ["Apakah melayani grounding di Bintan dan Karimun?", "Ya. Area layanan meliputi Tanjungpinang, Batam, Bintan, Karimun, Kepulauan Riau, dan proyek tertentu di Indonesia."]
    ],
    wa: "Halo PT Jurti Agung Mulia, saya ingin konsultasi grounding/penangkal petir.\nLokasi:\nJenis bangunan:\nKebutuhan: grounding/penangkal petir/perbaikan/pengukuran\nKondisi eksisting:\nTarget waktu:"
  }
];

const serviceLinks = services.map((service) => [service.nav, service.slug]);
const areas = [
  {
    slug: "/area-layanan/kontraktor-listrik-tanjungpinang/",
    name: "Tanjungpinang",
    title: "Kontraktor Listrik Tanjungpinang | PT Jurti Agung Mulia",
    meta: "Kontraktor listrik Tanjungpinang untuk instalasi listrik, panel, SLO NIDI, maintenance, PLTS, grounding, dan penangkal petir.",
    h1: "Kontraktor Listrik Tanjungpinang",
    lead: "Dukungan pekerjaan kelistrikan untuk rumah, ruko, gedung, fasilitas komersial, dan proyek lokal di Tanjungpinang.",
    focus: ["instalasi listrik Tanjungpinang", "panel listrik Tanjungpinang", "SLO NIDI Tanjungpinang", "maintenance listrik Tanjungpinang"],
    note: "Sebagai basis layanan utama, Tanjungpinang menjadi area yang paling mudah dijadwalkan untuk konsultasi, survei, dan tindak lanjut teknis."
  },
  {
    slug: "/area-layanan/kontraktor-listrik-batam/",
    name: "Batam",
    title: "Kontraktor Listrik Batam untuk Gedung dan Industri | PT Jurti Agung Mulia",
    meta: "Kontraktor listrik Batam untuk instalasi gedung, panel listrik, SLO NIDI, maintenance panel, trafo 20 kV, PLTS, dan grounding.",
    h1: "Kontraktor Listrik Batam",
    lead: "Layanan kelistrikan untuk kawasan industri, pabrik, hotel, ruko, gedung komersial, dan fasilitas operasional di Batam.",
    focus: ["jasa instalasi listrik Batam", "jasa panel listrik Batam", "maintenance panel Batam", "SLO NIDI Batam"],
    note: "Untuk proyek Batam, tim menyesuaikan jadwal survei, akses kawasan, kebutuhan material, dan koordinasi operasional fasilitas."
  },
  {
    slug: "/area-layanan/kontraktor-listrik-bintan/",
    name: "Bintan",
    title: "Kontraktor Listrik Bintan untuk Hotel Resort dan Gedung | PT Jurti Agung Mulia",
    meta: "Kontraktor listrik Bintan untuk instalasi listrik, panel, SLO NIDI, maintenance, PLTS, grounding, hotel, resort, dan fasilitas komersial.",
    h1: "Kontraktor Listrik Bintan",
    lead: "Dukungan pekerjaan kelistrikan untuk hotel, resort, gedung, rumah, ruko, fasilitas publik, dan proyek komersial di Bintan.",
    focus: ["instalasi listrik Bintan", "panel listrik Bintan", "maintenance listrik Bintan", "grounding dan penangkal petir Bintan"],
    note: "Kebutuhan Bintan sering berkaitan dengan fasilitas hospitality dan bangunan komersial yang memerlukan pekerjaan rapi serta minim gangguan operasional."
  },
  {
    slug: "/area-layanan/kontraktor-listrik-karimun/",
    name: "Karimun",
    title: "Kontraktor Listrik Karimun: Instalasi Panel SLO NIDI | PT Jurti Agung Mulia",
    meta: "Kontraktor listrik Karimun untuk jasa instalasi listrik, panel listrik, SLO NIDI, maintenance listrik, grounding, PLTS, dan commissioning.",
    h1: "Kontraktor Listrik Karimun",
    lead: "Layanan kontraktor listrik Karimun untuk instalasi listrik, panel listrik, SLO NIDI, maintenance listrik, grounding, PLTS, dan pekerjaan commissioning sesuai kebutuhan proyek.",
    focus: ["kontraktor listrik Karimun", "jasa instalasi listrik Karimun", "jasa panel listrik Karimun", "jasa SLO NIDI Karimun", "maintenance listrik Karimun"],
    note: "Untuk proyek di Karimun, lingkup pekerjaan, jadwal survei, mobilisasi, dan kebutuhan material dikonsultasikan lebih dulu agar eksekusi lapangan lebih tertata."
  }
];

const solutions = [
  {
    slug: "/solusi/gedung-komersial/",
    name: "Gedung Komersial",
    title: "Solusi Kelistrikan Gedung Komersial | PT Jurti Agung Mulia",
    meta: "Solusi kelistrikan gedung komersial untuk instalasi listrik, panel distribusi, SLO NIDI, grounding, maintenance, dan commissioning.",
    h1: "Solusi Kelistrikan untuk Gedung Komersial",
    lead: "Dukungan instalasi listrik, panel, grounding, SLO NIDI, maintenance, dan commissioning untuk gedung kantor, ruko, pusat layanan, dan fasilitas komersial.",
    problems: ["Beban listrik bertambah karena tenant, AC, lift, pompa, dan perangkat operasional.", "Panel lama sulit diperiksa karena labeling tidak jelas atau ruang panel terlalu padat.", "Dokumen teknis diperlukan untuk pasang baru, perubahan daya, atau serah terima bangunan."],
    risks: ["Overload sirkit", "Panas pada panel", "Gangguan operasional tenant", "Kesulitan audit teknis"],
    outputs: ["Panel dan instalasi lebih tertata", "Rekomendasi pembagian beban", "Dokumentasi pekerjaan", "Arahan SLO NIDI bila diperlukan"]
  },
  {
    slug: "/solusi/hotel-dan-resort/",
    name: "Hotel dan Resort",
    title: "Solusi Kelistrikan Hotel dan Resort | PT Jurti Agung Mulia",
    meta: "Solusi kelistrikan hotel dan resort untuk panel listrik, instalasi, maintenance, PLTS, grounding, penangkal petir, dan trafo 20 kV.",
    h1: "Solusi Kelistrikan untuk Hotel dan Resort",
    lead: "Pendekatan kelistrikan yang memperhatikan kenyamanan tamu, jadwal operasional, backup power, panel distribusi, grounding, dan maintenance preventif.",
    problems: ["Operasional 24 jam membutuhkan sistem listrik yang stabil dan mudah dipelihara.", "Area publik, kamar, dapur, laundry, pompa, dan HVAC memiliki karakter beban berbeda.", "Pekerjaan maintenance perlu dijadwalkan agar tidak mengganggu tamu."],
    risks: ["Downtime layanan", "Gangguan sistem pompa dan AC", "Panas pada panel", "Risiko perangkat elektronik sensitif"],
    outputs: ["Rencana maintenance", "Pemeriksaan panel dan grounding", "Rekomendasi proteksi", "Integrasi PLTS atau backup system bila relevan"]
  },
  {
    slug: "/solusi/pabrik-dan-industri/",
    name: "Pabrik dan Industri",
    title: "Solusi Kelistrikan Pabrik dan Industri | PT Jurti Agung Mulia",
    meta: "Solusi kelistrikan pabrik dan industri untuk panel LVMDP MDP SDP, maintenance trafo 20 kV, instalasi mesin, grounding, dan commissioning.",
    h1: "Solusi Kelistrikan untuk Pabrik dan Industri",
    lead: "Pekerjaan kelistrikan untuk fasilitas produksi yang membutuhkan distribusi daya, panel industri, maintenance trafo, grounding, dan pengujian teknis.",
    problems: ["Beban mesin dan proses produksi membutuhkan koordinasi proteksi yang baik.", "Panel, trafo, dan kabel bekerja pada beban tinggi sehingga perlu inspeksi berkala.", "Perubahan layout produksi sering membutuhkan modifikasi instalasi."],
    risks: ["Downtime produksi", "Gangguan proteksi", "Ketidakseimbangan beban", "Penurunan kualitas trafo"],
    outputs: ["Panel distribusi rapi", "Maintenance panel dan trafo", "Catatan pengujian", "Rekomendasi perbaikan prioritas"]
  },
  {
    slug: "/solusi/rumah-sakit-dan-fasilitas-publik/",
    name: "Rumah Sakit dan Fasilitas Publik",
    title: "Solusi Kelistrikan Rumah Sakit dan Fasilitas Publik | PT Jurti Agung Mulia",
    meta: "Solusi kelistrikan rumah sakit dan fasilitas publik untuk instalasi, panel, maintenance, grounding, penangkal petir, SLO NIDI, dan commissioning.",
    h1: "Solusi Kelistrikan untuk Rumah Sakit dan Fasilitas Publik",
    lead: "Dukungan kelistrikan untuk fasilitas yang membutuhkan keandalan, dokumentasi, keselamatan kerja, dan koordinasi pekerjaan yang tertib.",
    problems: ["Sistem listrik melayani area kritis, perangkat sensitif, dan aktivitas publik.", "Pekerjaan perlu dikoordinasikan dengan jadwal operasional fasilitas.", "Dokumentasi dan kepatuhan teknis sering menjadi bagian penting proyek."],
    risks: ["Gangguan layanan publik", "Risiko perangkat sensitif", "Kendala audit", "Kesulitan maintenance jangka panjang"],
    outputs: ["Pemeriksaan instalasi dan panel", "Rekomendasi keselamatan", "Dokumentasi pekerjaan", "Arahan legalitas teknis sesuai kebutuhan"]
  }
];

const articles = [
  {
    slug: "/artikel/apa-itu-slo-dan-nidi/",
    category: "Legalitas listrik",
    title: "Apa Itu SLO dan NIDI? Fungsi, Kebutuhan, dan Alurnya | PT Jurti Agung Mulia",
    meta: "Penjelasan SLO dan NIDI untuk instalasi listrik: fungsi, kapan dibutuhkan, data yang perlu disiapkan, batas kewenangan, dan link konsultasi PT Jurti Agung Mulia.",
    h1: "Apa Itu SLO dan NIDI?",
    intro: "SLO dan NIDI sering muncul saat pasang baru, perubahan daya, atau kebutuhan dokumen instalasi listrik. Keduanya perlu dipahami sebagai bagian dari proses teknis dan administratif, bukan sekadar formalitas.",
    toc: [["Fungsi SLO dan NIDI", "fungsi"], ["Kapan dibutuhkan", "kapan"], ["Data yang disiapkan", "data"], ["Batas proses", "batas"], ["FAQ", "faq"]],
    sections: [
      ["fungsi", "Fungsi SLO dan NIDI", ["Sertifikat Laik Operasi berkaitan dengan kelayakan operasi instalasi listrik. NIDI atau Nomor Identitas Instalasi berkaitan dengan identitas instalasi yang menjadi bagian dari proses administrasi teknis.", "Dalam praktiknya, kebutuhan SLO dan NIDI dapat dipengaruhi oleh daya listrik, jenis bangunan, kondisi instalasi, dan ketentuan lembaga atau pihak terkait. Karena itu, pemeriksaan awal penting agar pelanggan memahami data apa yang perlu disiapkan."]],
      ["kapan", "Kapan SLO NIDI biasanya dibutuhkan?", ["Kebutuhan ini sering muncul pada pasang baru, perubahan daya, pemasangan kWh meter, serah terima bangunan, atau saat instalasi listrik perlu dinyatakan laik sesuai ketentuan yang berlaku.", "Untuk ruko, gedung, atau fasilitas komersial, proses biasanya perlu melihat panel, pembagian sirkit, grounding, dan kondisi instalasi eksisting. Jika ada temuan teknis, perbaikan perlu dilakukan sebelum proses dilanjutkan."]],
      ["data", "Data yang perlu disiapkan", ["Data awal yang membantu konsultasi antara lain lokasi, daya listrik, jenis bangunan, status instalasi, foto panel atau instalasi, kebutuhan pasang baru atau perubahan daya, serta target waktu.", "Semakin lengkap data awal, semakin cepat tim dapat memberi arahan apakah perlu survei, perapian instalasi, atau dokumen teknis tambahan."]],
      ["batas", "Batas kewenangan yang perlu dipahami", ["Pendampingan SLO NIDI tidak boleh dipahami sebagai janji hasil penerbitan dokumen. Proses dan keputusan mengikuti ketentuan pihak berwenang atau lembaga terkait.", "PT Jurti Agung Mulia membantu sisi teknis, pemeriksaan instalasi, dan arahan data secara realistis. Tidak ada nomor legalitas atau sertifikat yang dibuat tanpa dokumen resmi."]]
    ],
    related: [["Konsultasi jasa SLO NIDI", "/layanan/jasa-slo-nidi/"], ["Jasa instalasi listrik", "/layanan/jasa-instalasi-listrik/"], ["Legalitas perusahaan", "/legalitas/"]],
    faqs: [
      ["Apakah SLO dan NIDI sama?", "Tidak. SLO berkaitan dengan laik operasi, sedangkan NIDI berkaitan dengan identitas instalasi. Kebutuhan detail mengikuti ketentuan pihak terkait."],
      ["Apakah rumah tinggal bisa membutuhkan SLO NIDI?", "Bisa, terutama pada kondisi pasang baru, perubahan daya, atau kebutuhan administrasi tertentu sesuai ketentuan."],
      ["Apakah perlu survei lokasi?", "Sering kali survei atau pemeriksaan data teknis diperlukan agar kondisi instalasi bisa dinilai lebih akurat."]
    ],
    wa: "Halo PT Jurti Agung Mulia, saya membaca artikel SLO/NIDI dan ingin konsultasi.\nLokasi:\nDaya listrik:\nKebutuhan: pasang baru/perubahan daya/lainnya\nStatus instalasi:\nTarget waktu:"
  },
  {
    slug: "/artikel/perbedaan-lvmdp-mdp-sdp/",
    category: "Panel listrik",
    title: "Perbedaan LVMDP, MDP, dan SDP pada Panel Listrik | PT Jurti Agung Mulia",
    meta: "Pelajari perbedaan LVMDP, MDP, dan SDP dalam sistem distribusi listrik gedung, fungsi panel utama, sub-panel, proteksi, dan maintenance.",
    h1: "Perbedaan LVMDP, MDP, dan SDP",
    intro: "LVMDP, MDP, dan SDP adalah istilah yang sering muncul dalam sistem distribusi listrik gedung dan industri. Memahami perannya membantu pemilik proyek membaca kebutuhan panel dengan lebih tepat.",
    toc: [["Gambaran distribusi", "gambaran"], ["Fungsi LVMDP", "lvmdp"], ["Fungsi MDP dan SDP", "mdp"], ["Hal teknis penting", "teknis"], ["FAQ", "faq"]],
    sections: [
      ["gambaran", "Gambaran sistem distribusi listrik", ["Distribusi listrik pada gedung biasanya tersusun bertingkat. Daya dari sumber utama masuk ke panel utama, lalu dibagi ke panel turunan untuk area, lantai, mesin, atau kelompok beban tertentu.", "Susunan ini membantu pembagian beban, isolasi gangguan, pengamanan, dan maintenance. Panel yang dirancang buruk membuat troubleshooting lebih lama dan risiko downtime lebih tinggi."]],
      ["lvmdp", "Apa itu LVMDP?", ["LVMDP atau Low Voltage Main Distribution Panel adalah panel distribusi utama tegangan rendah. Panel ini biasanya menerima suplai utama dari trafo atau sumber utama lain, lalu mendistribusikan daya ke panel lanjutan.", "Karena posisinya kritis, LVMDP perlu memperhatikan kapasitas busbar, incoming, outgoing, proteksi utama, metering, ruang kerja, ventilasi, dan labeling."]],
      ["mdp", "Apa fungsi MDP dan SDP?", ["MDP atau Main Distribution Panel berfungsi sebagai panel distribusi utama pada sistem tertentu. SDP atau Sub Distribution Panel membagi daya ke area yang lebih spesifik seperti lantai, zona produksi, tenant, atau kelompok peralatan.", "Dengan SDP, gangguan pada satu area lebih mudah diisolasi tanpa mematikan seluruh sistem. Namun desain pembagian beban tetap harus dipikirkan sejak awal."]],
      ["teknis", "Hal teknis yang perlu diperhatikan", ["Panel perlu dirancang berdasarkan arus beban, jenis beban, koordinasi proteksi, kapasitas kabel, ruang panel, sistem grounding, kebutuhan ATS/AMF, dan kemungkinan ekspansi.", "Selain itu, wiring dan labeling sangat menentukan kualitas maintenance. Panel yang rapi mempercepat inspeksi, pengujian, dan perbaikan saat terjadi gangguan."]]
    ],
    related: [["Jasa panel listrik", "/layanan/panel-listrik/"], ["Maintenance listrik", "/layanan/maintenance-listrik/"], ["Grounding dan penangkal petir", "/layanan/grounding-penangkal-petir/"]],
    faqs: [
      ["Apakah semua gedung membutuhkan LVMDP?", "Tidak selalu. Kebutuhan LVMDP bergantung pada skala daya, sumber listrik, dan desain distribusi gedung."],
      ["Apakah MDP dan SDP bisa digabung?", "Pada sistem kecil, panel bisa lebih sederhana. Pada gedung atau industri, pemisahan panel membantu operasi dan maintenance."],
      ["Apa tanda panel perlu upgrade?", "Indikasinya antara lain beban bertambah, ruang panel penuh, panas berlebih, proteksi sering trip, atau panel sulit diperiksa."]
    ],
    wa: "Halo PT Jurti Agung Mulia, saya membaca artikel LVMDP/MDP/SDP dan ingin konsultasi panel listrik.\nJenis panel:\nKapasitas daya:\nLokasi:\nKebutuhan: baru/perbaikan/upgrade\nTarget waktu:"
  },
  {
    slug: "/artikel/maintenance-panel-listrik-gedung/",
    category: "Maintenance",
    title: "Maintenance Panel Listrik Gedung: Risiko dan Checklist | PT Jurti Agung Mulia",
    meta: "Panduan maintenance panel listrik gedung: risiko panas, koneksi longgar, thermoscanning, tightening, inspeksi visual, dan kapan perlu kontraktor listrik.",
    h1: "Maintenance Panel Listrik Gedung",
    intro: "Panel listrik gedung bekerja terus menerus untuk mendistribusikan daya. Tanpa maintenance, masalah kecil seperti koneksi longgar atau debu dapat berkembang menjadi gangguan operasional.",
    toc: [["Mengapa penting", "penting"], ["Risiko umum", "risiko"], ["Checklist awal", "checklist"], ["Jadwal maintenance", "jadwal"], ["FAQ", "faq"]],
    sections: [
      ["penting", "Mengapa maintenance panel penting?", ["Panel adalah titik pusat distribusi dan proteksi. Bila panel terganggu, dampaknya bisa meluas ke lantai, tenant, mesin, pompa, AC, atau sistem operasional lain.", "Maintenance preventif membantu menemukan tanda panas, koneksi longgar, komponen aus, debu, karat, atau perubahan beban sebelum berubah menjadi kerusakan besar."]],
      ["risiko", "Risiko umum pada panel gedung", ["Risiko yang sering muncul antara lain terminal longgar, kabel berubah warna karena panas, breaker bekerja tidak normal, labeling hilang, sirkit bercampur, dan ventilasi panel buruk.", "Pada gedung komersial, risiko ini dapat menyebabkan downtime, gangguan tenant, biaya perbaikan mendadak, dan kesulitan audit teknis."]],
      ["checklist", "Checklist awal maintenance", ["Pemeriksaan awal dapat mencakup inspeksi visual, kebersihan panel, kondisi kabel, kekencangan terminal, pembacaan arus dan tegangan, thermoscanning, serta pengecekan grounding.", "Setiap temuan sebaiknya dicatat agar pengelola gedung mengetahui prioritas perbaikan dan dapat mengatur jadwal shutdown bila diperlukan."]],
      ["jadwal", "Kapan panel perlu diperiksa?", ["Frekuensi maintenance bergantung pada beban, usia panel, lingkungan, dan risiko operasional. Panel dengan beban tinggi atau area lembap dan berdebu biasanya perlu perhatian lebih sering.", "Pemeriksaan juga disarankan setelah perubahan beban besar, penambahan tenant, renovasi, atau muncul gejala seperti bau panas dan proteksi sering trip."]]
    ],
    related: [["Maintenance listrik", "/layanan/maintenance-listrik/"], ["Panel listrik", "/layanan/panel-listrik/"], ["Solusi gedung komersial", "/solusi/gedung-komersial/"]],
    faqs: [
      ["Apakah maintenance panel harus shutdown?", "Pemeriksaan visual tertentu bisa dilakukan tanpa shutdown, tetapi tightening dan pekerjaan internal panel perlu kondisi aman sesuai metode kerja."],
      ["Apa fungsi thermoscanning?", "Thermoscanning membantu mendeteksi titik panas pada koneksi, breaker, busbar, atau area panel yang berisiko."],
      ["Apakah perlu laporan maintenance?", "Catatan temuan sangat disarankan agar pengelola fasilitas punya dasar keputusan perbaikan."]
    ],
    wa: "Halo PT Jurti Agung Mulia, saya membaca artikel maintenance panel dan ingin konsultasi.\nLokasi:\nJenis fasilitas:\nKeluhan/tujuan maintenance:\nJumlah panel/area:\nBisa shutdown: ya/tidak\nTarget waktu:"
  },
  {
    slug: "/artikel/standar-grounding-instalasi-listrik/",
    category: "Grounding",
    title: "Standar Grounding Instalasi Listrik: Fungsi dan Pemeriksaan | PT Jurti Agung Mulia",
    meta: "Penjelasan grounding instalasi listrik: fungsi pembumian, pengukuran tahanan, risiko sistem buruk, koneksi panel, dan kapan perlu perbaikan.",
    h1: "Standar Grounding Instalasi Listrik",
    intro: "Grounding adalah bagian penting dari keselamatan sistem listrik. Namun dalam praktik lapangan, grounding sering dipasang tanpa dokumentasi, titik uji, atau pemeriksaan yang jelas.",
    toc: [["Fungsi grounding", "fungsi"], ["Yang memengaruhi nilai", "nilai"], ["Kesalahan umum", "kesalahan"], ["Kapan diperiksa", "periksa"], ["FAQ", "faq"]],
    sections: [
      ["fungsi", "Fungsi grounding dalam instalasi listrik", ["Grounding membantu menyediakan jalur pembumian untuk sistem listrik dan perangkat proteksi. Pada panel, grounding juga membantu membuat inspeksi dan proteksi lebih tertata.", "Dalam bangunan yang memiliki perangkat sensitif, PLTS, panel besar, atau penangkal petir, grounding perlu direncanakan sebagai bagian dari sistem, bukan pekerjaan tambahan belakangan."]],
      ["nilai", "Apa yang memengaruhi nilai grounding?", ["Nilai tahanan grounding dipengaruhi jenis tanah, kelembapan, kedalaman elektroda, jumlah titik, kualitas koneksi, dan kondisi korosi. Karena itu hasil setiap lokasi bisa berbeda.", "Target nilai harus mengacu pada kebutuhan sistem dan standar rujukan yang relevan. Pengukuran lapangan diperlukan sebelum membuat kesimpulan teknis."]],
      ["kesalahan", "Kesalahan umum di lapangan", ["Kesalahan yang sering terjadi antara lain koneksi tidak rapi, titik uji tidak tersedia, kabel grounding terlalu kecil, sambungan korosi, dan grounding tidak terhubung dengan panel yang membutuhkan.", "Masalah lain adalah menganggap penangkal petir dan grounding panel bisa dipasang sembarang tanpa memperhatikan jalur down conductor, bonding, dan risiko perangkat."]],
      ["periksa", "Kapan grounding perlu diperiksa?", ["Grounding perlu diperiksa saat instalasi baru, renovasi panel, pemasangan penangkal petir, pemasangan PLTS, muncul gangguan perangkat, atau ketika dokumen teknis mensyaratkan hasil pengukuran.", "Pemeriksaan berkala juga bermanfaat pada fasilitas komersial, hotel, pabrik, dan bangunan publik yang memiliki risiko operasional lebih tinggi."]]
    ],
    related: [["Grounding dan penangkal petir", "/layanan/grounding-penangkal-petir/"], ["Panel listrik", "/layanan/panel-listrik/"], ["PLTS solar panel", "/layanan/plts-solar-panel/"]],
    faqs: [
      ["Apakah nilai grounding harus sama di semua bangunan?", "Tidak. Target nilai bergantung pada sistem, standar rujukan, dan kondisi tanah."],
      ["Apakah grounding bisa diperbaiki?", "Bisa. Perbaikan dapat mencakup titik tambahan, perapian koneksi, penggantian kabel, atau evaluasi jalur pembumian."],
      ["Apakah penangkal petir perlu grounding?", "Ya. Sistem proteksi petir membutuhkan jalur pembumian yang direncanakan dengan baik."]
    ],
    wa: "Halo PT Jurti Agung Mulia, saya membaca artikel grounding dan ingin konsultasi.\nLokasi:\nJenis bangunan:\nKebutuhan: grounding/penangkal petir/pengukuran/perbaikan\nKondisi eksisting:\nTarget waktu:"
  },
  {
    slug: "/artikel/cara-memilih-kontraktor-listrik/",
    category: "Kontraktor listrik",
    title: "Cara Memilih Kontraktor Listrik untuk Gedung dan Industri | PT Jurti Agung Mulia",
    meta: "Tips memilih kontraktor listrik untuk instalasi gedung, panel, maintenance, SLO NIDI, grounding, PLTS, dan proyek komersial secara aman dan realistis.",
    h1: "Cara Memilih Kontraktor Listrik",
    intro: "Memilih kontraktor listrik tidak boleh hanya berdasarkan harga. Pekerjaan kelistrikan menyangkut keselamatan, operasional bangunan, dokumen teknis, dan biaya jangka panjang.",
    toc: [["Cek lingkup kerja", "lingkup"], ["Perhatikan komunikasi teknis", "komunikasi"], ["Jangan abaikan dokumen", "dokumen"], ["Bandingkan secara sehat", "banding"], ["FAQ", "faq"]],
    sections: [
      ["lingkup", "Cek kejelasan lingkup kerja", ["Kontraktor yang baik menjelaskan pekerjaan secara spesifik: area kerja, kapasitas daya, panel, kabel, proteksi, grounding, pengujian, dan batas pekerjaan. Lingkup yang kabur sering memunculkan biaya tambahan di tengah proyek.", "Untuk gedung dan industri, minta penjelasan tentang panel, jalur kabel, pembagian beban, jadwal shutdown, dan output pekerjaan."]],
      ["komunikasi", "Perhatikan komunikasi teknis", ["Komunikasi teknis yang baik tidak harus rumit. Yang penting, kontraktor mampu menjelaskan risiko, opsi, konsekuensi, dan kebutuhan data dengan bahasa yang bisa dipahami pemilik proyek.", "Hindari keputusan yang hanya berbasis asumsi. Foto lapangan, data daya, single line diagram, dan survei sering diperlukan untuk menghasilkan rekomendasi yang lebih akurat."]],
      ["dokumen", "Jangan abaikan dokumen dan standar kerja", ["Untuk kebutuhan SLO NIDI, commissioning, maintenance, atau tender, dokumentasi pekerjaan dan legalitas perusahaan dapat menjadi bagian penting. Namun nomor legalitas tidak boleh dikarang atau ditulis tanpa dokumen resmi.", "PT Jurti Agung Mulia menyediakan penjelasan legalitas dan standar kerja, serta dapat menunjukkan dokumen resmi saat kebutuhan tender, proyek, atau kerja sama."]],
      ["banding", "Bandingkan penawaran secara sehat", ["Bandingkan bukan hanya total harga, tetapi juga spesifikasi material, merek komponen, kapasitas, metode kerja, jadwal, garansi pekerjaan bila ada, dan output dokumen.", "Harga yang lebih murah dapat menjadi mahal bila panel sulit dirawat, proteksi tidak tepat, atau pekerjaan perlu dibongkar ulang."]]
    ],
    related: [["Layanan kelistrikan", "/layanan/"], ["Legalitas", "/legalitas/"], ["Kontak PT Jurti Agung Mulia", "/kontak/"]],
    faqs: [
      ["Apa data awal untuk konsultasi kontraktor listrik?", "Lokasi, jenis bangunan, daya listrik, kebutuhan pekerjaan, foto kondisi, dan target waktu sangat membantu konsultasi awal."],
      ["Apakah kontraktor listrik harus punya pengalaman panel?", "Untuk proyek gedung dan industri, pemahaman panel distribusi sangat penting karena panel menjadi pusat proteksi dan pembagian daya."],
      ["Apakah boleh meminta dokumen legalitas?", "Boleh. Untuk kebutuhan tender, proyek, atau kerja sama, dokumen resmi dapat diminta dan ditunjukkan sesuai kebutuhan."]
    ],
    wa: "Halo PT Jurti Agung Mulia, saya membaca artikel cara memilih kontraktor listrik dan ingin konsultasi proyek.\nLokasi:\nJenis bangunan:\nKebutuhan pekerjaan:\nDaya listrik:\nTarget waktu:"
  }
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function waLink(message) {
  return `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(message)}`;
}

function jsonLd(data) {
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}

function breadcrumbs(items) {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE}${item.url}`
    }))
  });
}

function faqSchema(faqs) {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer
      }
    }))
  });
}

function localBusinessSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "Electrician",
    "@id": `${SITE}/#electrician`,
    name: "PT Jurti Agung Mulia",
    url: `${SITE}/`,
    image: OG_IMAGE,
    telephone: PHONE_DISPLAY,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tanjungpinang",
      addressRegion: "Kepulauan Riau",
      addressCountry: "ID"
    },
    areaServed: ["Tanjungpinang", "Batam", "Bintan", "Karimun", "Kepulauan Riau", "Indonesia"],
    priceRange: "$$",
    description: "PT Jurti Agung Mulia adalah kontraktor kelistrikan profesional di Kepulauan Riau untuk instalasi listrik, panel listrik, SLO NIDI, maintenance, trafo 20 kV, PLTS, grounding, penangkal petir, dan test commissioning.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Layanan Kelistrikan PT Jurti Agung Mulia",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.nav,
          url: `${SITE}${service.slug}`
        }
      }))
    }
  });
}

function serviceSchema(service) {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE}${service.slug}#service`,
    name: service.ogTitle,
    serviceType: service.nav,
    category: "Kontraktor kelistrikan",
    description: service.meta,
    provider: {
      "@type": "Electrician",
      "@id": `${SITE}/#electrician`,
      name: "PT Jurti Agung Mulia",
      telephone: PHONE_DISPLAY,
      email: EMAIL
    },
    areaServed: ["Tanjungpinang", "Batam", "Bintan", "Karimun", "Kepulauan Riau", "Indonesia"],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${SITE}${service.slug}`,
      servicePhone: PHONE_DISPLAY,
      availableLanguage: ["id"]
    },
    url: `${SITE}${service.slug}`
  });
}

function webPageSchema({ type = "WebPage", name, description, url }) {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${SITE}${url}#webpage`,
    name,
    description,
    url: `${SITE}${url}`,
    inLanguage: "id-ID",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      name: "PT Jurti Agung Mulia",
      url: `${SITE}/`
    },
    publisher: {
      "@type": "Organization",
      name: "PT Jurti Agung Mulia",
      url: `${SITE}/`
    }
  });
}

function webSiteSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE}/#website`,
    name: "PT Jurti Agung Mulia",
    url: `${SITE}/`,
    inLanguage: "id-ID",
    publisher: {
      "@type": "Organization",
      name: "PT Jurti Agung Mulia",
      url: `${SITE}/`
    }
  });
}

function head({ title, description, url, type = "website", schemas = [] }) {
  return `<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${SITE}${url}">
  <meta property="og:type" content="${type}">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:image" content="${OG_IMAGE}">
  <meta property="og:url" content="${SITE}${url}">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="stylesheet" href="/assets/css/styles.css">
  ${schemas.join("\n  ")}
</head>`;
}

function header() {
  return `<a class="skip-link" href="#main">Lewati ke konten</a>
  <div class="topbar">
    <div class="container topbar__inner">
      <span>HQ: Tanjungpinang, Kepulauan Riau</span>
      <span>Area: Batam, Bintan, Karimun, Kepri, Indonesia</span>
      <a href="mailto:${EMAIL}">${EMAIL}</a>
      <a href="tel:+${PHONE_WA}">${PHONE_DISPLAY}</a>
    </div>
  </div>
  <header class="site-header">
    <div class="container nav-wrap">
      <a class="brand" href="/" aria-label="PT Jurti Agung Mulia">
        <span class="brand__mark" aria-hidden="true">JAM</span>
        <span class="brand__text"><span class="brand__name">PT JURTI <strong>AGUNG MULIA</strong></span><span class="brand__tagline">Kontraktor Kelistrikan Profesional</span></span>
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>
      <nav class="site-nav" id="site-nav" aria-label="Navigasi utama">
        <a href="/">Beranda</a>
        <a href="/tentang-kami/">Tentang Kami</a>
        <div class="nav-dropdown" data-nav-dropdown>
          <button class="nav-dropdown__toggle" type="button" aria-expanded="false" aria-controls="services-menu">
            <span>Layanan</span>
            <span class="nav-dropdown__chevron" aria-hidden="true"></span>
          </button>
          <div class="nav-dropdown__menu" id="services-menu">
            ${services.map((service) => `<a href="${service.slug}">${escapeHtml(service.nav)}</a>`).join("\n            ")}
          </div>
        </div>
        <a href="/legalitas/">Legalitas</a>
        <a href="/proyek/">Proyek</a>
        <a href="/artikel/">Artikel</a>
        <a class="nav-cta" href="/kontak/">Kontak</a>
      </nav>
    </div>
  </header>`;
}

function footer(primaryWaMessage) {
  return `<footer class="site-footer">
    <div class="container footer-grid footer-grid--wide">
      <div>
        <div class="footer-brand">PT JURTI <span>AGUNG MULIA</span></div>
        <p>Kontraktor kelistrikan profesional di Kepulauan Riau untuk instalasi listrik, panel, SLO NIDI, maintenance, trafo 20 kV, PLTS, grounding, dan commissioning.</p>
        <p><a href="${waLink(primaryWaMessage)}" target="_blank" rel="noopener">WhatsApp resmi: ${PHONE_DISPLAY}</a></p>
      </div>
      <div>
        <h2>Layanan Utama</h2>
        <ul>${services.map((service) => `<li><a href="${service.slug}">${escapeHtml(service.nav)}</a></li>`).join("")}</ul>
      </div>
      <div>
        <h2>Area Layanan</h2>
        <ul>${areas.map((area) => `<li><a href="${area.slug}">${escapeHtml(area.name)}</a></li>`).join("")}<li><a href="/area-layanan/">Semua Area</a></li></ul>
      </div>
      <div>
        <h2>Solusi Industri</h2>
        <ul>${solutions.map((solution) => `<li><a href="${solution.slug}">${escapeHtml(solution.name)}</a></li>`).join("")}<li><a href="/solusi/">Semua Solusi</a></li></ul>
      </div>
      <div>
        <h2>Perusahaan</h2>
        <ul>
          <li><a href="/tentang-kami/">Tentang Kami</a></li>
          <li><a href="/legalitas/">Legalitas dan Standar Kerja</a></li>
          <li><a href="/proyek/">Portofolio Teknis</a></li>
          <li><a href="/artikel/">Artikel Edukasi</a></li>
          <li><a href="/kontak/">Kontak</a></li>
        </ul>
      </div>
      <div>
        <h2>Kontak</h2>
        <ul>
          <li><a href="tel:+${PHONE_WA}">${PHONE_DISPLAY}</a></li>
          <li><a href="mailto:${EMAIL}">${EMAIL}</a></li>
          <li>Tanjungpinang, Kepulauan Riau</li>
          <li><a href="${waLink("Halo PT Jurti Agung Mulia, saya ingin meminta profil perusahaan/legalitas.\nNama perusahaan:\nKebutuhan:\nLokasi proyek:")}" target="_blank" rel="noopener">Minta profil/legalitas</a></li>
        </ul>
      </div>
    </div>
    <div class="container footer-bottom">
      <p>&copy; 2026 PT Jurti Agung Mulia. All rights reserved.</p>
      <p>Quality. Safety. Professionalism.</p>
    </div>
  </footer>`;
}

function layout({ bodyClass = "inner-page", title, description, url, type, schemas = [], main, waMessage }) {
  const defaultMessage = waMessage || "Halo PT Jurti Agung Mulia, saya ingin konsultasi kebutuhan kelistrikan.\nLokasi:\nJenis bangunan:\nKebutuhan:\nTarget waktu:";
  const defaultWa = waLink(defaultMessage);
  return `<!doctype html>
<html lang="id">
${head({ title, description, url, type, schemas })}
<body class="${bodyClass}">
  ${header()}
  <main id="main">
${main}
  </main>
  ${footer(defaultMessage)}
  <a class="floating-wa" href="${defaultWa}" target="_blank" rel="noopener" aria-label="Hubungi WhatsApp PT Jurti Agung Mulia">WA</a>
  <script src="/assets/js/main.js" defer></script>
</body>
</html>
`;
}

function pageHero({ eyebrow, h1, lead, cta, secondary }) {
  return `    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">${escapeHtml(eyebrow)}</span>
        <h1>${escapeHtml(h1)}</h1>
        <p>${escapeHtml(lead)}</p>
        ${cta ? `<div class="hero-actions"><a class="btn btn-yellow" href="${cta.href}" target="${cta.external ? "_blank" : "_self"}" rel="${cta.external ? "noopener" : ""}">${escapeHtml(cta.label)}</a>${secondary ? `<a class="btn btn-outline" href="${secondary.href}">${escapeHtml(secondary.label)}</a>` : ""}</div>` : ""}
      </div>
    </section>`;
}

function sectionHeading(eyebrow, h2, p) {
  return `<div class="section-heading">
          <span>${escapeHtml(eyebrow)}</span>
          <h2>${escapeHtml(h2)}</h2>
          <p>${escapeHtml(p)}</p>
        </div>`;
}

function technicalVisual(items, modifier = "") {
  const rows = items.map(([label, value]) => `<div><strong>${escapeHtml(label)}</strong><span>${escapeHtml(value)}</span></div>`).join("");
  return `<aside class="service-hero__panel" aria-label="Ringkasan cepat layanan">
          <div class="technical-visual ${modifier}">
            <div class="technical-visual__busbar"></div>
            <div class="technical-visual__grid">
              <span></span><span></span><span></span><span></span><span></span><span></span>
            </div>
            <div class="technical-visual__meter">JAM</div>
          </div>
          <div class="service-hero__facts">${rows}</div>
        </aside>`;
}

function writePage(url, html) {
  const file = url === "/" ? "index.html" : join(url.slice(1), "index.html");
  const fullPath = join(ROOT, file);
  mkdirSync(dirname(fullPath), { recursive: true });
  writeFileSync(fullPath, html, "utf8");
}

function cardGrid(items, className = "three") {
  return `<div class="card-grid ${className}">${items.map((item) => `<article class="card">
          ${item.kicker ? `<span class="card-index">${escapeHtml(item.kicker)}</span>` : ""}
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
          ${item.href ? `<a href="${item.href}">${escapeHtml(item.link || "Pelajari detail")}</a>` : ""}
        </article>`).join("\n        ")}</div>`;
}

const serviceTechnicalNotes = {
  instalasi: [
    ["Pembagian sirkit", "Titik penerangan, stop kontak, AC, pompa, mesin, dan beban khusus sebaiknya dipisah agar proteksi lebih mudah dibaca."],
    ["Jalur kabel", "Tray, conduit, dan rute kabel perlu memperhatikan akses inspeksi, risiko panas, dan potensi pekerjaan renovasi berikutnya."],
    ["Koordinasi panel", "Instalasi baru perlu dikaitkan dengan kapasitas panel, grounding, MCB/MCCB, serta kebutuhan SLO NIDI bila relevan."],
    ["Pengujian awal", "Sebelum serah terima, fungsi titik, polaritas, proteksi, dan pembagian beban perlu diperiksa sesuai lingkup pekerjaan."]
  ],
  slo: [
    ["Status instalasi", "Proses SLO NIDI lebih aman dimulai setelah status pasang baru, perubahan daya, atau kebutuhan kWh meter dipastikan."],
    ["Data daya", "Daya terpasang, pembagian panel, foto instalasi, dan identitas lokasi membantu mempercepat pemeriksaan awal."],
    ["Batas kewenangan", "Tim membantu sisi teknis dan data, sementara penerbitan dokumen mengikuti ketentuan lembaga atau pihak terkait."],
    ["Perbaikan temuan", "Jika instalasi belum rapi, perbaikan panel, grounding, atau pembagian sirkit perlu diselesaikan sebelum proses lanjut."]
  ],
  panel: [
    ["Kapasitas busbar", "Busbar dan komponen proteksi perlu mengikuti arus beban, cadangan kapasitas, dan kebutuhan ekspansi."],
    ["Koordinasi proteksi", "Incoming, outgoing, MCCB/MCB, fuse, relay, dan metering harus mudah dipahami saat operasi dan troubleshooting."],
    ["Wiring kontrol", "Kabel kontrol ATS/AMF, indikator, selector, terminal, dan labeling menentukan kemudahan maintenance."],
    ["Commissioning panel", "Panel perlu diperiksa fungsi, urutan kerja, terminasi, kebersihan, dan dokumentasi sebelum digunakan."]
  ],
  maintenance: [
    ["Titik panas", "Thermoscanning membantu membaca koneksi, breaker, terminal, atau busbar yang mulai berisiko."],
    ["Koneksi mekanis", "Tightening dilakukan pada kondisi aman karena baut longgar sering menjadi sumber panas dan gangguan."],
    ["Kebersihan panel", "Debu, kelembapan, korosi, dan serangga dapat memengaruhi isolasi serta umur komponen."],
    ["Prioritas temuan", "Catatan maintenance perlu membedakan temuan kritis, perbaikan terjadwal, dan monitoring berkala."]
  ],
  trafo: [
    ["Kualitas minyak", "BDV menjadi salah satu indikator untuk membaca kondisi dielektrik minyak trafo."],
    ["Rasio belitan", "TTR membantu memeriksa kesesuaian rasio dan indikasi masalah internal tertentu."],
    ["Isolasi", "Insulation test memberi gambaran tahanan isolasi yang perlu dibaca bersama kondisi trafo lainnya."],
    ["Shutdown aman", "Pekerjaan trafo 20 kV perlu koordinasi pemadaman, akses ruang trafo, dan metode keselamatan tegangan menengah."]
  ],
  plts: [
    ["Profil beban", "Kapasitas PLTS perlu dihitung dari pola pemakaian, bukan hanya luas atap atau jumlah panel."],
    ["Proteksi DC/AC", "Isolator, proteksi, jalur kabel, inverter, dan integrasi panel harus dibahas sejak desain."],
    ["Struktur pemasangan", "Arah, kemiringan, bayangan, dan kekuatan dudukan memengaruhi hasil teknis di lapangan."],
    ["Grounding PLTS", "Sistem PLTS perlu pembumian dan proteksi yang selaras dengan panel serta instalasi eksisting."]
  ],
  grounding: [
    ["Kondisi tanah", "Nilai tahanan dipengaruhi jenis tanah, kelembapan, kedalaman elektroda, dan kualitas koneksi."],
    ["Titik uji", "Sistem yang baik menyediakan titik inspeksi agar pengukuran dan maintenance tidak membongkar instalasi."],
    ["Bonding", "Panel, perangkat, struktur, dan penangkal petir perlu dikaji agar jalur pembumian tidak berdiri sendiri-sendiri."],
    ["Korosi koneksi", "Sambungan grounding perlu terlindungi dari korosi karena koneksi buruk dapat menaikkan tahanan."]
  ]
};

const serviceProcessSteps = {
  instalasi: [
    ["Data beban", "Mengumpulkan daya, fungsi ruang, jumlah titik, dan rencana peralatan."],
    ["Rute instalasi", "Menentukan jalur kabel, panel, conduit, tray, dan akses maintenance."],
    ["Pemasangan", "Melaksanakan penarikan kabel, terminasi, proteksi, dan penataan titik."],
    ["Uji fungsi", "Memeriksa pembagian sirkit, fungsi titik, dan rekomendasi dokumen bila diperlukan."]
  ],
  slo: [
    ["Identifikasi kebutuhan", "Memastikan pasang baru, perubahan daya, kWh meter, atau kebutuhan dokumen lain."],
    ["Cek instalasi", "Memeriksa panel, pembagian sirkit, grounding, dan kondisi instalasi awal."],
    ["Arahan data", "Menyiapkan data teknis yang relevan tanpa membuat nomor atau dokumen palsu."],
    ["Tindak lanjut", "Memberi rekomendasi bila perlu perbaikan sebelum proses dokumen dilanjutkan."]
  ],
  panel: [
    ["Data daya", "Membaca kapasitas, jenis beban, single line diagram, dan kebutuhan outgoing."],
    ["Desain panel", "Menentukan komponen, proteksi, busbar, metering, wiring, dan ruang kerja."],
    ["Perakitan", "Melakukan wiring, labeling, terminasi, dan pemeriksaan kerapian panel."],
    ["Testing", "Memeriksa fungsi proteksi, kontrol, indikasi, dan kesiapan instalasi."]
  ],
  maintenance: [
    ["Daftar panel", "Memetakan panel, jadwal operasi, dan area yang berisiko downtime."],
    ["Inspeksi", "Memeriksa visual, panas, beban, terminal, kebersihan, dan proteksi."],
    ["Tindakan aman", "Melakukan tightening atau perbaikan sesuai kondisi isolasi dan jadwal shutdown."],
    ["Laporan temuan", "Menyusun prioritas perbaikan dan rekomendasi maintenance berikutnya."]
  ],
  trafo: [
    ["Rencana shutdown", "Menentukan waktu aman, akses ruang trafo, dan koordinasi operasional."],
    ["Inspeksi awal", "Memeriksa bushing, koneksi, kebocoran, suhu, suara, dan area trafo."],
    ["Pengujian", "Melakukan BDV, TTR, insulation test, atau thermoscanning sesuai lingkup."],
    ["Rekomendasi", "Menyampaikan temuan dan prioritas preventive maintenance."]
  ],
  plts: [
    ["Profil energi", "Membaca daya terpasang, pola beban, tujuan PLTS, dan area pemasangan."],
    ["Survey lokasi", "Memeriksa atap, bayangan, rute kabel, panel eksisting, dan grounding."],
    ["Instalasi sistem", "Memasang modul, inverter, proteksi DC/AC, kabel, dan integrasi panel."],
    ["Commissioning", "Memeriksa fungsi sistem dan memberi arahan maintenance."]
  ],
  grounding: [
    ["Survey tanah", "Menilai lokasi elektroda, jalur kabel, dan kondisi tanah."],
    ["Pemasangan", "Mengerjakan elektroda, kabel grounding, bonding, atau down conductor sesuai lingkup."],
    ["Pengukuran", "Mengukur tahanan pembumian bila masuk cakupan pekerjaan."],
    ["Perapian koneksi", "Mengevaluasi sambungan, korosi, titik uji, dan kebutuhan perbaikan lanjutan."]
  ]
};

function serviceTechnicalSection(service) {
  const notes = serviceTechnicalNotes[service.key] || service.scope.slice(0, 4);
  return `    <section class="service-section">
      <div class="container">
        ${sectionHeading("Aspek teknis kunci", `Hal khusus pada ${service.nav}`, "Bagian ini dibuat spesifik agar ruang diskusi teknis tidak berhenti pada deskripsi layanan umum.")}
        <div class="service-card-grid service-card-grid--four">${notes.map(([title, text]) => `<article class="service-card"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></article>`).join("")}</div>
      </div>
    </section>`;
}

function servicePage(service) {
  const faq = faqSchema(service.faqs);
  const schema = [
    serviceSchema(service),
    breadcrumbs([{ name: "Beranda", url: "/" }, { name: "Layanan", url: "/layanan/" }, { name: service.nav, url: service.slug }]),
    faq
  ];
  const related = serviceLinks.filter(([, url]) => url !== service.slug).slice(0, 6);
  const main = `    <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Beranda</a> / <a href="/layanan/">Layanan</a> / <span>${escapeHtml(service.nav)}</span></nav>
    <section class="service-hero">
      <div class="container service-hero__grid">
        <div class="service-hero__content">
          <span class="service-label">${escapeHtml(service.label)}</span>
          <h1>${escapeHtml(service.h1)}</h1>
          <p class="service-hero__lead">${escapeHtml(service.lead)}</p>
          <div class="service-hero__actions">
            <a class="btn btn-yellow" href="${waLink(service.wa)}" target="_blank" rel="noopener">Konsultasi WhatsApp</a>
            <a class="btn btn-outline" href="/kontak/">Lihat Kontak</a>
          </div>
        </div>
        ${technicalVisual(service.facts, `technical-visual--${service.key}`)}
      </div>
    </section>
    <section class="service-section">
      <div class="container service-layout">
        <div class="service-copy">
          <span class="service-label">Ringkasan layanan</span>
          <h2>${escapeHtml(service.summaryTitle)}</h2>
          ${service.summary.map((p) => `<p>${escapeHtml(p)}</p>`).join("")}
        </div>
        <aside class="service-panel">
          <h3>Informasi cepat</h3>
          <ul class="service-info-list">${service.info.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          <div class="service-related">
            <h3>Layanan terkait</h3>
            <ul class="service-link-list">${related.map(([label, url]) => `<li><a href="${url}">${escapeHtml(label)}</a></li>`).join("")}</ul>
          </div>
        </aside>
      </div>
    </section>
    <section class="service-section service-section--muted">
      <div class="container">
        ${sectionHeading("Cakupan pekerjaan", "Ruang lingkup yang dapat dikonsultasikan", service.scopeIntro)}
        <div class="service-card-grid">${service.scope.map(([title, text]) => `<article class="service-card"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></article>`).join("")}</div>
      </div>
    </section>
    <section class="service-section">
      <div class="container">
        ${sectionHeading("Keunggulan kerja", "Pendekatan kerja PT Jurti Agung Mulia", "Pekerjaan dijaga tetap teknis, rapi, komunikatif, dan realistis sesuai kondisi lapangan serta kebutuhan pelanggan.")}
        <div class="service-card-grid service-card-grid--four">${service.advantages.map(([title, text]) => `<article class="service-card"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></article>`).join("")}</div>
      </div>
    </section>
    ${serviceTechnicalSection(service)}
    ${processSection(service)}
    ${areaCardsSection(`Jasa ${service.nav} tersedia untuk Kepulauan Riau dan proyek nasional sesuai kebutuhan.`)}
    <section class="service-section service-section--muted">
      <div class="container narrow">
        ${sectionHeading("FAQ", `FAQ ${service.nav}`, "Jawaban ringkas sebelum memulai konsultasi pekerjaan.")}
        <div class="service-faq-list" data-faq-accordion>${service.faqs.map(([q, a]) => `<details><summary>${escapeHtml(q)}</summary><p>${escapeHtml(a)}</p></details>`).join("")}</div>
      </div>
    </section>
    <section class="service-cta">
      <div class="container service-cta__inner">
        <div>
          <span class="service-label">Konsultasi proyek</span>
          <h2>Diskusikan kebutuhan ${escapeHtml(service.nav)} dengan tim kami</h2>
          <p>Kirimkan lokasi proyek, kondisi awal, kapasitas daya bila tersedia, dan target pekerjaan melalui WhatsApp resmi PT Jurti Agung Mulia.</p>
        </div>
        <div class="service-cta__actions">
          <a class="btn btn-yellow" href="${waLink(service.wa)}" target="_blank" rel="noopener">Konsultasi WhatsApp</a>
          <a class="btn btn-outline" href="/kontak/">Lihat Kontak</a>
        </div>
      </div>
    </section>`;
  return layout({ bodyClass: "inner-page service-page", title: service.title, description: service.meta, url: service.slug, schemas: schema, main, waMessage: service.wa });
}

function processSection(service) {
  const steps = serviceProcessSteps[service?.key] || [
    ["Konsultasi kebutuhan", "Diskusi lokasi, jenis bangunan, kapasitas daya, kondisi eksisting, dan target pekerjaan."],
    ["Pemeriksaan data teknis", "Tim meninjau gambar, foto lapangan, single line diagram, data daya, atau informasi pendukung yang tersedia."],
    ["Survei atau verifikasi", "Survei dilakukan bila diperlukan untuk memastikan kondisi aktual dan ruang kerja aman."],
    ["Rencana kerja", "Lingkup pekerjaan, material utama, metode kerja, dan estimasi jadwal disusun agar proses lebih terkendali."],
    ["Pelaksanaan pekerjaan", "Pekerjaan dilakukan dengan memperhatikan keselamatan, kerapian instalasi, dan koordinasi dengan pihak terkait."],
    ["Pengujian dan serah terima", "Hasil pekerjaan diperiksa, diuji sesuai lingkup, didokumentasikan, lalu diserahkan kepada pelanggan."]
  ];
  return `    <section class="service-section service-section--muted">
      <div class="container">
        ${sectionHeading("Alur kerja", service ? `Proses ${service.nav} yang lebih terarah` : "Proses pekerjaan yang tertata", "Alur berikut menyesuaikan jenis pekerjaan, kondisi lapangan, kelengkapan data, serta jadwal operasional fasilitas.")}
        <ol class="service-process-list">${steps.map(([title, text]) => `<li><strong>${escapeHtml(title)}</strong><span>${escapeHtml(text)}</span></li>`).join("")}</ol>
      </div>
    </section>`;
}

function areaCardsSection(intro) {
  return `    <section class="service-section">
      <div class="container">
        ${sectionHeading("Area layanan", "Melayani Kepulauan Riau dan proyek nasional", intro)}
        <div class="service-area-grid">${areas.map((area) => `<article class="service-area-card"><h3>${escapeHtml(area.name)}</h3><p>${escapeHtml(area.lead)}</p><a href="${area.slug}">Lihat area layanan</a></article>`).join("")}</div>
      </div>
    </section>`;
}

function homepage() {
  const title = "Kontraktor Listrik Kepri: Instalasi, Panel, SLO NIDI | PT Jurti Agung Mulia";
  const description = "PT Jurti Agung Mulia adalah kontraktor kelistrikan profesional di Kepulauan Riau untuk instalasi listrik, panel LVMDP MDP SDP, SLO NIDI, maintenance, trafo 20 kV, PLTS, grounding, dan commissioning.";
  const wa = "Halo PT Jurti Agung Mulia, saya ingin konsultasi proyek kelistrikan.\nLokasi:\nJenis bangunan:\nKebutuhan:\nDaya listrik jika ada:\nTarget waktu:";
  const schemas = [webSiteSchema(), localBusinessSchema(), webPageSchema({ name: title, description, url: "/" })];
  const main = `    <section class="hero">
      <div class="hero-pattern"></div>
      <div class="container hero-grid">
        <div class="hero-copy">
          <span class="eyebrow">PT Jurti Agung Mulia</span>
          <h1>Kontraktor Listrik Kepri untuk Gedung, Industri, Panel, dan Legalitas Teknis</h1>
          <p>Instalasi listrik, panel LVMDP MDP SDP, SLO NIDI, maintenance panel dan trafo 20 kV, PLTS, grounding, penangkal petir, serta test commissioning untuk Tanjungpinang, Batam, Bintan, Karimun, Kepulauan Riau, dan proyek tertentu di Indonesia.</p>
          <div class="hero-actions">
            <a class="btn btn-yellow" href="${waLink(wa)}" target="_blank" rel="noopener">Konsultasi WhatsApp</a>
            <a class="btn btn-outline" href="/layanan/">Lihat Layanan</a>
          </div>
          <div class="hero-meta"><span>Tanjungpinang</span><span>Batam</span><span>Bintan</span><span>Karimun</span><span>Indonesia</span></div>
        </div>
        <div class="hero-media"><img src="/assets/img/pt-jurti-agung-mulia-kontraktor-listrik.png" width="1815" height="867" alt="Teknisi kontraktor listrik memeriksa panel listrik industri PT Jurti Agung Mulia"></div>
      </div>
    </section>
    <section class="stats-strip">
      <div class="container stats-grid">
        <div><strong>Instalasi</strong><span>Gedung, industri, rumah, ruko, hotel</span></div>
        <div><strong>Panel</strong><span>LVMDP, MDP, SDP, ATS/AMF</span></div>
        <div><strong>Dokumen</strong><span>SLO, NIDI, test commissioning</span></div>
        <div><strong>Maintenance</strong><span>Panel, trafo 20 kV, grounding</span></div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        ${sectionHeading("Layanan utama", "Solusi kelistrikan terintegrasi", "Setiap layanan dapat disesuaikan dengan kondisi lapangan, kapasitas daya, standar kerja, dan kebutuhan operasional proyek.")}
        ${cardGrid(services.map((service, index) => ({ kicker: String(index + 1).padStart(2, "0"), title: service.nav, text: service.meta, href: service.slug, link: "Detail layanan" })), "three")}
      </div>
    </section>
    <section class="section section-dark">
      <div class="container split">
        <div>
          <span class="eyebrow">Area layanan</span>
          <h2>Berbasis di Kepri, siap mendukung proyek dengan koordinasi rapi.</h2>
          <p>Area utama meliputi Tanjungpinang, Batam, Bintan, Karimun, Kepulauan Riau, dan Indonesia untuk proyek tertentu setelah konsultasi.</p>
          <div class="area-list">${areas.map((area) => `<a class="area-pill" href="${area.slug}">${escapeHtml(area.name)}</a>`).join("")}</div>
        </div>
        <div class="commitment-box">
          <h3>Legalitas dan standar kerja</h3>
          <p>PT Jurti Agung Mulia menjaga pekerjaan kelistrikan dengan pendekatan teknis, keselamatan kerja, dan dokumentasi yang tertib. Dokumen resmi dapat ditunjukkan untuk kebutuhan tender, proyek, atau kerja sama.</p>
          <ul><li>Rujukan kerja memperhatikan PUIL, K3, SNI/IEC bila relevan.</li><li>SLO NIDI dijelaskan sesuai batas kewenangan yang benar.</li><li>Tidak ada nomor legalitas atau klaim sertifikat yang dikarang.</li></ul>
          <p><a href="/legalitas/">Lihat legalitas dan standar kerja</a></p>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        ${sectionHeading("Portofolio teknis", "Jenis proyek dan studi kasus pekerjaan", "Contoh lingkup pekerjaan disajikan sebagai jenis proyek teknis. Nama klien ditampilkan hanya setelah ada persetujuan publikasi.")}
        ${projectCards()}
        <p class="section-link"><a href="/proyek/">Lihat portofolio teknis</a></p>
      </div>
    </section>
    <section class="section section-muted">
      <div class="container">
        ${sectionHeading("Solusi industri", "Kelistrikan sesuai karakter fasilitas", "Setiap sektor memiliki risiko, jadwal, dan output pekerjaan yang berbeda. Pilih pendekatan sesuai jenis fasilitas.")}
        ${cardGrid(solutions.map((solution) => ({ title: solution.name, text: solution.lead, href: solution.slug, link: "Lihat solusi" })), "four")}
      </div>
    </section>
    <section class="section">
      <div class="container split">
        <div>
          <span class="eyebrow">Proses kerja</span>
          <h2>Dari konsultasi sampai serah terima teknis.</h2>
          <p>Alur dibuat agar kebutuhan teknis, jadwal, dokumen, dan hasil pekerjaan dapat dipahami sejak awal.</p>
        </div>
        <ol class="process-list"><li><strong>Konsultasi</strong><span>Diskusi lokasi, kebutuhan daya, jenis bangunan, dan target pekerjaan.</span></li><li><strong>Survei</strong><span>Pemeriksaan kondisi instalasi, panel, grounding, dan akses kerja bila diperlukan.</span></li><li><strong>Pelaksanaan</strong><span>Pekerjaan dilakukan sesuai lingkup dengan komunikasi teknis yang jelas.</span></li><li><strong>Serah terima</strong><span>Pengujian fungsi, dokumentasi, dan rekomendasi tindak lanjut.</span></li></ol>
      </div>
    </section>
    <section class="section section-muted">
      <div class="container">
        ${sectionHeading("Artikel edukasi", "Panduan teknis sebelum memulai proyek", "Baca topik ringkas seputar SLO NIDI, panel listrik, maintenance, grounding, dan pemilihan kontraktor.")}
        ${cardGrid(articles.slice(0, 5).map((article) => ({ title: article.h1, text: article.meta, href: article.slug, link: "Baca artikel" })), "three")}
      </div>
    </section>
    ${finalCta("Diskusikan kebutuhan instalasi listrik, panel, SLO NIDI, maintenance, PLTS, grounding, atau commissioning dengan tim PT Jurti Agung Mulia.", wa)}`;
  return layout({ bodyClass: "home-page", title, description, url: "/", schemas, main, waMessage: wa });
}

function projectCards() {
  const cards = [
    ["Instalasi listrik gedung dan ruko", "Kebutuhan titik listrik, panel distribusi, jalur kabel, dan proteksi harus mengikuti fungsi ruang.", "Instalasi penerangan, daya, panel, grounding, pengujian dasar.", "Dokumentasi pekerjaan dan rekomendasi teknis."],
    ["Panel distribusi LVMDP/MDP/SDP", "Panel perlu rapi, aman diperiksa, dan sesuai kapasitas beban.", "Perakitan atau instalasi panel, wiring, proteksi, labeling, testing.", "Panel siap operasi dan catatan komponen utama."],
    ["Maintenance panel dan trafo", "Downtime dapat muncul dari panas, koneksi longgar, atau penurunan kualitas isolasi.", "Inspeksi, thermoscanning, tightening, BDV, TTR, insulation test sesuai lingkup.", "Temuan teknis dan prioritas perbaikan."],
    ["PLTS / solar panel", "Kapasitas perlu dihitung dari beban, ruang, dan integrasi panel.", "Survey, instalasi modul, inverter, proteksi, grounding, commissioning.", "Sistem terpasang dan arahan maintenance."],
    ["Grounding dan penangkal petir", "Sistem pembumian perlu titik uji, koneksi baik, dan integrasi panel.", "Pemasangan grounding, down conductor, pengukuran, dan perbaikan koneksi.", "Hasil pengukuran bila masuk lingkup."],
    ["SLO NIDI dan commissioning", "Dokumen dan pengujian perlu data teknis yang jelas.", "Pemeriksaan instalasi, arahan dokumen, test commissioning sesuai kebutuhan.", "Arahan proses dan catatan hasil pemeriksaan."]
  ];
  return `<div class="case-grid">${cards.map(([title, challenge, scope, output]) => `<article class="case-card"><span>Jenis proyek</span><h3>${escapeHtml(title)}</h3><dl><div><dt>Tantangan teknis</dt><dd>${escapeHtml(challenge)}</dd></div><div><dt>Lingkup pekerjaan</dt><dd>${escapeHtml(scope)}</dd></div><div><dt>Output/dokumen</dt><dd>${escapeHtml(output)}</dd></div><div><dt>Status publikasi klien</dt><dd>Nama klien ditampilkan setelah persetujuan.</dd></div></dl></article>`).join("")}</div>`;
}

function finalCta(text = "Diskusikan kebutuhan instalasi listrik, panel, SLO NIDI, maintenance, PLTS, grounding, atau commissioning dengan tim PT Jurti Agung Mulia.", waMessage = "Halo PT Jurti Agung Mulia, saya ingin konsultasi kebutuhan kelistrikan.\nLokasi:\nJenis bangunan:\nKebutuhan:\nTarget waktu:") {
  return `    <section class="cta-band">
      <div class="container cta-band__inner">
        <div><h2>Butuh kontraktor kelistrikan yang rapi secara teknis?</h2><p>${escapeHtml(text)}</p></div>
        <a class="btn btn-yellow" href="${waLink(waMessage)}" target="_blank" rel="noopener">Konsultasi WhatsApp</a>
      </div>
    </section>`;
}

function layananIndex() {
  const title = "Layanan Kontraktor Listrik Kepri | PT Jurti Agung Mulia";
  const description = "Daftar layanan PT Jurti Agung Mulia: instalasi listrik, SLO NIDI, panel LVMDP MDP SDP, maintenance, trafo 20 kV, PLTS, grounding, dan commissioning.";
  const wa = "Halo PT Jurti Agung Mulia, saya ingin konsultasi layanan kelistrikan.\nLokasi:\nKebutuhan:\nDaya listrik jika ada:\nTarget waktu:";
  const main = `${pageHero({ eyebrow: "Layanan", h1: "Layanan Kontraktor Kelistrikan PT Jurti Agung Mulia", lead: "Instalasi listrik, panel LVMDP MDP SDP, SLO NIDI, maintenance listrik, maintenance trafo 20 kV, PLTS, grounding, penangkal petir, dan commissioning untuk Kepri dan proyek tertentu di Indonesia.", cta: { href: waLink(wa), label: "Konsultasi WhatsApp", external: true } })}
    <section class="section">
      <div class="container">
        ${sectionHeading("Layanan utama", "Pilih layanan sesuai kebutuhan proyek", "Setiap halaman layanan berisi cakupan teknis, FAQ, area layanan, dan CTA WhatsApp yang kontekstual.")}
        ${cardGrid(services.map((service, index) => ({ kicker: String(index + 1).padStart(2, "0"), title: service.nav, text: service.lead, href: service.slug, link: "Buka layanan" })), "three")}
      </div>
    </section>
    ${areaCardsSection("Seluruh layanan dapat dikonsultasikan untuk Tanjungpinang, Batam, Bintan, Karimun, Kepri, dan proyek tertentu di Indonesia.")}
    ${finalCta("Kirim kebutuhan awal agar tim dapat menilai apakah perlu survei, data teknis tambahan, atau penjadwalan khusus.", wa)}`;
  return layout({ title, description, url: "/layanan/", schemas: [webPageSchema({ type: "CollectionPage", name: title, description, url: "/layanan/" }), breadcrumbs([{ name: "Beranda", url: "/" }, { name: "Layanan", url: "/layanan/" }])], main, waMessage: wa });
}

function areaIndex() {
  const title = "Area Layanan Kontraktor Listrik Kepri | PT Jurti Agung Mulia";
  const description = "Area layanan PT Jurti Agung Mulia meliputi Tanjungpinang, Batam, Bintan, Karimun, Kepulauan Riau, dan proyek tertentu di Indonesia.";
  const wa = "Halo PT Jurti Agung Mulia, saya ingin konsultasi area layanan.\nLokasi proyek:\nJenis bangunan:\nKebutuhan:\nTarget waktu:";
  const main = `${pageHero({ eyebrow: "Area layanan", h1: "Area Layanan Kontraktor Listrik di Kepulauan Riau", lead: "PT Jurti Agung Mulia melayani Tanjungpinang, Batam, Bintan, Karimun, Kepulauan Riau, dan Indonesia untuk proyek tertentu setelah konsultasi.", cta: { href: waLink(wa), label: "Cek Area Layanan", external: true } })}
    <section class="section">
      <div class="container">
        ${sectionHeading("Kepri dan nasional", "Area utama layanan", "Setiap area memiliki kebutuhan mobilisasi, jadwal survei, dan karakter proyek yang berbeda.")}
        ${cardGrid(areas.map((area) => ({ title: area.name, text: area.lead, href: area.slug, link: "Lihat area" })), "four")}
      </div>
    </section>
    ${finalCta("Sebutkan lokasi proyek, jenis fasilitas, dan kebutuhan pekerjaan agar tim dapat memberi arahan mobilisasi yang realistis.", wa)}`;
  return layout({ title, description, url: "/area-layanan/", schemas: [webPageSchema({ type: "CollectionPage", name: title, description, url: "/area-layanan/" }), breadcrumbs([{ name: "Beranda", url: "/" }, { name: "Area Layanan", url: "/area-layanan/" }])], main, waMessage: wa });
}

function areaPage(area) {
  const wa = `Halo PT Jurti Agung Mulia, saya ingin konsultasi proyek kelistrikan di ${area.name}.\nLokasi detail:\nJenis bangunan:\nKebutuhan:\nDaya listrik jika ada:\nTarget waktu:`;
  const main = `${pageHero({ eyebrow: "Area layanan", h1: area.h1, lead: area.lead, cta: { href: waLink(wa), label: `Konsultasi Area ${area.name}`, external: true } })}
    <section class="section">
      <div class="container split">
        <div>
          <span class="eyebrow">Fokus area</span>
          <h2>Kebutuhan kelistrikan yang umum di ${escapeHtml(area.name)}</h2>
          <p>${escapeHtml(area.note)}</p>
          <ul class="check-list">${area.focus.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </div>
        <div class="commitment-box commitment-box--light">
          <h3>Layanan yang relevan</h3>
          <ul class="link-list">${serviceLinks.map(([label, url]) => `<li><a href="${url}">${escapeHtml(label)}</a></li>`).join("")}</ul>
        </div>
      </div>
    </section>
    <section class="section section-muted">
      <div class="container">
        ${sectionHeading("Cakupan pekerjaan", `Jasa listrik ${area.name} yang dapat dikonsultasikan`, "Lingkup dapat disesuaikan dengan kondisi bangunan, jadwal operasional, akses lokasi, dan kebutuhan dokumen.")}
        ${cardGrid([
          { title: `Jasa instalasi listrik ${area.name}`, text: "Instalasi listrik rumah, ruko, gedung, hotel, pabrik, dan fasilitas komersial." },
          { title: `Jasa panel listrik ${area.name}`, text: "Panel LVMDP, MDP, SDP, ATS/AMF, capacitor bank, wiring, proteksi, dan commissioning." },
          { title: `Jasa SLO NIDI ${area.name}`, text: "Pendampingan teknis dan administratif sesuai kebutuhan pasang baru atau perubahan daya." },
          { title: `Maintenance listrik ${area.name}`, text: "Inspeksi panel, instalasi, thermoscanning, tightening, dan rekomendasi perbaikan." },
          { title: `Grounding dan penangkal petir ${area.name}`, text: "Sistem pembumian, proteksi petir, pengukuran, dan perbaikan koneksi." },
          { title: `PLTS dan commissioning ${area.name}`, text: "Instalasi solar panel, integrasi panel, pengujian fungsi, dan dokumentasi pekerjaan." }
        ], "three")}
      </div>
    </section>
    ${finalCta(`Untuk proyek di ${area.name}, kirim lokasi detail, jenis bangunan, dan kebutuhan teknis agar jadwal survei atau konsultasi bisa disiapkan.`, wa)}`;
  return layout({ title: area.title, description: area.meta, url: area.slug, schemas: [webPageSchema({ name: area.title, description: area.meta, url: area.slug }), breadcrumbs([{ name: "Beranda", url: "/" }, { name: "Area Layanan", url: "/area-layanan/" }, { name: area.name, url: area.slug }])], main, waMessage: wa });
}

function legalitasPage() {
  const title = "Legalitas dan Standar Kerja | PT Jurti Agung Mulia";
  const description = "Halaman legalitas PT Jurti Agung Mulia: standar kerja, PUIL, K3, SNI/IEC bila relevan, dan placeholder aman untuk dokumen resmi tanpa nomor palsu.";
  const wa = "Halo PT Jurti Agung Mulia, saya ingin meminta profil perusahaan/legalitas.\nNama perusahaan:\nKebutuhan:\nLokasi proyek:\nDokumen yang dibutuhkan:";
  const main = `${pageHero({ eyebrow: "Legalitas", h1: "Legalitas dan Standar Kerja PT Jurti Agung Mulia", lead: "Informasi legalitas, standar kerja, dan dokumen perusahaan untuk kebutuhan tender, proyek, kerja sama, dan verifikasi teknis tanpa menampilkan nomor yang belum diberikan secara resmi.", cta: { href: waLink(wa), label: "Minta Profil/Legalitas", external: true } })}
    <section class="section">
      <div class="container split">
        <div>
          <span class="eyebrow">Prinsip legalitas</span>
          <h2>Dokumen resmi ditunjukkan sesuai kebutuhan proyek.</h2>
          <p>PT Jurti Agung Mulia tidak menampilkan nomor SBU, IUJPTL, PJT, tenaga teknik, atau dokumen K3 tanpa data resmi yang siap dipublikasikan. Untuk kebutuhan tender, proyek, atau kerja sama, dokumen dapat diminta melalui kontak resmi perusahaan.</p>
          <p>Pendekatan ini menjaga akurasi informasi dan menghindari klaim legalitas yang tidak dapat diverifikasi oleh calon pelanggan.</p>
        </div>
        <div class="legal-card">
          <h3>Placeholder dokumen aman</h3>
          <ul class="service-info-list"><li>SBU atau klasifikasi usaha: ditunjukkan saat tersedia untuk kebutuhan proyek.</li><li>IUJPTL atau dokumen perizinan terkait: diverifikasi sesuai permintaan kerja sama.</li><li>PJT dan tenaga teknik: data personel resmi ditunjukkan sesuai kebutuhan tender.</li><li>Dokumen K3: disiapkan sesuai lingkup dan persyaratan proyek.</li></ul>
        </div>
      </div>
    </section>
    <section class="section section-muted">
      <div class="container">
        ${sectionHeading("Standar kerja", "Rujukan teknis dan keselamatan", "Pekerjaan kelistrikan perlu memperhatikan standar dan praktik kerja yang relevan dengan jenis proyek.")}
        ${cardGrid([
          { title: "PUIL", text: "Rujukan instalasi listrik digunakan sesuai konteks pekerjaan dan kebutuhan teknis." },
          { title: "K3 kelistrikan", text: "Keselamatan kerja, isolasi sumber, akses panel, dan metode kerja aman menjadi bagian penting pelaksanaan." },
          { title: "SNI/IEC bila relevan", text: "Komponen, metode pengujian, dan sistem dapat mengacu pada standar yang sesuai kebutuhan proyek." },
          { title: "Dokumentasi pekerjaan", text: "Catatan temuan, output teknis, dan rekomendasi disusun sesuai lingkup yang disepakati." }
        ], "four")}
      </div>
    </section>
    ${finalCta("Hubungi tim untuk meminta profil perusahaan, dokumen legalitas, atau klarifikasi standar kerja sesuai kebutuhan tender dan proyek.", wa)}`;
  return layout({ title, description, url: "/legalitas/", schemas: [webPageSchema({ type: "AboutPage", name: "Legalitas dan Standar Kerja PT Jurti Agung Mulia", description, url: "/legalitas/" }), breadcrumbs([{ name: "Beranda", url: "/" }, { name: "Legalitas", url: "/legalitas/" }])], main, waMessage: wa });
}

function proyekPage() {
  const title = "Portofolio Proyek Kelistrikan dan Studi Kasus Teknis | PT Jurti Agung Mulia";
  const description = "Portofolio teknis PT Jurti Agung Mulia: instalasi listrik gedung, panel LVMDP MDP SDP, maintenance panel dan trafo, PLTS, grounding, SLO NIDI, dan commissioning.";
  const wa = "Halo PT Jurti Agung Mulia, saya ingin konsultasi portofolio atau studi kasus teknis.\nJenis proyek:\nLokasi:\nKebutuhan:\nTarget waktu:";
  const main = `${pageHero({ eyebrow: "Portofolio", h1: "Portofolio dan Studi Kasus Teknis", lead: "Contoh jenis pekerjaan PT Jurti Agung Mulia disajikan berdasarkan lingkup teknis. Nama klien tidak ditampilkan tanpa persetujuan publikasi.", cta: { href: waLink(wa), label: "Diskusi Studi Kasus", external: true } })}
    <section class="section">
      <div class="container">
        ${sectionHeading("Jenis proyek", "Format portofolio profesional tanpa klaim palsu", "Setiap item menampilkan tantangan teknis, lingkup pekerjaan, output, dan status publikasi klien.")}
        ${projectCards()}
      </div>
    </section>
    <section class="section section-muted">
      <div class="container split">
        <div><span class="eyebrow">Catatan publikasi</span><h2>Nama klien hanya ditampilkan setelah persetujuan.</h2><p>Beberapa pekerjaan kelistrikan berkaitan dengan area operasional, fasilitas kritis, dan informasi teknis internal. Karena itu, publikasi nama klien dan foto proyek perlu persetujuan pemilik proyek.</p></div>
        <div class="commitment-box commitment-box--light"><h3>Data yang bisa ditambahkan nanti</h3><ul><li>Nama klien atau kategori industri.</li><li>Foto lapangan yang sudah disetujui.</li><li>Lokasi umum proyek.</li><li>Ringkasan hasil pengujian atau dokumen serah terima.</li></ul></div>
      </div>
    </section>
    ${finalCta("Kirim jenis pekerjaan yang dibutuhkan agar tim dapat menyiapkan referensi lingkup proyek yang paling relevan.", wa)}`;
  return layout({ title, description, url: "/proyek/", schemas: [webPageSchema({ type: "CollectionPage", name: title, description, url: "/proyek/" }), breadcrumbs([{ name: "Beranda", url: "/" }, { name: "Proyek", url: "/proyek/" }])], main, waMessage: wa });
}

function artikelIndex() {
  const groups = ["Legalitas listrik", "Panel listrik", "Maintenance", "Grounding", "Kontraktor listrik"];
  const title = "Artikel Kelistrikan: SLO NIDI Panel Maintenance Grounding | PT Jurti Agung Mulia";
  const description = "Index artikel PT Jurti Agung Mulia tentang SLO NIDI, panel LVMDP MDP SDP, maintenance panel listrik, grounding instalasi, dan kontraktor listrik.";
  const wa = "Halo PT Jurti Agung Mulia, saya ingin konsultasi setelah membaca artikel.\nTopik:\nLokasi:\nKebutuhan:\nTarget waktu:";
  const main = `${pageHero({ eyebrow: "Artikel", h1: "Artikel Edukasi Kelistrikan", lead: "Panduan teknis dan administratif untuk memahami SLO NIDI, panel listrik, maintenance, grounding, dan pemilihan kontraktor listrik sebelum memulai proyek.", cta: { href: waLink(wa), label: "Konsultasi Topik Artikel", external: true } })}
    <section class="section">
      <div class="container article-index">
        ${groups.map((group) => `<div class="article-group"><h2>${escapeHtml(group)}</h2><div class="card-grid two">${articles.filter((article) => article.category === group).map((article) => `<article class="card article-card"><span>${escapeHtml(article.category)}</span><h3>${escapeHtml(article.h1)}</h3><p>${escapeHtml(article.meta)}</p><a href="${article.slug}">Baca artikel</a></article>`).join("")}</div></div>`).join("")}
      </div>
    </section>
    ${finalCta("Pilih topik yang sesuai dengan kebutuhan proyek, lalu konsultasikan kondisi aktual agar rekomendasi lebih tepat.", wa)}`;
  return layout({ title, description, url: "/artikel/", schemas: [webPageSchema({ type: "CollectionPage", name: title, description, url: "/artikel/" }), breadcrumbs([{ name: "Beranda", url: "/" }, { name: "Artikel", url: "/artikel/" }])], main, waMessage: wa });
}

function articlePage(article) {
  const articleText = [article.intro, ...article.sections.flatMap(([, title, paragraphs]) => [title, ...paragraphs])].join(" ");
  const schemas = [
    jsonLd({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.h1,
      description: article.meta,
      image: OG_IMAGE,
      datePublished: LASTMOD,
      dateModified: LASTMOD,
      inLanguage: "id-ID",
      articleSection: article.category,
      wordCount: articleText.split(/\s+/).filter(Boolean).length,
      author: { "@type": "Organization", name: "PT Jurti Agung Mulia" },
      publisher: { "@type": "Organization", name: "PT Jurti Agung Mulia" },
      mainEntityOfPage: `${SITE}${article.slug}`
    }),
    breadcrumbs([{ name: "Beranda", url: "/" }, { name: "Artikel", url: "/artikel/" }, { name: article.h1, url: article.slug }]),
    faqSchema(article.faqs)
  ];
  const main = `    <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Beranda</a> / <a href="/artikel/">Artikel</a> / <span>${escapeHtml(article.h1)}</span></nav>
    <article class="article-layout">
      <header class="article-hero">
        <div class="container narrow">
          <span class="eyebrow">${escapeHtml(article.category)}</span>
          <h1>${escapeHtml(article.h1)}</h1>
          <p>${escapeHtml(article.intro)}</p>
        </div>
      </header>
      <div class="container article-shell">
        <aside class="toc-card" aria-label="Daftar isi"><h2>Daftar Isi</h2><ol>${article.toc.map(([label, id]) => `<li><a href="#${id}">${escapeHtml(label)}</a></li>`).join("")}</ol></aside>
        <div class="article-content">
          ${article.sections.map(([id, title, paragraphs]) => `<section id="${id}"><h2>${escapeHtml(title)}</h2>${paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join("")}</section>`).join("")}
          <section class="article-related"><h2>Layanan terkait</h2><ul>${article.related.map(([label, url]) => `<li><a href="${url}">${escapeHtml(label)}</a></li>`).join("")}</ul></section>
          <section id="faq"><h2>FAQ</h2><div class="service-faq-list" data-faq-accordion>${article.faqs.map(([q, a]) => `<details><summary>${escapeHtml(q)}</summary><p>${escapeHtml(a)}</p></details>`).join("")}</div></section>
          <section class="article-cta"><h2>Konsultasikan kondisi proyek Anda</h2><p>Kirim lokasi, daya listrik bila ada, dan kebutuhan utama agar tim dapat memberi arahan awal yang lebih relevan.</p><a class="btn btn-yellow" href="${waLink(article.wa)}" target="_blank" rel="noopener">Konsultasi WhatsApp</a></section>
        </div>
      </div>
    </article>`;
  return layout({ title: article.title, description: article.meta, url: article.slug, type: "article", schemas, main, waMessage: article.wa });
}

function solusiIndex() {
  const title = "Solusi Kelistrikan Gedung Hotel Industri Fasilitas Publik | PT Jurti Agung Mulia";
  const description = "Solusi kelistrikan PT Jurti Agung Mulia untuk gedung komersial, hotel dan resort, pabrik dan industri, serta rumah sakit dan fasilitas publik.";
  const wa = "Halo PT Jurti Agung Mulia, saya ingin konsultasi solusi industri.\nJenis fasilitas:\nLokasi:\nKebutuhan:\nDaya listrik jika ada:\nTarget waktu:";
  const main = `${pageHero({ eyebrow: "Solusi industri", h1: "Solusi Kelistrikan Berdasarkan Jenis Fasilitas", lead: "Setiap industri memiliki beban, risiko, jadwal maintenance, dan kebutuhan dokumen yang berbeda. Pilih halaman solusi yang paling mendekati kebutuhan proyek.", cta: { href: waLink(wa), label: "Konsultasi Solusi", external: true } })}
    <section class="section">
      <div class="container">
        ${sectionHeading("Pilihan solusi", "Kelistrikan sesuai karakter bangunan", "Halaman solusi membantu menghubungkan risiko industri dengan layanan teknis PT Jurti Agung Mulia.")}
        ${cardGrid(solutions.map((solution) => ({ title: solution.name, text: solution.lead, href: solution.slug, link: "Lihat solusi" })), "four")}
      </div>
    </section>
    ${finalCta("Ceritakan jenis fasilitas dan risiko operasionalnya agar tim dapat menyarankan layanan yang paling relevan.", wa)}`;
  return layout({ title, description, url: "/solusi/", schemas: [webPageSchema({ type: "CollectionPage", name: title, description, url: "/solusi/" }), breadcrumbs([{ name: "Beranda", url: "/" }, { name: "Solusi", url: "/solusi/" }])], main, waMessage: wa });
}

function solusiPage(solution) {
  const wa = `Halo PT Jurti Agung Mulia, saya ingin konsultasi solusi ${solution.name}.\nLokasi:\nKebutuhan:\nDaya listrik jika ada:\nTarget waktu:`;
  const main = `${pageHero({ eyebrow: "Solusi industri", h1: solution.h1, lead: solution.lead, cta: { href: waLink(wa), label: "Konsultasi WhatsApp", external: true } })}
    <section class="section">
      <div class="container service-layout">
        <div>
          <span class="eyebrow">Masalah umum</span>
          <h2>Hal yang biasanya perlu diantisipasi</h2>
          <ul class="check-list">${solution.problems.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </div>
        <aside class="service-panel">
          <h3>Risiko teknis</h3>
          <ul class="service-info-list">${solution.risks.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </aside>
      </div>
    </section>
    <section class="section section-muted">
      <div class="container">
        ${sectionHeading("Layanan relevan", `Layanan untuk ${solution.name}`, "Paket pekerjaan dapat disusun dari beberapa layanan sesuai kondisi aktual fasilitas.")}
        ${cardGrid(services.slice(0, 6).map((service) => ({ title: service.nav, text: service.summary[0], href: service.slug, link: "Lihat layanan" })), "three")}
      </div>
    </section>
    <section class="section">
      <div class="container split">
        <div><span class="eyebrow">Output pekerjaan</span><h2>Hasil yang dapat disiapkan sesuai lingkup</h2><p>Output pekerjaan tidak dibuat generik. Setiap dokumen, catatan temuan, atau pengujian mengikuti kebutuhan proyek dan data yang tersedia.</p></div>
        <div class="commitment-box commitment-box--light"><ul class="service-info-list">${solution.outputs.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>
      </div>
    </section>
    ${finalCta(`Konsultasikan kondisi ${solution.name.toLowerCase()} agar risiko teknis dan prioritas pekerjaan dapat dipetakan sejak awal.`, wa)}`;
  return layout({ title: solution.title, description: solution.meta, url: solution.slug, schemas: [webPageSchema({ name: solution.title, description: solution.meta, url: solution.slug }), breadcrumbs([{ name: "Beranda", url: "/" }, { name: "Solusi", url: "/solusi/" }, { name: solution.name, url: solution.slug }])], main, waMessage: wa });
}

function tentangPage() {
  const title = "Tentang PT Jurti Agung Mulia | Kontraktor Listrik Kepri";
  const description = "Profil PT Jurti Agung Mulia, kontraktor kelistrikan profesional di Kepulauan Riau untuk instalasi listrik, panel, SLO NIDI, maintenance, PLTS, grounding, dan commissioning.";
  const wa = "Halo PT Jurti Agung Mulia, saya ingin mengenal profil perusahaan.\nKebutuhan:\nLokasi proyek:\nJenis kerja sama jika ada:";
  const main = `${pageHero({ eyebrow: "Tentang kami", h1: "PT Jurti Agung Mulia", lead: "Kontraktor kelistrikan profesional di Kepulauan Riau yang berfokus pada instalasi listrik, panel, SLO NIDI, maintenance, trafo 20 kV, PLTS, grounding, dan commissioning.", cta: { href: waLink(wa), label: "Hubungi Perusahaan", external: true } })}
    <section class="section">
      <div class="container split">
        <div><span class="eyebrow">Profil</span><h2>Fokus pada pekerjaan kelistrikan yang teknis dan tertata.</h2><p>PT Jurti Agung Mulia membantu pemilik bangunan, kontraktor utama, pengelola fasilitas, dan pelaku industri menyelesaikan kebutuhan kelistrikan dengan komunikasi teknis yang jelas.</p><p>Area layanan utama berada di Kepulauan Riau, termasuk Tanjungpinang, Batam, Bintan, dan Karimun. Untuk proyek tertentu di Indonesia, jadwal dan mobilisasi dapat dikonsultasikan lebih dulu.</p></div>
        <div class="commitment-box commitment-box--light"><h3>Bidang layanan</h3><ul class="service-info-list">${services.map((service) => `<li>${escapeHtml(service.nav)}</li>`).join("")}</ul></div>
      </div>
    </section>
    <section class="section section-muted">
      <div class="container">
        ${sectionHeading("Cara kerja", "Tidak menjanjikan hal di luar kewenangan teknis", "PT Jurti Agung Mulia mengutamakan kejelasan lingkup, pemeriksaan data, dan komunikasi risiko sebelum pekerjaan berjalan.")}
        ${cardGrid([
          { title: "Survei dan data", text: "Keputusan teknis dibuat dari data awal, foto, gambar, atau survei lapangan bila diperlukan." },
          { title: "Lingkup jelas", text: "Material, metode kerja, output, dan batas pekerjaan dibahas sejak awal." },
          { title: "Dokumentasi", text: "Temuan, pengujian, dan rekomendasi dapat disiapkan sesuai kebutuhan proyek." }
        ], "three")}
      </div>
    </section>
    ${finalCta("Hubungi PT Jurti Agung Mulia untuk konsultasi kebutuhan kelistrikan di Kepulauan Riau atau proyek tertentu di Indonesia.", wa)}`;
  return layout({ title, description, url: "/tentang-kami/", schemas: [webPageSchema({ type: "AboutPage", name: title, description, url: "/tentang-kami/" }), breadcrumbs([{ name: "Beranda", url: "/" }, { name: "Tentang Kami", url: "/tentang-kami/" }])], main, waMessage: wa });
}

function kontakPage() {
  const title = "Kontak PT Jurti Agung Mulia | Konsultasi Kontraktor Listrik";
  const description = "Kontak resmi PT Jurti Agung Mulia: WhatsApp +62 831-8403-7448 dan email ptjurtiagungmulia@gmail.com untuk konsultasi proyek kelistrikan.";
  const wa = "Halo PT Jurti Agung Mulia, saya ingin konsultasi proyek kelistrikan.\nNama:\nLokasi:\nKebutuhan:\nDaya listrik jika ada:\nTarget waktu:";
  const main = `${pageHero({ eyebrow: "Kontak", h1: "Kontak PT Jurti Agung Mulia", lead: "Hubungi tim untuk konsultasi instalasi listrik, panel, SLO NIDI, maintenance, trafo 20 kV, PLTS, grounding, penangkal petir, dan commissioning.", cta: { href: waLink(wa), label: "WhatsApp Sekarang", external: true } })}
    <section class="section">
      <div class="container contact-grid">
        <div class="contact-panel"><h2>Kontak resmi</h2><ul class="link-list"><li><a href="tel:+${PHONE_WA}">${PHONE_DISPLAY}</a></li><li><a href="mailto:${EMAIL}">${EMAIL}</a></li><li>Tanjungpinang, Kepulauan Riau</li><li><a href="${waLink("Halo PT Jurti Agung Mulia, saya ingin konsultasi proyek kelistrikan.\nNama:\nLokasi:\nKebutuhan:\nTarget waktu:")}" target="_blank" rel="noopener">Konsultasi via WhatsApp</a></li></ul></div>
        <form class="contact-form" data-wa-form>
          <label>Nama<input name="nama" autocomplete="name" required></label>
          <label>WhatsApp<input name="whatsapp" autocomplete="tel" required></label>
          <label>Lokasi proyek<input name="lokasi" required></label>
          <label>Kebutuhan<textarea name="kebutuhan" rows="5" required></textarea></label>
          <button class="btn btn-blue" type="submit">Kirim via WhatsApp</button>
        </form>
      </div>
    </section>
    ${finalCta("Semakin lengkap data awal, semakin mudah tim memberi arahan teknis, kebutuhan survei, dan estimasi jadwal.", wa)}`;
  return layout({ title, description, url: "/kontak/", schemas: [webPageSchema({ type: "ContactPage", name: title, description, url: "/kontak/" }), breadcrumbs([{ name: "Beranda", url: "/" }, { name: "Kontak", url: "/kontak/" }])], main, waMessage: wa });
}

function sitemap() {
  const urls = [
    ["/", "1.0"],
    ["/tentang-kami/", "0.8"],
    ["/layanan/", "0.9"],
    ...services.map((service) => [service.slug, "0.9"]),
    ["/area-layanan/", "0.85"],
    ...areas.map((area) => [area.slug, "0.85"]),
    ["/legalitas/", "0.8"],
    ["/proyek/", "0.8"],
    ["/solusi/", "0.8"],
    ...solutions.map((solution) => [solution.slug, "0.8"]),
    ["/artikel/", "0.75"],
    ...articles.map((article) => [article.slug, "0.75"]),
    ["/kontak/", "0.8"]
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(([url, priority]) => `  <url>
    <loc>${SITE}${url}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${url === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${priority}</priority>
  </url>`).join("\n")}
</urlset>
`;
}

function robots() {
  return `User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`;
}

writePage("/", homepage());
writePage("/tentang-kami/", tentangPage());
writePage("/layanan/", layananIndex());
services.forEach((service) => writePage(service.slug, servicePage(service)));
writePage("/area-layanan/", areaIndex());
areas.forEach((area) => writePage(area.slug, areaPage(area)));
writePage("/legalitas/", legalitasPage());
writePage("/proyek/", proyekPage());
writePage("/artikel/", artikelIndex());
articles.forEach((article) => writePage(article.slug, articlePage(article)));
writePage("/solusi/", solusiIndex());
solutions.forEach((solution) => writePage(solution.slug, solusiPage(solution)));
writePage("/kontak/", kontakPage());
writeFileSync(join(ROOT, "sitemap.xml"), sitemap(), "utf8");
writeFileSync(join(ROOT, "robots.txt"), robots(), "utf8");
