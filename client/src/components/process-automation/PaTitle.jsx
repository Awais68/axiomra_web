/** Two-tone heading: the accent half is a solid colour, never a gradient. */
export default function PaTitle({ lead, accent }) {
  return (
    <>
      {lead}
      {accent && <span className="text-pa-accent"> {accent}</span>}
    </>
  );
}
