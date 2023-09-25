//react
import React, { useState } from "react";

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
    FormHelperText,
    TextField,
    IconButton
} from '@mui/material';

//icons
import AddInput from "../../../svg/Group68834.svg";

export default (props) => {
    //useState
    const [radioOptions, setRadioOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    //formik
    const formik = useFormik({
        initialValues: {
            question: "",
            Answesrs: [],
        },
        onSubmit: (values) => {
            console.log(radioOptions)
            console.log(values);
            console.log(selectedOption)
        },
    });


    // handle and quistion Answers 
    const handleAddRadio = () => {
        const newOption = `Answer ${radioOptions.length + 1}`;
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
                                <div className="questFeild mb-3">
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
                                    <img alt='add input' src={AddInput} />
                                    <span>Add Another Answer</span>
                                </IconButton>


                                {radioOptions.map((option, index) => (
                                    <div key={index} className="mb-3">
                                        <input
                                            type="radio"
                                            name="radioGroup"
                                            value={option}
                                            checked={selectedOption === option}
                                            onChange={handleOptionChange}
                                        />
                                        {option}
                                        <button onClick={() => handleRemoveRadio(index)}>Remove</button>
                                        <FormHelperText>{selectedOption !== option ? 'answer is false' : 'the answer is true'}</FormHelperText>
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
