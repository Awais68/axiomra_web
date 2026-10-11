import { sectionNav } from "../../data/botAutomationData";

/** Glass jump-bar that spans the hero's stepped edge; scrolls sideways on phones. */
export default function BotSectionNav() {
  return (
    <nav aria-label="On this page" className="relative z-20 -mt-10 px-4 sm:px-6 md:-mt-14 lg:px-8">
      <ul className="ba-glass mx-auto flex max-w-6xl snap-x gap-1 overflow-x-auto rounded-2xl p-2 [scrollbar-width:none] md:justify-between">
        {sectionNav.map((item) => (
          <li key={item.href} className="shrink-0 snap-start">
            <a
              href={item.href}
              className="block whitespace-nowrap rounded-xl px-4 py-3 text-sm font-semibold text-content transition-colors hover:bg-inverse hover:text-inverse-fg focus-ring md:px-5 md:text-base"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
