import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import m1 from "@/assets/m1.jpg";
import m2 from "@/assets/m2.jpg";
import m3 from "@/assets/m3.jpg";
import m4 from "@/assets/m4.jpg";

export const Route = createFileRoute("/cerita")({
  head: () => ({
    meta: [
      { title: "Cerita Alia & Halim — Kisah Lengkap" },
      {
        name: "description",
        content:
          "Kisah lengkap Alia & Halim dari bab ke bab: pertemuan pertama di lapangan, kenyamanan yang tenang, ciuman paling bahagia, hingga bucket bunga dan bingkai foto berdua.",
      },
      { property: "og:title", content: "Cerita Alia & Halim — Kisah Lengkap" },
      {
        property: "og:description",
        content:
          "Bab demi bab perjalanan cinta Alia & Halim, lengkap dengan foto dan kutipan.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CeritaPage,
});

const chapters = [
  {
    no: "Bab Satu",
    title: "Lapangan Tempat Semuanya Dimulai",
    src: m4,
    alt: "Pertemuan pertama Alia dan Halim di lapangan",
    body: [
      "Semua berawal dari sebuah permintaan sederhana. Alia yang meminta bertemu, dan Halim yang datang tanpa banyak bertanya. Lapangan itu luas, langitnya terbuka, dan tak ada yang istimewa — sampai kami duduk berdampingan.",
      "Tidak ada yang merencanakan rasa nyaman itu. Ia datang tiba-tiba, tanpa permisi, seperti angin sore yang tahu ke mana harus berhembus. Dari sanalah kami tahu: ini bukan pertemuan biasa.",
    ],
    quote: "Kamu yang meminta, aku yang datang — dan nyaman itu memilih kita berdua.",
  },
  {
    no: "Bab Dua",
    title: "Kenyamanan yang Dalam dan Tenang",
    src: m2,
    alt: "Alia dan Halim berjalan berdua",
    body: [
      "Jika ditanya momen apa yang paling berkesan, jawabannya selalu kembali ke pertemuan pertama itu. Bukan karena tempatnya, tetapi karena rasa yang lahir di sana: kenyamanan yang dalam, tenang, dan tidak tergesa.",
      "Sejak hari itu, ke mana pun kaki melangkah, rasa itu ikut serta. Ia menjadi alasan untuk pulang, alasan untuk tetap tinggal, dan alasan untuk berjalan lebih jauh bersama.",
    ],
    quote: "Bersamamu, tenang bukan lagi sesuatu yang dicari — ia sudah ada di sini.",
  },
  {
    no: "Bab Tiga",
    title: "Ciuman Paling Membahagiakan",
    src: m1,
    alt: "Momen bahagia Alia dan Halim",
    body: [
      "Ada satu ciuman yang tak pernah selesai kami kenang. Ciuman yang tidak perlu kata-kata, tidak butuh alasan, dan tidak bisa diulang persis sama — karena bahagianya terlalu utuh.",
      "Di detik itu, dunia terasa cukup. Tidak ada yang kurang, tidak ada yang perlu ditambah. Hanya kita, dan janji tanpa suara bahwa bahagia sejati adalah bersamamu.",
    ],
    quote: "Bukan sekadar ciuman — itu adalah bahagia yang akhirnya menemukan rumahnya.",
  },
  {
    no: "Bab Empat",
    title: "Bucket Bunga & Bingkai Kita Berdua",
    src: m3,
    alt: "Bucket bunga dan bingkai foto Alia dan Halim",
    body: [
      "Hadiah tak harus besar untuk berarti. Sebuah bucket bunga yang indah dan bingkai foto berisi wajah kita berdua — kecil di tangan, tetapi besar di hati.",
      "Bunganya mungkin akan layu, tetapi bingkai itu tetap berdiri di sudut ruangan, mengingatkan bahwa cerita ini nyata, dan masih terus ditulis setiap hari.",
    ],
    quote: "Di dalam bingkai kecil itu, ada seluruh dunia kita.",
  },
];

function CeritaPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden">
        <img
          src={hero}
          alt="Alia dan Halim berpegangan tangan di bawah cahaya senja"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, oklch(0.25 0.03 60 / 0.8), oklch(0.25 0.03 60 / 0.2) 55%, transparent)",
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-16 animate-fade-up">
          <Link
            to="/"
            className="text-xs tracking-[0.3em] uppercase transition-opacity hover:opacity-60"
            style={{ color: "oklch(0.9 0.03 85)" }}
          >
            ← Kembali ke album
          </Link>
          <p className="mt-6 font-hand text-xl md:text-2xl" style={{ color: "oklch(0.9 0.03 85)" }}>
            cerita lengkap
          </p>
          <h1
            className="mt-2 font-display text-5xl md:text-7xl font-medium tracking-tight"
            style={{ color: "oklch(0.97 0.015 85)" }}
          >
            Kisah Alia <span className="italic font-light">&</span> Halim
          </h1>
        </div>
      </section>

      {/* Prologue */}
      <section className="mx-auto max-w-2xl px-6 py-20 text-center">
        <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground">
          Prolog
        </p>
        <p className="mt-6 font-display text-2xl md:text-3xl leading-relaxed">
          Ini bukan cerita tentang tempat-tempat jauh atau hari-hari besar.
          Ini cerita tentang dua orang yang menemukan rumah di dalam satu sama
          lain — pelan, tenang, dan pasti.
        </p>
      </section>

      {/* Chapters */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        {chapters.map((c, i) => (
          <article
            key={c.no}
            className="grid items-center gap-10 py-16 md:grid-cols-2 md:gap-16 border-t"
          >
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <img
                src={c.src}
                alt={c.alt}
                loading="lazy"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-md"
              />
            </div>
            <div>
              <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground">
                {c.no}
              </p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium leading-tight">
                {c.title}
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                {c.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <p className="mt-8 font-hand text-2xl leading-relaxed">“{c.quote}”</p>
            </div>
          </article>
        ))}
      </section>

      {/* Epilogue */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground">
            Epilog
          </p>
          <p className="mt-6 font-hand text-3xl md:text-4xl leading-relaxed text-secondary-foreground">
            “Cerita ini belum selesai — dan kami harap tak pernah selesai.”
          </p>
          <Link
            to="/"
            className="mt-10 inline-block border-b border-foreground pb-1 text-sm tracking-[0.25em] uppercase transition-opacity hover:opacity-60"
          >
            Lihat album kenangan →
          </Link>
        </div>
      </section>

      <footer className="py-14 text-center">
        <p className="font-display text-2xl italic text-muted-foreground">
          Alia & Halim
        </p>
      </footer>
    </main>
  );
}
