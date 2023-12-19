import React,{useState} from 'react'
import { useForm, Controller } from 'react-hook-form';
import '../ComponentTwo.css'
import { convert_array_to_object_for_dropdown_data_not_for_llama_form, utils_data_for_form } from '../../lib/utils';
import Select from 'react-select'

const options = convert_array_to_object_for_dropdown_data_not_for_llama_form(utils_data_for_form.requester_name)

const A2DropDown = ({setA2Dropdown}) => {
  const customStyles = utils_data_for_form.dropdown_style;

  const handle_change = (data) => {
    const {label, value} = data
    setA2Dropdown(label)
  }
  
  return (
    <div>
        <div style={{marginBottom: "1rem", display: "flex"}}>
            <p style={{padding: "0", margin: "0", fontWeight: 700, fontSize: "14px", color: "#1B2559", lineHeight: "24px"}}>Requester Name:</p>
        </div>
        <div style={{marginBottom: "1rem", width: "20rem"}}>
            <Select options={options} onChange={handle_change} styles={customStyles} />
        </div>
    </div>
  );
}

export default A2DropDown
