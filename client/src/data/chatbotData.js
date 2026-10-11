import { SERVICES_BASE_PATH, CHATBOT_SLUG } from "../routes.constants";
import { companyStats } from "./companyStats";

import solutions800 from "../assets/chatbot/svc-solutions-800.webp";
import solutions1400 from "../assets/chatbot/svc-solutions-1400.webp";
import design800 from "../assets/chatbot/svc-design-800.webp";
import design1400 from "../assets/chatbot/svc-design-1400.webp";
import multilingual800 from "../assets/chatbot/svc-multilingual-800.webp";
import multilingual1400 from "../assets/chatbot/svc-multilingual-1400.webp";
import integration800 from "../assets/chatbot/svc-integration-800.webp";
import integration1400 from "../assets/chatbot/svc-integration-1400.webp";
import nlp800 from "../assets/chatbot/svc-nlp-800.webp";
import nlp1400 from "../assets/chatbot/svc-nlp-1400.webp";
import support800 from "../assets/chatbot/svc-support-800.webp";
import support1400 from "../assets/chatbot/svc-support-1400.webp";

import healthcare from "../assets/industries/healthcare.webp";
import fashion from "../assets/industries/fashion.webp";
import education from "../assets/industries/education.webp";
import sports from "../assets/industries/sports.webp";
import retail from "../assets/industries/retail.webp";
import realEstate from "../assets/industries/real-estate.webp";

export const CHATBOT_PATH = `${SERVICES_BASE_PATH}/${CHATBOT_SLUG}`;

const srcSet = (small, large) => `${small} 800w, ${large} 1400w`;

export const hero = {
  eyebrow: "AI Chatbot Development Services",
  titleLead: "Launch a Chatbot That Answers Instantly, and",
  titleAccent: "Frees Your Team",
  body: "We build custom AI chatbots around your business and your data, so customers get accurate answers around the clock and your team stops repeating the same replies. No months of guesswork, and no rebuild down the line.",
  ctaText: "Request a free consultation",
  secondaryCtaText: "See what we build",
  proof: [
    "You own the IP after delivery",
    "Fixed price, scoped before kickoff",
    `${companyStats.supportDays}-day post-launch support`,
  ],
  // The scripted exchange the hero's chat window plays on a loop.
  conversation: [
    { from: "user", text: "Can I change my delivery address after ordering?" },
    {
      from: "bot",
      text: "Yes, up until the order ships. I've opened order #48213 for you. Which address should it go to?",
    },
    { from: "user", text: "Ship it to my office instead, please." },
    {
      from: "bot",
      text: "Done. The new address is saved and a confirmation is on its way to your inbox.",
    },
  ],
};

export const sectionNav = [
  { label: "Services", href: "#cb-services" },
  { label: "Our Work", href: "#cb-work" },
  { label: "Industries", href: "#cb-industries" },
  { label: "Approach", href: "#cb-process" },
  { label: "Tech Stack", href: "#cb-stack" },
  { label: "Testimonials", href: "#cb-testimonials" },
  { label: "Contact", href: "#contact" },
];

/*
 * The six service rows. `shape` picks how the row's text meets its visual:
 *   circle   - a floated circle (shape-outside: circle) the copy wraps around
 *   polygon  - a coloured polygon whose clip-path and shape-outside match
 *   inverted - the copy sits inside the cut-out of an inverted polygon
 *   organic  - the copy wraps an external SVG blob, with an inverted clipPath
 *   plain    - image and text side by side, the image clip-path shaped
 */
export const services = {
  eyebrow: "What AI chatbot services do we offer?",
  titleLead: "Everything You Need to Launch and",
  titleAccent: "Run a Working Chatbot",
  subtitle:
    "From the first conversation design to post-launch support, our chatbot development services cover the full build, not just a proof of concept.",
  items: [
    {
      id: "solutions",
      shape: "circle",
      title: "AI Chatbot Development Solutions",
      body: "We provide complete AI chatbot development, from design and development to integration and ongoing maintenance. Our chatbots engage users through natural, human-like conversations and stay available 24/7 to support customers and teams. On every project we focus on measurable outcomes: faster first responses, fewer repeat tickets, and lower operational cost.",
      tags: [
        "LLM-powered chatbots",
        "RAG chatbots",
        "Custom AI agents",
        "Conversational AI",
        "Virtual assistants",
      ],
      badge: { value: "24/7", label: "always on" },
      image: {
        src: solutions1400,
        srcSet: srcSet(solutions800, solutions1400),
        alt: "Phone showing an AI assistant asking what it can help with",
      },
    },
    {
      id: "design",
      shape: "polygon",
      title: "Chatbot Design and Development",
      body: "Your chatbot should sound like your brand, not like a template. We design the persona, tone, and conversation flows with your team, then build them on a stack that can grow with you. Every flow is tested with real user questions before launch, so the bot handles the messy phrasing people actually use and knows when to hand over to a human.",
      tags: ["Persona and tone", "Conversation flows", "Human handover"],
      image: {
        src: design1400,
        srcSet: srcSet(design800, design1400),
        alt: "Woman smiling while chatting on her phone outdoors",
      },
    },
    {
      id: "multilingual",
      shape: "inverted",
      title: "Multi-Language Chatbot Development",
      body: "We build multilingual chatbots that reply naturally in your customers' languages, not in stiff machine translation. One assistant can serve several markets with consistent answers, local phrasing, and the same knowledge base underneath, so global teams can offer localized support without staffing every time zone.",
      tags: ["English", "العربية", "Español", "Deutsch", "اردو", "Français"],
      image: {
        src: multilingual1400,
        srcSet: srcSet(multilingual800, multilingual1400),
        alt: "Phone with an AI assistant resting on a backlit multilingual keyboard",
      },
    },
    {
      id: "integration",
      shape: "organic",
      title: "Chatbot Integration",
      body: "We integrate chatbots with your websites, mobile apps, CRMs, help desks, and internal systems, so the bot can look up an order, book a slot, or open a ticket instead of only talking about it. The result is faster service, cleaner data, and one connected experience across every channel your customers already use.",
      tags: ["Web and mobile", "WhatsApp and Slack", "CRM and help desk", "Internal APIs"],
      image: {
        src: integration1400,
        srcSet: srcSet(integration800, integration1400),
        alt: "Code editor glowing on a dark screen",
      },
    },
    {
      id: "nlp",
      shape: "plain",
      clip: "cb-clip-hex",
      title: "Natural Language Processing Chatbots",
      body: "We use modern natural language processing and retrieval to build chatbots that understand intent, follow context across a conversation, and answer from your own documents with sources. That means fewer dead ends, more first-contact resolutions, and answers your support team would sign off on.",
      tags: ["Intent detection", "Retrieval with citations", "Context memory"],
      image: {
        src: nlp1400,
        srcSet: srcSet(nlp800, nlp1400),
        alt: "Hand typing a question to an AI assistant on a smartphone",
      },
    },
    {
      id: "support",
      shape: "plain",
      clip: "cb-clip-notch",
      title: "Chatbot Maintenance and Support",
      body: "After launch, we monitor conversations, accuracy, and cost, then tune prompts, retrieval, and flows as your products and policies change. Regular updates and quick troubleshooting keep the chatbot reliable, and every release is checked against a test set of real questions before it ships.",
      tags: ["Conversation analytics", "Accuracy reviews", "Cost monitoring"],
      image: {
        src: support1400,
        srcSet: srcSet(support800, support1400),
        alt: "Analytics dashboard with retention charts on a monitor",
      },
    },
  ],
};

export const industries = {
  eyebrow: "Industries we serve",
  titleLead: "Chatbots Built Around",
  titleAccent: "How Your Industry Works",
  subtitle:
    "Every industry has its own questions, workflows, and compliance needs. Our chatbots are built around the specifics of your sector, not a generic template.",
  items: [
    {
      slug: "healthcare",
      label: "Healthcare",
      image: healthcare,
      use: "Appointment booking, symptom triage, and patient FAQs with safe handover to staff.",
    },
    {
      slug: "fashion",
      label: "Fashion",
      image: fashion,
      use: "Size advice, styling suggestions, and order tracking inside the shopping flow.",
    },
    {
      slug: "education",
      label: "Education",
      image: education,
      use: "Admissions questions, course guidance, and 24/7 study help for learners.",
    },
    {
      slug: "sports",
      label: "Sports",
      image: sports,
      use: "Ticketing, fixtures, and fan engagement across web and messaging apps.",
    },
    {
      slug: "retail",
      label: "Retail",
      image: retail,
      use: "Product search, returns, and stock checks that cut support queues.",
    },
    {
      slug: "real-estate",
      label: "Real Estate",
      image: realEstate,
      use: "Lead qualification, viewing bookings, and listing questions answered instantly.",
    },
  ],
};

export const process = {
  eyebrow: "No guesswork, no surprises",
  titleLead: "A Clear Path From Idea",
  titleAccent: "to a Working Chatbot",
  subtitle:
    "Our chatbot development process is built to stay simple, so you always know which stage your project is at and what happens next.",
  steps: [
    {
      title: "Define",
      body: "A free consultation to understand your business, your customers' questions, and the data the bot needs. You leave with a clear scope and a recommended approach.",
    },
    {
      title: "Build",
      body: "We design the conversation flows, connect your knowledge sources, and train and test the bot against real user questions until it answers the way your team would.",
    },
    {
      title: "Deploy",
      body: "We integrate the chatbot into your website, apps, or messaging channels, cloud or on-premise, and run a staged rollout with monitoring from day one.",
    },
    {
      title: "Improve",
      body: "After launch we track accuracy and cost, retrain when your content changes, and keep the bot sharp long after handoff.",
    },
  ],
  ctaText: "Tell us about your business",
};

export const stack = {
  eyebrow: "Which technologies do we use?",
  titleLead: "Built on Proven Technology,",
  titleAccent: "Not Experiments",
  subtitle: "We choose tools for how they perform in production, not for what's trending.",
  groups: [
    {
      name: "Artificial Intelligence",
      tools: [
        { name: "Claude", slug: "anthropic" },
        { name: "OpenAI GPT" },
        { name: "Gemini", slug: "googlegemini" },
        { name: "Llama", slug: "meta" },
        { name: "Mistral", slug: "mistralai" },
        { name: "Hugging Face", slug: "huggingface" },
        { name: "LangChain", slug: "langchain" },
        { name: "Ollama", slug: "ollama" },
        { name: "spaCy", slug: "spacy" },
      ],
    },
    {
      name: "Backend & Databases",
      tools: [
        { name: "Python", slug: "python" },
        { name: "FastAPI", slug: "fastapi" },
        { name: "Node.js", slug: "nodedotjs" },
        { name: "Django", slug: "django" },
        { name: "PostgreSQL", slug: "postgresql" },
        { name: "MongoDB", slug: "mongodb" },
        { name: "Redis", slug: "redis" },
        { name: "Qdrant", slug: "qdrant" },
        { name: "Socket.IO", slug: "socketdotio" },
      ],
    },
    {
      name: "Frontend",
      tools: [
        { name: "React", slug: "react" },
        { name: "Next.js", slug: "nextdotjs" },
        { name: "TypeScript", slug: "typescript" },
        { name: "Tailwind CSS", slug: "tailwindcss" },
        { name: "Vue.js", slug: "vuedotjs" },
        { name: "Three.js", slug: "threedotjs" },
      ],
    },
    {
      name: "Cloud & Ops",
      tools: [
        { name: "AWS" },
        { name: "Azure" },
        { name: "Google Cloud", slug: "googlecloud" },
        { name: "Docker", slug: "docker" },
        { name: "Kubernetes", slug: "kubernetes" },
        { name: "Vercel", slug: "vercel" },
        { name: "Cloudflare", slug: "cloudflare" },
        { name: "Sentry", slug: "sentry" },
        { name: "Grafana", slug: "grafana" },
      ],
    },
  ],
};

export const impact = {
  eyebrow: "Business impact",
  titleLead: "What a Working Chatbot",
  titleAccent: "Actually Does for Your Business",
  subtitle:
    "Beyond answering questions, a well-built chatbot changes how your team spends its time and how customers experience your business.",
  items: [
    {
      title: "Cost Savings",
      body: "The chatbot takes the repetitive, high-volume questions, so support costs stop growing in step with demand.",
    },
    {
      title: "Increased Efficiency",
      body: "Routine requests are handled instantly at any hour, which frees your team for the complex, higher-value conversations.",
    },
    {
      title: "Data-Driven Insights",
      body: "Every conversation shows what customers ask, need, and struggle with, giving you a clear picture to guide product and support decisions.",
    },
    {
      title: "Competitive Advantage",
      body: "A fast, well-designed assistant signals that your business invests in customer experience, setting you apart from competitors still relying on email queues.",
    },
    {
      title: "Enhanced Engagement",
      body: "Interactive, personalised conversations keep visitors on your site and in your app longer, and turn more of them into customers.",
    },
  ],
};

export const stages = {
  eyebrow: "Who we work with",
  titleLead: "Chatbot Solutions for",
  titleAccent: "Businesses at Every Stage",
  subtitle:
    "Whether you are launching your first product or running enterprise-scale operations, our chatbot development adapts to where your business is today.",
  items: [
    {
      title: "Startups",
      body: "We help startups turn an idea into a market-ready assistant fast: a focused MVP that proves value with real users, then a clear path from launch to scale.",
    },
    {
      title: "Scale-ups",
      body: "When volume grows faster than headcount, we automate the repetitive conversations, connect the bot to your systems, and keep quality steady while you grow.",
    },
    {
      title: "Small and Medium Businesses",
      body: "SMBs get an affordable, low-maintenance chatbot that answers customers around the clock, without needing an in-house AI team to run it.",
    },
    {
      title: "Enterprises",
      body: "For large organisations we deliver secure, integrated chatbot platforms with access controls, audit trails, and deployment options that satisfy IT and compliance.",
    },
  ],
};

export const whyUs = {
  eyebrow: "Why choose us for your next project?",
  titleLead: "Working With Us Is an",
  titleAccent: "Investment in Your Future",
  items: [
    {
      icon: "shield",
      title: "We Prioritise Security",
      body: "Our chatbots protect user data from day one: encryption in transit and at rest, strict authentication, regular security reviews, and compliance with the data regulations your industry follows.",
    },
    {
      icon: "layers",
      title: "Experience Building Diverse Chatbots",
      body: "Customer service, e-commerce, education, and internal knowledge assistants: our team has built chatbots for very different needs, across a wide range of industries.",
    },
    {
      icon: "scale",
      title: "Scalable Chatbot Solutions",
      body: "We build chatbots that grow with you, handling more users, more channels, and more languages without a rebuild, while keeping response times and costs in check.",
    },
  ],
  stats: [
    { value: `${companyStats.partnerships}+`, label: "Partnerships" },
    { value: `${companyStats.projects}+`, label: "Projects" },
    { value: `${companyStats.countries}+`, label: "Countries served" },
    { value: `${companyStats.experts}+`, label: "Tech experts" },
  ],
};

export const testimonialsHeading = {
  eyebrow: "What our clients say",
  titleLead: "Our Clients' Success Is",
  titleAccent: "Our Greatest Achievement",
};

export const cta = {
  title: "Ready to Launch a Chatbot Your Customers Will Actually Use?",
  subtitle:
    "Tell us what your customers ask most. We'll show you what a chatbot can take off your team's plate.",
  buttonText: "Get your project started",
};

export const faqs = [
  {
    q: "What are AI chatbots?",
    a: "AI chatbots are software assistants that understand questions written in everyday language and reply in kind. Modern chatbots use large language models and your own documents to give accurate, specific answers, and can take actions such as booking, tracking an order, or opening a ticket.",
  },
  {
    q: "What is conversational AI?",
    a: "Conversational AI is the set of technologies, including natural language processing, large language models, and speech recognition, that lets software hold a natural, multi-turn conversation with people through text or voice.",
  },
  {
    q: "How do your AI chatbots work?",
    a: "Each message is interpreted for intent and context, relevant information is retrieved from your knowledge sources and systems, and the model writes a grounded reply. Guardrails keep answers on-topic, and the bot hands over to a human when it should.",
  },
  {
    q: "What data privacy and security measures are in place?",
    a: "We encrypt data in transit and at rest, apply role-based access controls, keep conversation logs under your retention policy, and can deploy in your own cloud or on-premise. We also work to the regulations your industry follows, such as GDPR or HIPAA.",
  },
  {
    q: "Can I integrate the chatbot into my existing systems?",
    a: "Yes. We connect chatbots to websites, mobile apps, WhatsApp, Slack, CRMs such as HubSpot and Salesforce, help desks, and your own internal APIs.",
  },
  {
    q: "Do you offer custom AI chatbot development services?",
    a: "Yes. Every chatbot we build is scoped to your use case, data, brand voice, and channels. We don't resell a one-size-fits-all template.",
  },
  {
    q: "How can I hire AI chatbot developers?",
    a: "Book a free consultation. We'll scope the project with you, then assign a dedicated team of engineers, a designer, and a project manager for the build and launch.",
  },
  {
    q: "How much does AI chatbot development cost?",
    a: `It depends on scope, integrations, and channels. A focused proof of concept typically starts in the $${companyStats.pocRange.min}k–$${companyStats.pocRange.max}k range; we give a fixed quote after the free scoping session.`,
  },
  {
    q: "How long does chatbot development take?",
    a: "A focused chatbot on one channel usually takes four to eight weeks from kickoff to launch. Multi-channel or deeply integrated assistants take longer, and we agree a timeline before work starts.",
  },
];
