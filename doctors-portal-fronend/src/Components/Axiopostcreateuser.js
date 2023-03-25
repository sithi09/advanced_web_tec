import React, { Component } from 'react'
import ReactDOM from 'react-dom/client';
import axios from 'axios';
  
class Axiopostcreateuser extends Component {
    constructor(props)
    {
        super(props)
        this.state={
           
           
            name:'',
            phone:'',
           room:'',
           speciality_name: '',
           image:'',
        }
    }

    changeHandler = (e) =>{
    this.setState({[e.target.name]: e.target.value})
    
    }

    submitHandler = (e) =>{
        e.preventDefault()
        this.setState()
        console.log(this);
        axios.post('127.0.0.1:8000/api/doctor/create', this.state)
        .then(response=>{
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
    }
   

    render() {
      const {name, phone,room,  speciality_name,image}=this.state
        return (
            <div class="container">
                <h2 class="text-center">AddDoctor</h2>
                    <form onSubmit={this.submitHandler}>
                        <center>
                        <table>
                        <tbody>
                        <tr>
                                
                            <td>
                                <label for="name">name</label>
                            </td>


                            <td>
                                :<input type="text" name="name" value={name}  onChange={this.changeHandler} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="phone">phone</label>
                            </td>

                            <td>
                                :<input type="text" name="phone" value={phone}  onChange={this.changeHandler} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="room">room</label>
                            </td>

                            <td>
                                :<input type="text" name="room" value={room}  onChange={this.changeHandler} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="speciality_name">speciality_name</label>
                            </td>

                            <td>
                                :<input type="text" name="speciality_name" value={speciality_name}  onChange={this.changeHandler} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="image">image</label>
                            </td>

                            <td>
                                :<input type="text" name="image" value={image}  onChange={this.changeHandler} />
                            </td>
                        </tr>
                       

                            
                        
                        <tr>
                        <button class="btn btn-small btn-small-primary" type="submit">submit</button>
                        </tr>
                        </tbody>
                        </table>
                        </center>
                    </form> 
            </div>
        );
    }
}
  

export default Axiopostcreateuser;



if (document.getElementById('axiopostcreateuser')) {
    const Index = ReactDOM.createRoot(document.getElementById("axiopostcreateuser"));

    Index.render(
        <React.StrictMode>
            <Axiopostcreateuser/>
        </React.StrictMode>
    )
}
