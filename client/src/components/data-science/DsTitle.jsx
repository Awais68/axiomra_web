/** "Lead <accent>" heading text. The accent is a solid colour, never a gradient. */
export default function DsTitle({ lead, accent }) {
  return (
    <>
      {lead} <span className="ds-accent">{accent}</span>
    </>
  );
}
