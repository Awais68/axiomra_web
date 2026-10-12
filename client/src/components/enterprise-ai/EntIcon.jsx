/**
 * Icons named in enterpriseAiData, imported one by one so the bundle only
 * carries the Tabler icons this page actually renders.
 */
import { createElement } from "react";
import {
  TbActivityHeartbeat,
  TbCircle,
  TbCloud,
  TbCompass,
  TbCpu,
  TbDatabase,
  TbFileTextAi,
  TbLifebuoy,
  TbRefresh,
  TbRocket,
  TbRoute,
  TbSettingsAutomation,
  TbShieldLock,
  TbTargetArrow,
  TbTrendingUp,
  TbWaveSine,
} from "react-icons/tb";

const ICONS = {
  TbActivityHeartbeat,
  TbWaveSine,
  TbSettingsAutomation,
  TbCloud,
  TbCompass,
  TbCpu,
  TbDatabase,
  TbLifebuoy,
  TbRefresh,
  TbRocket,
  TbShieldLock,
  TbFileTextAi,
  TbTargetArrow,
  TbTrendingUp,
  TbRoute,
};

/** <EntIcon name="Cpu" size={20} />: a data-driven icon by name. */
export default function EntIcon({ name, ...props }) {
  return createElement(ICONS[name] ?? TbCircle, props);
}
