import { client } from "@/sanity/lib/client";
import { PRODUCTS_QUERY } from "@/sanity/Queries";

// // Async function to fetch products
// export async function getProducts() {
//   try {
//     const products = await client.fetch(
//       PRODUCTS_QUERY,
//       {},
//       {
//         cache: "no-cache",
//         next: {
//           tags: ["products", "post"],
//         },
//       }
//     );
//     return products;
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return [];
//   }
// }

// // Function to generate navbarMenu with dynamic products submenu
// export async function getNavbarMenu() {
//   const products = await getProducts();

//   const productsSubMenu = products.map(product => ({
//     menuTitle: product.title,
//     menuRef: `/products/${product.slug.current}`
//   }));

//   return [
//     {
//       menu: "products",
//       ref: "/products",
//       subMenu: productsSubMenu
//     },
//     {
//       menu: "markets",
//       ref: "/markets",
//     },
//     {
//       menu: "blog",
//       ref: "/blog",
//     },
//     {
//       menu: "our company",
//       ref: "",
//       subMenu: [
//         { menuTitle: "Our History", menuRef: "/our-history" },
//         {
//           menuTitle: "Our Associations & Certifications",
//           menuRef: "/our-associations&certifications",
//         },
//         {
//           menuTitle: "Our International Ties",
//           menuRef: "/our-international_ties",
//         },
//         {
//           menuTitle: "Leadership & Team",
//           menuRef: "/leadership&team",
//         },
//         {
//           menuTitle: "Our Manufacturing Setup",
//           menuRef: "/our-manufacturing-setup",
//         },
//       ],
//     },
//   ];
// }


export const navbarMenu = [
  {
    menu: "products",
    ref: "/products",
  },
  {
    menu: "markets",
    ref: "/markets",
  },
  {
    menu: "blog",
    ref: "/blog",
  },
  {
    menu: "our company",
    ref: "",
    subMenu: [
      { menuTitle: "Our History ", menuRef: "/our-history" },
      {
        menuTitle: "Our Associations & Certifications",
        menuRef: "/our-associations&certifications",
      },
      {
        menuTitle: "Our International Ties",
        menuRef: "/our-international-ties",
      },
      {
        menuTitle: "Leadership & Team",
        menuRef: "/leadership&team",
      },
      {
        menuTitle: "Our Manufacturing Setup",
        menuRef: "/our-manufacturing-setup",
      },
    ],
  },
];

export const footerMenuLinks = [
  {
    menu: "our company",
    subMenu: [
      { menuTitle: "Our History ", menuRef: "/our-history " },
      {
        menuTitle: "Our Associations& Certifications ",
        menuRef: "/our-associations&certifications",
      },
      {
        menuTitle: "Our International Ties",
        menuRef: "/our-international-ties",
      },
    ],
  },
  {
    menu: "our company",
    subMenu: [
      { menuTitle: "Our Team", menuRef: "/leadership&team" },
      {
        menuTitle: "Our Manufacturing Setup",
        menuRef: "/our-manufacturing-setup",
      },
    ],
  },
  {
    menu: "Quick Links",
    subMenu: [
      {
        menuTitle: "products",
        menuRef: "/products",
      },
      {
        menuTitle: "markets",
        menuRef: "/markets",
      },
      {
        menuTitle: "blog",
        menuRef: "/blog",
      },
      {
        menuTitle: "home",
        menuRef: "/",
      },
    ],
  },
];

export const productSpecimen = [
  { title: "BARITE", src: "/product/barite.svg" },
  { title: "HEMATITE", src: "/product/hematite.png" },
  { title: "GRAPHITE", src: "/product/graphite.png" },
  { title: "KAOLIN", src: "/product/Talc.svg" },
];

export const strength = [
  {
    title: "MINING",
    src: "/mining.svg",
    bgColor: "#3A3A3A",
    styles: "row-span-2",
  },
  {
    title: "PROCESSING",
    src: "/processing.svg",
    bgColor: "#635F5F",
    styles: "col-span-2 md:col-span-1",
  },
  {
    title: "QUALITY SERVICE",
    src: "/quality.svg",
    bgColor: "#8B8989",
    styles: "col-span-2 md:col-span-1",
  },
  {
    title: "WAREHOUSING",
    src: "/warehouse.svg",
    bgColor: "#3A3A3A",
    styles: "row-span-2",
  },
  {
    title: "CUSTOMIZATION",
    src: "/custom.svg",
    bgColor: "#635F5F",
    styles: "col-span-2 md:col-span-1",
  },
  {
    title: "LOGISTICS",
    src: "/logistic.svg",
    bgColor: "#8B8989",
    styles: "col-span-2 md:col-span-1",
  },
];

export const testimonial = [
  {
    reviewer: "- unilever",
    review:
      "Very much satisfied with the service. Delivered on time and responded to request for modifications within few hours.",
  },
  {
    reviewer: "- colgate",
    review:
      "I’m very happy with the results! They went above and beyond for me and that is always appreciated! I would highly recommend SH to anybody!",
  },
  {
    reviewer: "- unilever",
    review:
      "Very much satisfied with the service. Delivered on time and responded to request for modifications within few hours.",
  },
];

export const marqueeEffect = [
  { altTxt: "logo 1", src: "/logo-1.webp" },
  { altTxt: "logo 2", src: "/logo-2.webp" },
  { altTxt: "logo 3", src: "/logo-3.webp" },
  { altTxt: "logo 4", src: "/logo-4.png" },
  { altTxt: "logo 5", src: "/logo-5.png" },
  { altTxt: "logo 6", src: "/logo-6.png" },
];

export const history = {
  note: "Founded in 1956 - 68 years of Credibility",
  para: ` Join us as we continue to write new chapters in our illustrious history.`,
  lists: [
    {
      title:
        "A Legacy of Excellence: Three Generations of Family Entrepreneurship",
      desc: "Welcome to our journey through time. We are proud to share the story of our family-run business, now in its third generation, that has evolved into a significant name in the mining and mineral industry of South India.",
    },
    {
      title: "Roots in Ore Sourcing",
      desc: "Ashok Minerals' journey began with a strong focus on sourcing high-quality iron and manganese ores. In the early days, we built trusted partnerships with Japanese trading houses, establishing a solid foundation for future growth. Our expertise in sourcing and supplying essential minerals marked the first chapter of our legacy, driving us toward industry leadership and long-term success.",
    },
    {
      title: "Pioneering Calcium Carbonate Mining",
      desc: "Driven by an entrepreneurial spirit, we seized new opportunities by acquiring and operating Calcium Carbonate mines in the Salem District, Tamil Nadu, India. This strategic expansion diversified our portfolio and reinforced our position in the global mineral industry, enabling us to deliver high-quality mineral solutions with greater efficiency and reliability.",
    },
    {
      title: "Leading in Barite Exports",
      desc: "Our reputation grew as a leading exporter of Barite, especially to the Middle East, including Saudi Arabia. Our South Indian mines became known for quality and reliability, establishing us as a trusted name in the global mineral export market.",
    },
    {
      title: "Expansion and Diversification",
      desc: "Over the years, our areas of activity have continuously expanded. We ventured beyond our initial focus, embracing the mining and processing of a diverse range of minerals. This growth transformed us into what we are today - an INR 500 million company with a rich heritage and an even richer promise for the future.",
    },
    {
      title:
        "Our Present Focus: Sourcing & Processing of Diverse Industrial Minerals",
      desc: "We lead the way in sourcing and processing high-quality industrial and specialty minerals, delivering reliable and innovative mineral solutions worldwide. With deep market expertise and a commitment to excellence, we uphold our founding values while integrating cutting-edge technologies and sustainable practices. Our mission is to provide superior minerals with unmatched quality and consistency, ensuring long-term success for industries that rely on premium mineral resources.",
    },
  ],
};

export const manufacturing = {
  note: "Our Manufacturing Excellence",
  para: "Explore our world of manufacturing excellence, where quality meets innovation, and every particle tells a story of perfection and precision.",
  lists: [
    {
      title:
        "Primary Manufacturing Unit & Warehouse: The Heart of Our Operations",
      desc: "Located in the vibrant industrial hub of Gummidipoondi, Chennai, South India, our primary manufacturing unit and warehouse stand as a testament to our commitment to quality and efficiency. This strategic location not only situates us in the midst of a dynamic industrial environment but also ensures seamless accessibility to both our local and international clients.",
    },
    {
      title: "State-of-the-Art Pulverisers: Precision in Every Particle",
      desc: "At the core of our manufacturing process are our three state-of-the-art pulverisers. These sophisticated machines are capable of generating micronised powder up to 30 microns, ensuring unparalleled precision and quality in every product we produce. This advanced technology underscores our dedication to meeting the diverse needs of our clients with unmatched accuracy.",
    },
    {
      title: "Advanced In-House Laboratory: Upholding Quality Standards",
      desc: "Quality is not just a promise, but a practice at our manufacturing unit. Our state-of-the-art laboratory is dedicated to the rigorous testing of all incoming and finished goods. This ensures that every product that leaves our facility meets the highest standards of quality and reliability.",
    },
    {
      title: "Future-Ready Expansion Plans **",
      desc: "Looking towards the future, we are well-equipped and ready to expand our manufacturing capabilities. This foresight positions us to not only meet the growing demands of our clients but also to embrace new opportunities and challenges in the ever-evolving market.",
    },
    {
      title: "Strategic Location: Accessibility and Connectivity",
      desc: "Our primary manufacturing unit's location is a strategic asset. Situated just a few kilometers from the Port of Chennai and nestled within one of the biggest industrial estates of South India, our facility is in the company of renowned entities such as Michelin Tyres. This prime location ensures optimal accessibility and connectivity, enhancing our ability to serve both our domestic and international clientele efficiently.",
    },
    {
      title: "Pan-India Network: Extensive Collaboration and Quality Assurance",
      desc: "Beyond our primary manufacturing unit, we have established numerous tie-ups with units across India. This extensive network allows us to closely monitor production and maintain the highest quality standards across all our products. It's through these collaborations that we ensure consistency and excellence in every offering.",
    },
    {
      title: "Access to Premium Mines and Minerals",
      desc: "Our competitive edge is further sharpened by our access to some of the best mines and minerals in India. This rich resource base enables us to source high-quality raw materials, ensuring that the end product meets our stringent standards for quality and performance.",
    },
  ],
};

export const association = [
  {
    abbr: "Indian Small Scale Paint Association ",
    imgSrc: "/ISSPA-logo.png",
    altTxt: "ISSPA",
  },
  {
    abbr: "Indian Paint Association ",
    imgSrc: "/ipa-logo.png",
    altTxt: "IPA",
  },
  {
    abbr: "Federation of Indian Export Organisations",
    imgSrc: "/FIEO Logo.png",
    altTxt: "FIEO",
  },
  {
    abbr: "Andhra Chamber of Commerce and Industry of India",
    imgSrc: "/acc-logo.png",
    altTxt: "ACC",
  },
  {
    abbr: "All India Rubber Industries Association",
    imgSrc: "/AIRIA_logo.png",
    altTxt: "AIRIA",
  },
];

export const certifications = [
  {
    abbr: "International Organization for Standardization (ISO)",
    imgSrc: "/iso_logo.png",
    altTxt: "ISO",
  },
  {
    abbr: "Authorised Economic Operator (AEO) ",
    imgSrc: "/aeo_logo.png",
    altTxt: "AEO",
  },
];

export const importCountries = {
  mainTitle: "Imports",
  para1:
    "To meet the growing demands of the Indian market, we import high-quality minerals from top mines around the world. Our import network includes:",
  para2:
    "This extensive network ensures we can provide our customers with the best materials available globally.",
  logos: [
    { logo: "/flag/thailand.png" },
    { logo: "/flag/vietnam.png" },
    { logo: "/flag/malaysia.png" },
    { logo: "/flag/eqypt.png" },
    { logo: "/flag/turkey.png" },
    { logo: "/flag/oman.png" },
  ],
};

export const exportCountries = {
  mainTitle: "Exports",
  para1:
    "Ashok Mineral Enterprises exports to several countries, ensuring our products reach a global market. Our export destinations include:",
  para2:
    "We have achieved self-sealing status, which allows us to perform container stuffing at our own factory. This capability enables us to bypass the Container Freight Station (CFS), saving valuable time and effort for our clients, ensuring faster delivery and greater efficiency in our operations.",
  logos: [
    { logo: "/flag/uae.png" },
    { logo: "/flag/saudiarabia.png" },
    { logo: "/flag/turkey.png" },
    { logo: "/flag/bangladesh.jpeg" },
  ],
};

// all products

export const allProducts = [
  {
    productName: "Barite",
    shortNote:
      "Barite is virtually the exclusive commercial source of barium. It is used in drilling mud and white paint manufacturing.",
    cardImg: "/product/barite.svg",
    imgSrc: "/product/barite-bg.jpg",
    desc: "Barite is virtually the exclusive commercial source of barium. It is used in drilling mud and white paint manufacturing.",
    market: ["Oil Drilling", "Paint & Coating", "Chemical"],
  },
  {
    productName: "Silica and Quartz",
    shortNote:
      "Silica is the primary glass-forming oxide used in glass, foundry molds, and construction materials.",
    cardImg: "/product/silica.svg",
    imgSrc: "/product/silica-bg.jpg",
    desc: "Silica is the primary glass-forming oxide used in glass, foundry molds, and construction materials.",
    market: ["Glass Manufacturing", "Foundry", "Construction"],
  },
  {
    productName: "Hematite",
    shortNote:
      "Red Iron Oxide (Hematite) is used in steel production, pigments, and construction materials.",
    cardImg: "/product/hematite.png",
    imgSrc: "/product/hematite-bg.jpg",
    desc: "Red Iron Oxide (Hematite) is used in steel production, pigments, and construction materials.",
    market: ["Steel Production", "Ink & Pigments", "Construction"],
  },
  {
    productName: "Talc",
    shortNote:
      "Talc is used in paints, cosmetics, and pharmaceuticals as a filler, absorbent, and lubricant.",
    cardImg: "/product/Talc.svg",
    imgSrc: "/product/talc-bg.jpg",
    desc: "Talc is used in paints, cosmetics, and pharmaceuticals as a filler, absorbent, and lubricant.",
    market: ["Paint & Coating", "Cosmetics", "Pharmaceuticals"],
  },
  {
    productName: "Feldspar",
    shortNote:
      "Feldspar is widely used in ceramics, glassmaking, and as a flux in construction applications.",
    cardImg: "/product/feldspar.svg",
    imgSrc: "/product/feldspar-bg.jpg",
    desc: "Feldspar is widely used in ceramics, glassmaking, and as a flux in construction applications.",
    market: ["Ceramics", "Glass Manufacturing", "Construction"],
  },
  {
    productName: "MIO (Micaceous Iron Oxide)",
    shortNote:
      "Micaceous Iron Oxide (MIO) provides corrosion resistance in marine paints, steel coatings, and construction materials.",
    cardImg: "/product/mica.svg",
    imgSrc: "/product/mio-bg.jpg",
    desc: "Micaceous Iron Oxide (MIO) provides corrosion resistance in marine paints, steel coatings, and construction materials.",
    market: ["Marine Paints", "Steel Coatings", "Construction"],
  },
  {
    productName: "Kaolin",
    shortNote:
      "Kaolin, also known as China clay, is used in ceramics, paper, and cosmetics due to its fine particle size and white color.",
    cardImg: "/product/Kaolinn.svg",
    imgSrc: "/product/kalin-bg.jpg",
    desc: "Kaolin, also known as China clay, is used in ceramics, paper, and cosmetics due to its fine particle size and white color.",
    market: ["Ceramics", "Paper", "Cosmetics"],
  },
  {
    productName: "Graphite",
    shortNote:
      "Graphite is used in batteries, refractories, and electronics due to its high conductivity and heat resistance.",
    cardImg: "/product/graphite.png",
    imgSrc: "/product/graphite-bg.jpg",
    desc: "Graphite is used in batteries, refractories, and electronics due to its high conductivity and heat resistance.",
    market: ["Batteries", "Refractories", "Electronics"],
  },
  {
    productName: "Dolomite",
    shortNote:
      "Dolomite is used in construction, glass manufacturing, and agriculture as a soil conditioner and flux material.",
    cardImg: "/product/Dolomite.svg",
    imgSrc: "/product/dolomine-bg.jpg",
    desc: "Dolomite is used in construction, glass manufacturing, and agriculture as a soil conditioner and flux material.",
    market: ["Construction", "Glass Manufacturing", "Agriculture"],
  },
  {
    productName: "Calcium Carbonate",
    shortNote:
      "Calcium Carbonate is widely used in paints, plastics, and paper industries as a filler and coating material.",
    cardImg: "/product/calcium.svg",
    imgSrc: "/product/calcium-bg.jpg",
    desc: "Calcium Carbonate is widely used in paints, plastics, and paper industries as a filler and coating material.",
    market: ["Paint & Coating", "Plastic & Polymer", "Paper"],
  },
  {
    productName: "Zeolite",
    shortNote:
      "Zeolite is used in water filtration, detergents, and agriculture due to its high ion-exchange capacity.",
    cardImg: "/product/zeolite.svg",
    imgSrc: "/product/zeolite-bg.jpg",
    desc: "Zeolite is used in water filtration, detergents, and agriculture due to its high ion-exchange capacity.",
    market: ["Filtration", "Soap & Detergent", "Agriculture"],
  },
  {
    productName: "HSCAS",
    shortNote:
      "HSCAS is an absorbent used in animal feed, pharmaceuticals, and agriculture to prevent toxin exposure.",
    cardImg: "/product/hscas.svg",
    imgSrc: "/product/hscas-bg.jpg",
    desc: "HSCAS is an absorbent used in animal feed, pharmaceuticals, and agriculture to prevent toxin exposure.",
    market: ["Animal Feed", "Pharmaceuticals", "Agriculture"],
  },
];
export const markets = [
  { "id": 1, "name": "Paint & Coating" },
  { "id": 2, "name": "Ink & Pigments" },
  { "id": 3, "name": "Plastic & Polymer" },
  { "id": 4, "name": "Rubber, Tyre & Flame Retardants" },
  { "id": 5, "name": "Friction & Automotive" },
  { "id": 6, "name": "Welding Electrodes" },
  { "id": 7, "name": "Paper" },
  { "id": 8, "name": "Foundry" },
  { "id": 9, "name": "Refractories" },
  { "id": 10, "name": "Ceramics" },
  { "id": 11, "name": "Animal Feed" },
  { "id": 12, "name": "Soap & Detergent" },
  { "id": 13, "name": "Pharmaceuticals" },
  { "id": 14, "name": "Cosmetics" },
  { "id": 15, "name": "Agro Chemicals" },
  { "id": 16, "name": "Construction" },
  { "id": 17, "name": "Oil Drilling" },
  { "id": 18, "name": "Wire & Cables" },
  { "id": 19, "name": "Filtration" },
  { "id": 20, "name": "Adhesive & Sealants" },
  { "id": 21, "name": "Leather" }
];
