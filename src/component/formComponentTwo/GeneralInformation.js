import React from 'react'
import Select from 'react-select'
import "../ComponentTwo.css"
import { convert_array_to_object_for_dropdown_data_not_for_llama_form, utils_data_for_form } from '../../lib/utils';

const option_type_of_request = convert_array_to_object_for_dropdown_data_not_for_llama_form(utils_data_for_form.type_of_request)
const option_percentage = convert_array_to_object_for_dropdown_data_not_for_llama_form(utils_data_for_form.percentages)
const GeneralInformation = () => {

    const customStyles = utils_data_for_form.dropdown_style;
    return (
        <>
            <div  className="type-loss-form">
                <p style={{ display: "flex", padding: "0", margin: "0", alignItems: "center", marginLeft: "1rem", marginBottom: "1rem",color: "#1B2559" }}><strong>General Information</strong></p>
                <div className='general-information-form'>
                    <div className="general-information-side-1">
                        <div className='general-information-column-2'>
                            <div className='general-information-2-label'>
                                <label htmlFor="requestType">Type of Request:</label>
                            </div>
                            <div className='general-information-2-dropdown'>
                                <Select options={option_type_of_request} onChange={""} styles={customStyles} />
                            </div>
                        </div>
                        <div className='general-information-column-2'>
                            <div className='general-information-2-label'>
                                <label htmlFor="emergencyProfit">Emergency Profit %:</label>
                            </div>
                            <div className='general-information-2-dropdown'>
                                <Select options={option_percentage} onChange={""} styles={customStyles} />
                            </div>
                        </div>
                        <div className='general-information-column-2'>
                            <div className='general-information-2-label'>
                                <label htmlFor="reconstructionProfit">Reconstruction Profit %:</label>
                            </div>
                            <div className='general-information-2-dropdown'>
                                <Select options={option_percentage} onChange={""} styles={customStyles} />
                            </div>
                        </div>
                    </div>

                    <div className="general-information-side-2">
                        <div className='general-information-column-2'>
                            <div className='general-information-2-label'>
                                <label htmlFor="country">Outside of Service Area?</label>
                            </div>
                            <div class="radio-group">
                                <label class="radio-container" for="yes">
                                    <input type="radio" id="yes" name="radio-option" class="radio-input" />
                                    <div class="radio-box"></div>
                                    <span class="radio-label">Yes</span>
                                </label>

                                <label class="radio-container" for="no">
                                    <input type="radio" id="no" name="radio-option" class="radio-input" />
                                    <div class="radio-box"></div>
                                    <span class="radio-label">No</span>
                                </label>
                            </div>
                        </div>
                        <div className='general-information-column-2'>
                            <div className='general-information-2-label'>
                                <label htmlFor="province">Emergency Overhead %:</label>
                            </div>
                            <div className='general-information-2-dropdown'>
                                <Select options={option_percentage} onChange={""} styles={customStyles} />
                            </div>
                        </div>
                        <div className='general-information-column-2'>
                            <div className='general-information-2-label'>
                                <label htmlFor="province">Reconstruction Overhead %:</label>
                            </div>
                            <div className='general-information-2-dropdown'>
                                <Select options={option_percentage} onChange={""} styles={customStyles} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GeneralInformation
