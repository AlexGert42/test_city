import style from './Loader.module.scss'
import spiner from '../../../img/spiner.gif'

export const Loader = () => {

    return (
        <div className={style.loader__overlay}>
            <div className={style.loader__icon}>
                <img className={style.loader__img} src={spiner} alt=" "/>
            </div>
        </div>
    )
}