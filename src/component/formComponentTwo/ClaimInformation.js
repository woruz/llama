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
    postalCode
}) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            phoneNumber: '',
            lossAddress: '',
        },
        onSubmit: (values) => {
            console.log('Form data:', values);
            setEmail(values.email)
            setLossAddress(values.lossAddress)
            setName(values.name)
            setPhonenumber(values.phoneNumber)
            setPostalCode(values.postal)
        },
    });

    const handle_countries_change = (data) => {
        console.log({data})
        setCountry(data.label)
    }

    const handle_province_change = (data) => {
        console.log({data})
        setProvince(data.label)
    }
    
    return (
        <>
            <form onSubmit={formik.handleSubmit} className="claim-information-form">
            <p style={{ display: "flex", padding: "0", margin: "0", alignItems: "center", marginLeft: "1rem", marginBottom: "1rem", color: "#1B2559" }}><strong>Claim Information</strong></p>
                <div className="form-row-1">
                    <div className="form-column-1">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                    </div>

                    <div className="form-column-1">
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            onChange={formik.handleChange}
                            value={formik.values.phoneNumber}
                        />
                    </div>
                </div>

                <div className="form-row-1">
                    <div className="form-column-1">
                        <label htmlFor="name">Email:</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                    </div>
                    <div className="form-column-1">
                        <label htmlFor="lossAddress">Loss Address:</label>
                        <input
                            type="text"
                            id="lossAddress"
                            name="lossAddress"
                            onChange={formik.handleChange}
                            value={formik.values.lossAddress}
                        />
                    </div>
                </div>

                <div className="form-row-2">
                    <div className='form-column-2'>
                        <div className='form-row-2-label'>
                            <label htmlFor="country">Country:</label>
                        </div>
                        <div className='form-row-2-dropdown'>
                            <Select options={option_countries} onChange={handle_countries_change} />
                        </div>
                    </div>
                    <div className='form-column-2'>
                        <div className='form-row-2-label'>
                            <label htmlFor="province">Province:</label>
                        </div>
                        <div className='form-row-2-dropdown'>
                            <Select options={option_province} onChange={handle_province_change} />
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
                            onChange={formik.handleChange}
                            value={formik.values.postal}
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

export default ClaimInformation
