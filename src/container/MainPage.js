import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import "./MainPage.css";
import TransactionInformation from "../components/TransactionInformation/TransactionInformation";
import {setInformation} from "../store/actions/timesheetActions";
import Modal from "../components/Modal/Modal";

//Main Container for logic and display
//Maintains minor display states

const MainPage = (props) => {
    const [modalState, setModalState] = useState(false);

    //Only want this effect to run once, similar to component did mount, so the dependency array is empty
    useEffect(() => {
        const tempFunction = async () => {
            setModalState(true);
            await props.setInformation();
            setModalState(false);
        }
        tempFunction();
        
    }, [])

    return (
        <div className="main-page-div">
            <h1><u>Timesheet Tracker</u></h1>
            {modalState === true ? <Modal /> : null}
            <div className="tracked-hours">
                <p>Hours Tracked</p>
                <h3>{(props.data.reduce((acc, currEl) => acc += currEl.hours, 0)).toLocaleString(undefined, {minimumFractionDigits: 2})}</h3>
            </div>
            <div className="billable-amount">
                <p>Billable Amount</p>
                <h3>${(props.data.reduce((acc, currEl) => acc += currEl.billable === true ? currEl.hours * currEl.rate : 0, 0)).toLocaleString(undefined, {minimumFractionDigits: 2})}</h3>
            </div>
            <div className="header-boxes"></div>
            <div className="table-display">
                <table>
                    <thead>
                        <tr>
                            <th className="name-header">Name</th>
                            <th className="clients-header">Clients</th>
                            <th className="hours-header">Hours</th>
                            <th className="right-aligned-headers">Billable Hours</th>
                            <th className="right-aligned-headers">Billable Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.map((currEl) => {
                            return (
                                <TransactionInformation info={currEl} key={currEl._id}/>
                            )  
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps, {setInformation})(MainPage);