import { SERVICES_BASE_PATH, BOT_AUTOMATION_SLUG } from "../routes.constants";
import { companyStats } from "./companyStats";

import website800 from "../assets/bot-automation/svc-website-800.webp";
import website1400 from "../assets/bot-automation/svc-website-1400.webp";
import data800 from "../assets/bot-automation/svc-data-800.webp";
import data1400 from "../assets/bot-automation/svc-data-1400.webp";
import payables800 from "../assets/bot-automation/svc-payables-800.webp";
import payables1400 from "../assets/bot-automation/svc-payables-1400.webp";
import scraping800 from "../assets/bot-automation/svc-scraping-800.webp";
import scraping1400 from "../assets/bot-automation/svc-scraping-1400.webp";
import hr800 from "../assets/bot-automation/svc-hr-800.webp";
import hr1400 from "../assets/bot-automation/svc-hr-1400.webp";
import support800 from "../assets/bot-automation/svc-support-800.webp";
import support1400 from "../assets/bot-automation/svc-support-1400.webp";
import rpa800 from "../assets/bot-automation/svc-rpa-800.webp";
import rpa1400 from "../assets/bot-automation/svc-rpa-1400.webp";
import custom800 from "../assets/bot-automation/svc-custom-800.webp";
import custom1400 from "../assets/bot-automation/svc-custom-1400.webp";
import gains800 from "../assets/bot-automation/gains-800.webp";
import gains1400 from "../assets/bot-automation/gains-1400.webp";

import healthcare from "../assets/industries/healthcare.webp";
import education from "../assets/industries/education.webp";
import retail from "../assets/industries/retail.webp";
import realEstate from "../assets/industries/real-estate.webp";
import finance from "../assets/industries/finance.webp";
import supplyChain from "../assets/industries/supply-chain.webp";
import insurance from "../assets/industries/insurance.webp";
import legal from "../assets/industries/legal.webp";

export const BOT_AUTOMATION_PATH = `${SERVICES_BASE_PATH}/${BOT_AUTOMATION_SLUG}`;

const srcSet = (small, large) => `${small} 800w, ${large} 1400w`;

export const hero = {
  eyebrow: "Bot Automation Services",
  titleLead: "Custom Bots That Take the",
  titleAccent: "Repetitive Work Off Your Team",
  body: "We build automation bots that run around the clock, plug into the systems you already use, and handle the manual steps your people should not be spending their day on. No rip-and-replace, and no disruption to live operations.",
  ctaText: "Request a free consultation",
  secondaryCtaText: "See what we automate",
  proof: [
    "You own the code and IP",
    "Fixed price, scoped before kickoff",
    `${companyStats.supportDays}-day post-launch support`,
  ],
  // The run log the hero's glass panel plays through on a loop.
  runs: [
    { task: "Invoice #INV-2291 matched to PO", system: "NetSuite" },
    { task: "42 leads enriched and routed", system: "HubSpot" },
    { task: "Competitor prices refreshed", system: "Web" },
    { task: "New hire accounts provisioned", system: "Google Workspace" },
    { task: "Order status reply sent", system: "Zendesk" },
  ],
};

export const sectionNav = [
  { label: "Services", href: "#ba-services" },
  { label: "Our Work", href: "#ba-work" },
  { label: "Industries", href: "#ba-industries" },
  { label: "Tech Stack", href: "#ba-stack" },
  { label: "Approach", href: "#ba-process" },
  { label: "Testimonials", href: "#ba-testimonials" },
  { label: "Why Us", href: "#ba-why" },
  { label: "Contact", href: "#contact" },
];

/*
 * The eight bot rows. `shape` picks how the row's copy meets its visual:
 *   circle   - a floated circle (shape-outside: circle) the copy wraps around
 *   polygon  - a coloured polygon whose clip-path and shape-outside match
 *   inverted - the copy sits inside the cut-out of an inverted polygon
 *   organic  - the copy wraps an external SVG blob, with an inverted clipPath
 *   plain    - photo and glass card side by side; `clip` shapes the photo
 */
export const services = {
  eyebrow: "What we build",
  titleLead: "Bot Automation Services",
  titleAccent: "Built Around Your Workflows",
  subtitle:
    "From data entry to customer support, every bot we ship is built for your exact process and wired into your existing systems, without replacing the tools your team relies on.",
  items: [
    {
      id: "website",
      shape: "circle",
      title: "Website Bots",
      body: "Your website is open all night, your team is not. Website bots answer visitor questions, capture and qualify leads, route requests to the right person, and trigger follow-ups the moment someone fills a form, so no enquiry sits unanswered until morning.",
      tags: ["Lead capture", "Form follow-ups", "Request routing", "Booking"],
      badge: { value: "24/7", label: "always on" },
      image: {
        src: website1400,
        srcSet: srcSet(website800, website1400),
        alt: "Over-the-shoulder view of a woman typing on a laptop showing a web page with a row of photo thumbnails",
      },
    },
    {
      id: "data",
      shape: "polygon",
      title: "Data Management Bots",
      body: "Manual data entry is slow, expensive, and quietly error-prone. Our data bots extract records from emails, PDFs, and portals, clean and validate them against your rules, and move them between systems without anyone copying and pasting. Your reports start from data you can trust.",
      tags: ["Extraction", "Validation", "System-to-system sync"],
      image: {
        src: data1400,
        srcSet: srcSet(data800, data1400),
        alt: "Dark equipment racks filled with patch panels, rack-mounted units with small displays and an orange network cable",
      },
    },
    {
      id: "payables",
      shape: "inverted",
      title: "Accounts Payable Bots",
      body: "Invoice capture, three-way matching, approval chasing, and reconciliation, handled end to end. RPA bots read each invoice, match it to the purchase order and receipt, flag exceptions for a human, and post the rest, so month-end stops being a scramble.",
      tags: ["Invoice capture", "PO matching", "Approvals", "Reconciliation"],
      image: {
        src: payables1400,
        srcSet: srcSet(payables800, payables1400),
        alt: "Person holding printed invoices next to a laptop showing an invoice-editing form, on a red table",
      },
    },
    {
      id: "scraping",
      shape: "organic",
      title: "Web Scraping Bots",
      body: "Need competitor prices, market data, or lead lists kept current? Scraping bots collect the data you need from the web on a schedule, handle pagination, logins, and layout changes, structure the results, and deliver them straight to your sheet, database, or dashboard.",
      tags: ["Scheduled runs", "Price monitoring", "Lead lists", "Clean exports"],
      image: {
        src: scraping1400,
        srcSet: srcSet(scraping800, scraping1400),
        alt: "Angled close-up of dense, colourful minified JavaScript code on a dark screen, fading into darkness on the right",
      },
    },
    {
      id: "hr",
      shape: "plain",
      clip: "ba-clip-chevron",
      title: "HR and Onboarding Bots",
      body: "From offer letters to laptop requests and system access, onboarding bots run the whole checklist: documents sent and chased, accounts created, equipment ordered, and managers reminded. New hires get a smooth first week, and HR gets hours back every month.",
      tags: ["Document collection", "Account provisioning", "Reminders"],
      image: {
        src: hr1400,
        srcSet: srcSet(hr800, hr1400),
        alt: "Smiling woman in glasses and a white blazer shaking hands across a desk with a dark-haired woman in a modern office",
      },
    },
    {
      id: "support",
      shape: "plain",
      clip: "ba-clip-tab",
      title: "Customer Support Bots",
      body: "Cut ticket volume and response times with bots that handle order status checks, refunds, password resets, and common questions, trained on your own help content rather than a generic script. Anything unusual reaches a human with the context already attached.",
      tags: ["Ticket triage", "Order lookups", "Refund flows", "Human handover"],
      image: {
        src: support1400,
        srcSet: srcSet(support800, support1400),
        alt: "Smiling customer support agent wearing a headset at her keyboard, with colleagues in headsets working beside her",
      },
    },
    {
      id: "rpa",
      shape: "plain",
      clip: "ba-clip-chevron",
      title: "RPA Bot Integration",
      body: "Already on an RPA platform? We build, fix, and scale bots on UiPath, Automation Anywhere, and Power Automate, and add AI where rule-based bots break down. We also migrate brittle legacy automations to maintainable, monitored workflows.",
      tags: ["UiPath", "Automation Anywhere", "Power Automate", "Legacy migration"],
      image: {
        src: rpa1400,
        srcSet: srcSet(rpa800, rpa1400),
        alt: "Blue industrial robotic arm working on an automated production line with conveyor rails in a factory",
      },
    },
    {
      id: "custom",
      shape: "plain",
      clip: "ba-clip-tab",
      title: "Custom Bot Development",
      body: "Don't see your process above? We build from scratch. Our team maps your workflow step by step, finds where automation pays back fastest, and delivers a bot designed for how your business actually works, with logging and alerts from day one.",
      tags: ["Process mapping", "Python and Node.js", "AI agents", "Monitoring"],
      image: {
        src: custom1400,
        srcSet: srcSet(custom800, custom1400),
        alt: "Developer wearing headphones and glasses, seen from behind, working at a large monitor showing HTML code and a laptop with a design tool open",
      },
    },
  ],
};

export const midCta = {
  title: "Ready to Automate Your Business Workflows?",
  subtitle:
    "Tell us what your team does by hand today. We'll map the process, recommend the right automation approach, and give you a clear plan with timeline and cost.",
  buttonText: "Book a free strategy call",
};

export const industries = {
  eyebrow: "Which industries do we automate?",
  titleLead: "Bot Automation",
  titleAccent: "Built for Your Industry",
  subtitle: `We build automation bots for businesses across ${companyStats.industries} industries, shaped around how each sector really works instead of a generic template.`,
  items: [
    {
      slug: "healthcare",
      label: "Healthcare",
      image: healthcare,
      summary:
        "RPA bots that lift admin load off clinical teams, speed up data handling, and keep records consistent.",
      uses: [
        "Appointment scheduling and reminders",
        "Insurance claims and pre-authorisation",
        "EHR data entry and updates",
        "Patient intake and consent forms",
        "Lab result notifications",
        "Compliance and audit reporting",
      ],
    },
    {
      slug: "finance",
      label: "Finance and Fintech",
      image: finance,
      summary: "Bots that reconcile, verify, and report with an audit trail at every step.",
      uses: [
        "Bank and ledger reconciliation",
        "KYC document checks",
        "Loan application processing",
        "Regulatory report preparation",
        "Fraud alert triage",
        "Statement generation",
      ],
    },
    {
      slug: "retail",
      label: "Retail and E-commerce",
      image: retail,
      summary:
        "Automation that keeps catalogues, stock, and orders moving without a back-office queue.",
      uses: [
        "Order processing and status updates",
        "Inventory sync across channels",
        "Competitor price monitoring",
        "Product catalogue updates",
        "Returns and refund handling",
        "Supplier purchase orders",
      ],
    },
    {
      slug: "supply-chain",
      label: "Supply Chain",
      image: supplyChain,
      summary:
        "Bots that track shipments, chase suppliers, and keep every system telling the same story.",
      uses: [
        "Shipment tracking updates",
        "Supplier follow-ups",
        "Freight invoice auditing",
        "Customs document preparation",
        "Demand data collection",
        "Warehouse system sync",
      ],
    },
    {
      slug: "insurance",
      label: "Insurance",
      image: insurance,
      summary:
        "From first notice of loss to renewal, bots that move policies and claims through faster.",
      uses: [
        "Claims intake and validation",
        "Policy issuance and renewals",
        "Underwriting data gathering",
        "Broker communications",
        "Document indexing",
        "Compliance checks",
      ],
    },
    {
      slug: "real-estate",
      label: "Real Estate",
      image: realEstate,
      summary: "Bots that keep listings, leads, and leases moving between systems.",
      uses: [
        "Listing syndication",
        "Lead qualification and routing",
        "Viewing scheduling",
        "Lease and rent reminders",
        "Market data collection",
        "Maintenance request routing",
      ],
    },
    {
      slug: "education",
      label: "Education",
      image: education,
      summary: "Admin automation for admissions, records, and student communication.",
      uses: [
        "Admissions document processing",
        "Enrolment and records updates",
        "Fee reminders",
        "Timetable notifications",
        "Student support FAQs",
        "Reporting to governing bodies",
      ],
    },
    {
      slug: "legal",
      label: "Legal",
      image: legal,
      summary:
        "Bots that take the clerical load off fee earners without touching privileged judgement.",
      uses: [
        "Client intake and conflict checks",
        "Document assembly",
        "Court deadline tracking",
        "Billing and time entry",
        "Case file indexing",
        "Engagement letters",
      ],
    },
  ],
  ctaText: "Talk to our automation team",
};

export const stack = {
  eyebrow: "Which technologies do we use?",
  titleLead: "The Technology Behind",
  titleAccent: "Every Bot We Build",
  subtitle:
    "We pick tools for your workflow, your systems, and your scale, without locking you into a platform that doesn't fit.",
  groups: [
    {
      name: "Automation & RPA",
      tools: [
        { name: "UiPath" },
        { name: "Automation Anywhere" },
        { name: "Power Automate" },
        { name: "Playwright" },
        { name: "Selenium" },
        { name: "Apache Airflow", slug: "apacheairflow" },
        { name: "Celery", slug: "celery" },
        { name: "n8n" },
        { name: "Zapier" },
      ],
    },
    {
      name: "AI & Documents",
      tools: [
        { name: "Claude", slug: "anthropic" },
        { name: "OpenAI GPT" },
        { name: "Gemini", slug: "googlegemini" },
        { name: "LangChain", slug: "langchain" },
        { name: "Hugging Face", slug: "huggingface" },
        { name: "spaCy", slug: "spacy" },
        { name: "OpenCV", slug: "opencv" },
        { name: "Tesseract OCR" },
        { name: "Mistral", slug: "mistralai" },
      ],
    },
    {
      name: "Backend & Data",
      tools: [
        { name: "Python", slug: "python" },
        { name: "FastAPI", slug: "fastapi" },
        { name: "Node.js", slug: "nodedotjs" },
        { name: "Django", slug: "django" },
        { name: "PostgreSQL", slug: "postgresql" },
        { name: "MongoDB", slug: "mongodb" },
        { name: "Redis", slug: "redis" },
        { name: "Pandas", slug: "pandas" },
        { name: "Apache Kafka", slug: "apachekafka" },
      ],
    },
    {
      name: "Cloud & DevOps",
      tools: [
        { name: "AWS" },
        { name: "Azure" },
        { name: "Google Cloud", slug: "googlecloud" },
        { name: "Docker", slug: "docker" },
        { name: "Kubernetes", slug: "kubernetes" },
        { name: "GitHub Actions", slug: "githubactions" },
        { name: "Terraform", slug: "terraform" },
        { name: "Grafana", slug: "grafana" },
        { name: "Sentry", slug: "sentry" },
      ],
    },
  ],
};

export const process = {
  eyebrow: "How we work",
  titleLead: "How We Build and Deploy",
  titleAccent: "Your Automation Bot",
  subtitle:
    "A clear four-step path from discovery to a bot in production, with no guesswork and no surprises along the way.",
  steps: [
    {
      title: "Discover",
      body: "We map your workflow, pin down where automation saves the most time, and agree a build plan before a line of code is written.",
    },
    {
      title: "Design and Build",
      body: "We build the bot around your exact process and test it on real cases in a safe environment before it touches production.",
    },
    {
      title: "Deploy",
      body: "We connect the bot to your live systems and go live only after end-to-end testing confirms every path works as planned.",
    },
    {
      title: "Improve",
      body: "We monitor runs, handle exceptions, and update the bot as your processes, systems, and volumes change.",
    },
  ],
  ctaText: "Book your free scoping session",
  guarantees: [
    "Fixed price, locked before we start",
    "You own 100% of the code",
    "NDA signed first",
    `${companyStats.supportDays} days of free support after launch`,
  ],
};

export const testimonialsHeading = {
  eyebrow: "What our clients say",
  titleLead: "Our Clients' Success Is",
  titleAccent: "Our Greatest Achievement",
};

export const gains = {
  eyebrow: "What you gain",
  titleLead: "What Your Business Gains When You",
  titleAccent: "Automate the Right Way",
  subtitle:
    "Our bot automation services are built to deliver outcomes you can measure, without adding headcount, replacing your systems, or disrupting how your team works.",
  image: {
    src: gains1400,
    srcSet: srcSet(gains800, gains1400),
    alt: "Four colleagues gathered around a wooden table reviewing printed documents together in a warmly lit room",
  },
  items: [
    {
      title: "Time Back for Your Team",
      body: "Data entry, report pulls, and follow-ups run 24/7 in the background, so your people spend their hours on the work that moves the business.",
    },
    {
      title: "Cleaner, More Reliable Data",
      body: "Bots apply the same validation rules every time. Fewer typos and missed fields means reports and forecasts you can act on.",
    },
    {
      title: "Faster Business Processes",
      body: "We find where work waits and remove the hand-offs. Turnaround drops and the same team gets more done.",
    },
    {
      title: "Lower Operational Costs",
      body: "Every repetitive hour you automate is an hour back for sales, strategy, or customers, and bots don't need overtime.",
    },
    {
      title: "Fast Time to Value",
      body: "Bots connect to the tools you already have, so there is no platform overhaul before the first result lands.",
    },
    {
      title: "Scale Without Adding Headcount",
      body: "Whether you process a hundred transactions a month or a hundred thousand, the bot works at the same speed and accuracy.",
    },
  ],
};

export const whyUs = {
  eyebrow: "Why choose us?",
  titleLead: "What Sets Us Apart From",
  titleAccent: "Other Automation Companies",
  subtitle:
    "There are plenty of automation vendors. Here is why businesses choose Axiomra, and stay with us after the first project.",
  stats: [
    { value: `${companyStats.projects}+`, label: "Projects delivered" },
    { value: `${companyStats.countries}+`, label: "Countries served" },
    { value: `${companyStats.partnerships}+`, label: "Partnerships" },
    { value: `${companyStats.experts}+`, label: "Tech experts" },
  ],
  reasons: [
    {
      title: "Built for Production, Not Demos",
      body: "Our bots run in live environments with real volumes and messy inputs. Every one is tested, integrated, and monitored before handoff.",
    },
    {
      title: "End-to-End Delivery",
      body: "Process mapping, build, integration, deployment, and maintenance all sit with one team, so there are no gaps between vendors when something needs fixing.",
    },
    {
      title: `${companyStats.supportDays} Days of Free Support`,
      body: "After go-live our team stays on for fixes, questions, and tuning at no extra cost. We don't disappear at deployment.",
    },
    {
      title: "Knowledge Transfer",
      body: "We walk your team through how the bots work, how to read their logs, and how to handle exceptions, so you are never dependent on us for small changes.",
    },
    {
      title: "Transparent Communication",
      body: "You see every stage of the build: what we're working on, what's been decided, and which results we're tracking. No black boxes.",
    },
    {
      title: "Built Around Your Goals",
      body: "We start from what success means for you, whether that's hours saved, error rates, or throughput, and tie every decision back to it.",
    },
  ],
};

export const cta = {
  title: "Steer Your Business Towards Less Busywork",
  subtitle:
    "Clients around the world trust us to build automation that pays for itself. Tell us the process that slows your team down, and we'll show you what a bot can take off their plate.",
  buttonText: "Get your project started",
};

export const faqs = [
  {
    q: "How can bot automation improve daily business operations?",
    a: "Bots take over repetitive, rule-based work such as data entry, report generation, invoice handling, and follow-ups. They run around the clock without errors from fatigue, which frees your team for work that needs judgement.",
  },
  {
    q: "How does bot automation reduce operational costs?",
    a: "A bot does the same task faster and without overtime, and it scales with volume instead of with headcount. Savings come from hours returned to your team, fewer costly errors, and shorter turnaround times.",
  },
  {
    q: "What are the main advantages of using RPA bots in business?",
    a: "RPA bots work through the same screens and systems your staff use, so they automate processes without needing new APIs or a system replacement. They are fast to deploy, consistent, fully logged, and easy to audit.",
  },
  {
    q: "How do automation bots help improve customer service?",
    a: "Support bots answer common questions instantly, look up orders, process refunds, and route complex cases to the right person with context attached. Customers wait less and agents spend their time on the conversations that need them.",
  },
  {
    q: "How do bots integrate with existing business tools?",
    a: "Through APIs where they exist, and through the user interface where they don't. We connect bots to CRMs, ERPs, accounting software, help desks, spreadsheets, email, and internal databases without changing how those tools work.",
  },
  {
    q: "Can automation bots help with compliance and reporting?",
    a: "Yes. Bots follow the same rules every time and log every action, which gives you a complete audit trail. They can also compile scheduled compliance reports and flag records that break a rule.",
  },
  {
    q: "Which industries benefit most from bot automation?",
    a: "Any business with high-volume, repetitive processes. We see the biggest gains in finance, healthcare, insurance, retail, logistics, and real estate, but the deciding factor is the process, not the industry.",
  },
  {
    q: "What ROI can businesses expect from bot automation?",
    a: "It depends on how much manual time the process takes today. We estimate hours saved and payback period during the free scoping session, before you commit to anything.",
  },
  {
    q: "How long does it take to build a custom automation bot?",
    a: "A single focused bot usually takes two to six weeks from kickoff to production. Multi-system or multi-bot programmes take longer, and we agree a timeline before work starts.",
  },
  {
    q: "How much does bot automation cost?",
    a: `It depends on the number of steps, systems, and exceptions involved. A focused first bot typically starts in the $${companyStats.pocRange.min}k–$${companyStats.pocRange.max}k range, and we give a fixed quote after scoping.`,
  },
];
