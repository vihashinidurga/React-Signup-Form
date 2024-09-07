import React from "react";
import './App.css'
export default function App(){
  const[formData,setFormData]=React.useState({
    //pass the values, formData holds input values, setFormData function updates the formData state
    email:"",
    password:"",
    confirmPassword:"",
    joinedNewsLetter:true
  })

  function handleChange(event){
    //function gets triggered when any changes in event field changes
    //akes previous data updates the field that riggers the change=
    const{name,value,type,checked} = event.target
    setFormData(prevFormData=>({
      ...prevFormData,
      [name]: type ==="checkbox" ? checked : value
    }))
  }

  function handleSubmit(event){
    event.preventDefault()
    if(formData.password===formData.confirmPassword){
      console.log("Successfully signed up");
    }
    else{
      console.log("Password does not match");
      return;
    }
    if(formData.joinedNewsLetter){
      console.log("Thanks for signing up for newsletter!!");
    }
  }


  return(
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input type="email" placeholder="Email address" className="form-input" name="email" onChange={handleChange} value={formData.email}/>
        <input type="password" placeholder="Password" className="form-input" name="password" onChange={handleChange} value={formData.password}/>
        <input type="password" placeholder="Confrim Password" className="form-input" name="confirmPassword" onChange={handleChange} value={formData.confirmPassword}/>

        <div className="form-marketing">
        <input id="okayToEmail"type="checkbox"name="joinedNewsLetter" onChange={handleChange}
        checked={formData.joinedNewsLetter}
    />
          <label htmlFor="okayToEmail">I want to join newsletter</label>
        </div>
        <button className="form-submit">
          Sign Up
        </button>
      </form>
    </div>
  )
}
