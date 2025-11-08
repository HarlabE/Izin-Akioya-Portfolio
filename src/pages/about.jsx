import React from 'react';
import Foot from '../components/foot';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import picture from '../img/about-pic2.jpg';
// import 'bootstrap/dist/css/bootstrap.min.css'

const About = () => {
  return (
    <div>
      <div className="contain">
        {/* <div className="image"> 
          <img className='about-image' src={picture} alt="Izin Akioya" loading='lazy'/>
        </div> */}
        <div className="text" style={{marginLeft: "10px;"}} >
          
          <div>
            <h2  style={{fontSize: "24px", textAlign: "center", overflow:"hidden"}}><b className='abt'>ABOUT </b></h2>
          </div>
          <div >
            <p>
              Izin Akioya is a multidisciplinary professional with expertise across business development, marketing and innovation. </p>
              <p>
                Her experience spans leading market development and client origination strategies, managing multi-million-dollar partnerships, and supporting new ventures from concept through commercialization. This blend enables her to shape markets, convert opportunities, and support new business lines from concept to scale, ensuring that strategy translates into real, measurable outcomes.
              </p>
              <p>
              Her 10-year growth and marketing career includes roles at British American Tobacco, Leo Burnett, Eko Atlantic City, The Nigeria Economic Summit Group, and across fast-moving consumer goods, advertising, and policy sectors.
              Her 5 year+ innovation and startup career includes founder and co-founder roles in e-commerce, supply chain and mergers and acquisitions software (M&A).  </p>
              <p>
              She voluntarily leads the Digital Skills Initiative at the Federal Ministry of Labour and Employment (Nigeria) and serves on the Nigeria Economic Summit Group's Trade, Investment, & Competitiveness Policy Commission.</p>
              <p>
              You will find her living urgently, - Creating - Intersecting - Doing.
            </p>
         
        </div>
          <br/>
          <h5>Credentials & Network</h5>
          <ul className="list2" style={{listStyleType: "none"}}>
            <li style={{marginBottom: "10px;"}}>
             <div className="list-view">
              <p className="list-number">1.</p>
              <p className="list-text"> Voluntary Program Lead, Digital Skills Initiative, Ministry of Labour and Employment</p>
            </div>
            </li>
            <li style={{marginBottom: "10px;"}}>
             <div className="list-view">
              <p className="list-number">2.</p>
              <p className="list-text">Member, Nigeria Economic Summit Group Trade Investment and Competitiveness Policy Commission</p>
            </div>
            </li>
            <li style={{marginBottom: "10px;"}}>
             <div className="list-view">
              <p className="list-number">3.</p>
              <p className="list-text">Fellow, The Royal Society of Arts Manufactures and Commerce(RSA)</p>
            </div>
            </li>
            <li style={{marginBottom: "10px;"}}>
             <div className="list-view">
              <p className="list-number">4.</p>
              <p className="list-text">EX-VP Marketing, Board Executive, National Black MBA Association Dallas-Ft.Worth</p>
            </div>
            </li>
            <li style={{marginBottom: "10px;"}}>
             <div className="list-view">
              <p className="list-number">5.</p>
              <p className="list-text">Member, (MCIM) Chartered Institute of Marketing</p>
            </div>
            </li>
            <li style={{marginBottom: "10px;"}}>
             <div className="list-view">
              <p className="list-number">6.</p>
              <p className="list-text">Member, American Marketing Association</p>
            </div>
            </li>
            <li style={{marginBottom: "10px;"}}>
             <div className="list-view">
              <p className="list-number">7.</p>
              <p className="list-text">Member, Association of Supply Chain Management</p>
            </div>
            </li>
            <li style={{marginBottom: "10px;"}}>
             <div className="list-view">
              <p className="list-number">8.</p>
              <p className="list-text">Associate Member, Women in Management, Business, and Entrepreneurship</p>
            </div>
            </li>
            <li style={{marginBottom: "10px;"}}>
             <div className="list-view">
              <p className="list-number">9.</p>
              <p className="list-text">Member, ForbesBlk</p>
            </div>
            </li>
            <li style={{marginBottom: "10px;"}}>
             <div className="list-view">
              <p className="list-number">10.</p>
              <p className="list-text">Alumna, AIESEC International</p>
            </div>
            </li>
          </ul>

        </div>
        
      </div>
      <Foot/>
    </div>
  )
}

export default About