//react
import React, { useState, createRef } from 'react';

//redux
import { useDispatch, useSelector } from "react-redux";
import { createQuizThunk } from "../../Store/quizesSlices"
import { openModal } from "../../Store/modalSlice"


export default () => {
    //quizes array
    const { quizes, isload, isLocalStorge } = useSelector(state => state.quizesSlices)

    //redux - dispatch
    const dispatch = useDispatch()

    //refs
    const quizTitleRef = createRef(null);
    const quizDescriptionRef = createRef(null);
    const quizScoreRef = createRef(null);
    const quizUrlRef = createRef(null);

    // Define state variables for each input field
    const [formData, setFormData] = useState({
        quizTitle: '',
        quizDescription: '',
        quizScore: '',
        quizUrl: ''
    });

    // Function to handle changes in input fields
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Access the formData object with all input values
        console.log(formData);
        const quizData = {
            title: formData.quizTitle,
            description: formData.quizDescription,
            score: formData.quizScore
        }
        dispatch(createQuizThunk(quizData))
        // Here, you can perform any further actions, such as sending the data to a server
    };

    console.log(quizes)

    const handleCreateBtt = () => {
        dispatch(
            openModal({
                modalData: null,
                componentName: 'addAndEditQuis',
                modalType: "add",
                tittle: `Add Quis`,
            })
        );

    }



    return (
        <div className="quizDetails-parent row">


            <form onSubmit={handleSubmit}>
                <div className='row px-3 justify-content-between'>
                    <h3 className='ps-0'>Quiz information</h3>
                    <input ref={quizTitleRef} placeholder='Quiz title' className='col-6 mb-2' type="text" id="quizTitle" name="quizTitle" value={formData.quizTitle} onChange={handleInputChange} />
                    <input ref={quizDescriptionRef} placeholder='Quiz description' className='col-5 mb-2' type="text" id="quizDescription" name="quizDescription" value={formData.quizDescription} onChange={handleInputChange} />
                    <input ref={quizScoreRef} placeholder='Quiz Score' className='col-6 mb-2' type="text" id="quizScore" name="quizScore" value={formData.quizScore} onChange={handleInputChange} />
                    <input ref={quizUrlRef} placeholder='Quiz url' className='col-5 mb-2' type="text" id="quizUrl" name="quizUrl" value='https://www.youtube.com/watch?v=e6EGQFJLl04' disabled />
                </div>

                <div className='d-flex px-3 justify-content-between mt-5 ps-0'>
                    <h3 className='ps-0'>Questions and answers</h3>
                    <button className='ps-0' onClick={() => {
                        handleCreateBtt()
                    }}>Create a Quistion</button>

                </div>

                <input type="submit" value="Submit" className='col-6 mt-3 ms-auto me-auto d-block' />
            </form>
        </div>
    )
};