//react
import React, { useEffect } from 'react';

//redux
import { useDispatch, useSelector } from "react-redux";
import { getQuizesThunk } from "../../Store/quizesSlices"

//dom route v6
import { Outlet } from "react-router-dom";

//style
import "./styles/table.css"

export default () => {
    //quizes array
    const { quizes, isload } = useSelector(state => state.quizesSlices)

    //redux - dispatch
    const dispatch = useDispatch()


    //get quiz thunk
    useEffect(() => {
        dispatch(getQuizesThunk())
    }, [dispatch])

    console.log(quizes)
    return (
        <>
            <div className="table-parent">
                <head>
                    <title>Table Example</title>
                </head>

                <table border="1">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Score</th>
                            <th>url</th>

                        </tr>
                    </thead>
                    <tbody>

                        {isload ? (
                            'loading...'
                        ) : (
                            <>
                                {
                                    quizes.map(quiz => {

                                        console.log(quiz)
                                        if (quiz.title !== '') {
                                            return (
                                                <tr>
                                                    <td>{quiz.title}</td>
                                                    <td>{quiz.description}</td>
                                                    <td>{quiz.score}</td>
                                                    <td>https://www.youtube.com/watch?v=e6EGQFJLl04</td>
                                                    {/* <td>{quiz.url}</td> */}


                                                </tr>
                                            )
                                        }

                                    })
                                }
                            </>
                        )

                        }

                    </tbody>
                </table>




            </div>
            <Outlet />
        </>
    );
};