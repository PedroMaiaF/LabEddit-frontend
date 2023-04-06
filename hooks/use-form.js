import { useState } from 'react';

export const  useForm = (initilState)=>{

    const [form, setForm] = useState(initilState)

    const onChangeInputs = (event)=>{
       const{name,value} = event.target
       setForm({...form,[name]:value})
    }

    const clearInputs = () =>{
        setForm(initilState)
    }
    return [form,onChangeInputs,clearInputs]


}