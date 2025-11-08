import { faLightbulb, faSmile } from "@fortawesome/free-regular-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Number = () => {
  return (
    <div className="numbers section-padding blog">
      <div className="overall_container">
        <div className="d-lg-flex justify-content-evenly text-center">
          <div className="col-md-3 col-sm-6">
            <div className="numb-item">
              <FontAwesomeIcon icon={faLayerGroup} className="icon" />
              <h3 className="counter">2X</h3>
              <p>Founder</p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="numb-item">
              <FontAwesomeIcon icon={faSmile} className="icon" />
              <h3 className="counter">12+</h3>
              <p>Years of Corporate Experience </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="numb-item">
              <FontAwesomeIcon icon={faLightbulb} className="icon" />
              <h3 className="counter">7+</h3>
              <p>Years Leading Growth</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Number;
