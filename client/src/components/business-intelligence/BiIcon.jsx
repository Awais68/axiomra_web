/**
 * Icons named in businessIntelligenceData, imported one by one so the bundle
 * only carries the Tabler icons this page actually renders.
 */
import { createElement } from "react";
import {
  TbArrowsExchange,
  TbBuilding,
  TbChartBar,
  TbCircle,
  TbCompass,
  TbDatabase,
  TbFileSearch,
  TbFilterCog,
  TbLayersIntersect,
  TbLayoutDashboard,
  TbLifebuoy,
  TbPointer,
  TbRocket,
  TbSchool,
  TbShieldCheck,
  TbStack3,
  TbTrendingUp,
  TbWorld,
} from "react-icons/tb";

const ICONS = {
  TbArrowsExchange,
  TbChartBar,
  TbBuilding,
  TbCompass,
  TbDatabase,
  TbFileSearch,
  TbWorld,
  TbSchool,
  TbLayersIntersect,
  TbStack3,
  TbLayoutDashboard,
  TbLifebuoy,
  TbPointer,
  TbRocket,
  TbShieldCheck,
  TbFilterCog,
  TbTrendingUp,
};

/** <BiIcon name="Database" size={20} />: a data-driven icon by name. */
export default function BiIcon({ name, ...props }) {
  return createElement(ICONS[name] ?? TbCircle, props);
}
