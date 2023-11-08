"use client"
//1. import area 
// import { redirect } from "next/navigation";

import { useState } from "react";

//2. defination area
function Home() {
  //1 hooks vaiable area
  // const [var,function] = useState('text')
  const [title,setTitile] = useState("Login System");
  const [payload,setPayload] = useState({email:"",password:"",role:''});

  //2 defination area 
  //sumit function defined
  const submit = ()=>{
    console.log(payload.role);
    if(payload.role === 'SystemAdmin') {
      window.location.href = '/systemadmin/dashboard';
      // redirect('/systemadmin/dashboard')
    }
    else if(payload.role === 'Reseller') {
      window.location.href = '/reseller/dashboard';
      // redirect('/systemadmin/dashboard')
    }
    else if(payload.role === 'EndUser') {
      window.location.href = '/enduser/dashboard';
      // redirect('/systemadmin/dashboard')
    }
    else if(payload.role === 'AccountManager') {
      window.location.href = '/accountmanager/dashboard';
      // redirect('/systemadmin/dashboard')
    }
  }

    //handelChange function defined
  var handelChange = (e)=>{
    console.log(e.target.value)
    if(e.target.value === 'SystemAdmin'){
      setPayload({
        ...payload,
        email:"systemadmin@gmail.com",
        password:"systemadmin@gmail.com",
        role:'SystemAdmin'
      });
    }
    if(e.target.value === 'Reseller'){
      setPayload({
        ...payload,
        email:"reseller@gmail.com",
        password:"reseller@gmail.com",
        role:'Reseller'
      });
    }
    if(e.target.value === 'EndUser'){
      setPayload({
        ...payload,
        email:"enduser@gmail.com",
        password:"enduser@gmail.com",
        role:'EndUser'
      });
    }
    if(e.target.value === 'AccountManager'){
      setPayload({
        ...payload,
        email:"accountmanager@gmail.com",
        password:"accountmanager@gmail.com",
        role:'AccountManager'
      });
    }
  }

  //3. return statements
  return (
    <>
      {/* Login form stated here  */}
      <div className="container">
        <div className="card">
          <div className="card-header text-center">
            <h1 className="mt-10">{title}</h1>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label htmlFor="roles">Roles</label>
                <select className="form-control" onChange={handelChange}>
                  <option>SystemAdmin</option>
                  <option>Reseller</option>
                  <option>EndUser</option>
                  <option>AccountManager</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1">EmailAddress</label>
                <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" value={payload.email}/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword">Password</label>
                <input type="password" className="form-control" id="Password" name="password" placeholder="Password" value={payload.password}/>
              </div>  
            </form>
          </div>
          <div className="card-footer text-center">
            <button type="submit" className="btn btn-primary" onClick={submit}>Submit</button>
          </div> 
        </div>
      </div>

    </>
  )
}

//3. export area
//3.1default export 
export default Home;