/**
 * Copy and structured content for the Enterprise AI Development service page.
 *
 * Company figures come from companyStats, never typed here. Anything marked
 * `TODO: client review` is new factual copy (process, timelines, claims) that
 * the client has not signed off yet.
 */
import { companyStats } from "./companyStats.js";
import { SERVICES_BASE_PATH, ENTERPRISE_AI_SLUG } from "../routes.constants";

import strategy720 from "../assets/enterprise-ai/strategy-720.webp";
import strategy1200 from "../assets/enterprise-ai/strategy-1200.webp";
import engineers720 from "../assets/enterprise-ai/engineers-720.webp";
import engineers1200 from "../assets/enterprise-ai/engineers-1200.webp";
import network720 from "../assets/enterprise-ai/network-720.webp";
import network1200 from "../assets/enterprise-ai/network-1200.webp";
import team720 from "../assets/enterprise-ai/team-720.webp";
import team1200 from "../assets/enterprise-ai/team-1200.webp";
// import analytics720 from "../assets/enterprise-ai/analytics-720.webp";
import analytics720 from "../assets/enterprise-ai/analytics-1200.webp";
import analytics1200 from "../assets/enterprise-ai/analytics-1200.webp";
import integration720 from "../assets/enterprise-ai/integration-720.webp";
import integration1200 from "../assets/enterprise-ai/integration-1200.webp";
import governance720 from "../assets/enterprise-ai/governance-720.webp";
import governance1200 from "../assets/enterprise-ai/governance-1200.webp";
import mlops720 from "../assets/enterprise-ai/mlops-720.webp";
import mlops1200 from "../assets/enterprise-ai/mlops-1200.webp";
import monitoring720 from "../assets/enterprise-ai/monitoring-720.webp";
import monitoring1200 from "../assets/enterprise-ai/monitoring-1200.webp";

export { ENTERPRISE_AI_SLUG };
export const ENTERPRISE_AI_PATH = `${SERVICES_BASE_PATH}/${ENTERPRISE_AI_SLUG}`;

/** A 720w/1200w pair for `srcSet`; every photo here is 3:2 or wider. */
const photo = (small, large, alt) => ({
  src: large,
  srcSet: `${small} 720w, ${large} 1200w`,
  alt,
});

export const hero = {
  eyebrow: "Enterprise AI Development Services",
  titleLead: "Enterprise AI Built To",
  titleAccent: "Run In Production",
  body:
    "We help large organisations design, build and operate AI systems that survive contact " +
    "with real data, real users and real compliance reviews. Every system is scoped around a " +
    "business outcome, wired into the tools you already run, and measured from day one.",
  ctaText: "Book a Discovery Call",
  secondaryCtaText: "Explore Our Services",
  proof: [
    { value: `${companyStats.projects}+`, label: "Projects delivered" },
    { value: `${companyStats.experts}+`, label: "AI engineers" },
    { value: `${companyStats.countries}+`, label: "Countries served" },
  ],
};

/** Systems we integrate with. Plain wordmarks, so no brand-asset licensing. */
export const trustStrip = {
  label: "Integrated with the platforms enterprises already run",
  names: [
    "SAP",
    "Oracle",
    "Salesforce",
    "Microsoft Dynamics",
    "ServiceNow",
    "Snowflake",
    "Databricks",
    "AWS",
    "Azure",
    "Google Cloud",
  ],
};

// TODO: client review
export const stall = {
  eyebrow: "Why enterprise AI stalls",
  titleLead: "Most Enterprise AI Projects Stall",
  titleAccent: "Before They Reach Production",
  image: photo(engineers720, engineers1200, "Two engineers reviewing an AI system on a laptop"),
  paragraphs: [
    "Large organisations rarely lack AI ambition. They end up with a proof of concept that " +
      "impressed a steering committee and then quietly never shipped. The model was fine; the " +
      "way the project was set up was not.",
    "Data that was never production-ready, governance nobody owned, and no plan for moving a " +
      "pilot into live systems are the usual reasons. We work the other way round: we start " +
      "from the business goal and plan backwards, so the architecture, integrations and " +
      "controls are agreed before anyone writes a line of model code.",
  ],
  readyTitle: "What Production-Ready Enterprise AI Looks Like",
  readyIntro: "A demo is not a deliverable. A production-ready enterprise AI system:",
  readyList: [
    "Connects to your ERP, CRM and data warehouse",
    "Meets the security and compliance rules of your industry",
    "Holds its performance across departments and data volumes",
    "Ships with monitoring, alerting and a retraining plan",
    "Reports outcomes in the same terms as your business reviews",
  ],
  whoTitle: "Who We Build For",
  whoBody:
    "CTOs, COOs, heads of data and transformation leads at organisations that need AI to work " +
    "at scale: teams planning a first enterprise programme, evaluating partners, or trying to " +
    "rescue a pilot that never left the lab.",
  ctaText: "Book Your Enterprise AI Assessment",
};

// TODO: client review
export const challenges = {
  eyebrow: "The real blockers",
  titleLead: "The Biggest Challenges Enterprises",
  titleAccent: "Face With AI",
  subtitle:
    "Enterprise AI rarely fails on technology. It fails on foundations. If your organisation " +
    "has tried AI without seeing results, these are the patterns we hear most often.",
  items: [
    {
      title: "Pilots that never reach production",
      body:
        "A proof of concept works in a sandbox, then meets real data, real users and real " +
        "workflows and falls over. Production readiness has to be designed in, not bolted on.",
    },
    {
      title: "Siloed, inconsistent data",
      body:
        "Years of data spread across systems, formats and owners. Even the best model gives " +
        "unreliable answers on an unreliable foundation, so the data layer comes first.",
    },
    {
      title: "No governance or oversight",
      body:
        "Who owns the system, who reviews its outputs, and what happens when it is wrong? In " +
        "regulated industries, audit trails and explainability are not optional extras.",
    },
    {
      title: "AI that sits outside existing tools",
      body:
        "Teams live in ERPs, CRMs and internal platforms. An AI tool that asks them to work " +
        "somewhere else adds friction instead of removing it.",
    },
    {
      title: "No way to measure ROI",
      body:
        "Leadership wants to know what AI is delivering. Without metrics tied to revenue, cost " +
        "or speed from day one, AI becomes a cost centre instead of a driver.",
    },
    {
      title: "Teams not ready to operate AI",
      body:
        "Building AI is one step; running it is another. Without the right capability in place, " +
        "models drift, quality slips and the system stops earning its keep.",
    },
  ],
  addressTitle: "How Axiomra Addresses Each Of These",
  addressBody:
    "Each blocker above is one we plan for at the start of an engagement, not after it bites. " +
    "From data strategy and system integration to governance frameworks and production " +
    "deployment, we cover every layer so your AI investment performs the way the business " +
    "case said it would. The result is a system your teams can trust, your auditors can " +
    "review, and your leadership can measure.",
};

/**
 * The eight service rows. `layout` picks the CSS shape treatment for the row:
 * "photo" a clip-path reveal, "inverted" the cut-out quote panel, "organic" the
 * SVG shape-outside wrap. Kept to a few rows so the shapes stay special.
 */
// TODO: client review (all service descriptions)
export const services = {
  eyebrow: "What we do",
  titleLead: "Our Enterprise AI",
  titleAccent: "Development Services",
  subtitle:
    "End-to-end enterprise AI built around one goal: measurable business value. Every service " +
    "solves a specific operational problem, cuts cost, improves decisions or opens a new " +
    "revenue stream.",
  items: [
    {
      id: "strategy",
      icon: "Compass",
      title: "Enterprise AI Strategy & Consulting",
      body: [
        "Before any build, we work with your leadership team to find where AI will return the " +
          "most. We assess your data, map operational bottlenecks and set a roadmap with clear " +
          "priorities, timelines and expected outcomes.",
        "Getting this right up front is what separates programmes that scale from ones that " +
          "burn budget on the wrong problem.",
      ],
      image: photo(strategy720, strategy1200, "Consultants reviewing an AI roadmap on screen"),
      layout: "photo",
    },
    {
      id: "custom",
      icon: "Cpu",
      title: "Custom Enterprise AI Development",
      body: [
        "AI systems designed for your processes, data environment and technology stack. Not " +
          "off-the-shelf tools stretched to fit, but purpose-built systems engineered to run " +
          "inside your infrastructure and hit outcomes agreed at the outset.",
      ],
      image: photo(team720, team1200, "Engineering team building a custom AI system"),
      layout: "photo",
    },
    {
      id: "genai",
      icon: "Sparkles",
      title: "Generative AI For Enterprise",
      body: [
        "Large language model solutions for knowledge management, document processing, internal " +
          "search, customer communication and content operations. Retrieval-augmented for " +
          "accuracy and built with governance controls from the start.",
      ],
      image: photo(network720, network1200, "Network of connected nodes representing an LLM"),
      layout: "organic",
    },
    {
      id: "agentic",
      icon: "Bot",
      title: "Agentic AI & Workflow Automation",
      body: [
        "Autonomous agents that plan, decide and carry out multi-step tasks across your systems: " +
          "procurement workflows, service escalations, compliance checks and data reconciliation.",
        "The payoff is a measurable drop in manual work and faster execution across departments.",
      ],
      image: photo(analytics720, analytics1200, "Laptop showing an automated workflow dashboard"),
      layout: "photo",
    },
    {
      id: "ml",
      icon: "TrendingUp",
      title: "Enterprise Machine Learning & Predictive Analytics",
      body: [
        "Supervised, unsupervised and reinforcement learning models that turn historical and " +
          "real-time data into forward-looking signals: demand forecasting, churn prediction, " +
          "fraud detection, risk scoring and resource optimisation.",
        "Built for production: monitored, retrained on schedule and wired into the processes " +
          "that depend on them.",
      ],
      image: photo(mlops720, mlops1200, "Analytics dashboard with prediction charts"),
      layout: "photo",
    },
    {
      id: "integration",
      icon: "Workflow",
      title: "Enterprise AI Integration Services",
      body: [
        "Many enterprise AI projects break at the integration, not the model. We connect AI " +
          "directly to your ERP, CRM, data warehouse and legacy systems, so outputs land inside " +
          "the workflows your teams already use.",
      ],
      image: photo(integration720, integration1200, "Server racks and network cabling"),
      layout: "photo",
    },
    {
      id: "governance",
      icon: "ShieldCheck",
      title: "AI Governance, Security & Compliance",
      body: [
        "Governance is a foundation, not an afterthought. Role-based access, audit trails, data " +
          "privacy architecture, model explainability, and alignment with GDPR, HIPAA, SOC 2 and " +
          "the EU AI Act are designed into every system we build.",
      ],
      quote: "In regulated industries this is not optional. We treat it as a requirement.",
      image: photo(governance720, governance1200, "Circuit board lit in the dark"),
      layout: "inverted",
    },
    {
      id: "mlops",
      icon: "Activity",
      title: "MLOps & LLMOps",
      body: [
        "Launch is not the finish line. Without monitoring, model quality degrades as your data " +
          "changes. We run MLOps and LLMOps pipelines that track performance, catch drift, " +
          "trigger retraining and version every model in production.",
      ],
      image: photo(
        monitoring720,
        monitoring1200,
        "Monitor showing live performance charts for models in production"
      ),
      layout: "photo",
    },
  ],
};

export const fitCta = {
  title: "Not Sure Which Solution Fits Your Needs?",
  subtitle:
    "Most enterprises need several of these working together. We will map your current " +
    "operations, show where AI returns the most, and recommend the right combination for " +
    "your environment.",
  buttonText: "Book an Enterprise AI Assessment",
};

/** Industries tab grid. Slugs match the existing /industries/* pages. */
// TODO: client review (all use cases)
export const industries = {
  eyebrow: "Industries we serve",
  titleLead: "Enterprise AI Solutions",
  titleAccent: "Built For Your Industry",
  subtitle:
    "Every industry has its own data, regulations and operating realities. We design around " +
    "them instead of adapting a generic template.",
  items: [
    {
      slug: "healthcare",
      label: "Healthcare",
      useCases: [
        "Readmission prediction and early-warning systems",
        "Medical image analysis and diagnostic support",
        "Electronic health record data processing",
        "Remote patient monitoring and alerts",
        "Bed and staffing demand forecasting",
      ],
    },
    {
      slug: "finance",
      label: "Finance & Fintech",
      useCases: [
        "Real-time fraud and anomaly detection",
        "Credit risk and underwriting models",
        "KYC document processing",
        "Regulatory reporting automation",
        "Cash flow and liquidity forecasting",
      ],
    },
    {
      slug: "retail",
      label: "Retail & E-commerce",
      useCases: [
        "Demand and inventory forecasting",
        "Personalised recommendations at scale",
        "Dynamic pricing optimisation",
        "Customer service agents across channels",
        "Returns and fraud analysis",
      ],
    },
    {
      slug: "insurance",
      label: "Insurance",
      useCases: [
        "Claims triage and document extraction",
        "Fraud signal scoring",
        "Policy lapse prediction",
        "Underwriting decision support",
        "Compliance audit trails for model decisions",
      ],
    },
    {
      slug: "supply-chain",
      label: "Supply Chain",
      useCases: [
        "Replenishment and demand planning",
        "Supplier risk monitoring",
        "Procurement agents and spend analytics",
        "Disruption and lead-time alerts",
        "Warehouse throughput optimisation",
      ],
    },
    {
      slug: "transportation",
      label: "Transportation & Logistics",
      useCases: [
        "Route and fuel optimisation",
        "Shipment ETA prediction",
        "Fleet predictive maintenance",
        "Dispatch automation",
        "Driver safety analytics",
      ],
    },
    {
      slug: "legal",
      label: "Legal",
      useCases: [
        "Contract review and clause extraction",
        "Private knowledge search over case files",
        "Matter intake automation",
        "Regulatory change monitoring",
        "Billing and utilisation analytics",
      ],
    },
    {
      slug: "education",
      label: "Education",
      useCases: [
        "At-risk student early warning",
        "AI tutoring and course assistants",
        "Admissions document processing",
        "Enrolment forecasting",
        "Accreditation reporting automation",
      ],
    },
    {
      slug: "real-estate",
      label: "Real Estate",
      useCases: [
        "Valuation and rent prediction",
        "Lead qualification agents",
        "Lease abstraction from documents",
        "Maintenance demand forecasting",
        "Portfolio performance analytics",
      ],
    },
  ],
};

/** The seven-step production-first framework. */
// TODO: client review (all seven steps)
export const framework = {
  eyebrow: "How we deliver enterprise AI",
  titleLead: "The Axiomra",
  titleAccent: "Production-First Framework",
  body:
    "Enterprise AI usually fails on planning, ownership and the path from strategy to " +
    "production, not on technology. Every phase of our framework has clear outputs, named " +
    "owners and checkpoints, so your leadership team always knows where the project stands.",
  steps: [
    {
      title: "Discovery & Business Case",
      body:
        "Workshops with leadership and process owners to agree the problem, the outcome and the " +
        "metric that proves it. Nothing gets built without a business case behind it.",
    },
    {
      title: "Data & Infrastructure Assessment",
      body:
        "We audit data sources, quality, access and existing infrastructure, and flag the gaps " +
        "that would sink a pilot later.",
    },
    {
      title: "Architecture & Governance Design",
      body:
        "System architecture, integration points, security model and governance controls are " +
        "agreed and signed off before development begins.",
    },
    {
      title: "AI Development & Enterprise Integration",
      body:
        "Our engineers build to the approved architecture: model development, fine-tuning, APIs " +
        "and full integration with your ERP, CRM, warehouse and internal platforms, in parallel " +
        "workstreams where that saves time.",
    },
    {
      title: "Testing & Validation",
      body:
        "Structured QA, performance benchmarks on real data volumes, edge-case and security " +
        "testing, and business sign-off against the agreed metric.",
    },
    {
      title: "Deployment & Change Management",
      body:
        "Phased rollout with monitoring in place, role-based training and documentation, so " +
        "adoption does not stall after launch.",
    },
    {
      title: "Monitoring, Support & Scale",
      body:
        `${companyStats.supportDays} days of post-launch support, then MLOps, retraining and ` +
        "expansion to new departments and use cases.",
    },
  ],
  ctaText: "Contact Us Now",
};

/** Tech stack tabs. `slug` matches a vendored logo in assets/logos, else a monogram. */
export const stack = {
  eyebrow: "Our technology stack",
  titleLead: "The Technology Behind",
  titleAccent: "Every System We Build",
  subtitle:
    "Every tool is chosen for production reliability. We do not experiment on your " +
    "infrastructure; we use proven, enterprise-grade technology at every layer.",
  groups: [
    {
      name: "LLMs & Foundation Models",
      tools: [
        { name: "GPT-4o", icon: "Sparkles" },
        { name: "Claude", slug: "anthropic" },
        { name: "Gemini", slug: "googlegemini" },
        { name: "Llama", slug: "meta" },
        { name: "Mistral", slug: "mistralai" },
        { name: "Whisper", icon: "AudioLines" },
      ],
    },
    {
      name: "AI & ML Frameworks",
      tools: [
        { name: "PyTorch", slug: "pytorch" },
        { name: "TensorFlow", slug: "tensorflow" },
        { name: "scikit-learn", slug: "scikitlearn" },
        { name: "LangChain", slug: "langchain" },
        { name: "Hugging Face", slug: "huggingface" },
        { name: "Keras", slug: "keras" },
      ],
    },
    {
      name: "MLOps & LLMOps",
      tools: [
        { name: "MLflow", slug: "mlflow" },
        { name: "Weights & Biases", slug: "weightsandbiases" },
        { name: "Kubernetes", slug: "kubernetes" },
        { name: "Docker", slug: "docker" },
        { name: "Prometheus", slug: "prometheus" },
        { name: "Grafana", slug: "grafana" },
      ],
    },
    {
      name: "Cloud & Infrastructure",
      tools: [
        { name: "AWS", icon: "Cloud" },
        { name: "Azure", icon: "Cloud" },
        { name: "Google Cloud", slug: "googlecloud" },
        { name: "Terraform", slug: "terraform" },
        { name: "NVIDIA", slug: "nvidia" },
        { name: "Cloudflare", slug: "cloudflare" },
      ],
    },
    {
      name: "Data Engineering",
      tools: [
        { name: "Databricks", slug: "databricks" },
        { name: "Apache Spark", slug: "apachespark" },
        { name: "Apache Kafka", slug: "apachekafka" },
        { name: "Airflow", slug: "apacheairflow" },
        { name: "Snowflake", slug: "snowflake" },
        { name: "dbt", slug: "dbt" },
      ],
    },
    {
      name: "Databases & Vector Stores",
      tools: [
        { name: "PostgreSQL", slug: "postgresql" },
        { name: "MongoDB", slug: "mongodb" },
        { name: "Redis", slug: "redis" },
        { name: "Elasticsearch", slug: "elasticsearch" },
        { name: "Qdrant", slug: "qdrant" },
        { name: "pgvector", icon: "Database" },
      ],
    },
  ],
};

export const toolsCta = {
  title: "The Right Tools. The Right Team. Built For Your Stack.",
  subtitle:
    "We work with leading AI frameworks, LLMs and MLOps tools, and more importantly, we know " +
    "how to combine them into systems that hold up in production. Tell us what you want to " +
    "build and we will map out the architecture.",
  buttonText: "Book a Free Technical Discovery Call",
};

// TODO: client review (card copy)
export const whyUs = {
  eyebrow: "Why Axiomra for enterprise AI",
  titleLead: "What Makes Axiomra Different",
  titleAccent: "From Other AI Vendors",
  subtitle:
    "Most AI vendors ship features. We ship systems that run in production, plug into your " +
    "infrastructure and deliver outcomes your leadership can measure.",
  cards: [
    {
      icon: "Rocket",
      title: "Production-first engineering",
      body:
        "A demo and a production system are different things. Every build goes through " +
        "structured QA, performance benchmarks and deployment validation before go-live.",
    },
    {
      icon: "ShieldCheck",
      title: "Governance from day one",
      body:
        "If you operate under ISO 27001, SOC 2, HIPAA, GDPR or financial regulation, those " +
        "requirements shape the design before a line of code is written.",
    },
    {
      icon: "Workflow",
      title: "Cross-enterprise integration",
      body:
        "Enterprise AI does not live in isolation. We design integration from the start so the " +
        "system fits how your organisation already works.",
    },
    {
      icon: "Target",
      title: "Outcome-tied delivery",
      body:
        "We scope around business outcomes, not feature lists, and agree what success looks " +
        "like in your performance reports before we write a proposal.",
    },
    {
      icon: "LifeBuoy",
      title: `${companyStats.supportDays}-day post-launch support`,
      body:
        `${companyStats.supportDays} days of dedicated support after go-live at no extra cost: ` +
        "bug fixes, performance tuning and integration issues in real operating conditions.",
    },
    {
      icon: "RefreshCw",
      title: "Long-term lifecycle partner",
      body:
        "Models drift and regulations change. We build documented, modular systems your team " +
        "or ours can extend without rebuilding from scratch.",
    },
  ],
  stats: [
    { value: companyStats.projects, label: "Projects delivered" },
    { value: companyStats.experts, label: "AI engineers" },
    { value: companyStats.countries, label: "Countries served" },
    { value: companyStats.partnerships, label: "Partnerships" },
  ],
};

export const testimonialsHeading = {
  titleLead: "What Leaders Say About Working With Axiomra",
  titleAccent: "",
};

export const finalCta = {
  title: "Ready To Build Enterprise AI That Works In Production?",
  subtitle:
    "Most enterprise AI stalls because the system was never built for how the organisation " +
    "actually operates. We build AI that is governed, integrated and tied to outcomes your " +
    "leadership can measure.",
  buttonText: "Book an Enterprise AI Assessment",
  note: "One call. No pitch deck. A clear picture of what is possible and what it takes.",
};

export const faqs = [
  {
    q: "What is enterprise AI development?",
    a:
      "Enterprise AI development is designing, building and operating AI systems for large " +
      "organisations: systems that integrate with existing platforms, meet security and " +
      "compliance requirements, scale across departments and are measured against business " +
      "outcomes.",
  },
  {
    q: "How is enterprise AI different from custom AI development?",
    a:
      "Custom AI solves a specific problem, often for a single team. Enterprise AI adds the " +
      "layers large organisations need: governance, audit trails, role-based access, " +
      "integration with ERP and CRM systems, change management and long-term operations.",
  },
  {
    // TODO: client review (timeline ranges)
    q: "How long does an enterprise AI project take?",
    a:
      "A scoped assessment and roadmap usually takes 2 to 4 weeks. A first production system " +
      "typically takes 3 to 6 months, delivered in phases so you see working software early " +
      "rather than at the end.",
  },
  {
    q: "How do you handle data security and compliance?",
    a:
      "Security is part of the architecture: least-privilege access, encryption in transit and " +
      "at rest, audit logging, and data kept inside your environment where required. We design " +
      "to the frameworks you operate under, such as GDPR, HIPAA, SOC 2 or the EU AI Act, and " +
      "sign NDAs before any data access.",
  },
  {
    q: "Can you integrate AI with our existing tools and platforms?",
    a:
      "Yes. Integration is planned from the start. We connect to ERPs, CRMs, data warehouses, " +
      "internal APIs and legacy systems so AI outputs appear inside the tools your teams " +
      "already use.",
  },
  {
    q: "Do you work with organisations that have no AI infrastructure yet?",
    a:
      "Yes. Many engagements start with a data and infrastructure assessment, then build the " +
      "foundation (pipelines, storage, access controls) alongside the first use case.",
  },
  {
    q: "What happens after the AI system is deployed?",
    a:
      `Every system comes with ${companyStats.supportDays} days of post-launch support. After ` +
      "that we offer MLOps and LLMOps: monitoring, drift detection, retraining and expansion " +
      "to new use cases.",
  },
  {
    q: "Can you build AI that runs on our private cloud or on-premise?",
    a:
      "Yes. We deploy to AWS, Azure, Google Cloud, private cloud and on-premise environments, " +
      "including open-weight models hosted inside your own network when data cannot leave it.",
  },
];
