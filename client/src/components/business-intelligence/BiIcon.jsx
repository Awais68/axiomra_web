/**
 * Icons named in businessIntelligenceData, imported one by one so the bundle
 * only carries these (a namespace import would pull in all of lucide).
 */
import { createElement } from "react";
import {
  ArrowRightLeft,
  BarChart3,
  Building2,
  Circle,
  Compass,
  Database,
  FileScan,
  Globe,
  GraduationCap,
  Layers,
  Layers3,
  LayoutDashboard,
  LifeBuoy,
  MousePointerClick,
  Rocket,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const ICONS = {
  ArrowRightLeft,
  BarChart3,
  Building2,
  Compass,
  Database,
  FileScan,
  Globe,
  GraduationCap,
  Layers,
  Layers3,
  LayoutDashboard,
  LifeBuoy,
  MousePointerClick,
  Rocket,
  ShieldCheck,
  Sparkles,
  TrendingUp,
};

/** <BiIcon name="Database" size={20} />: a data-driven icon by name. */
export default function BiIcon({ name, ...props }) {
  return createElement(ICONS[name] ?? Circle, props);
}
