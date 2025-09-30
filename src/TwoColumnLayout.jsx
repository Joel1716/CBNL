export default function TwoColumnLayout({
  img,
  alt,
  color,
  reverse = false,
  boxShadow,
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
          <img src={img} alt={alt} loading="lazy" />
        </div>
      </div>
    </div>
  );
}
