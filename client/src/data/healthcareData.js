/**
 * Copy and imagery for the Healthcare industry page (/industries/healthcare).
 *
 * Everything the page renders comes from here, so a copy change never touches
 * a component. Section order in the page mirrors this file.
 */

import heroImg from "../assets/industries/healthcare/hero.webp";
import introImg from "../assets/industries/healthcare/intro.webp";

import svcEhrImg from "../assets/industries/healthcare/svc-ehr.webp";
import svcTelehealthImg from "../assets/industries/healthcare/svc-telehealth.webp";
import svcImagingImg from "../assets/industries/healthcare/svc-imaging.webp";
import svcDecisionImg from "../assets/industries/healthcare/svc-decision.webp";
import svcHospitalImg from "../assets/industries/healthcare/svc-hospital.webp";
import svcPatientImg from "../assets/industries/healthcare/svc-patient.webp";
import svcBillingImg from "../assets/industries/healthcare/svc-billing.webp";
import svcPharmacyImg from "../assets/industries/healthcare/svc-pharmacy.webp";
import svcMonitoringImg from "../assets/industries/healthcare/svc-monitoring.webp";
import svcResearchImg from "../assets/industries/healthcare/svc-research.webp";

import midCtaBgImg from "../assets/industries/healthcare/midcta-bg.webp";

import solConsultingImg from "../assets/industries/healthcare/sol-consulting.webp";
import solDevelopmentImg from "../assets/industries/healthcare/sol-development.webp";
import solAnalyticsImg from "../assets/industries/healthcare/sol-analytics.webp";
import solAutomationImg from "../assets/industries/healthcare/sol-automation.webp";

import stkHospitalsImg from "../assets/industries/healthcare/stk-hospitals.webp";
import stkCliniciansImg from "../assets/industries/healthcare/stk-clinicians.webp";
import stkFoundersImg from "../assets/industries/healthcare/stk-founders.webp";

import subHospitalsImg from "../assets/industries/healthcare/sub-hospitals.webp";
import subTelehealthImg from "../assets/industries/healthcare/sub-telehealth.webp";
import subDiagnosticsImg from "../assets/industries/healthcare/sub-diagnostics.webp";
import subRadiologyImg from "../assets/industries/healthcare/sub-radiology.webp";
import subPharmaImg from "../assets/industries/healthcare/sub-pharma.webp";
import subDevicesImg from "../assets/industries/healthcare/sub-devices.webp";
import subMentalImg from "../assets/industries/healthcare/sub-mental.webp";
import subHomecareImg from "../assets/industries/healthcare/sub-homecare.webp";
import subPayersImg from "../assets/industries/healthcare/sub-payers.webp";
import subDentalImg from "../assets/industries/healthcare/sub-dental.webp";

import textureBgImg from "../assets/industries/healthcare/texture-bg.webp";
import buildVisualImg from "../assets/industries/healthcare/build-visual.webp";

import blog1Img from "../assets/industries/healthcare/blog-1.webp";
import blog2Img from "../assets/industries/healthcare/blog-2.webp";
import blog3Img from "../assets/industries/healthcare/blog-3.webp";
import finalCtaBgImg from "../assets/industries/healthcare/final-cta.webp";
import { caseStudyPath } from "../routes.constants";

export const HEALTHCARE_SLUG = "healthcare";

export const hero = {
  eyebrow: "AI for the healthcare industry",
  titleLead: "Healthcare",
  titleAccent: "Data & AI Solutions",
  titleTail: "That Reduce Administrative Load",
  body:
    "Axiomra is a Data & AI partner for hospitals, clinics, labs and health-tech teams. We help you apply analytics and AI to documentation, diagnostic workflows, patient flow and revenue-cycle visibility, working with the EHR, imaging and billing systems your teams already use, with clinical oversight and privacy considered from the start.",
  ctaText: "Request a free consultation",
  image: heroImg,
  alt: "A surgical microscope in a theatre lit in clinical blue",
  reviews: { platform: "Clutch", rating: 5, count: 12 },
};

export const intro = {
  titleLead: "Giving Clinical Teams Time Back With",
  titleAccent: "Healthcare Data & AI Solutions",
  paragraphs: [
    "Clinical and operational data sits across the EHR, imaging, lab and billing systems, and teams lose hours reconciling it by hand. Axiomra helps providers, payers and health-tech teams turn that fragmented data into analytics and AI use cases clinicians can trust, working with the systems you already run rather than replacing them.",
    "We combine clinical NLP, medical imaging models, predictive analytics and workflow automation to reduce administrative load, support earlier follow-up and keep documentation current. Each use case is scoped with your clinical and operational leads, validated on your own data, and documented for the governance, information security and procurement reviews your organisation requires.",
  ],
  ctaText: "Book a Free Data & AI Consultation",
  image: introImg,
  alt: "A clinician holding a tablet beside an open case notebook",
};

/**
 * The decorative standards band. This is the only section on the page where
 * copy is flowed around shapes rather than set in a straight column, so the
 * text here is deliberately short.
 */
export const standards = {
  eyebrow: "The part nobody demos",
  titleLead: "A Clinical AI Use Case Is Only As Good As The",
  titleAccent: "Record It Can Be Trusted With",
  orb: { value: "PHI", caption: "Access governed by role" },
  lead:
    "Every order, result and note arrives as a claim about a real person, and the data has one chance to be attached to the right record. Match it wrongly and the failure is not a bad row in a table. It is a medication given to someone it was never meant for.",
  vial: { value: "FHIR", caption: "Mapped, not assumed" },
  aside:
    "So we start with the record, not the model. Identity resolution runs before data is joined, terminology is mapped rather than assumed, and every access leaves a trail an information governance lead can follow without opening a ticket.",
  rails: [
    { value: "Capture", caption: "At the point of care" },
    { value: "Decide", caption: "With the reasoning attached" },
  ],
  manifesto:
    "Between the moment a clinician notices something and the moment an AI workflow acts on it sits the part nobody demos and everybody depends on: the identity that resolves, the model that explains itself, and the audit trail that still holds twelve months later.",
};

export const impact = {
  titleLead: "How AI Is Transforming",
  titleAccent: "Diagnostics, Care And Operations",
  body:
    "Data & AI are changing how care is documented, diagnosed and coordinated. Applied to well-defined problems with clinical oversight, analytics and AI can reduce administrative work, surface risk earlier and help scarce clinical capacity go where it matters most.",
  stats: [
    {
      value: "1016",
      label:
        "AI-enabled medical devices have now been authorised by the FDA, with radiology accounting for roughly three quarters of them.",
      source: "FDA, AI/ML-Enabled Medical Device List 2025",
    },
    {
      value: "29%",
      label:
        "average reduction in clinical documentation time reported by health systems deploying ambient AI scribes across ambulatory care.",
      source: "Peterson Health Technology Institute, Ambient Scribes Review 2025",
    },
    {
      value: "90%",
      label:
        "of hospitals could use AI to improve early diagnosis and shorten patient wait times, according to sector modelling.",
      source: "WHO, Digital Health and AI Readiness Report 2025",
    },
  ],
};

/**
 * The challenge rail. Each entry is a barrier care teams hit, and the
 * Data & AI approach we use to address it.
 */
export const challenges = {
  eyebrow: "Overcoming the barriers that hold clinical teams back",
  titleLead: "Top Challenges In Modern",
  titleAccent: "Healthcare Delivery",
  items: [
    {
      title: "Clinician Burnout From Documentation",
      body:
        "For every hour of patient contact, many clinicians spend close to another on the keyboard. We apply ambient capture and clinical NLP to draft the note, suggest codes for the encounter and pre-fill the order set, leaving the clinician to review and sign rather than transcribe. The note stays theirs; the typing stops being their job.",
    },
    {
      title: "Fragmented EHR And Departmental Silos",
      body:
        "The EHR, the LIS, the PACS and the scheduling system each hold a piece of the patient and none hold the whole. We design HL7 v2 and FHIR R4 data integration with a real patient-matching strategy behind it, so clinicians and analytics work from one longitudinal record instead of four partial ones.",
    },
    {
      title: "Diagnostic Backlogs And Reporting Delays",
      body:
        "Imaging and pathology volumes keep rising while specialist headcount does not. We deploy triage models that help reorder the worklist by likelihood of critical finding, pre-populate structured reports and flag discrepancies for a second read, subject to clinical validation, so the urgent study is seen first rather than in the order it arrived.",
    },
    {
      title: "HIPAA, GDPR And Audit Exposure",
      body:
        "Most breaches are access-control failures, not exotic attacks. We design data and AI workflows with least-privilege access by role, encrypted PHI, audit logging and de-identification pipelines that keep identifiable data out of model training. Which requirements apply is confirmed with your compliance team, and the evidence is produced as the workflow runs rather than assembled before an audit.",
    },
    {
      title: "No-Shows, Rota Gaps And Bed Flow",
      body:
        "Capacity is lost to empty slots on one ward and overtime on another. We apply demand forecasting and no-show risk models to each appointment to support better booking decisions, and model discharge timing so bed managers plan the afternoon instead of reacting to it.",
    },
    {
      title: "Revenue Leakage And Claim Denials",
      body:
        "Denials are rarely a billing problem; they start as a documentation problem. We apply coding support, eligibility checks at the point of booking and denial-prediction models that flag a claim for human review before submission, with the likely missing evidence named rather than guessed at.",
    },
  ],
};

/**
 * Ten Data & AI use-case areas. Each is a card with a photo and a description.
 */
export const services = {
  eyebrow: "Where can Data & AI help in healthcare?",
  titleLead: "Healthcare Data & AI Solutions",
  titleAccent: "Shaped Around How You Actually Deliver Care",
  body:
    "Healthcare AI fails when it is designed for the org chart instead of the ward round. Each use case below starts from a real clinical or operational workflow, works with the systems already in place, and is validated on your own data before it informs a patient-facing decision.",
  items: [
    {
      title: "EHR & EMR Data Intelligence",
      body:
        "We work with the EHR you already run and focus on the data clinicians touch: note drafting, coding suggestions, problem-list quality and clean FHIR data access. AI drafts documentation for clinician review, so the record is more complete at the point of signature rather than at the end of the week.",
      image: svcEhrImg,
      alt: "A doctor reviewing patient records at a desk",
    },
    {
      title: "Telehealth Analytics & Virtual Triage Support",
      body:
        "AI that supports virtual care: triage prioritisation, consultation summaries written back to the record for clinician review, and analytics on demand, wait times and follow-up. We design for degraded connections and less confident patients, because those are the visits that fail.",
      image: svcTelehealthImg,
      alt: "A clinician conducting a video consultation on a laptop",
    },
    {
      title: "Medical Imaging & Diagnostic AI",
      body:
        "Radiology, pathology and ophthalmology models that integrate with PACS through DICOM rather than sitting in a separate viewer. We support worklist prioritisation, measurement automation, structured reporting and second-read flags, subject to clinical validation, and we are explicit with you about where a model's performance falls off.",
      image: svcImagingImg,
      alt: "A doctor examining brain MRI scans on a lightbox",
    },
    {
      title: "Clinical Decision Support Models",
      body:
        "Risk scores, deterioration alerts, sepsis and readmission prediction delivered inside the clinical workflow with the reasoning attached. Alert fatigue is a design failure, so we tune thresholds against your own outcome data and measure suppression as carefully as we measure sensitivity.",
      image: svcDecisionImg,
      alt: "A doctor showing a CT scan to a patient on a tablet",
      // Long-form write-up of this service in use, linked under the body.
      caseStudy: {
        text: "Read the readmission risk blueprint",
        to: caseStudyPath("healthcare-readmission-risk-prediction"),
      },
    },
    {
      title: "Hospital Operations Analytics & Forecasting",
      body:
        "Bed flow, theatre scheduling, rota planning and supply data brought into a single operational view. Forecasting sits underneath it, so the day is planned against predicted demand instead of yesterday's census.",
      image: svcHospitalImg,
      alt: "Healthcare professionals walking through a hospital corridor",
    },
    {
      title: "Patient Engagement Analytics",
      body:
        "The analytics and AI behind patient engagement: no-show and adherence risk, reminder timing, care-plan follow-up and message triage, delivered through the patient channels you already run. Reading level and accessibility still matter, because adherence drops the moment communication asks too much.",
      image: svcPatientImg,
      alt: "A patient checking health data on a smartphone",
    },
    {
      title: "Revenue-Cycle Analytics & Coding Support",
      body:
        "Coding support, eligibility checks, claim scrubbing and denial prediction across ICD-10, CPT and HCC. Models highlight which claims are at risk and which documentation may be missing, for human review before submission rather than after the remittance.",
      image: svcBillingImg,
      alt: "A doctor and patient reviewing medical paperwork together",
    },
    {
      title: "Pharmacy & Medication Analytics",
      body:
        "Interaction and allergy signal detection, inventory forecasting and adherence monitoring, using data from dispensing systems and the record. Reconciliation at admission and discharge is where most medication error lives, so that is where we start.",
      image: svcPharmacyImg,
      alt: "A pharmacist organising shelves of medication",
    },
    {
      title: "Remote Patient Monitoring Analytics",
      body:
        "Device data ingestion from wearables, glucometers, blood-pressure cuffs and bedside monitors, with alerting models tuned so a nurse receives a signal rather than a stream. Chronic-care and post-discharge programmes live or die on that distinction.",
      image: svcMonitoringImg,
      alt: "An ECG monitor displaying heart rate and pulse data",
    },
    {
      title: "Clinical Trial & Life Sciences Analytics",
      body:
        "Cohort identification from real-world data, trial data pipelines and safety signal detection, designed with 21 CFR Part 11 and GxP expectations in mind and with data lineage recorded, because a sponsor audit will ask for it.",
      image: svcResearchImg,
      alt: "A scientist using a multichannel pipette in a laboratory",
    },
  ],
};

export const midCta = {
  eyebrow: "Ready to reduce the load?",
  title: "Use AI to Reduce Administrative Load and Improve Clinical Workflows",
  body:
    "Axiomra helps healthcare organisations identify where Data & AI can safely improve documentation, workflow visibility, patient access and operational efficiency. We work with clinical and operational stakeholders to define the problem, data requirements, governance and human oversight before any AI solution is scaled.",
  ctaText: "Discuss a Healthcare Data & AI Use Case",
  background: midCtaBgImg,
};

/**
 * The services fold: four alternating photo/copy rows.
 */
export const solutions = {
  eyebrow: "See your workflow mapped before you commit",
  titleLead: "Healthcare Data & AI Services",
  titleAccent: "From Strategy To Workflow Automation",
  body:
    "We pair clinical understanding with production-grade data and AI engineering. Each engagement starts with the workflow as it actually runs, not as the process document describes it, and ends with an AI use case your clinicians, your CISO and your governance teams can review with confidence.",
  items: [
    {
      title: "Healthcare AI Strategy & Use-Case Prioritisation",
      body:
        "Start with the workflows creating the most friction and the decisions that would benefit from better data. Axiomra works with clinical, operational and technology stakeholders to assess feasibility, data quality, risk and expected value. The output is a prioritised roadmap with governance, validation and human-review requirements—including processes that should not be automated.",
      image: solConsultingImg,
      alt: "Healthcare workers in discussion during a ward meeting",
    },
    {
      title: "Healthcare Data Integration & AI Enablement",
      body:
        "Connect clinical and operational data responsibly so analytics and AI use cases have a trustworthy foundation. Axiomra can support data architecture, HL7/FHIR integration, governed data access, analytics pipelines and AI enablement aligned with applicable privacy and security requirements. We confirm compliance readiness with your team against your actual jurisdiction, scope and controls rather than assuming it.",
      image: solDevelopmentImg,
      alt: "An abstract visualisation of a neural network",
    },
    {
      title: "Clinical Data Analytics & Interoperability",
      body:
        "A governed clinical data layer with real patient matching, terminology mapping across SNOMED CT, LOINC and ICD-10, and lineage on every field. Population health dashboards, quality reporting and research cohorts then read from one set of figures instead of four extracts.",
      image: solAnalyticsImg,
      alt: "A brain MRI scan displayed on a clinical monitor",
    },
    {
      title: "Intelligent Automation For Clinical Workflows",
      body:
        "Ambient documentation, prior-authorisation triage, referral prioritisation and discharge-summary drafting, each with a human in the loop and a full audit trail behind every automated step. Automation that cannot explain itself has no place in a clinical setting.",
      image: solAutomationImg,
      alt: "A robotic hand reaching into a connected data network",
    },
  ],
};

export const stakeholders = {
  eyebrow: "Every decision-maker in your buying committee has a different question",
  titleLead: "We Deliver Healthcare Data & AI Solutions",
  titleAccent: "For The Following Organisations",
  items: [
    {
      title: "Hospitals and Health Systems",
      body:
        "Interoperability, bed flow and documentation load, addressed without replacing the core EHR. Rolled out department by department, with security and governance documentation prepared for your review board.",
      image: stkHospitalsImg,
      alt: "A modern hospital building lit at dusk",
    },
    {
      title: "Clinicians and Care Teams",
      body:
        "AI that takes work away rather than adding a new screen. Every alert carries its reasoning, and every AI-drafted note lands as a draft the clinician owns, reviews and signs.",
      image: stkCliniciansImg,
      alt: "Healthcare workers smiling together on a ward",
    },
    {
      title: "Health-Tech Founders and Payers",
      body:
        "A defensible clinical AI use case built on well-governed data: validated models, FHIR-based data integration, and the documentation a payer contract or regulatory pathway may require.",
      image: stkFoundersImg,
      alt: "A team of professionals in a working meeting",
    },
  ],
};

/**
 * The marquee rail. Each sub-industry card shows its photo and label at rest,
 * and reveals the detail copy and capability list on hover or focus.
 */
export const subIndustries = {
  eyebrow: "Which part of healthcare do we serve?",
  titleLead: "Healthcare Data & AI Solutions Across",
  titleAccent: "Key Care Settings",
  body:
    "Every care setting carries its own regulator, its own data model and its own definition of an acceptable failure. Hover any card to see where Data & AI can help.",
  items: [
    {
      label: "Hospitals & Health Systems",
      body:
        "Data integration, bed and theatre flow forecasting, and documentation assistance that works alongside a core EHR you are not going to replace this year.",
      points: ["FHIR data integration", "Bed and theatre flow forecasting", "Ambient documentation support"],
      image: subHospitalsImg,
      alt: "A quiet hospital corridor with clinical equipment",
    },
    {
      label: "Telehealth",
      body:
        "Data & AI for virtual-first care: triage prioritisation, consultation summaries written back to the record for clinician review, and demand and follow-up analytics.",
      points: ["Virtual triage support", "Consultation summaries", "Demand analytics"],
      image: subTelehealthImg,
      alt: "A patient in bed consulting a doctor over a tablet",
    },
    {
      label: "Diagnostics & Labs",
      body:
        "LIS data integration, specimen tracking analytics and anomaly detection on analyser data, supporting review before a result leaves the bench.",
      points: ["LIS data integration", "Result review support", "Specimen chain-of-custody analytics"],
      image: subDiagnosticsImg,
      alt: "A scientist working with a microscope in a sterile lab",
    },
    {
      label: "Radiology & Imaging",
      body:
        "DICOM-based triage, measurement automation and structured reporting within PACS workflows, with critical findings prioritised for radiologist review.",
      points: ["Worklist triage", "Structured reporting", "Critical-finding prioritisation"],
      image: subRadiologyImg,
      alt: "A CT scanner in a sterile hospital imaging room",
    },
    {
      label: "Pharma & Life Sciences",
      body:
        "Trial cohort discovery, trial data pipelines and safety signal detection, designed with GxP and 21 CFR Part 11 expectations in mind.",
      points: ["Cohort discovery", "Trial data pipelines", "Safety signal detection"],
      image: subPharmaImg,
      alt: "Pharmaceutical workers packaging tablets on a production line",
    },
    {
      label: "Medical Devices & IoMT",
      body:
        "Device data ingestion at scale, device-to-cloud data pipelines and the alerting models that turn a telemetry stream into a clinical signal.",
      points: ["Device ingestion pipelines", "Edge inference", "Clinical alert tuning"],
      image: subDevicesImg,
      alt: "A smartwatch tracking health data on a wrist",
    },
    {
      label: "Mental & Behavioural Health",
      body:
        "Measurement-based care analytics and risk screening models, designed with consent and confidentiality boundaries handled explicitly.",
      points: ["Measurement-based care", "Risk screening", "Consent-aware data sharing"],
      image: subMentalImg,
      alt: "A therapist and client during a counselling session",
    },
    {
      label: "Home & Elder Care",
      body:
        "Remote monitoring analytics, falls and deterioration prediction, and carer scheduling forecasts that keep care teams informed without exposing the record.",
      points: ["Remote monitoring analytics", "Deterioration prediction", "Carer scheduling forecasts"],
      image: subHomecareImg,
      alt: "A nurse sitting with an elderly patient",
    },
    {
      label: "Payers & Insurance",
      body:
        "Claims analytics, prior-authorisation triage and risk adjustment, with the decision rationale recorded for human review and regulatory scrutiny.",
      points: ["Claims analytics", "Prior-auth triage", "Risk adjustment"],
      image: subPayersImg,
      alt: "Hands reviewing an insurance policy document",
    },
    {
      label: "Dental & Specialty Clinics",
      body:
        "Imaging assistance, treatment-planning support and recall prediction for single-site practices and multi-clinic groups alike.",
      points: ["Imaging assistance", "Treatment-planning support", "Recall prediction"],
      image: subDentalImg,
      alt: "A dental team examining a patient with modern equipment",
    },
  ],
};

export const benefits = {
  eyebrow: "What can you optimise with Data & AI?",
  titleLead: "Where Data & AI",
  titleAccent: "Can Support Healthcare Operations",
  body:
    "We apply AI to defined problems with measurable outcomes and appropriate clinical oversight. Common opportunities include documentation assistance, operational forecasting, patient-flow analytics, imaging workflow support, readmission-risk analysis, coding support and compliance reporting.",
  items: [
    {
      title: "Support Faster Review",
      body:
        "AI can help prioritise selected imaging or pathology worklists, subject to clinical validation and human oversight.",
    },
    {
      title: "Reduce Documentation Burden",
      body:
        "Assist with note drafting, coding preparation and information retrieval while clinicians remain responsible for review.",
    },
    {
      title: "Improve Follow-Up Prioritisation",
      body:
        "Use risk analytics to help teams identify patients who may need closer follow-up.",
    },
    {
      title: "Improve Capacity Planning",
      body:
        "Forecast appointments, beds or theatre demand to support better resource decisions.",
    },
    {
      title: "Improve Revenue-Cycle Visibility",
      body:
        "Identify documentation or coding gaps before submission for human review.",
    },
    {
      title: "Strengthen Audit Readiness",
      body:
        "Create clearer access controls, data lineage and audit evidence around sensitive workflows.",
    },
  ],
};

export const build = {
  title: "Healthcare AI Starts With Workflow, Data and Governance",
  body:
    "Axiomra approaches healthcare AI with the clinical context first. We assess the workflow, data quality, privacy constraints and human-review points before recommending a solution. Start with a focused pilot on your own data, measure usefulness and safety, then decide whether wider adoption is justified.",
  ctaText: "Discuss a Healthcare AI Pilot",
  texture: textureBgImg,
  image: buildVisualImg,
  alt: "A healthcare professional in a virtual appointment with a patient",
};

export const techStrip = {
  eyebrow: "Technologies we work with",
  titleLead: "Expertise In",
  titleAccent: "Data & AI Technologies",
  body:
    "The same data and AI toolchain sits under every healthcare use case we deliver. Pick a layer to see what it is made of.",
  ctaText: "View all tech stack",
  tabs: [
    {
      id: "ai",
      label: "Artificial Intelligence",
      items: [
        "GPT-4o", "Claude", "Med-PaLM 2", "Llama 3", "Whisper", "MONAI", "nnU-Net", "PyTorch",
        "TensorFlow", "scikit-learn", "XGBoost", "Hugging Face", "spaCy / medspaCy", "cTAKES",
        "SHAP", "Guardrails", "Vertex AI", "LangChain",
      ],
    },
    {
      id: "interop",
      label: "Clinical Interoperability",
      items: [
        "HL7 FHIR R4", "HL7 v2", "DICOM / DICOMweb", "SMART on FHIR", "CDA / C-CDA", "SNOMED CT",
        "LOINC", "ICD-10 / ICD-11", "RxNorm", "openEHR", "Mirth Connect", "IHE Profiles",
      ],
    },
    {
      id: "data",
      label: "Data Engineering & Databases",
      items: [
        "Python", "FastAPI", "PostgreSQL", "MongoDB", "Redis", "Kafka", "Airflow", "dbt",
        "Snowflake", "Databricks", "BigQuery", "TimescaleDB", "MinIO",
      ],
    },
    {
      id: "viz",
      label: "Analytics & Visualisation",
      items: ["Streamlit", "React", "TypeScript", "D3.js", "Cornerstone.js"],
    },
    {
      id: "cloud",
      label: "Cloud & Devices",
      items: [
        "AWS HealthLake", "Google Cloud Healthcare API", "Azure Health Data Services", "Kubernetes",
        "Terraform", "Vault", "AWS IoT Core", "MQTT", "Edge Inference",
      ],
    },
    {
      id: "governance",
      label: "Privacy & Governance",
      note:
        "Frameworks and practices we take into account when designing data and AI workflows, not certifications held by Axiomra. Which of them apply to your project, and what evidence your assessor will want, is confirmed with your compliance team before work starts.",
      items: [
        "HIPAA", "GDPR", "ISO 27001", "21 CFR Part 11", "De-identification pipelines",
        "Role-based access control", "Audit logging", "Data lineage", "Consent management",
      ],
    },
    {
      id: "mlops",
      label: "MLOps & Monitoring",
      items: ["MLflow", "Docker", "Evidently", "Model Validation", "Drift Monitoring", "Human-in-the-Loop Review"],
    },
  ],
};

export const businessTypes = {
  eyebrow: "Who do we work with?",
  titleLead: "Who We Support",
  titleAccent: "in Healthcare",
  body:
    "We help healthcare organisations of every size put data foundations, governance and focused AI use cases in place, working with the systems their teams already run rather than replacing them.",
  rows: [
    {
      label: "Digital Health Start-ups",
      body:
        "Establish data foundations, AI governance and evidence needed to test a focused use case responsibly.",
    },
    {
      label: "Scale-ups",
      body:
        "Strengthen data operations, monitoring and reporting as product usage and enterprise requirements grow.",
    },
    {
      label: "Clinics & Provider Groups",
      body:
        "Improve analytics, scheduling, documentation workflows and operational visibility without assuming hospital-scale resources.",
    },
    {
      label: "Hospitals, Health Systems & Enterprise Healthcare",
      body:
        "Axiomra can support complex healthcare organisations with governed data platforms, analytics, EHR/data integration and carefully scoped AI use cases. We define clinical ownership, validation, model monitoring, security requirements and procurement obligations with you before production use.",
    },
  ],
};

export const testimonials = {
  eyebrow: "Why is it worth working with us?",
  titleLead: "What Our Clients Say",
  titleAccent: "About Working With Us",
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
  eyebrow: "Selected Data & AI work",
  titleLead: "Showcasing Our",
  titleAccent: "Data & AI Projects",
  body:
    "Explore our portfolio of Data & AI work, where analytics and AI address complex operational and clinical challenges.",
  ctaText: "Check Out Our Full Portfolio",
};

export const partner = {
  eyebrow: "Why choose Axiomra?",
  titleLead: "Healthcare Data & AI Solutions",
  titleAccent: "Built Around How You Work",
  cards: [
    {
      icon: "ShieldCheck",
      title: "Privacy And Governance From The Start, Not The Retrofit",
      body:
        "Applicable privacy and security requirements, such as HIPAA or GDPR, are reviewed with your compliance team and designed into the data and AI workflow from the start: least-privilege access, encrypted PHI, de-identified training data and audit trails. Retrofitting them later costs more and convinces nobody.",
    },
    {
      icon: "Layers",
      title: "We Integrate With Your EHR, We Do Not Replace It",
      body:
        "Our data and AI workflows sit alongside the systems of record through HL7, FHIR and DICOM interfaces, so new analytics and AI capability can be introduced while the record your clinicians depend on keeps running untouched underneath.",
    },
    {
      icon: "Target",
      title: "Clinically Validated, Honestly Reported",
      body:
        "Models are evaluated on your own data, with performance reported by subgroup and the failure modes named. We provide 60 days of technical support and team training after delivery, and we will tell you when a model is not ready for a clinical decision.",
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
  title: "Our Blogs On AI And Clinical Innovation",
  body:
    "Explore our knowledge hub to stay current on clinical AI, interoperability and the practical side of shipping software into a regulated care setting.",
  posts: [
    {
      title: "Clinical AI In Production: What Changes After The Pilot",
      tag: "Clinical AI",
      image: blog1Img,
      alt: "A 3D visualisation of an artificial neural network",
    },
    {
      title: "FHIR Without The Fantasy: A Realistic Interoperability Playbook",
      tag: "Interoperability",
      image: blog2Img,
      alt: "An abstract rendering of biological complexity",
    },
    {
      title: "Ambient Scribes And The Documentation Burden: Reading The Evidence",
      tag: "Workflow",
      image: blog3Img,
      alt: "An abstract visual linking AI with medicine and biology",
    },
  ],
};

export const faqs = [
  {
    q: "How can Data & AI reduce clinician burnout?",
    a: "By removing the typing rather than adding another screen. Ambient capture drafts the encounter note, clinical NLP suggests codes and pre-fills the order set, and the clinician reviews and signs. The measured gains in published evaluations sit around a quarter to a third of documentation time. Meaningful, but not the 80% figure vendors quote.",
  },
  {
    q: "Can an AI solution guarantee HIPAA compliance?",
    a: "No. No product or AI solution delivers compliance by itself; compliance is a property of the system, the contracts and the operating practice together, and it is confirmed with your compliance team. What we design into the data and AI workflow is the technical side: least-privilege access by role, PHI encrypted at rest and in transit, audit logging, de-identification before model training, and a Business Associate Agreement in place before any data moves where one is required.",
  },
  {
    q: "Can you integrate with Epic, Cerner or our existing EHR?",
    a: "Yes, through HL7 v2 interfaces, FHIR R4 APIs and SMART on FHIR, depending on what your vendor exposes and what your integration team will approve. We design the data layer so the EHR stays the system of record and our analytics and AI services stay outside it. That is what keeps the integration approvable and the upgrade path intact.",
  },
  {
    q: "How accurate is AI in medical imaging, honestly?",
    a: "On narrow, well-defined tasks with good training data (screening mammography, diabetic retinopathy, intracranial haemorrhage triage), performance is genuinely at or near specialist level. It degrades on rare presentations, unusual scanner protocols and populations under-represented in training. We report performance by subgroup and design the workflow so the model triages and flags rather than decides.",
  },
  {
    q: "What does interoperability actually require beyond supporting FHIR?",
    a: "A patient-matching strategy, terminology mapping across SNOMED CT, LOINC and ICD-10, and agreement on what each field means clinically. Speaking FHIR is the easy part; the work is reconciling four systems that each define an encounter differently. Budget for that mapping effort explicitly or it will surface as a delay later.",
  },
  {
    q: "How do you handle patient consent and data governance for AI training?",
    a: "Training runs on de-identified data by default, with a documented de-identification method and a re-identification risk assessment behind it. Where identifiable data is unavoidable we work within your existing research governance or ethics approval. Consent models differ by jurisdiction, so we design the data flow with your DPO or privacy officer rather than around them.",
  },
  {
    q: "Can AI reduce claim denials and revenue leakage?",
    a: "Often, because the feedback loop is fast and measurable. Coding support improves documentation specificity, and denial-prediction models flag at-risk claims and name the likely missing evidence for human review before submission. The gain comes from fixing the claim, not appealing it.",
  },
  {
    q: "How long does a healthcare AI pilot take?",
    a: "A scoped pilot on de-identified data typically runs eight to twelve weeks. Moving to production depends far more on your governance, security review and integration approvals than on engineering time, so plan for those in parallel from week one rather than discovering them at go-live.",
  },
  {
    q: "Can you support AI use cases that may need FDA or MHRA clearance?",
    a: "Where a use case may fall under software as a medical device, we work alongside your regulatory lead and document model development, validation and data lineage to support the technical file. We are not a regulatory consultancy, and we will say so early rather than let a clearance pathway become a surprise.",
  },
  {
    q: "How much does a healthcare Data & AI project cost?",
    a: "It depends on the regulatory scope, the state of your clinical data and how many systems need to be integrated. A scoped pilot is the fastest route to a real number. Book a free session and we will size it honestly, including the parts we would not automate yet.",
  },
];

export const finalCta = {
  title: "Grow Smarter, Grow Faster With Axiomra",
  subtitle:
    "Talk to our Data & AI team about how analytics and AI can reduce administrative load, support faster review and keep patient data well governed.",
  buttonText: "Get your project done!",
  background: finalCtaBgImg,
};
