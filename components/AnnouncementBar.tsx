"use client";

import { useEffect, useMemo, useState } from "react";
import { restaurant } from "@/data/restaurant";

const baseMessages = [
  "🧋 Freshly shaken bubble tea — made to order in North York",
  "🥤 100% fresh-pressed juices · 50+ flavours of boba",
  "🧇 Try our Hong Kong bubble waffles with ice cream",
  "🛵 Order online on Uber Eats, SkipTheDishes, DoorDash & Fantuan",
];

export default function AnnouncementBar() {
  const [i, setI] = useState(0);

  const messages = useMemo(() => {
    if (!restaurant.dailySpecial?.active) {
      return baseMessages;
    }

    return [
      ...baseMessages,
      `⭐ Daily Special ${restaurant.dailySpecial.priceDisplay} — regular size drinks (no toppings)`,
    ];
  }, []);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % messages.length), 4500);
    return () => clearInterval(t);
  }, [messages.length]);

  return (
    <div className="bg-brand-greenDark text-brand-cream">
      <div className="container-x flex h-9 items-center justify-center overflow-hidden text-center">
        <p key={i} className="animate-fade-up text-xs font-medium tracking-wide sm:text-sm">
          {messages[i]}
        </p>
      </div>
    </div>
  );
}
