import Link from "next/link";

const fitur = [
  {
    judul: "Sitasi Modul & Catatan Resmi",
    deskripsi:
      "Jawaban selalu menyertakan rujukan halaman modul praktikum dan catatan kuliah CS UPer terverifikasi.",
  },
  {
    judul: "Anti-Halusinasi dengan RAG",
    deskripsi:
      "Menjawab pertanyaan konsep pemrograman hanya berdasarkan basis data dokumen mata kuliah terkurasi.",
  },
  {
    judul: "Latihan Soal & Kuis Interaktif",
    deskripsi:
      "Hasilkan latihan soal pemahaman algoritma dan struktur data sesuai silabus semester berjalan.",
  },
];

const kolom =
  "rounded border px-3 py-2 focus-visible:outline-2 " +
  "focus-visible:outline-offset-2 focus-visible:outline-blue-700";

export default function Beranda() {
  return (
    <>
      <a href="#konten" className="sr-only focus:not-sr-only focus:p-2">
        Lewati ke konten utama
      </a>
      <header className="border-b">
        {/* navigasi: bertumpuk di ponsel, mendatar mulai 640 px (sm) */}
        <nav
          aria-label="Navigasi utama"
          className="mx-auto flex max-w-6xl flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <Link href="/" className="text-xl font-bold text-brand">
            EduTutor AI
          </Link>
          <ul className="flex flex-col gap-2 sm:flex-row sm:gap-6">
            <li>
              <a href="#fitur" className="hover:underline">
                Fitur
              </a>
            </li>
            <li>
              <a href="#cara-kerja" className="hover:underline">
                Cara Kerja
              </a>
            </li>
            <li>
              <a href="#kontak" className="hover:underline">
                Kontak
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="konten" className="mx-auto max-w-6xl p-4">
        <section aria-labelledby="judul-utama" className="py-8">
          <h1
            id="judul-utama"
            className="text-3xl font-extrabold tracking-tight text-brand sm:text-4xl"
          >
            Belajar Terstruktur dengan AI Tutor Cerdas Berbasis RAG
          </h1>
          <p className="mt-3 text-base text-gray-700 sm:text-lg">
            Membantu mahasiswa Ilmu Komputer Universitas Pertamina memahami materi
            kuliah dan modul praktikum secara akurat tanpa halusinasi.
          </p>
        </section>

        <section id="fitur" aria-labelledby="judul-fitur" className="py-6">
          <h2 id="judul-fitur" className="text-2xl font-bold">
            Fitur Utama
          </h2>
          {/* kartu: 1 kolom di ponsel, 2 kolom mulai 640 px (sm), 3 kolom mulai 1024 px (lg) */}
          <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {fitur.map((f) => (
              <li key={f.judul}>
                <article className="h-full rounded-lg border p-6 shadow-sm">
                  <h3 className="text-lg font-semibold">{f.judul}</h3>
                  <p className="mt-2 text-gray-700">{f.deskripsi}</p>
                </article>
              </li>
            ))}
          </ul>
        </section>

        {/* konten dan aside: bertumpuk di ponsel, berdampingan mulai 1024 px (lg) */}
        <div className="my-8 grid gap-8 lg:grid-cols-[2fr_1fr]">
          <section id="cara-kerja" aria-labelledby="judul-cara">
            <h2 id="judul-cara" className="text-2xl font-bold">
              Cara Kerja
            </h2>
            <div className="mt-4 space-y-3 text-gray-700">
              <p>
                1. <strong>Pengunggahan & Indeksasi:</strong> Modul praktikum dan
                bank soal resmi diolah ke dalam basis data vektor.
              </p>
              <p>
                2. <strong>Pencarian Semantik:</strong> Saat mahasiswa bertanya,
                sistem mencari konteks materi yang paling relevan.
              </p>
              <p>
                3. <strong>Sintesis Terpercaya:</strong> LLM menyusun jawaban
                terstruktur lengkap dengan sitasi sumber modul.
              </p>
            </div>
          </section>

          <aside
            aria-label="Informasi tambahan"
            className="rounded-lg bg-gray-100 p-6"
          >
            <h3 className="text-lg font-semibold">Mengapa RAG?</h3>
            <p className="mt-2 text-sm text-gray-700">
              Model bahasa biasa sering mengarang konsep sintaks dan logika kode.
              Melalui <em>Retrieval-Augmented Generation</em> (RAG), jawaban
              terkunci pada literatur resmi kurikulum Program Studi Ilmu Komputer
              Universitas Pertamina.
            </p>
          </aside>
        </div>

        <section id="kontak" aria-labelledby="judul-kontak" className="py-6">
          <h2 id="judul-kontak" className="text-2xl font-bold">
            Hubungi Kami
          </h2>
          {/* formulir aksesibel (Bagian 4) */}
          <form className="mt-4 grid max-w-xl gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="nama" className="font-medium">
                Nama lengkap
              </label>
              <input
                id="nama"
                name="nama"
                type="text"
                required
                autoComplete="name"
                className={kolom}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-medium">
                Surel
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                aria-describedby="email-bantuan"
                className={kolom}
              />
              <p id="email-bantuan" className="text-sm text-gray-600">
                Gunakan alamat surel yang aktif.
              </p>
            </div>

            <fieldset className="flex flex-col gap-1">
              <legend className="font-medium">Peran</legend>
              <label className="flex items-center gap-2">
                <input type="radio" name="peran" value="pengguna" defaultChecked /> Pengguna
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="peran" value="mitra" /> Mitra
              </label>
            </fieldset>

            <div className="flex flex-col gap-1">
              <label htmlFor="pesan" className="font-medium">
                Pesan
              </label>
              <textarea id="pesan" name="pesan" rows={4} className={kolom} />
            </div>

            <button
              type="submit"
              className={kolom + " bg-blue-700 font-semibold text-white hover:bg-blue-800 cursor-pointer"}
            >
              Kirim
            </button>
          </form>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl p-4 text-center text-sm text-gray-600">
          <p>© 2026 EduTutor AI. Hak Cipta Dilindungi.</p>
        </div>
      </footer>
    </>
  );
}
