import styles from "./Button.module.scss";
import { IButtonProps } from "./Button.props";
import googleIcon from "/images/icons/Google.svg";
import userIcon from "/images/icons/man-user.svg";

export const Button = ({ children,belonging, type, background, ...props }: IButtonProps): JSX.Element => {
  return (
    <button
      className={styles.button}
      type={type}
      {...props}
      style={{backgroundColor:background}}
    >
        {belonging ==="google" ? <img className={styles.button__picture} src={googleIcon} alt="googleIcon" /> : ""}
        {belonging ==="user" ?  <img className={styles.button__picture} src={userIcon} alt="userIcon" />: ""}
      {children}
    </button>
    
  );
};