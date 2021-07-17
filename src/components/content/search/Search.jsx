import React from 'react';
import {useState} from "react";
import style from './Search.module.scss'

export const Search = ({carsArray, searchValue, filterYear}) => {
    const [valueInput, setValueInput] = useState('')

    const chengeInputForm = (e) => setValueInput(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();
        let value = valueInput.trim().toLowerCase()
        if (!value) {
            searchValue(null)
        } else {
            let cars = carsArray.filter(el => {
                return (el.mark).toLowerCase() === value ||
                    (el.model).toLowerCase() === value ||
                    filterYear(el, 'Эконом') === +value ||
                    filterYear(el, 'Стандарт') === +value ||
                    filterYear(el, 'Комфорт') === +value ||
                    filterYear(el, 'Комфорт+') === +value ||
                    filterYear(el, 'Минивен') === +value ||
                    filterYear(el, 'Бизнес') === +value
            })
            setValueInput('')
            searchValue(cars)
        }
    }

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <input
                className={style.form__input}
                type="text"
                value={valueInput}
                onChange={chengeInputForm}
                placeholder={'Введите марку, модель, год производства'}
            />
            <button className={style.form__btn} type="submit">поиск</button>
        </form>
    )
}






