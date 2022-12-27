import React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard"

function Signup(){
    const[name,setName]=useState("")
    const [Password,setPassword]=useState("")
    const [VerifyPassword,setVerifyPassword]=useState("")
    const [Email,setEmail]=useState("")
    const [Technologies,setTechnologies]=useState("Javascript")
    const[error,setError]=useState("")
    const navigate=useNavigate()
    const [bool,setBool] = useState(true)
    function checkcondition(){
        if(name.trim()===""){ 
            setError("name is empty")
        }
        else if(name.length<=5 || name.length>=15){
            setError("name is invalid length must be alteast 5")
            setBool(bool)
        }
        else if(Password.trim()===""){
            setError("password is empty")
        }
        else if(VerifyPassword.trim()===""){
            setError("verify password is empty.")
        }
        else if(Password!==VerifyPassword){
            setError("Value of Password and Varify Password field are not matched !")

        }
        else if (Email.trim() === "") {
            setError("Email can't be empty!")
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(Email)) {
            setError("Email is invalid")
        }
        else{
            setError("")
        }
    }
    useEffect(()=>{
      checkcondition()
    },[name])
        return(          
            <div id="signupbox">
              <center>   
            <label>Name</label><span>*</span><input id="name" type="text" placeholder="User Name" onChange={(e)=>
            setName(e.target.value)}/>
            <div style={{color:"red"}}>{error}</div>
            <label>Password<span>*</span></label>
                <input type="password" placeholder="Password" onChange={(e) => {
                    setPassword(e.target.value)
                }} /><br />
                <label>Confirm Password<span>*</span></label>
                <input type="password" placeholder="Password" onChange={(e) => {
                    setVerifyPassword(e.target.value)
                }} /><br />
                <label>Email<span>*</span></label>
                <input type="email" placeholder="Email" onChange={(e) => {
                    setEmail(e.target.value)
                }} /><br />
                <label>Technologies<span>*</span></label>
                <select onChange={(e) => {
                    setTechnologies(e.target.value)
                }} >
                    <option>Javascript</option>
                    <option>Java</option>
                    <option>Python</option>
                    <option>Scala</option>
                    <option>Spark</option>
                </select><br />
            <button onClick={()=>{
              {bool ? navigate("/Dashboard"):<Signup/>}
              checkcondition()
            }}>Submit</button>
            </center> 
            </div>
        )            
    }

export default Signup;