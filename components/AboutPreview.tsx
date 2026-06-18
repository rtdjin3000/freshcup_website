import Image from "next/image";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="container-x grid items-center gap-6 md:grid-cols-2 md:gap-10\">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-xl shadow-brand-green/10">
              <Image
                src="/images/matcha-latte.jpg"
                alt="Matcha latte at Fresh Cup"
                fill
                sizes="(max-width: 768px) 45vw, 22vw"
                className="object-cover"
              />
            </div>
            <div className="relative mt-4 aspect-[3/4] overflow-hidden rounded-3xl shadow-xl shadow-brand-green/10\">
              <Image
                src="/images/grapefruit-fruit-tea.jpg"
                alt="Grapefruit fruit tea at Fresh Cup"
                fill
                sizes="(max-width: 768px) 45vw, 22vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-2xl bg-brand-green px-6 py-4 text-center text-white shadow-xl">
            <p className="font-display text-2xl font-bold leading-none">Fresh</p>
            <p className="text-xs uppercase tracking-widest text-brand-cream/80">every single cup</p>
          </div>
        </div>

        <div>
          <span className="eyebrow">Our story</span>
          <h2 className="section-title mt-4">Where fresh meets fun</h2>
          <p className="mt-5 text-brand-greenDark/75">
            Fresh Cup started with a simple idea: bubble tea should taste as good as it looks — and it
            should be made with real ingredients. We hand-shake every milk tea, press our juices from
            real fruit, and griddle our bubble waffles to order.
          </p>
          <p className="mt-4 text-brand-greenDark/75">
            Tucked inside Peanut Plaza in North York, we&apos;re the neighbourhood spot for an
            after-school treat, a study fuel-up, or a sweet end to your day.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/about" className="btn-primary px-6 py-3">
              More about us
            </Link>
            <Link href="/menu" className="btn-outline px-6 py-3">
              Browse the menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
