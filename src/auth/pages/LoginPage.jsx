import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import { toast } from 'react-toastify';

import {useForm } from '../../hooks/useForm'
import { AuthContext } from "../context/AuthContext"
import './login.css'

export const LoginPage = () => {
  
  const {login} = useContext(AuthContext)
  const navigate = useNavigate()
  
  const {formState, onInputChange} = useForm({password:''})

  const onLogin = () => {
    
    if (formState.password === 'theforce') {
      const lastPath = localStorage.getItem('lastPath') || '/'
      login('Padawan')

      navigate(lastPath,{
        replace:true
      })
    }
    else {
      toast.error('Use "theforce", young padawan', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }

  const onPasswordClick = () => {
    toast.info('Use the force', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
  
  return (
    <>
    <div className="container mt-5 login p-5 border rounded">
      <div className="row border rounded">
      
        <div className="col-12 col-md-6 border border-dark p-5">
          <div className="">
            <h1 className="display-4 fw-bold">Remember</h1>
            <p className="display-6">"The key is the force"</p>
            <p className="">- Master Admin</p>
          </div>
        </div>

        <div className="col-12 col-md-6 border border-dark p-5">
          <Form.Group className="mb-3">
             <Form.Label>Username</Form.Label>
             <Form.Control placeholder="Disabled input" defaultValue='padawan'  disabled/>
           </Form.Group>
           <Form.Group className="mb-3">
             <Form.Label>Password</Form.Label>
             <Form.Control type="password" name='password' 
             value={formState.password} 
             onChange={onInputChange}
             onClick={onPasswordClick}
             />
           </Form.Group>

           <Button onClick={onLogin}>Login</Button>
        </div>

      </div>
    </div>
   </>
  )
}