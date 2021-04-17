import axios from "axios";
import * as actionTypes from "./actionTypes";

//Requests the information from the backend and dispatches it to the redux reducer
export const setInformation = () => async dispatch => {
    const result = await axios.get("http://localhost:8080/timesheet/records");
    dispatch({
        type: actionTypes.SET_INFORMATION,
        newData: result.data.content.payload
    })
}