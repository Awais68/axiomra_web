/**
 * Where each piece of client content is published, so a retrieved chunk can
 * cite a real page. Paths mirror client/src/routes.constants.js and App.jsx.
 */
import path from "node:path";
import { fileURLToPath } from "node:url";

export const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../..");
export const CLIENT_SRC = path.join(REPO_ROOT, "client/src");
export const COMPANY_DIR = path.join(REPO_ROOT, "content/company");

const SERVICES = "/ai-services-and-solutions";

export const PAGE_TITLES = {
  "/": "Home",
  "/about": "About Axiomra",
  "/contact": "Contact",
  "/faqs": "FAQs",
  "/portfolio": "Portfolio",
  "/tech": "Technology Stack",
  "/industries": "Industries",
  [SERVICES]: "AI Services and Solutions",
  [`${SERVICES}/ai-development-services`]: "AI Development Services",
  [`${SERVICES}/generative-ai-services`]: "Generative AI Services",
  [`${SERVICES}/agentic-ai-services`]: "Agentic AI Services",
  [`${SERVICES}/computer-vision-services`]: "Computer Vision Services",
  [`${SERVICES}/natural-language-processing-services`]: "Natural Language Processing Services",
  [`${SERVICES}/business-intelligence-services`]: "Business Intelligence Services",
  [`${SERVICES}/data-science-analytics-services`]: "Data Science and Analytics Services",
  [`${SERVICES}/chatbot-development-services`]: "AI Chatbot Development Services",
  [`${SERVICES}/bot-automation-services`]: "Bot Automation Services",
  [`${SERVICES}/process-automation-services`]: "Business Process Automation Services",
  [`${SERVICES}/enterprise-ai-development-services`]: "Enterprise AI Development Services",
  [`${SERVICES}/enterprise-llm-infrastructure-services`]: "Enterprise LLM Infrastructure Services",
};

const INDUSTRIES = {
  education: "Education",
  fashion: "Fashion",
  finance: "Finance",
  healthcare: "Healthcare",
  insurance: "Insurance",
  legal: "Legal",
  marketing: "Marketing",
  realEstate: ["real-estate", "Real Estate"],
  retail: "Retail",
  sports: "Sports",
  supplyChain: ["supply-chain", "Supply Chain"],
  transportation: "Transportation",
};
for (const [key, v] of Object.entries(INDUSTRIES)) {
  const [slug, name] = Array.isArray(v) ? v : [key, v];
  PAGE_TITLES[`/industries/${slug}`] = `AI for ${name}`;
}

const industryPath = (key) => {
  const v = INDUSTRIES[key];
  return `/industries/${Array.isArray(v) ? v[0] : key}`;
};

/** client/src/data/<file> -> page path. Files not listed are not ingested. */
export const DATA_FILE_ROUTES = {
  "aboutData.js": "/about",
  "faqsData.js": "/faqs",
  "portfolioData.js": "/portfolio",
  "techStackData.js": "/tech",
  "industriesData.js": "/industries",
  "servicesData.js": SERVICES,
  "aiDevelopmentData.js": `${SERVICES}/ai-development-services`,
  "generativeAiData.js": `${SERVICES}/generative-ai-services`,
  "agenticAiData.js": `${SERVICES}/agentic-ai-services`,
  "computerVisionData.js": `${SERVICES}/computer-vision-services`,
  "nlpData.js": `${SERVICES}/natural-language-processing-services`,
  "businessIntelligenceData.js": `${SERVICES}/business-intelligence-services`,
  "dataScienceData.js": `${SERVICES}/data-science-analytics-services`,
  "chatbotData.js": `${SERVICES}/chatbot-development-services`,
  "botAutomationData.js": `${SERVICES}/bot-automation-services`,
  "processAutomationData.js": `${SERVICES}/process-automation-services`,
  "enterpriseAiData.js": `${SERVICES}/enterprise-ai-development-services`,
  "llmInfrastructureData.js": `${SERVICES}/enterprise-llm-infrastructure-services`,
  ...Object.fromEntries(Object.keys(INDUSTRIES).map((k) => [`${k}Data.js`, industryPath(k)])),
};

/** Page components -> path. */
export const PAGE_ROUTES = {
  "HomePage.jsx": "/",
  "AboutPage.jsx": "/about",
  "ContactPage.jsx": "/contact",
  "FaqsPage.jsx": "/faqs",
  "PortfolioPage.jsx": "/portfolio",
  "TechStackPage.jsx": "/tech",
  "IndustriesPage.jsx": "/industries",
  "ServicesPage.jsx": SERVICES,
  "AiDevelopmentPage.jsx": `${SERVICES}/ai-development-services`,
  "GenerativeAiPage.jsx": `${SERVICES}/generative-ai-services`,
  "AgenticAiPage.jsx": `${SERVICES}/agentic-ai-services`,
  "ComputerVisionPage.jsx": `${SERVICES}/computer-vision-services`,
  "NlpPage.jsx": `${SERVICES}/natural-language-processing-services`,
  "BusinessIntelligencePage.jsx": `${SERVICES}/business-intelligence-services`,
  "DataSciencePage.jsx": `${SERVICES}/data-science-analytics-services`,
  "ChatbotDevelopmentPage.jsx": `${SERVICES}/chatbot-development-services`,
  "BotAutomationPage.jsx": `${SERVICES}/bot-automation-services`,
  "ProcessAutomationPage.jsx": `${SERVICES}/process-automation-services`,
  "EnterpriseAiPage.jsx": `${SERVICES}/enterprise-ai-development-services`,
  "LlmInfrastructurePage.jsx": `${SERVICES}/enterprise-llm-infrastructure-services`,
  ...Object.fromEntries(
    Object.keys(INDUSTRIES).map((k) => [
      `${k.charAt(0).toUpperCase()}${k.slice(1)}Page.jsx`,
      industryPath(k),
    ])
  ),
};

/** Component folders -> the page that renders them. */
export const COMPONENT_DIR_ROUTES = {
  about: "/about",
  "agentic-ai": `${SERVICES}/agentic-ai-services`,
  "ai-dev": `${SERVICES}/ai-development-services`,
  "computer-vision": `${SERVICES}/computer-vision-services`,
  "gen-ai": `${SERVICES}/generative-ai-services`,
  nlp: `${SERVICES}/natural-language-processing-services`,
  "business-intelligence": `${SERVICES}/business-intelligence-services`,
  "data-science": `${SERVICES}/data-science-analytics-services`,
  chatbot: `${SERVICES}/chatbot-development-services`,
  "bot-automation": `${SERVICES}/bot-automation-services`,
  "process-automation": `${SERVICES}/process-automation-services`,
  "enterprise-ai": `${SERVICES}/enterprise-ai-development-services`,
  "llm-infra": `${SERVICES}/enterprise-llm-infrastructure-services`,
  faqs: "/faqs",
  industries: "/industries",
  portfolio: "/portfolio",
  tech: "/tech",
};

/** Homepage sections plus the few shared components that carry real copy. */
export const HOME_COMPONENTS = ["BookCallSection.jsx", "BusinessTypes.jsx"];

/** Shared components with their own copy, by the page that owns it. */
export const SHARED_COMPONENT_ROUTES = {
  "ServicesHero.jsx": SERVICES,
  // Rendered on every page; indexed once, under the homepage.
  "Footer.jsx": "/",
};

export const titleFor = (route) => PAGE_TITLES[route] ?? route;
