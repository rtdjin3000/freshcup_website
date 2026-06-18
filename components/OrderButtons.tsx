"use client";

import { restaurant } from "@/data/restaurant";

type Props = {
  size?: "sm" | "md";
  className?: string;
};

export default function OrderButtons({ size = "md", className = "" }: Props) {
  const base = size === "sm" ? "px-5 py-2.5 text-xs md:text-sm" : "px-6 py-3.5 text-sm md:text-base md:py-3";

  const trackDeliveryClick = (platform: "uber_eats" | "skip_the_dishes" | "door_dash" | "fantuan") => {
    if (typeof window === "undefined") return;

    const analyticsWindow = window as Window & {
      gtag?: (...args: unknown[]) => void;
      dataLayer?: Array<Record<string, unknown>>;
    };

    analyticsWindow.gtag?.("event", "select_delivery_platform", {
      platform,
      source: "order_buttons",
    });

    analyticsWindow.dataLayer?.push({
      event: "select_delivery_platform",
      platform,
      source: "order_buttons",
    });
  };

  return (
    <div className={`flex flex-col sm:flex-row flex-wrap items-center gap-3 w-full sm:w-auto ${className}`}>
      <a
        href={restaurant.ordering.uberEats}
        onClick={() => trackDeliveryClick("uber_eats")}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn w-full sm:w-auto bg-[#06C167] text-white shadow-lg shadow-[#06C167]/25 hover:brightness-105 hover:shadow-xl hover:-translate-y-0.5 transition-all min-h-[48px] sm:min-h-auto font-bold ${base}`}
      >
        🛵 Uber Eats
      </a>
      <a
        href={restaurant.ordering.skipTheDishes}
        onClick={() => trackDeliveryClick("skip_the_dishes")}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn w-full sm:w-auto bg-[#FF8000] text-white shadow-lg shadow-[#FF8000]/25 hover:brightness-105 hover:shadow-xl hover:-translate-y-0.5 transition-all min-h-[48px] sm:min-h-auto font-bold ${base}`}
      >
        🚗 Skip the Dishes
      </a>
      <a
        href={restaurant.ordering.doorDash}
        onClick={() => trackDeliveryClick("door_dash")}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn w-full sm:w-auto bg-[#EB1700] text-white shadow-lg shadow-[#EB1700]/25 hover:brightness-105 hover:shadow-xl hover:-translate-y-0.5 transition-all min-h-[48px] sm:min-h-auto font-bold ${base}`}
      >
        🛍️ DoorDash
      </a>
      <a
        href={restaurant.ordering.fantuan}
        onClick={() => trackDeliveryClick("fantuan")}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn w-full sm:w-auto bg-[#41C8CC] text-white shadow-lg shadow-[#41C8CC]/25 hover:brightness-105 hover:shadow-xl hover:-translate-y-0.5 transition-all min-h-[48px] sm:min-h-auto font-bold ${base}`}
      >
        🍜 Fantuan
      </a>
    </div>
  );
}
