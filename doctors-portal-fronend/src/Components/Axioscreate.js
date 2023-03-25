
import axios from 'axios';
import React, {useState} from 'react';
 
function Create() {
   
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [room, setroom] = useState("");
    const [speciality_name,setSpeciality_name] = useState("");
    const [image,setImage] = useState("");
   
    const handleInputChange = (e) => {
       const {id , value} = e.target;
        if(id === "Name"){
            setName(value);
        }
        if(id === "phone"){
            setPhone(value);
        }
       
        if(id === "room"){
            setroom(value);
        }
if(id === "speciality_name"){
                setSpeciality_name(value);
            }
        
        if(id === "image"){
            setImage(value);
        }
   

    }

    const handleSubmit  = () => {
        var obj = {namee:name, phonee: phone, roomm: room, speciality_namee:speciality_name, imagee:image};


        axios.post("http://127.0.0.1:8000/api/doctor/create",obj)
        .then(resp=>{  
            var token = resp.data;            
            alert(token);

        }).catch(err=>{
            console.log(err);
        });
        // console.log(Name,email,password,dob,Phone); 
    }

    return(
        <div className="form">
            <div className="form-body">
                <div className="name">
                    <label className="form__label" >name </label>
                    <input className="form__input" type="text" value={name} onChange = {(e) => handleInputChange(e)} id="Name" placeholder="First Name"/>
                </div>
               
                <div className="phone">
                    <label className="form__label" >phone </label>
                    <input  type="phone"  className="form__input" id='phone' value={phone} onChange = {(e) => handleInputChange(e)} placeholder="phone"/>
                </div>
                <div className="room">
                    <label className="form__label" >room </label>
                    <input className="form__input" type="room" id='room' value={room} onChange = {(e) => handleInputChange(e)} placeholder="room"/>
                </div>
               
                <div className="speciality_name">
                    <label className="form__label" >speciality_name</label>
                    <input className="form__input" type="text" id="speciality_name" value={speciality_name} onChange = {(e) => handleInputChange(e)} placeholder="speciality_name"/>
                </div>
                <div className="image">
                    <label className="form__label" >image</label>
             <input className="form__input" type="text" id="image" value={image} onChange = {(e) => handleInputChange(e)} placeholder="image"/>
                
                    
                </div>
            </div>
            <div className="footer">
                <button onClick={()=>handleSubmit()} type="submit" className="btn">Register</button>
                <button type="button" className="btn" id='btnn' onClick={()=> window.location.href='/'}>Login</button>
            </div>
        </div>
       
    )      
}

export default Create;



