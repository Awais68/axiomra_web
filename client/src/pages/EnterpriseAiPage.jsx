import EntHero from "../components/enterprise-ai/EntHero";
import EntTrustStrip from "../components/enterprise-ai/EntTrustStrip";
import EntStall from "../components/enterprise-ai/EntStall";
import EntChallenges from "../components/enterprise-ai/EntChallenges";
import EntServices from "../components/enterprise-ai/EntServices";
import EntCtaBand from "../components/enterprise-ai/EntCtaBand";
import EntIndustries from "../components/enterprise-ai/EntIndustries";
import EntFramework from "../components/enterprise-ai/EntFramework";
import EntTechStack from "../components/enterprise-ai/EntTechStack";
import EntWhyUs from "../components/enterprise-ai/EntWhyUs";
import IndustriesTestimonials from "../components/industries/IndustriesTestimonials";

import Portfolio from "../sections/Portfolio";
import FAQ from "../sections/FAQ";

import Seo from "../seo/Seo";
import { faqPageSchema, serviceSchema } from "../seo/schema";
import { SERVICES_BASE_PATH } from "../routes.constants";
import {
  ENTERPRISE_AI_PATH,
  faqs,
  finalCta,
  fitCta,
  testimonialsHeading,
  toolsCta,
} from "../data/enterpriseAiData";
import { testimonials } from "../data/industriesData";

const META_DESCRIPTION =
  "Enterprise AI development services from Axiomra: strategy, custom AI, generative AI, " +
  "integration, governance and MLOps, built to run in production and tied to measurable outcomes.";

// Same approved client quotes as the industries pages. The shared sections
// below take `flat`, which swaps their gradients for solid fills on this page.
const entTestimonials = { ...testimonials, ...testimonialsHeading };

export default function EnterpriseAiPage() {
  return (
    <div>
      <Seo
        title="Enterprise AI Development Services | Axiomra"
        description={META_DESCRIPTION}
        path={ENTERPRISE_AI_PATH}
        image="/og/enterprise-ai.jpg"
        breadcrumbs={[{ name: "Services", path: SERVICES_BASE_PATH }, { name: "Enterprise AI" }]}
        jsonLd={[
          serviceSchema({
            name: "Enterprise AI Development Services",
            description: META_DESCRIPTION,
            path: ENTERPRISE_AI_PATH,
          }),
          faqPageSchema(faqs),
        ]}
      />
      <EntHero />
      <EntTrustStrip />
      <EntStall />
      <EntChallenges />
      <EntServices />
      <EntCtaBand tone="light" {...fitCta} />
      <Portfolio flat />
      <IndustriesTestimonials data={entTestimonials} flat />
      <EntIndustries />
      <EntFramework />
      <EntTechStack />
      <EntCtaBand {...toolsCta} />
      <EntWhyUs />
      <FAQ id="ent-faq" eyebrow="Enterprise AI, answered" items={faqs} />
      <EntCtaBand {...finalCta} />
    </div>
  );
}
