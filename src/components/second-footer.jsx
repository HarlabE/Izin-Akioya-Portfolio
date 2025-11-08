import React from 'react'

const secondFooter = () => {
  return (
    <div>
        <footer >
      <div className="container">
        <div>
          <h6  >Author | Marketing Expert | Entrepreneur</h6>
        </div>
        <div className="social-icons">
          <a
            href="https://www.instagram.com/izinakioya/"
            target="_blank"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            href="https://x.com/AkioyaIzin"
            target="_blank"
            aria-label="X (Twitter)"
          >
            <i className="fab fa-x"></i>
          </a>

          <a
            href="mailto:izinakioya@gmil.com"
            target="_blank"
            aria-label="Email"
          >
            <i className="fas fa-envelope"></i>
          </a>
		  <a href="https://www.linkedin.com/in/izinakioya/" target="_blank" aria-label="LinkedIn">
			<i className="fab fa-linkedin"></i>
		  </a>
        </div>
        <p style={{marginTop: "30px;"}}>Copy Right &copy; Izin Akioya | All RightReserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default secondFooter