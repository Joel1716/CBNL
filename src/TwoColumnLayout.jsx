export default function TwoColumnLayout({
  img,
  alt,
  color,
  reverse = false,
  boxShadow,
  extension,
  children,
}) {
  const containerStyles = {
    boxShadow: boxShadow,
    backgroundColor: color,
  };
  return (
    <div style={containerStyles}>
      <div className={`column-container ${reverse ? "reverse" : ""}`}>
        {children}
        <div className="column-image">
          <picture>
            <source srcSet={img} type="image/webp" />
            <source
              srcSet={img.split(".").slice(0, -1).join(".") + `.${extension}`}
              type="image/jpeg"
            />
            <img
              src={img.split(".").slice(0, -1).join(".") + `.${extension}`}
              alt={alt}
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    </div>
  );
}
