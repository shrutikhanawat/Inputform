import useInput from "../hooks/use-input";
const isNotEmpty = (value)=> value.trim() !== '';
 const isEmail = (value)=> value.includes('@');
const BasicForm = (props) => {
 const {
   value:firstNameValue,
   hasError:firstNameHasError,
   isValid:firstNameIsValid,
   valueChangeHandler:firstNameChangedHandler,
   InputBlurHandler:firstNameBlurHandler,
   reset:resetFirstName
 } = useInput(isNotEmpty);
 const {
  value:lastNameValue,
  hasError:lastNameHasError,

  isValid:lastNameIsValid,
  valueChangeHandler:lastNameChangedHandler,
  InputBlurHandler:lastNameBlurHandler,
  reset:resetLastName
} =
 useInput(isNotEmpty);
 const {
  value:emailValue,
  hasError:emailHasError,

  isValid:emailIsValid,
  valueChangeHandler:emailChangedHandler,
  InputBlurHandler:emailBlurHandler,
  reset:resetemail
}= 
 useInput(isEmail);

 let formIsValid = false;

 if(firstNameIsValid && lastNameIsValid && emailIsValid){
   formIsValid = true;
 }
 const submitHandler= event =>{
event.preventDefault();
  if(!formIsValid){
    return;
  }
  console.log('submitted');
  console.log(firstNameValue, lastNameValue,emailValue);
   resetFirstName();
   resetLastName();
   resetemail();
 };
 const firstNameClasses = firstNameHasError ? 'form-control-invalid': 'form-control';
 const lastNameClasses = lastNameHasError ? 'form-control-invalid': 'form-control';
 const emailClasses = emailHasError ? 'form-control-invalid': 'form-control';


  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name'
          value = {firstNameValue}
          onChange= {firstNameChangedHandler}
          onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (<p className="error-text">Please enter a firstname</p>)}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name'
          value={lastNameValue} 
          onChange={lastNameChangedHandler}
          onBlur= {lastNameBlurHandler}
          />
       {lastNameHasError && (<p className="error-text">Please enter a lastname</p>)}

        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name'
        value={emailValue} 
        onChange={emailChangedHandler}
        onBlur={emailBlurHandler}
        />
      {emailHasError && (<p className="error-text">Please enter a valid email address</p>)}

      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
