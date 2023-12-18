import LlamaForm from 'llama-forms-react'
import React from 'react'
import { convert_array_to_object_for_dropdown_data, utils_data_for_form } from '../../lib/utils';

const A2DropDown = ({ setA2Dropdown }) => {
    const handle_a2_dropdown = (data) => {
        const { requester_name } = data

        requester_name && setA2Dropdown(requester_name)
    }
    return (
        <LlamaForm
            schema={{
                type: 'object',
                // description: 'Requester Name:',
                wizard: false,
                properties: {
                    requester_name: {
                        type: 'string',
                        required: true,
                        enum: convert_array_to_object_for_dropdown_data(utils_data_for_form.requester_name),
                    },
                }
            }}

            options={{
                type: 'object',
                fields: {
                    requester_name: {
                        type: "dropdown",
                        label: "Requester Name:",
                        // description: "Select Your Requester Name",
                        // placeholder: "Select Your Requester Name",
                        autofocus: true,
                        readOnly: false,
                    },
                }
            }}

            onSubmit={handle_a2_dropdown}
        />
    )
}

export default A2DropDown
