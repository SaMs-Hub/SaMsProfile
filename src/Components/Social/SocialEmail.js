import React from "react";
import Styles from "./Social.module.css";

const SocialEmail = () => {
  return (
    <div className={Styles.socialEmail}>
      <a href="mailto:khanshaf223@gmail.com" title="Send Email">
        khanshaf223@gmail.com
      </a>
      <div className={Styles.emailLine}></div>
    </div>
  );
};

export default SocialEmail;
