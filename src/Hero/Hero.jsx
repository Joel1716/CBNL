import "./Hero.css";
export default function Hero({ page, pageHeading, pageSubText, buttonText }) {
  return (
    <>
      <section className={`hero-section ${page}`}>
        <div className="hero-info text-center">
          <h1>{pageHeading}</h1>
          {pageSubText && <p>{pageSubText}</p>}
          {buttonText && (
            <button>
              <a href="#">{buttonText}</a>
            </button>
          )}
        </div>
      </section>
    </>
  );
}
