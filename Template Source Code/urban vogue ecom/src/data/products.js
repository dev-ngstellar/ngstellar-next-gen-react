export const mockProducts = [
  // --- WOMEN'S CATEGORY (6 products) ---
  {
    id: "w1",
    name: "Double-Breasted Wool Trench Coat",
    price: 349.00,
    rating: 4.9,
    category: "Women",
    images: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Camel", hex: "#C19A6B" },
      { name: "Black", hex: "#1A1A1A" },
      { name: "Off-White", hex: "#F5F5F0" }
    ],
    description: "An editorial-worthy double-breasted trench coat tailored from a premium wool blend. Featuring structured shoulders, storm flaps, and a removable waist belt for a sophisticated silhouette. Designed for effortless seasonal layering.",
    details: [
      "Shell: 80% Virgin Wool, 20% Polyamide",
      "Lining: 100% Viscose",
      "Double-breasted button closure",
      "Side welt pockets and adjustable button-tab cuffs",
      "Dry clean only. Crafted in Italy"
    ],
    reviews: [
      {
        id: "r1",
        author: "Eleanor Vance",
        rating: 5,
        date: "May 12, 2026",
        comment: "Absolutely stunning! The drape is majestic, and the wool feels incredibly soft and premium. A timeless investment piece."
      },
      {
        id: "r2",
        author: "Serena Williams",
        rating: 4.8,
        date: "June 02, 2026",
        comment: "Excellent tailoring. It runs slightly oversized, which is perfect for layering thick sweaters underneath."
      }
    ]
  },
  {
    id: "w2",
    name: "Silk Satin Slip Midi Dress",
    price: 189.00,
    rating: 4.8,
    category: "Women",
    images: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Crimson Red", hex: "#9E1B1B" },
      { name: "Emerald Green", hex: "#0E5D3E" },
      { name: "Midnight Black", hex: "#0A0A0A" }
    ],
    description: "Cut on the bias for a fluid, figure-skimming fit, this premium Mulberry silk slip dress exudes modern minimalism. Styled with a delicate cowl neckline and adjustable criss-cross spaghetti straps.",
    details: [
      "100% Grade 6A Mulberry Silk",
      "V-neck cowl styling",
      "Flattering bias-cut midi length",
      "Delicate adjustable shoulder straps",
      "Hand wash cold or dry clean"
    ],
    reviews: [
      {
        id: "r3",
        author: "Gigi H.",
        rating: 5,
        date: "April 28, 2026",
        comment: "The silk feels like liquid gold on the skin. I wore the emerald version to a gala and received countless compliments."
      }
    ]
  },
  {
    id: "w3",
    name: "Oversized Cashmere Knit Sweater",
    price: 220.00,
    rating: 4.7,
    category: "Women",
    images: [
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Beige", hex: "#D2B48C" },
      { name: "Off-White", hex: "#F5F5F0" },
      { name: "Charcoal", hex: "#36454F" }
    ],
    description: "An indispensable basic for the refined wardrobe. Knitted from ultra-soft, ethically sourced Inner Mongolian cashmere, this oversized knit boasts dropped shoulders and ribbed trims for relaxed elegance.",
    details: [
      "100% Certified Cashmere",
      "Dropped shoulders with a relaxed fit",
      "Mock neck collar with ribbed details",
      "Ethically sourced and traceably produced",
      "Dry clean or gentle hand wash"
    ],
    reviews: [
      {
        id: "r4",
        author: "Clara S.",
        rating: 5,
        date: "May 20, 2026",
        comment: "The softest sweater I have ever owned. Lightweight yet incredibly warm. Worth every single penny."
      }
    ]
  },
  {
    id: "w4",
    name: "High-Waisted Tailored Trousers",
    price: 149.00,
    rating: 4.6,
    category: "Women",
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#111111" },
      { name: "Ivory", hex: "#FFFFF0" },
      { name: "Taupe", hex: "#B38B6D" }
    ],
    description: "These wide-leg trousers are detailed with sharp front creases and a flattering high-rise waist. Designed with belt loops, subtle side pockets, and a clean hook-and-bar closure.",
    details: [
      "65% Polyester, 30% Rayon, 5% Spandex",
      "Flattering high-rise waist",
      "Sharp pressed creases along the leg",
      "Zip fly with hook-and-bar closure",
      "Machine wash cold, hang dry"
    ],
    reviews: [
      {
        id: "r5",
        author: "Lauren K.",
        rating: 4.5,
        date: "June 05, 2026",
        comment: "They fit perfectly at the waist and drape beautifully. Perfect for office wear as well as casual chic styles."
      }
    ]
  },
  {
    id: "w5",
    name: "Minimalist Linen Wrap Blazer",
    price: 195.00,
    rating: 4.9,
    category: "Women",
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Oatmeal", hex: "#EAE6DF" },
      { name: "Black", hex: "#1A1A1A" }
    ],
    description: "Crafted from breathable organic linen, this structured wrap blazer offers a modern take on summer suiting. Designed with an adjustable side tie closure for a customized fit.",
    details: [
      "100% Organic Linen",
      "Unlined for a lightweight, breathable feel",
      "Internal button and external wrap tie",
      "Notched lapels and patch pockets",
      "Dry clean recommended"
    ],
    reviews: [
      {
        id: "r6",
        author: "Hannah L.",
        rating: 5,
        date: "June 08, 2026",
        comment: "So light and luxurious. Perfect for warm days when you still need a layer of sophistication."
      }
    ]
  },
  {
    id: "w6",
    name: "Pleated Silk-Georgette Blouse",
    price: 135.00,
    rating: 4.7,
    category: "Women",
    images: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Champagne", hex: "#F7E7CE" },
      { name: "Midnight Black", hex: "#111111" }
    ],
    description: "Elegant silk-georgette blouse detailed with delicate vertical pin-tucks and a refined band collar. Elegant bishop sleeves with extended buttoned cuffs.",
    details: [
      "100% Silk Georgette",
      "Semi-sheer finish (camisole included)",
      "Band collar with keyhole button closure",
      "Bishop sleeves with detailed cuffs",
      "Dry clean only"
    ],
    reviews: [
      {
        id: "r7",
        author: "Diana P.",
        rating: 4.7,
        date: "May 15, 2026",
        comment: "Extremely delicate and romantic. Beautiful cuffs that look stunning peaking out from a blazer."
      }
    ]
  },

  // --- MEN'S CATEGORY (6 products) ---
  {
    id: "m1",
    name: "Slim-Fit Italian Wool Blazer",
    price: 380.00,
    rating: 4.9,
    category: "Men",
    images: [
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Midnight Navy", hex: "#1A2535" },
      { name: "Charcoal Grey", hex: "#3A3B3C" },
      { name: "Classic Black", hex: "#0D0D0D" }
    ],
    description: "Expertly tailored from premium Italian virgin wool, this structured blazer features a modern slim fit, notch lapels, and double back vents. Ideal for transitioning from boardroom meetings to evening events.",
    details: [
      "100% Italian Virgin Wool",
      "Slim-fit silhouette with structured shoulders",
      "Notch lapels and two-button front closure",
      "Fully lined with internal pockets",
      "Dry clean only. Made in Italy"
    ],
    reviews: [
      {
        id: "r8",
        author: "Marcus Aurelius",
        rating: 5,
        date: "May 10, 2026",
        comment: "Impeccable build quality. The fit is close but comfortable, and the lining feels premium. Classic Italian look."
      }
    ]
  },
  {
    id: "m2",
    name: "Single-Breasted Cashmere Overcoat",
    price: 450.00,
    rating: 4.8,
    category: "Men",
    images: [
      "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605273371027-e969c945c37e?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["M", "L", "XL", "XXL"],
    colors: [
      { name: "Camel", hex: "#B89060" },
      { name: "Black", hex: "#1A1A1A" },
      { name: "Heather Grey", hex: "#8A8F94" }
    ],
    description: "An elegant outer layer crafted from thick, luxurious cashmere blend wool. Features a clean, single-breasted front button placket and minimalist slip pockets.",
    details: [
      "75% Wool, 20% Cashmere, 5% Nylon",
      "Fully lined with premium satin fabric",
      "Single-breasted 3-button front",
      "Two internal security pockets",
      "Dry clean only"
    ],
    reviews: [
      {
        id: "r9",
        author: "David G.",
        rating: 5,
        date: "May 25, 2026",
        comment: "Substantial weight, incredible warmth, and extremely flattering draping. It's the ultimate winter coat."
      }
    ]
  },
  {
    id: "m3",
    name: "Classic Silk-Cotton Knit Polo",
    price: 110.00,
    rating: 4.7,
    category: "Men",
    images: [
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Sage Green", hex: "#7E8F7C" },
      { name: "Cream", hex: "#FFFDD0" },
      { name: "Navy", hex: "#1F2937" }
    ],
    description: "Elevating the casual polo, this style is knitted from a premium silk and long-staple Egyptian cotton blend. Features a ribbed collar, clean buttonless placket, and ribbed hem for a modern look.",
    details: [
      "55% Mulberry Silk, 45% Organic Cotton",
      "Ultra-fine gauge knit",
      "Minimalist buttonless collar placket",
      "Ribbed cuffs and hem",
      "Hand wash cold, dry flat"
    ],
    reviews: [
      {
        id: "r10",
        author: "Alexander W.",
        rating: 4.6,
        date: "June 01, 2026",
        comment: "Extremely breathable and has a subtle sheen because of the silk. Fits perfectly around the shoulders."
      }
    ]
  },
  {
    id: "m4",
    name: "Tailored Organic Cotton Oxford Shirt",
    price: 95.00,
    rating: 4.6,
    category: "Men",
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Sky Blue", hex: "#87CEEB" }
    ],
    description: "Constructed from thick organic cotton weave, this tailored Oxford shirt features a button-down collar and single chest pocket. A true closet cornerstone.",
    details: [
      "100% Certified Organic Cotton Oxford",
      "Comfortable button-down collar",
      "Chest patch pocket",
      "Curved hem for wearing tucked or untucked",
      "Machine wash warm"
    ],
    reviews: [
      {
        id: "r11",
        author: "Julian K.",
        rating: 4.5,
        date: "June 03, 2026",
        comment: "Excellent weight to the fabric. It has that crisp look that lasts all day long."
      }
    ]
  },
  {
    id: "m5",
    name: "Luxury Merino Wool Turtleneck",
    price: 155.00,
    rating: 4.8,
    category: "Men",
    images: [
      "https://images.unsplash.com/photo-1605273371027-e969c945c37e?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#1A1A1A" },
      { name: "Taupe", hex: "#B8A390" },
      { name: "Olive", hex: "#556B2F" }
    ],
    description: "Knitted from extra-fine Italian merino wool, this lightweight turtleneck sweater is designed to fit cleanly under jackets or stand alone as a minimalist statement.",
    details: [
      "100% Extra-Fine Italian Merino Wool",
      "Natural stretch and thermal regulation",
      "Double-layered foldover collar",
      "Ribbed collar, cuffs, and hem",
      "Dry clean or hand wash cold"
    ],
    reviews: [
      {
        id: "r12",
        author: "Thomas H.",
        rating: 5,
        date: "May 18, 2026",
        comment: "Very soft, doesn't scratch at all. Keeps its shape perfectly even after multiple dry cleans."
      }
    ]
  },
  {
    id: "m6",
    name: "Relaxed Linen Drawstring Pants",
    price: 125.00,
    rating: 4.5,
    category: "Men",
    images: [
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Natural Flax", hex: "#D8C7B2" },
      { name: "White", hex: "#FFFFFF" }
    ],
    description: "Crafted from pure Belgian flax linen, these relaxed pants feature a comfortable elastic waistband with an adjustable drawstring. The ultimate vacation essential.",
    details: [
      "100% Belgian Flax Linen",
      "Elastic waistband with matching cotton drawcord",
      "Straight-leg cut with loose fit",
      "Back patch pockets and side slant pockets",
      "Machine wash gentle"
    ],
    reviews: [
      {
        id: "r13",
        author: "Oliver F.",
        rating: 4.4,
        date: "May 30, 2026",
        comment: "Incredibly airy. Wore these all over Greece. Super comfortable and stylish."
      }
    ]
  },

  // --- SHOES CATEGORY (6 products) ---
  {
    id: "s1",
    name: "Luxury Calfskin Leather Stiletto",
    price: 295.00,
    rating: 4.8,
    category: "Shoes",
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["36", "37", "38", "39", "40", "41"],
    colors: [
      { name: "Black", hex: "#1C1C1C" },
      { name: "Nude Pink", hex: "#E8C3BA" },
      { name: "Ferrari Red", hex: "#C61818" }
    ],
    description: "Crafted from buttery soft calfskin leather in Florence, Italy. These stilettos feature a sleek, pointed-toe profile and a leather-covered 90mm heel. Fully lined with padded insoles for maximum comfort.",
    details: [
      "100% Premium Calfskin Leather",
      "Genuine leather outsole and cushioned lining",
      "90mm (3.5 inch) slim heel height",
      "Pointed-toe silhouette",
      "Includes premium branded dustbag. Made in Italy"
    ],
    reviews: [
      {
        id: "r14",
        author: "Audrey H.",
        rating: 5,
        date: "April 15, 2026",
        comment: "Exquisite craftsmanship. Usually stilettos hurt after an hour, but these are surprisingly padded and wearable."
      }
    ]
  },
  {
    id: "s2",
    name: "Handcrafted Leather Chelsea Boots",
    price: 320.00,
    rating: 4.9,
    category: "Shoes",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: [
      { name: "Chocolate Suede", hex: "#5C4033" },
      { name: "Nero Black", hex: "#1A1A1A" }
    ],
    description: "An elegant take on the heritage silhouette. Features a sleek, hand-burnished suede finish, elasticated side panels, and a pull tab. Constructed with Goodyear welt for lifetime durability.",
    details: [
      "Premium Italian Suede leather upper",
      "Goodyear-welted leather and rubber sole",
      "Elasticated side gussets with tonal pull tabs",
      "Stacked leather heel",
      "Handmade in Portugal"
    ],
    reviews: [
      {
        id: "r15",
        author: "Arthur P.",
        rating: 5,
        date: "May 22, 2026",
        comment: "The chocolate suede looks rich and matches everything. Incredibly comfortable once broken in. Superior boots."
      }
    ]
  },
  {
    id: "s3",
    name: "Minimalist Leather Court Sneakers",
    price: 165.00,
    rating: 4.7,
    category: "Shoes",
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
    colors: [
      { name: "All-White", hex: "#FFFFFF" },
      { name: "White & Black", hex: "#E5E5E5" }
    ],
    description: "Clean, classic, and understated. These minimal court sneakers are crafted from full-grain leather, featuring a stitched rubber cupsole and gold foil serial number stamp on the heel block.",
    details: [
      "Full-grain calfskin leather upper",
      "Reinforced margins with stitched rubber outsole",
      "Leather lining and removable Ortholite footbed",
      "Embossed logo and gold serial detail",
      "Handcrafted in Portugal"
    ],
    reviews: [
      {
        id: "r16",
        author: "Ethan R.",
        rating: 4.8,
        date: "June 04, 2026",
        comment: "The cleanest sneakers I've ever owned. Very easy to clean and they go perfectly with trousers or jeans."
      }
    ]
  },
  {
    id: "s4",
    name: "Hand-Burnished Italian Loafers",
    price: 275.00,
    rating: 4.8,
    category: "Shoes",
    images: [
      "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["40", "41", "42", "43", "44"],
    colors: [
      { name: "Cognac Brown", hex: "#9E5B26" },
      { name: "Nero Black", hex: "#1E1E1E" }
    ],
    description: "Sleek and classic, these slip-on loafers are constructed from hand-burnished calfskin leather. Featuring a traditional penny strap across the vamp and Blake-stitched leather soles.",
    details: [
      "Hand-painted Italian calfskin leather",
      "Blake-stitched construction",
      "Penny keeper detail across the vamp",
      "Stacked leather heel with rubber tap",
      "Made in Italy"
    ],
    reviews: [
      {
        id: "r17",
        author: "Dominic F.",
        rating: 4.9,
        date: "May 29, 2026",
        comment: "Stunning burnish and patina. These look like $600 shoes. Fits true to size, although a bit snug initially."
      }
    ]
  },
  {
    id: "s5",
    name: "Square-Toe Leather Ballet Flats",
    price: 145.00,
    rating: 4.6,
    category: "Shoes",
    images: [
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["36", "37", "38", "39", "40", "41"],
    colors: [
      { name: "Beige", hex: "#E5CCA9" },
      { name: "Black", hex: "#111111" }
    ],
    description: "A contemporary update to the classic flat. Designed with a structured square toe, supple leather footbeds, and a delicate elasticized throat for a snug, secure fit.",
    details: [
      "100% Nappa Leather upper",
      "Flexible leather and rubber outsole",
      "Square-toe profile",
      "Slip-on with comfortable elastic collar",
      "Made in Spain"
    ],
    reviews: [
      {
        id: "r18",
        author: "Charlotte M.",
        rating: 4.7,
        date: "May 10, 2026",
        comment: "Extremely chic. The square toe makes them look very modern compared to traditional round ones."
      }
    ]
  },
  {
    id: "s6",
    name: "Suede Platform Slide Sandals",
    price: 130.00,
    rating: 4.4,
    category: "Shoes",
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["36", "37", "38", "39", "40"],
    colors: [
      { name: "Tan", hex: "#C59B6D" },
      { name: "Olive Suede", hex: "#6E7A6E" }
    ],
    description: "Minimalist slide sandals constructed with premium suede criss-cross straps and a molded cork platform footbed. Lightweight and designed for modern leisure.",
    details: [
      "Calf suede criss-cross straps",
      "Contoured cork footbed wrapped in leather",
      "Lightweight EVA sole for traction",
      "Platform height: 35mm (1.4 inches)",
      "Made in Spain"
    ],
    reviews: [
      {
        id: "r19",
        author: "Emma W.",
        rating: 4.5,
        date: "June 09, 2026",
        comment: "Super comfortable slides for the pool or shopping. The cork molds nicely to your feet."
      }
    ]
  },

  // --- ACCESSORIES CATEGORY (6 products) ---
  {
    id: "a1",
    name: "Classic Chronograph Leather Watch",
    price: 245.00,
    rating: 4.9,
    category: "Accessories",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Tan Leather", hex: "#A0522D" },
      { name: "Black Leather", hex: "#1A1A1A" }
    ],
    description: "A minimal chronograph watch featuring a 40mm stainless steel case, sapphire crystal glass, and a premium Italian vegetable-tanned leather strap. Run by a precise Swiss quartz movement.",
    details: [
      "Swiss Quartz movement",
      "316L Stainless Steel 40mm case",
      "Scratch-resistant Sapphire Crystal face",
      "Water resistant up to 50 meters (5 ATM)",
      "Premium Italian leather strap with buckle closure"
    ],
    reviews: [
      {
        id: "r20",
        author: "Gregory P.",
        rating: 5,
        date: "May 14, 2026",
        comment: "This watch represents peak minimalism. The dial is clean and easy to read. Straps feel sturdy and develop beautiful patina."
      }
    ]
  },
  {
    id: "a2",
    name: "Premium Saffiano Leather Handbag",
    price: 295.00,
    rating: 4.8,
    category: "Accessories",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Onyx Black", hex: "#1A1A1A" },
      { name: "Burgundy", hex: "#800020" },
      { name: "Cream White", hex: "#FFFDD0" }
    ],
    description: "Our signature structured bag crafted from scratch-resistant Saffiano leather. Designed with a roomy central compartment, interior zip pockets, and dual rolled top handles. Includes a removable crossbody strap.",
    details: [
      "Genuine Saffiano Calfskin Leather",
      "Signature custom gold-tone hardware",
      "Internal linen lining with phone and zip pockets",
      "Protective metal feet at the base",
      "Dimensions: 11.5\" W x 9\" H x 5\" D"
    ],
    reviews: [
      {
        id: "r21",
        author: "Victoria B.",
        rating: 5,
        date: "May 27, 2026",
        comment: "Exquisite details. The Saffiano texture is extremely durable - I have been carrying it daily and it looks brand new."
      }
    ]
  },
  {
    id: "a3",
    name: "Acetate Cat-Eye Sunglasses",
    price: 85.00,
    rating: 4.6,
    category: "Accessories",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Tortoiseshell", hex: "#6E5B4F" },
      { name: "Glossy Black", hex: "#1A1A1A" }
    ],
    description: "A retro-inspired frame reimagined with sharp, modern lines. Crafted from custom biodegradable cellulose acetate with fully polarized lenses offering 100% UVA/UVB protection.",
    details: [
      "Cellulose acetate frame",
      "100% UVA/UVB polarized lenses",
      "Reinforced 5-barrel metal hinges",
      "Includes protective hard case and microfiber cloth",
      "Lens width: 51mm, Bridge: 18mm, Temple: 145mm"
    ],
    reviews: [
      {
        id: "r22",
        author: "Sophia L.",
        rating: 4.7,
        date: "June 07, 2026",
        comment: "Fits so well and doesn't slide down my nose. Tortoiseshell looks extremely high-end."
      }
    ]
  },
  {
    id: "a4",
    name: "Vogue L'Amour Eau De Parfum",
    price: 115.00,
    rating: 4.7,
    category: "Accessories",
    images: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["100ml"],
    colors: [
      { name: "Clear Glass", hex: "#FFFFFF" }
    ],
    description: "An evocative signature scent curated for the modern wardrobe. Blends high notes of white tuberose, fresh bergamot, and cedar wood, drying down to an earthy base of amber and Madagascar vanilla.",
    details: [
      "Top Notes: Bergamot, Neroli, Pear",
      "Heart Notes: Tuberose, Jasmine Sambac, Orange Blossom",
      "Base Notes: Amber, Patchouli, Madagascar Vanilla",
      "100ml / 3.4 fl. oz. Spray Bottle",
      "Bottled in Grasse, France"
    ],
    reviews: [
      {
        id: "r23",
        author: "Isabella R.",
        rating: 4.8,
        date: "May 31, 2026",
        comment: "This smells like absolute heaven. Warm, floral, and slightly spicy. I get complimented every time I wear it."
      }
    ]
  },
  {
    id: "a5",
    name: "Sleek Nappa Leather Crossbody Bag",
    price: 175.00,
    rating: 4.8,
    category: "Accessories",
    images: [
      "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Tan", hex: "#D2B48C" },
      { name: "Black", hex: "#1A1A1A" }
    ],
    description: "A compact crossbody bag made from exceptionally soft Nappa leather. Features clean lines, secure magnetic flap closure, and an adjustable shoulder strap.",
    details: [
      "100% Nappa Leather",
      "Magnetic flap closure with gold-finish accents",
      "Adjustable flat leather strap",
      "Three interior cards compartments",
      "Dimensions: 8\" W x 5.5\" H x 2\" D"
    ],
    reviews: [
      {
        id: "r24",
        author: "Chloe T.",
        rating: 4.8,
        date: "June 02, 2026",
        comment: "The leather is like butter. It fits my phone, cards, lipstick, and keys perfectly. Perfect evening bag."
      }
    ]
  },
  {
    id: "a6",
    name: "Minimalist Leather Cardholder",
    price: 55.00,
    rating: 4.5,
    category: "Accessories",
    images: [
      "https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=800&auto=format&fit=crop&q=80"
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Black Pebble", hex: "#222222" },
      { name: "Forest Green", hex: "#1C352D" }
    ],
    description: "Ditch the bulk with this slim cardholder. Crafted from pebbled full-grain leather, it features four card slots and a middle slip pocket for folded cash.",
    details: [
      "Full-grain pebbled calf leather",
      "Four card slots and one central slip pocket",
      "Hand-painted raw edges",
      "RFID blocking protection lining",
      "Dimensions: 4\" W x 3\" H"
    ],
    reviews: [
      {
        id: "r25",
        author: "Harry M.",
        rating: 4.6,
        date: "June 09, 2026",
        comment: "Holds my 4 essential cards and some cash. Slips into my front pocket with zero bulk. Excellent leather feel."
      }
    ]
  }
];
