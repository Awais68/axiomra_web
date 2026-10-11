import ChatbotHero from "../components/chatbot/ChatbotHero";
import ChatbotSectionNav from "../components/chatbot/ChatbotSectionNav";
import ChatbotServices from "../components/chatbot/ChatbotServices";
import ChatbotIndustries from "../components/chatbot/ChatbotIndustries";
import ChatbotProcess from "../components/chatbot/ChatbotProcess";
import ChatbotTechStack from "../components/chatbot/ChatbotTechStack";
import ChatbotTestimonials from "../components/chatbot/ChatbotTestimonials";
import ChatbotImpact from "../components/chatbot/ChatbotImpact";
import ChatbotStages from "../components/chatbot/ChatbotStages";
import ChatbotWhyUs from "../components/chatbot/ChatbotWhyUs";
import ChatbotCta from "../components/chatbot/ChatbotCta";

import Awards from "../sections/Awards";
import Portfolio from "../sections/Portfolio";
import FAQ from "../sections/FAQ";
import Contact from "../sections/Contact";

import Seo from "../seo/Seo";
import { faqPageSchema, serviceSchema } from "../seo/schema";
import { SERVICES_BASE_PATH } from "../routes.constants";
import { CHATBOT_PATH, faqs } from "../data/chatbotData";

const META_DESCRIPTION =
  "AI chatbot development services from Axiomra: custom LLM and RAG chatbots, multilingual " +
  "assistants, and support automation integrated with your website, apps, and CRM.";

export default function ChatbotDevelopmentPage() {
  return (
    <div>
      <Seo
        title="AI Chatbot Development Services | Axiomra"
        description={META_DESCRIPTION}
        path={CHATBOT_PATH}
        image="/og/chatbot-development.jpg"
        breadcrumbs={[
          { name: "Services", path: SERVICES_BASE_PATH },
          { name: "Chatbot Development" },
        ]}
        jsonLd={[
          serviceSchema({
            name: "AI Chatbot Development Services",
            description: META_DESCRIPTION,
            path: CHATBOT_PATH,
          }),
          faqPageSchema(faqs),
        ]}
      />
      <ChatbotHero />
      <ChatbotSectionNav />
      <ChatbotServices />
      <div id="cb-work" className="scroll-mt-24">
        <Portfolio />
      </div>
      <ChatbotIndustries />
      <ChatbotProcess />
      <ChatbotTechStack />
      <ChatbotTestimonials />
      <ChatbotImpact />
      <ChatbotStages />
      <ChatbotWhyUs />
      <Awards />
      <ChatbotCta />
      <FAQ id="cb-faq" eyebrow="AI chatbots, answered" items={faqs} />
      <Contact />
    </div>
  );
}
