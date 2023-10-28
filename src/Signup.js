import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import {useAuth} from './Context/AuthContext'
import { Link, useNavigate } from "react-router-dom"
import {FacebookLoginButton} from 'react-social-login-buttons';

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const {signup}= useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e){
    e.preventDefault()

    if(passwordRef.current.value !== passwordConfirmRef.current.value){
      return setError('Password do not match')
    }
    try{
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate('/')
    }
    catch(error) {
      
      setError(error.message);
    }
    setLoading(false)
    
  }
  return (
    <div className='container' style={{maxWidth: '40%'}}>
      <Card  className='mt-2'>
        <Card.Body>
          <h2 className='text-center mb-2'>Sign Up</h2>
          {error && <Alert variant ="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id ="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id ="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id ="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className='btn btn-lg btn-dark btn-block w-100' type= " submit">Sign Up</Button>
            <div className='text-center pt-3'><b>
              Or continue with your social account
              </b></div>
            <FacebookLoginButton className="mt-3 mb-3"/> 
          </Form>
        </Card.Body>
      </Card>
        <div className='w-100 text-center mt-2'>
          Already have an account? <Link to="/">Log In</Link>
        </div>
      
    </div>
  )
}
