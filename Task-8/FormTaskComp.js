import React, { useState } from 'react'

const FormTaskComp= () => {
    let mycourse=["React","java","angular","python","Html","js"];
    const[user,setUser]=useState({
        fname:"",
        fpass:"",
        fmail:"",
        fcontact:"",
        course:"",
        term:false
    })

    const changeInput  =(event)=>{
        const {type,name,value,checked}=event.target;
        setUser({...user,[name]:type==="checkbox"? checked:value});
    }

    const checkData=(event)=>{
        event.preventDefault();
        if(user.fname.trim()===""){
            window.alert("Fname is required");
            return false;
        }
        if(!user.fname.trim().match("^[a-zA-Z ]{3,20}$")){
            window.alert("Fullname must contain only character min-3 and max-20");
            return false;
        }

        if(user.fpass.trim()===""){
            window.alert("Fpass is required");
            return false;
        }
        if(!user.fpass.trim().match(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? ]).*$/)){
            window.alert("Password must contain mixer of all character");
            return false;
        }
        

        if(user.fmail.trim()===""){
            window.alert("Fmail is required");
            return false;
        }
        if(!user.fmail.trim().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
            window.alert("Enter a valid email address");
            return false;
        }
       

        if(user.fcontact.trim()===""){
            window.alert("Fcontact is required");
            return false;
        }
        if(!user.fcontact.trim().match(/^[7-9][0-9]{9}$/)){
            window.alert("Enter a valid contact");
            return false;
        }
        if(user.course.trim()===''){
            window.alert('course is required');
            return false;
        }

     

        if(user.term===false){
            window.alert("please accept term and condition");
            return false;
        }
        window.alert(JSON.stringify(user));
    }

  return (
    <div>
        <h2>This is form validation component</h2>
        <form onSubmit={checkData}>
            <div>
                <label>Enter your FirstName:</label>
                <input type='text' name='fname' onChange={changeInput} value={user.fname} />
            </div>

            <div>
                <label>Enter your Password:</label>
                <input type='text' name='fpass' onChange={changeInput} value={user.fpass} />
            </div>

            <div>
                <label>enter your email:</label>
                <input type='txt' name='fmail' onChange={changeInput} value={user.fmail}/>
            </div>

            <div>
                <label>enter your contact:</label>
                <input type='tel' name='fcontact' onChange={changeInput} value={user.fcontact}/>
            </div>

            <div>
                <label>select your course</label>
                <select name='course' onChange={changeInput}>
                    <option value=''>select your course</option>
                    {
                        mycourse.map((val,index)=>{
                            return <option value={val} key={index}>{val}</option>

                        })
                    }
                </select>
            </div>

            <div>
                <input type='checkbox' name='term' onChange={changeInput} value={user.term} />Accept the terms and condition
            </div>

            <button type='submit' >Submit</button>
        </form>
    </div>
  )
}

export default FormTaskComp