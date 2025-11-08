import enibokun from "../img/ENIBOKUN-LOGO.png";
import maasai from "../img/MAASAI-LOGO.png";
import SAG from "../img/SAG-LOGO.png";

const Entrepreneurship = () => {
  return (
    <div className="overall_container">
      <section className="bg-entre">
        <div className="section-head text-center">
          <h5 className="tit">Entrepreneurship</h5>
        </div>

        <div className="entrepreneurship_container">
          <div>
            <div className="entre-img">
              <img src={enibokun} alt="Enibokun" loading="lazy" />
            </div>
            <div className="entre-text">
              <h5>ENIBOKUN</h5>
              <p>
                Now defunct, this fashion e-commerce brand <br /> galvanized my
                work in global Logistics
              </p>
            </div>
          </div>
          <div>
            <div className="entre-img2">
              <img src={SAG} alt="SAG" loading="lazy" />
            </div>
            <div className="entre-text2">
              <h5>SA GLOBAL LOGISTICS</h5>
              <p>Shiping Aggregator and Brokerage for Africa</p>
            </div>
          </div>
          <div>
            <div className="entre-img">
              <img src={maasai} alt="Maasai" loading="lazy" />
            </div>
            <div className="entre-text">
              <h5>MAASAI</h5>
              <p>
                54 Collective funded Maasai is <br /> Africa's platform to buy
                and sell startups
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Entrepreneurship;
