import axios from "axios";
import * as actionTypes from "./actionTypes";

export const setInformation = () => async dispatch => {
    const result = await axios.get("http://localhost:8080/timesheet/records");
    console.log(result);
    dispatch({
        type: actionTypes.SET_INFORMATION,
        newData: result.data.content.payload
    })
}