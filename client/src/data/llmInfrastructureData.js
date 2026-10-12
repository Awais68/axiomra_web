/**
 * Copy and structured content for the Enterprise LLM Infrastructure page.
 *
 * Company figures come from companyStats, never typed here. Anything marked
 * `TODO: client review` is new factual copy (process, timelines, claims) the
 * client has not signed off yet.
 *
 * Photos are Unsplash (free licence, no attribution required), re-encoded to
 * webp in src/assets/llm-infra. Source ids, for re-exports: hero M5tzZtFCOfs,
 * private 2JJ3wBHu4_0, on-prem vSprjjDbu60, vpc dyUp7WPu5q4, open-source
 * wHPVr6uxsD8, llmops qwtCeJ5cLYs, rag Oaqk7qqNh_c, internal-chat UikYLDQj9_I,
 * fine-tuning cMoE2tU_BbM, chip lD1nt9ePX0s, archive X_j3b4rqnlk.
 */
import { companyStats } from "./companyStats.js";
import { SERVICES_BASE_PATH, LLM_INFRA_SLUG } from "../routes.constants";

import hero960 from "../assets/llm-infra/hero-960.webp";
import hero1600 from "../assets/llm-infra/hero-1600.webp";
import hero2400 from "../assets/llm-infra/hero-2400.webp";
import private800 from "../assets/llm-infra/private-800.webp";
import private1400 from "../assets/llm-infra/private-1400.webp";
import onPrem800 from "../assets/llm-infra/on-prem-800.webp";
import onPrem1400 from "../assets/llm-infra/on-prem-1400.webp";
import vpc800 from "../assets/llm-infra/vpc-800.webp";
import vpc1400 from "../assets/llm-infra/vpc-1400.webp";
import openSource800 from "../assets/llm-infra/open-source-800.webp";
import openSource1400 from "../assets/llm-infra/open-source-1400.webp";
import llmops800 from "../assets/llm-infra/llmops-800.webp";
import llmops1400 from "../assets/llm-infra/llmops-1400.webp";
import rag800 from "../assets/llm-infra/rag-800.webp";
import rag1400 from "../assets/llm-infra/rag-1400.webp";
import chat800 from "../assets/llm-infra/internal-chat-800.webp";
import chat1400 from "../assets/llm-infra/internal-chat-1400.webp";
import fineTuning800 from "../assets/llm-infra/fine-tuning-800.webp";
import fineTuning1400 from "../assets/llm-infra/fine-tuning-1400.webp";
import chip800 from "../assets/llm-infra/chip-800.webp";
import archive800 from "../assets/llm-infra/archive-800.webp";

export { LLM_INFRA_SLUG };
export const LLM_INFRA_PATH = `${SERVICES_BASE_PATH}/${LLM_INFRA_SLUG}`;

/** `srcSet` string from a { width: url } map. */
const set = (m) =>
  Object.entries(m)
    .map(([w, url]) => `${url} ${w}w`)
    .join(", ");

export const hero = {
  eyebrow: "Enterprise LLM Infrastructure",
  titleLead: "Private LLM Infrastructure That",
  titleAccent: "Never Leaves Your Network",
  // TODO: client review
  body:
    "Your proprietary data should not travel through someone else's API. We design, deploy " +
    "and run large language models on your own servers, inside your own cloud account, or " +
    "fully air-gapped, so you keep the data, the model and the cost curve under your control.",
  ctaText: "Book a Discovery Call",
  secondaryCtaText: "See What We Build",
  image: {
    src: hero1600,
    srcSet: set({ 960: hero960, 1600: hero1600, 2400: hero2400 }),
    alt: "Rows of server racks with cabling glowing in a dark data centre",
  },
  /** Deployment targets shown as floating glass chips over the hero photo. */
  chips: ["On-premise", "Private VPC", "Air-gapped", "Hybrid"],
  proof: [
    `${companyStats.projects}+ projects`,
    `${companyStats.experts}+ engineers`,
    `${companyStats.countries}+ countries`,
  ],
};

export const outgrown = {
  eyebrow: "Who this is for",
  titleLead: "Your Business Has",
  titleAccent: "Outgrown Public AI APIs",
  // Wraps around the circular chip photo (shape-outside: circle()).
  intro: [
    "Most teams start with a hosted LLM API, and for a prototype that is the right call. " +
      "Then usage grows. Sensitive records start flowing through a third party's servers, the " +
      "monthly token bill climbs faster than the value it creates, and compliance starts " +
      "asking questions nobody can answer with a vendor's terms of service.",
    "You also lose control in quieter ways: the model behind the endpoint changes without " +
      "notice, rate limits appear at the worst moment, and latency is set by someone else's " +
      "queue. That is usually the point where patching stops working and real infrastructure " +
      "starts paying for itself.",
  ],
  introImage: { src: chip800, alt: "A processor chip lit against a dark background" },
  pains: [
    {
      icon: "TbShieldLock",
      title: "Data Privacy Risk",
      body:
        "Every prompt sent to a public endpoint leaves your network. For patient records, " +
        "financials, contracts or strategy documents, that is not an acceptable default.",
    },
    {
      icon: "TbScale",
      title: "Compliance Exposure",
      body:
        "GDPR, HIPAA, SOC 2 and sector rules demand data residency and access control that " +
        "shared public APIs rarely give you out of the box.",
    },
    {
      icon: "TbTrendingUp",
      title: "Unpredictable Costs",
      body:
        "Per-token pricing feels cheap at pilot volume. At enterprise volume it compounds. " +
        "Owned infrastructure turns that into a fixed, forecastable line item.",
    },
    {
      icon: "TbLockAccess",
      title: "Vendor Lock-In",
      body:
        "When one provider's price change, rate limit or policy update can stall your " +
        "product, your roadmap is not really yours. Private infrastructure gives it back.",
    },
    {
      icon: "TbClockBolt",
      title: "Latency On Critical Paths",
      body:
        "Round trips to an external API add latency to every AI-powered step. Inference " +
        "close to your data and users is measurably faster for real-time workflows.",
    },
    {
      icon: "TbAdjustmentsHorizontal",
      title: "No Control Over Model Behaviour",
      body:
        "Hosted models are updated on the provider's schedule. On your own stack you choose " +
        "which model version runs, and exactly when it changes.",
    },
  ],
  closing: "If two or more of these sound familiar, you are ready for private LLM infrastructure.",
};

// TODO: client review (all service descriptions)
export const services = {
  eyebrow: "What we build",
  titleLead: "Enterprise LLM Infrastructure",
  titleAccent: "Services We Deliver",
  subtitle:
    "From the first GPU node to day-two operations, every layer is built for security, " +
    "scale and reliability, and handed over documented.",
  items: [
    {
      id: "private",
      title: "Private LLM Deployment",
      lead: "Run large language models entirely inside your own environment. No data leaves your network, no shared compute, no third-party access.",
      body: "We stand up the model on dedicated servers or isolated cloud capacity, wire in access control and connect it to your internal systems. Your team gets a private assistant that behaves like the public tools, built on open or licensed models you choose, with full data ownership.",
      bestFor:
        "Organisations with sensitive data, strict compliance, or query volumes that make public APIs uneconomical.",
      image: {
        src: private800,
        srcSet: set({ 800: private800, 1400: private1400 }),
        alt: "Server racks with orange network cabling in a data centre aisle",
      },
    },
    {
      id: "on-prem",
      title: "On-Premise LLM Deployment",
      lead: "Keep the model physically inside your own data centre: the highest level of control available, with no internet dependency and no cloud exposure.",
      body: "We handle GPU server configuration, model installation, inference optimisation and internal API setup. Your teams reach the LLM through a secure internal endpoint, and nothing leaves the building.",
      bestFor:
        "Healthcare, finance, legal and government teams where data residency and air-gapped operation are non-negotiable.",
      image: {
        src: onPrem800,
        srcSet: set({ 800: onPrem800, 1400: onPrem1400 }),
        alt: "Server rack cabling lit green inside an on-premise server room",
      },
    },
    {
      id: "vpc",
      title: "VPC And Private Cloud LLM Deployment",
      lead: "Not every enterprise needs its own hardware. If you already run on AWS, Azure or GCP, we deploy your LLM inside a Virtual Private Cloud, sealed off from the public internet.",
      body: "We configure the VPC, deploy the model behind private API endpoints and set network policies that block unauthorised access. You get cloud elasticity with the privacy profile of an on-premise install.",
      bestFor:
        "Teams that want cloud scalability without putting AI workloads on shared infrastructure.",
      image: {
        src: vpc800,
        srcSet: set({ 800: vpc800, 1400: vpc1400 }),
        alt: "Blue network cables plugged into a cloud router switch",
      },
    },
    {
      id: "open-source",
      title: "Open-Source LLM Hosting",
      lead: "You do not have to pay per token for a capable model. Open-weight families such as Llama, Mistral, Mixtral, Qwen, Phi and DeepSeek now match commercial APIs on many enterprise tasks.",
      body: "We benchmark candidates against your real use case, pick the right one, and host it on your infrastructure with tuned inference settings: a high-performing system with no recurring API fees and full control over the weights.",
      bestFor:
        "Cost-conscious enterprises, high-volume AI products, and teams that want domain models without licensing limits.",
      image: {
        src: openSource800,
        srcSet: set({ 800: openSource800, 1400: openSource1400 }),
        alt: "A processor die glowing on a dense circuit board",
      },
    },
    {
      id: "llmops",
      title: "LLMOps And Model Serving",
      lead: "Deploying a model is the start. Running it reliably at enterprise scale takes serving infrastructure, monitoring and operational guardrails.",
      body: "We cover the production stack: serving with vLLM or Hugging Face TGI, load balancing across inference nodes, request batching for throughput, rate limiting, multi-model routing and traffic-based autoscaling, plus dashboards for latency, error rate and usage in real time.",
      bestFor:
        "Organisations that need production SLAs, uptime commitments and scaling without manual intervention.",
      image: {
        src: llmops800,
        srcSet: set({ 800: llmops800, 1400: llmops1400 }),
        alt: "Monitoring dashboard with latency and quality metrics on a screen",
      },
    },
    {
      id: "rag",
      title: "RAG Infrastructure And Knowledge Base Setup",
      lead: "Retrieval-Augmented Generation lets the LLM answer from your own documents, databases and internal knowledge, without retraining the model.",
      body: "We build the whole pipeline: document ingestion and parsing, embedding generation, a vector store (Qdrant, pgvector, Weaviate or Pinecone), retrieval and re-ranking logic, and the link to your serving layer. Answers come back grounded in, and cited to, your own sources.",
      bestFor:
        "Enterprises that want the LLM to work over manuals, policies, contracts or proprietary datasets, privately.",
      image: {
        src: rag800,
        srcSet: set({ 800: rag800, 1400: rag1400 }),
        alt: "A wall covered edge to edge in open book pages",
      },
    },
    {
      id: "internal-chat",
      title: "Internal ChatGPT For Enterprises",
      lead: "Give every team a private assistant that works like ChatGPT but runs entirely on your infrastructure, grounded in your knowledge and visible only to your staff.",
      body: "We deliver the full stack: the LLM backend, an OpenAI-compatible internal API, a chat interface people can use on day one, role-based access control, and integrations with Slack, Microsoft Teams or your intranet.",
      bestFor:
        "Companies lifting productivity across HR, legal, finance, engineering and support without sending internal queries to public AI.",
      image: {
        src: chat800,
        srcSet: set({ 800: chat800, 1400: chat1400 }),
        alt: "Colleagues gathered around a monitor reviewing an internal tool",
      },
    },
    {
      id: "fine-tuning",
      title: "LLM Fine-Tuning Infrastructure",
      lead: "Fine-tuning on proprietary data needs more than a training script: it needs a secure pipeline, clean data handling, a model registry and version control.",
      body: "We build that foundation: isolated training environments, LoRA and QLoRA pipelines, experiment tracking, evaluation harnesses and a model registry, so your team can ship, compare and roll back model versions with confidence.",
      bestFor:
        "Organisations with proprietary datasets that want a domain model clearly ahead of a general-purpose LLM on their tasks.",
      image: {
        src: fineTuning800,
        srcSet: set({ 800: fineTuning800, 1400: fineTuning1400 }),
        alt: "Close-up of a processor package on a green circuit board",
      },
    },
  ],
};

export const midCta = {
  title: "Not Sure Which Setup Fits Your Needs?",
  body:
    "Most enterprises need more than one of these working together. We map your current " +
    "systems, find where private AI pays back fastest, and recommend the right combination " +
    "for your environment.",
  ctaText: "Book an Enterprise AI Assessment",
};

// TODO: client review (use cases)
/** Photo and alt for each slug come from industriesData, so they match the industry pages. */
export const industries = {
  eyebrow: "Industries we specialise in",
  titleLead: "LLM Infrastructure For Industries That",
  titleAccent: "Cannot Afford To Get AI Wrong",
  subtitle:
    "Every deployment is shaped around the data sensitivity, compliance rules and daily " +
    "workflows of the sector it runs in.",
  items: [
    {
      slug: "healthcare",
      label: "Healthcare",
      summary:
        "Keep patient data inside your network while giving clinical and admin teams a capable AI assistant.",
      useCases: [
        "HIPAA-aligned clinical note summarisation",
        "Discharge summary and patient record drafting",
        "Medical coding and billing document processing",
        "Private RAG over EHR exports and clinical protocols",
        "Radiology and pathology report summarisation",
      ],
    },
    {
      slug: "finance",
      label: "Finance & Fintech",
      summary:
        "Run analysis over statements, filings and transaction data without exposing a single record.",
      useCases: [
        "Earnings and filing analysis over private data",
        "KYC and onboarding document extraction",
        "Internal research assistant for analysts",
        "Regulatory change summaries for compliance teams",
        "Fraud case narrative drafting",
      ],
    },
    {
      slug: "legal",
      label: "Legal",
      summary:
        "Privileged material stays privileged: the model runs where the documents already live.",
      useCases: [
        "Contract review and clause extraction",
        "Due diligence over data-room documents",
        "Precedent search across internal matters",
        "First-draft memos from case files",
        "Matter summaries for partners",
      ],
    },
    {
      slug: "insurance",
      label: "Insurance",
      summary:
        "Speed up claims and underwriting with models that never send policyholder data outside.",
      useCases: [
        "Claims intake summarisation",
        "Policy wording Q&A for agents",
        "Underwriting document extraction",
        "Complaint triage and response drafting",
        "Internal knowledge assistant for adjusters",
      ],
    },
    {
      slug: "retail",
      label: "Retail & E-Commerce",
      summary:
        "Product, pricing and customer data stay in-house while AI scales your catalogue and support.",
      useCases: [
        "Catalogue copy generation at scale",
        "Support assistant grounded in order data",
        "Supplier document and invoice processing",
        "Merchandising insights from reviews",
        "Internal SOP assistant for store teams",
      ],
    },
    {
      slug: "education",
      label: "Education",
      summary: "Give students and staff AI help without sending learner records to a third party.",
      useCases: [
        "Course-grounded tutoring assistant",
        "Assessment feedback drafting",
        "Admissions document processing",
        "Policy and handbook Q&A for staff",
        "Research literature summarisation",
      ],
    },
    {
      slug: "supply-chain",
      label: "Supply Chain",
      summary:
        "Put shipment, supplier and contract data to work with a model that runs next to your ERP.",
      useCases: [
        "Supplier contract and SLA analysis",
        "Shipment exception summaries",
        "Procurement document extraction",
        "Natural-language queries over ERP data",
        "SOP assistant for warehouse teams",
      ],
    },
    {
      slug: "real-estate",
      label: "Real Estate",
      summary: "Leases, valuations and tenant records analysed privately, at portfolio scale.",
      useCases: [
        "Lease abstraction and key-date extraction",
        "Listing description generation",
        "Tenant enquiry assistant",
        "Valuation report summarisation",
        "Portfolio Q&A over internal documents",
      ],
    },
  ],
};

// TODO: client review (process steps)
export const process = {
  eyebrow: "How we work",
  titleLead: "How Axiomra Builds Your",
  titleAccent: "Enterprise LLM Infrastructure",
  body:
    "Every environment is different. The process accounts for your existing infrastructure, " +
    "compliance requirements and business goals, from the first call to a fully operational " +
    "LLM platform.",
  steps: [
    {
      title: "Discovery And Requirements",
      body: "We map your data, users, compliance obligations and the workloads you want to run, and agree what success looks like in numbers before anything is built.",
    },
    {
      title: "Architecture Design And Model Selection",
      body: "We decide between on-premise, VPC, private cloud or hybrid, and benchmark open-weight and licensed models on accuracy, latency, hardware needs and cost. You get a written architecture before any build starts.",
    },
    {
      title: "Infrastructure Provisioning",
      body: "GPU capacity, networking, storage and identity are set up as code (Terraform, Kubernetes), so every environment is reproducible and reviewable.",
    },
    {
      title: "Model Deployment And Optimisation",
      body: "We deploy the model with a production serving engine, then tune quantisation, batching and caching until throughput and latency hit the agreed targets.",
    },
    {
      title: "Integration And Access Control",
      body: "The model is connected to your documents, data and tools, behind SSO, role-based access and audit logging.",
    },
    {
      title: "Security And Compliance Hardening",
      body: "Network isolation, encryption in transit and at rest, prompt and output guardrails, and the evidence your auditors will ask for.",
    },
    {
      title: "Testing, Evaluation And Launch",
      body: "Load tests, red-teaming and evaluation against your own golden set, then a staged rollout to real users.",
    },
    {
      title: "Monitoring And Ongoing Support",
      body: `Dashboards, alerting and model updates after go-live, with ${companyStats.supportDays}-day post-launch support included.`,
    },
  ],
};

/** Tool groups for the stack tabs. `slug` resolves a vendored logo, if one exists. */
export const stack = {
  eyebrow: "What we work with",
  titleLead: "The Stack Behind",
  titleAccent: "Every Private LLM Deployment",
  subtitle:
    "Production-tested tools, chosen per project for performance, security and the environment " +
    "you deploy into.",
  groups: [
    {
      name: "Models",
      tools: [
        { name: "Llama", slug: "meta" },
        { name: "Mistral", slug: "mistralai" },
        { name: "Gemma", slug: "googlegemini" },
        { name: "Qwen" },
        { name: "DeepSeek" },
        { name: "Claude", slug: "anthropic" },
      ],
    },
    {
      name: "Serving & Inference",
      tools: [
        { name: "vLLM" },
        { name: "Hugging Face TGI", slug: "huggingface" },
        { name: "Ollama", slug: "ollama" },
        { name: "NVIDIA Triton", slug: "nvidia" },
        { name: "ONNX Runtime", slug: "onnx" },
        { name: "Ray Serve", slug: "ray" },
      ],
    },
    {
      name: "Infrastructure",
      tools: [
        { name: "Kubernetes", slug: "kubernetes" },
        { name: "Docker", slug: "docker" },
        { name: "Terraform", slug: "terraform" },
        { name: "Google Cloud", slug: "googlecloud" },
        { name: "NGINX", slug: "nginx" },
        { name: "Cloudflare", slug: "cloudflare" },
      ],
    },
    {
      name: "RAG & Data",
      tools: [
        { name: "LangChain", slug: "langchain" },
        { name: "Qdrant", slug: "qdrant" },
        { name: "PostgreSQL + pgvector", slug: "postgresql" },
        { name: "Elasticsearch", slug: "elasticsearch" },
        { name: "Redis", slug: "redis" },
        { name: "Apache Kafka", slug: "apachekafka" },
      ],
    },
    {
      name: "Training & MLOps",
      tools: [
        { name: "PyTorch", slug: "pytorch" },
        { name: "MLflow", slug: "mlflow" },
        { name: "Weights & Biases", slug: "weightsandbiases" },
        { name: "Databricks", slug: "databricks" },
        { name: "Apache Airflow", slug: "apacheairflow" },
        { name: "FastAPI", slug: "fastapi" },
      ],
    },
    {
      name: "Observability",
      tools: [
        { name: "Prometheus", slug: "prometheus" },
        { name: "Grafana", slug: "grafana" },
        { name: "Sentry", slug: "sentry" },
        { name: "OpenTelemetry" },
        { name: "Langfuse" },
        { name: "Pydantic", slug: "pydantic" },
      ],
    },
  ],
};

export const toolsCta = {
  title: "The Right Tools. The Right Team. Built For Your Stack.",
  body:
    "Knowing the frameworks is table stakes. Combining them into a system that holds up in " +
    "production is the job. Tell us what you want to run and we will map the architecture.",
  ctaText: "Book a Free Technical Discovery Call",
};

// TODO: client review
export const whyUs = {
  eyebrow: "Why Axiomra",
  titleLead: "What You Actually Get",
  titleAccent: "When You Work With Us",
  // Wraps the organic SVG shape (shape-outside: url(svg)).
  intro: [
    "Plenty of AI vendors will take the project. Fewer have put private models into regulated, " +
      "high-stakes production and kept them healthy afterwards. Three habits separate how we work.",
    "We scope for production from the first call, we own every layer from GPUs to the chat " +
      "window, and we stay on after launch, because models drift, data shifts and usage grows " +
      "in directions nobody predicted on day one.",
  ],
  introImage: { src: archive800, alt: "Rolling archive shelving units in a records room" },
  pillars: [
    {
      icon: "TbRocket",
      title: "Built For Production, Not Demos",
      body: "A working notebook is not a system. Every engagement ships with evaluation, monitoring, rollback and a documented handoff, because that is where most enterprise AI stalls.",
    },
    {
      icon: "TbStack2",
      title: "One Team, The Full Stack",
      body: "Most vendors own one layer. We cover data architecture, model selection, deployment, serving and operations, so you never coordinate three suppliers to ship one system.",
    },
    {
      icon: "TbLifebuoy",
      title: "Engaged After Go-Live",
      body: "Structured post-launch support: monitoring, re-evaluation against your golden set and proactive recommendations when performance signals change.",
    },
  ],
  stats: [
    { value: `${companyStats.projects}+`, label: "Projects delivered" },
    { value: `${companyStats.experts}+`, label: "In-house engineers" },
    { value: `${companyStats.countries}+`, label: "Countries served" },
    { value: `${companyStats.partnerships}+`, label: "Partnerships" },
  ],
};

export const closing = {
  titleLead: "Build Your Private LLM Infrastructure",
  titleAccent: "With A Team That Has Done It Before",
  // Sits inside the inverted clip-path cut-out.
  body: [
    "If you are handling sensitive data, hitting API cost ceilings, or working toward " +
      "compliance requirements a public AI service cannot meet, this is the right conversation.",
    "We have built private LLM platforms across regulated and high-growth industries, and we " +
      "know how to get you there without unnecessary complexity or cost.",
  ],
  ctaText: "Book an Enterprise AI Assessment",
};

export const testimonialsHeading = {
  titleLead: "Leaders Who",
  titleAccent: "Trust Our Engineering",
};

// TODO: client review
export const faqs = [
  {
    q: "Do I need to own GPU hardware to run a private LLM?",
    a: "No. We can deploy into GPU capacity in your own AWS, Azure or GCP account (VPC), into a private cloud provider, or onto hardware you own. We size the options during discovery so you can compare cost before committing.",
  },
  {
    q: "Which open-source LLM is best for enterprise use?",
    a: "It depends on the task, languages, latency target and hardware budget. We benchmark candidates such as Llama, Mistral, Qwen and DeepSeek against your own data and recommend the smallest model that meets the bar.",
  },
  {
    q: "How long does it take to deploy a production-grade private LLM?",
    a: "A focused pilot on existing infrastructure typically takes a few weeks; a full multi-team platform with RAG, access control and monitoring takes longer. You get a timeline with the architecture document, before build starts.",
  },
  {
    q: "Can the LLM be connected to our internal documents and knowledge base?",
    a: "Yes. We build a RAG pipeline over your documents, wikis and databases, with permissions respected at retrieval time, so people only get answers from sources they are allowed to see.",
  },
  {
    q: "What happens if we want to switch to a different model later?",
    a: "The serving layer exposes an OpenAI-compatible API and models sit behind a registry, so swapping or A/B testing a model is a configuration change, not a rebuild.",
  },
  {
    q: "How is this different from Azure OpenAI Service or AWS Bedrock?",
    a: "Those are managed services and a good fit for some teams. Private infrastructure gives you full control of model versions, weights, network boundaries and cost, and works fully air-gapped. We will tell you honestly if a managed service fits you better.",
  },
  {
    q: "Can you fine-tune the LLM on our proprietary data?",
    a: "Yes, using LoRA or QLoRA inside your environment, with experiment tracking, evaluation and a model registry. Often RAG alone gets you most of the way, and we will test that first.",
  },
  {
    q: "How do you handle model updates and ongoing maintenance?",
    a: `New model versions are evaluated against your golden set before rollout, and released in stages with rollback. Every project includes ${companyStats.supportDays}-day post-launch support, with ongoing plans after that.`,
  },
  {
    q: "Is private LLM infrastructure only for large organisations?",
    a: "No. Smaller teams with sensitive data or high, steady usage often see the clearest payback, because a single well-sized model can replace a fast-growing API bill.",
  },
  {
    q: "What do you need from us to get started?",
    a: "A short call, a description of the use cases you have in mind, and a contact on your infrastructure or security team. We take it from there.",
  },
];
