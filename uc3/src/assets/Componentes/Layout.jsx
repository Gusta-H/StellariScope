import Styles from '../css/Layout.module.css'

function Layout({ children }) {
    return (
        <div className={Styles.layout}>
            <div className={Styles.stars}></div>
            <div className={Styles.stars2}></div>
            <div className={Styles.stars3}></div>

            <div className={Styles.content}>
                {children}
            </div>
        </div>
    )
}

export default Layout
