/**
 * Copy and imagery for the Supply Chain industry page (/industries/supply-chain).
 *
 * Everything the page renders comes from here, so a copy change never touches
 * a component. Section order in the page mirrors this file.
 */

import heroImg from "../assets/industries/supply-chain/hero.webp";
import introImg from "../assets/industries/supply-chain/intro.webp";

import svcErpImg from "../assets/industries/supply-chain/svc-erp.webp";
import svcMrpImg from "../assets/industries/supply-chain/svc-mrp.webp";
import svcAssetImg from "../assets/industries/supply-chain/svc-asset.webp";
import svcOmsImg from "../assets/industries/supply-chain/svc-oms.webp";
import svcWmsImg from "../assets/industries/supply-chain/svc-wms.webp";
import svcDocumentImg from "../assets/industries/supply-chain/svc-document.webp";
import svcRiskImg from "../assets/industries/supply-chain/svc-risk.webp";
import svcLogisticsImg from "../assets/industries/supply-chain/svc-logistics.webp";
import svcProcurementImg from "../assets/industries/supply-chain/svc-procurement.webp";
import svcSupplierImg from "../assets/industries/supply-chain/svc-supplier.webp";
import svcAnalyticsImg from "../assets/industries/supply-chain/svc-analytics.webp";
import svcMobileImg from "../assets/industries/supply-chain/svc-mobile.webp";

import midCtaBgImg from "../assets/industries/supply-chain/midcta-bg.webp";

import solConsultingImg from "../assets/industries/supply-chain/sol-consulting.webp";
import solEndToEndImg from "../assets/industries/supply-chain/sol-endtoend.webp";
import solIntegrationImg from "../assets/industries/supply-chain/sol-integration.webp";
import solControlTowerImg from "../assets/industries/supply-chain/sol-controltower.webp";
import solMobileImg from "../assets/industries/supply-chain/sol-mobile.webp";
import solModerniseImg from "../assets/industries/supply-chain/sol-modernise.webp";

import stkDirectorsImg from "../assets/industries/supply-chain/stk-directors.webp";
import stk3plImg from "../assets/industries/supply-chain/stk-3pl.webp";
import stkDistributorsImg from "../assets/industries/supply-chain/stk-distributors.webp";

import subManufacturingImg from "../assets/industries/supply-chain/sub-manufacturing.webp";
import subInventoryImg from "../assets/industries/supply-chain/sub-inventory.webp";
import subTransportImg from "../assets/industries/supply-chain/sub-transport.webp";
import subWarehousingImg from "../assets/industries/supply-chain/sub-warehousing.webp";
import subMaritimeImg from "../assets/industries/supply-chain/sub-maritime.webp";
import subRetailImg from "../assets/industries/supply-chain/sub-retail.webp";
import subColdChainImg from "../assets/industries/supply-chain/sub-coldchain.webp";
import subEcommerceImg from "../assets/industries/supply-chain/sub-ecommerce.webp";
import subAutomotiveImg from "../assets/industries/supply-chain/sub-automotive.webp";
import subPharmaImg from "../assets/industries/supply-chain/sub-pharma.webp";
import subAirCargoImg from "../assets/industries/supply-chain/sub-aircargo.webp";
import subRailImg from "../assets/industries/supply-chain/sub-rail.webp";

import textureBgImg from "../assets/industries/supply-chain/texture-bg.webp";
import buildVisualImg from "../assets/industries/supply-chain/build-visual.webp";

import blog1Img from "../assets/industries/supply-chain/blog-1.webp";
import blog2Img from "../assets/industries/supply-chain/blog-2.webp";
import blog3Img from "../assets/industries/supply-chain/blog-3.webp";
import finalCtaBgImg from "../assets/industries/supply-chain/final-cta.webp";

export const SUPPLY_CHAIN_SLUG = "supply-chain";

export const hero = {
  eyebrow: "AI for the supply chain industry",
  titleLead: "AI and Data Solutions",
  titleAccent: "for Supply Chain",
  titleTail: "Operations",
  body:
    "We turn the data already sitting in your ERP, WMS, TMS and carrier systems into forecasts, alerts and decisions your teams can act on. Better visibility of stock, orders and shipments, fewer stockouts and lower freight cost, working with the systems your teams already use, not replacing them.",
  ctaText: "Request a free consultation",
  image: heroImg,
  alt: "A planner tracing a live logistics network above a lit warehouse floor",
  reviews: { platform: "Clutch", rating: 5, count: 12 },
};

export const intro = {
  titleLead: "Supply Chain Data & AI",
  titleAccent: "That Delivers Measurable Value",
  paragraphs: [
    "Axiomra is a Data & AI partner for planning, inventory, warehousing and transport teams. Poor visibility, weak forecasts, stockouts, high freight costs and manual work usually share one cause: data split across systems nobody can see together. We connect those sources, add real-time alerts, apply predictive models and automate routine decisions.",
    "Typical use cases include demand forecasting, replenishment, slotting, routing, control-tower analytics and document intelligence, for inventory, manufacturing, transport and logistics teams, and for leaders across logistics providers, distributors and wholesalers. Our approach is model-agnostic and practical: time-series ML, optimisation, computer vision and LLMs, each selected for the use case and validated against your data.",
  ],
  ctaText: "Book a Free Data & AI Consultation",
  image: introImg,
  alt: "An operations lead reviewing live inventory levels on a tablet",
};

export const impact = {
  titleLead: "The Role Of AI In",
  titleAccent: "Modern Supply Chain Operations",
  body:
    "AI is changing how companies plan, source, move and deliver. By turning operational data into real-time intelligence and automating routine decisions, it supports smarter planning, faster operations and stronger resilience across global networks.",
  stats: [
    {
      value: "15%",
      label: "reduction in logistics costs among early adopters of AI-enabled supply chain management.",
      source: "McKinsey, AI supply-chain revolution report",
    },
    {
      value: "35%",
      label: "improvement in inventory levels for organisations applying AI to planning and replenishment.",
      source: "McKinsey, AI supply-chain revolution report",
    },
    {
      value: "$58.5B",
      label: "projected AI in supply chain market size by 2031, growing at 40.4% CAGR from 2024.",
      source: "Meticulous Research, AI in Supply Chain Market, 2024",
    },
  ],
};

/**
 * The challenge rail. Each entry is a barrier supply chain teams hit, and the
 * data and AI capability we apply to remove it.
 */
export const challenges = {
  eyebrow: "Overcoming key barriers in supply chain",
  titleLead: "Supply Chain Challenges We Solve",
  titleAccent: "With Data & AI",
  items: [
    {
      title: "Lack of end-to-end visibility",
      body:
        "Teams cannot see live orders, inventory and shipments across sites and partners, so problems surface late and costs rise. The data sits in many systems with manual updates and mismatched IDs. We unify those data streams, predict ETAs and flag exceptions early, giving you one trusted view, faster fixes, higher on-time delivery and less buffer stock.",
    },
    {
      title: "Demand forecasting inaccuracy",
      body:
        "Spreadsheet forecasts miss seasonality, promotions and sudden demand shifts, so you carry the wrong stock in the wrong place. We build time-series and causal models that read orders, pricing, weather and campaign calendars together, then feed the results into your replenishment process. Planners stop rebuilding the forecast every week and start managing exceptions.",
    },
    {
      title: "Supplier disruptions and single-source risk",
      body:
        "One late supplier can stop a line, and most teams learn about it after the fact. We score supplier risk from delivery history, news signals, lead-time variance and quality records, then surface alternate sources and re-plan options before the shortage lands. Buyers get early warning instead of a firefight.",
    },
    {
      title: "Inventory stockouts and overstock",
      body:
        "Service targets and working-capital targets pull in opposite directions when safety stock is set by a flat rule. We apply multi-echelon optimisation so each node carries the cover its demand variability actually justifies. Fill rates hold while cash tied up in slow movers comes down.",
    },
    {
      title: "Component and raw material shortages",
      body:
        "Exploded BOMs, netting errors and unposted receipts turn material planning into guesswork, and expedite freight quietly eats margin. We add predictive shortage detection on top of your MRP data, using live lead times and MOQ rules to flag shortages far enough ahead to fix them cheaply.",
    },
    {
      title: "Inefficient warehouse operations",
      body:
        "Slow picks, high labour cost and accuracy issues usually start with layout, slotting and task sequencing. We analyse WMS and labour data to recommend slotting, forecast workload across shifts and give supervisors live visibility into work and exceptions.",
    },
    {
      title: "High returns and reverse logistics complexity",
      body:
        "Returns arrive unplanned, grading is manual and resale value falls the longer a unit sits. We forecast return volumes, use computer vision for condition grading and recommend the disposition that recovers the most value. Cycle time drops and recovery rate rises.",
    },
  ],
};

export const services = {
  eyebrow: "What solution do we offer?",
  titleLead: "Supply Chain Data & AI",
  titleAccent: "Solutions We Offer",
  body:
    "We add forecasting, optimisation, analytics and automation on top of the ERP, WMS, TMS and OMS platforms you already run, built around your data, processes and governance.",
  items: [
    {
      title: "ERP Data & Predictive Analytics",
      body:
        "Orders, inventory, finance and operations data often sit in ERP modules that do not talk to each other, which slows reporting. We connect that data into one shared model with real-time views, so everyone sees the same numbers. On top we apply machine learning, predictive analytics, and NLP, OCR or computer vision where they add value.",
      image: svcErpImg,
      alt: "An ERP dashboard projected above a laptop on a desk",
    },
    {
      title: "AI-Assisted Material Planning (MRP)",
      body:
        "We add AI to material planning so shortages, overbuys and last-minute expedites stop disrupting plans. Models read BOMs, on-hand and open orders, live lead times and MOQ rules from your MRP data to predict shortages and recommend time-phased buys. You gain higher schedule adherence, better inventory turns, fewer line stops and lower premium freight.",
      image: svcMrpImg,
      alt: "A global planning network rendered over a world map",
    },
    {
      title: "Asset Tracking Analytics",
      body:
        "We turn signals from RFID, BLE, GPS and computer vision into a near real-time view of where tools, pallets, containers and equipment are, and how they are used. Analytics flag idle and at-risk assets before loss slows throughput. Results include higher asset utilisation, lower loss rate, faster maintenance response and improved OEE.",
      image: svcAssetImg,
      alt: "An analyst reviewing asset utilisation charts on a laptop",
    },
    {
      title: "Order Intelligence (OMS)",
      body:
        "Multi-channel orders bring errors, missed promises and manual re-keying. We add AI to your order management system to validate orders, predict realistic ship dates and recommend the best fulfilment node. It uses ETA prediction, allocation optimisation and transformer-based NLP for order validation.",
      image: svcOmsImg,
      alt: "Stacked cartons beside a rising order-volume chart",
    },
    {
      title: "Warehouse Analytics (WMS)",
      body:
        "Slow picks, high labour cost and accuracy issues are best fixed at the source. We use your WMS data to optimise slotting for fast movers, forecast labour by shift and surface exceptions to supervisors as they happen. You see more picks per hour, lower cost per order, fewer mis-picks and shorter dock-to-stock times.",
      image: svcWmsImg,
      alt: "A supervisor reviewing warehouse analytics on a tablet",
    },
    {
      title: "Document Intelligence",
      body:
        "Axiomra applies AI to POs, invoices, BOLs, specs and quality records to remove manual keying and audit stress. Models extract key fields from files and images, validate them against master data and route exceptions for review. Benefits are faster cycle time, fewer errors and chargebacks, and quicker audit preparation.",
      image: svcDocumentImg,
      alt: "Digital documents flowing through an automated approval workflow",
    },
    {
      title: "Supply Chain Risk Analytics",
      body:
        "We spot supplier issues, weather events, strikes and route delays early so teams can act before service drops. Internal metrics such as lead times and quality are combined with external signals such as news and geographic risk to score and alert on disruption, using NLP for news, predictive analytics for early warning and machine learning scoring models.",
      image: svcRiskImg,
      alt: "A risk map highlighting disrupted lanes across a live network",
    },
    {
      title: "Logistics Optimisation",
      body:
        "We help cut freight cost and missed windows by adding optimisation to how shipments are planned, tendered and routed. Models recommend load consolidation, mode and carrier choice and routes, and predict ETAs from live signals, all fed back into the TMS your team already uses.",
      image: svcLogisticsImg,
      alt: "A logistics controller checking inventory movement on a tablet",
    },
    {
      title: "Procurement Analytics",
      body:
        "Axiomra applies AI to source-to-pay data to cut long cycle times, price variance and maverick spend. We normalise items and suppliers with transformer-based NLP, rank suppliers with machine learning, detect price anomalies and flag three-way-match exceptions with clear evidence.",
      image: svcProcurementImg,
      alt: "A buyer reviewing procurement analytics on a laptop",
    },
    {
      title: "Supplier Performance Analytics",
      body:
        "We help improve supplier performance so late POs, defects and communication gaps reduce over time. Scorecards track delivery and quality trends, predictive analytics flag issues early and NLP reads sentiment in notes, giving structured reviews clear actions and owners.",
      image: svcSupplierImg,
      alt: "A supplier collaboration network shown as connected hex tiles",
    },
    {
      title: "Supply Chain Analytics",
      body:
        "Axiomra turns raw data into clear insights and what-if scenarios to end blind spots and slow decisions. We harmonise data, surface the drivers behind performance and let users test scenarios against targets and constraints, using forecasting, causal and optimisation models and an NLP assistant for questions in plain language.",
      image: svcAnalyticsImg,
      alt: "Interlocking gears representing an analytics pipeline",
    },
    {
      title: "Frontline Data Capture & Vision AI",
      body:
        "Scans, photos and task updates from warehouse, logistics and field teams are valuable data that often arrives late or on paper. We apply OCR and computer vision to capture it accurately at the source and feed it into your core systems and analytics, so exceptions surface in minutes rather than at end of day.",
      image: svcMobileImg,
      alt: "A field team reviewing a 3D logistics map on a handheld device",
    },
  ],
};

export const midCta = {
  title: "Turn Supply Chain Data Into Faster, Better Decisions",
  body:
    "Identify practical AI opportunities across demand planning, inventory, logistics and fulfilment. Axiomra helps teams assess data readiness, connect operational sources and prioritise use cases that can improve forecast accuracy, visibility and decision speed. Start with measurable quick wins, then scale only where the data and results support it.",
  ctaText: "Discuss Your Supply Chain AI Priorities",
  background: midCtaBgImg,
};

export const solutions = {
  eyebrow: "What types of services do we offer?",
  titleLead: "Supply Chain Data & AI",
  titleAccent: "Services For Enterprises",
  body:
    "We deliver data and AI across the end-to-end supply chain, working on top of your ERP, WMS, TMS, PLM, YMS and carrier platforms rather than replacing them. Planning, sourcing, manufacturing, logistics and service all benefit, whether your data runs on-premise, in a private cloud or in a hybrid environment.",
  items: [
    {
      title: "Supply chain AI consulting",
      body:
        "We start with stakeholder workshops, data and master data reviews, and a quick maturity scan across planning, logistics, warehousing and procurement. The outcome is a clear roadmap with high-value use cases, governance and an ROI model. This tackles S&OP misalignment, rigid networks and fragmented data that slow decisions.",
      image: solConsultingImg,
      alt: "A consultant mapping a global supply network in a workshop",
    },
    {
      title: "End-to-end supply chain AI use cases",
      body:
        "We deliver models for demand sensing, inventory and replenishment, order allocation, yard and dock scheduling, transport intelligence and last-mile optimisation. Each is validated against your constraints and policies before it goes live, on-premise, private cloud or hybrid. This reduces late orders, mis-picks and capacity bottlenecks.",
      image: solEndToEndImg,
      alt: "A control room view of an automated distribution centre",
    },
    {
      title: "AI integration into existing SCM systems",
      body:
        "Axiomra adds AI on top of your ERP, WMS, TMS, YMS, PLM and carrier platforms through APIs and EDI, backed by strong master data management and data quality. Tender acceptance prediction, mode and carrier mix optimisation, predictive ETA and dynamic allocation arrive inside the tools your teams already use, replacing email and spreadsheet work.",
      image: solIntegrationImg,
      alt: "An integration layer connecting enterprise supply systems",
    },
    {
      title: "Supply chain control tower analytics",
      body:
        "We bring data from suppliers, plants, carriers and customers into a single operating picture, with exception queues instead of static reports. Live ETAs, inventory positions and risk scores sit next to the action each owner can take, so escalations are resolved quickly. Leaders get one number everyone trusts at the daily stand-up.",
      image: solControlTowerImg,
      alt: "A control tower dashboard tracking shipments in real time",
    },
    {
      title: "Frontline data and computer vision",
      body:
        "Warehouse, yard and field teams generate data on handhelds, not desktops. We apply computer vision and OCR to scans, photos and proof-of-delivery images so errors are caught at the source and events reach your core systems and analytics immediately rather than at end of day.",
      image: solMobileImg,
      alt: "A driver capturing proof of delivery on a rugged handheld",
    },
    {
      title: "Data modernisation for legacy SCM",
      body:
        "Ageing planning and warehouse systems often hold years of useful history in hard-to-reach formats. We migrate and reconcile that data into a modern, governed data layer in slices, so operations keep running while analytics and AI get the clean data they need.",
      image: solModerniseImg,
      alt: "A team moving legacy logistics data to the cloud",
    },
  ],
};

export const stakeholders = {
  eyebrow: "Who do we deliver Data & AI for?",
  titleLead: "Stakeholders We Serve",
  titleAccent: "Across Supply Chains",
  items: [
    {
      title: "Supply Chain Directors & Managers",
      body:
        "One operating picture across planning, inventory and logistics, with the exception queues and scenario analysis needed to hit service targets without carrying dead working capital.",
      image: stkDirectorsImg,
      alt: "A supply chain manager reviewing operations on a tablet",
    },
    {
      title: "Logistics Providers & 3PLs",
      body:
        "Multi-client analytics, carrier and mode optimisation, predictive ETAs and billing-grade event data, so margin holds as volumes and service commitments grow.",
      image: stk3plImg,
      alt: "A logistics supervisor coordinating a yard by phone",
    },
    {
      title: "Distributors & Wholesalers",
      body:
        "Demand sensing, multi-echelon replenishment and order promising models built for wide catalogues and thin margins, so fill rates rise while slow-moving stock comes down.",
      image: stkDistributorsImg,
      alt: "A distribution team confirming a delivery handover",
    },
  ],
};

export const subIndustries = {
  eyebrow: "Which supply chain sectors do we serve?",
  titleLead: "Sub-Industries We Support",
  titleAccent: "Across Supply Chains",
  body:
    "Every sector carries its own constraints: shelf life, dangerous goods, serialisation, seasonality. We model those constraints directly rather than working around them.",
  items: [
    {
      label: "Manufacturing",
      body:
        "Production plans that hold when materials slip, driven by live BOM netting and capacity data rather than a weekly spreadsheet.",
      points: ["Shortage prediction", "Line-stop early warning", "OEE and quality analytics"],
      image: subManufacturingImg,
      alt: "A robotic arm working a lit production line",
    },
    {
      label: "Inventory Management",
      body:
        "Multi-echelon policies that set cover by actual demand variability, so service targets and working capital stop fighting each other.",
      points: ["Safety-stock optimisation", "Replenishment recommendations", "Slow and excess recovery"],
      image: subInventoryImg,
      alt: "Warehouse staff checking stock levels on a tablet",
    },
    {
      label: "Transportation",
      body:
        "Load building, carrier selection and route optimisation with predictive ETAs, so freight spend falls without missing delivery windows.",
      points: ["Mode and carrier mix", "Predictive ETA", "Track and trace analytics"],
      image: subTransportImg,
      alt: "A freight fleet moving through a distribution hub at dusk",
    },
    {
      label: "Warehousing",
      body:
        "Slotting, task interleaving and labour forecasting that raise picks per hour without adding headcount or new racking.",
      points: ["Dynamic slotting", "Pick-path optimisation", "Labour forecasting"],
      image: subWarehousingImg,
      alt: "High racking inside a modern distribution centre",
    },
    {
      label: "Maritime & Ports",
      body:
        "Container visibility, berth and yard planning, and demurrage exposure tracked before the charges land rather than after.",
      points: ["Container milestone tracking", "Demurrage and detention alerts", "Port congestion forecasting"],
      image: subMaritimeImg,
      alt: "Container cranes working a port terminal at dawn",
    },
    {
      label: "Retail Supply Chain",
      body:
        "Store-level forecasting, allocation and replenishment that respect promotions, planograms and regional demand differences.",
      points: ["Store-level demand sensing", "Promotion uplift modelling", "Markdown optimisation"],
      image: subRetailImg,
      alt: "A retail team checking backroom stock against a device",
    },
    {
      label: "Cold Chain",
      body:
        "Temperature-controlled lanes with excursion detection, shelf-life aware routing and a clear, reviewable audit trail.",
      points: ["IoT excursion alerts", "Shelf-life aware allocation", "Temperature reporting"],
      image: subColdChainImg,
      alt: "A temperature-controlled cold storage facility",
    },
    {
      label: "E-commerce Fulfilment",
      body:
        "Allocation across nodes and channels, with promise dates customers can trust and returns treated as a first-class flow.",
      points: ["Node allocation optimisation", "Ship-from-store analytics", "AI returns grading"],
      image: subEcommerceImg,
      alt: "A fulfilment operator packing e-commerce orders",
    },
    {
      label: "Automotive",
      body:
        "Tier-n visibility and shortage simulation for sequenced assembly supply, so a single component does not stop production.",
      points: ["Tier-n supplier visibility", "JIT delivery risk alerts", "Shortage scenario planning"],
      image: subAutomotiveImg,
      alt: "An automotive assembly line in operation",
    },
    {
      label: "Pharmaceutical",
      body:
        "Serialisation data, lot genealogy and chain-of-custody analytics that make recall traceability a matter of minutes rather than days.",
      points: ["Serialisation analytics", "Lot genealogy", "Traceable audit trail"],
      image: subPharmaImg,
      alt: "A pharmaceutical packaging and inspection line",
    },
    {
      label: "Air Cargo",
      body:
        "Capacity forecasting, ULD planning and AI-assisted customs documents so tight connection windows are actually met.",
      points: ["Capacity and ULD planning", "Customs document AI", "Connection risk alerts"],
      image: subAirCargoImg,
      alt: "Air cargo being loaded onto a freighter aircraft",
    },
    {
      label: "Rail Freight",
      body:
        "Wagon utilisation, intermodal handovers and yard dwell tracked end to end, so rail legs stop being the blind spot in the lane.",
      points: ["Wagon and asset utilisation", "Intermodal handover tracking", "Yard dwell analytics"],
      image: subRailImg,
      alt: "A freight train moving containers along a rail corridor",
    },
  ],
};

export const benefits = {
  eyebrow: "What can you optimise with our AI-powered solutions?",
  titleLead: "Practical AI Benefits Your",
  titleAccent: "Supply Chain Teams Will See Fast",
  items: [
    {
      title: "Forecast Accuracy",
      body:
        "AI reads orders, seasonality and simple signals to improve forecasts, so plans are closer to reality and teams buy and make the right amount.",
    },
    {
      title: "Reduce Stockouts",
      body:
        "Smarter planning and timely reorders keep key items available, which cuts lost sales and keeps customers satisfied.",
    },
    {
      title: "Lower Transport Costs",
      body:
        "Carrier and route choices get smarter with predicted delays and capacity, so loads are accepted more often, delays fall and costs drop.",
    },
    {
      title: "Faster Warehousing",
      body:
        "Better storage and picking guidance moves staff to the next best task, raising picks per hour and lowering cost per order.",
    },
    {
      title: "Better Service Levels",
      body:
        "Orders are promised with realistic dates and sent from the best location, which lifts on-time delivery and shortens the overall cycle.",
    },
    {
      title: "Inventory Cost Reduction",
      body:
        "Multi-echelon policies set service targets and right-size buffers. Companies lift inventory turns and lower carrying cost while protecting fill rate.",
    },
  ],
};

export const build = {
  title: "Schedule Your Supply Chain AI Strategy Consultation With Axiomra",
  body:
    "Map priority use cases, ROI and a secure delivery plan aligned to your systems and policies. Move from discovery to a validated pilot with clear governance and adoption steps.",
  ctaText: "Request a Consultation",
  texture: textureBgImg,
  image: buildVisualImg,
  alt: "A planning team reviewing a supply chain roadmap together",
};

export const techStrip = {
  eyebrow: "Technologies we work with",
  titleLead: "Expertise In Advanced",
  titleAccent: "Data & AI Technologies",
  body:
    "The same production-grade toolchain sits under every supply chain AI use case we deliver. Pick a layer to see what it is made of.",
  ctaText: "View all tech stack",
  tabs: [
    {
      id: "ai",
      label: "Artificial Intelligence",
      items: [
        "GPT-4o", "Claude", "Gemini", "Llama 3", "Mistral", "PyTorch", "TensorFlow", "scikit-learn",
        "Prophet", "XGBoost", "LightGBM", "OR-Tools", "Gurobi", "YOLO", "Tesseract OCR",
        "LangChain", "Vertex AI", "OpenAI Embeddings", "Guardrails", "MLflow",
      ],
    },
    {
      id: "backend",
      label: "Data & Databases",
      items: [
        "FastAPI", "GraphQL", "PostgreSQL", "MongoDB", "TimescaleDB", "Redis", "Elasticsearch", "Kafka",
        "RabbitMQ", "Airflow", "dbt", "Snowflake", "Databricks", "Node.js", "NestJS", "Django",
      ],
    },
    {
      id: "frontend",
      label: "Visualisation & UI",
      items: [
        "React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "D3.js", "Deck.gl", "Mapbox GL",
        "AG Grid", "Vite",
      ],
    },
    {
      id: "cloud",
      label: "Cloud",
      items: ["AWS", "Google Cloud", "Azure", "Snowflake", "Cloudflare", "On-premise", "Private cloud", "Hybrid"],
    },
    {
      id: "devops",
      label: "MLOps & DevOps",
      items: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "GitLab CI", "Nginx", "Prometheus", "Grafana", "Sentry"],
    },
    {
      id: "scm",
      label: "SCM Platforms",
      items: ["SAP", "Oracle SCM", "Dynamics 365", "Manhattan", "Blue Yonder", "Kinaxis", "EDI X12", "EDIFACT", "GS1", "Shopify"],
    },
    {
      id: "iot",
      label: "IoT & Edge",
      items: ["MQTT", "RFID", "BLE Beacons", "GPS Telematics", "AWS IoT Core", "Edge OCR", "Industrial PLC", "OPC UA"],
    },
  ],
};

export const businessTypes = {
  eyebrow: "Who do we work with?",
  titleLead: "Explore The Range Of",
  titleAccent: "Supply Chain Businesses We Support",
  body:
    "We deliver supply chain data and AI that drives measurable results. Whether you are analysing a single warehouse or a multi-country network, we start with the data you already have and the decisions it should improve.",
  rows: [
    {
      label: "Startups",
      body: "We help logistics and supply chain startups get value from data early: a clean data foundation, a first forecasting or optimisation use case that wins a pilot customer, and the metrics that prove the model before the next raise.",
    },
    {
      label: "Scale-ups",
      body: "Volume exposes every manual step. We help scale-ups unify reporting across sites, automate routine planning decisions and replace spreadsheet workarounds with analytics that hold at ten times the throughput.",
    },
    {
      label: "Small and medium-sized businesses",
      body: "SMB operations teams carry enterprise complexity with a fraction of the headcount. Our forecasting, replenishment and warehouse analytics close that gap without an enterprise budget or a year-long rollout.",
    },
    {
      label: "Enterprises",
      body: "We partner with enterprise supply chain organisations on governed data layers, multi-site analytics and AI use cases that pass your security, risk and procurement reviews before they reach production.",
    },
  ],
};

export const testimonials = {
  eyebrow: "Why is it worth working with us?",
  titleLead: "What Operators Say",
  titleAccent: "About Working With Us",
  items: [
    {
      name: "Faisal",
      role: "CEO, FormOle",
      quote:
        "Axiomra has strong software development skills and knowledge of industry tools and AI videos. Their willingness to take any problem, break it down and get through it is impressive.",
      rating: 5,
    },
    {
      name: "Alan",
      role: "Chairman & CEO, Peersana",
      quote:
        "I am most impressed with Axiomra's deep team, discipline, culture, project management skills and extensive pool of resources.",
      rating: 5,
    },
    {
      name: "Pablo Sanchez",
      role: "CEO, Notebook",
      quote:
        "Excellent service. The team planned the project really well, keeping me in the loop. Throughout the project they maintained a fluid and professional conversation.",
      rating: 5,
    },
  ],
};

export const showcase = {
  eyebrow: "What innovations have we delivered to businesses?",
  titleLead: "Showcasing Our",
  titleAccent: "Data & AI Projects",
  body:
    "Data and AI work we have delivered for planners, warehouses and carriers, and what it changed.",
  ctaText: "Check Out Our Full Portfolio",
};

export const partner = {
  eyebrow: "Why is it worth working with us?",
  titleLead: "Why Axiomra For",
  titleAccent: "Supply Chain Data & AI",
  cards: [
    {
      icon: "Target",
      title: "Built Around Your Data, No Lock-In",
      body:
        "We fit AI to your process, your data and the tools you already use, and it runs where you choose, so you keep control and flexibility. No licence trap, no forced migration when priorities change.",
    },
    {
      icon: "Layers",
      title: "Integration Without Rework",
      body:
        "ERP, WMS, TMS, PLM and MDM data connect through APIs and EDI, giving 3PL visibility and faster partner onboarding while removing manual work and shadow spreadsheets.",
    },
    {
      icon: "ShieldCheck",
      title: "60-Day Support And Enablement",
      body:
        "Our team stays engaged for 60 days to monitor model performance, resolve issues and apply small improvements. We train planners, warehouse staff and leaders with role-based sessions so adoption accelerates as users learn to act on AI insights.",
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
  title: "Blog Insights On AI And Supply Chain Innovation",
  body:
    "Explore practical guidance on AI solutions for supply chain management, from scenario planning and what-if analysis to last-mile delivery optimisation and emissions tracking. Learn how leaders fund, govern and scale initiatives that move the P&L.",
  posts: [
    {
      title: "10 Proven AI In Retail Use Cases That Boosted Sales In 2026",
      tag: "Retail",
      image: blog1Img,
      alt: "A retail analytics dashboard glowing on a store floor",
    },
    {
      title: "15 Best Logistics Software Development Companies In 2026",
      tag: "Logistics",
      image: blog2Img,
      alt: "A logistics network visualised across a digital map",
    },
    {
      title: "AI In Logistics And Supply Chain: Use Cases And Implementation",
      tag: "Supply Chain",
      image: blog3Img,
      alt: "Freight containers overlaid with live tracking data",
    },
  ],
};

export const faqs = [
  {
    q: "What Data & AI services do you offer for supply chains?",
    a: "Strategy and AI consulting, data engineering across your ERP, MRP, WMS, TMS and OMS data, forecasting and optimisation models, AI added into the systems you already run, computer vision for frontline data, and the analytics layer on top. We also modernise legacy data so older systems can feed analytics while they keep running.",
  },
  {
    q: "How do you measure ROI for a new AI use case?",
    a: "We agree the baseline before we start: fill rate, forecast error, cost per order, premium freight spend, dock-to-stock time. Each use case is scoped against one of those numbers, measured after go-live against the same definition, and dropped if it does not move.",
  },
  {
    q: "Can AI help with driver and labour shortages?",
    a: "It does not create capacity, but it uses what you have far better. Labour forecasting matches shifts to real workload, task interleaving cuts unproductive travel, and route and load optimisation reduces the driver hours a given volume needs. Most clients see the gap close through productivity rather than hiring.",
  },
  {
    q: "How do you address component and raw material shortages?",
    a: "Predictive shortage detection on live MRP data and lead times surfaces shortages weeks earlier than a batch run. We add supplier risk scoring and alternate-source suggestions so buyers can act while the cheap options are still open, instead of paying for expedited freight.",
  },
  {
    q: "How do you fix inventory discrepancies between system records and physical counts?",
    a: "By finding the process step that creates them. We analyse receiving, putaway and picking data, target cycle counts by discrepancy risk rather than a flat schedule, and use computer vision or scan validation at the points where errors actually occur.",
  },
  {
    q: "Can you modernise legacy supply chain data without a big switch?",
    a: "Yes, and we recommend it. Data moves across in slices into a governed data layer, reconciled as we go. Operations keep running throughout, and you can stop or re-sequence between slices without stranding the investment.",
  },
  {
    q: "Do you replace our WMS, TMS or OMS?",
    a: "No. We add forecasting, optimisation and analytics on top of the WMS, TMS and OMS you already run, for single sites and multi-client 3PL networks alike. Where a packaged product already does a job well, we work with it rather than around it.",
  },
  {
    q: "How long does a typical pilot take from kick-off?",
    a: "A scoped pilot with one use case, such as demand forecasting or warehouse labour forecasting, typically runs eight to twelve weeks to live results. A wider programme spanning planning, warehousing and transport runs four to nine months, delivered in increments your teams can use early.",
  },
  {
    q: "Can you integrate with our current ERP, WMS and TMS without disrupting operations?",
    a: "Yes. Integrations run through APIs and EDI against a hardened master data layer, are validated in a parallel environment, and go live one flow at a time. Nothing goes live until it reconciles against the system of record.",
  },
  {
    q: "How do you reduce risk on a complex multi-site programme?",
    a: "One site becomes the reference implementation and proves the model end to end. Later sites inherit a tested template with only local variations configured, so risk and cost fall with each rollout instead of repeating from zero.",
  },
  {
    q: "Do you sell a packaged product or licence?",
    a: "No. We are a Data & AI partner. You own the models and the data, deployment runs where your policies require (on-premise, private cloud or hybrid), and there is no licence dependency.",
  },
  {
    q: "Why partner with Axiomra for supply chain Data & AI?",
    a: "Because we work for operators, not demos. Our teams work inside your constraints (master data quality, union rules, customs, cold chain, GxP) and stay engaged for 60 days after delivery to tune performance and train the people who use it every day.",
  },
];

export const finalCta = {
  title: "Schedule Your Supply Chain AI Consultation Today",
  subtitle:
    "Share your goals, pain points and current systems, and we will map quick wins and a realistic roadmap. Get a clear estimate, timeline and delivery plan that fits your security and governance requirements.",
  buttonText: "Contact our team",
  background: finalCtaBgImg,
};
