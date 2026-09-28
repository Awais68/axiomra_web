/**
 * Copy and imagery for the Sports industry page (/industries/sports).
 *
 * Everything the page renders comes from here, so a copy change never touches
 * a component. Section order in the page mirrors this file.
 */

import heroImg from "../assets/industries/sports/hero.webp";
import introImg from "../assets/industries/sports/intro.webp";

import svcMotionImg from "../assets/industries/sports/svc-motion.webp";
import svcGymImg from "../assets/industries/sports/svc-gym.webp";
import svcMobileImg from "../assets/industries/sports/svc-mobile.webp";
import svcLeagueImg from "../assets/industries/sports/svc-league.webp";
import svcMedicineImg from "../assets/industries/sports/svc-medicine.webp";
import svcTrainingImg from "../assets/industries/sports/svc-training.webp";
import svcEventImg from "../assets/industries/sports/svc-event.webp";
import svcTeamImg from "../assets/industries/sports/svc-team.webp";
import svcStreamingImg from "../assets/industries/sports/svc-streaming.webp";
import svcFanImg from "../assets/industries/sports/svc-fan.webp";
import svcTicketingImg from "../assets/industries/sports/svc-ticketing.webp";
import svcScoutingImg from "../assets/industries/sports/svc-scouting.webp";

import midCtaBgImg from "../assets/industries/sports/midcta-bg.webp";

import solProductImg from "../assets/industries/sports/sol-product.webp";
import solConsultingImg from "../assets/industries/sports/sol-consulting.webp";
import solVisionImg from "../assets/industries/sports/sol-vision.webp";
import solIntegrationImg from "../assets/industries/sports/sol-integration.webp";
import solInfraImg from "../assets/industries/sports/sol-infra.webp";

import stkCoachesImg from "../assets/industries/sports/stk-coaches.webp";
import stkAthletesImg from "../assets/industries/sports/stk-athletes.webp";
import stkClubsImg from "../assets/industries/sports/stk-clubs.webp";
import stkBroadcastersImg from "../assets/industries/sports/stk-broadcasters.webp";
import stkSponsorshipImg from "../assets/industries/sports/stk-sponsorship.webp";
import stkPhysioImg from "../assets/industries/sports/stk-physio.webp";

import sportSoccerImg from "../assets/industries/sports/sport-soccer.webp";
import sportCricketImg from "../assets/industries/sports/sport-cricket.webp";
import sportBasketballImg from "../assets/industries/sports/sport-basketball.webp";
import sportTennisImg from "../assets/industries/sports/sport-tennis.webp";
import sportBaseballImg from "../assets/industries/sports/sport-baseball.webp";
import sportGolfImg from "../assets/industries/sports/sport-golf.webp";
import sportBadmintonImg from "../assets/industries/sports/sport-badminton.webp";
import sportAthleticsImg from "../assets/industries/sports/sport-athletics.webp";
import sportSwimmingImg from "../assets/industries/sports/sport-swimming.webp";
import sportCyclingImg from "../assets/industries/sports/sport-cycling.webp";
import sportFootballImg from "../assets/industries/sports/sport-football.webp";
import sportHockeyImg from "../assets/industries/sports/sport-hockey.webp";

import textureBgImg from "../assets/industries/sports/texture-bg.webp";
import buildVisualImg from "../assets/industries/sports/build-visual.webp";

import blog1Img from "../assets/industries/sports/blog-1.webp";
import blog2Img from "../assets/industries/sports/blog-2.webp";
import blog3Img from "../assets/industries/sports/blog-3.webp";
import finalCtaBgImg from "../assets/industries/sports/final-cta.webp";

export const SPORTS_SLUG = "sports";

export const hero = {
  eyebrow: "AI for the sports industry",
  titleLead: "AI & Data Solutions for",
  titleAccent: "Better Performance, Smarter Operations",
  titleTail: "and Stronger Fan Engagement",
  body:
    "Axiomra helps sports organisations turn performance, operational and fan data into decisions teams can act on. From athlete analytics and computer vision to ticketing insights and fan intelligence, we focus on the data and AI layer that connects existing systems and improves visibility across the organisation.",
  ctaText: "Explore Your Sports Data & AI Use Case",
  image: heroImg,
  alt: "A packed football stadium under floodlights on a match night",
  reviews: { platform: "Clutch", rating: 5, count: 12 },
};

export const intro = {
  titleLead: "Turn Sports Data Into",
  titleAccent: "Competitive and Commercial Insight",
  paragraphs: [
    "Axiomra works with clubs, academies, venues, federations and sports organisations to improve how performance, medical, ticketing and fan data is used. We help teams identify high-value AI opportunities, connect fragmented data sources and build analytics that support coaching, operations and commercial decisions.",
    "Privacy, model governance and human review are designed around the use case from the start.",
  ],
  ctaText: "Book a Sports Data & AI Consultation",
  image: introImg,
  alt: "An analyst reviewing match video on a bank of monitors",
};

export const impact = {
  titleLead: "How AI Is Reshaping Performance, Revenue",
  titleAccent: "And Safety In Sports",
  body:
    "AI and data are changing how teams manage training load, understand injury risk and find new revenue, by bringing wearable, video, ticketing and CRM data together into analytics that work from academies to professional leagues.",
  stats: [
    {
      value: "$10.4B",
      label: "global AI in sports market size in 2025, on its way to roughly ten times that by the mid-2030s.",
      source: "Precedence Research, AI In Sports Market 2025",
    },
    {
      value: "38%",
      label: "of sports media executives said AI made content commercialisation easier in 2025.",
      source: "Stats Perform, 2025 AI Trends",
    },
    {
      value: "33%",
      label:
        "average positive shift in expectations for AI-driven audience and monetisation growth across sectors in 2025.",
      source: "Stats Perform, 2025 Survey",
    },
  ],
};

/**
 * The challenge rail. Each entry is a barrier sports organisations hit, and the
 * data or AI work that helps remove it.
 */
export const challenges = {
  eyebrow: "Overcoming key barriers in sport",
  titleLead: "Solving The Problems Sports Organisations Actually Have",
  titleAccent: "With Data & AI",
  items: [
    {
      title: "Performance Data Nobody Reads",
      body:
        "GPS vests, force plates, wellness questionnaires and video all land in different exports, and by the time anyone has merged them the session they describe is a week old. We build the data pipeline and the analytics view on top of it, so a coach sees load, readiness and risk for the whole squad before training starts rather than after it.",
    },
    {
      title: "Injury Risk Spotted Too Late",
      body:
        "The warning signs are often spread across sources nobody correlates. We combine workload history, movement asymmetry and self-reported wellness into a risk model with an audit trail, so medical staff get a flag worth reviewing and a record of why it was raised. The final call stays with qualified staff.",
    },
    {
      title: "Video Reviewed Once, Then Lost",
      body:
        "Match footage gets watched on Monday and never again, because nothing in it is searchable. Computer-vision pipelines can tag selected events, players and phases, turning archive footage into structured data for coaching, scouting, highlights and sponsorship reporting.",
    },
    {
      title: "Match-Day Data That Arrives Too Late",
      body:
        "Ticketing, access control, retail and stewarding data usually sits with separate vendors. We connect those sources into shared, near-real-time reporting, so gate throughput, capacity and incidents are visible during the match, not reconstructed from four reports the following week.",
    },
    {
      title: "Fans Who Only Show Up Twice A Season",
      body:
        "Declining attendance is a retention problem, and retention needs a joined-up view of the supporter. We bring ticketing, streaming, merchandise and engagement data into one analytics profile, then use segmentation and propensity models to show who is drifting and which content or offers bring them back.",
    },
    {
      title: "Sponsorship You Cannot Price",
      body:
        "Rights holders still sell exposure on estimates. Brand-detection models applied to broadcast and social video measure how long perimeter boards, shirt fronts and digital placements are visible, giving renewal conversations evidence rather than assumptions.",
    },
    {
      title: "Athlete Data Privacy And Consent",
      body:
        "Athlete biometrics are among the most sensitive data a club holds, and image rights and medical records each carry their own obligations. We design consent, retention and access control into the data model from the start, and document how each dataset is used so your legal and medical teams can review it.",
    },
  ],
};

export const services = {
  eyebrow: "Where data and AI help in sport",
  titleLead: "Sports Data & AI Use Cases",
  titleAccent: "Across Performance, Operations And Fans",
  body:
    "Much of sport still runs on manual, repetitive work: movement assessed by eye, medical records in separate systems, performance data processed in batches and fan insight that stops at the final whistle. These are the areas where data and AI most often help.",
  items: [
    {
      title: "Motion & Biomechanics Analysis",
      body:
        "Manual posture analysis and movement tracking are slow and inconsistent between assessors. Pose-estimation models break down biomechanics, quantify asymmetry and track technique changes session over session, so coaching decisions rest on measurement rather than memory.",
      image: svcMotionImg,
      alt: "A motion-capture session with reflective markers in a biomechanics lab",
    },
    {
      title: "Fitness Club & Gym Analytics",
      body:
        "Membership, attendance and class data usually sits unused in the booking system. We analyse it to forecast demand, spot members at risk of leaving and show which classes and time slots are under- or over-used.",
      image: svcGymImg,
      alt: "The interior of a modern gym lined with training machines",
    },
    {
      title: "Wearable & Athlete Data Analytics",
      body:
        "Wearables produce more data than staff can read. We bring device data into one analytics layer with training and match records, so athletes and coaches see trends in load, readiness and recovery rather than raw exports.",
      image: svcMobileImg,
      alt: "A runner checking a smartwatch mid-session",
    },
    {
      title: "League & Competition Data",
      body:
        "Competitions generate fixture, result, eligibility and officiating data that is often checked by hand. We apply data validation and scheduling optimisation so organisers can spot clashes, errors and trends earlier.",
      image: svcLeagueImg,
      alt: "A referee signalling during a football match",
    },
    {
      title: "Sports Medicine & Injury Data",
      body:
        "Injury and medical records scattered across paper, spreadsheets and clinic systems are hard to analyse. We bring injury logs, rehab progress and workload data together with appropriate access controls, and surface patterns that help medical staff decide where to look more closely.",
      image: svcMedicineImg,
      alt: "A physiotherapist treating an athlete's knee",
    },
    {
      title: "Training Load & Progress Analytics",
      body:
        "Coaching that depends on in-person observation caps how many athletes a programme can develop well. Analytics on training load, progress and outcomes help coaches personalise plans and see which athletes need attention first.",
      image: svcTrainingImg,
      alt: "A youth football squad working through a cone drill",
    },
    {
      title: "Event-Day Demand & Crowd Analytics",
      body:
        "Event day exposes every gap in planning at once. We use ticketing, entry and historical attendance data to forecast arrival patterns and demand, so operations teams can plan staffing and flow before the gates open.",
      image: svcEventImg,
      alt: "A stadium stand packed with cheering spectators",
    },
    {
      title: "Squad Availability & Selection Analytics",
      body:
        "Availability, workload and performance data often live in spreadsheets and group chats. We combine them into shared reporting so coaches and managers review selection and rotation from the same evidence through a long season.",
      image: svcTeamImg,
      alt: "A coach giving instructions to a huddled team",
    },
    {
      title: "Broadcast & Video Analytics",
      body:
        "Broadcast footage holds more value than a single viewing. Computer-vision and audience analytics support automated highlight detection, content tagging and viewing insight that help media teams decide what to publish and how to monetise it.",
      image: svcStreamingImg,
      alt: "A broadcast camera operator covering a match from the touchline",
    },
    {
      title: "Fan Intelligence & Personalisation",
      body:
        "Generic updates are one reason loyalty erodes. We analyse first-party engagement data to build fan segments and personalisation models that improve content, targeting and retention.",
      image: svcFanImg,
      alt: "Supporters holding scarves and flags in a stadium stand",
    },
    {
      title: "Ticketing & Venue Analytics",
      body:
        "Ticketing, access and retail data from different vendors rarely gets analysed together. We connect it for demand forecasting and pricing insight, so seats are filled before the day rather than discounted after it.",
      image: svcTicketingImg,
      alt: "Spectators passing through a stadium entrance gate",
    },
    {
      title: "Scouting & Recruitment Analytics",
      body:
        "Recruitment still turns on the games a scout could physically attend. We build data pipelines and similarity models across competitions and age groups, so a shortlist reflects a wider market and every recommendation carries the evidence behind it.",
      image: svcScoutingImg,
      alt: "An analyst reviewing play from the sideline on a tablet",
    },
  ],
};

export const midCta = {
  title: "Have a Sports Data Challenge We Haven't Listed?",
  body:
    "Every organisation has different systems, competitions and reporting needs. If your priority is not covered here, bring us the problem, the data sources you have and the decision you need to improve. We can assess whether AI, analytics or data integration is the right approach—and where it is not.",
  ctaText: "Discuss Your Use Case",
  background: midCtaBgImg,
};

export const solutions = {
  eyebrow: "Our delivery approach",
  titleLead: "How We Deliver Data & AI Work",
  titleAccent: "Around Your Season",
  body:
    "Sports calendars leave little room for disruptive technology projects. Axiomra plans discovery, data integration, modelling and rollout around pre-season, competition windows and operational constraints. Start with a focused use case, validate value quickly and scale only when the data and results justify it.",
  items: [
    {
      title: "Focused Data & AI Pilots",
      body:
        "Start with the one decision that costs your staff the most time or carries the most risk. We scope a pilot around it, use the data you already hold, and measure the result before anything is scaled.",
      points: [
        "One use case, agreed success measures and a fixed scope",
        "Timed around pre-season and competition windows",
        "A clear go, adjust or stop recommendation at the end",
      ],
      image: solProductImg,
      alt: "An analytics team working across a bank of monitors",
    },
    {
      title: "AI & Data Strategy for Sports Organisations",
      body:
        "Start by understanding the decisions you want to improve and the data you already hold. Axiomra reviews performance, medical, ticketing, CRM and league data, identifies realistic AI opportunities and defines how success will be measured. The output is a prioritised roadmap covering data readiness, expected value, governance and implementation effort—including ideas that are not ready to proceed yet.",
      points: [
        "Review of performance, medical, ticketing, CRM and league data",
        "Realistic AI opportunities with success measures defined",
        "Prioritised roadmap: data readiness, value, governance and effort",
      ],
      image: solConsultingImg,
      alt: "A strategy workshop around a whiteboard",
    },
    {
      title: "Computer Vision for Match, Player and Sponsorship Intelligence",
      body:
        "Use video data to automate selected analysis tasks such as event tagging, player tracking, pose estimation and sponsorship visibility. Axiomra designs computer-vision pipelines around your footage, camera setup and competition context, with clear accuracy measurement and human review where needed. Outputs can feed existing analytics and reporting systems rather than becoming another isolated tool.",
      points: [
        "Pipelines designed around your footage and camera setup",
        "Accuracy measured per task, with human review where needed",
        "Outputs feed the analytics and reporting you already use",
      ],
      image: solVisionImg,
      alt: "An analysis console tracking motion data from a live video feed",
    },
    {
      title: "Connect the Sports Data You Already Have",
      body:
        "Performance, CRM, ticketing and league data often sit in separate systems. Axiomra can build the data integration layer that makes these sources usable together for analytics and AI. We favour phased integration, clear data ownership and reversible change so critical match-day and operational systems remain stable while your data foundation improves.",
      points: [
        "One data layer across performance, CRM, ticketing and league sources",
        "Phased, reversible integration with clear data ownership",
        "Match-day and operational systems kept stable throughout",
      ],
      image: solIntegrationImg,
      alt: "Racks of servers in a data centre aisle",
    },
    {
      title: "Reliable Data Infrastructure for Peak Match-Day Demand",
      body:
        "When data volumes or digital traffic spike around fixtures, analytics and AI services need dependable infrastructure. Axiomra helps design scalable data pipelines, real-time processing and monitoring that can handle peak demand without paying peak costs all season. We test capacity, observability and cost controls against your actual usage patterns.",
      points: [
        "Scalable data pipelines and real-time processing",
        "Monitoring and observability for match-day peaks",
        "Capacity and cost controls tested against your real usage",
      ],
      image: solInfraImg,
      alt: "Rows of servers in a data centre lit by blue neon",
    },
  ],
};

export const stakeholders = {
  eyebrow: "Sports stakeholders",
  titleLead: "Who We Support",
  titleAccent: "Across the Sports Ecosystem",
  body:
    "Axiomra provides Data & AI services for organisations that need better performance insight, operational visibility or fan intelligence. This can include professional clubs, academies, federations, leagues, venues, sports media, rights holders and performance programmes—subject to the data, governance and business problem involved.",
  items: [
    {
      title: "Coaches & Analysts",
      body:
        "Load, opposition and selection data brought together, so the week's plan is built on the squad's actual state rather than last week's impression of it.",
      image: stkCoachesImg,
      alt: "A coach working through a tactics board with the team",
    },
    {
      title: "Athletes",
      body:
        "Clear analysis of training load, recovery and rehab progress, with defined control over who sees which part of their own data.",
      image: stkAthletesImg,
      alt: "An athlete on the podium after a medal ceremony",
    },
    {
      title: "Teams & Clubs",
      body:
        "Performance, medical, ticketing and commercial data connected, so departments and the board report from the same numbers.",
      image: stkClubsImg,
      alt: "A team lined up on the pitch before kick-off",
    },
    {
      title: "Broadcasters & Journalists",
      body:
        "Computer vision and match data that support highlight detection, searchable archives and live statistics during the match rather than the morning after it.",
      image: stkBroadcastersImg,
      alt: "A reporter interviewing an athlete with a microphone",
    },
    {
      title: "Marketing & Sponsorship Agencies",
      body:
        "Measured brand exposure across broadcast and social, audience segmentation from first-party data, and valuation models that make a renewal negotiation an evidence-based one.",
      image: stkSponsorshipImg,
      alt: "Perimeter advertising boards around a stadium pitch",
    },
    {
      title: "Trainers & Physiotherapists",
      body:
        "Objective movement and workload data alongside rehab records, so handovers between medical and coaching staff stop losing detail.",
      image: stkPhysioImg,
      alt: "A therapist working on an athlete's leg",
    },
  ],
};

/**
 * The sport rail. Rendered as a clipped, angled card rail, so keep the labels
 * to one or two words. Each card describes the data that sport produces, not a
 * claim of delivery in it.
 */
export const sportsWeServe = {
  eyebrow: "Sport-specific data",
  titleLead: "Data & AI That Adapts to the Sport,",
  titleAccent: "Not the Other Way Around",
  body:
    "Performance indicators, match structures and commercial models vary by sport. Axiomra starts with the specific competition, workflows and data available, then adapts analytics and AI accordingly.",
  items: [
    { label: "Football", body: "Event and tracking data, academy development and match-day attendance.", image: sportSoccerImg, alt: "A football resting in the back of a goal net" },
    { label: "Cricket", body: "Ball-by-ball data, bowling workload and multi-format selection.", image: sportCricketImg, alt: "A batsman playing a shot during a cricket match" },
    { label: "Basketball", body: "Possession data, rotation load and arena engagement.", image: sportBasketballImg, alt: "A basketball player rising to the hoop" },
    { label: "Tennis", body: "Shot and rally data, match load and coaching review.", image: sportTennisImg, alt: "A tennis player serving on a hard court" },
    { label: "Baseball", body: "Pitch tracking, biomechanics and player development data.", image: sportBaseballImg, alt: "A pitcher mid-delivery on the mound" },
    { label: "Golf", body: "Swing analysis, shot data and course usage patterns.", image: sportGolfImg, alt: "A golfer following through on a fairway shot" },
    { label: "Badminton", body: "Rally data, movement patterns and court utilisation.", image: sportBadmintonImg, alt: "A badminton player striking a shuttlecock" },
    { label: "Athletics", body: "Split timing, sprint mechanics and results data.", image: sportAthleticsImg, alt: "A sprinter set in the starting blocks" },
    { label: "Swimming", body: "Stroke rate, split and session load data.", image: sportSwimmingImg, alt: "A swimmer mid-stroke in a competition lane" },
    { label: "Cycling", body: "Power data, route telemetry and training load.", image: sportCyclingImg, alt: "A cyclist racing on an open road" },
    { label: "American Football", body: "Play tagging, snap counts and collision-load data.", image: sportFootballImg, alt: "An American football player in helmet and pads" },
    { label: "Hockey", body: "Shift data, puck and ball possession, and workload.", image: sportHockeyImg, alt: "A hockey player driving forward with the puck" },
  ],
};

export const benefits = {
  eyebrow: "What you can improve with sports data and AI",
  titleLead: "Benefits Of AI & Data",
  titleAccent: "For Sports Organisations",
  items: [
    {
      title: "Improve Performance Insight",
      body:
        "Combine load, movement, recovery and match data to support more individualised analysis.",
    },
    {
      title: "Connect Existing Data Sources",
      body:
        "Bring wearable, tracking, league and operational data into a usable analytics layer.",
    },
    {
      title: "Improve Operational Visibility",
      body:
        "Use shared data and reporting to reduce manual coordination across scheduling, facilities, squads and administration.",
    },
    {
      title: "Understand and Engage Fans",
      body:
        "Analyse first-party engagement data to improve content, segmentation and retention.",
    },
    {
      title: "Strengthen Commercial Decisions",
      body:
        "Use ticketing, subscription and sponsorship data to improve forecasting and measurement.",
    },
    {
      title: "Support Player Availability",
      body:
        "Combine workload and medical signals to help staff identify patterns that may warrant closer review. Our models support, rather than replace, qualified clinical and performance judgement.",
    },
  ],
};

export const build = {
  title: "Start With The Sports Decision You Want To Improve",
  body:
    "Bring us the bottleneck, whether that is performance analysis, match-day reporting or fan insight that has stopped keeping up. We will scope it honestly, deliver it in stages you can use, and tell you which ideas are not worth pursuing yet.",
  ctaText: "Get in touch now",
  texture: textureBgImg,
  image: buildVisualImg,
  alt: "A footballer striking the ball during a match",
};

export const techStrip = {
  eyebrow: "Technologies we work with",
  titleLead: "Data & AI Technologies",
  titleAccent: "Behind Our Sports Work",
  body:
    "The tools behind our sports data pipelines, models and analytics. Pick a layer to see what it is made of.",
  ctaText: "View all tech stack",
  tabs: [
    {
      id: "ai",
      label: "Artificial Intelligence",
      items: [
        "GPT-4o", "Claude", "Gemini", "Llama 3", "MediaPipe", "OpenPose", "YOLO", "Detectron2",
        "SAM", "DeepSORT", "Whisper", "PyTorch", "TensorFlow", "scikit-learn", "XGBoost",
        "OpenCV", "Vertex AI", "Guardrails", "LangChain", "OpenAI Embeddings",
      ],
    },
    {
      id: "backend",
      label: "Data Platforms & APIs",
      items: [
        "Node.js", "NestJS", "FastAPI", "Django", "Go", "GraphQL", "PostgreSQL", "TimescaleDB",
        "MongoDB", "Redis", "ClickHouse", "Elasticsearch", "Kafka", "Airflow", "dbt", "Snowflake",
      ],
    },
    {
      id: "frontend",
      label: "Dashboards & Visualisation",
      items: [
        "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js", "GSAP",
        "Vite", "D3.js", "Deck.gl",
      ],
    },
    {
      id: "streaming",
      label: "Streaming & Video",
      items: ["FFmpeg", "GStreamer", "HLS", "LL-HLS", "WebRTC", "MediaLive", "Mux", "SRT", "NVENC"],
    },
    {
      id: "cloud",
      label: "Cloud",
      items: ["AWS", "Google Cloud", "Azure", "Vercel", "Cloudflare", "Firebase", "Supabase", "Fly.io"],
    },
    {
      id: "devops",
      label: "MLOps & Monitoring",
      items: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "GitLab CI", "Nginx", "Prometheus", "Grafana", "Sentry"],
    },
    {
      id: "design",
      label: "Reporting UX",
      items: ["Figma", "Design Tokens", "Prototyping", "WCAG 2.2 Audits", "Usability Testing"],
    },
  ],
};

export const businessTypes = {
  eyebrow: "Who do we work with?",
  titleLead: "Explore The Range Of",
  titleAccent: "Sports Organisations We Support",
  body:
    "From an academy making sense of its first season of data to a federation analysing a national competition, the engagement shape changes but the standard does not.",
  rows: [
    {
      label: "Academies and grassroots clubs",
      body: "Registration, attendance and player-development data brought together, so volunteers can see participation and progress without rebuilding a spreadsheet every week.",
    },
    {
      label: "Professional clubs",
      body: "Performance, medical, recruitment and commercial data connected for analytics and AI, with the access control and audit trail a first-team environment needs before anyone will trust it.",
    },
    {
      label: "Leagues and federations",
      body: "Competition, eligibility and officiating data validated and analysed, plus the official data feeds broadcasters and partners rely on.",
    },
    {
      label: "Venues, brands and sports-tech startups",
      body: "Attendance, fan and commercial data turned into forecasting and segmentation, and AI proofs of concept that test an idea against real data before it is scaled.",
    },
  ],
};

export const testimonials = {
  eyebrow: "Why is it worth working with us?",
  titleLead: "What Clubs And Leagues Say",
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
  eyebrow: "Our portfolio",
  titleLead: "Proven Results Across",
  titleAccent: "The Sports Industry",
  body:
    "A selection of the models and analytics work we have delivered, including the video analytics and real-time data work that sports organisations come to us for.",
  ctaText: "Check Out Our Full Portfolio",
};

export const partner = {
  eyebrow: "Why is it worth working with us?",
  titleLead: "Why Partner With Axiomra For",
  titleAccent: "Sports Data & AI",
  cards: [
    {
      icon: "Target",
      title: "We Speak Sport, Not Just Data",
      body:
        "Our data and AI team plans around training weeks, transfer windows and match-day constraints. Every model and report we deliver fits how a season actually runs, which is why staff keep using it past the first month.",
    },
    {
      icon: "Layers",
      title: "Integrates With What You Already Run",
      body:
        "GPS vendors, optical tracking, ticketing platforms, CRM and league feeds each have their own idea of a schema. We build the data layer that reconciles them, modular enough to survive the next vendor change.",
    },
    {
      icon: "ShieldCheck",
      title: "Athlete Data Handled Carefully",
      body:
        "Biometrics, medical records and minors' data carry real obligations. Consent, retention, residency and access control are designed in from the first data session, with post-launch support for up to 60 days within the agreed scope.",
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
  title: "Insights On AI, Performance And The Business Of Sport",
  body:
    "Field notes from the platforms we build: what video analysis is genuinely good at, where athlete monitoring earns its keep, and which parts of the sports AI pitch do not survive contact with a season.",
  posts: [
    {
      title: "How AI And Video Analysis Are Reshaping Modern Football",
      tag: "Computer Vision",
      image: blog1Img,
      alt: "A football pitch seen from above during a match",
    },
    {
      title: "What Is Athlete Monitoring? Tools, Systems And Real Gains",
      tag: "Performance",
      image: blog2Img,
      alt: "A coach reading live heart rate and VO2 metrics on a tablet during an athlete test",
    },
    {
      title: "AI Sports Video Analysis: How Computer Vision Improves Performance",
      tag: "Analytics",
      image: blog3Img,
      alt: "A screen showing performance data visualisations",
    },
  ],
};

export const faqs = [
  {
    q: "What sports data and AI services do you offer?",
    a: "Performance and motion analytics, injury and workload modelling, computer vision for match and sponsorship video, ticketing and demand forecasting, fan intelligence, and the data integration underneath them. Most engagements start with one focused use case and grow from there.",
  },
  {
    q: "How does AI actually help sports organisations?",
    a: "In three places that pay for themselves: computer vision that turns video into structured, searchable events; predictive models that flag injury risk and demand earlier; and personalisation that lifts fan retention on an audience you already have. Everything else we will tell you is optional.",
  },
  {
    q: "How does motion analysis benefit athletes?",
    a: "It replaces subjective assessment with measurement. Pose estimation quantifies joint angles, asymmetry and technique changes frame by frame, so a coach can see whether a cue actually changed the movement, and medical staff can support return-to-play decisions with objective measures alongside their own judgement.",
  },
  {
    q: "Can you work with our existing GPS, optical tracking and ticketing vendors?",
    a: "Yes, and that is usually most of the job. We build the data integration and reconciliation layer across whatever you already run, so you keep your vendor relationships and stop working from four systems that each hold a partial version of the truth.",
  },
  {
    q: "How do you handle athlete data privacy?",
    a: "Consent, data residency, retention and role-based access are designed around the use case from the first session. We work with your legal, medical and league contacts on the rules that apply to your data, and athletes get visibility over how their own records are used.",
  },
  {
    q: "How much does a sports data and AI project cost?",
    a: "It depends on the data you already hold, the number of sources to connect and how much AI capability is genuinely in scope. A scoped pilot is the fastest route to a real number. Book a free session and we will size it honestly, including the parts we would advise against pursuing.",
  },
  {
    q: "How long does a sports data and AI project take?",
    a: "A focused use case, such as a performance dashboard or a workload model, typically runs eight to twelve weeks. A broader programme spanning performance, operations and fan data runs four to nine months, delivered in stages you can use early.",
  },
  {
    q: "Can you work with the athlete and fan apps we already use?",
    a: "Yes. We connect to the data those apps and devices generate, and feed analytics and model outputs back into the systems your teams already use. Our focus is the data and AI layer behind them, not replacing the apps themselves.",
  },
];

export const finalCta = {
  title: "Start With One Question About Your Season",
  subtitle:
    "Ready to raise performance, tighten operations and turn attention into revenue? Talk to our sports data and AI team.",
  buttonText: "Get your project done!",
  background: finalCtaBgImg,
};
