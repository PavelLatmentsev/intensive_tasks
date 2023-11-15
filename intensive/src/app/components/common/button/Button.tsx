import styles from "./Button.module.scss";
import { IButtonProps } from "./Button.props";
import googleIcon from "/public/images/icons/Google.svg";
import userIcon from "/public/images/icons/man-user.svg";

export const Button = ({ children,belonging, background, ...props }: IButtonProps): JSX.Element => {
  return (
    <button
      className={styles.button}
      {...props}
      style={{backgroundColor:background}}
    >
        {belonging ==="google" ? <img className={styles.button__picture} src={googleIcon} alt="googleIcon" /> : ""}
        {belonging ==="user" ?  <img className={styles.button__picture} src={userIcon} alt="userIcon" />: ""}
      {children}
    </button>
    
  );
};