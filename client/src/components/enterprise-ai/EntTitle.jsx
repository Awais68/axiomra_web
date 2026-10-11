/** Two-tone heading: the accent half is a solid teal, never a gradient. */
export default function EntTitle({ lead, accent }) {
  return (
    <>
      {lead}
      {accent && <span className="text-ent-accent"> {accent}</span>}
    </>
  );
}
