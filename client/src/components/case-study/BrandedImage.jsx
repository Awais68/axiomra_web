import BrandMark from "./BrandMark";

/**
 * A case study photo with the Axiomra wordmark laid over its bottom-right
 * corner. The logo is an overlay, never baked into the file, so the source
 * photo stays clean and the mark can change without re-exporting images.
 *
 * `className` styles the frame (aspect, radius, ring, shadow); the photo
 * fills it. When the image carries an `imageCredit` and `credit` is on, the
 * credit is set in small text under the frame.
 */
export default function BrandedImage({ image, sizes, priority = false, credit = true, className = "" }) {
  const largest = image.sources[image.sources.length - 1];
  const showCredit = credit && image.imageCredit;

  const frame = (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={image.sources[1]?.src ?? largest.src}
        srcSet={image.sources.map((s) => `${s.src} ${s.width}w`).join(", ")}
        sizes={sizes}
        width={image.width}
        height={image.height}
        alt={image.alt}
        loading={priority ? "eager" : "lazy"}
        // React 18 only forwards the lowercase attribute.
        // eslint-disable-next-line react/no-unknown-property
        fetchpriority={priority ? "high" : undefined}
        decoding="async"
        className="h-full w-full object-cover"
      />
      <BrandMark />
    </div>
  );

  if (!showCredit) return frame;

  const { photographer, site, url } = image.imageCredit;
  return (
    <figure>
      {frame}
      <figcaption className="mt-2 text-xs text-content-faint">
        Photo:{" "}
        <a href={url} target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:underline focus-ring">
          {photographer} / {site}
        </a>
      </figcaption>
    </figure>
  );
}
