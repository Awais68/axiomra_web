/**
 * Icons named in enterpriseAiData, imported one by one so the bundle only
 * carries these (a namespace import would pull in all of lucide).
 */
import { createElement } from "react";
import {
  Activity,
  AudioLines,
  Bot,
  Circle,
  Cloud,
  Compass,
  Cpu,
  Database,
  LifeBuoy,
  RefreshCw,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Workflow,
} from "lucide-react";

const ICONS = {
  Activity,
  AudioLines,
  Bot,
  Cloud,
  Compass,
  Cpu,
  Database,
  LifeBuoy,
  RefreshCw,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Workflow,
};

/** <EntIcon name="Cpu" size={20} />: a data-driven icon by name. */
export default function EntIcon({ name, ...props }) {
  return createElement(ICONS[name] ?? Circle, props);
}
