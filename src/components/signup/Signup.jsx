import React from 'react'
import { useForm } from "react-hook-form";
import {Helmet} from "react-helmet";
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Signup.css'
import appleBtn from './imgs/apple-btn.svg';

function Signup(props) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    const response = await fetch('http://localhost:3000/api/v1/signup', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((data) => data.json())
  
  console.log(response)
};

  console.log(watch("email"));

  const classTerms = classNames(
    'Signup-form__terms', 
    {'Signup-form__terms--error' : errors.che}
    )

  return (
   
    <div className="Signup-form"> 
      <Helmet>
        <style>
          {`
          body {
            background-image: url(./imgs/background.jpg);
            /* background-position: center; */
            background-size: cover;
        }
          `}
        </style>
      </Helmet>
      <form>
        <header className="Signup-form__header">
          <a href="#" className="Signup-form__logo">
            <img src="/imgs/logo2.svg" alt="logo" />
          </a>
          <div className="Signup-form__header-text">
            <h1 className="Signup-form__h1">Sign Up</h1>
          </div>
        </header>
        <div className="Signup-form__content">
          <a className="Signup-form__auth-btn" href="#">
            <img className="Signup-form__auth-btn-logo" src="/imgs/google-btn.svg" />
            Continue with Google
          </a>
          <a className="Signup-form__auth-btn" href="#">
            <img className="Signup-form__auth-btn-logo" src="/imgs/facebook-btn.svg" />
            Continue with Facebook
          </a>
          {/* <a className="Signup-form__auth-btn" href="#">
            <img className="Signup-form__auth-btn-logo" src={appleBtn} />
            Continue with Apple
          </a> */}

          <div className="Signup-form__separator">
            <div className="Signup-form__separator-label">OR</div>
          </div>

          <div className="Signup-form__input-box">
            <label className="Signup-form__input-label" htmlFor="username">Username</label>

            <input
              className="Signup-form__input"
              type="username"
              placeholder="Enter username"
              {...register("username", { required: true })}
            />

            {errors.email && <div className='Signup-form__errors'>Please enter a valid username address.</div>}
          </div>

          <div className="Signup-form__input-box">
            <label className="Signup-form__input-label" htmlFor="email">Email</label>

            <input
              className="Signup-form__input"
              type="email"
              placeholder="Enter email"
              {...register("email", { required: true })}
            />

            {errors.email && <div className='Signup-form__errors'>Please enter a valid email address.</div>}
          </div>

          <div className="Signup-form__input-box">
            <label className="Signup-form__input-label" htmlFor="password">Password</label>

            <input
              className="Signup-form__input"
              type="password"
              placeholder="Enter password"
              {...register("password", { required: true })}
            />

            {errors.password && <div className='Signup-form__errors'>Please enter a valid password.</div>}
          </div>

          <div className={classTerms}>
            <input className="Signup-form__checkbox" type="checkbox" {...register("che", { required: true })} id="che" />
            <label className="Signup-form__checkbox-label" htmlFor="che">I agree with the <a href="#" className="Signup-form__link">Terms and Conditions</a></label>
            {/* {errors.che && <div className='Signup-form__errors'>Please check it.</div>} */}
          </div>

          <button type="button" className="Signup-form__signup-btn" onClick={handleSubmit(onSubmit)}>Sign Up</button>
          <p className="Signup-form__signin">Already have an account? <a href="#" className="Signup-form__link">Sign In</a></p>
        </div>
      </form>
    </div>
  )
}

Signup.propTypes = {}

export default Signup
