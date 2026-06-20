import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import OrderButtons from "@/components/OrderButtons";

export const metadata: Metadata = {
  title: "Photo Gallery: Fresh Cup Bubble Tea, Juice & Waffles in Don Mills",
  description:
    "📸 Fresh Cup photo gallery: bubble tea, milk tea, fruit tea, fresh juices, smoothies, Hong Kong bubble waffles, fluffy pancakes, ice cream & desserts made fresh daily in Peanut Plaza, North York.",
  keywords: [
    "bubble tea photos",
    "boba tea pictures",
    "bubble waffle images",
    "fluffy pancake images",
    "fresh juice cafe gallery",
    "bubble tea cafe Don Mills",
  ],
  alternates: { canonical: "/gallery" },
};

const gallery = [
  { src: "/images/hero.jpg", alt: "Fresh Cup signature bubble tea", span: true },
  { src: "/images/taro-milk-tea.jpg", alt: "Taro milk tea" },
  { src: "/images/brown-sugar-milk-tea.jpg", alt: "Brown sugar boba milk tea" },
  { src: "/images/peach-fruit-tea.jpg", alt: "Peach fruit tea" },
  { src: "/images/mango-slush.jpg", alt: "Mango slush" },
  { src: "/images/biscoff-latte.jpg", alt: "Biscoff latte" },
  { src: "/images/Real Mango Smoothie.jpg", alt: "Real mango smoothie" },
  { src: "/images/strawberry-milkshake.jpg", alt: "Strawberry smoothie" },
  { src: "/images/banana-smoothie.jpg", alt: "Banana smoothie" },
  { src: "/images/watermelon-juice.jpg", alt: "Fresh watermelon juice", span: true },
  { src: "/images/green-apple-fruit-tea.jpg", alt: "Green apple fruit tea" },
  { src: "/images/grapefruit-fruit-tea.jpg", alt: "Grapefruit fruit tea" },
  { src: "/images/matcha-latte.jpg", alt: "Matcha latte" },
  { src: "/images/mango-fruit-tea.jpg", alt: "Mango fruit tea" },
  { src: "/images/taro-milkshake.jpg", alt: "Taro milkshake" },
  { src: "/images/egg-waffle.jpg", alt: "Hong Kong bubble waffle" },
  { src: "/images/Bubble Waffle.jpg", alt: "Strawberry bubble waffle" },
  { src: "/images/egg-waffle-ice-cream.jpg", alt: "Bubble waffle with ice cream", span: true },
  { src: "/images/Pancake.jpg", alt: "Fresh pancake with toppings", span: true },
  { src: "/images/ice-cream.jpg", alt: "Scooped ice cream" },
  { src: "/images/macarons.jpg", alt: "Assorted French macarons" },
  { src: "/images/Biscoff Croffle.jpg", alt: "Crispy Biscoff croffle" },
  { src: "/images/Crossiant Sandwich.jpg", alt: "Buttery croissant sandwich" },
  { src: "/images/Hot Dog.jpg", alt: "Gourmet hot dog" },
  { src: "/images/Potato Wedges.png", alt: "Golden potato wedges", span: true },
  { src: "/images/Poutine.png", alt: "Classic poutine fries", span: true },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Almost too pretty to drink"
        subtitle="Take a peek at what we pour and plate every day at Fresh Cup."
      />

      <section className="container-x py-14">
        <div className="grid auto-rows-[220px] grid-cols-2 gap-4 sm:auto-rows-[260px] md:grid-cols-3 lg:grid-cols-4">
          {gallery.map((g, i) => (
            <figure
              key={g.src}
              className={`group relative overflow-hidden rounded-3xl shadow-md ring-1 ring-black/5 ${
                g.span ? "row-span-2" : ""
              }`}
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority={i < 4}
              />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-brand-greenDark/90 to-transparent p-4 text-sm font-semibold text-white transition-transform duration-300 group-hover:translate-y-0">
                {g.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="rounded-3xl bg-brand-mint px-6 py-10 text-center">
          <h2 className="section-title">Tag us in yours</h2>
          <p className="mx-auto mt-3 max-w-lg text-brand-greenDark/70">
            Snap your Fresh Cup and order your next one online.
          </p>
          <div className="mt-6 flex justify-center">
            <OrderButtons />
          </div>
        </div>
      </section>
    </>
  );
}
