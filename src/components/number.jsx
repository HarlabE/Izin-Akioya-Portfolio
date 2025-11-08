import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faSmile, faLightbulb, } from '@fortawesome/free-regular-svg-icons';

const Number = () => {
  return (
    <div>
        <div>
			<div className="numbers section-padding blog">
				<div className="">
					<div className="d-lg-flex justify-content-evenly text-center">
							<div className="col-md-3 col-sm-6">
							<div className="numb-item">
							<FontAwesomeIcon icon={faLayerGroup} className='icon ' />
								<h3 className="counter">2X</h3>
								<p>Founder</p>
							</div>
						</div>
						
						<div className="col-md-3 col-sm-6">
							<div className="numb-item">
							<FontAwesomeIcon icon={faSmile} className='icon'  />
								<h3 className="counter">12+</h3>
								<p>Years of Corporate Experience </p>
							</div>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="numb-item">
							<FontAwesomeIcon icon={faLightbulb} className='icon'  />
								<h3 className="counter">7+</h3>
								<p>Years Leading Growth</p>
							</div>
						</div>

				

					</div>
				</div>
			</div>
			</div>
    </div>
  )
}

export default Number