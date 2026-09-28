/**
 * Copy and imagery for the Fashion industry page (/industries/fashion).
 *
 * Everything the page renders comes from here, so a copy change never
 * touches a component. Section order in the page mirrors this file.
 */

import heroImg from "../assets/industries/fashion/hero.webp";
import introImg from "../assets/industries/fashion/intro.webp";
import analyticsImg from "../assets/industries/fashion/analytics.webp";
import fittingImg from "../assets/industries/fashion/fitting.webp";
import supplyImg from "../assets/industries/fashion/supply.webp";
import ecommerceImg from "../assets/industries/fashion/ecommerce.webp";
import designImg from "../assets/industries/fashion/design.webp";
import retailImg from "../assets/industries/fashion/retail.webp";
import solutionsBgImg from "../assets/industries/fashion/solutions-bg.webp";
import ctaImg from "../assets/industries/fashion/cta.webp";
import midCtaBgImg from "../assets/industries/fashion/midcta-bg.webp";
import finalCtaBgImg from "../assets/industries/fashion/final-cta.webp";
import designersImg from "../assets/industries/fashion/designers.webp";
import brandsImg from "../assets/industries/fashion/brands.webp";
import executivesImg from "../assets/industries/fashion/executives.webp";
import blog1Img from "../assets/industries/fashion/blog-1.webp";
import blog2Img from "../assets/industries/fashion/blog-2.webp";
import blog3Img from "../assets/industries/fashion/blog-3.webp";

export const FASHION_SLUG = "fashion";

export const hero = {
  eyebrow: "AI for the fashion industry",
  titleLead: "AI & Data Solutions for Fashion Brands",
  titleAccent: "That Reduce Returns and Improve Margins",
  body:
    "Turn fragmented product, customer and supply-chain data into decisions your teams can act on. Axiomra helps fashion brands use AI, analytics and automation to improve size-and-fit accuracy, forecast demand, personalise shopping journeys and identify operational waste. Our Data & AI services are designed around the systems you already use, helping you improve conversion, reduce avoidable returns and make faster merchandising decisions.",
  ctaText: "Explore Your Fashion AI Use Case",
  image: heroImg,
  alt: "A rail of brightly coloured jackets hanging in a boutique window",
  reviews: { platform: "Clutch", rating: 5, count: 12 },
};

export const intro = {
  titleLead: "Build a Smarter Fashion Business With",
  titleAccent: "AI, Data & Traceability",
  paragraphs: [
    "Axiomra helps fashion brands, retailers and manufacturers connect sales, product, supplier and customer data so teams can forecast demand, spot quality issues earlier and improve traceability.",
    "We use AI and analytics to support faster planning, more transparent supply chains and better inventory decisions—without forcing your business into a one-size-fits-all platform. The goal is practical: less waste, clearer decisions and stronger margins across changing fashion cycles.",
  ],
  ctaText: "Discuss Your Data & AI Priorities",
  image: introImg,
  alt: "Rows of patterned shirts on wooden hangers in a clothing store",
};

export const impact = {
  titleLead: "AI's Measurable Impact On",
  titleAccent: "Global Fashion Outcomes",
  body:
    "AI and analytics are reshaping how brands design, forecast and sell by unifying product, customer, social and supply data into actionable intelligence. Teams move from intuition to measurable outcomes across trend discovery, assortment planning, dynamic pricing and omnichannel merchandising, all while keeping creative direction aligned.",
  stats: [
    {
      value: "82%",
      label: "of consumers want AI to reduce research time when shopping fashion, accelerating product discovery.",
      source: "McKinsey, The State of Fashion Survey 2025",
    },
    {
      value: "75%",
      label: "of fashion executives prioritise AI for demand forecasting, inventory optimisation and cost control in 2025.",
      source: "McKinsey, The State of Fashion Survey 2025",
    },
    {
      value: "50%",
      label: "of executives say AI-driven product discovery is the top gen-AI use case for 2025.",
      source: "McKinsey, The State of Fashion Report",
    },
  ],
};

/**
 * Each service row is "what it does" plus four capability pairs. The
 * component renders the arrow between `name` and `outcome`, so keep both
 * halves short and free of trailing punctuation.
 */
export const services = {
  eyebrow: "Where do we apply Data & AI in fashion?",
  titleLead: "Data & AI Services",
  titleAccent: "For Fashion Brands And Retailers",
  items: [
    {
      title: "Fashion Analytics That Turn Data Into Decisions",
      body:
        "Make sales, customer, product and store data easier to understand and act on. Axiomra builds AI and analytics solutions that help fashion teams identify demand shifts, compare store performance, understand customer behaviour and detect emerging trends earlier. Instead of static reports, decision-makers get focused insights that support merchandising, pricing, allocation and campaign planning.",
      image: analyticsImg,
      alt: "A store manager reviewing stock on a tablet beside a rail of garments",
      points: [
        { name: "Fashion Analytics", outcome: "Spot demand shifts and customer patterns sooner" },
        { name: "Business Intelligence", outcome: "Replace static reports with focused, decision-ready insight" },
        { name: "Trend Forecasting", outcome: "Detect emerging trends earlier with AI-powered forecasting" },
        { name: "Store-Performance Analytics", outcome: "Compare stores and act on the gaps" },
      ],
    },
    {
      title: "AI Size & Fit Intelligence for More Confident Purchases",
      body:
        "Sizing uncertainty drives abandoned carts and avoidable returns. Axiomra applies AI, computer vision and product data to help fashion businesses create smarter fit guidance and virtual try-on experiences. These solutions can support online and in-store journeys, giving shoppers clearer expectations before they buy while helping brands understand fit-related return patterns.",
      image: fittingImg,
      alt: "A shopper in sunglasses and a burgundy coat carrying several shopping bags",
      points: [
        { name: "Size Recommendation Intelligence", outcome: "Guide shoppers to the right size before they buy" },
        { name: "Virtual Try-On", outcome: "Give clearer expectations of look and fit" },
        { name: "Mobile Experiences", outcome: "Bring fit guidance to the channels shoppers use" },
        { name: "Fit-Confidence Analytics", outcome: "Understand the patterns behind fit-related returns" },
      ],
    },
    {
      title: "AI Supply Chain & Inventory Intelligence for Fashion",
      body:
        "Reduce overstock, stockouts and slow fulfilment by connecting inventory, supplier, sales and logistics data. Axiomra helps fashion businesses forecast demand, identify replenishment risks, monitor supplier performance and improve inventory visibility across locations. Our Data & AI services focus on the decisions that affect working capital and customer availability—not another disconnected system.",
      image: supplyImg,
      alt: "A garment factory stitching line with folded apparel stacked along the benches",
      points: [
        { name: "Demand Forecasting", outcome: "Plan buys and allocation against likely demand" },
        { name: "Inventory Optimisation", outcome: "Cut overstock and stockouts across locations" },
        { name: "Logistics Analytics", outcome: "Find the causes of slow fulfilment" },
        { name: "Supplier-Performance Insights", outcome: "Spot replenishment and supplier risks early" },
      ],
    },
    {
      title: "Personalisation & Customer Experience Intelligence",
      body:
        "Generic shopping journeys lose customers. Axiomra applies recommendation models, customer segmentation and behavioural analytics to your e-commerce and CRM data so each visit feels more relevant—working with the storefront your teams already run, not replacing it.",
      image: ecommerceImg,
      alt: "A flat lay of a knitted hat, jumper, jeans, a watch and tulips on white linen",
      points: [
        { name: "Personalised Journeys", outcome: "Replace generic experiences with relevant ones" },
        { name: "Recommendation Models", outcome: "Lift sales with smarter product suggestions" },
        { name: "Omnichannel Customer View", outcome: "Connect online and in-store behaviour" },
        { name: "Checkout Analytics", outcome: "Understand where and why carts are abandoned" },
      ],
    },
    {
      title: "Design & Product Development Intelligence",
      body:
        "Give design teams better signals, earlier. We use generative AI and analytics to organise inspiration, surface trend signals and automate repetitive product-data work, connecting insights to the 3D and product lifecycle tools your teams already use.",
      image: designImg,
      alt: "A flat lay of leopard-print shoes, a leather wallet, sunglasses and accessories",
      points: [
        { name: "Trend Signal Analysis", outcome: "Ground design choices in demand evidence" },
        { name: "Generative Concept Support", outcome: "Explore more concept directions, faster" },
        { name: "Product-Data Automation", outcome: "Cut manual work in specifications and product data" },
        { name: "Sustainability Insights", outcome: "Minimise waste with material and product data" },
      ],
    },
    {
      title: "In-Store Retail Analytics",
      body:
        "Understand what happens on the shop floor. Axiomra applies computer vision and analytics to footfall, layout and transaction data, helping retail teams improve store layouts, staffing and in-store personalisation, and connect offline behaviour with online data.",
      image: retailImg,
      alt: "A shopper smiling at a boutique counter while staff use a tablet point-of-sale",
      points: [
        { name: "Customer Heatmaps", outcome: "Fix poor layouts with foot-traffic insights" },
        { name: "Layout & Staffing Insights", outcome: "Match staff and space to real demand" },
        { name: "Try-On Behaviour Analytics", outcome: "Learn which items get tried but not bought" },
        { name: "Loyalty Analytics", outcome: "Retain shoppers with better-targeted rewards" },
      ],
    },
  ],
};

export const solutions = {
  eyebrow: "Where can AI make a difference in fashion?",
  titleLead: "Building AI-Powered Fashion",
  titleTail: "Solutions Using The Latest Technology",
  image: solutionsBgImg,
  tabs: [
    {
      id: "apparel",
      label: "Apparel & Retail Commerce",
      title: "AI for Apparel & Retail Commerce",
      body:
        "Help shoppers find the right product faster and help your teams understand what drives conversion. Axiomra can apply recommendation models, search intelligence, customer segmentation and size-and-fit analytics across your digital retail ecosystem. The focus is on improving product discovery and customer relevance using the data you already own.",
      bullets: [
        "Personalised product feeds",
        "Intelligent search",
        "Fit guidance",
        "Behavioural segmentation",
        "Loyalty analytics",
        "Restock propensity",
      ],
    },
    {
      id: "design",
      label: "Design & Product Development",
      title: "Generative AI for Fashion Design & Product Development",
      body:
        "Shorten early-stage research and concept development with AI-assisted design intelligence. Axiomra can help teams organise inspiration, analyse trend signals, generate concept directions and automate repetitive product-data tasks. When 3D or product lifecycle tools are already in use, our Data & AI layer can connect insights to existing workflows rather than replacing them.",
      bullets: [
        "Trend and mood-board intelligence",
        "Generative concept support",
        "Product-data extraction",
        "Automated specification workflows",
      ],
    },
    {
      id: "ecommerce",
      label: "Commerce Intelligence",
      title: "AI Commerce Intelligence for Fashion",
      body:
        "Improve conversion by making product discovery, pricing and personalisation more relevant. Axiomra uses customer, catalogue and transaction data to build recommendation, search and predictive analytics models that support better digital merchandising decisions. We can also help identify return-risk patterns and opportunities for smarter bundling or promotional targeting.",
      bullets: [
        "Visual and semantic search",
        "Recommendations",
        "Dynamic offer intelligence",
        "Customer propensity models",
        "Return-risk analytics",
      ],
    },
    {
      id: "closet",
      label: "Wardrobe & Recommendations",
      title: "AI Wardrobe & Recommendation Intelligence",
      body:
        "Create more useful customer experiences from wardrobe, preference and product data. Axiomra can apply computer vision and recommendation models to classify items, understand style preferences and generate context-aware outfit suggestions. For resale, rental or loyalty ecosystems, these insights can also support repeat engagement and smarter product discovery.",
      bullets: [
        "Image-based wardrobe classification",
        "Style profiles",
        "Outfit recommendations",
        "Circular-commerce insights",
      ],
    },
    {
      id: "styling",
      label: "Computer Vision & 3D Fit",
      title: "Computer Vision & 3D Fit Intelligence",
      body:
        "Use visual AI to give customers better fit information before checkout. Axiomra can support body-measurement analysis, garment-image understanding and fit-confidence models that complement AR or 3D experiences. The goal is to reduce uncertainty, learn from fit-related returns and provide clearer recommendations without overstating what automation can guarantee.",
      bullets: [
        "Visual measurement analysis",
        "Fit-confidence scoring",
        "Garment attribute extraction",
        "AR/3D data intelligence",
      ],
    },
  ],
};

export const technologies = {
  eyebrow: "Which technologies power our fashion work?",
  titleLead: "The AI Technologies Behind",
  titleTail: "Our Fashion Solutions",
  body:
    "We combine AI, data analytics and intelligent automation with the data you already hold, so fashion teams gain faster insight, less waste and more relevant customer experiences.",
  ctaText: "View all services",
  items: [
    {
      title: "Artificial Intelligence",
      body:
        "AI is reshaping fashion by supporting creativity, speeding up planning and personalising shopping journeys. From intelligent recommendations to AI-assisted design, it lets brands move faster.",
      metric: "3.2x",
      metricLabel: "faster decisions",
    },
    {
      title: "Data Analytics",
      body:
        "Data-driven insight uncovers customer preferences, forecasts demand and optimises operations. By translating data into strategy, businesses stay competitive in a fast-moving market.",
      metric: "28%",
      metricLabel: "less dead stock",
    },
    {
      title: "Generative AI",
      body:
        "Generative AI opens new possibilities in design and personalisation. It accelerates concept development, suggests new style directions and enriches customer experiences.",
      metric: "10x",
      metricLabel: "more design variants",
    },
    {
      title: "Machine Learning",
      body:
        "Machine learning turns raw data into usable insight. It improves fit guidance, predicts demand and sharpens product recommendations, helping brands reduce returns and increase loyalty.",
      metric: "31%",
      metricLabel: "fewer returns",
    },
    {
      title: "Computer Vision",
      body:
        "Computer vision powers visual analysis in fashion. From automated quality checks to trend detection and fit intelligence, it makes decisions more accurate and processes more efficient.",
      metric: "99%",
      metricLabel: "defect detection",
    },
  ],
};

export const techStrip = {
  eyebrow: "Our tech stack",
  titleLead: "Expertise In Advanced",
  titleAccent: "Data & AI Technologies",
  body:
    "The production-grade Data & AI toolchain behind our fashion analytics, models and data pipelines. Pick a layer to see what it is made of.",
  ctaText: "View all tech stack",
  tabs: [
    {
      id: "ai",
      label: "Artificial Intelligence",
      items: [
        "GPT-4o", "Claude", "Gemini", "Llama 3", "Mistral", "Phi-2", "Groq", "PaLM", "Pix2Pix", "StyleGAN",
        "Stable Diffusion", "Midjourney", "DeepDream", "Whisper", "MediaPipe", "Guardrails", "Vertex AI",
        "OpenAI Embeddings", "CLIP", "YOLO",
      ],
    },
    {
      id: "backend",
      label: "Backend & Databases",
      items: [
        "Node.js", "NestJS", "Express", "FastAPI", "Django", "GraphQL", "PostgreSQL", "MongoDB",
        "Redis", "Elasticsearch", "Qdrant", "Pinecone", "Kafka", "Airflow",
      ],
    },
    {
      id: "frontend",
      label: "Frontend",
      items: [
        "React", "Next.js", "Vue", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js",
        "Vite", "Radix UI",
      ],
    },
    {
      id: "cloud",
      label: "Cloud",
      items: ["AWS", "Google Cloud", "Azure", "Vercel", "Cloudflare", "Firebase", "Supabase", "DigitalOcean"],
    },
    {
      id: "devops",
      label: "DevOps",
      items: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "GitLab CI", "Nginx", "Prometheus", "Grafana", "Sentry"],
    },
    {
      id: "sqa",
      label: "SQA",
      items: ["Playwright", "Cypress", "Vitest", "Jest", "Pytest", "Postman", "k6", "Burp Suite"],
    },
    {
      id: "design",
      label: "UI / UX",
      items: ["Figma", "CLO 3D", "Design Tokens", "Prototyping", "WCAG 2.2 Audits", "Usability Testing"],
    },
  ],
};

export const streamline = {
  eyebrow: "What AI can optimise for you?",
  titleLead: "Where AI Can Create",
  titleAccent: "Measurable Value in Fashion",
  items: [
    {
      title: "Improve Conversion",
      body: "Use customer and product data to make discovery and recommendations more relevant.",
    },
    {
      title: "Support Circular Commerce",
      body: "Identify resale, rental and lifecycle opportunities from product and customer data.",
    },
    {
      title: "Scale With Consistency",
      body: "Use centralised data and analytics to compare markets while protecting brand standards.",
    },
    {
      title: "Make Better Decisions",
      body: "Turn merchandising and operational data into timely insights.",
    },
    {
      title: "Improve Campaign Relevance",
      body: "Connect audience signals with content and campaign performance.",
    },
    {
      title: "Connect Channels",
      body: "Create a consistent data view across store, web, social and marketplace activity.",
    },
  ],
};

export const midCta = {
  title: "Turn Your Fashion Data Into Better Decisions",
  body:
    "Whether your challenge is returns, demand planning, customer personalisation or supply-chain visibility, Axiomra can help identify the highest-value AI and data opportunities first. Start with the business problem, validate the available data and build a practical roadmap before scaling.",
  ctaText: "Discuss Your Fashion AI Opportunity",
  image: ctaImg,
  alt: "A model in a flowing red dress turning in a garden",
  background: midCtaBgImg,
};

export const stakeholders = {
  eyebrow: "Who benefits",
  titleLead: "Built Around Every",
  titleAccent: "Stakeholder In Fashion",
  items: [
    {
      title: "Fashion Designers & Manufacturers",
      body: "Earlier trend signals, fewer sampling rounds and production data that reaches the studio before the line is cut.",
      image: designersImg,
      alt: "Sage-green t-shirts on wooden hangers in a manufacturing studio",
    },
    {
      title: "Fashion Brands & Retailers",
      body: "Personalised shopping journeys, accurate forecasts and stock that lands where it will actually sell.",
      image: brandsImg,
      alt: "A bright fashion storefront with window displays and a bicycle parked outside",
    },
    {
      title: "Executives & Decision-Makers",
      body: "One view of product, customer and supply data, with the numbers that matter reported every week.",
      image: executivesImg,
      alt: "A team in a meeting room reviewing a board of colourful sticky notes",
    },
  ],
};

export const businessTypes = {
  eyebrow: "Who do we work with?",
  titleLead: "Explore The Range Of",
  titleAccent: "Fashion Businesses We Support",
  body:
    "We help fashion businesses at every stage apply AI and analytics to the problems that matter most, whether you are validating a first use case or scaling data capabilities across markets.",
  rows: [
    {
      label: "Startups",
      body: "We help fashion startups test AI ideas early, from assessing the data you have to proving a first use case, such as recommendations or demand forecasting, before you invest further.",
    },
    {
      label: "Scale-ups",
      body: "As your fashion business grows, new opportunities and challenges arise. We help scale-ups use data and AI to boost efficiency, simplify planning and improve market positioning.",
    },
    {
      label: "Small and medium-sized businesses",
      body: "Medium-sized fashion businesses often run on fragmented systems and spreadsheets. We connect that data and apply analytics and AI to improve efficiency and competitiveness, working with the systems you already use.",
    },
    {
      label: "Enterprises",
      body: "We partner with enterprises to deploy AI models and data pipelines for forecasting, personalisation and supply-chain visibility, improving efficiency and performance at scale.",
    },
  ],
};

export const testimonials = {
  eyebrow: "What do our clients say about us?",
  titleLead: "What Our Clients Say About Our",
  titleAccent: "AI Consulting Company",
  items: [
    {
      name: "Abdullah",
      role: "CEO, Navex",
      quote:
        "Commendable work by the team. They collaborated and communicated in a highly professional manner and delivered exactly what was asked in the desired time frame. Their project management and communication skills are highly appreciable.",
      rating: 5,
    },
    {
      name: "Charles Glah",
      role: "Owner, FrontOffice",
      quote:
        "Abdul Hannan and his team have been a trusted development partner for several months with their fully developed team and focus on AI. They helped us move forward and achieve our goal.",
      rating: 5,
    },
    {
      name: "Jawad Bhati",
      role: "CEO, Voltox",
      quote:
        "Great work was done within the required time frame and communication was really good as well. I had to follow up on questions after the project was done. These were satisfactory and in a timely manner. Highly recommend them.",
      rating: 5,
    },
  ],
};

export const showcase = {
  eyebrow: "What innovations have we delivered to businesses?",
  titleLead: "Showcasing Our",
  titleAccent: "AI & Data Projects",
  body:
    "Selected AI and data projects we have delivered for our clients.",
  ctaText: "Check Out Our Full Portfolio",
};

export const partner = {
  eyebrow: "Why choose us for your next big project?",
  titleLead: "Working With Us Is An",
  titleAccent: "Investment In Your Future",
  cards: [
    {
      icon: "Layers",
      title: "Integration Experts",
      body:
        "We connect AI models and data pipelines to the third-party systems, APIs and databases you already run, so insights reach your teams without a platform migration.",
    },
    {
      icon: "Target",
      title: "Dedicated To E-commerce",
      body:
        "We focus on the data behind e-commerce and retail: catalogue, customer, transaction and supply signals. That focus lets us advise honestly on where AI will pay back for your fashion business and where it will not.",
    },
    {
      icon: "ShieldCheck",
      title: "Direct Communication",
      body:
        "We keep interactions clear and processes efficient. A dedicated project manager keeps you updated and collaboration direct, from discovery through to deployment.",
    },
  ],
  stats: [
    { value: "200+", label: "Projects Delivered" },
    { value: "5+", label: "Valuable Partnerships" },
    { value: "20+", label: "Countries Served" },
    { value: "25+", label: "Tech Experts" },
  ],
};

export const blogs = {
  eyebrow: "What can our expertise teach you?",
  title: "Our Blogs",
  body:
    "Using current AI models, we build efficient, reliable business systems that open new ground in innovation, automation and personalisation.",
  posts: [
    {
      title: "How To Grow Your Fashion Business In 2026",
      tag: "Strategy",
      image: blog1Img,
      alt: "A woman browsing a rail of clothes in a boutique",
    },
    {
      title: "Fashion App Development: A Complete Guide To Building AI-Powered Apps",
      tag: "Guide",
      image: blog2Img,
      alt: "A person in a white shirt tapping on a smartphone",
    },
    {
      title: "How AI In Fashion Retail Is Transforming The Shopping Experience",
      tag: "Retail",
      image: blog3Img,
      alt: "A shop assistant showing a customer a tablet at the counter",
    },
  ],
};

export const faqs = [
  {
    q: "What does Axiomra do for fashion businesses?",
    a: "We apply AI, analytics and automation to fashion's hardest problems: size recommendation, virtual try-on, demand forecasting, trend detection and personalised merchandising. We build the models and the data pipelines that keep them accurate as your catalogue changes, working with the systems you already use.",
  },
  {
    q: "How long does a fashion AI project take?",
    a: "A scoped pilot with one AI capability, such as a recommendation model or size-and-fit guidance, typically takes eight to twelve weeks. A broader programme covering forecasting, personalisation and analytics runs four to nine months, delivered in weekly increments you can use from the first sprint.",
  },
  {
    q: "Can you add AI to my existing fashion systems?",
    a: "Yes, and that is most of our fashion work. We work with your existing storefront, PIM, ERP and data stack rather than asking you to migrate. Where an API does not exist we add a thin data-integration layer so the legacy system is never touched directly.",
  },
  {
    q: "Why choose Axiomra as your fashion Data & AI partner?",
    a: "Because we are judged on your metric. Returns rate, sell-through, conversion or margin: we agree the number before we start and report against it every week. Model accuracy is our problem, not your KPI.",
  },
  {
    q: "How much does a fashion AI project cost?",
    a: "It depends on the use case, the AI capabilities and the state of your product data. A scoped pilot is the fastest route to a real number. Book a free session and we will size it honestly, including what we would not recommend.",
  },
  {
    q: "Do you handle sustainability and supply-chain traceability?",
    a: "Yes. We connect material, supplier and product data to improve traceability from source to shelf, helping teams spot greenwashing risk and keep the records that regulators and conscious customers increasingly ask for.",
  },
];

export const finalCta = {
  title: "Put Your Fashion Data To Work With A Trusted AI Partner",
  subtitle: "Start with one business problem and a practical plan to solve it.",
  buttonText: "Start Your Fashion AI Project",
  background: finalCtaBgImg,
};
