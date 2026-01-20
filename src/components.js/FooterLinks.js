import React from "react";

const FooterLinks = ({ href, text }) => {
  return (
    <li>
      <a href={href} className="footer-link">
        {text}
      </a>
    </li>
  );
};

export { FooterLinks };
