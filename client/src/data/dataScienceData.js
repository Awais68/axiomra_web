/**
 * Copy and structured content for the Data Science & Analytics service page.
 *
 * Company figures come from companyStats, never typed here. Anything marked
 * `TODO: client review` is new factual copy (process, timelines) that the
 * client has not signed off yet.
 *
 * Photos are Unsplash-licensed, re-encoded to webp in src/assets/data-science.
 */
import { companyStats } from "./companyStats.js";
import { SERVICES_BASE_PATH, DATA_SCIENCE_SLUG } from "../routes.constants";

import heroImg from "../assets/data-science/hero-1920.webp";
import heroImgSm from "../assets/data-science/hero-960.webp";
import predictiveImg from "../assets/data-science/svc-predictive-1200.webp";
import predictiveImgSm from "../assets/data-science/svc-predictive-640.webp";
import consultingImg from "../assets/data-science/svc-consulting-1200.webp";
import consultingImgSm from "../assets/data-science/svc-consulting-640.webp";
import annotationImg from "../assets/data-science/svc-annotation-1200.webp";
import annotationImgSm from "../assets/data-science/svc-annotation-640.webp";
import visualizationImg from "../assets/data-science/svc-visualization-1200.webp";
import visualizationImgSm from "../assets/data-science/svc-visualization-640.webp";
import bigDataImg from "../assets/data-science/svc-bigdata-1200.webp";
import bigDataImgSm from "../assets/data-science/svc-bigdata-640.webp";
import enterpriseImg from "../assets/data-science/svc-enterprise-1200.webp";
import enterpriseImgSm from "../assets/data-science/svc-enterprise-640.webp";
import architectureImg from "../assets/data-science/svc-architecture-1200.webp";
import architectureImgSm from "../assets/data-science/svc-architecture-640.webp";
import teamImg from "../assets/data-science/team-1200.webp";
import teamImgSm from "../assets/data-science/team-640.webp";
import engineerImg from "../assets/data-science/engineer-1000.webp";
import engineerImgSm from "../assets/data-science/engineer-600.webp";

import healthcareImg from "../assets/industries/healthcare.webp";
import financeImg from "../assets/industries/finance.webp";
import retailImg from "../assets/industries/retail.webp";
import supplyChainImg from "../assets/industries/supply-chain.webp";
import educationImg from "../assets/industries/education.webp";
import realEstateImg from "../assets/industries/real-estate.webp";
import marketingImg from "../assets/industries/marketing.webp";
import insuranceImg from "../assets/industries/insurance.webp";

export { DATA_SCIENCE_SLUG };
export const DS_PATH = `${SERVICES_BASE_PATH}/${DATA_SCIENCE_SLUG}`;

/** `{ src, srcSet }` for an image exported at two widths. */
const pic = (lg, sm, lgW, smW) => ({ src: lg, srcSet: `${sm} ${smW}w, ${lg} ${lgW}w` });

export const hero = {
  eyebrow: "Data Science & Analytics Services",
  titleLead: "Data Science That Turns",
  titleAccent: "Raw Data Into Clear Decisions",
  body:
    "We clean, connect, and model your data, then put the answers where your team works: " +
    "forecasts, dashboards, and alerts that leaders can act on the same day.",
  ctaText: "Request a Free Consultation",
  secondaryCtaText: "Explore Our Services",
  image: {
    ...pic(heroImg, heroImgSm, 1920, 960),
    alt: "Data scientist reviewing model output across three monitors in a dark office",
  },
  // Illustrative model readouts floating over the hero photo. Sample UI, not client results.
  chips: [
    { label: "Forecast accuracy", value: "94.2%" },
    { label: "Rows cleaned", value: "12.4M" },
    { label: "Churn risk flagged", value: "↓ 18%" },
  ],
  proof: [
    `${companyStats.projects}+ projects`,
    `${companyStats.experts}+ engineers`,
    `${companyStats.countries}+ countries`,
  ],
};

export const intro = {
  eyebrow: "What we offer",
  titleLead: "Transform Your Business With",
  titleAccent: "Practical Data Science",
  // TODO: client review
  paragraphs: [
    "Most companies already own the data they need. It just lives in five tools, three " +
      "spreadsheets, and one person's head. Our data science and analytics services pull it " +
      "together, check it, and turn it into numbers your team can trust.",
    "From there we build what the business actually asks for: demand forecasts, churn " +
      "scores, pricing models, and dashboards that answer next week's question, not last " +
      "quarter's. Every model ships with monitoring, so you know when the world has moved " +
      "and the model needs to move with it.",
  ],
  image: {
    ...pic(engineerImg, engineerImgSm, 1000, 600),
    alt: "Engineer writing model code on a laptop at night",
  },
  stats: [
    { value: `${companyStats.projects}+`, label: "Projects delivered" },
    { value: `${companyStats.experts}+`, label: "In-house engineers" },
    { value: `${companyStats.countries}+`, label: "Countries served" },
    { value: `${companyStats.industries}+`, label: "Industries" },
  ],
};

// TODO: client review (all service descriptions and bullets)
export const services = {
  eyebrow: "Data science services",
  titleLead: "Seven Services,",
  titleAccent: "One Data Team",
  subtitle:
    "Pick one service or the whole stack. Each one is built to plug into the data you " +
    "already have, without a rip-and-replace.",
  items: [
    {
      id: "predictive-analytics",
      title: "Predictive Analytics",
      body:
        "Stay ahead of shifting markets with models that forecast demand, flag risk, and " +
        "surface growth before it shows up in the monthly report. We tune every model " +
        "against your history and track its accuracy after launch.",
      bullets: [
        "Sales and demand forecasting",
        "Risk prediction models",
        "Customer segmentation",
        "Data cleaning and transformation",
      ],
      image: {
        ...pic(predictiveImg, predictiveImgSm, 1200, 640),
        alt: "Analyst marking up a forecast chart on a tablet in front of trading screens",
      },
    },
    {
      id: "consulting",
      title: "Data Science & Analytics Consulting",
      body:
        "Not sure where data science pays off first? We review your data flows, rank the " +
        "use cases by value and effort, and hand you a roadmap your team can run with, " +
        "with or without us.",
      bullets: [
        "AI tools implementation",
        "Data strategy development",
        "Data integration and management",
        "Decision support systems",
      ],
      image: {
        ...pic(consultingImg, consultingImgSm, 1200, 640),
        alt: "Consultant presenting pie charts to a business team in a meeting room",
      },
    },
    {
      id: "annotation",
      title: "Data Annotation & Labeling",
      body:
        "Models are only as good as their training data. Our team labels images, video, " +
        "text, and domain-specific datasets with review loops built in, so your AI ships " +
        "sooner and makes fewer mistakes in production.",
      bullets: [
        "Complex data types",
        "Industry-specific labeling",
        "Image and video annotation",
        "Quality review on every batch",
      ],
      image: {
        ...pic(annotationImg, annotationImgSm, 1200, 640),
        alt: "Hand using a stylus to annotate a chart on a tablet",
      },
    },
    {
      id: "visualization",
      title: "Data Visualization",
      body:
        "Clear visuals make data easy to use. We design dashboards that show trends, gaps, " +
        "and results at a glance, built for the owners, managers, and analysts who need " +
        "to act on them.",
      bullets: [
        "Brand-aligned dashboards",
        "Role-specific views",
        "Visualization tool integration",
        "Exploratory data analysis",
      ],
      image: {
        ...pic(visualizationImg, visualizationImgSm, 1200, 640),
        alt: "Analytics dashboard with histograms and trend lines on a monitor",
      },
    },
    {
      id: "big-data",
      title: "Big Data & Data Lakes",
      body:
        "When data outgrows spreadsheets, it needs a proper home. We design data lakes and " +
        "lakehouses that hold structured and unstructured data in one place, ready for " +
        "fast search, analysis, and model training.",
      bullets: [
        "Store large datasets in one place",
        "Batch and streaming data feeds",
        "Organized files for fast access",
        "Analytics-ready data layers",
      ],
      image: {
        ...pic(bigDataImg, bigDataImgSm, 1200, 640),
        alt: "Rack of servers with green status lights in a data center",
      },
    },
    {
      id: "enterprise",
      title: "Enterprise Data Management",
      body:
        "Strong analytics starts with clean, governed data. We set up data rules, lineage, " +
        "and quality checks so every team works from the same numbers, with access that " +
        "is secure by default.",
      bullets: [
        "Clean and sort data from every system",
        "Data rules and access controls",
        "Automated data quality checks",
        "Secure team access",
      ],
      image: {
        ...pic(enterpriseImg, enterpriseImgSm, 1200, 640),
        alt: "Curved glass facade of a modern office tower at night",
      },
    },
    {
      id: "architecture",
      title: "Data Architecture & Engineering",
      body:
        "Good architecture keeps tools, data flows, and teams connected. We build pipelines " +
        "that move data from source to report with less manual work, and that scale " +
        "without a rewrite.",
      bullets: [
        "Map data sources and flows",
        "Build stable pipelines",
        "Remove manual steps and errors",
        "Design for future growth",
      ],
      image: {
        ...pic(architectureImg, architectureImgSm, 1200, 640),
        alt: "Developer workstation with pipeline code on screens under neon light",
      },
    },
  ],
};

/** Mid-page band: the consulting pitch, laid out with the polygon wrap. */
export const teamBand = {
  eyebrow: "Need a data team?",
  title: "A Data Team That Turns Data Into Action",
  // TODO: client review
  body:
    "Axiomra pairs data engineers, data scientists, and analysts in one squad, so the " +
    "person cleaning the data talks to the person modeling it and the person charting " +
    "it. That is how better reporting, sharper forecasts, and cleaner data systems ship " +
    "in weeks rather than quarters. You get one point of contact, weekly demos, and " +
    "code your own team can own after handover.",
  ctaText: "Talk to a Data Expert",
  image: {
    ...pic(teamImg, teamImgSm, 1200, 640),
    alt: "Team working together over printed charts at a wooden table",
  },
};

export const industries = {
  eyebrow: "Industries we serve",
  titleLead: "Data Science Built For",
  titleAccent: "Your Industry",
  subtitle: "Every sector has its own data, rules, and goals. We build for the one you are in.",
  // TODO: client review
  items: [
    {
      name: "Healthcare",
      image: healthcareImg,
      body: "Cleaner patient data, faster admin work, and earlier risk signals for care teams.",
      bullets: ["Patient risk prediction", "Readmission forecasting", "Clinical report automation"],
    },
    {
      name: "Finance & Fintech",
      image: financeImg,
      body: "Models that spot fraud, score credit, and forecast cash with an audit trail.",
      bullets: ["Fraud detection", "Credit scoring", "Cash-flow forecasting"],
    },
    {
      name: "Retail & E-Commerce",
      image: retailImg,
      body: "Know what will sell, to whom, and at what price, before you place the order.",
      bullets: ["Demand forecasting", "Price optimization", "Recommendation engines"],
    },
    {
      name: "Supply Chain",
      image: supplyChainImg,
      body: "Predict delays, balance stock, and plan routes with live operational data.",
      bullets: ["Inventory optimization", "Delay prediction", "Route planning"],
    },
    {
      name: "Education",
      image: educationImg,
      body: "Spot students who need help early and give staff a clear view of outcomes.",
      bullets: ["Dropout risk models", "Learning analytics", "Enrollment forecasting"],
    },
    {
      name: "Real Estate",
      image: realEstateImg,
      body: "Price property, read market trends, and qualify leads with data, not guesswork.",
      bullets: ["Automated valuation", "Market trend analysis", "Lead scoring"],
    },
    {
      name: "Marketing",
      image: marketingImg,
      body: "Measure what each channel really returns and spend the next dollar where it counts.",
      bullets: ["Attribution modeling", "Customer lifetime value", "Campaign analytics"],
    },
    {
      name: "Insurance",
      image: insuranceImg,
      body: "Faster claims triage and fairer pricing from the data you already collect.",
      bullets: ["Claims triage", "Risk-based pricing", "Fraud flagging"],
    },
  ],
};

export const techStack = {
  eyebrow: "Technologies we use",
  titleLead: "The Data Analytics",
  titleAccent: "Tech Stack",
  subtitle: "Proven tools, picked for your data and your team, not for our résumé.",
  groups: [
    {
      name: "Machine Learning",
      items: [
        "Python",
        "scikit-learn",
        "PyTorch",
        "TensorFlow",
        "XGBoost",
        "LightGBM",
        "Prophet",
        "statsmodels",
        "Hugging Face",
        "MLflow",
      ],
    },
    {
      name: "Data Engineering",
      items: ["Apache Spark", "Airflow", "dbt", "Kafka", "Pandas", "Polars", "Fivetran", "dagster"],
    },
    {
      name: "Databases & Warehouses",
      items: [
        "PostgreSQL",
        "MongoDB",
        "Snowflake",
        "BigQuery",
        "Redshift",
        "Databricks",
        "ClickHouse",
      ],
    },
    {
      name: "Visualization",
      items: ["Power BI", "Tableau", "Looker", "Metabase", "Superset", "Plotly", "D3.js"],
    },
    {
      name: "Cloud & MLOps",
      items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "SageMaker", "Vertex AI"],
    },
  ],
};

// TODO: client review
export const process = {
  eyebrow: "How we work",
  titleLead: "A Five-Step Method For",
  titleAccent: "Reliable Analytics",
  body:
    "Every project follows the same clear path, so scope, owners, and review points are " +
    "agreed before the first line of code. No surprises halfway through.",
  steps: [
    {
      title: "Discovery and goals",
      body:
        "We meet the people who will use the answers, agree the questions worth asking, and " +
        "define how success is measured.",
    },
    {
      title: "Data collection and preparation",
      body:
        "We gather the right data, then clean, join, and check it: missing fields, " +
        "duplicates, and bad formats are fixed before any model sees them.",
    },
    {
      title: "Modeling and analysis",
      body:
        "We test several approaches against your history and keep the one that is accurate, " +
        "explainable, and cheap enough to run.",
    },
    {
      title: "Deployment and dashboards",
      body:
        "Models go live behind an API or straight into the dashboards and tools your team " +
        "already opens every morning.",
    },
    {
      title: "Monitoring and improvement",
      body:
        `Accuracy and data drift are tracked from day one, with ${companyStats.supportDays}-day ` +
        "support included after launch.",
    },
  ],
};

export const whyUs = {
  eyebrow: "Why Axiomra",
  titleLead: "Stay Ahead With",
  titleAccent: "Data Science Done Right",
  // TODO: client review
  points: [
    {
      title: "Faster model development",
      body:
        "Reusable data prep and training templates cut the time and cost of every new " +
        "model, without cutting corners on accuracy.",
    },
    {
      title: "Automated ML pipelines",
      body:
        "Training, testing, and deployment run as one pipeline, so updates ship in hours " +
        "and every release is reproducible.",
    },
    {
      title: "R&D on your side",
      body:
        "Our research team tests new ideas as quick prototypes, so you only fund what " +
        "the evidence supports.",
    },
    {
      title: "Built to scale",
      body:
        "MLOps from day one: monitoring, retraining, and cost control that hold up as data " +
        "and users grow.",
    },
  ],
};

/** Closing block that wraps copy around the organic SVG shape. */
export const partner = {
  eyebrow: "Why choose us",
  title: "Partnering With Us Is A Strategic Move",
  pillars: [
    {
      title: "Deep technical skill",
      body:
        "A senior, in-house team that has shipped data products in regulated, high-volume " +
        "environments.",
    },
    {
      title: "Clear communication",
      body:
        "One project lead, weekly demos, and a shared board, so you always know what is " +
        "done and what is next.",
    },
    {
      title: "Results first",
      body:
        "Every project starts with the business number it should move, and we report " +
        "against it until it does.",
    },
  ],
};

export const cta = {
  title: "See How Data Science Can Work For Your Business",
  subtitle:
    "Book a free strategy session. We will review your data, name the quickest wins, and " +
    "map a plan you can take to your board.",
  buttonText: "Book a Free Strategy Session",
};

// TODO: client review
export const faqs = [
  {
    q: "What are data science services, and how do they help a business grow?",
    a:
      "Data science services turn raw business data into forecasts, scores, and insights. " +
      "They help you predict demand, cut waste, find churn risk early, and make decisions " +
      "on evidence rather than gut feel.",
  },
  {
    q: "How do data analytics services improve decision-making?",
    a:
      "They put one trusted set of numbers in front of every team, refreshed automatically, " +
      "so leaders compare like with like and act on current data instead of last month's export.",
  },
  {
    q: "What is included in your data analytics consulting?",
    a:
      "A review of your data sources and flows, a ranked list of use cases by value and " +
      "effort, an architecture recommendation, and a delivery roadmap with costs and timelines.",
  },
  {
    q: "How is data science consulting different from traditional analytics?",
    a:
      "Traditional analytics explains what happened. Data science adds why it happened and " +
      "what is likely next, using statistical and machine learning models.",
  },
  {
    q: "Do you work with our existing tools and data warehouse?",
    a:
      "Yes. We build on what you already run, whether that is Snowflake, BigQuery, Postgres, " +
      "Power BI, or spreadsheets, and only recommend new tools when they clearly pay off.",
  },
  {
    q: "How long does it take to see results?",
    a:
      "A first proof of concept usually lands in four to six weeks. Full production rollouts " +
      "depend on data readiness and scope; we agree the timeline in discovery.",
  },
  {
    q: "How do you keep our data secure?",
    a:
      "Least-privilege access, encryption in transit and at rest, and work inside your cloud " +
      "account where possible. We sign NDAs and follow your compliance requirements.",
  },
  {
    q: "What happens after the model goes live?",
    a:
      `We monitor accuracy and data drift, retrain when needed, and include ${companyStats.supportDays}-day ` +
      "post-launch support. Ongoing care plans are available after that.",
  },
];
