import React from 'react'
import { useFormik } from 'formik';
import Select from 'react-select'
import { convert_array_to_object_for_dropdown_data_not_for_llama_form, utils_data_for_form } from '../../lib/utils';
import "../ComponentTwo.css"

const option_type_of_loss= convert_array_to_object_for_dropdown_data_not_for_llama_form(utils_data_for_form.type_of_loss)
const option_carrier_name = convert_array_to_object_for_dropdown_data_not_for_llama_form(utils_data_for_form.carrier_name)


const TypeOfLoss = ({
    setTypeOfLoss,
    setCarrierName,
    setClaimAdjuster,
    setClaimNumber,
    setPolicyNumber,
    claimAdjuster,
    claimNumber,
    policyNumber
}) => {
    const customStyles = utils_data_for_form.dropdown_style;

    const handle_loss_change = (data) => {
        console.log({data})
        setTypeOfLoss(data.label)
    }

    const handle_carrier_change = (data) => {
        console.log({data})
        setCarrierName(data.label)
    }

    const handle_claim_adjuster_change = (data) => {
        console.log({data})
        setClaimAdjuster(data.target.value)
    }

    const handle_claim_number_change = (data) => {
        console.log({data})
        setClaimNumber(data.target.value)
    }

    const handle_policy_number_change = (data) => {
        console.log({data})
        setPolicyNumber(data.target.value)
    }
    
    return (
        <>
            <div  className="type-loss-form">
            {/* <p style={{ display: "flex", padding: "0", margin: "0", alignItems: "center", marginLeft: "1rem", marginBottom: "1rem" }}><strong>Type of Loss:</strong></p> */}
                
                <div className="type-loss-2">
                    <div className='type-loss-column-2'>
                        <div className='type-loss-2-label'>
                            <label htmlFor="country">Type of Loss:</label>
                        </div>
                        <div className='type-loss-2-dropdown'>
                            <Select options={option_type_of_loss} onChange={handle_loss_change} styles={customStyles} />
                        </div>
                    </div>
                    <div className='type-loss-column-2'>
                        <div className='type-loss-2-label'>
                            <label htmlFor="province">Carrier Name:</label>
                        </div>
                        <div className='type-loss-2-dropdown'>
                            <Select options={option_carrier_name} onChange={handle_carrier_change} styles={customStyles} />
                        </div>
                    </div>
                </div>

                <div className="loss-row-1">
                    <div className="loss-column-1">
                        <label htmlFor="name">Claim Adjuster:</label>
                        <input
                            type="text"
                            id="adjuster"
                            name="adjuster"
                            onChange={handle_claim_adjuster_change}
                            value={claimAdjuster}
                        />
                    </div>

                    <div className="loss-column-1">
                        <label htmlFor="phoneNumber">Claim Number:</label>
                        <input
                            type="text"
                            id="number"
                            name="number"
                            onChange={handle_claim_number_change}
                            value={claimNumber}
                        />
                    </div>
                </div>

                <div className="loss-row-3">
                    <div className='loss-column-3'>
                        <label htmlFor="postal">Policy Number:</label>
                        <input
                            type="text"
                            id="policyNumber"
                            name="policyNumber"
                            onChange={handle_policy_number_change}
                            value={policyNumber}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TypeOfLoss
