import React, { useState } from 'react'

export default function useForm(initialValues,validations={}) {
    const [values,setvalues]=useState(initialValues||{})
    const [errors,setErrors]=useState({});
    const validation=validations
    
    const handleChange=(e)=>{
        let {name,value,files}=e.target;
        value=files?files[0]:value;
        if(typeof(value)!='object'){
            checkValidation(name,value)
        }
        setvalues(v=>({...v,[name]:value}))
        
    }
    const checkValidation=(name,value)=>{
        if(validation[name]){      
            
                if(new RegExp(validation[name]?.matches).test(value)){
                    delete errors[name];
                }
                
                else
                errors[name]=validation[name].message||"invalid input"
                setErrors({...errors})
                
            }
            
    }
    const reset=()=>{
        setvalues(initialValues);
    }
    const myvalidation=(values)=>{
       
        Object.keys(values)?.map(item=>checkValidation(item,values[item]))
    }

    
    const handleSubmit=(callback)=>{
        console.log('errrord')
        console.log(errors)
        if(Object.keys(validation)?.length!==0)
               myvalidation(values)
        if(Object.keys(errors)?.length===0){callback()}
    }
    return (
        {
            values,
            errors,
            handleChange,
            handleSubmit
        }        
    )
}
