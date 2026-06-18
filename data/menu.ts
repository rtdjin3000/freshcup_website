export type Size = { label: string; price: number };

export type DrinkCategory = {
  id: string;
  name: string;
  blurb: string;
  temp?: string; // e.g. "Cold / Hot" or "Cold"
  teaBase?: string;
  sizes: Size[];
  flavours: string[];
  image: string;
  badge?: string;
};

export type FoodItem = {
  name: string;
  price: number | string;
  note?: string;
};

export type FoodCategory = {
  id: string;
  name: string;
  blurb: string;
  image?: string;
  items: FoodItem[];
};

export const drinkCategories: DrinkCategory[] = [
  {
    id: "milk-tea",
    name: "Milk Tea",
    blurb:
      "Our signature shaken milk teas with a creamy finish. Add brown sugar tapioca for the classic boba experience.",
    temp: "Cold / Hot",
    teaBase: "Black · Green · Oolong",
    sizes: [
      { label: "R", price: 5.99 },
      { label: "L", price: 6.99 },
      { label: "XL", price: 7.99 },
    ],
    flavours: [
      "Black Milk Tea",
      "Roasted Milk Tea",
      "Jasmine Milk Tea",
      "Brown Sugar",
      "Strawberry",
      "Blueberry",
      "Passion Fruit",
      "Mango",
      "Peach",
      "Banana",
      "Watermelon",
      "Honeydew",
      "Green Apple",
      "Lychee",
      "Oreo",
      "Biscoff",
      "Thai Tea",
      "Taro",
      "Coconut",
      "Pina Colada",
      "Taro-Coconut",
      "Matcha",
      "Mocha",
      "Chocolate",
      "Almond",
    ],
    image: "/images/taro-milk-tea.jpg",
    badge: "Most loved",
  },
  {
    id: "fruit-tea",
    name: "Fruit Tea",
    blurb:
      "Light, refreshing fruit teas brewed fresh and bursting with flavour. Perfect with popping pearls or jelly.",
    temp: "Cold / Hot",
    teaBase: "Black · Green · Oolong",
    sizes: [
      { label: "R", price: 5.49 },
      { label: "L", price: 6.49 },
      { label: "XL", price: 7.49 },
    ],
    flavours: [
      "Jasmine Green Tea",
      "Honey Oolong Tea",
      "Pomegranate",
      "Winter Melon",
      "Passion Fruit",
      "Green Apple",
      "Blueberry",
      "Honeydew",
      "Strawberry",
      "Watermelon",
      "Mango",
      "Rose",
      "Pineapple",
      "Grapefruit",
      "Lychee",
      "Grape",
      "Peach",
      "Lemon",
      "Ginger",
    ],
    image: "/images/peach-fruit-tea.jpg",
  },
  {
    id: "latte-milkshake",
    name: "Latte & Milkshakes",
    blurb:
      "Rich, indulgent lattes and thick milkshakes blended to perfection. Dessert in a cup.",
    temp: "Cold",
    sizes: [
      { label: "R", price: 6.49 },
      { label: "L", price: 7.49 },
      { label: "XL", price: 8.49 },
    ],
    flavours: [
      "Matcha",
      "Oreo",
      "Biscoff",
      "Oreo Matcha",
      "Strawberry",
      "Blueberry",
      "Passion Fruit",
      "Mango",
      "Peach",
      "Banana",
      "Watermelon",
      "Honeydew",
      "Green Apple",
      "Lychee",
      "Taro",
      "Mocha",
      "Chocolate",
      "Brown Sugar",
    ],
    image: "/images/biscoff-latte.jpg",
  },
  {
    id: "slush",
    name: "Slush",
    blurb:
      "Icy, slushy and oh-so-refreshing. Add real fruit for an extra burst (+$0.50).",
    temp: "Cold",
    sizes: [
      { label: "R", price: 6.49 },
      { label: "L", price: 7.49 },
      { label: "XL", price: 8.49 },
    ],
    flavours: [
      "Pomegranate",
      "Winter Melon",
      "Passion Fruit",
      "Green Apple",
      "Blueberry",
      "Honeydew",
      "Strawberry",
      "Watermelon",
      "Mango",
      "Pineapple",
      "Grapefruit",
      "Lychee",
      "Grape",
      "Peach",
    ],
    image: "/images/mango-slush.jpg",
  },
  {
    id: "smoothie",
    name: "Smoothie",
    blurb:
      "Made with real fruit and veggies — a creamy, wholesome blend in every sip.",
    temp: "Cold",
    sizes: [
      { label: "R", price: 6.99 },
      { label: "L", price: 7.99 },
      { label: "XL", price: 8.99 },
    ],
    flavours: [
      "Mango",
      "Strawberry",
      "Banana",
      "Pineapple",
      "Avocado",
      "Watermelon",
      "Kiwi",
      "Papaya",
      "Blueberry",
      "Pina Colada",
      "Lemon",
      "Orange",
      "Kale + Pineapple",
      "Celery + Banana",
      "Cucumber + Avocado",
      "Carrot + Orange",
      "Beet + Pineapple",
    ],
    image: "/images/strawberry-milkshake.jpg",
    badge: "Real fruit",
  },
  {
    id: "fresh-juice",
    name: "100% Fresh Juice",
    blurb:
      "Cold-pressed and signature blended juices, squeezed fresh daily. Nothing but the good stuff.",
    temp: "Cold",
    sizes: [
      { label: "R", price: 7.49 },
      { label: "L", price: 8.49 },
    ],
    flavours: [
      "Apple",
      "Carrot",
      "Orange",
      "Celery",
      "Beet",
      "Ginger",
      "Mango (blended)",
      "Strawberry (blended)",
      "Banana (blended)",
      "Pineapple (blended)",
      "Avocado (blended)",
      "Watermelon (blended)",
      "Kiwi (blended)",
      "Blueberry (blended)",
      "Kale (blended)",
      "Papaya (blended)",
    ],
    image: "/images/watermelon-juice.jpg",
  },
  {
    id: "matcha",
    name: "Matcha Drinks",
    blurb:
      "Premium matcha lattes and specialty matcha beverages with authentic Japanese matcha. Creamy, earthy, luxurious.",
    temp: "Cold / Hot",
    sizes: [
      { label: "R", price: 6.49 },
      { label: "L", price: 7.49 },
      { label: "XL", price: 8.49 },
    ],
    flavours: [
      "Matcha Latte",
      "Matchamisu (Tiramisu Matcha)",
      "Strawberry Matcha Latte",
      "Strawberry Cheesecake Latte",
      "Oreo Matcha Latte",
      "Mango Matcha Latte",
      "Coconut Matcha Latte",
      "Matcha Milkshake (Cold)",
      "Matcha Slush (Cold)",
      "Dirty Matcha (with espresso)",
    ],
    image: "/images/matcha-latte.jpg",
    badge: "Premium",
  },
  {
    id: "coffee",
    name: "Coffee",
    blurb:
      "Specialty espresso-based coffee drinks. Bold, smooth, and perfectly crafted.",
    temp: "Cold / Hot",
    sizes: [
      { label: "R", price: 5.99 },
      { label: "L", price: 6.99 },
      { label: "XL", price: 7.99 },
    ],
    flavours: [
      "Espresso",
      "Brewed Coffee",
      "Americano",
      "Cappuccino",
      "Mochaccino",
      "Latte",
      "Mocha Latte",
      "Caramel Latte",
      "Rose Latte",
      "Vanilla Latte",
      "Coffee Latte",
      "Tiramisu Latte",
      "Dirty Matcha (Matcha + Espresso)",
    ],
    image: "/images/biscoff-latte.jpg",
  },
  {
    id: "signature-bubble-tea",
    name: "Signature Bubble Tea",
    blurb:
      "Premium signature creations. Our house specials with unique combinations and premium ingredients.",
    temp: "Cold",
    sizes: [
      { label: "R", price: 6.99 },
      { label: "L", price: 7.99 },
      { label: "XL", price: 8.99 },
    ],
    flavours: [
      "Brown Sugar Crème Brûlée (with torched sugar)",
      "Mango Fruit Tea with Lychee Jelly",
      "Taro Milk Tea with Brown Sugar",
      "Strawberry Cheesecake Tea",
      "Matcha Latte with Boba",
      "Ube Purple Yam Special",
    ],
    image: "/images/hero.jpg",
    badge: "House Special",
  },
];

export const toppings: { name: string; price: number | string }[] = [
  { name: "Icing Sugar", price: "Free" },
  { name: "Rainbow Sprinkles", price: "Free" },
  { name: "Tapioca / Popping Pearls", price: 0.5 },
  { name: "Aloe / Lychee / Mango / Jelly (any)", price: 0.5 },
  { name: "Grass / Strawberry / Pineapple Jelly", price: 0.5 },
  { name: "Coconut Jelly", price: 0.5 },
  { name: "Popping Boba", price: 0.99 },
  { name: "Brown Sugar Tapioca", price: 0.99 },
  { name: "Wafer Stick", price: 0.99 },
  { name: "Nutella", price: 0.99 },
  { name: "Smarties / Marshmallows", price: 0.99 },
  { name: "Oreo / Biscoff", price: 0.99 },
  { name: "Whipping Cream", price: 1.25 },
  { name: "Strawberry Foam", price: 1.49 },
  { name: "Matcha Foam", price: 1.49 },
  { name: "Mango Foam", price: 1.49 },
  { name: "Coconut Foam", price: 1.49 },
  { name: "Fresh Fruits", price: 2.99 },
  { name: "Protein Powder", price: 0.99 },
];

export const dessertCategory: FoodCategory = {
  id: "desserts",
  name: "Bubble Waffles & Ice Cream",
  blurb:
    "Freshly pressed Hong Kong-style bubble waffles and scooped ice cream. The perfect sweet pairing for your drink.",
  image: "/images/egg-waffle-ice-cream.jpg",
  items: [
    { name: "Bubble Waffle", price: 4.49, note: "Single" },
    { name: "Bubble Waffle (Two)", price: 7.99 },
    { name: "Bubble Waffle + 1 Scoop Ice Cream", price: 7.49 },
    { name: "Bubble Waffle + 2 Scoops Ice Cream", price: 9.49 },
    { name: "Ice Cream — 1 Scoop", price: 3.99, note: "Vanilla, Cookies & Cream, Chocolate, Rum & Raisin, Strawberry, Cotton Candy" },
    { name: "Ice Cream — 2 Scoops", price: 5.99 },
  ],
};

export const snacksCategory: FoodCategory = {
  id: "snacks",
  name: "Snacks & All-Day Breakfast",
  blurb:
    "Savoury bites and hearty breakfast to go with your drink — served all day.",
  image: "/images/Pancake.jpg",
  items: [
    { name: "Pancake", price: 6.99 },
    { name: "Farmer's Breakfast Wrap", price: 5.99 },
    { name: "Egg & Cheese Muffin", price: 3.99 },
    { name: "HK Style Noodles w/ Egg & Luncheon Meat", price: 8.99 },
    { name: "Hot Dog", price: 4.99 },
    { name: "Italian Style Beef Meatballs (10)", price: 6.49 },
    { name: "Popcorn Chicken (with Dip)", price: 8.99 },
    { name: "Vegetarian Spring Rolls (10)", price: 7.49 },
    { name: "Deep Fried Chicken Wings (10)", price: 12.49 },
    { name: "Potato Wedges", price: 4.49 },
    { name: "Poutine", price: 5.99 },
    { name: "French Fries", price: 3.99 },
  ],
};

export const combosCategory: FoodCategory = {
  id: "combos",
  name: "Combos",
  blurb: "Pair a snack with a drink and save.",
  items: [
    { name: "Hot Dog or Bubble Waffle + Milk Tea (R)", price: 9.99 },
    { name: "Any Two Drinks (L)", price: 13.99 },
    { name: "Farmer's Breakfast Wrap + Fruit Tea (R)", price: 10.49 },
  ],
};

export const bubbleWafflesCategory: FoodCategory = {
  id: "bubble-waffles",
  name: "Bubble Waffles",
  blurb:
    "Crispy, fluffy Hong Kong bubble waffles in wild flavours. Customise with toppings or enjoy with ice cream & sauce.",
  image: "/images/Bubble Waffle.jpg",
  items: [
    { name: "Bubble Waffle — Taro", price: 6.49 },
    { name: "Bubble Waffle — Oreo", price: 6.49 },
    { name: "Bubble Waffle — Chocolate", price: 6.49 },
    { name: "Bubble Waffle — Mango", price: 6.49 },
    { name: "Bubble Waffle — Matcha", price: 6.49 },
    { name: "Bubble Waffle — Brown Sugar", price: 6.49 },
    { name: "Bubble Waffle — Strawberry", price: 6.49 },
    { name: "Bubble Waffle — Original", price: 5.99 },
    { name: "Bubble Waffle + 1 Scoop Ice Cream", price: 8.99 },
    { name: "Bubble Waffle + 2 Scoops Ice Cream", price: 10.99 },
  ],
};

export const croflesCategory: FoodCategory = {
  id: "crofles",
  name: "Crofles",
  blurb:
    "The ultimate hybrid: flaky croissant meets crispy waffle. Premium French pastry meets Asian indulgence.",
  image: "/images/Biscoff Croffle.jpg",
  items: [
    { name: "Croffle with Whipped Cream", price: 5.49 },
    { name: "Biscoff Cookie Croffle", price: 6.49 },
    { name: "Cookies & Cream Croffle", price: 6.49 },
    { name: "Croffle + 1 Scoop Ice Cream", price: 7.99 },
  ],
};

export const specialsCategory: FoodCategory = {
  id: "specials",
  name: "Sweet Treats",
  blurb: "Premium desserts and sweet indulgences.",
  image: "/images/macarons.jpg",
  items: [
    { name: "Macarons (4-pack assorted)", price: 8.99 },
    { name: "Macarons (single)", price: 2.49 },
    { name: "Cheesecake Cups", price: 4.99 },
    { name: "Whipped Cream (side)", price: 1.99 },
    { name: "Caramel Drizzle (add-on)", price: 1.49 },
    { name: "Chocolate Drizzle (add-on)", price: 1.49 },
  ],
};

export const cateringCategory: FoodCategory = {
  id: "catering",
  name: "Catering & Events",
  blurb:
    "Bubble tea catering for birthday parties, book launches, corporate events, and private celebrations. Custom packages available.",
  items: [
    { name: "Party Package (10 people) — 10 drinks of choice", price: "Starting $59.99", note: "Choose any flavours from our menu. Includes cups, lids, straws." },
    { name: "Party Package (20 people) — 20 drinks of choice", price: "Starting $109.99" },
    { name: "Party Package (50 people) — 50 drinks of choice", price: "Starting $249.99" },
    { name: "Birthday Party Bundle — 15 drinks + 3 dozen macarons + decorations", price: "Starting $129.99" },
    { name: "Cafe Booking (2 hours) — Private event space rental", price: "Starting $299.99", note: "Includes 10 complimentary drinks. Perfect for birthdays, launches, celebrations." },
    { name: "Full Cafe Buyout (4 hours) — Exclusive venue rental", price: "Starting $499.99", note: "Entire cafe reserved. Includes 25 complimentary drinks and setup." },
    { name: "Custom Catering Package", price: "Quote upon request", note: "Talk to us about your specific event needs. We offer customized packages for any celebration." },
  ],
};

export const customizations = {
  sugar: ["30%", "50%", "70%", "Regular"],
  ice: ["No Ice", "Less Ice", "Regular"],
};
