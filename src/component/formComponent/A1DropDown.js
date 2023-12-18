import LlamaForm from 'llama-forms-react'
import React from 'react'
import { convert_array_to_object_for_dropdown_data, utils_data_for_form } from '../../lib/utils';
import '../Component.css'

const A1DropDown = ({ setA1Dropdown }) => {

    const handle_a1_dropDown = (data) => {
        const { location } = data
        location && setA1Dropdown(location)
    }
    return (
        <LlamaForm
            schema={{
                type: 'object',
                wizard: false,
                properties: {
                    location: {
                        type: 'string',
                        required: true,
                        enum: convert_array_to_object_for_dropdown_data(utils_data_for_form.company_name_or_location),
                    },
                },

            }}

            options={{
                type: 'object',
                fields: {
                    location: {
                        type: "dropdown",
                        label: "Company Name/Location:",
                        autofocus: true,
                        readOnly: false,
                    },
                }
            }}

            onSubmit={handle_a1_dropDown}
        />
    )
}

export default A1DropDown
