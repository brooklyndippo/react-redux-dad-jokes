import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import { deleteJoke } from '../actions'
import './BackPocket.css'



function BackPocket () {

    const dispatch = useDispatch()

    const jokes = useSelector((state) => state.jokes)

    const backPocket = jokes.map((joke, index) => {
        return (
            <div className="joke-card" key={index}>
                <p>{joke.joke}</p>
                <button onClick={(e) => {
                    dispatch(deleteJoke(index))
                }}>This joke is trash.</button>
            </div>
        )
    })

    return (
        <div className="the-pocket">
            {backPocket}
        </div>
    )
};

export default BackPocket;