import style from './Table.module.scss'
import {useEffect, useState} from "react";


export const Table = ({allArray, sortArray, focusValue, filterYear}) => {
    const [array, setArray] = useState(allArray)

    useEffect(() => {
        sortArray ? setArray(sortArray) : setArray(allArray)
    }, [sortArray])

    const [sort, setSort] = useState(true)

    const sortList = () => {
        if (sort) {
            let newArray = array.sort((a, b) => {
                if (a.mark > b.mark) {
                    return 1;
                }
                if (a.mark < b.mark) {
                    return -1;
                }
                return 0;
            })
            setArray(newArray)
            setSort(false)
        } else {
            let newArray = array.sort((a, b) => {
                if (a.mark < b.mark) {
                    return 1;
                }
                if (a.mark > b.mark) {
                    return -1;
                }
                return 0;
            })
            setArray(newArray)
            setSort(true)
        }
    }
    useEffect(sortList, [array])

    const focusRow = (value) => focusValue(value)


    return (
        <table className={style.table}>
            <thead className={style.table__h}>
            <tr>
                <th className={style.table__h_item}>Марка и модель
                    <button className={style.table__h_item_btn} onClick={sortList}/>
                </th>
                <th className={style.table__h_item}>Эконом</th>
                <th className={style.table__h_item}>Стандарт</th>
                <th className={style.table__h_item}>Комфорт</th>
                <th className={style.table__h_item}>Комфорт +</th>
                <th className={style.table__h_item}>Минивен</th>
                <th className={style.table__h_item}>Бизнес</th>
            </tr>
            </thead>
            <tbody className={style.table__b}>
            {array.map((el, i) => {
                let econom = filterYear(el, 'Эконом', '-')
                let standart = filterYear(el, 'Стандарт', '-')
                let comfort = filterYear(el, 'Комфорт', '-')
                let comfortPlus = filterYear(el, 'Комфорт+', '-')
                let minivan = filterYear(el, 'Минивен', '-')
                let business = filterYear(el, 'Бизнес', '-')
                return (
                    <tr key={i} onClick={() => focusRow(el)}>
                        <td className={`${style.table__b_item} ${style.title}`}>{`${el.mark} ${el.model}`}</td>
                        <td className={style.table__b_item}>{econom}</td>
                        <td className={style.table__b_item}>{standart}</td>
                        <td className={style.table__b_item}>{comfort}</td>
                        <td className={style.table__b_item}>{comfortPlus}</td>
                        <td className={style.table__b_item}>{minivan}</td>
                        <td className={style.table__b_item}>{business}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}

