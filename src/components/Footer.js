import "./Footer.css";

// Footer
const Footer = ({ link, title, className }) => {
  return (
    <div className="footer"> 
      <p>
        Created by
        <a href={link} className={className}>
          {title}
        </a>
      </p>
    </div>
  );
};

export default Footer;
