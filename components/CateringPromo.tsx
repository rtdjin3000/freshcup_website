import Link from "next/link";
import { Cake, Calendar, Users } from "lucide-react";

export default function CateringPromo() {
  return (
    <section className="bg-gradient-to-br from-brand-pink/10 via-brand-peach/10 to-brand-green/5 py-10 md:py-14">
      <div className="container-x">
        <div className="max-w-3xl">
          <div className="eyebrow mb-2\">
            <span>🎉 Fresh Cup Events</span>
          </div>
          <h2 className="section-title mb-3\">
            Celebrate with Fresh Cup Catering
          </h2>
          <p className="text-brand-greenDark/75 text-lg mb-3\">
            Planning a birthday party, book launch, or private celebration? We offer bubble tea catering packages and exclusive cafe booking for events of any size.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="flex items-start gap-4">
              <Cake className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-brand-greenDark">Birthday Parties</h3>
                <p className="text-sm text-brand-greenDark/60">Customized drink packages & treats</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Users className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-brand-greenDark">Book Launches & Events</h3>
                <p className="text-sm text-brand-greenDark/60">Exclusive cafe rental available</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-brand-greenDark">Corporate Events</h3>
                <p className="text-sm text-brand-greenDark/60">Bulk packages & custom quotes</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/catering" className="btn btn-primary">
              Explore Catering Packages
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Get a Custom Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
