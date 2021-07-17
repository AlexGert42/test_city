import React from 'react';
import style from './DiscriptionBlock.module.scss'


export const Discription = ({car, filterYear}) => {
    return (
        <>
            {
                car && <div className={style.dicription}>
                    <div className={style.discription__inner}>
                        <span>Выбран автомобиль: </span>
                        <span>{car.mark} </span>
                        <span>{car.model} </span>
                        <span>{filterYear(car, 'Эконом')} </span>
                        <span>{filterYear(car, 'Стандарт')} </span>
                        <span>{filterYear(car, 'Комфорт')} </span>
                        <span>{filterYear(car, 'Комфорт+')} </span>
                        <span>{filterYear(car, 'Минивен')} </span>
                        <span>{filterYear(car, 'Бизнес')} </span>
                        <span>года выпуска</span>
                    </div>
                </div>
            }
        </>
    )
}








