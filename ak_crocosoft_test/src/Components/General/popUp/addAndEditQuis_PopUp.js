//react
import React, { useEffect, useState } from "react";

//formik
import { useFormik } from "formik";

//material UI
import {
    Grid,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    RadioGroup,
    FormControlLabel,
    Radio
} from '@mui/material';

//material UI
import { TextField } from '@mui/material';
import { IconButton } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";



//icons
import deleteIcon from "../../../svg/Iconly-Light-Delete.svg";
import AddInput from "../../../svg/Group68834.svg";



export default (props) => {
    const [questionState, setQuestionState] = ('')

    const [radioOptions, setRadioOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    ////test

    console.log(props);
    console.log(props.testID);
    console.log(props.AddMode);
    console.log(props.testIDwhenAdd);
    console.log(props.quisId);

    const formik = useFormik({
        initialValues: {
            AddMode: props.AddMode,
            question: "",
            Answesrs: [],
            test_id: props.testID,
            title_ar: "",
            type: "select",
            ar: ["مثال1", "مثال1", "مثال3"],
        },
        onSubmit: (values) => {

            console.log(values);
            props.handleQuesCond(values);
        },
    });

    //useEffect
    // useEffect(() => {
    //     if (!props.AddMode) {
    //         console.log(props.editQondQuesData.values.length);

    //         // alert('edit mode')
    //         const answersObject = props.editQondQuesData.values.map((item) => {
    //             console.log(item);
    //             return item.answer_en;
    //         });

    //         handleAddInheretedRows(props.editQondQuesData.values.length - 1);

    //         //edit
    //         // get user and set popUp fields
    //         formik.setFieldValue("question", props.editQondQuesData.title_en);
    //         formik.setFieldValue("Answesrs", answersObject);
    //         formik.setFieldValue("quesId", props.quisId);


    //     } else if (props.AddMode) {
    //         //add
    //         formik.setFieldValue("test_id", props.firstViewData.id);
    //     }
    // }, []);




    // console.log(formik);
    const [rows, setRows] = useState([{ answer: "" }]);













    console.log(formik.values);
    // console.log(formik.values.Answesrs);



    // handle and quistion Answers 
    const handleAddRadio = () => {
        const newOption = `Option ${radioOptions.length + 1}`;
        setRadioOptions([...radioOptions, newOption]);
    };

    const handleRemoveRadio = (index) => {
        const updatedOptions = [...radioOptions];
        updatedOptions.splice(index, 1);
        setRadioOptions(updatedOptions);
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };


    return (

        <form onSubmit={formik.handleSubmit} id="dropDownModal">
            <Paper variant="outlined">
                <Grid sm={12}>
                    <TableContainer component={Paper} variant="outlined">
                        <Table aria-label="customized table">
                            <TableHead>
                                <TableRow className="" fullWidth>
                                    <TableCell className="">
                                        <span>Question 1</span>
                                        <br></br>
                                        <span className="quesType-Modal">
                                            Type of question : true or false
                                        </span>
                                    </TableCell>

                                    <TableCell align="right" className="">
                                        <Button type="submit" className="saveBtt">
                                            Save
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableHead>


                            <TableBody>
                                <div className="questFeild">
                                    <TextField
                                        className={
                                            formik.touched.question && formik.errors.question
                                                ? "is-invalid"
                                                : ""
                                        }
                                        variant="outlined"
                                        placeholder="write your question"
                                        name="question"
                                        id="question"
                                        value={formik.values.question}
                                        onChange={(e) => {
                                            formik.setFieldValue('question', e.target.value)
                                        }} />
                                </div>


                                <div className="label-cont">
                                    <span>Answers</span>
                                </div>

                                <IconButton
                                    className="iconBttAdd"
                                    aria-label="add"
                                    onClick={handleAddRadio}
                                >
                                    <img src={AddInput} />
                                    <span>Add Another Answer</span>
                                </IconButton>


                                {radioOptions.map((option, index) => (
                                    <div key={index}>

                                        <input
                                            type="radio"
                                            name="radioGroup"
                                            value={option}
                                            checked={selectedOption === option}
                                            onChange={handleOptionChange}
                                        />
                                        {option}
                                        <button onClick={() => handleRemoveRadio(index)}>Remove</button>
                                    </div>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Paper>
        </form>

    );
};
