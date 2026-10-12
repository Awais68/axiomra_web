/**
 * Copy and structured content for the Business Intelligence service page.
 *
 * Company figures come from companyStats, never typed here. Anything marked
 * `TODO: client review` is new factual copy (process, pricing, timelines) that
 * the client has not signed off yet.
 */
import { companyStats } from "./companyStats.js";
import { SERVICES_BASE_PATH, BUSINESS_INTELLIGENCE_SLUG } from "../routes.constants";

export { BUSINESS_INTELLIGENCE_SLUG };
export const BI_PATH = `${SERVICES_BASE_PATH}/${BUSINESS_INTELLIGENCE_SLUG}`;

export const hero = {
  eyebrow: "Business Intelligence Services",
  title: "Turn Raw Data Into Decisions You Can Defend",
  body:
    "We pull your scattered data into one place, clean it, model it, and ship dashboards " +
    "that tell your team what to do next. Working, not demoed.",
  ctaText: "Get a Free BI Consultation",
  secondaryCtaText: "See How It Works",
  // Built from the shared figures so the hero can never disagree with Home.
  proof: [
    `${companyStats.projects}+ projects`,
    `${companyStats.experts}+ engineers`,
    `${companyStats.countries}+ countries`,
  ],
};

/** Illustrative KPI chips the prism resolves into. Sample UI, not client results. */
export const sampleKpis = [
  { label: "Revenue", value: "+18%", tone: "teal" },
  { label: "Churn", value: "↓ 4.2%", tone: "blue" },
  { label: "Forecast accuracy", value: "92%", tone: "violet" },
];

/** Platforms we deliver on. Plain wordmarks, so no brand-asset licensing. */
export const trustStrip = {
  label: "Delivered on the platforms your team already uses",
  names: [
    "Power BI",
    "Tableau",
    "Looker",
    "Snowflake",
    "Databricks",
    "BigQuery",
    "AWS",
    "Azure",
    "GCP",
  ],
};

export const whyBi = {
  eyebrow: "AI-first BI partner",
  titleLead: "Dashboards Are Easy.",
  titleAccent: "Trusted Numbers Are Not.",
  // TODO: client review
  body:
    "Most BI projects fail before the first chart: definitions disagree, pipelines break " +
    "quietly, and nobody trusts the totals. We start with the data foundation, agree every " +
    "metric with the people who own it, then layer forecasting and AI on top, so the " +
    "dashboard your board opens on Monday matches the number finance closed on Friday.",
  stats: [
    { value: `${companyStats.projects}+`, label: "Projects delivered" },
    { value: `${companyStats.experts}+`, label: "In-house engineers" },
    { value: `${companyStats.countries}+`, label: "Countries served" },
    { value: `${companyStats.partnerships}+`, label: "Partnerships" },
  ],
};

/**
 * The eleven services on the orbital ring. Cloud BI is folded into BI
 * Implementation, which keeps the ring at an odd count that still reads evenly.
 * `icon` is a lucide-react name resolved in BiServiceRing.
 */
// TODO: client review (all service descriptions and bullets)
export const services = {
  eyebrow: "Business intelligence services",
  titleLead: "Eleven Ways We Turn Data",
  titleAccent: "Into Decisions",
  subtitle:
    "Pick a single service or the full stack. Every engagement is scoped around the decisions " +
    "you need to make, not the tools we prefer.",
  items: [
    {
      id: "consulting",
      icon: "TbCompass",
      title: "BI Consulting",
      body:
        "An honest read of where your reporting stands and a roadmap to where it should be, " +
        "prioritised by business value rather than technical neatness.",
      bullets: [
        "Current-state audit of reports, tools and data owners",
        "KPI framework agreed with each department",
        "Platform recommendation with cost and skills trade-offs",
        "Phased roadmap with quick wins in the first month",
      ],
    },
    {
      id: "enterprise",
      icon: "TbBuilding",
      title: "Enterprise BI",
      body:
        "Governed, organisation-wide reporting with one semantic layer, role-based access and " +
        "performance that holds up at thousands of users.",
      bullets: [
        "Central semantic model and certified datasets",
        "Row-level security mapped to your org chart",
        "Usage monitoring and capacity planning",
        "Report catalogue so teams stop rebuilding the same chart",
      ],
    },
    {
      id: "warehousing",
      icon: "TbDatabase",
      title: "Data Warehousing & ETL",
      body:
        "A modern warehouse or lakehouse fed by tested, documented pipelines, so every report " +
        "reads from one version of the truth.",
      bullets: [
        "Dimensional and lakehouse modelling",
        "ELT pipelines with dbt tests and lineage",
        "Incremental loads and change data capture",
        "Cost-aware compute and storage design",
      ],
    },
    {
      id: "support",
      icon: "TbLifebuoy",
      title: "BI Support & Maintenance",
      body:
        "Ongoing care for dashboards, models and pipelines: failures caught before your users " +
        "notice them, and small changes shipped without a new project.",
      bullets: [
        "Pipeline monitoring and failure alerts",
        "Refresh, capacity and performance tuning",
        "Backlog of report changes handled monthly",
        "Platform upgrades and licence reviews",
      ],
    },
    {
      id: "analytics",
      icon: "TbChartBar",
      title: "Data Analytics",
      body:
        "Analysts who answer the question behind the request: cohort, funnel and margin analysis " +
        "that ends in a recommendation, not a spreadsheet.",
      bullets: [
        "Ad-hoc and recurring deep-dive analysis",
        "Cohort, funnel and retention studies",
        "Pricing and margin analysis",
        "Findings written up for decision makers",
      ],
    },
    {
      id: "implementation",
      icon: "TbRocket",
      title: "BI Implementation",
      body:
        "End-to-end rollout of Power BI, Tableau, Looker or an open-source stack, on-premise or " +
        "cloud BI on AWS, Azure or GCP.",
      bullets: [
        "Platform setup, workspaces and governance",
        "Cloud BI deployment on AWS, Azure or GCP",
        "Source connections and gateway configuration",
        "Launch dashboards built with your users",
      ],
    },
    {
      id: "migration",
      icon: "TbArrowsExchange",
      title: "BI Migration & Modernization",
      body:
        "Move from legacy reporting, spreadsheets or an ageing BI tool to a modern stack without " +
        "losing the reports people rely on.",
      bullets: [
        "Inventory of reports, owners and usage",
        "Like-for-like rebuilds with reconciliation",
        "Side-by-side running before cut-over",
        "Retirement plan for the old platform",
      ],
    },
    {
      id: "predictive",
      icon: "TbTrendingUp",
      title: "Predictive Analytics",
      body:
        "Forecasting and machine learning built into the dashboards your team already opens: " +
        "demand, churn, cash flow and risk, with accuracy tracked over time.",
      bullets: [
        "Demand and revenue forecasting",
        "Churn and propensity scoring",
        "Anomaly detection on key metrics",
        "Model accuracy reported alongside the forecast",
      ],
    },
    {
      id: "extraction",
      icon: "TbFileSearch",
      title: "Data Extraction",
      body:
        "OCR and document parsing that pulls structured data out of PDFs, invoices, forms, emails " +
        "and EHR exports, then loads it straight into your warehouse.",
      bullets: [
        "Invoices, receipts and purchase orders",
        "Scanned forms and contracts",
        "Email and attachment parsing",
        "EHR exports with access controls in place",
      ],
    },
    {
      id: "scraping",
      icon: "TbWorld",
      title: "Web Scraping",
      body:
        "Scheduled collection of public web data, such as prices, listings and reviews, cleaned " +
        "and joined to your internal numbers. We respect site terms and robots rules and collect " +
        "public data only.",
      bullets: [
        "Competitor pricing and catalogue tracking",
        "Listings, reviews and market signals",
        "Scheduled runs with change detection",
        "Public data only, within each site's terms",
      ],
    },
    {
      id: "self-service",
      icon: "TbPointer",
      title: "Self-Service BI",
      body:
        "Curated datasets and training so business users build their own reports safely, " +
        "without waiting in the data team's queue.",
      bullets: [
        "Certified, documented self-service datasets",
        "Templates for common questions",
        "Hands-on training by role",
        "Guardrails that keep numbers consistent",
      ],
    },
  ],
};

/** "From chaos to clarity": the four stages of the pipeline section. */
export const pipeline = {
  eyebrow: "How data becomes a decision",
  titleLead: "From Chaos",
  titleAccent: "To Clarity",
  subtitle:
    "Every BI engagement follows the same path. What changes is how much of it you already have.",
  stages: [
    {
      id: "sources",
      icon: "TbLayersIntersect",
      title: "Sources",
      line: "CRM, ERP, spreadsheets and APIs, connected where they live.",
      chips: ["CRM", "ERP", "Sheets", "APIs"],
    },
    {
      id: "warehouse",
      icon: "TbDatabase",
      title: "Warehouse",
      line: "Everything lands in one governed store, refreshed on a schedule you set.",
      chips: ["Snowflake", "BigQuery", "Lakehouse"],
    },
    {
      id: "model",
      icon: "TbFilterCog",
      title: "Model & Clean",
      line: "Duplicates removed, definitions agreed, tests on every metric.",
      chips: ["dbt", "Tests", "Semantic layer"],
    },
    {
      id: "dashboard",
      icon: "TbLayoutDashboard",
      title: "Dashboard",
      line: "Decision-ready views for every role, with forecasts built in.",
      chips: ["KPIs", "Forecasts", "Alerts"],
    },
  ],
};

/** Hand-drawn sample dashboard. Every number here is illustrative. */
export const dashboard = {
  eyebrow: "What you get",
  titleLead: "A Dashboard Your Team",
  titleAccent: "Actually Opens",
  subtitle:
    "Built in code for this page, the same way we build them for clients: clear hierarchy, " +
    "one question per chart, and the forecast sitting next to the actuals.",
  kpis: [
    { label: "Monthly revenue", value: "$1.42M", delta: "+12.4%", up: true },
    { label: "Gross margin", value: "38.6%", delta: "+2.1 pts", up: true },
    { label: "Churned accounts", value: "41", delta: "-18%", up: true },
  ],
  // 12 months, actual then forecast.
  revenue: [82, 88, 85, 94, 101, 98, 108, 115, 112, 121, 128, 134],
  forecastFrom: 9,
  regions: [
    { label: "North", value: 86 },
    { label: "South", value: 64 },
    { label: "East", value: 72 },
    { label: "West", value: 93 },
    { label: "Online", value: 78 },
  ],
  channels: [
    { label: "Direct", value: 46 },
    { label: "Partner", value: 31 },
    { label: "Marketplace", value: 23 },
  ],
};

/**
 * A real, client-approved BI case study, or null. BiCaseStudy renders nothing
 * while this is null. No signed-off BI case study exists yet.
 */
// TODO: client review (supply a real BI case study to enable the section)
export const caseStudy = null;

/** Industries tab grid. Slugs match the existing /industries/* pages. */
// TODO: client review (all use cases)
export const industries = {
  eyebrow: "Industries we serve",
  titleLead: "BI Built Around",
  titleAccent: "How Your Industry Works",
  items: [
    {
      slug: "healthcare",
      label: "Healthcare",
      useCases: [
        "Patient flow and bed occupancy dashboards",
        "Readmission risk scoring",
        "Claims and revenue-cycle analytics",
        "Clinical quality and compliance reporting",
        "Staffing forecasts by department",
      ],
    },
    {
      slug: "education",
      label: "Education",
      useCases: [
        "Enrolment and retention funnels",
        "Early-warning dashboards for at-risk students",
        "Course and faculty performance reporting",
        "Fee collection and budget tracking",
        "Accreditation reporting packs",
      ],
    },
    {
      slug: "fashion",
      label: "Fashion",
      useCases: [
        "Sell-through and markdown analysis",
        "Size-curve and assortment planning",
        "Demand forecasting by season and style",
        "Returns analysis by product and channel",
        "Supplier lead-time tracking",
      ],
    },
    {
      slug: "sports",
      label: "Sports",
      useCases: [
        "Ticketing and attendance analytics",
        "Fan engagement and membership dashboards",
        "Athlete performance and load monitoring",
        "Sponsorship value reporting",
        "Merchandise sales forecasting",
      ],
    },
    {
      slug: "retail",
      label: "Retail & E-commerce",
      useCases: [
        "Store and online sales in one view",
        "Basket and customer lifetime value analysis",
        "Inventory and stock-out forecasting",
        "Promotion and pricing effectiveness",
        "Competitor price monitoring",
        "Conversion funnel dashboards",
      ],
    },
    {
      slug: "real-estate",
      label: "Real Estate",
      useCases: [
        "Portfolio occupancy and yield dashboards",
        "Lead-to-lease funnel analytics",
        "Rent and valuation trend analysis",
        "Maintenance cost tracking by property",
        "Market and listing data aggregation",
      ],
    },
    {
      slug: "transportation",
      label: "Transportation & Logistics",
      useCases: [
        "Fleet utilisation and on-time delivery",
        "Route cost and fuel analytics",
        "Shipment ETA prediction",
        "Driver and vehicle performance",
        "Warehouse throughput dashboards",
      ],
    },
    {
      slug: "insurance",
      label: "Insurance",
      useCases: [
        "Loss ratio and claims dashboards",
        "Fraud signal monitoring",
        "Policy retention and lapse prediction",
        "Underwriting performance reporting",
        "Regulatory reporting packs",
      ],
    },
    {
      slug: "finance",
      label: "Finance & Fintech",
      useCases: [
        "Cash flow and liquidity forecasting",
        "Transaction anomaly detection",
        "Customer acquisition and churn analytics",
        "Portfolio and risk exposure dashboards",
        "Month-end close and variance reporting",
        "Regulatory and audit reporting",
      ],
    },
    {
      slug: "marketing",
      label: "Marketing",
      useCases: [
        "Multi-channel campaign performance",
        "Attribution and spend efficiency",
        "Customer segmentation",
        "Lead scoring and pipeline forecasting",
        "Content and SEO performance dashboards",
      ],
    },
    {
      slug: "supply-chain",
      label: "Supply Chain",
      useCases: [
        "Demand and replenishment forecasting",
        "Supplier performance scorecards",
        "Inventory ageing and working capital",
        "Procurement spend analytics",
        "Disruption and lead-time alerts",
      ],
    },
    {
      slug: "legal",
      label: "Legal",
      useCases: [
        "Matter profitability and billing dashboards",
        "Utilisation and realisation by fee earner",
        "Contract data extraction and reporting",
        "Case outcome and duration analysis",
        "Client revenue concentration",
      ],
    },
  ],
};

/** Tech stack tabs. `slug` matches a vendored logo in assets/logos, else a monogram. */
export const stack = {
  eyebrow: "Tools we deliver with",
  titleLead: "A Stack Chosen For",
  titleAccent: "Your Data, Not Our Habits",
  groups: [
    {
      name: "BI & Visualization",
      tools: [
        { name: "Power BI" },
        { name: "Tableau" },
        { name: "Looker" },
        { name: "Qlik" },
        { name: "Metabase" },
        { name: "Superset" },
      ],
    },
    {
      name: "Warehouses & Lakes",
      tools: [
        { name: "Snowflake" },
        { name: "BigQuery", slug: "googlecloud" },
        { name: "Redshift" },
        { name: "Databricks", slug: "databricks" },
        { name: "Azure Synapse" },
      ],
    },
    {
      name: "ETL/ELT & Orchestration",
      tools: [
        { name: "dbt" },
        { name: "Airflow", slug: "apacheairflow" },
        { name: "Fivetran" },
        { name: "Airbyte" },
        { name: "Azure Data Factory" },
      ],
    },
    {
      name: "Databases",
      tools: [
        { name: "PostgreSQL", slug: "postgresql" },
        { name: "MySQL" },
        { name: "SQL Server" },
        { name: "MongoDB", slug: "mongodb" },
      ],
    },
    {
      name: "AI/ML for Analytics",
      tools: [
        { name: "Python", slug: "python" },
        { name: "scikit-learn", slug: "scikitlearn" },
        { name: "Prophet" },
        { name: "OpenAI" },
        { name: "Claude", slug: "anthropic" },
      ],
    },
    {
      name: "Cloud",
      tools: [{ name: "AWS" }, { name: "Azure" }, { name: "GCP", slug: "googlecloud" }],
    },
  ],
};

/** Nine-step delivery process. */
// TODO: client review (all nine steps)
export const process = {
  eyebrow: "How we deliver",
  titleLead: "Nine Steps From",
  titleAccent: "Kick-off To Clarity",
  steps: [
    {
      title: "Discovery & goals",
      body: "Workshops with leadership and data owners to pin down the decisions BI must support.",
    },
    {
      title: "Data source audit",
      body: "We map every source, its owner, refresh rate and quality, and flag gaps early.",
    },
    {
      title: "KPI & metric definition",
      body: "Each metric gets one written definition, one owner and one calculation.",
    },
    {
      title: "Technology selection",
      body:
        "Power BI on Azure, Tableau on Snowflake, or an open-source stack, chosen on data volume, " +
        "team skills, existing infrastructure and budget.",
    },
    {
      title: "Warehouse & ETL build",
      body: "Pipelines, models and tests built and documented in version control.",
    },
    {
      title: "Dashboard design & build",
      body: "Wireframes first, then dashboards built and reviewed with real users every sprint.",
    },
    {
      title: "User acceptance testing",
      body: "Numbers reconciled against source systems and signed off by each owner.",
    },
    {
      title: "Go-live & team training",
      body: "Phased rollout with role-based training sessions and written guides.",
    },
    {
      title: `${companyStats.supportDays}-day support`,
      body: `${companyStats.supportDays} days of post-launch support for fixes, tuning and small changes.`,
    },
  ],
};

export const whyUs = {
  eyebrow: "Why Axiomra",
  titleLead: "A BI Partner That",
  titleAccent: "Stays After Launch",
  // TODO: client review (card copy)
  cards: [
    {
      icon: "TbStack3",
      title: "Deep BI expertise across industries",
      body:
        `Engineers and analysts who have shipped data products in ${companyStats.industries} ` +
        "industries, from clinical reporting to retail forecasting.",
    },
    {
      icon: "TbShieldCheck",
      title: `${companyStats.supportDays}-day post-launch support`,
      body:
        `${companyStats.supportDays} days of fixes, tuning and small changes after go-live, ` +
        "at no extra cost.",
    },
    {
      icon: "TbSchool",
      title: "Free team training",
      body:
        "Role-based training for report builders and viewers, so adoption does not stall " +
        "once we step back.",
    },
  ],
};

export const cta = {
  title: "Not Sure Which BI Service You Need?",
  subtitle:
    "Book a free 30-minute consultation. Tell us what decisions you are struggling to make and " +
    "we will tell you, honestly, what it takes to support them.",
  buttonText: "Book a Free 30-Minute Consultation",
};

export const faqs = [
  {
    q: "What BI services do you offer?",
    a:
      "BI consulting, enterprise BI, data warehousing and ETL, BI implementation (including cloud " +
      "BI), migration and modernization, data analytics, predictive analytics, data extraction, " +
      "web scraping of public data, self-service BI, and ongoing support and maintenance.",
  },
  {
    // TODO: client review (price ranges)
    q: "How much does a BI solution cost?",
    a:
      "It depends on the number of data sources, data volume and how many dashboards you need. " +
      "As a guide, a focused dashboard project on clean data typically starts around $8,000 to " +
      "$15,000, while a full warehouse, pipelines and enterprise rollout usually ranges from " +
      "$30,000 to $100,000+. We give a fixed estimate after a free consultation.",
  },
  {
    // TODO: client review (timeline ranges)
    q: "How long does implementation take?",
    a:
      "A first set of dashboards on existing data usually takes 3 to 6 weeks. A warehouse, ETL " +
      "and multi-department rollout typically takes 2 to 6 months, delivered in phases so you " +
      "see working reports early.",
  },
  {
    q: "Which BI platforms do you work with?",
    a:
      "Power BI, Tableau, Looker, Qlik, Metabase and Apache Superset, on top of Snowflake, " +
      "BigQuery, Redshift, Databricks or Azure Synapse. We recommend a platform based on your " +
      "data, skills and budget, not a partner quota.",
  },
  {
    q: "How do you secure data?",
    a:
      "Access follows least privilege, with row-level security in reports, encryption in " +
      "transit and at rest, and credentials kept in your own cloud's secret store. Sensitive " +
      "data can stay entirely inside your environment, and we sign NDAs before any data access.",
  },
  {
    q: "Can you integrate with our CRM/ERP?",
    a:
      "Yes. We connect to common CRMs and ERPs such as Salesforce, HubSpot, Dynamics, SAP and " +
      "NetSuite through native connectors, APIs or database replication, and to custom systems " +
      "through their APIs or exports.",
  },
  {
    q: "BI vs data analytics: what's the difference?",
    a:
      "Business intelligence answers what happened and what is happening, through governed, " +
      "repeatable reporting. Data analytics digs into why it happened and what is likely next, " +
      "often with statistics or machine learning. Most teams need both, and we deliver both.",
  },
  {
    q: "Do you support existing enterprise BI setups?",
    a:
      "Yes. We take over, audit and improve existing Power BI, Tableau or Looker estates: fixing " +
      "slow reports and failing refreshes, consolidating duplicate datasets, and adding the " +
      "governance that keeps it maintainable.",
  },
];
