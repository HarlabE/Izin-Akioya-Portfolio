const Social = () => {
  return (
    <div>
      <div style={{ textAlign: "center", padding: "10rem 0" }}>
        <h3 className="tit" style={{ paddingBottom: "0.625rem" }}>
          Stay Connected
        </h3>
        <br />
        <div
          className="social-icons"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2.5rem",
          }}
        >
          <a
            href="https://www.instagram.com/izinakioya/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
            <p>Instagram</p>
          </a>
          <a
            href="https://x.com/AkioyaIzin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
          >
            <i className="fab fa-x"></i>
            <p>Twitter</p>
          </a>

          <a
            href="mailto:izinakioya@gmil.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <i className="fas fa-envelope"></i>
            <p>Email</p>
          </a>
          <a
            href="https://www.linkedin.com/in/izinakioya/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
            <p>LinkedIn</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Social;
