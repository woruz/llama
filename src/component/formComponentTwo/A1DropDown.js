import React,{useState} from 'react'
import { useForm, Controller } from 'react-hook-form';
import '../ComponentTwo.css'
import { convert_array_to_object_for_dropdown_data_not_for_llama_form, utils_data_for_form } from '../../lib/utils';
import Select from 'react-select'

const options = convert_array_to_object_for_dropdown_data_not_for_llama_form(utils_data_for_form.company_name_or_location)


const A1DropDown = ({setA1Dropdown, setLoading,setComponentName}) => {
  const customStyles = utils_data_for_form.dropdown_style;
  const handle_change = (data) => {
    const {label, value} = data
    setLoading(true)
    setComponentName("A1Dropdown")
    setTimeout(() => {
      setA1Dropdown(label)
      setLoading(false)
    }, 1000);
  }
  
  return (
    <div>
        <div style={{marginBottom: "1rem", display: "flex"}}>
            <p style={{padding: "0", margin: "0", fontWeight: 700, fontSize: "14px", color: "#1B2559", lineHeight: "24px"}}>Company Name/Location:</p>
        </div>
        <div style={{marginBottom: "1rem", width: "20rem"}}>
            <Select options={options} onChange={handle_change} styles={customStyles} />
        </div>
    </div>
  );
}

export default A1DropDown
