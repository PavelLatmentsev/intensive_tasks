import { Link } from "react-router-dom";
import styles from"./AccountPage.module.scss"
const AccounPage = () => {

    return ( 
        <>
        <h1>Личный кабинет</h1>
        <Link to={"/"} className={styles.account__link}> На главную</Link>
        </>
     );
}
 
export default AccounPage;