import React, { useEffect, useRef, useState } from 'react'
import { useForm } from '../hooks/customHook'

export const FormuComponent = () => {


    const focusRef=useRef()

    useEffect(()=>{
        focusRef.current.focus()
    },[onload])

    const initialForm={
        email:"",
        pass:""
    }

    const {formState,email,pass,onInputChange}=useForm(initialForm)
    const onSubmit=(event)=>{
        event.preventDefault()
        console.log(formState)
    }
  return (
    <form onSubmit={onSubmit}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input ref={focusRef} type="email" className="form-control" id="exampleInputEmail1" onChange={onInputChange} value={formState.email} name='email'/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={onInputChange} value={formState.pass} name='pass'/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  )
}
