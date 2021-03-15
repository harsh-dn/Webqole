import headerStyles from "../styles/Header.module.css"

const Header = () => {
    return (
        <div className={headerStyles.title}>
            <h1><span>WebDev</span> Newz</h1>
            <p className={headerStyles.description}>Keep updated with the latest news</p>
        </div>
    )
}

export default Header