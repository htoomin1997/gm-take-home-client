import React from "react";
import "./TransactionInformation.css"

//Subcomponent to display the cell informationo
const TransactionInformation = (props) => {
    return (
        <tr className="temp-row">
            <td className="left-aligned-cell">{props.info.project}</td>
            <td className="left-aligned-cell">{props.info.client}</td>
            <td className="hours-cell">{props.info.hours.toLocaleString(undefined, {minimumFractionDigits: 2})}</td>
            <td className="right-aligned-cell">
                {props.info.billable === true ? props.info.hours.toLocaleString(undefined, {minimumFractionDigits: 2}) : 0} 
                <span className="percent-styling">{props.info.billable === true ? " (100%)" : " (0%)"}</span>
            </td>
            <td className="right-aligned-cell">{props.info.billable === true ? "$" + (props.info.hours * props.info.rate).toLocaleString(undefined, {minimumFractionDigits: 2}) : "-"}</td>
        </tr>
    )
}

export default TransactionInformation;