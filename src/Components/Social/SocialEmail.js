import React from "react";
import Styles from "./Social.module.css";

const SocialEmail = () => {
  return (
    <div className={Styles.socialEmail}>
      <a href="mailto:syedsamer456@gmail.com" title="Send Email">
        syedsamer456@gmail.com
      </a>
      <div className={Styles.emailLine}></div>
    </div>
  );
};

export default SocialEmail;
