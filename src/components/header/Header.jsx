import style from './Header.module.scss'

export const Header = () => {

    return (
        <div className={style.header}>
            <div className={style.header__inner}>
                <h1 className={style.header__logo}>City<span className={style.header__logo_big}>Mobil</span></h1>
            </div>
        </div>
    )
}