import Logos from "../img/LOGOS.png";

const Commercial = () => {
  return (
    <section>
      <div style={{ backgroundColor: "white" }}>
        <div className="section-head text-center">
          <h5 className="tit" style={{ marginBottom: "0" }}>
            Commercial Leader
          </h5>
        </div>
        <div className="" style={{ textAlign: "center", color: "#222222" }}>
          <p className="mb-40 career-text" style={{ color: "#222222" }}>
            With rounded marketing experience and multi-sectoral expertise, my
            work has contributed to tax policy reform and digital skills
            development in Nigeria
          </p>
        </div>
      </div>
      <div>
        <div style={{ textAlign: "center;" }}>
          <img
            className="logos"
            src={Logos}
            alt="career logos"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Commercial;
