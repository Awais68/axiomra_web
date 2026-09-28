import logoLight from "../../assets/logo-light.webp";

/**
 * The Axiomra wordmark as an overlay on project imagery. Every card and case
 * study photo uses this one placement so the mark sits in the same corner, at
 * the same size, clear space and opacity everywhere: bottom-right, inset 4%,
 * ~10% of the frame's width, floored so it stays legible on phones.
 *
 * The parent must be `relative` (and usually `overflow-hidden`).
 */
export default function BrandMark() {
  return (
    <img
      src={logoLight}
      alt=""
      aria-hidden="true"
      width={500}
      height={91}
      loading="lazy"
      decoding="async"
      className="pointer-events-none absolute bottom-[4%] right-[4%] h-auto w-[10%] min-w-[4.5rem] select-none opacity-80 drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]"
    />
  );
}
