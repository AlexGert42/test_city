import style from './Sidebar.module.scss'
import {useState} from "react";

export const Sidebar = () => {
    const [value, setValue] = useState(true)
    const chengeSidebar = () => value ? setValue(false) : setValue(true)

    return (
        <div className={`${style.sidebar} ${value && style.active}`}>
            <div className={style.sidebar__inner}>
                sidebar
                <button className={style.sidebar__btn} onClick={chengeSidebar}/>
            </div>
        </div>
    )
}