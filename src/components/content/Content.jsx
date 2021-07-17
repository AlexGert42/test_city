import React from 'react';
import {useEffect, useReducer} from "react";
import {Table} from "./table/Table";
import {Search} from "./search/Search";
import {Discription} from "./discription/DiscriptionBlock";
import {
    focusAction,
    getCarsAction,
    initialState,
    loadingAction,
    searchAction,
    tableReducer
} from "../../context/tableReducer";
import axios from "axios";
import style from './Content.module.scss'
import {Loader} from "./spinerLoader/Loader";


export const Content = () => {
    const [reducer, dispatch] = useReducer(tableReducer, initialState)

    useEffect(() => {
        dispatch(loadingAction(true))
        axios.get('https://city-mobil.ru/api/cars')
            .then(res => {
                dispatch(getCarsAction(res.data.cars))
                dispatch(loadingAction(false))
            })
    }, [])

    const filterYear = (element, value, simbol = '') => {
        return element.tariffs[value] ? element.tariffs[value].year : simbol
    }

    const searchValue = (array) => dispatch(searchAction(array))

    const focusValue = (value) => dispatch(focusAction(value))

    console.log(reducer)

    return (
        <div className={style.content}>
            <div className={style.content__inner}>
                {reducer.loading ?
                    <Loader/>
                    :
                    <>
                        <Discription
                            car={reducer.car}
                            filterYear={filterYear}
                        />
                        <Search
                            carsArray={reducer.cars}
                            searchValue={searchValue}
                            filterYear={filterYear}
                        />
                        <Table
                            allArray={reducer.cars}
                            sortArray={reducer.sortCars}
                            focusValue={focusValue}
                            filterYear={filterYear}
                        />
                    </>
                }
            </div>
        </div>
    )
}









