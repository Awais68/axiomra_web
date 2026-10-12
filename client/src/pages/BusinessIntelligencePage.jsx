import BiHero from "../components/business-intelligence/BiHero";
import BiTrustStrip from "../components/business-intelligence/BiTrustStrip";
import BiWhyBi from "../components/business-intelligence/BiWhyBi";
import BiServiceRing from "../components/business-intelligence/BiServiceRing";
import BiPipeline from "../components/business-intelligence/BiPipeline";
import BiDashboard from "../components/business-intelligence/BiDashboard";
import BiCaseStudy from "../components/business-intelligence/BiCaseStudy";
import BiIndustries from "../components/business-intelligence/BiIndustries";
import BiTechStack from "../components/business-intelligence/BiTechStack";
import BiProcess from "../components/business-intelligence/BiProcess";
import BiWhyUs from "../components/business-intelligence/BiWhyUs";
import IndustriesTestimonials from "../components/industries/IndustriesTestimonials";

import GradientCTA from "../components/GradientCTA";
import Awards from "../sections/Awards";
import Portfolio from "../sections/Portfolio";
import FAQ from "../sections/FAQ";

import Seo from "../seo/Seo";
import { faqPageSchema, serviceSchema } from "../seo/schema";
import { SERVICES_BASE_PATH } from "../routes.constants";
import { BI_PATH, caseStudy, cta, faqs } from "../data/businessIntelligenceData";
import { testimonials } from "../data/industriesData";

const META_DESCRIPTION =
  "Business intelligence services from Axiomra: BI consulting, data warehousing and ETL, " +
  "dashboards, and predictive analytics services that turn scattered data into decisions.";

// Same approved client quotes as the industries pages, under a BI heading.
const biTestimonials = { ...testimonials, titleLead: "Teams That", titleAccent: "Trust Our Work" };

export default function BusinessIntelligencePage() {
  return (
    <div>
      <Seo
        title="Business Intelligence Services & BI Consulting | Axiomra"
        description={META_DESCRIPTION}
        path={BI_PATH}
        image="/og/business-intelligence.jpg"
        breadcrumbs={[
          { name: "Services", path: SERVICES_BASE_PATH },
          { name: "Business Intelligence" },
        ]}
        jsonLd={[
          serviceSchema({
            name: "Business Intelligence Services",
            description: META_DESCRIPTION,
            path: BI_PATH,
          }),
          faqPageSchema(faqs),
        ]}
      />
      <BiHero />
      <BiTrustStrip />
      <BiWhyBi />
      <Awards />
      <BiServiceRing />
      <BiPipeline />
      <BiDashboard />
      <BiCaseStudy data={caseStudy} />
      <Portfolio flat />
      <BiIndustries />
      <BiTechStack />
      <BiProcess />
      <BiWhyUs />
      <IndustriesTestimonials data={biTestimonials} flat />
      <GradientCTA title={cta.title} subtitle={cta.subtitle} buttonText={cta.buttonText} />
      <FAQ id="bi-faq" eyebrow="Business intelligence, answered" items={faqs} />
    </div>
  );
}
