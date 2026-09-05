import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import m1 from "@/assets/m1.jpg";
import m2 from "@/assets/m2.jpg";
import m3 from "@/assets/m3.jpg";
import m4 from "@/assets/m4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alia & Halim — Album Kenangan" },
      {
        name: "description",
        content:
          "Sebuah album kenangan digital untuk Alia & Halim — kumpulan momen, cerita, dan perjalanan cinta mereka.",
      },
      { property: "og:title", content: "Alia & Halim — Album Kenangan" },
      {
        property: "og:description",
        content:
          "Kumpulan momen, cerita, dan perjalanan cinta Alia & Halim.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const memories = [
  {
    src: m4,
    title: "Pertemuan Pertama",
    text: "Di lapangan itulah pertama kali kami bertemu. Kamu yang meminta, aku yang datang, dan tiba-tiba nyaman yang tak terduga menyelimuti kami berdua.",
    wide: true,
  },
  {
    src: m2,
    title: "Kenyamanan yang Tenang",
    text: "Tak peduli di mana kaki melangkah, yang paling membekas adalah kenyamanan dalam — pelan, tenang, dan begitu pasti saat bersamamu.",
    wide: true,
  },
  {
    src: m1,
    title: "Ciuman Paling Bahagia",
    text: "Ciuman itu bukan sekadar ciuman. Di dalamnya ada janji tanpa kata bahwa bahagia sejati adalah bersamamu, hari ini dan nanti.",
    wide: false,
  },
  {
    src: m3,
    title: "Bucket Bunga & Bingkai Kita",
    text: "Bucket bunga yang indah dan bingkai foto berdua — hadiah kecil yang kujaga dengan sayang, karena di dalamnya ada seluruh dunia kita.",
    wide: false,
  },
];

function Index() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-end overflow-hidden">
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
              "linear-gradient(to top, oklch(0.25 0.03 60 / 0.75), oklch(0.25 0.03 60 / 0.15) 55%, transparent)",
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-20 animate-fade-up">
          <p className="font-hand text-xl md:text-2xl" style={{ color: "oklch(0.9 0.03 85)" }}>
            sebuah album kenangan
          </p>
          <h1
            className="mt-2 font-display text-6xl md:text-8xl font-medium tracking-tight"
            style={{ color: "oklch(0.97 0.015 85)" }}
          >
            Alia <span className="italic font-light">&</span> Halim
          </h1>
          <p
            className="mt-4 max-w-md text-sm md:text-base leading-relaxed"
            style={{ color: "oklch(0.88 0.03 85)" }}
          >
            Setiap bab adalah momen, setiap foto adalah detak yang pernah kita
            rasakan bersama.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground">
          Bab Satu — Awal
        </p>
        <h2 className="mt-4 font-display text-4xl md:text-5xl font-medium leading-tight">
          Cerita yang tumbuh pelan-pelan,
          <br className="hidden md:block" /> seperti kopi yang diseduh pagi hari.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-muted-foreground leading-relaxed">
          Album ini kami rangkai dari potongan-potongan kecil: tawa di meja
          kafe, langkah kaki di pasir, dan janji yang diikat di hari bahagia.
        </p>
      </section>

      {/* Memories grid */}
      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="grid gap-6 md:grid-cols-2">
          {memories.map((m, i) => (
            <article
              key={m.title}
              className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition-shadow duration-500 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={m.src}
                  alt={m.title}
                  loading="lazy"
                  width={1200}
                  height={m.wide ? 900 : 1200}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <h3 className="font-display text-3xl font-medium">
                  {m.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {m.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-hand text-3xl md:text-4xl leading-relaxed text-secondary-foreground">
            “Dan di antara semua musim yang berlalu, kamu tetap menjadi rumah.”
          </p>
          <p className="mt-6 text-xs tracking-[0.3em] uppercase text-muted-foreground">
            — A & H
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-14 text-center">
        <p className="font-display text-2xl italic text-muted-foreground">
          Alia & Halim
        </p>
        <p className="mt-2 text-xs tracking-[0.25em] uppercase text-muted-foreground">
          kenangan yang tak pernah selesai ditulis
        </p>
      </footer>
    </main>
  );
}
