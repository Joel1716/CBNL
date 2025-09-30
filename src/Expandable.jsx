export default function Expandable({
  heading,
  infoHeading,
  onCourseClick,
  courseClick,
  value,
  children,
}) {
  const open = value === courseClick;
  return (
    <div className={`courses ${open && "courseClick"}`}>
      <div
        className="course-heading"
        onClick={() => onCourseClick(value === courseClick ? null : value)}
      >
        <p>{heading}</p>
      </div>
      <div className="course-info">
        {infoHeading && <p className="info-heading">{infoHeading}</p>}
        {children}
      </div>
    </div>
  );
}
