export default function TextLogo({ information, heading, link, img }) {
  return (
    <div className="intro-info-container">
      <h2>{heading}</h2>
      <div className="intro-info-img">
        <div>
          <ul>
            {information.map((info, value) => {
              return <li key={value}>{info}</li>;
            })}
          </ul>
          <button>
            <a href={link} target="_blank">
              Read More
            </a>
          </button>
        </div>
        <img src={img} alt={`${img.split(".")[0]} Logo`} loading="lazy" />
      </div>
    </div>
  );
}
