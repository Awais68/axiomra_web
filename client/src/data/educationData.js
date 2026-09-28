/**
 * Copy and imagery for the Education industry page (/industries/education).
 *
 * Everything the page renders comes from here, so a copy change never touches
 * a component. Section order in the page mirrors this file.
 */

import heroImg from "../assets/industries/education/hero.webp";
import introImg from "../assets/industries/education/intro.webp";

import svcOperationsImg from "../assets/industries/education/svc-operations.webp";
import svcCollaborationImg from "../assets/industries/education/svc-collaboration.webp";
import svcAssessmentImg from "../assets/industries/education/svc-assessment.webp";
import svcContentImg from "../assets/industries/education/svc-content.webp";
import svcInteractiveImg from "../assets/industries/education/svc-interactive.webp";

import specBgImg from "../assets/industries/education/spec-bg.webp";
import techBgImg from "../assets/industries/education/tech-bg.webp";
import midCtaBgImg from "../assets/industries/education/midcta-bg.webp";
import textureBgImg from "../assets/industries/education/texture-bg.webp";

import stkAdminsImg from "../assets/industries/education/stk-admins.webp";
import stkTeachersImg from "../assets/industries/education/stk-teachers.webp";
import stkStudentsImg from "../assets/industries/education/stk-students.webp";
import stkParentsImg from "../assets/industries/education/stk-parents.webp";
import stkK12Img from "../assets/industries/education/stk-k12.webp";
import stkHigherEdImg from "../assets/industries/education/stk-highered.webp";

import blog1Img from "../assets/industries/education/blog-1.webp";
import blog2Img from "../assets/industries/education/blog-2.webp";
import blog3Img from "../assets/industries/education/blog-3.webp";
import finalCtaBgImg from "../assets/industries/education/final-cta.webp";


export const EDUCATION_SLUG = "education";

export const hero = {
  eyebrow: "AI for the education industry",
  titleLead: "AI & Data Solutions for",
  titleAccent: "Better Learning",
  titleTail: "and Smarter Education Operations",
  body:
    "Axiomra helps schools, universities, training providers and EdTech teams use data and AI to improve student engagement, reduce administrative workload and make learning support more responsive. We focus on analytics, automation, responsible AI and data integration around your existing learning ecosystem—working with the systems your teams already use, not replacing them.",
  ctaText: "Explore Your Education AI Use Case",
  image: heroImg,
  alt: "The reading room of a historic library lined with books",
  reviews: { platform: "Clutch", rating: 5, count: 12 },
};

export const intro = {
  titleLead: "Use Data & AI to Make Learning",
  titleAccent: "More Accessible and Responsive",
  paragraphs: [
    "Axiomra helps education organisations connect LMS, SIS, assessment and engagement data so they can identify learning gaps, personalise support and reduce repetitive administration.",
    "AI can assist with feedback, content discovery and student support, while accessibility, privacy, human oversight and low-bandwidth realities remain part of the design from the start.",
  ],
  ctaText: "Discuss an Education Data & AI Pilot",
  image: introImg,
  alt: "A student taking notes from a textbook at a study desk",
};

export const impact = {
  titleLead: "AI's Measurable Impact On",
  titleAccent: "Global Education Outcomes",
  body:
    "AI is rapidly reshaping K-12, higher education and workforce training: speeding up instruction, grading and student support while personalising learning journeys, improving accessibility and delivering real-time insight that boosts engagement, equity and completion.",
  stats: [
    {
      value: "92%",
      label: "of UK undergraduates now use AI tools in their studies.",
      source: "HEPI, Student Generative AI Survey 2025",
    },
    {
      value: "88%",
      label: "reported using generative AI for assessment-related tasks in 2025.",
      source: "HEPI, Student Generative AI Survey 2025",
    },
    {
      value: "$7.6B",
      label: "global AI in education market size estimated for 2025.",
      source: "The Business Research Company, 2025 market report",
    },
  ],
};

/**
 * The challenge rail. Each entry is a barrier institutions hit, and how data
 * and AI help remove it.
 */
export const challenges = {
  eyebrow: "Overcoming key barriers in digital learning",
  titleLead: "Top 7 Education Industry",
  titleAccent: "Challenges We Solve",
  items: [
    {
      title: "Digital Divide & Access Barriers",
      body:
        "Many students have limited access to devices, bandwidth and online resources, which quietly decides who keeps up and who falls behind. We analyse access and participation data to show where gaps sit, and design AI use cases that still work in low-bandwidth and mobile-first contexts.",
    },
    {
      title: "Inadequate Teacher Training",
      body:
        "New tools fail when the staff using them are handed a login and left alone. We keep AI use cases simple to adopt, explain how each output is produced and support educators with clear guidance, so confidence grows while they work.",
    },
    {
      title: "Data Privacy & Security",
      body:
        "Student records are among the most sensitive data any organisation holds, and the rules differ by country and by age group. We scope every data and AI use case around your privacy obligations: least-privilege access, minimal data use, audit trails and clear retention rules.",
    },
    {
      title: "Student Engagement",
      body:
        "Attendance is not attention. Courses lose learners in the middle, long before anyone sees it in the results. We use participation and learning signals to measure engagement week by week, so staff can see who may need support while there is still time to act.",
    },
    {
      title: "Limited Personalisation",
      body:
        "One syllabus at one pace suits almost nobody. Our AI models read performance signals to identify each learner's gaps and recommend the next best activity, so stronger students keep moving and struggling students get help while it still matters.",
    },
    {
      title: "Poor Platform Integration",
      body:
        "LMS, SIS, assessment tools and content libraries rarely talk to each other, so staff re-key the same data and no one trusts the reports. We build data pipelines using LTI, xAPI, OneRoster and SIS APIs so analytics draw on one trusted record.",
    },
    {
      title: "Administrative Overload",
      body:
        "Registration, timetabling, attendance, grading and reporting consume the hours that should go to teaching. We automate the repeatable reporting and data preparation and give leadership live dashboards, so the admin load drops and decisions are better evidenced.",
    },
  ],
};

/**
 * The five Data & AI service areas, each with the capabilities inside them.
 * `points` renders as the arrow list from the reference.
 */
export const services = {
  eyebrow: "Where can data and AI help your institution?",
  titleLead: "Data & AI Services",
  titleAccent: "for Education Digital Transformation",
  body:
    "Axiomra supports institutions that want to make better use of learning, assessment, operational and engagement data. Our work can include AI strategy, data integration, education analytics, responsible generative AI, workflow automation and predictive models—aligned to institutional goals, privacy requirements and measurable outcomes.",
  items: [
    {
      title: "Education Operations & Analytics",
      body:
        "Administrative data is often spread across systems and spreadsheets. Axiomra connects it into reliable reporting and analytics, so leaders can see performance across departments and make decisions on current evidence.",
      points: ["LMS & SIS Data Integration", "Operational Reporting", "Performance Analytics"],
      image: svcOperationsImg,
      alt: "An analytics dashboard open on a laptop at a study desk",
    },
    {
      title: "Learning Engagement & Communication Intelligence",
      body:
        "Remote and blended learning can create fragmented participation data. Axiomra can help institutions analyse engagement across collaboration tools, identify participation gaps and automate selected communication workflows. Rather than replacing video or collaboration platforms, our Data & AI services make the information around them more useful for educators and administrators.",
      points: ["Engagement Analytics", "Participation Gap Detection", "Communication Workflow Automation"],
      image: svcCollaborationImg,
      alt: "Two participants smiling during a live video lesson",
    },
    {
      title: "AI-Assisted Assessment & Feedback",
      body:
        "Reduce repetitive marking and help educators identify learning gaps earlier. Axiomra can support assessment analytics, rubric-assisted review, feedback drafting and performance dashboards, with educators retaining control over final academic judgement. The objective is faster, more consistent insight—not fully automated high-stakes decisions.",
      points: ["Assessment Analytics", "Rubric-Assisted Review", "Feedback Drafting", "Performance Dashboards"],
      image: svcAssessmentImg,
      alt: "A pencil resting on a multiple-choice answer sheet",
    },
    {
      title: "AI for Education Content, Accessibility & Knowledge Management",
      body:
        "Help educators find, adapt and organise learning content more efficiently. Axiomra can apply generative AI, semantic search and content analytics to support drafting, summarisation, multilingual assistance and knowledge discovery. We build accessibility requirements, source quality checks, copyright and educator review into the workflow.",
      points: [
        "Generative AI Drafting Support",
        "Semantic Search",
        "Content Analytics",
        "Summarisation",
        "Multilingual Assistance",
        "Knowledge Discovery",
      ],
      image: svcContentImg,
      alt: "A blank sketch pad surrounded by coloured pencils on a desk",
    },
    {
      title: "Personalised Learning & Student Engagement Analytics",
      body:
        "Use learning and engagement data to understand where students need more support and which content is working. Axiomra can help design adaptive recommendation models, learner segmentation and AI-assisted support experiences. Interactive, AR or VR environments can be integrated where they genuinely improve the learning objective rather than added for novelty.",
      points: [
        "Adaptive Recommendation Models",
        "Learner Segmentation",
        "Student Support Signals",
        "Content Effectiveness Analysis",
        "AI-Assisted Support Experiences",
      ],
      image: svcInteractiveImg,
      alt: "A child following an interactive lesson on a tablet",
    },
  ],
};

/** Data & AI use cases across the sector, shown as a pill rail over a photo band. */
export const specialisms = {
  eyebrow: "Where do we apply data and AI in education?",
  titleLead: "AI & Data Use Cases",
  titleAccent: "Across the Education Ecosystem",
  background: specBgImg,
  items: [
    {
      label: "Mobile learning",
      body: "Analyse progress and support personalised nudges across connected and low-bandwidth contexts.",
    },
    {
      label: "School operations",
      body: "Automate reporting and surface trends from administrative data.",
    },
    {
      label: "Tutor support",
      body: "Use AI to assist planning, knowledge retrieval and learner follow-up.",
    },
    {
      label: "E-learning",
      body: "Personalise content discovery and monitor engagement.",
    },
    {
      label: "LMS intelligence",
      body: "Connect LMS data with assessment and student records for better analytics.",
    },
  ],
};

/** The four Data & AI capabilities behind our education work. */
export const technologies = {
  eyebrow: "Which technologies do we use for education solutions?",
  titleLead: "Modern Data & AI Technologies",
  titleAccent: "for Education",
  body:
    "Axiomra selects technology based on the education problem, data sensitivity and operating environment. Typical capabilities may include cloud data platforms, analytics, machine learning, generative AI, semantic search, workflow automation and secure integrations. We choose technology that supports reliability, accessibility, privacy and maintainability—not technology that simply sounds advanced.",
  ctaText: "View all services",
  background: techBgImg,
  items: [
    {
      title: "Artificial Intelligence",
      body:
        "AI supports better decisions and automation in education. Models analyse student data to identify gaps, flag students who may need support and suggest personalised next steps, with educators reviewing the outcome.",
    },
    {
      title: "Data Analytics",
      body:
        "Data analytics uncovers trends and insight, supporting better instructional strategies and operational decisions. Clear reporting helps administrators monitor performance, evaluate programmes and make decisions backed by evidence rather than instinct.",
    },
    {
      title: "Generative AI",
      body:
        "Generative AI supports content drafting, summarisation and adaptation. Used with educator review and clear source controls, it takes repetitive preparation work off staff so they can focus on teaching.",
    },
    {
      title: "Machine Learning",
      body:
        "Machine learning converts large datasets into insight teachers can act on. It helps tailor learning recommendations, forecast demand and optimise administrative workflows, so institutions can operate more efficiently.",
    },
  ],
};

/** Six outcomes data and AI open up for an institution. */
export const streamline = {
  eyebrow: "What can AI optimise for you?",
  titleLead: "Discover How AI Can",
  titleAccent: "Simplify Your Education Operations",
  texture: textureBgImg,
  items: [
    {
      title: "Improve Engagement & Retention",
      body: "Use participation and learning signals to identify students who may need support.",
    },
    {
      title: "Improve Learning Insight",
      body: "Surface knowledge gaps and personalise recommendations where appropriate.",
    },
    {
      title: "Reduce Administrative Load",
      body: "Automate repetitive reporting, routing and data preparation.",
    },
    {
      title: "Improve Education Product Decisions",
      body: "Use behavioural and outcome data to guide what to improve next.",
    },
    {
      title: "Strengthen Recruitment Insight",
      body: "Analyse funnel and engagement data to understand what attracts and converts suitable learners.",
    },
    {
      title: "Build Responsible AI Capability",
      body: "Create governed, measurable AI use cases that can scale across the institution.",
    },
  ],
};

export const midCta = {
  title: "Build a Responsible Data & AI Roadmap for Education",
  body:
    "Start with one measurable challenge—student engagement, assessment workload, reporting, content discovery or learner support. Axiomra can assess the data available, identify the right AI approach, define governance and test value before wider adoption.",
  ctaText: "Discuss Your Education AI Priority",
  background: midCtaBgImg,
};

export const stakeholders = {
  eyebrow: "Who we work with",
  titleLead: "Data & AI Support",
  titleAccent: "For Stakeholders Across Education",
  items: [
    {
      title: "School Administrators",
      body:
        "Live dashboards for enrolment, attendance, staffing and spend, so decisions are made on this week's numbers rather than last term's report.",
      image: stkAdminsImg,
      alt: "Three school staff members reviewing paperwork together at a desk",
    },
    {
      title: "Teachers & Instructors",
      body:
        "Assessment analytics, AI-assisted planning support and a clear view of which students may need help this week, giving time back to teaching.",
      image: stkTeachersImg,
      alt: "A teacher guiding a young pupil writing on a classroom blackboard",
    },
    {
      title: "Students",
      body:
        "Personalised recommendations and faster feedback, drawn from learning data, so support reaches each learner at the right pace.",
      image: stkStudentsImg,
      alt: "Two university students smiling in a lecture hall",
    },
    {
      title: "Parents",
      body:
        "Clearer progress and attendance insight, shared through the channels schools already use, so families see how a child is doing sooner.",
      image: stkParentsImg,
      alt: "A parent reading with a child at home",
    },
    {
      title: "K-12 Institutions",
      body:
        "Reporting and analytics across attendance, assessment and timetabling data, set up so schools without a large data team can still use it.",
      image: stkK12Img,
      alt: "A young pupil with a school backpack on the first day of term",
    },
    {
      title: "Higher Education & Universities",
      body:
        "Institution-wide analytics that connect SIS, LMS and assessment data across faculties and campuses, with governance built in from the start.",
      image: stkHigherEdImg,
      alt: "A university campus quad on a clear day",
    },
  ],
};

export const blogs = {
  eyebrow: "What can our expertise teach you?",
  title: "Explore Insights On AI And EdTech Innovation",
  body:
    "We share what we learn building education platforms: practical guidance, architecture decisions and real-world case studies for institutions and EdTech founders.",
  posts: [
    {
      title: "How To Develop Custom Language Learning Software In 2026",
      tag: "Product",
      image: blog1Img,
      alt: "The letters AI standing on a circuit board",
    },
    {
      title: "A Complete Guide To E-Learning App Development",
      tag: "Guide",
      image: blog2Img,
      alt: "A child using a learning app on a tablet",
    },
    {
      title: "Top 10 AI-Based Language Learning Apps In 2026",
      tag: "Roundup",
      image: blog3Img,
      alt: "A graduate throwing a cap into a blue sky",
    },
  ],
};

export const techStrip = {
  eyebrow: "Data & AI technologies",
  titleLead: "Data & AI Technologies",
  titleAccent: "For Your Institution",
  body:
    "The tools we use to connect education data, run analytics and deliver AI use cases. Pick a layer to see what it is made of.",
  ctaText: "View all tech stack",
  tabs: [
    {
      id: "ai",
      label: "Artificial Intelligence",
      items: [
        "GPT-4o", "Claude", "Gemini", "Llama 3", "Mistral", "Phi-2", "Groq", "PaLM", "Whisper",
        "Stable Diffusion", "MediaPipe", "Guardrails", "Vertex AI", "OpenAI Embeddings", "LangChain", "RAG Pipelines",
      ],
    },
    {
      id: "backend",
      label: "Data & Databases",
      items: [
        "Node.js", "NestJS", "Express", "FastAPI", "Django", "GraphQL", "PostgreSQL", "MongoDB",
        "Redis", "Elasticsearch", "Qdrant", "Pinecone", "Kafka", "Airflow", "dbt", "BigQuery",
      ],
    },
    {
      id: "frontend",
      label: "Dashboards & Visualisation",
      items: ["React", "Next.js", "Vue", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js", "Vite", "Radix UI", "D3.js"],
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
      id: "edtech",
      label: "EdTech Data Standards",
      items: ["LTI 1.3", "xAPI", "SCORM", "QTI", "OneRoster", "Ed-Fi", "Open Badges", "WCAG 2.2", "Moodle", "Canvas API"],
    },
    {
      id: "design",
      label: "Accessibility & Usability",
      items: ["Figma", "Design Tokens", "Prototyping", "Accessibility Audits", "Usability Testing With Learners"],
    },
  ],
};

export const businessTypes = {
  eyebrow: "Who do we work with?",
  titleLead: "Explore The Range Of",
  titleAccent: "Education Organisations We Support",
  body:
    "We help the people responsible for learning outcomes use data and AI well, whether that is a single campus, a multi-academy trust or an EdTech team serving thousands of institutions.",
  rows: [
    {
      label: "EdTech startups",
      body: "We help EdTech teams validate AI use cases, analyse retention and learner behaviour, and show measurable value before the next raise.",
    },
    {
      label: "K-12 schools and trusts",
      body: "Attendance, safeguarding and assessment data brought together into clear reporting, for schools that do not have an in-house data team.",
    },
    {
      label: "Colleges and universities",
      body: "Multi-campus SIS and LMS data integration, student success analytics and the governance evidence higher education reviews ask for.",
    },
    {
      label: "Corporate training providers",
      body: "Workforce learning analytics: completion tracking, skills insight and reporting that stands up to an audit as well as to a board deck.",
    },
  ],
};

export const testimonials = {
  eyebrow: "Why is it worth working with us?",
  titleLead: "What Our Clients Say About Our",
  titleAccent: "Data & AI Team",
  items: [
    {
      name: "Sudeep Kulkarni",
      role: "CEO & Founder, NitCode",
      quote:
        "The team were very co-operative and helpful throughout the project. They understood what we needed early, kept us updated weekly and delivered without the back and forth we expected. Highly recommended for AI projects.",
      rating: 5,
    },
    {
      name: "David",
      role: "CEO, Alisia",
      quote:
        "They never miss deadlines and always delivered the agreed scope on time. They collaborated with us at different stages of product development and were ready to accept the changes we required in our application.",
      rating: 5,
    },
    {
      name: "James",
      role: "CEO & Founder, FluentTalkAI",
      quote:
        "I'm very grateful for their services. They helped us build a great AI product that is actually usable by thousands of people. They are the best in building AI-powered software, very professional and easy to work with.",
      rating: 5,
    },
  ],
};

export const showcase = {
  eyebrow: "What innovations have we delivered to businesses?",
  titleLead: "Showcasing Our",
  titleAccent: "Data & AI Projects",
  body:
    "Explore Data & AI work we have delivered to solve the operational and learning problems institutions actually face.",
  ctaText: "Check out our full portfolio",
};

export const partner = {
  eyebrow: "Why choose us for your next big project?",
  titleLead: "Choose Axiomra For",
  titleAccent: "Results That Speak For Themselves",
  cards: [
    {
      icon: "Target",
      title: "Enhanced Training Adaptability",
      body:
        "Educators need clear insight to reinforce learning. Our Data & AI services work alongside classroom and online programmes, surfacing where learners struggle and supporting teaching and assessment decisions.",
    },
    {
      icon: "Layers",
      title: "Enhanced Cost Efficiency",
      body:
        "Better use of existing data helps institutions maximise resources. By automating repetitive reporting and focusing AI on measurable priorities, schools and universities reduce operational effort without replacing the systems they rely on.",
    },
    {
      icon: "ShieldCheck",
      title: "Flexibility With Modern Teaching Methods",
      body:
        "Learning methods evolve rapidly. Our analytics and AI use cases adapt as programmes change, helping educators see what is working and keep learners on effective, up-to-date content.",
    },
  ],
  stats: [
    { value: "200+", label: "Projects Delivered" },
    { value: "5+", label: "Valuable Partnerships" },
    { value: "20+", label: "Countries Served" },
    { value: "25+", label: "Tech Experts" },
  ],
};

export const faqs = [
  {
    q: "How is AI and machine learning used in EdTech?",
    a: "In three main places. Personalisation: models read performance signals and recommend the next best activity for each learner. Automation: grading support, scheduling, attendance and reporting run without staff re-keying data. Early warning: engagement and assessment patterns flag students who may need support while there is still time to intervene.",
  },
  {
    q: "How can Axiomra tailor Data & AI services to an institution's needs?",
    a: "We start with discovery on your goals, your existing systems, your data and your privacy obligations, then shape the work around them. That usually means connecting the SIS and LMS data you already have rather than replacing anything, and piloting the highest-value use case first so staff see a result inside a term.",
  },
  {
    q: "Can your solutions integrate with existing EdTech systems?",
    a: "Yes. We work with the standards the sector already runs on: LTI 1.3, xAPI, SCORM, QTI, OneRoster and Ed-Fi, plus direct SIS and LMS APIs where a standard does not cover it. The goal is one trusted source of data per record, not another system to reconcile.",
  },
  {
    q: "How do I start an education Data & AI project with Axiomra?",
    a: "Start with a scoped consultation. We will look at the data available and the challenge you want to solve, size the work honestly, including what we would not recommend, and give you a written scope, timeline and cost before work begins. From there you can start with a focused pilot.",
  },
  {
    q: "Should we use off-the-shelf AI tools or a tailored Data & AI approach?",
    a: "It depends on where your pain is. Off-the-shelf tools are fine for commodity needs. A tailored approach pays where the data is fragmented: the joins between LMS, SIS and assessment, the reporting no vendor owns, and the workflows specific to how your institution runs. Most clients use both, and we will tell you which is which.",
  },
  {
    q: "How do you handle student data privacy and safeguarding?",
    a: "We scope every data and AI use case around your GDPR, FERPA and COPPA obligations: least-privilege role-based access, encryption in transit and at rest, audit trails, data residency, retention rules and age-appropriate consent. We also document our approach for the review your DPO or procurement team will run.",
  },
  {
    q: "How long does an education Data & AI project take?",
    a: "A scoped pilot with one use case, such as assessment analytics or an early-warning model, typically runs eight to twelve weeks. A wider programme spanning LMS and SIS data integration and analytics runs four to nine months, delivered in increments you can use from the start rather than at the end.",
  },
];

export const finalCta = {
  title: "Put AI To Work Across Your Institution",
  subtitle:
    "Tell us the education challenge you want to solve first, and we will help you find the data and AI approach that fits it.",
  buttonText: "Start the conversation",
  background: finalCtaBgImg,
};
