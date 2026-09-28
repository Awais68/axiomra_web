/**
 * Copy and imagery for the Marketing industry page (/industries/marketing).
 *
 * Everything the page renders comes from here, so a copy change never touches
 * a component. Section order in the page mirrors this file.
 */

import { caseStudyPath } from "../routes.constants";
import heroImg from "../assets/industries/marketing/hero.webp";
import introImg from "../assets/industries/marketing/intro.webp";

import svcAutomationImg from "../assets/industries/marketing/svc-automation.webp";
import svcAnalyticsImg from "../assets/industries/marketing/svc-analytics.webp";
import svcRtbImg from "../assets/industries/marketing/svc-rtb.webp";
import svcEmailImg from "../assets/industries/marketing/svc-email.webp";
import svcSocialImg from "../assets/industries/marketing/svc-social.webp";
import svcSalesImg from "../assets/industries/marketing/svc-sales.webp";
import svcCrmImg from "../assets/industries/marketing/svc-crm.webp";
import svcWorkflowImg from "../assets/industries/marketing/svc-workflow.webp";
import svcRevenueImg from "../assets/industries/marketing/svc-revenue.webp";
import svcChatbotImg from "../assets/industries/marketing/svc-chatbot.webp";
import svcLoyaltyImg from "../assets/industries/marketing/svc-loyalty.webp";
import svcAgencyImg from "../assets/industries/marketing/svc-agency.webp";

import midCtaBgImg from "../assets/industries/marketing/midcta-bg.webp";

import solTransformationImg from "../assets/industries/marketing/sol-transformation.webp";
import solConsultingImg from "../assets/industries/marketing/sol-consulting.webp";
import solProductImg from "../assets/industries/marketing/sol-product.webp";
import solMobileImg from "../assets/industries/marketing/sol-mobile.webp";
import solCmsImg from "../assets/industries/marketing/sol-cms.webp";
import solIntegrationImg from "../assets/industries/marketing/sol-integration.webp";

import stkAgencyImg from "../assets/industries/marketing/stk-agency.webp";
import stkCrmImg from "../assets/industries/marketing/stk-crm.webp";
import stkProductImg from "../assets/industries/marketing/stk-product.webp";

import subSmmImg from "../assets/industries/marketing/sub-smm.webp";
import subInfluencerImg from "../assets/industries/marketing/sub-influencer.webp";
import subEmailImg from "../assets/industries/marketing/sub-email.webp";
import subContentImg from "../assets/industries/marketing/sub-content.webp";
import subSeoImg from "../assets/industries/marketing/sub-seo.webp";
import subPpcImg from "../assets/industries/marketing/sub-ppc.webp";
import subAffiliateImg from "../assets/industries/marketing/sub-affiliate.webp";
import subVideoImg from "../assets/industries/marketing/sub-video.webp";
import subEventImg from "../assets/industries/marketing/sub-event.webp";
import subBrandImg from "../assets/industries/marketing/sub-brand.webp";

import textureBgImg from "../assets/industries/marketing/texture-bg.webp";
import buildVisualImg from "../assets/industries/marketing/build-visual.webp";

import blog1Img from "../assets/industries/marketing/blog-1.webp";
import blog2Img from "../assets/industries/marketing/blog-2.webp";
import blog3Img from "../assets/industries/marketing/blog-3.webp";
import finalCtaBgImg from "../assets/industries/marketing/final-cta.webp";

export const MARKETING_SLUG = "marketing";

export const hero = {
  eyebrow: "AI for the marketing industry",
  titleLead: "AI & Data Solutions for",
  titleAccent: "Smarter Marketing Decisions",
  titleTail: "",
  body:
    "Turn scattered customer, campaign and channel data into clearer actions. Axiomra helps marketing teams use AI, analytics and automation to improve targeting, reduce repetitive work, understand performance and personalise customer journeys. We focus on practical Data & AI use cases that fit your existing marketing stack—so teams can move faster without adding another disconnected platform.",
  ctaText: "Explore Your Marketing AI Use Case",
  image: heroImg,
  alt: "A hand reaching into a glowing blue network of connected data points",
  reviews: { platform: "Clutch", rating: 5, count: 12 },
};

export const intro = {
  titleLead: "Turning Marketing Data Into",
  titleAccent: "Clearer, Faster Decisions",
  paragraphs: [
    "Axiomra is a Data & AI partner for marketing and creative teams. We combine marketing domain knowledge with data engineering, analytics and applied AI to help organisations simplify campaign operations, improve decision-making and work better across teams.",
    "We start with the decisions and workflows that cost your team the most, then apply the right approach: workflow automation, personalisation models, near-real-time analytics or better-connected campaign data. We work with the systems your teams already use, not replacing them. For CMOs, marketing directors and creative strategists, that means clearer ROI, faster optimisation cycles and marketing intelligence that compounds.",
  ],
  ctaText: "Book a Free Data & AI Consultation",
  image: introImg,
  alt: "A marketing lead reviewing a campaign dashboard on a tablet",
};

export const impact = {
  titleLead: "The Role Of AI In",
  titleAccent: "Modern Marketing Operations",
  body:
    "Data & AI are changing how brands plan, execute and measure campaigns. From automating insights and optimising ad performance to enabling more relevant customer experiences, AI helps marketing teams act faster, smarter and more strategically.",
  stats: [
    {
      value: "77%",
      label: "of marketers who have adopted generative AI report using it for creative development tasks.",
      source: "Gartner, Use of GenAI Report 2025",
    },
    {
      value: "35%",
      label:
        "of marketing teams say AI is used for content creation, the top AI application, followed by 30% for data analysis and insights.",
      source: "HubSpot, State of Marketing Report 2025",
    },
    {
      value: "65%",
      label: "of marketing leaders said their team plans to increase investment in AI and automation tools in 2025.",
      source: "HubSpot, State of AI Report 2025",
    },
  ],
};

/**
 * The challenge rail. Each entry is a barrier marketing teams hit, and how
 * Data & AI removes it.
 */
export const challenges = {
  eyebrow: "Overcoming key barriers in marketing",
  titleLead: "Solving Key Marketing Challenges",
  titleAccent: "With Data & AI",
  items: [
    {
      title: "Inability to Measure True Marketing ROI",
      body:
        "Many marketing teams cannot clearly see which campaigns drive revenue because data sits in different tools and systems. This makes it hard to prove value or adjust budgets. We connect channel, campaign and revenue data into one trusted analytics layer, giving you a full view of performance so you can invest where it matters most.",
    },
    {
      title: "Manual Reporting and Dashboards",
      body:
        "Monday mornings disappear into copy-paste reporting that is stale by the time it is read. We automate the data pipeline from ingestion to reporting, so dashboards refresh themselves and analysts spend their hours on interpretation rather than assembly.",
    },
    {
      title: "Inability to Personalise at Scale",
      body:
        "Personalisation that stops at a first name does not move a number. We build segmentation models on behaviour, intent and lifecycle stage, so your existing email, web and paid channels can serve the right message to each audience.",
    },
    {
      title: "Inability to Scale Content Production",
      body:
        "Content demand outruns the team long before quality does. We set up generative AI workflows with brand guidance, human review gates and asset governance, so volume rises without the brand drifting.",
    },
    {
      title: "Lack of Performance Tracking",
      body:
        "Campaigns get judged after the budget is gone. We apply predictive performance models to live campaign data so underperformance surfaces within hours, with a recommended reallocation attached.",
    },
    {
      title: "Slow Turnaround Time for Insights",
      body:
        "When a question takes a week to answer, the answer no longer matters. We enable self-service analytics and natural-language querying on top of a governed data layer, so insight turnaround moves from days to minutes.",
    },
    {
      title: "Poor Email List Segmentation",
      body:
        "Broad lists burn sender reputation and depress every downstream metric. We rebuild segmentation on engagement and propensity scoring, with data hygiene and send-time optimisation feeding the email tools you already use.",
    },
  ],
};

/**
 * Twelve Data & AI capability areas. Each is a card with a photo and a
 * description.
 */
export const services = {
  eyebrow: "Where can Data & AI help your marketing team?",
  titleLead: "Data & AI Capabilities for Marketing",
  titleAccent: "That Power Business Growth",
  body:
    "Marketing teams lose time to fragmented data, manual reporting and repetitive coordination. We apply analytics, automation and AI to the specific bottlenecks in your workflow, so campaigns run faster, results are clearer and decisions are better informed across every channel.",
  items: [
    {
      title: "Marketing Automation & Workflow Intelligence",
      body:
        "Automate repetitive campaign tasks, approvals, routing and follow-up while keeping humans in control of strategy. Axiomra maps your existing workflow, identifies bottlenecks and applies AI where it can save measurable time.",
      image: svcAutomationImg,
      alt: "A laptop showing an automated campaign workflow diagram",
    },
    {
      title: "Marketing Analytics & Performance Intelligence",
      body:
        "Unify channel, campaign and customer data into a trusted reporting layer. Use AI-assisted analysis to surface trends, attribution gaps and performance changes so teams can act faster with better context.",
      image: svcAnalyticsImg,
      alt: "A dark analytics dashboard with live performance charts",
    },
    {
      title: "Paid Media Optimisation",
      body:
        "Use performance signals to improve bid, budget and audience decisions while preserving governance.",
      image: svcRtbImg,
      alt: "Trading screens showing live bid activity in green and red",
    },
    {
      title: "Email Personalisation Intelligence",
      body: "Improve segmentation, timing and content relevance using behavioural data.",
      image: svcEmailImg,
      alt: "Hands typing an email campaign on a laptop",
    },
    {
      title: "Social Media Intelligence",
      body:
        "Centralise social performance data, identify content patterns and support faster campaign learning.",
      image: svcSocialImg,
      alt: "Social media icons glowing on a smartphone screen",
    },
    {
      title: "Marketing-to-Sales Intelligence",
      body:
        "Improve lead scoring, routing and follow-up visibility so qualified opportunities are less likely to be missed.",
      image: svcSalesImg,
      alt: "A sales team reviewing pipeline figures in a meeting room",
    },
    {
      title: "Customer Data & CRM Intelligence",
      body:
        "Connect customer interactions across systems to create a clearer, more actionable view of each account or audience.",
      image: svcCrmImg,
      alt: "A support specialist working a CRM queue with a headset on",
    },
    {
      title: "Workflow Automation",
      body: "Reduce manual approvals, status updates and repetitive coordination across marketing teams.",
      image: svcWorkflowImg,
      alt: "A kanban board of campaign tasks mapped out on sticky notes",
    },
    {
      title: "Revenue & Attribution Analytics",
      body:
        "Connect campaign activity to pipeline and revenue so budget decisions are based on business impact.",
      image: svcRevenueImg,
      alt: "A finance review session with revenue charts on the table",
    },
    {
      title: "Conversational AI",
      body:
        "Design governed AI assistants for lead capture, FAQ support and guided customer journeys with clear escalation to people.",
      image: svcChatbotImg,
      alt: "A smartphone displaying an AI chat assistant conversation",
    },
    {
      title: "Loyalty & Retention Intelligence",
      body:
        "Use behavioural, transaction and engagement data to identify churn risk, next-best actions and more relevant loyalty offers.",
      image: svcLoyaltyImg,
      alt: "A customer redeeming a loyalty card at a shop counter",
      // Optional: links the card to a long-form case study on the same topic.
      caseStudy: caseStudyPath("retail-ai-personalized-marketing"),
    },
    {
      title: "Agency Data & Performance Operations",
      body:
        "For agencies managing multiple clients, Axiomra can unify campaign, project and performance data into consistent reporting and AI-assisted insights—reducing manual consolidation and improving visibility across accounts.",
      image: svcAgencyImg,
      alt: "An agency strategist working on a digital advertising deck",
    },
  ],
};

export const midCta = {
  title: "Make Your Marketing Data Work Harder",
  body:
    "If your team is spending too much time moving data between tools, building reports manually or guessing what drives results, start with a focused Data & AI assessment. Axiomra will help identify high-value automation and analytics opportunities that fit your current stack and commercial goals.",
  ctaText: "Discuss Your Marketing AI Priorities",
  background: midCtaBgImg,
};

/**
 * The services fold: six alternating photo/copy rows, one per service line.
 */
export const solutions = {
  eyebrow: "What types of AI services do we offer?",
  titleLead: "AI & Data Services",
  titleAccent: "for Modern Marketing Teams",
  body:
    "Axiomra helps enterprises and agencies turn marketing data into measurable business decisions. Our services include AI strategy, data integration, analytics, predictive modelling, workflow automation and generative AI enablement. We work with your existing CRM, advertising, analytics and content systems to solve specific problems rather than forcing a full technology replacement.",
  items: [
    {
      title: "Marketing AI Strategy",
      body:
        "We work closely with stakeholders to identify automation opportunities, prioritise AI use cases and align them with business objectives. The result is a clear plan for where AI will improve decision-making and cut operational waste.",
      extra:
        "The work starts with the campaign process that costs your team the most hours, not with a technology rollout. We map how briefs, approvals, launches and reporting actually move today, then identify the steps where data and AI can take the load.",
      points: [
        "Workflow audit across briefing, approval, launch and reporting cycles",
        "A prioritised AI roadmap ranked by expected time and value saved",
        "Governance, ownership and success measures agreed up front",
      ],
      image: solTransformationImg,
      alt: "A strategist standing in front of a wall of projected data",
    },
    {
      title: "Predictive Modelling",
      body:
        "We build predictive models for the decisions marketing teams make every week: which audiences to target, which leads to prioritise, which customers are at risk and where the next budget shift should go.",
      extra:
        "You get an honest view of what your data can support, including the ideas that will not pay for themselves. Most marketing teams already hold more first-party signal than they use, and far less than an over-ambitious model needs.",
      points: [
        "Audit of your CRM, web, ad platform and offline data before any model is scoped",
        "Model shortlist with expected lift, effort and monthly running cost",
        "Validation against your own historical results before anything goes live",
      ],
      image: solConsultingImg,
      alt: "An analyst working across multiple monitors",
    },
    {
      title: "Marketing Analytics & Reporting",
      body:
        "We turn scattered campaign and customer data into a trusted analytics layer, with dashboards and AI-assisted analysis that show what is working, what is not and why.",
      extra:
        "Delivery runs in short increments, with the first useful reporting live long before the full scope lands. Nothing is built behind a curtain for three months and revealed at the end.",
      points: [
        "Agreed metric definitions so every team reads the same numbers",
        "Regular releases your marketers can open and comment on",
        "Documentation and handover your own analysts can maintain",
      ],
      image: solProductImg,
      alt: "A team mapping a plan on a studio whiteboard",
    },
    {
      title: "Generative AI Enablement",
      body:
        "We help marketing teams adopt generative AI for drafting, content variation, research and summarisation, with brand guidance, human review and clear usage policies built into the workflow.",
      extra:
        "We start with the content tasks that consume the most time and carry the least risk, prove the gain, then extend carefully. Review gates stay in place so quality and brand voice hold as volume rises.",
      points: [
        "Use-case selection based on time saved and brand risk",
        "Brand guidance, prompt libraries and human review steps",
        "Usage policies and measurement so adoption can be governed",
      ],
      image: solMobileImg,
      alt: "Hands holding a smartphone above a desk with a keyboard",
    },
    {
      title: "Workflow Automation",
      body:
        "We automate the repetitive steps between content, campaign and reporting systems, whether you work with WordPress, Magento, Shopify, Contentful or a headless stack, so approved work moves faster with fewer manual hand-offs.",
      extra:
        "Content teams lose most of their time to the gap between writing and publishing: reformatting, re-approving and re-uploading the same asset per channel. We automate that gap inside the tools you already use.",
      points: [
        "Automated routing, approvals and status updates across teams",
        "Audit trails on every automated step",
        "Personalisation and localisation rules driven from a single content source",
      ],
      image: solCmsImg,
      alt: "A content manager publishing a campaign page on a laptop",
    },
    {
      title: "Data Integration",
      body:
        "We connect your CRM, ad platforms, email, web and support data, so lead data, campaign attribution and lifecycle stage stay in sync. Cleaner data between marketing and sales means fewer lost leads, accurate reporting and a single customer record everyone can trust.",
      extra:
        "Data ownership is decided per field rather than per system, because the arguments between marketing and sales are almost always about which side owns a value. Once that is settled in the data layer, attribution reporting stops being contested.",
      points: [
        "Data pipelines across CRM, ad platforms, email, web and support tools",
        "Deduplication and identity resolution so one person is one record",
        "Attribution that reconciles to the numbers finance already reports",
      ],
      image: solIntegrationImg,
      alt: "Teal fibre-optic cabling patched into a network switch",
    },
  ],
};

export const stakeholders = {
  eyebrow: "Who do we help?",
  titleLead: "Tailored Data & AI Solutions",
  titleAccent: "For Key Marketing Stakeholders",
  items: [
    {
      title: "Digital and Advertising Agencies",
      body:
        "Client, project and campaign performance data in one consistent reporting layer, so account teams spend their time on strategy instead of status updates.",
      image: stkAgencyImg,
      alt: "An agency team reviewing campaign work around a laptop",
    },
    {
      title: "CRM Manager",
      body:
        "A single customer view across every channel, with segmentation and lifecycle insights that refresh without a weekly export.",
      image: stkCrmImg,
      alt: "A CRM manager working across a tablet and laptop",
    },
    {
      title: "Product Marketing Manager",
      body:
        "Launch tracking, message testing and adoption analytics connected, so the next positioning call is made on evidence.",
      image: stkProductImg,
      alt: "A product marketing manager presenting launch results",
    },
  ],
};

/**
 * The marquee rail. Each sub-industry card shows its photo and label at rest,
 * and reveals the detail copy and capability list on hover or focus.
 */
export const subIndustries = {
  eyebrow: "Which marketing sector do we serve?",
  titleLead: "Data & AI Solutions",
  titleAccent: "Across Marketing Disciplines",
  body:
    "Different marketing teams measure success differently—but most face the same challenge: data is fragmented across channels and tools. Axiomra adapts AI and analytics to the operating model of your team, whether the priority is performance marketing, CRM, lifecycle marketing, content, social, agency reporting or customer intelligence.",
  items: [
    {
      label: "Social Media Marketing (SMM)",
      body: "Social performance data in one view, with AI-assisted drafting on brand and analytics that tie posts to pipeline.",
      points: ["Unified performance reporting", "Sentiment listening", "Creative performance scoring"],
      image: subSmmImg,
      alt: "A creator filming social content with a ring light",
    },
    {
      label: "Influencer Marketing",
      body: "Data-led creator discovery and measurement, with anomaly detection for fraud and incremental lift reporting.",
      points: ["Creator discovery models", "Fraud and anomaly detection", "Incrementality measurement"],
      image: subInfluencerImg,
      alt: "An influencer recording a video to camera",
    },
    {
      label: "Email Marketing",
      body: "Segmentation on propensity rather than demographics, with deliverability monitoring and send-time optimisation.",
      points: ["Propensity segmentation", "Deliverability monitoring", "Lifecycle analytics"],
      image: subEmailImg,
      alt: "A marketer building an email campaign at a desk",
    },
    {
      label: "Content Marketing",
      body: "Generative AI drafting with brand guidance and human review, plus topic-gap analysis to decide what to write next.",
      points: ["Topic gap analysis", "Assisted drafting", "Content performance insights"],
      image: subContentImg,
      alt: "A content strategist drafting an outline in a notebook",
    },
    {
      label: "Search Engine Optimisation",
      body: "Intent clustering and content scoring in one data pipeline, so ranking work is prioritised by expected revenue.",
      points: ["Intent clustering", "Crawl data analysis", "Revenue-weighted prioritisation"],
      image: subSeoImg,
      alt: "Two strategists discussing an SEO plan over coffee",
    },
    {
      label: "Performance & PPC",
      body: "Budget allocation models that recommend shifts across channels, with creative fatigue detection and bid guardrails.",
      points: ["Cross-channel budget models", "Creative fatigue alerts", "Bid guardrails"],
      image: subPpcImg,
      alt: "A performance marketer reviewing campaign charts on a laptop",
    },
    {
      label: "Affiliate & Partner Marketing",
      body: "Partner attribution and payout analytics, with anomaly detection that catches leakage before the invoice does.",
      points: ["Partner performance analytics", "Multi-touch attribution", "Leakage detection"],
      image: subAffiliateImg,
      alt: "A shopper checking out on an online store with a card",
    },
    {
      label: "Video Marketing",
      body: "AI-assisted clipping and captioning, with watch-through analytics feeding the next production brief.",
      points: ["AI clipping and captions", "Per-platform performance", "Watch-through analytics"],
      image: subVideoImg,
      alt: "A cinema camera set up on a production shoot",
    },
    {
      label: "Event Marketing",
      body: "Registration, session and engagement data joined up, so sales follows up on interest rather than a badge scan.",
      points: ["Attendee data integration", "Session engagement scoring", "Post-event lead routing"],
      image: subEventImg,
      alt: "A speaker presenting on stage to a conference audience",
    },
    {
      label: "Brand Marketing",
      body: "Brand tracking, share-of-voice monitoring and AI-assisted consistency checks across a growing team's output.",
      points: ["Share-of-voice tracking", "Brand consistency checks", "Brand health reporting"],
      image: subBrandImg,
      alt: "A brand moodboard pinned out with reference imagery",
    },
  ],
};

export const benefits = {
  eyebrow: "Key benefits of working with Axiomra",
  titleLead: "What Your Marketing Team Can Improve",
  titleAccent: "With Data & AI",
  body:
    "Axiomra focuses on business outcomes first: faster execution, clearer performance visibility, better customer relevance, connected data, secure AI adoption and scalable analytics. Every engagement begins with a defined problem, measurable success criteria and a clear view of the data required to support it.",
  items: [
    {
      title: "Faster Marketing Operations",
      body: "Automate repetitive analysis and coordination so teams spend more time on decisions.",
    },
    {
      title: "Better Data-Driven Decisions",
      body: "Create a trusted view across channels and surface insights faster.",
    },
    {
      title: "More Relevant Customer Experiences",
      body: "Use behavioural data responsibly to improve segmentation and personalisation.",
    },
    {
      title: "Connected Data",
      body: "Integrate CRM, analytics, content and campaign sources into one usable data layer.",
    },
    {
      title: "Responsible & Secure AI",
      body: "Design access, privacy and governance controls around the use case and data sensitivity.",
    },
    {
      title: "Scalable Data Foundations",
      body: "Build pipelines and models that can expand as channels, markets and data volumes grow.",
    },
  ],
};

export const build = {
  title: "Build a Practical AI Roadmap for Marketing",
  body:
    "Start with the workflows, data gaps and decisions that create the most friction today. Axiomra can help prioritise opportunities across analytics, automation, personalisation and generative AI, then define the data, governance and measurement needed to scale responsibly.",
  ctaText: "Request a Data & AI Consultation",
  texture: textureBgImg,
  image: buildVisualImg,
  alt: "A campaign performance report beside a phone showing live figures",
};

export const techStrip = {
  eyebrow: "Technologies we work with",
  titleLead: "Expertise In Advanced",
  titleAccent: "Data & AI Technologies",
  body:
    "The same proven toolchain sits under every marketing data and AI engagement we deliver. Pick a layer to see what it is made of.",
  ctaText: "View all tech stack",
  tabs: [
    {
      id: "ai",
      label: "Artificial Intelligence",
      items: [
        "GPT-4o", "Claude", "Gemini", "Llama 3", "Mistral", "Phi-2", "Groq", "PaLM", "Pix2Pix", "StyleGAN",
        "Stable Diffusion", "Midjourney", "DeepDream", "Whisper", "MediaPipe", "Guardrails", "Vertex AI",
        "OpenAI Embeddings", "CLIP", "LangChain",
      ],
    },
    {
      id: "backend",
      label: "Data & Backend",
      items: [
        "Node.js", "NestJS", "Express", "FastAPI", "Django", "GraphQL", "PostgreSQL", "MongoDB",
        "Redis", "Elasticsearch", "Qdrant", "Pinecone", "Kafka", "Airflow", "dbt", "Snowflake",
      ],
    },
    {
      id: "frontend",
      label: "Dashboards & Frontend",
      items: [
        "React", "Next.js", "Vue", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js",
        "Vite", "Radix UI", "D3.js",
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
      id: "martech",
      label: "Martech",
      items: ["HubSpot", "Salesforce", "Segment", "Braze", "Klaviyo", "GA4", "Meta Ads API", "Google Ads API", "Shopify", "Contentful"],
    },
    {
      id: "design",
      label: "UI / UX",
      items: ["Figma", "Design Tokens", "Prototyping", "WCAG 2.2 Audits", "Usability Testing"],
    },
  ],
};

export const businessTypes = {
  eyebrow: "Who do we work with?",
  titleLead: "Explore The Range Of",
  titleAccent: "Marketing Businesses We Support",
  body:
    "We help marketing teams of every size turn their data into measurable growth. Whether you are testing a first AI use case or making sense of a sprawling martech stack, we start with the problem and the data you already have.",
  rows: [
    {
      label: "Startups",
      body: "We help startups get reliable marketing analytics in place early: clear metrics, a first AI use case that proves the loop, and the reporting to show it working before the next raise.",
    },
    {
      label: "Scale-ups",
      body: "Growth exposes every manual process. We help scale-ups automate campaign operations, unify reporting and connect the data spread across a growing tool stack.",
    },
    {
      label: "Small and medium-sized businesses",
      body: "SMB marketing teams carry enterprise workloads with a fraction of the headcount. Focused automation and analytics close that gap without an enterprise budget or a year-long rollout.",
    },
    {
      label: "Enterprises",
      body: "We partner with enterprise marketing organisations on governed data layers, multi-brand analytics and AI use cases designed around security, privacy and procurement requirements from the start.",
    },
  ],
};

export const testimonials = {
  eyebrow: "Why is it worth working with us?",
  titleLead: "What Marketing Teams Say",
  titleAccent: "Once The Work Is Live",
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
  eyebrow: "What have we delivered for businesses?",
  titleLead: "Showcasing Our",
  titleAccent: "Data & AI Projects",
  body:
    "A look at the Data & AI work we have delivered, and the result each one was measured against.",
  ctaText: "Check Out Our Full Portfolio",
  // Healthcare work is off-topic for a marketing audience.
  excludeTags: ["Healthcare"],
};

export const partner = {
  eyebrow: "Why is it worth working with us?",
  titleLead: "Why Marketing Teams Work With",
  titleAccent: "Axiomra",
  cards: [
    {
      icon: "Target",
      title: "Business-first Data & AI thinking",
      body:
        "We start from the decision or workflow you need to improve, then choose the right analytics or AI approach.",
    },
    {
      icon: "Layers",
      title: "Works with your existing stack",
      body:
        "Connect CRM, analytics, content and advertising data instead of replacing everything.",
    },
    {
      icon: "ShieldCheck",
      title: "Clear delivery and governance",
      body:
        "Define scope, data access, measurement and ownership from the start, with regular visibility throughout the engagement.",
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
  title: "Explore Insights On AI And Marketing Innovation",
  body:
    "Explore our knowledge hub to stay updated on the latest expert insights, best practices and real-world case studies on AI-driven marketing transformation.",
  posts: [
    {
      title: "How To Use AI In Sales: 10 Use Cases That Close Deals",
      tag: "Sales",
      image: blog1Img,
      alt: "A notebook headed Social Media Marketing beside a keyboard",
    },
    {
      title: "10 AI Sales Tools Worth Running In Your Pipeline In 2026",
      tag: "Tooling",
      image: blog2Img,
      alt: "A white humanoid robot against a deep purple background",
    },
    {
      title: "AI In Market Research: How AI Delivers Faster Insights",
      tag: "Research",
      image: blog3Img,
      alt: "A team analysing printed performance charts together",
    },
  ],
};

export const faqs = [
  {
    q: "How can Data & AI support marketing growth?",
    a: "By connecting the data behind your campaigns, automating repetitive analysis and coordination, and applying AI to the decisions that matter most: targeting, budget, personalisation and retention. We work with the tools you already use, so the value comes from better decisions rather than another platform.",
  },
  {
    q: "How does AI help improve campaign ROI?",
    a: "By shortening the loop between spend and signal. Predictive models flag underperformance within hours instead of at month end, budget decisions move on live data, and personalisation lifts conversion on traffic you have already paid for.",
  },
  {
    q: "Do we need to replace our existing marketing tools?",
    a: "No. We connect and improve the systems you already run: CRM, ad platforms, analytics and content tools. The work focuses on the joins between them, the reporting layer nobody's vendor owns, and the AI use cases specific to how you go to market. We will tell you honestly which ideas are not worth pursuing.",
  },
  {
    q: "What Data & AI services does Axiomra provide for marketing teams?",
    a: "AI strategy, data integration, analytics, predictive modelling, workflow automation and generative AI enablement. Each engagement is scoped around a specific problem, with clear success measures from the start.",
  },
  {
    q: "How much does a marketing Data & AI engagement cost?",
    a: "It depends on the channel count, the state of your data and how much AI capability is in scope. A scoped pilot is the fastest route to a real number. Book a free session and we will size it honestly, including what we would not recommend.",
  },
  {
    q: "How long does a marketing Data & AI engagement take?",
    a: "A scoped pilot with one use case, such as an analytics layer or a campaign automation workflow, typically runs eight to twelve weeks. A broader programme spanning automation, analytics and data integration runs four to nine months, delivered in increments you can use along the way.",
  },
  {
    q: "Can AI track social media ROI and engagement?",
    a: "Yes. We connect platform data to your revenue data so social performance is reported against pipeline and revenue rather than impressions, with incrementality testing where attribution alone is not trustworthy.",
  },
  {
    q: "How do you handle data privacy?",
    a: "We review the privacy and regulatory requirements that apply to your data with your team before work starts, and design consent, access, data residency, retention and audit needs into the use case from the first session.",
  },
];

export const finalCta = {
  title: "Show Us The Campaign Problem You Want Solved",
  subtitle:
    "Ready to automate workflows, personalise campaigns and improve your marketing performance? Talk to our Data & AI team.",
  buttonText: "Get your project done!",
  background: finalCtaBgImg,
};
