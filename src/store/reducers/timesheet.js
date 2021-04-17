import * as actionTypes from "../actions/actionTypes";

const initialState = {
    data: []
}

const timesheetReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_INFORMATION:
            return {
                data: action.newData
            }
        default:
            return state;
    }
}

export default timesheetReducer;