import React, {useState, useEffect} from "react";
import axiosConfig from './axiosConfig';
const APIDoctors = ()=>{

        const [doctors, setDoctors] = useState([]);
    
        useEffect(()=>{
            axiosConfig.get("http://127.0.0.1:8000/api/doctor/list")
            .then(resp=>{
                console.log(resp.data);
                setDoctors(resp.data);
            }).catch(err=>{
                console.log(err);
            });
        },[]);

    return (
        <div>
        <table>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Room</th>
                        <th>speciality_name</th>
                    </tr>
                {doctors.map(doctor=>(
                    <tr key={doctor.id}>
                        <td >{doctor.name}</td>
                        <td >{doctor.phone}</td>
                        <td >{doctor.room}</td>
                        <td >{doctor.speciality_name}</td>
                    </tr>
                ))}
            </table>
        </div>

    )

}
export default APIDoctors;  