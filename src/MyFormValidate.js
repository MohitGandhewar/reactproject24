
function MyFormValidate(){


    const[fullName,setFullName]=React.useState('')
    const[email,setEmail]=React.useState('')
    const[password,setPassword]=React.useState('')

    const errorObj={
        fullName:'',
        email:'',
        password:''
    }

    const[errors,setErrors]=React.useState(errorObj)

    const validateInput=(event)=>{

            event.preventDefault()

          const {name , value}=event.target

        //   const name=event.target.name
        //   const value=event.target.value

          let checkError

          switch(name){
              case 'fullName':
                    checkError= value.length < 6 ? 'Invalid FullName':''
                    console.log(checkError);
                    break;

              case 'email':
                    checkError= value.length < 6 ? 'Invalid Email':''
                    console.log(checkError);
                    break;
                    
              case 'password':
                    checkError=value.length <6 ? 'Invalid Password':''
                    console.log(checkError);
                    break;
                    
              default:
                  break;      
          }
    }

    return(
        <div>

            <form onSubmit={sendData}>
                <div>
                    <label> Full Name : </label>
                    <input type='text' name='fullName' onChange={validateInput}/>
                    { errors.fullName.length > 0}
                </div>

                <div>
                    <label> Email : </label>
                    <input type='email' name='email' onChange={validateInput}/>
                    { errors.email.length > 0 }
                </div>

                <div>
                    <label> Password : </label>
                    <input type='password' name='password' onChange={validateInput}/>
                    { errors.email.length > 0}
                </div>

                <input type='submit' value='Submit'/>

            </form>
        </div>
    )
     
}