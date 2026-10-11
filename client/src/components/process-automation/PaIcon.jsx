/**
 * Icons named in processAutomationData, imported one by one so the bundle
 * only carries these (a namespace import would pull in all of lucide).
 */
import { createElement } from "react";
import {
  Bot,
  BrainCircuit,
  Circle,
  Code2,
  Cog,
  Compass,
  Globe2,
  Home,
  MessagesSquare,
  Rocket,
  ShieldCheck,
  Target,
  Workflow,
} from "lucide-react";

const ICONS = {
  bot: Bot,
  brain: BrainCircuit,
  chat: MessagesSquare,
  code: Code2,
  cog: Cog,
  compass: Compass,
  globe: Globe2,
  home: Home,
  rocket: Rocket,
  shield: ShieldCheck,
  target: Target,
  workflow: Workflow,
};

/** <PaIcon name="bot" size={20} />: a data-driven icon by name. */
export default function PaIcon({ name, ...props }) {
  return createElement(ICONS[name] ?? Circle, props);
}
