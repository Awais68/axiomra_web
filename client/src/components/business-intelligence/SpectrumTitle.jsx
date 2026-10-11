/** "Lead <accent>" title used by every BI section heading. */
export default function SpectrumTitle({ lead, accent }) {
  return (
    <>
      {lead} <span className="bi-spectrum-text">{accent}</span>
    </>
  );
}
