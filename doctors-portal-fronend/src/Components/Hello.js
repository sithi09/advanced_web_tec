import React, {Components} from "react";
import Doctor from "./Doctor";

const Hello = () => {
    return(
        <div>
            <Doctor name="Dr.sajjad" speciality="Surjon"/>
            <Doctor name="Dr.sithi"  speciality="Surjon"/>
            <Doctor name="Dr.sathi"  speciality="Surjon"/>
        </div>
    )
}
export default Hello;