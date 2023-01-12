import styles from './style.module.css';

const NavBar = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.logo}>
                <img src="/generationLogo.png" alt="" />
            </div>
            <ul>
                <li>HOME</li>
                <li>PROJETOS</li>
                <li>SOBRE</li>
            </ul>
            <div className={styles.line}></div>
            <div className={styles.socialArea}>
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
                </div>
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="" />
                </div>
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default NavBar;