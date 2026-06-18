import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import FeaturedDrinks from "@/components/FeaturedDrinks";
import CategoryStrip from "@/components/CategoryStrip";
import LocalSearchLinks from "@/components/LocalSearchLinks";
import KidsFavorites from "@/components/KidsFavorites";
import GoogleTestimonials from "@/components/GoogleTestimonials";
import PremiumShowcase from "@/components/PremiumShowcase";
import RecentlyAdded from "@/components/RecentlyAdded";
import DailySpecialPromo from "@/components/DailySpecialPromo";
import CateringPromo from "@/components/CateringPromo";
import AboutPreview from "@/components/AboutPreview";
import ReviewCTA from "@/components/ReviewCTA";
import OrderCTA from "@/components/OrderCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LocalSearchLinks />
      <Highlights />
      <FeaturedDrinks />
      <CategoryStrip />
      <KidsFavorites />
      <GoogleTestimonials />
      <PremiumShowcase />
      <DailySpecialPromo />
      <RecentlyAdded />
      <CateringPromo />
      <AboutPreview />
      <ReviewCTA />
      <OrderCTA />
    </>
  );
}
