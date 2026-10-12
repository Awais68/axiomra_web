import BotHero from "../components/bot-automation/BotHero";
import BotSectionNav from "../components/bot-automation/BotSectionNav";
import BotServices from "../components/bot-automation/BotServices";
import BotMidCta from "../components/bot-automation/BotMidCta";
import BotIndustries from "../components/bot-automation/BotIndustries";
import BotTechStack from "../components/bot-automation/BotTechStack";
import BotProcess from "../components/bot-automation/BotProcess";
import BotTestimonials from "../components/bot-automation/BotTestimonials";
import BotGains from "../components/bot-automation/BotGains";
import BotWhyUs from "../components/bot-automation/BotWhyUs";
import BotCta from "../components/bot-automation/BotCta";

import Awards from "../sections/Awards";
import Portfolio from "../sections/Portfolio";
import FAQ from "../sections/FAQ";

import Seo from "../seo/Seo";
import { faqPageSchema, serviceSchema } from "../seo/schema";
import { SERVICES_BASE_PATH } from "../routes.constants";
import { BOT_AUTOMATION_PATH, faqs } from "../data/botAutomationData";

const META_DESCRIPTION =
  "Bot automation services from Axiomra: custom RPA, data, invoice, web scraping, HR, and " +
  "support bots that plug into your existing systems and run 24/7.";

export default function BotAutomationPage() {
  return (
    <div>
      <Seo
        title="Bot Automation Services | Axiomra"
        description={META_DESCRIPTION}
        path={BOT_AUTOMATION_PATH}
        image="/og/bot-automation.jpg"
        breadcrumbs={[{ name: "Services", path: SERVICES_BASE_PATH }, { name: "Bot Automation" }]}
        jsonLd={[
          serviceSchema({
            name: "Bot Automation Services",
            description: META_DESCRIPTION,
            path: BOT_AUTOMATION_PATH,
          }),
          faqPageSchema(faqs),
        ]}
      />
      <BotHero />
      <BotSectionNav />
      <BotServices />
      <BotMidCta />
      <div id="ba-work" className="scroll-mt-24">
        <Portfolio />
      </div>
      <BotIndustries />
      <BotTechStack />
      <BotProcess />
      <BotTestimonials />
      <BotGains />
      <BotWhyUs />
      <Awards />
      <BotCta />
      <FAQ id="ba-faq" eyebrow="Bot automation, answered" items={faqs} />
    </div>
  );
}
