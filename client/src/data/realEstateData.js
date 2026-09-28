/**
 * Copy and imagery for the Real Estate industry page (/industries/real-estate).
 *
 * Everything the page renders comes from here, so a copy change never touches
 * a component. Section order in the page mirrors this file.
 */

import heroImg from "../assets/industries/real-estate/hero.webp";
import introImg from "../assets/industries/real-estate/intro.webp";

import solOperationsImg from "../assets/industries/real-estate/sol-operations.webp";
import solSalesImg from "../assets/industries/real-estate/sol-sales.webp";
import solTransactionsImg from "../assets/industries/real-estate/sol-transactions.webp";
import solCollaborationImg from "../assets/industries/real-estate/sol-collaboration.webp";
import solSearchImg from "../assets/industries/real-estate/sol-search.webp";
import solComplianceImg from "../assets/industries/real-estate/sol-compliance.webp";
import solRiskImg from "../assets/industries/real-estate/sol-risk.webp";

import appsBgImg from "../assets/industries/real-estate/apps-bg.webp";
import midCtaBgImg from "../assets/industries/real-estate/midcta-bg.webp";

import stkManagementImg from "../assets/industries/real-estate/stk-management.webp";
import stkAgentsImg from "../assets/industries/real-estate/stk-agents.webp";
import stkDecisionImg from "../assets/industries/real-estate/stk-decision.webp";

import textureBgImg from "../assets/industries/real-estate/texture-bg.webp";
import buildVisualImg from "../assets/industries/real-estate/build-visual.webp";

import blog1Img from "../assets/industries/real-estate/blog-1.webp";
import blog2Img from "../assets/industries/real-estate/blog-2.webp";
import blog3Img from "../assets/industries/real-estate/blog-3.webp";
import finalCtaBgImg from "../assets/industries/real-estate/final-cta.webp";

export const REAL_ESTATE_SLUG = "real-estate";

export const hero = {
  eyebrow: "AI for the real estate industry",
  titleLead: "AI & Data Solutions for",
  titleAccent: "Faster, Smarter Real Estate",
  titleTail: "Decisions",
  body:
    "Axiomra helps real estate businesses use data and AI to improve valuation, prioritise leads, understand portfolio performance and reduce manual work across transactions. We connect market, CRM, property and operational data to create insights your teams can use every day—working with the systems they already use, not replacing them.",
  ctaText: "Discuss Your Real Estate AI Opportunity",
  image: heroImg,
  alt: "Blue glass towers rising above a city street, seen from below",
  reviews: { platform: "Clutch", rating: 5, count: 12 },
};

export const intro = {
  titleLead: "Use AI to Improve",
  titleAccent: "Valuation, Leads and Portfolio Visibility",
  paragraphs: [
    "Axiomra helps agencies, property developers and property managers make better use of market, listing, CRM and operational data. We can support valuation analytics, lead prioritisation, document intelligence, market-trend modelling and portfolio reporting—integrated with the tools your teams already use.",
    "We select technical methods only when they fit the business problem and the data available, and we validate performance against your own history before any model is used more widely.",
  ],
  ctaText: "Explore a Real Estate Data & AI Pilot",
  image: introImg,
  alt: "A city skyline at dusk with construction cranes over new towers",
};

export const impact = {
  titleLead: "How AI Is Reshaping",
  titleAccent: "Real Estate Operations Today",
  body:
    "AI has moved from a pitch-deck slide to the thing that decides which agency wins the listing. Valuation, lead qualification, tenant screening and market forecasting all run faster and closer to the truth when the data behind them is unified and the models are tuned on real transactions.",
  stats: [
    {
      value: "68%",
      label: "of realtors report using AI tools in their day-to-day work in 2025.",
      source: "NAR 2025 Technology Survey, via HousingWire",
    },
    {
      value: "$301.6B",
      label: "global market size for AI in real estate in 2025, and still compounding.",
      source: "The Business Research Company, 2025",
    },
    {
      value: "2.1M sqm",
      label: "of U.S. real estate footprint occupied by AI companies as of May 2025.",
      source: "JLL Research, 2025",
    },
  ],
};

/**
 * The core capability rail. Each group pairs the operational problem a real
 * estate business actually reports with the data or AI capability that
 * addresses it, working inside the systems the business already runs.
 */
export const solutions = {
  eyebrow: "Where can data and AI help your real estate business?",
  titleLead: "End-To-End Data & AI Support",
  titleAccent: "Across Your Real Estate Operations",
  body:
    "Seven areas cover the operating surface of a property business, from the analytics your leadership reads to the signals your on-site teams act on. Each one starts from a problem you can name and ends in insight or automation built into the tools your team already uses.",
  items: [
    {
      title: "Real Estate Operations and Analytics",
      body:
        "Portfolio data stops living in exports. We bring listings, tenancies, maintenance and financials into one data model, then put the analysis on top of it: occupancy, yield, arrears and market movement in a view leadership trusts enough to make decisions from.",
      image: solOperationsImg,
      alt: "A laptop showing property performance charts on a desk",
      pains: [
        { problem: "Manual data tracking", solution: "Automated Property Data Pipelines" },
        { problem: "No insight you can act on", solution: "Data Analytics & BI Dashboards" },
        { problem: "Unpredictable market performance", solution: "Predictive Analytics Models" },
        { problem: "Difficulty managing portfolios", solution: "Portfolio Performance Reporting" },
        { problem: "Market trend uncertainty", solution: "AI Market-Trend Modelling" },
      ],
    },
    {
      title: "Client and Sales Intelligence",
      body:
        "A lead that waits four hours is usually a lead someone else closed. We score enquiries on intent using the data already in your CRM, suggest the right agent and flag follow-ups before they go cold.",
      image: solSalesImg,
      alt: "An agent walking a couple through property options at a table",
      pains: [
        { problem: "Inefficient lead tracking", solution: "AI Lead Scoring & Prioritisation" },
        { problem: "Poor client engagement", solution: "CRM Data Analytics" },
        { problem: "Limited marketing reach", solution: "Marketing Channel Analytics" },
        { problem: "Difficulty showcasing properties", solution: "Listing Performance Analytics" },
        { problem: "High client churn", solution: "Client Retention Modelling" },
      ],
    },
    {
      title: "Transaction and Financial Intelligence",
      body:
        "Deals stall in the paperwork, not the negotiation. We use document intelligence to extract contract and due-diligence data, track milestones from the systems you already run and automate the financial reporting behind them.",
      image: solTransactionsImg,
      alt: "A model house, keys and a signed contract on a desk",
      pains: [
        { problem: "Lengthy, error-prone transactions", solution: "Document Intelligence & Extraction" },
        { problem: "Financial reporting inaccuracies", solution: "Automated Financial Reporting" },
        { problem: "Complex mortgage and cost maths", solution: "Cost & Affordability Modelling" },
        { problem: "Investment analysis challenges", solution: "Investment Analytics" },
        { problem: "Risk assessment gaps", solution: "AI Risk Assessment Models" },
      ],
    },
    {
      title: "Shared Data for Deal Teams",
      body:
        "Agents, site teams, contractors and legal all touch the same deal from different places. We connect the data each of them holds, summarise documents and updates with AI, and surface the next action inside the channels your teams already use.",
      image: solCollaborationImg,
      alt: "Two hard-hatted colleagues reviewing plans on a tablet on site",
      pains: [
        { problem: "Poor team communication", solution: "AI Deal & Document Summaries" },
        { problem: "Collaborative projects hard to manage", solution: "Project Status Analytics" },
        { problem: "Limited access on the go", solution: "Insights In Your Existing Tools" },
        { problem: "Remote coordination challenges", solution: "Shared Property Data Layer" },
      ],
    },
    {
      title: "Property Search and Valuation Intelligence",
      body:
        "Buyers give up on a search that makes them work. We add intent-aware ranking and recommendations to the listings you already publish, and price each property against live comparables instead of last quarter's.",
      image: solSearchImg,
      alt: "An agent holding a SOLD sign outside a property",
      pains: [
        { problem: "Time-consuming property search", solution: "AI Search Relevance & Ranking" },
        { problem: "Difficulty filtering properties", solution: "Semantic Property Matching" },
        { problem: "Mismatched buyers and listings", solution: "Buyer Preference Analytics" },
        { problem: "Uncertain property valuations", solution: "AI Valuation & Recommendation Models" },
      ],
    },
    {
      title: "Regulatory and Compliance Monitoring",
      body:
        "Rules change faster than a manual checklist survives. We use AI to track the obligations and dates that apply to each property and jurisdiction, and alert the responsible person before a deadline becomes a penalty.",
      image: solComplianceImg,
      alt: "An architect's desk with blueprints, ruler and drawing tools",
      pains: [
        { problem: "Changing regulations and compliance cost", solution: "AI Regulatory Change Monitoring" },
        { problem: "Manual permit tracking", solution: "Automated Permit & Deadline Alerts" },
      ],
    },
    {
      title: "Tenant and Property Risk Analytics",
      body:
        "Arrears and emergency repairs are both predictable if you read the signals early. We score tenant risk on payment history and verified affordability, and forecast maintenance from asset age, sensor data and work-order history before the failure happens.",
      image: solRiskImg,
      alt: "An apartment facade with rows of balconies",
      pains: [
        { problem: "Non-payment or evictions", solution: "AI Tenant Risk Scoring" },
        { problem: "Maintenance emergencies", solution: "Predictive Maintenance Models & Alerts" },
      ],
    },
  ],
};

export const apps = {
  eyebrow: "Where do we apply data and AI in real estate?",
  titleLead: "Data & AI Use Cases",
  titleAccent: "Across Your Real Estate Systems",
  body:
    "Five areas where property businesses most often ask us to add data and AI. Each works with the CRM, portals, accounting and identity systems you already run, rather than replacing them.",
  background: appsBgImg,
  alt: "A team reviewing a property strategy at a whiteboard session",
  items: [
    "CRM analytics and lead scoring",
    "Listing and property data intelligence",
    "Lease data extraction and renewal forecasting",
    "Construction cost and schedule analytics",
    "Property image and floor-plan analysis",
  ],
};

export const technologies = {
  eyebrow: "Which technologies do we use for real estate data and AI?",
  titleLead: "Modern Technologies For",
  titleAccent: "Dependable Real Estate Insight",
  body:
    "Four capabilities carry most of the value in property data and AI. We choose between them on evidence: the simplest model that clears your accuracy bar wins.",
  ctaText: "View all services",
  items: [
    {
      title: "Artificial Intelligence",
      body:
        "Valuation, lead scoring, tenant screening and document understanding run alongside the tools your teams already use, with confidence scores exposed so an agent knows when to trust the number and when to check it.",
    },
    {
      title: "Data Analytics",
      body:
        "Listings, tenancies, transactions and market feeds land in one warehouse with a defined model, so occupancy, yield and pipeline mean the same thing in every report your leadership reads.",
    },
    {
      title: "Generative AI",
      body:
        "Listing copy, brochure text, contract drafts and buyer follow-ups generated from your own property data and tone, with a review step before anything reaches a client.",
    },
    {
      title: "Machine Learning",
      body:
        "Price forecasting, days-on-market prediction, churn and maintenance failure models trained on your transaction history and retrained on a schedule as the market moves.",
    },
  ],
};

export const midCta = {
  title: "Find Your Highest-Value Real Estate AI Use Case",
  body:
    "Bring us the part of the portfolio that costs you the most time (valuation, lead follow-up, transactions, maintenance) and we will map the fastest route to a validated pilot, the data it needs and what it should return.",
  ctaText: "Get In Touch Now!",
  background: midCtaBgImg,
};

export const benefits = {
  eyebrow: "Benefits of data and AI in real estate",
  titleLead: "Discover How AI Can",
  titleAccent: "Simplify Your Real Estate Operations",
  items: [
    {
      title: "Better Property Valuation",
      body:
        "Models read live comparables, condition, location signals and market movement together, so a valuation holds up in a negotiation instead of being argued down from a stale comp.",
    },
    {
      title: "Enhanced Customer Experience",
      body:
        "Buyers see results that match what they are actually looking for and get faster, more relevant answers from your team, which is usually the difference between an enquiry and a viewing.",
    },
    {
      title: "Improved Decision Making",
      body:
        "One dashboard carries occupancy, yield, arrears, pipeline and market trend on the same definitions, so investment and disposal calls are made on evidence rather than on whichever spreadsheet is newest.",
    },
    {
      title: "Efficient Lead Generation",
      body:
        "Enquiries are scored on intent and routed to the right agent quickly, follow-ups are flagged before they go cold, and marketing spend moves toward the channels that produced completions rather than clicks.",
    },
    {
      title: "Automated Property Management",
      body:
        "Rent, renewals, inspections, work orders and compliance dates are tracked automatically with exceptions surfaced to a person, so a manager can handle more doors without more hours.",
    },
    {
      title: "Insightful Market Analysis",
      body:
        "Price movement, absorption rate and supply pipeline are tracked per micro-market, so you know which streets are turning before the quarterly report says so.",
    },
  ],
};

export const stakeholders = {
  eyebrow: "Who this serves",
  titleLead: "Every Role",
  titleAccent: "In Real Estate",
  items: [
    {
      title: "Property Management Teams",
      body:
        "Tenancy, rent, inspection, work-order and compliance data brought together, with routine follow-ups flagged automatically, so managers spend their day on exceptions rather than on reminders.",
      image: stkManagementImg,
      alt: "A property management team working together at a table",
    },
    {
      title: "Real Estate Agents",
      body:
        "Scored leads, fast valuation estimates, draft listing copy and a pipeline view that is current at the viewing, not after it. The admin that eats a selling day is handled before the day starts.",
      image: stkAgentsImg,
      alt: "A real estate agent in a blue suit outside a property",
    },
    {
      title: "Management and Decision-Makers",
      body:
        "Portfolio performance, market exposure and forecast cash on one set of definitions, with scenario analysis to test an acquisition or disposal before it goes to the board.",
      image: stkDecisionImg,
      alt: "A leadership team reviewing portfolio figures around a laptop",
    },
  ],
};

export const build = {
  title: "Working With Us Is An Investment In Your Future",
  body:
    "We bring deep experience across AI, data and property workflows, deliver in increments your teams use from the first sprint, and keep communication direct: one team, your timezone overlap, no account layer between you and the specialists doing the work.",
  ctaText: "Request a free consultation",
  texture: textureBgImg,
  image: buildVisualImg,
  alt: "A modern house facade lit from within at dusk",
  points: [
    {
      title: "Scale With Large Inventory",
      body:
        "Our data pipelines and models are designed to handle tens of thousands of units without reporting or analysis slowing down as the portfolio grows.",
    },
    {
      title: "Efficiency",
      body:
        "Every engagement targets a number you already track (days on market, cost per lead, arrears rate) and is measured against it after go-live on the same definition.",
    },
    {
      title: "Smooth Communication",
      body:
        "A named team, working sessions in your hours and demo-able progress every sprint, so you are never waiting on a status report to know where the project stands.",
    },
  ],
};

export const techStrip = {
  eyebrow: "Data & AI technologies",
  titleLead: "Expertise In Advanced",
  titleAccent: "Data & AI Technologies",
  body:
    "The toolchain behind our real estate data and AI work. Pick a layer to see what it is made of.",
  ctaText: "View all tech stack",
  tabs: [
    {
      id: "ai",
      label: "Artificial Intelligence",
      items: [
        "GPT-4o", "Claude", "Gemini", "Llama 3", "Mistral", "PyTorch", "TensorFlow", "scikit-learn",
        "XGBoost", "LightGBM", "Prophet", "SHAP", "YOLO", "Segment Anything", "Tesseract OCR",
        "LangChain", "LlamaIndex", "Pinecone", "Vertex AI", "MLflow",
      ],
    },
    {
      id: "backend",
      label: "Data Engineering & Databases",
      items: [
        "Node.js", "NestJS", "FastAPI", "Django", "GraphQL", "PostgreSQL", "PostGIS", "MongoDB",
        "Redis", "Elasticsearch", "Kafka", "Airflow", "dbt", "Snowflake", "BigQuery",
      ],
    },
    {
      id: "frontend",
      label: "Dashboards & Visualisation",
      items: [
        "Mapbox GL", "Deck.gl", "D3.js", "Three.js", "React Three Fiber", "React", "Next.js",
        "TypeScript", "Tailwind CSS", "Vite",
      ],
    },
    {
      id: "cloud",
      label: "Cloud",
      items: ["AWS", "Google Cloud", "Azure", "Cloudflare", "Vercel", "Private cloud", "Hybrid"],
    },
    {
      id: "devops",
      label: "MLOps & DevOps",
      items: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "GitLab CI", "Nginx", "Prometheus", "Grafana", "Sentry"],
    },
    {
      id: "proptech",
      label: "PropTech Data Sources",
      items: ["MLS / RESO Web API", "Zillow", "Rightmove", "Yardi", "MRI", "DocuSign", "Stripe", "Plaid", "Matterport", "Twilio"],
    },
    {
      id: "sqa",
      label: "Testing & Validation",
      items: ["Playwright", "Cypress", "Vitest", "Jest", "pytest", "k6", "Lighthouse CI", "Axe"],
    },
    {
      id: "uiux",
      label: "Dashboard UX",
      items: ["Figma", "Design tokens", "WCAG 2.2 AA", "Storybook", "Maze", "Hotjar"],
    },
  ],
};

export const businessTypes = {
  eyebrow: "Who benefits from our expertise?",
  titleLead: "Explore The Range Of",
  titleAccent: "Real Estate Businesses We Can Work With",
  body:
    "We help property businesses turn their data into measurable results, whether you are validating a first AI use case or running a multi-country portfolio on legacy systems.",
  rows: [
    {
      label: "Startups",
      body: "We help proptech founders get a first AI capability working fast: a valuation or lead-scoring model on real data, the MLS and portal data feeds behind it, and the metrics that prove it before the next raise.",
    },
    {
      label: "Scale-ups",
      body: "Growth exposes every manual step. We automate valuation, lead prioritisation and transaction admin with data and AI, and unify reporting across branches so it holds at ten times the deal volume.",
    },
    {
      label: "Small and medium-sized businesses",
      body: "Independent agencies and regional managers carry enterprise complexity on a fraction of the headcount. Our analytics, lead scoring and document intelligence close that gap without an enterprise budget or a year-long rollout.",
    },
    {
      label: "Enterprises",
      body: "We partner with national agencies, property developers and REITs on governed data layers, portfolio-wide analytics and AI that is reviewed against your security, compliance and procurement requirements before it reaches production.",
    },
  ],
};

export const testimonials = {
  eyebrow: "Why is it worth working with us?",
  titleLead: "Why Property Teams",
  titleAccent: "Keep Coming Back",
  items: [
    {
      name: "Abdullah",
      role: "CEO, Navex",
      quote:
        "They understood the property side of the problem before writing a line of code. The valuation model went live tuned on our own transactions, and our agents stopped arguing with it in the first month.",
      rating: 5,
    },
    {
      name: "Charles Glah",
      role: "Owner, FrontOffice",
      quote:
        "Communication was the difference. Working demos every sprint, direct access to the engineers, and no surprises at the end. The platform does what we scoped and it shipped on the date we agreed.",
      rating: 5,
    },
    {
      name: "Jawad Bhati",
      role: "CEO, Voltox",
      quote:
        "We came with a portfolio spread across four systems and left with one. Reporting that used to take a week of exports is now a page our board reads on a Monday morning.",
      rating: 5,
    },
  ],
};

export const showcase = {
  eyebrow: "What innovations have we delivered to businesses?",
  titleLead: "Showcasing Our",
  titleAccent: "Data & AI Projects",
  body:
    "Explore the portfolio behind our real estate work: data and AI projects that help agencies, property developers and investors value, market and manage property at scale.",
  ctaText: "Check Out Our Full Portfolio",
};

export const partner = {
  eyebrow: "Why is it worth working with us?",
  titleLead: "Why Axiomra As Your",
  titleAccent: "Real Estate Data & AI Partner",
  cards: [
    {
      icon: "Target",
      title: "Your Data, Your Models, No Lock-In",
      body:
        "You own the data, the pipelines and the models. They run where your policies require and work with the portals and accounting you already use, so nothing holds your portfolio hostage to a licence.",
    },
    {
      icon: "Layers",
      title: "Integration That Fits",
      body:
        "MLS and RESO feeds, Yardi and MRI, DocuSign, CRM and accounting data connect through APIs into a consistent property data model, which removes the re-keying behind most listing and ledger errors.",
    },
    {
      icon: "ShieldCheck",
      title: "60-Day Support And Enablement",
      body:
        "We stay engaged for 60 days after go-live to monitor model performance, resolve issues and tune on live data, with role-based training for agents, managers and leadership so adoption does not stall after week one.",
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
    "Practical writing on where AI actually earns its place in a property business: agentic chatbots, automated CMA, investor reporting and the governance that keeps all three defensible.",
  posts: [
    {
      title: "A Complete Guide To Agentic AI Chatbot Development For Real Estate",
      tag: "Agentic AI",
      image: blog1Img,
      alt: "A robotic hand reaching toward a human hand",
    },
    {
      title: "How AI Automates CMA For Real Estate Agents",
      tag: "Valuation",
      image: blog2Img,
      alt: "A calculator resting on printed financial documents",
    },
    {
      title: "How Effective Is AI Investor Reporting? All You Need To Know",
      tag: "Reporting",
      image: blog3Img,
      alt: "Printed line and bar charts spread across a desk",
    },
  ],
};

export const faqs = [
  {
    q: "Why do I need AI in my real estate business?",
    a: "Because the work that decides your margin is judgement work done at volume: pricing a property, deciding which enquiry to call first, screening a tenant, spotting a maintenance failure early. AI does that consistently at a scale a team cannot, and it shows its reasoning so an agent can override it. Without it you are competing against agencies whose valuation lands the same day yours needs a week.",
  },
  {
    q: "What does a real estate Data & AI engagement involve?",
    a: "It starts with one business problem, such as valuation, lead prioritisation or document handling, and the data behind it. We connect the relevant market, listing, CRM and operational data, build and validate a model or analysis against your own history, then feed the results into the tools your teams already use. You keep your existing systems, and you own the data and the models.",
  },
  {
    q: "What technologies do you use for real estate data and AI?",
    a: "Python, SQL and dbt for data preparation, PostgreSQL with PostGIS for spatial analysis, Elasticsearch for search relevance, and Mapbox or Deck.gl for map-based reporting. On the modelling side, gradient-boosted models for valuation and lead scoring, time-series models for market forecasting, computer vision for condition and floor-plan work, and LLMs for document extraction and listing copy, each chosen only when it fits the problem and the data.",
  },
  {
    q: "How accurate are AI property valuations?",
    a: "On a portfolio with clean transaction history, we typically land within single-digit percentage error on median-priced stock, and wider on unusual or thinly traded properties. That is why every valuation comes with a confidence band and the comparables behind it. The model is a fast first opinion for an agent, not a replacement for one.",
  },
  {
    q: "Can you work with our MLS, portals and accounting systems?",
    a: "Yes. We connect to MLS and RESO Web API feeds, Rightmove and Zillow-style portals, Yardi and MRI, DocuSign and your accounting data through APIs, mapped into a consistent property data model. Each data connection is tested and reconciled in a parallel environment before it goes live, so your listings and reporting keep running throughout.",
  },
  {
    q: "How long does a real estate AI pilot take?",
    a: "A scoped pilot around one use case (valuation analytics, lead prioritisation or document intelligence) typically runs eight to twelve weeks to live results. A wider rollout across listings, CRM, transactions and portfolio reporting runs four to nine months, delivered in increments your team uses from the first sprint rather than at the end.",
  },
  {
    q: "What does it cost, and how do you price it?",
    a: "We price by scope and team shape after a discovery session, not by a headline rate. You get a written estimate with the assumptions visible, and where scope is genuinely uncertain we phase it so you can stop or re-sequence between increments without stranding what is already delivered.",
  },
  {
    q: "Who owns the data and the models you train?",
    a: "You do: the data, the pipelines and any model trained on your transactions. Deployment runs where your policies require, including private cloud or on-premise, and we do not train shared models on your portfolio.",
  },
  {
    q: "Why choose Axiomra as your real estate Data & AI partner?",
    a: "Because we work for operators rather than demos. Our teams work inside your actual constraints (MLS rules, jurisdiction-specific regulation, legacy ledgers, the way your agents really work), validate every model against your own history before launch, and stay engaged for 60 days afterward to tune it and train the people who use it daily.",
  },
];

export const finalCta = {
  title: "Create Your Success Story With Our Expertise",
  subtitle:
    "Tell us about your portfolio, your data and the part of the process that costs you the most. We will come back with a scope, a timeline and a clear view of what the work should return.",
  buttonText: "Get your project done!",
  background: finalCtaBgImg,
};
