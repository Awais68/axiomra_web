/**
 * Copy and imagery for the Finance industry page (/industries/finance).
 *
 * Everything the page renders comes from here, so a copy change never touches
 * a component. Section order in the page mirrors this file.
 */

import { caseStudyPath } from "../routes.constants";
import heroImg from "../assets/industries/finance/hero.webp";
import introImg from "../assets/industries/finance/intro.webp";

import svcAccountingImg from "../assets/industries/finance/svc-accounting.webp";
import svcWealthImg from "../assets/industries/finance/svc-wealth.webp";
import svcRiskImg from "../assets/industries/finance/svc-risk.webp";
import svcTaxImg from "../assets/industries/finance/svc-tax.webp";
import svcAutomationImg from "../assets/industries/finance/svc-automation.webp";
import svcPaymentsImg from "../assets/industries/finance/svc-payments.webp";
import svcEmoneyImg from "../assets/industries/finance/svc-emoney.webp";
import svcInvestmentImg from "../assets/industries/finance/svc-investment.webp";
import svcWalletImg from "../assets/industries/finance/svc-wallet.webp";
import svcLendingImg from "../assets/industries/finance/svc-lending.webp";

import midCtaBgImg from "../assets/industries/finance/midcta-bg.webp";

import solConsultingImg from "../assets/industries/finance/sol-consulting.webp";
import solDevelopmentImg from "../assets/industries/finance/sol-development.webp";
import solAnalyticsImg from "../assets/industries/finance/sol-analytics.webp";
import solWorkflowImg from "../assets/industries/finance/sol-workflow.webp";

import stkAssetImg from "../assets/industries/finance/stk-asset.webp";
import stkAdminImg from "../assets/industries/finance/stk-admin.webp";
import stkFoundersImg from "../assets/industries/finance/stk-founders.webp";

import subBankingImg from "../assets/industries/finance/sub-banking.webp";
import subCorporateImg from "../assets/industries/finance/sub-corporate.webp";
import subInsuranceImg from "../assets/industries/finance/sub-insurance.webp";
import subFintechImg from "../assets/industries/finance/sub-fintech.webp";
import subWealthImg from "../assets/industries/finance/sub-wealth.webp";
import subCapitalImg from "../assets/industries/finance/sub-capital.webp";
import subPaymentsImg from "../assets/industries/finance/sub-payments.webp";
import subAccountingImg from "../assets/industries/finance/sub-accounting.webp";
import subLendingImg from "../assets/industries/finance/sub-lending.webp";
import subCryptoImg from "../assets/industries/finance/sub-crypto.webp";

import textureBgImg from "../assets/industries/finance/texture-bg.webp";
import buildVisualImg from "../assets/industries/finance/build-visual.webp";

import blog1Img from "../assets/industries/finance/blog-1.webp";
import blog2Img from "../assets/industries/finance/blog-2.webp";
import blog3Img from "../assets/industries/finance/blog-3.webp";
import finalCtaBgImg from "../assets/industries/finance/final-cta.webp";

export const FINANCE_SLUG = "finance";

export const hero = {
  eyebrow: "AI for the finance industry",
  titleLead: "AI & Data Solutions for",
  titleAccent: "Finance, Risk and Operations",
  titleTail: "",
  body:
    "Axiomra helps banks, fintechs and financial teams turn complex data into clearer decisions, more efficient workflows and stronger operational visibility. Our services can support financial analytics, intelligent automation, risk modelling, document intelligence and governed AI adoption, working with your existing systems and controls rather than replacing them.",
  ctaText: "Explore Your Finance Data & AI Use Case",
  image: heroImg,
  alt: "A humanoid robot lit in blue against a digital network",
  reviews: { platform: "Clutch", rating: 5, count: 12 },
};

export const intro = {
  titleLead: "What Financial Firms Get From",
  titleAccent: "Data & AI Services",
  paragraphs: [
    "Axiomra is a Data & AI partner for banks, fintechs and financial teams. We help you find where analytics, intelligent automation and risk models can improve decisions, then deliver them inside the systems and controls you already run.",
    "We use advanced analytics, automation, predictive modelling and document intelligence to improve accuracy, reduce fraud and make risk easier to see. Each engagement starts with a consultative assessment, so the work aligns with your commercial goals, your data readiness and the market conditions you actually trade in.",
  ],
  ctaText: "Book a Free Tech Consultation",
  image: introImg,
  alt: "A finance lead reviewing performance figures on a tablet",
};

/**
 * The signal band: a decorative editorial break between the positioning copy
 * and the sourced statistics. It is the one place on the page where copy is
 * flowed around shapes rather than set in a straight column, so the lines are
 * deliberately short, because the effect has to survive a re-flow, and long-form
 * prose in a wrapped measure does not.
 */
export const signal = {
  eyebrow: "Signal over noise",
  titleLead: "A Financial Decision Is Only As Good As The",
  titleAccent: "Signal Behind It",
  coin: { value: "<40ms", caption: "Decision budget per transaction" },
  lead:
    "Every payment, claim and trade arrives as a question your systems have milliseconds to answer. Score it, clear it, or hold it for a human. Get that budget wrong and you are choosing between a fraud loss and an abandoned checkout.",
  wedge: { value: "24/7", caption: "Continuous controls" },
  aside:
    "So we focus on the answer, not the report. Models score within your existing transaction flow, controls run continuously rather than at quarter end, and every model decision leaves an auditable trail your risk team can follow.",
  rails: [
    { value: "Ingest", caption: "Streamed, not batched" },
    { value: "Decide", caption: "Scored in the request path" },
  ],
  manifesto:
    "Between the data coming in and the decision going out sits the part nobody sees and everybody depends on: the data that reconciles, the model that explains itself, and the control that holds when volume triples overnight.",
};

export const impact = {
  titleLead: "The Role Of AI In",
  titleAccent: "Modern Financial Operations",
  body:
    "Data & AI are changing how banks, fintechs and financial institutions manage transactions, assess risk and report to regulators. By automating high-value processes and bringing real-time data into everyday decisions, finance teams move faster with clearer visibility of risk.",
  stats: [
    {
      value: "85%",
      label: "of financial services firms were actively applying AI in fraud detection, IT operations and risk modelling in 2025.",
      source: "PwC, Global AI in Finance Report 2025",
    },
    {
      value: "75%",
      label: "of banks with assets over US$100 billion expect to have fully integrated AI strategies in place by 2025.",
      source: "Deloitte, Financial Services AI Outlook 2025",
    },
    {
      value: "51%",
      label: "of financial services firms in 2025 are using AI or machine learning for fraud detection and cybersecurity frameworks.",
      source: "McKinsey, AI in Banking Survey 2025",
    },
  ],
};

/**
 * The challenge rail. Each entry is a barrier finance teams hit, and the
 * Data & AI approach we use to remove it.
 */
export const challenges = {
  eyebrow: "Overcoming key barriers in financial operations",
  titleLead: "Top Challenges In Modern",
  titleAccent: "Financial Operations",
  items: [
    {
      title: "Compliance Complexity and Regulatory Pressure",
      body:
        "Constantly evolving regulation makes it difficult for financial teams to maintain compliance across jurisdictions. Manual checks and reporting often lead to missed updates or audit delays. We build AI-assisted monitoring and automated reporting data into your existing workflow, reducing manual checks so your compliance team works from current evidence rather than reconstructing it at quarter end.",
    },
    {
      title: "Fraud and Transaction Risk",
      body:
        "Fraud patterns change faster than rule sets can be rewritten, and a static rules engine either misses novel attacks or drowns the team in false positives. We deploy behavioural models that score transactions in real time, learn from analyst decisions and keep the review queue small enough that the genuine cases actually get investigated.",
    },
    {
      title: "Inefficient Customer Onboarding",
      body:
        "KYC and AML checks spread across disconnected vendors turn a five-minute sign-up into a five-day wait, and most of the drop-off happens before the first deposit. We apply document intelligence and automated checks to identity, sanctions and document verification, running them in parallel and escalating only the cases that genuinely need a human.",
      // Optional: links the panel to a long-form case study on the same topic.
      caseStudy: caseStudyPath("fintech-kyc-document-processing-onboarding-automation"),
    },
    {
      title: "Legacy System Limitations",
      body:
        "Core systems that predate the API era lock data away from real-time analysis, and a full replacement is rarely fundable. We connect data from the core into a governed analytics layer, so models and reporting can use it in near real time while the system of record keeps running untouched.",
    },
    {
      title: "Data Quality and Fragmentation",
      body:
        "When the same customer exists three times across four systems, every downstream number is a negotiation. We build the governed data layer: entity resolution, lineage, reconciliation controls and quality gates, so risk, finance and regulatory reporting all read from one set of figures.",
    },
    {
      title: "Manual Financial Reconciliation",
      body:
        "Month-end reconciliation consumes senior analyst time on matching rather than explaining. We automate the matching engine and surface only genuine breaks with their supporting evidence attached, moving close from a multi-week exercise to a supervised daily process.",
    },
  ],
};

/**
 * Ten Data & AI solution areas. Each is a card with a photo and a description.
 */
export const services = {
  eyebrow: "What Data & AI solutions do we offer?",
  titleLead: "Data & AI Solutions",
  titleAccent: "For Modern Finance Challenges",
  body:
    "Financial organisations need more from their data than transaction records. We apply analytics, automation, risk models and document intelligence to the industry's toughest challenges, from data silos to manual reporting, working with the systems your teams already use.",
  items: [
    {
      title: "Accounting & Financial Close Automation",
      body:
        "Manual bookkeeping, data duplication and reconciliation delays slow down financial operations. We automate data entry, reporting and expense categorisation with AI models that work alongside your accounting system. The result is faster closing cycles, fewer human errors and more accurate financial forecasting.",
      image: svcAccountingImg,
      alt: "An accountant working through financial statements with a calculator",
    },
    {
      title: "Wealth Management Analytics",
      body:
        "Managing diverse portfolios requires continuous monitoring and smart analytics. Our AI and analytics for wealth management help advisors deliver personalised recommendations, automate client reporting and strengthen long-term relationships through data intelligence.",
      image: svcWealthImg,
      alt: "Hands stacking gold coins into rising columns",
      // Optional: links the card to a long-form case study on the same topic.
      caseStudy: caseStudyPath("fintech-autonomous-financial-advisor-ai-agent"),
    },
    {
      title: "Risk Modelling & Monitoring",
      body:
        "Traditional risk frameworks struggle to keep pace with complex financial data. We build AI risk models that monitor exposures in real time, flag anomalies and predict potential threats. This proactive approach strengthens fraud prevention and helps financial institutions maintain operational integrity.",
      image: svcRiskImg,
      alt: "Wooden blocks spelling the word risk stacked on a desk",
      caseStudy: caseStudyPath("fintech-ai-fraud-detection-anomalous-transactions"),
    },
    {
      title: "Tax Data & Document Intelligence",
      body:
        "Tax computation errors and delayed submissions lead to costly penalties. We apply document intelligence and automated checks that extract tax data, detect inconsistencies and flag changes in tax rules for review. This means better accuracy, faster processing and fewer surprises at filing time.",
      image: svcTaxImg,
      alt: "A hand completing a tax return form beside a calculator",
      caseStudy: caseStudyPath("fintech-regulatory-document-analysis-compliance-nlp"),
    },
    {
      title: "Process Automation for Financial Workflows",
      body:
        "Manual workflows consume valuable time and increase the risk of human oversight. Through AI-based automation, we optimise processes like reconciliation, loan approvals and compliance checks. The result is better speed, scalability and operational resilience across financial functions.",
      image: svcAutomationImg,
      alt: "A trading desk of monitors showing live market charts",
    },
    {
      title: "Payment Fraud & Routing Analytics",
      body:
        "Inconsistent payment flows often cause transaction delays and lost revenue. We add AI fraud scoring and routing analytics to your existing payment stack, helping payments clear faster, more safely and more reliably.",
      image: svcPaymentsImg,
      alt: "A contactless card payment being taken on a terminal",
    },
    {
      title: "eMoney Transaction Analytics",
      body:
        "As digital currencies and e-payments continue to grow, institutions need clear visibility of digital money flows. We deliver analytics for multi-currency transactions, automated monitoring and real-time reporting for both enterprises and fintech start-ups.",
      image: svcEmoneyImg,
      alt: "A digital wallet interface open on a smartphone",
    },
    {
      title: "Investment Analytics & Insights",
      body:
        "Investment teams often struggle to get real-time analytics or personalised insights. Our machine learning models surface trends, support portfolio decisions and help investors make data-driven decisions with confidence.",
      image: svcInvestmentImg,
      alt: "An investor comparing charts across a tablet and laptop",
    },
    {
      title: "Digital Wallet Fraud Monitoring",
      body:
        "Security and trust remain critical for e-wallet providers. We add AI-driven fraud monitoring and behavioural analytics to your existing wallet, spotting account takeover and unusual activity early so users get a secure, uninterrupted experience.",
      image: svcWalletImg,
      alt: "A smartphone wallet app beside a payment card",
    },
    {
      title: "Credit Scoring & Lending Decisioning",
      body:
        "Traditional lending decisions are slow and prone to bias. We build AI credit scoring and risk assessment models that support loan approvals using transparent, explainable features. This improves decision accuracy and accelerates customer onboarding.",
      image: svcLendingImg,
      alt: "A lending adviser reviewing a loan application with a client",
      caseStudy: caseStudyPath("fintech-machine-learning-credit-scoring"),
    },
  ],
};

export const midCta = {
  eyebrow: "Ready to level up?",
  title: "Strengthen Your Financial Operations With AI-Powered Precision",
  body:
    "Partner with us to put analytics, automation and risk models to work where they drive efficiency and growth. Schedule a consultation with our experts to explore Data & AI use cases built around your data, not a template.",
  ctaText: "Get in Touch",
  background: midCtaBgImg,
};

/**
 * The services fold: four alternating photo/copy rows.
 */
export const solutions = {
  eyebrow: "Where do we help finance teams with Data & AI?",
  titleLead: "Our Data & AI Services",
  titleAccent: "Designed For Modern Finance",
  body:
    "We combine finance domain knowledge with analytics, automation and AI to help financial organisations improve operational efficiency, reduce risk and make smarter decisions, working within the systems and controls of banks, fintechs, insurers and corporate finance teams.",
  items: [
    {
      title: "AI Consulting & Strategy for Finance",
      body:
        "We work closely with stakeholders to identify automation opportunities, optimise workflows and design AI strategies aligned with business objectives. Using AI insights, we help organisations improve decision-making and cut operational waste, and we will tell you plainly which processes are not worth automating yet.",
      image: solConsultingImg,
      alt: "An adviser walking clients through a financial plan",
    },
    {
      title: "Risk Modelling & Document Intelligence",
      body:
        "We build machine learning models for credit, fraud and operational risk, and apply document intelligence to statements, applications and filings, tackling fragmented datasets and manual review. Models are documented, explainable and delivered in increments your risk team can validate.",
      image: solDevelopmentImg,
      alt: "An engineer working at a laptop beside server racks",
    },
    {
      title: "Data Analytics & Business Intelligence",
      body:
        "We turn complex financial data into decisions you can defend. Real-time dashboards, predictive analytics and reporting frameworks support better investment, risk and operational decisions, all reading from one governed set of figures.",
      image: solAnalyticsImg,
      alt: "A laptop showing a financial analytics dashboard",
    },
    {
      title: "Intelligent Automation & Workflow Optimisation",
      body:
        "Through AI-powered automation, we shorten repetitive processes like reconciliation, approvals and reporting. This reduces errors, accelerates workflows and improves overall productivity across financial operations, with a full audit trail behind every automated decision.",
      image: solWorkflowImg,
      alt: "A robotic hand reaching into a connected data network",
    },
  ],
};

export const stakeholders = {
  eyebrow: "Which finance teams do we support?",
  titleLead: "We Deliver Data & AI Solutions",
  titleAccent: "For The Following Clients",
  items: [
    {
      title: "Asset Managers and Investment Consultants",
      body:
        "Portfolio analytics, client reporting and rebalancing signals in one view, so advice is built on live positions rather than last month's extract.",
      image: stkAssetImg,
      alt: "An asset manager reviewing positions on a tablet",
    },
    {
      title: "Financial Service Administrators and Custodians",
      body:
        "Reconciliation, corporate actions and regulatory reporting automated end to end, with exceptions routed to the person who can actually clear them.",
      image: stkAdminImg,
      alt: "Administrators reviewing custody documentation together",
    },
    {
      title: "Founders and Executives",
      body:
        "A single view of revenue, runway and risk that stands up in a board pack, refreshed continuously instead of assembled the night before.",
      image: stkFoundersImg,
      alt: "A senior executive in a modern office",
    },
  ],
};

/**
 * The marquee rail. Each sub-industry card shows its photo and label at rest,
 * and reveals the detail copy and capability list on hover or focus.
 */
export const subIndustries = {
  eyebrow: "Which finance sector do we serve?",
  titleLead: "Data & AI Solutions Across",
  titleAccent: "Key Finance Sub-Industries",
  body:
    "Every part of finance carries its own regulator, its own data model and its own definition of an acceptable failure. Hover any card to see where Data & AI helps.",
  items: [
    {
      label: "Banking",
      body: "Customer analytics, real-time transaction monitoring and onboarding document intelligence, working alongside a core you are not going to replace this year.",
      points: ["Core data integration", "Real-time transaction monitoring", "Onboarding document checks"],
      image: subBankingImg,
      alt: "The facade of a historic bank building",
    },
    {
      label: "Corporate Finance",
      body: "Treasury visibility, cash forecasting and intercompany reconciliation joined up, so group positions are known daily rather than monthly.",
      points: ["Cash flow forecasting", "Treasury dashboards", "Intercompany matching"],
      image: subCorporateImg,
      alt: "Corporate finance towers in a city business district",
    },
    {
      label: "Insurance",
      body: "Claims triage, underwriting models and fraud scoring, with the decision rationale recorded so your reviewers can follow it.",
      points: ["Automated claims triage", "Underwriting models", "Explainable decisioning"],
      image: subInsuranceImg,
      alt: "An insurance adviser presenting a policy document",
    },
    {
      label: "Fintech",
      body: "Fraud scoring, customer analytics and regulatory reporting data that keep pace with a fast-moving product team.",
      points: ["Fraud scoring", "Customer analytics", "Regulatory reporting data"],
      image: subFintechImg,
      alt: "A customer completing a payment on a smartphone",
    },
    {
      label: "Wealth Management",
      body: "Goal-based planning, portfolio analytics and personalised client reporting, generated per household rather than per template.",
      points: ["Goal-based planning", "Portfolio analytics", "Automated client reporting"],
      image: subWealthImg,
      alt: "Gold bars stacked on currency notes",
    },
    {
      label: "Capital Markets",
      body: "Low-latency market data, execution analytics and post-trade surveillance for desks where a second of staleness is a loss.",
      points: ["Market data pipelines", "Execution analytics", "Trade surveillance"],
      image: subCapitalImg,
      alt: "A digital trading and analysis interface",
    },
    {
      label: "Payments",
      body: "Authorisation analytics, routing optimisation and chargeback evidence automation, tuned on your own authorisation data rather than a vendor benchmark.",
      points: ["Authorisation analytics", "Routing optimisation", "Chargeback evidence automation"],
      image: subPaymentsImg,
      alt: "A card payment being completed at a retail checkout",
    },
    {
      label: "Accounting & Audit",
      body: "Automated matching, anomaly detection and evidence collection, so the close is a supervised process instead of a fortnight of spreadsheets.",
      points: ["Automated matching", "Anomaly detection", "Audit evidence trails"],
      image: subAccountingImg,
      alt: "Two accountants reviewing figures on a laptop",
    },
    {
      label: "Lending & Credit",
      body: "Credit decisioning with transparent features, affordability modelling and collections prioritisation designed to support a fairness review.",
      points: ["Transparent credit scoring", "Affordability modelling", "Collections prioritisation"],
      image: subLendingImg,
      alt: "A calculator and keys resting on lending paperwork",
    },
    {
      label: "Digital Assets",
      body: "On-chain analytics, transaction risk scoring and travel-rule data checks for institutions moving into tokenised and crypto products.",
      points: ["On-chain analytics", "Transaction risk scoring", "Travel-rule data checks"],
      image: subCryptoImg,
      alt: "A gold bitcoin among a pile of mixed coins",
    },
  ],
};

export const benefits = {
  eyebrow: "What can you optimise with Data & AI?",
  titleLead: "Key Benefits Of Data & AI",
  titleAccent: "Solutions For Finance",
  items: [
    {
      title: "Risk Assessment",
      body:
        "AI helps financial institutions analyse large datasets to identify potential risks faster and more accurately. This reduces human error and supports better decision-making in lending and investment.",
    },
    {
      title: "Fraud Detection",
      body:
        "AI systems track transaction patterns in real time to detect suspicious activity. This helps prevent fraud before it affects customers or the wider business.",
    },
    {
      title: "Process Automation",
      body:
        "AI automates repetitive financial tasks like data entry, reporting and reconciliation. This saves time, lowers costs and improves accuracy across workflows.",
    },
    {
      title: "Customer Insights",
      body:
        "By analysing spending habits and preferences, AI provides personalised financial advice and product recommendations. This improves customer engagement and satisfaction.",
    },
    {
      title: "Predictive Analytics",
      body:
        "AI models forecast market trends and asset performance using past and real-time data. This helps investors and institutions make informed financial decisions.",
    },
    {
      title: "Regulatory Reporting",
      body:
        "AI helps track changes in financial regulation and assemble reporting data. This reduces manual effort and the risk of errors slipping into submissions.",
    },
  ],
};

export const build = {
  title: "Schedule a Consultation Call",
  body:
    "Discover how Data & AI can strengthen your operations and speed up growth. Speak with our experts to explore which analytics, automation or risk use cases would pay back first for your business.",
  ctaText: "Discuss Your Finance Data & AI Priorities",
  texture: textureBgImg,
  image: buildVisualImg,
  alt: "A golden piggy bank resting on financial statements",
};

export const techStrip = {
  eyebrow: "Data & AI technologies we work with",
  titleLead: "Expertise In",
  titleAccent: "Data & AI Technologies",
  body:
    "The production-grade toolchain behind our analytics, models and data pipelines for finance teams. Pick a layer to see what it is made of.",
  ctaText: "View all tech stack",
  tabs: [
    {
      id: "ai",
      label: "Artificial Intelligence",
      items: [
        "GPT-4o", "Claude", "Gemini", "Llama 3", "Mistral", "Groq", "PaLM", "XGBoost", "LightGBM",
        "scikit-learn", "PyTorch", "TensorFlow", "SHAP", "Guardrails", "Vertex AI",
        "OpenAI Embeddings", "LangChain", "Prophet",
      ],
    },
    {
      id: "backend",
      label: "Data Engineering & Databases",
      items: [
        "Node.js", "NestJS", "FastAPI", "Django", "Go", "Java Spring", "GraphQL", "PostgreSQL",
        "MongoDB", "Redis", "Kafka", "Airflow", "dbt", "Snowflake", "ClickHouse", "TimescaleDB",
      ],
    },
    {
      id: "frontend",
      label: "Dashboards & Visualisation",
      items: [
        "React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "D3.js", "TradingView Charts",
        "Vite", "Radix UI",
      ],
    },
    {
      id: "cloud",
      label: "Cloud",
      items: ["AWS", "Google Cloud", "Azure", "Kubernetes", "Cloudflare", "Vault", "Terraform", "Snowflake"],
    },
    {
      id: "fintech",
      label: "Financial Data Sources",
      items: ["Plaid", "Stripe", "Adyen", "Marqeta", "Modulr", "Open Banking APIs", "SWIFT", "ISO 20022", "FIX Protocol", "Bloomberg API"],
    },
    {
      id: "security",
      label: "Governance & Security",
      note:
        "Practices we build into our data and AI work. Which regulatory standards apply to your project is confirmed with your own compliance team before work starts.",
      items: ["Data governance", "Data lineage", "Model monitoring", "Explainability reporting", "PII masking", "Role-based access", "Audit trails", "Key management"],
    },
    {
      id: "design",
      label: "Dashboard & Report Design",
      items: ["Figma", "Design Tokens", "Prototyping", "WCAG 2.2 Audits", "Usability Testing"],
    },
  ],
};

export const businessTypes = {
  eyebrow: "Who do we work with?",
  titleLead: "Explore The Range Of",
  titleAccent: "Finance Businesses We Support",
  body:
    "We bring Data & AI to finance teams at every stage. Whether you are launching a licensed product or working around a core that predates the API era, we help you turn your data into analytics, automation and risk models your team can actually run.",
  rows: [
    {
      label: "Start-ups",
      body: "We help fintech founders put data to work early: fraud scoring, onboarding document checks and the reporting data a regulator will ask for, set up from day one rather than after the first inspection.",
    },
    {
      label: "Scale-ups",
      body: "Growth exposes every manual control. We help scale-ups automate reconciliation, risk monitoring and compliance reporting, moving from spreadsheet operations to automated controls that hold up at the next order of magnitude.",
    },
    {
      label: "Small and medium-sized businesses",
      body: "Finance teams in SMBs carry enterprise obligations with a fraction of the headcount. Our automation and analytics tooling closes that gap without an enterprise budget or a year-long rollout.",
    },
    {
      label: "Enterprises",
      body: "We partner with banks, insurers and asset managers on governed data layers, core data integration and AI models designed with security, model risk and procurement review in mind before they reach production.",
    },
  ],
};

export const testimonials = {
  eyebrow: "Why is it worth working with us?",
  titleLead: "What Finance Teams Say",
  titleAccent: "About Working With Us",
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
        "They have been a trusted development partner for several months with their fully developed team and focus on AI. They helped us move forward and achieve our goal.",
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
  titleAccent: "Data & AI Projects",
  body:
    "Projects delivered for banks, fintechs and financial enterprises, and what each one changed.",
  ctaText: "Check Out Our Full Portfolio",
};

export const partner = {
  eyebrow: "Why choose Axiomra?",
  titleLead: "Why Partner With Axiomra For",
  titleAccent: "Data & AI In Finance",
  cards: [
    {
      icon: "Target",
      title: "We Solve Problems, Not Ship Features",
      body:
        "We do not build tools for the sake of building them. Every solution is designed to solve a specific challenge, delivering tangible results and long-term value for your business rather than another dashboard nobody opens.",
    },
    {
      icon: "Layers",
      title: "Tailored To Your Workflows And Systems",
      body:
        "Our models and data pipelines are built around your workflows, your controls and your core systems. By working with the systems you already run, we keep integration clean and operations efficient rather than forcing a migration nobody asked for.",
    },
    {
      icon: "ShieldCheck",
      title: "Support That Does Not End At Delivery",
      body:
        "Our commitment does not end at delivery. We provide 60 days of technical support and team training to ensure smooth adoption of new solutions, with experience across banking, fintech, insurance, corporate finance and asset management.",
    },
  ],
  stats: [
    { value: "205+", label: "Projects Delivered" },
    { value: "5+", label: "Valuable Partnerships" },
    { value: "20+", label: "Countries Served" },
    { value: "20+", label: "Tech Experts" },
  ],
};

export const blogs = {
  eyebrow: "What can our expertise teach you?",
  title: "Explore Insights On AI And Financial Innovation",
  body:
    "Explore our knowledge hub to stay updated on the latest financial technology innovations, AI adoption and best practices in software development for finance.",
  posts: [
    {
      title: "AI In Banking And Finance: Where It Actually Pays Back",
      tag: "Banking",
      image: blog1Img,
      alt: "Glowing blue digital code filling a dark screen",
    },
    {
      title: "Top 13 Financial Software Development Companies In 2026",
      tag: "Market",
      image: blog2Img,
      alt: "An abstract blue and teal circuit pattern",
    },
    {
      title: "Legacy Modernisation In Banking: An Eight-Pillar Playbook For CTOs",
      tag: "Architecture",
      image: blog3Img,
      alt: "A futuristic metallic hexagonal lattice",
    },
  ],
};

export const faqs = [
  {
    q: "How can Data & AI improve banking and fintech operations?",
    a: "By moving the slow parts of the operation off human hands: transaction monitoring, reconciliation, document verification and regulatory reporting. The gain is not only speed. When a control runs continuously rather than at month end, the exception surfaces while it is still cheap to fix.",
  },
  {
    q: "Can AI help reduce fraud and chargebacks?",
    a: "Yes. Behavioural scoring on live transaction data catches patterns a static rule set misses, and feeding analyst decisions back into the model keeps the false-positive rate from swallowing the review team. On chargebacks, the win is usually evidence automation: assembling the response pack automatically rather than reconstructing it by hand.",
  },
  {
    q: "What solutions exist to reduce customer onboarding friction?",
    a: "Orchestration. Identity, sanctions screening, document verification and affordability checks run in parallel against multiple providers, with automatic fallback when one fails, and only genuinely ambiguous cases escalate to manual review. Most of the multi-day wait in a typical onboarding flow is queueing, not checking.",
  },
  {
    q: "How can accounting processes be automated for SMEs?",
    a: "Bank feed ingestion, rules-based categorisation with a model handling the long tail, automated matching against invoices, and exception queues for what genuinely does not tie out. For most SME finance functions that removes the bulk of the manual work without replacing the accounting package.",
  },
  {
    q: "Can AI help detect IT failures and outages earlier?",
    a: "Yes, mostly by making problems visible sooner. Anomaly detection on system and transaction telemetry flags a degradation before it becomes an incident and shortens the time to diagnose. The structural fixes stay with your engineering team; we build the monitoring models and data that support them.",
  },
  {
    q: "How can data quality issues be resolved in finance systems?",
    a: "With entity resolution across source systems, enforced lineage, reconciliation controls between the ledger and every downstream store, and quality gates that refuse to publish a broken figure. The hard part is governance, not tooling, so we design the ownership model alongside the pipeline.",
  },
  {
    q: "Can payment reconciliation be automated for better visibility?",
    a: "Yes, and it is one of the highest-return automations in finance. An automated matching engine handles the clean majority, and the team works a short, evidenced exception queue instead of a spreadsheet. Daily reconciliation then becomes realistic rather than aspirational.",
  },
  {
    q: "How does AI support cybersecurity in finance?",
    a: "Zero-trust networking, hardware-backed key management and least-privilege access remain the foundation your security team owns. AI contributes on detection: behavioural analytics on access and transaction telemetry, flagging what does not fit the established pattern.",
  },
  {
    q: "Can Data & AI help a fintech scale its operations?",
    a: "Usually, yes. Automating manual reviews, reconciliation and reporting with models and governed data pipelines lets operations grow without headcount growing at the same rate. We will tell you honestly when the constraint sits in the core platform rather than the data.",
  },
  {
    q: "How much does a finance Data & AI project cost?",
    a: "It depends on the use case, the state of your data and how many source systems need connecting. A scoped pilot is the fastest route to a real number. Book a free session and we will size it honestly, including what we would not recommend automating yet.",
  },
];

export const finalCta = {
  title: "Get Your Free Finance Data & AI Consultation",
  subtitle:
    "Talk to our experts and discover how analytics, automation and risk models can simplify your operations, reduce risk and accelerate growth.",
  buttonText: "Get your project done!",
  background: finalCtaBgImg,
};
