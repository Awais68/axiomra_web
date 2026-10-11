import DsHero from "../components/data-science/DsHero";
import DsIntro from "../components/data-science/DsIntro";
import DsServices from "../components/data-science/DsServices";
import DsTeamBand from "../components/data-science/DsTeamBand";
import DsIndustries from "../components/data-science/DsIndustries";
import DsTechStack from "../components/data-science/DsTechStack";
import DsProcess from "../components/data-science/DsProcess";
import DsWhyUs from "../components/data-science/DsWhyUs";
import DsPartner from "../components/data-science/DsPartner";
import DsCta from "../components/data-science/DsCta";

import Awards from "../sections/Awards";
import Portfolio from "../sections/Portfolio";
import FAQ from "../sections/FAQ";
import Contact from "../sections/Contact";

import Seo from "../seo/Seo";
import { faqPageSchema, serviceSchema } from "../seo/schema";
import { SERVICES_BASE_PATH } from "../routes.constants";
import { DS_PATH, faqs } from "../data/dataScienceData";

const META_DESCRIPTION =
  "Data science and analytics services from Axiomra: predictive analytics, data engineering, " +
  "annotation, visualization and big data platforms that turn raw data into clear decisions.";

export default function DataSciencePage() {
  return (
    <div>
      <Seo
        title="Data Science & Analytics Services | Axiomra"
        description={META_DESCRIPTION}
        path={DS_PATH}
        image="/og/data-science.jpg"
        breadcrumbs={[
          { name: "Services", path: SERVICES_BASE_PATH },
          { name: "Data Science & Analytics" },
        ]}
        jsonLd={[
          serviceSchema({
            name: "Data Science & Analytics Services",
            description: META_DESCRIPTION,
            path: DS_PATH,
          }),
          faqPageSchema(faqs),
        ]}
      />
      <DsHero />
      <DsIntro />
      <DsServices />
      <DsTeamBand />
      <Portfolio />
      <DsIndustries />
      <DsTechStack />
      <DsProcess />
      <DsWhyUs />
      <DsPartner />
      <Awards />
      <DsCta />
      <FAQ id="ds-faq" eyebrow="Data science, answered" items={faqs} />
      <Contact />
    </div>
  );
}
