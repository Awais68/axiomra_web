/**
 * Icons named in processAutomationData, imported one by one so the bundle
 * only carries the Tabler icons this page actually renders.
 */
import { createElement } from "react";
import {
  TbBrain,
  TbCircle,
  TbCode,
  TbCompass,
  TbHome,
  TbMessages,
  TbRocket,
  TbRoute,
  TbSettingsAutomation,
  TbSettingsCog,
  TbShieldLock,
  TbTarget,
  TbWorld,
} from "react-icons/tb";

const ICONS = {
  bot: TbSettingsAutomation,
  brain: TbBrain,
  chat: TbMessages,
  code: TbCode,
  cog: TbSettingsCog,
  compass: TbCompass,
  globe: TbWorld,
  home: TbHome,
  rocket: TbRocket,
  shield: TbShieldLock,
  target: TbTarget,
  workflow: TbRoute,
};

/** <PaIcon name="bot" size={20} />: a data-driven icon by name. */
export default function PaIcon({ name, ...props }) {
  return createElement(ICONS[name] ?? TbCircle, props);
}
