import React, {Components} from "react";
import { Link } from "react-router-dom";

const Doctor = (props) => {
    return(
        <div>
            <p>Doctorname: {props.name}  Speciality: {props.speciality}</p>
        </div>
    )
}
export default Doctor;