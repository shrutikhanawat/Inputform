import { useState } from "react";
import useInput from "../hooks/use-input";
const SimpleInput = (props) => {
const {
  value:enteredName,
  isValid:enteredNameIsValid,
  hasError:nameInputHasError,
  valueChangeHandler:nameChangeHandler,
  InputBlurHandler:nameBlurHandler,
  reset:resetNameInput}= useInput(value=>value.trim()!=='');
       
  const {
    value:enteredEmail,
    isValid:enteredEmailIsValid,
    hasError:emailInputHasError,
    valueChangeHandler:emailChangeHandler,
    InputBlurHandler:emailBlurHandler,
    reset:resetEmailInput}= useInput(value=>value.includes('@'));
         let formIsValid = false;
         if (enteredNameIsValid && enteredEmailIsValid){
             formIsValid= true;
           }
       
         
    const formSubmissionHandler = event =>{
             event.preventDefault();
             
              if (!enteredNameIsValid){
                       return;
              }
                    console.log(enteredName);
             if (!enteredEmailIsValid){
                   return;
                }
               console.log(enteredEmail);
 
              
            
    
    
               resetNameInput();
               resetEmailInput();

                
   };
     const nameInputClasses = nameInputHasError
        ? 'form-control invalid'
        : 'form-control';
        const EmailInputClasses = emailInputHasError
        ? 'form-control invalid'
        : 'form-control';
  return  (
        <form onSubmit={formSubmissionHandler}>
        <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' 
        onChange ={nameChangeHandler}
        onBlur ={nameBlurHandler}
        value={enteredName} 
        />
        {nameInputHasError && (<p className='error-text'>Name Must not be empty.</p>)}
      </div>
      <div className={EmailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input type='email' id='email' 
        onChange ={emailChangeHandler}
        onBlur ={emailBlurHandler}
        value={enteredEmail} 
        />
        {emailInputHasError && (<p className='error-text'>Entered a valid email.</p>)}
        </div>

      <div className="form-actions">
        <button disabled= {!formIsValid}>Submit</button>
      </div>
    </form>
    
  );
  };
  export default SimpleInput;
