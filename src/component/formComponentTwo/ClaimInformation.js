import React from 'react'
import { useFormik } from 'formik';
import Select from 'react-select'
import { convert_array_to_object_for_dropdown_data_not_for_llama_form, utils_data_for_form } from '../../lib/utils';
import "../ComponentTwo.css"

const option_countries = convert_array_to_object_for_dropdown_data_not_for_llama_form(utils_data_for_form.countries)
const option_province = convert_array_to_object_for_dropdown_data_not_for_llama_form(utils_data_for_form.canada_provinces)


const ClaimInformation = ({
    setName,
    setPhonenumber,
    setEmail,
    setLossAddress,
    setCountry,
    setProvince,
    setPostalCode,
    name,
    phoneNumber,
    email,
    lossAddress,
    country,
    province,
    postalCode,
    setLoading,
    setComponentName
}) => {

    const customStyles = utils_data_for_form.dropdown_style;

    const handle_countries_change = (data) => {
        setCountry(data.label)
    }

    const handle_province_change = (data) => {
        setProvince(data.label)
    }

    const handle_name_change = (data) => {
        setName(data.target.value)
    }

    const handle_phone_number_change = (data) => {
        setPhonenumber(data.target.value)
    }

    const handle_email_change = (data) => {
        setEmail(data.target.value)
    }

    const handle_loss_address_change = (data) => {
        setLossAddress(data.target.value)
    }

    const handle_postal_code_change = (data) => {
        setPostalCode(data.target.value)
    }
    
    return (
        <>
            <div className="claim-information-form">
                <p style={{ display: "flex", padding: "0", margin: "0", alignItems: "center", marginLeft: "1rem", marginBottom: "1rem", color: "#1B2559" }}><strong>Claim Information</strong></p>
                <div className="form-row-1">
                    <div className="form-column-1">
                        <label style={{width: "10%"}} htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            onChange={handle_name_change}
                            value={name}
                            placeholder='Type here'
                        />
                    </div>

                    <div className="form-column-1">
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            onChange={handle_phone_number_change}
                            value={phoneNumber}
                            placeholder='Type here'
                        />
                    </div>
                </div>

                <div className="form-row-1">
                    <div className="form-column-1">
                        <label style={{width: "10%"}} htmlFor="name">Email:</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            onChange={handle_email_change}
                            value={email}
                            placeholder='Type here'
                        />
                    </div>
                    <div className="form-column-1">
                        <label htmlFor="lossAddress">Loss Address:</label>
                        <input
                            type="text"
                            id="lossAddress"
                            name="lossAddress"
                            onChange={handle_loss_address_change}
                            value={lossAddress}
                            placeholder='Type here'
                        />
                    </div>
                </div>

                <div className="form-row-2">
                    <div className='form-column-2'>
                        <div className='form-row-2-label'>
                            <label htmlFor="country">Country:</label>
                        </div>
                        <div className='form-row-2-dropdown'>
                            <Select options={option_countries} onChange={handle_countries_change} styles={customStyles} />
                        </div>
                    </div>
                    <div className='form-column-2'>
                        <div className='form-row-2-label'>
                            <label htmlFor="province">Province:</label>
                        </div>
                        <div className='form-row-2-dropdown'>
                            <Select options={option_province} onChange={handle_province_change} styles={customStyles} />
                        </div>
                    </div>
                </div>

                <div className="form-row-3">
                    <div className='form-column-3'>
                        <label htmlFor="postal">Postal Code:</label>
                        <input
                            type="text"
                            id="postal"
                            name="postal"
                            onChange={handle_postal_code_change}
                            value={postalCode}
                            placeholder='Type here'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClaimInformation
