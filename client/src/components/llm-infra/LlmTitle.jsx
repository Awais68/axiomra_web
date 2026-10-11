/** Two-part heading: the accent words take one solid colour (no gradient text on this page). */
export default function LlmTitle({ lead, accent, onInverse = false }) {
  return (
    <>
      {lead} <span className={onInverse ? "text-accent-vivid" : "text-brand"}>{accent}</span>
    </>
  );
}
