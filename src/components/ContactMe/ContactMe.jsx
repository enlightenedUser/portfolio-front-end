import "./contactMe.scss";

const ContactMe = () => {
  return (
    <div className="container">
      <div
        className="flex justify-between contact-me-section"
        id="contact-me-section"
      >
        <a
          href="https://t.me/don_pablio"
          target="_blank"
          rel="noreferrer nofollow"
        >
          <h2 className="underline">
            Contact <i>M</i>e
          </h2>
        </a>

        <div className="contact-me-list">
          <a
            href="https://t.me/don_pablio"
            target="_blank"
            rel="noreferrer nofollow"
          >
            <p className="p15 uppercase">Telegram</p>
          </a>
          <a
            href="https://www.linkedin.com/in/pavel-bulaienko-472b0b1b8/"
            target="_blank"
            rel="noreferrer nofollow"
          >
            <p className="p15 uppercase">Linkedin</p>
          </a>
          <a
            href="https://github.com/PavelBulaienko"
            target="_blank"
            rel="noreferrer nofollow"
          >
            <p className="p15 uppercase">Github</p>
          </a>
          <a
            href="mailto:p380504942472@gmail.com"
            target="_blank"
            rel="noreferrer nofollow"
          >
            <p className="p15 uppercase">Gmail</p>
          </a>
          <a href="tel:+380504942472">
            <p className="p15 uppercase">+38 (050) 494 24 72</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
