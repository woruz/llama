import React from 'react'
import { useFormik } from 'formik';
import Select from 'react-select'
import { convert_array_to_object_for_dropdown_data_not_for_llama_form, utils_data_for_form } from '../../lib/utils';
import "../ComponentTwo.css"

const option_type_of_loss= convert_array_to_object_for_dropdown_data_not_for_llama_form(utils_data_for_form.type_of_loss)
const option_carrier_name = convert_array_to_object_for_dropdown_data_not_for_llama_form(utils_data_for_form.carrier_name)


const TypeOfLoss = ({
    
}) => {
    const formik = useFormik({
        initialValues: {
           
        },
        onSubmit: (values) => {
            console.log('Form data:', values);
        },
    });

    const handle_loss_change = (data) => {
        console.log({data})
    }

    const handle_carrier_change = (data) => {
        console.log({data})
    }
    
    return (
        <>
            <form onSubmit={formik.handleSubmit} className="type-loss-form">
            <p style={{ display: "flex", padding: "0", margin: "0", alignItems: "center", marginLeft: "1rem", marginBottom: "1rem" }}><strong>Type of Loss</strong></p>
                
                <div className="type-loss-2">
                    <div className='type-loss-column-2'>
                        <div className='type-loss-2-label'>
                            <label htmlFor="country">Type of Loss:</label>
                        </div>
                        <div className='type-loss-2-dropdown'>
                            <Select options={option_type_of_loss} onChange={handle_loss_change} />
                        </div>
                    </div>
                    <div className='type-loss-column-2'>
                        <div className='type-loss-2-label'>
                            <label htmlFor="province">Carrier Name:</label>
                        </div>
                        <div className='type-loss-2-dropdown'>
                            <Select options={option_carrier_name} onChange={handle_carrier_change} />
                        </div>
                    </div>
                </div>

                <div className="form-row-1" style={{marginLeft: "1rem"}}>
                    <div className="form-column-1">
                        <label htmlFor="name">Claim Adjuster:</label>
                        <input
                            type="text"
                            id="adjuster"
                            name="adjuster"
                            onChange={formik.handleChange}
                            value={formik.values.adjuster}
                        />
                    </div>

                    <div className="form-column-1">
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input
                            type="text"
                            id="number"
                            name="number"
                            onChange={formik.handleChange}
                            value={formik.values.number}
                        />
                    </div>
                </div>

                <div className="form-row-3">
                    <div className='form-column-3'>
                        <label htmlFor="postal">Postal Code:</label>
                        <input
                            type="text"
                            id="policyNumber"
                            name="policyNumber"
                            onChange={formik.handleChange}
                            value={formik.values.policyNumber}
                        />
                    </div>
                </div>

                <div className="claim-information-button">
                    {
                        <button type="submit">Submit</button>}
                </div>
            </form>
        </>
    )
}

export default TypeOfLoss
