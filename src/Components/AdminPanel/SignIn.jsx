import React, { useState, useCallback, useContext } from "react";
import { withRouter, Redirect } from 'react-router'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth'

import "./SignIn-style.css";

import {Button} from '@material-ui/core'

import {auth} from '../../firebase'

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();
    
    // const signIn = useCallback(
    //   async event => {
    //     event.preventDefault();
    //     try{
    //       await auth.signInWithEmailAndPassword(email, password);
    //       history.push("/admin")
    //     }catch(error){
    //         alert(error)
    //     }
    //   }
    // )
    

    const signIn = (event) => {
      event.preventDefault()

      try{
        auth.signInWithEmailAndPassword(email, password)
        history.push('/admin')
      }catch(error){
        alert(error)
      }
    }

  return (
    <div id="signInPage">
      <h1>BELHUNT</h1>
      <form id = 'signInPage__form' action="">
        <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder = 'Email'/>
        <input onChange={(e) => setPassword(e.target.value)} type = 'password' value={password} placeholder = 'Пароль'/>
        <Button onClick={signIn} id='button' variant='contained' color='primary' type='submit'>
          Войти
        </Button>
      </form>
    </div>
  );
}

export default SignIn;
