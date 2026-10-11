import { motion, useReducedMotion } from "framer-motion";

/**
 * Clip-path wipe that opens the first time a block scrolls into view.
 *
 * The observer sits on an unclipped wrapper and the clip-path lives on the
 * child. Chromium's IntersectionObserver measures a target through its own
 * clip-path, so a target clipped down to a sliver (or to nothing) reports no
 * intersection and never opens; on a phone the 8% sliver of a full-width photo
 * sits entirely inside a negative rootMargin's side gutter. The margin is
 * vertical only for the same reason.
 *
 * Nested motion children can pick up the same `closed` / `open` variants (for
 * example an image that settles from a zoom while the frame opens).
 */
export default function ClipReveal({
  closed,
  open,
  transition,
  margin = "-80px 0px",
  className = "",
  wrapperClassName = "",
  style,
  children,
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={wrapperClassName}
      initial={reduced ? false : "closed"}
      whileInView="open"
      viewport={{ once: true, margin }}
    >
      <motion.div
        className={className}
        // The open shape holds when motion is reduced and nothing animates.
        style={{ clipPath: open, ...style }}
        variants={{ closed: { clipPath: closed }, open: { clipPath: open } }}
        transition={transition}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
