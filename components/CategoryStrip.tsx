import Image from "next/image";
import Link from "next/link";
import { drinkCategories } from "@/data/menu";

export default function CategoryStrip() {
  return (
    <section className="container-x py-10 md:py-14">
      <div className="text-center">
        <span className="eyebrow">Explore the menu</span>
        <h2 className="section-title mt-2\">Something for every craving</h2>
        <p className="mx-auto mt-1 max-w-xl text-brand-greenDark/70\">
          From classic milk teas to fresh-pressed juices and icy slushes — tap a category to dive in.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        {drinkCategories.map((cat) => (
          <Link
            key={cat.id}
            href={`/menu#${cat.id}`}
            className="card group relative overflow-hidden"
          >
            <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4]">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-greenDark/85 via-brand-greenDark/10 to-transparent" />
              {cat.badge && (
                <span className="absolute right-3 top-3 rounded-full bg-brand-pink px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-greenDark shadow">
                  {cat.badge}
                </span>
              )}
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4\">
                <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                  {cat.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-white/80">
                  from ${cat.sizes[0].price.toFixed(2)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
