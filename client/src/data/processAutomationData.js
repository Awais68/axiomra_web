/**
 * Copy and structured content for the Business Process Automation service page.
 *
 * Company figures come from companyStats, never typed here. Anything marked
 * `TODO: client review` is new factual copy (process, timelines, claims) that
 * the client has not signed off yet.
 *
 * Photos: Unsplash (free licence), resized to webp in src/assets/process-automation.
 */
import { companyStats } from "./companyStats.js";
import { SERVICES_BASE_PATH, PROCESS_AUTOMATION_SLUG } from "../routes.constants";

import consulting720 from "../assets/process-automation/consulting-720.webp";
import consulting1200 from "../assets/process-automation/consulting-1200.webp";
import rpa720 from "../assets/process-automation/rpa-720.webp";
import rpa1200 from "../assets/process-automation/rpa-1200.webp";
import software720 from "../assets/process-automation/software-720.webp";
import software1200 from "../assets/process-automation/software-1200.webp";
import intelligent720 from "../assets/process-automation/intelligent-720.webp";
import intelligent1200 from "../assets/process-automation/intelligent-1200.webp";
import workflow720 from "../assets/process-automation/workflow-720.webp";
import workflow1200 from "../assets/process-automation/workflow-1200.webp";
import panel720 from "../assets/process-automation/panel-720.webp";
import panel1200 from "../assets/process-automation/panel-1200.webp";
import hand480 from "../assets/process-automation/hand-480.webp";
import healthcareImg from "../assets/industries/healthcare.webp";
import fashionImg from "../assets/industries/fashion.webp";
import educationImg from "../assets/industries/education.webp";
import sportsImg from "../assets/industries/sports.webp";
import retailImg from "../assets/industries/retail.webp";
import realEstateImg from "../assets/industries/real-estate.webp";

export { PROCESS_AUTOMATION_SLUG };
export const PROCESS_AUTOMATION_PATH = `${SERVICES_BASE_PATH}/${PROCESS_AUTOMATION_SLUG}`;

/** A 720w/1200w pair for `srcSet`; every service photo here is 3:2. */
const photo = (small, large, alt) => ({
  src: large,
  srcSet: `${small} 720w, ${large} 1200w`,
  alt,
});

export const hero = {
  eyebrow: "Business Process Automation Services",
  titleLead: "Automate Your Workflows,",
  titleAccent: "Not Your Headcount",
  body:
    "Custom business process automation that takes the manual work out of your operations " +
    "without changing how your team already runs. AI, RPA and integrations, built around the " +
    "process you have today.",
  ctaText: "Request a Free Consultation",
  secondaryCtaText: "See What We Automate",
  /** The run the glass ticker plays on loop: one invoice moving through a pipeline. */
  ticker: {
    title: "Invoice #4821",
    steps: ["Received by email", "Fields extracted", "Matched to PO", "Posted to ERP"],
  },
};

export const stats = {
  title: "Production Automation, Not Prototypes",
  items: [
    { value: companyStats.projects, suffix: "+", label: "Projects delivered" },
    { value: companyStats.experts, suffix: "+", label: "Engineers in-house" },
    { value: companyStats.countries, suffix: "+", label: "Countries served" },
    { value: companyStats.industries, suffix: "+", label: "Industries automated" },
  ],
  // TODO: client review
  badges: [
    { icon: "rocket", title: "Fixed scope", line: "Agreed before we start" },
    { icon: "home", title: "100% in-house", line: "No outsourcing" },
    { icon: "globe", title: "Global clients", line: `${companyStats.countries}+ countries` },
    { icon: "shield", title: "NDA first", line: "Before any data moves" },
  ],
};

// TODO: client review
export const intro = {
  eyebrow: "Why automate",
  titleLead: "Your Team Is Doing Work",
  titleAccent: "A System Should Do",
  image: { src: hand480, alt: "Close-up of a white robotic hand resting on a desk" },
  paragraphs: [
    "Copying figures between spreadsheets, chasing approvals over email, re-keying invoices " +
      "into the ERP: every business has a layer of repetitive work that grows with headcount. " +
      "It is slow, it is error-prone, and it keeps good people away from the work only they " +
      "can do.",
    "Business process automation replaces that layer with software that runs the same steps " +
      "every time, at any volume, around the clock. We map how the work really moves through " +
      "your teams, automate the steps that are rule-based or can be learned from your data, " +
      "and leave people in the loop for the judgement calls.",
  ],
  badge: "Manual hours back",
  sideTitle: "Signs a process is ready to automate",
  signs: [
    "It follows the same steps every time",
    "It moves data between two or more systems",
    "It runs daily or weekly at volume",
    "Mistakes in it are costly to find later",
  ],
};

// TODO: client review
export const services = {
  eyebrow: "What we build",
  titleLead: "Process Automation Solutions",
  titleAccent: "Built Around Your Workflows",
  subtitle:
    "From AI automation to robotic process automation, we design solutions that fit how your " +
    "business actually operates, not the other way round.",
  items: [
    {
      id: "consulting",
      icon: "compass",
      layout: "photo",
      title: "Process Automation Consulting",
      body:
        "We start by learning how your business actually runs before recommending anything. Our " +
        "consultants map each process, find the bottlenecks, and build an automation roadmap " +
        "tied to measurable return, so you know what to automate first and why.",
      points: [
        "End-to-end process mapping",
        "Business process reengineering",
        "Process monitoring & optimisation",
        "ROI-driven automation strategy",
      ],
      image: photo(
        consulting720,
        consulting1200,
        "Four colleagues reviewing a process on a laptop"
      ),
    },
    {
      id: "rpa",
      icon: "bot",
      layout: "photo",
      title: "Robotic Process Automation",
      body:
        "We deploy and manage RPA bots that take over rule-based, high-volume tasks, then stay " +
        "on to support and tune them. You get the benefits of automation without hiring a team " +
        "to keep it running.",
      points: [
        "RPA integration with existing systems",
        "Data-driven RPA solutions",
        "Compliance & risk controls",
        "Bot monitoring & maintenance",
        "Industry-specific RPA",
      ],
      image: photo(rpa720, rpa1200, "Blue industrial robot arm working on a production line"),
    },
    {
      id: "software",
      icon: "code",
      layout: "photo",
      title: "Automation Software Development",
      body:
        "Need something built from scratch? We develop custom automation tools, cloud workflows " +
        "and integrations that plug straight into what you already use. No rip-and-replace " +
        "required.",
      points: [
        "Scalable automation frameworks",
        "Cloud-based automation",
        "Custom automation software",
        "Integration with existing systems",
        "BPM software",
      ],
      image: photo(
        software720,
        software1200,
        "Glowing circuit layout on a dark engineering screen"
      ),
    },
    {
      id: "intelligent",
      icon: "brain",
      layout: "organic",
      title: "Intelligent Automation Solutions",
      body:
        "For businesses ready to scale automation across departments, we combine bots with " +
        "machine learning and document understanding, so automation can read, classify and " +
        "decide instead of only clicking through fixed steps. Invoices, claims, contracts and " +
        "forms are processed end to end, with people stepping in only where confidence is low.",
      points: [
        "AI-powered process optimisation",
        "Intelligent document processing",
        "Cognitive automation",
        "Predictive analytics & forecasting",
      ],
      image: photo(
        intelligent720,
        intelligent1200,
        "Robot arms sorting printed documents on an automated line"
      ),
    },
    {
      id: "workflow",
      icon: "workflow",
      layout: "photo",
      title: "Workflow Automation Consulting",
      body:
        "We find where automation will make the biggest difference, then streamline task " +
        "routing, approvals and hand-offs around it, so operations run with less friction and " +
        "fewer delays.",
      points: [
        "Workflow analysis & design",
        "Approval & hand-off automation",
        "Cloud workflow platforms",
        "Process KPIs & dashboards",
      ],
      image: photo(
        workflow720,
        workflow1200,
        "Laptop showing a live operations analytics dashboard"
      ),
    },
  ],
};

export const fitCta = {
  title: "Not Sure Where Automation Fits First?",
  subtitle:
    "We will look at your current workflows, show where automation returns the most, and " +
    "recommend whether AI, RPA or a custom build is the right tool for each one.",
  buttonText: "Book a Process Assessment",
};

export const industries = {
  eyebrow: "Industry expertise",
  titleLead: "Automation Solutions",
  titleAccent: "Built For Your Industry",
  subtitle:
    "We tailor process automation to the workflows, compliance rules and pressure points of " +
    "your sector.",
  ctaText: "View all industries",
  items: [
    {
      slug: "healthcare",
      label: "Healthcare",
      image: healthcareImg,
      line: "Patient intake, claims and prior authorisation without the paperwork backlog.",
    },
    {
      slug: "fashion",
      label: "Fashion",
      image: fashionImg,
      line: "Catalog, sizing and order operations that keep pace with every drop.",
    },
    {
      slug: "education",
      label: "Education",
      image: educationImg,
      line: "Admissions, grading support and student records handled automatically.",
    },
    {
      slug: "sports",
      label: "Sports",
      image: sportsImg,
      line: "Scheduling, ticketing and performance reporting that runs itself.",
    },
    {
      slug: "retail",
      label: "Retail",
      image: retailImg,
      line: "Inventory sync, returns and supplier invoices processed end to end.",
    },
    {
      slug: "real-estate",
      label: "Real Estate",
      image: realEstateImg,
      line: "Lead routing, document checks and lease admin without manual chasing.",
    },
  ],
};

// TODO: client review
export const process = {
  eyebrow: "How we work",
  titleLead: "A Clear Path From",
  titleAccent: "Problem To Automation",
  subtitle: "A simple, fixed process, so you always know what happens next.",
  steps: [
    {
      title: "Define",
      body:
        "A free consultation to understand your workflows, goals and where automation will " +
        "have the biggest impact. You leave knowing whether we are the right partner.",
    },
    {
      title: "Build",
      body:
        "We prepare your data, then design and train the automation around your specific " +
        "process, so it fits your real operations rather than a generic template.",
    },
    {
      title: "Deploy",
      body:
        "We integrate the solution into your existing systems with proper MLOps and release " +
        "practices, so it works with your infrastructure from day one.",
    },
    {
      title: "Improve",
      body:
        "We monitor performance after launch and keep optimising, so the automation stays " +
        "effective as your business and processes change.",
    },
  ],
  ctaText: "Tell Us About Your Business",
  guarantees: [
    "You pay when we deliver",
    "Fixed price, agreed before we start",
    "You own 100% of the code",
    "NDA signed first",
  ],
};

export const testimonialsHeading = {
  titleLead: "What Clients Say About Working With Axiomra",
  titleAccent: "",
};

// TODO: client review
export const impact = {
  eyebrow: "What you gain",
  titleLead: "The Business Impact Of",
  titleAccent: "Automating Your Processes",
  body:
    "Real outcomes our process automation is built to deliver: less manual work, fewer errors " +
    "and better performance across the board.",
  quote: "Automate the routine. Keep people on the decisions.",
  image: photo(panel720, panel1200, "Touchscreen control panel on an automated production machine"),
  items: [
    {
      title: "Time back",
      body:
        "Repetitive, high-volume tasks run continuously on automation, without queues, " +
        "weekends or downtime.",
    },
    {
      title: "Cleaner data",
      body:
        "Fewer manual hand-offs mean fewer typos and mismatches, so reporting and analytics " +
        "can be trusted.",
    },
    {
      title: "Better process performance",
      body:
        "Faster cycle times and visible bottlenecks, with your team focused on higher-value " +
        "work instead of repetitive tasks.",
    },
    {
      title: "Quick adoption",
      body:
        "Automation slots into the tools people already use, with lower cost and less " +
        "onboarding than building it in-house.",
    },
  ],
};

export const stages = {
  eyebrow: "Who we serve",
  titleLead: "Automation Solutions For",
  titleAccent: "Every Stage Of Growth",
  subtitle:
    "Whether you are just starting out or running a large enterprise, we build automation that " +
    "fits where your business is today.",
  items: [
    {
      label: "Startups",
      body:
        "Automate early so manual processes never slow growth. From MVP to post-launch, we " +
        "build automation that scales as you do.",
      focus: ["Lean back-office workflows", "Automated onboarding", "No-ops integrations"],
    },
    {
      label: "Scale-ups",
      body:
        "As you grow, we automate more of your operations to raise efficiency and reach " +
        "without adding headcount at the same pace.",
      focus: ["Cross-team hand-offs", "Billing & finance ops", "Customer support triage"],
    },
    {
      label: "SMBs",
      body:
        "We tackle common small-business pain points, like outdated systems and manual data " +
        "entry, with automation that keeps you competitive.",
      focus: ["Invoice & order processing", "Legacy system bridges", "Reporting on autopilot"],
    },
    {
      label: "Enterprises",
      body:
        "Automation built for large-scale operations, with the governance, audit trails and " +
        "integrations that let it run across departments.",
      focus: ["Intelligent document processing", "RPA at scale", "Governed AI workflows"],
    },
  ],
};

export const whyUs = {
  eyebrow: "Why Axiomra",
  titleLead: "Partnering With Us Is",
  titleAccent: "A Strategic Move",
  pillars: [
    {
      icon: "target",
      accent: "Value",
      rest: "Driven Projects",
      body:
        "Every engagement is scoped around a measurable result. We pick the processes where " +
        "automation pays back, and report outcomes in the same terms as your business reviews.",
    },
    {
      icon: "cog",
      accent: "Deep",
      rest: "Technical Skills",
      body:
        "One in-house team covering RPA, machine learning, document AI and systems " +
        "integration, so the right tool gets used for each step of the process.",
    },
    {
      icon: "chat",
      accent: "Clear",
      rest: "Communication",
      body:
        "A dedicated project manager, regular demos and a shared tracker, so you always know " +
        "where the project stands and what comes next.",
    },
  ],
  stats: [
    { value: `${companyStats.partnerships}+`, label: "Partnerships" },
    { value: `${companyStats.projects}+`, label: "Projects" },
    { value: `${companyStats.countries}+`, label: "Countries served" },
    { value: `${companyStats.experts}+`, label: "Tech experts" },
  ],
};

export const faqs = [
  {
    q: "What is business process automation?",
    a:
      "Business process automation (BPA) uses software to run repetitive, rule-based or " +
      "data-driven steps of a business process without manual work: moving data between " +
      "systems, processing documents, routing approvals and triggering follow-ups.",
  },
  {
    q: "How does business process automation work?",
    a:
      "We map the process as it runs today, pick the steps that are repetitive or predictable, " +
      "and automate them with the right mix of integrations, RPA bots and AI models. People stay " +
      "in the loop for exceptions and decisions, and every run is logged.",
  },
  {
    q: "Who needs process automation services?",
    a:
      "Any team that spends hours each week on the same manual steps: finance teams keying " +
      "invoices, operations teams chasing approvals, support teams triaging tickets, or HR " +
      "teams onboarding people across several systems.",
  },
  {
    q: "Can you integrate automation with my existing systems?",
    a:
      "Yes. We work with the tools you already run (ERP, CRM, email, spreadsheets and internal " +
      "platforms) through their APIs where they exist and through RPA where they do not, so " +
      "nothing has to be replaced.",
  },
  {
    q: "What's the difference between RPA and AI-based automation?",
    a:
      "RPA follows fixed rules and mimics clicks and keystrokes, which suits stable, structured " +
      "tasks. AI-based automation can read unstructured documents, classify requests and make " +
      "predictions, so it handles variation. Most real processes need both.",
  },
  {
    q: "Do you offer custom automation tailored to my business?",
    a:
      "Every engagement is custom. We design the automation around your process, data and " +
      "compliance rules instead of forcing your team into a generic template.",
  },
  {
    q: "Can the automation scale as my business grows?",
    a:
      "Yes. We build on cloud infrastructure and modular workflows, so adding volume, new " +
      "teams or new processes extends the system rather than starting over.",
  },
  {
    q: "How long does a process automation project take?",
    a:
      "A single, well-defined process is typically live in a few weeks. Larger programmes are " +
      "delivered in phases, with the highest-return process first. You get a fixed timeline " +
      "before we start.",
  },
];

// TODO: client review
export const finalCta = {
  eyebrow: "Ready when you are",
  title: "Let's Automate What's Slowing You Down",
  subtitle:
    "Book a free 30-minute call and find out how business process automation can fit your " +
    "business.",
  stepsTitle: "What happens in 30 minutes?",
  steps: [
    {
      title: "Understand your use case",
      body: "We discuss your current workflow, where the manual work is, and the outcome you want.",
    },
    {
      title: "Identify the right approach",
      body: "We assess whether AI, RPA or a custom build makes the most sense for your process.",
    },
    {
      title: "Define next steps",
      body: "You leave with a clear direction on scope and the recommended next step, no obligation.",
    },
  ],
  buttonText: "Talk to an Automation Expert",
};
