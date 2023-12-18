import LlamaForm from 'llama-forms-react'
import React from 'react'
import { convert_array_to_object_for_dropdown_data, utils_data_for_form } from '../../lib/utils';

const GeneralInformation = ({ setGeneralInformation }) => {

    const handle_general_information = (data) => {
        data && setGeneralInformation(data)
    }
    return (
        <LlamaForm
            schema={{
                type: 'object',
                wizard: false,
                properties: {
                    type_of_request: {
                        type: 'string',
                        required: true,
                        enum: convert_array_to_object_for_dropdown_data(utils_data_for_form.type_of_request),
                    },
                    outside_of_service_area: {
                        type: 'checkbox',
                        required: true,
                        enum: convert_array_to_object_for_dropdown_data(utils_data_for_form.outside_service_area),
                    },
                    emergency_profit: {
                        type: 'string',
                        required: true,
                        enum: convert_array_to_object_for_dropdown_data(utils_data_for_form.percentages),
                    },
                    emergency_overhead: {
                        type: 'string',
                        required: true,
                        enum: convert_array_to_object_for_dropdown_data(utils_data_for_form.percentages),
                    },
                    reconstruction_profit: {
                        type: 'string',
                        required: true,
                        enum: convert_array_to_object_for_dropdown_data(utils_data_for_form.percentages),
                    },
                    reconstruction_overhead: {
                        type: 'string',
                        required: true,
                        enum: convert_array_to_object_for_dropdown_data(utils_data_for_form.percentages),
                    },
                }
            }}

            options={{
                type: 'object',
                fields: {
                    type_of_request: {
                        type: "dropdown",
                        label: "Type of Request:",
                        // description: "Select Your Requester Name",
                        // placeholder: "Select Your Requester Name",
                        autofocus: true,
                        readOnly: false,
                    },
                    outside_of_service_area: {
                        type: "dropdown",
                        label: "Outside of Service Area?:",
                        // description: "Select Your Requester Name",
                        // placeholder: "Select Your Requester Name",
                        autofocus: true,
                        readOnly: false,
                    },
                    emergency_profit: {
                        type: "dropdown",
                        label: "Emergency Profit:",
                        // description: "Select Your Requester Name",
                        // placeholder: "Select Your Requester Name",
                        autofocus: true,
                        readOnly: false,
                    },
                    emergency_overhead: {
                        type: "dropdown",
                        label: "Emergency Overhead:",
                        // description: "Select Your Requester Name",
                        // placeholder: "Select Your Requester Name",
                        autofocus: true,
                        readOnly: false,
                    },
                    reconstruction_profit: {
                        type: "dropdown",
                        label: "Reconstruction Profit %:",
                        // description: "Select Your Requester Name",
                        // placeholder: "Select Your Requester Name",
                        autofocus: true,
                        readOnly: false,
                    },
                    reconstruction_overhead: {
                        type: "dropdown",
                        label: "Reconstruction Overhead %:",
                        // description: "Select Your Requester Name",
                        // placeholder: "Select Your Requester Name",
                        autofocus: true,
                        readOnly: false,
                    }
                }
            }}

            onSubmit={handle_general_information}
        />
    )
}

export default GeneralInformation
