import LlamaForm from 'llama-forms-react'
import React from 'react'
import { convert_array_to_object_for_dropdown_data, utils_data_for_form } from '../../lib/utils';

const ClaimInformation = ({setClaimInformation}) => {
    const handle_claim_information = (data) => {
        console.log({data})
        data && setClaimInformation(data)
    }

    return (
        <LlamaForm
            schema={{
                type: 'object',
                description: 'Claim Information:',
                wizard: false,
                properties: {
                    name: {
                        type: "string",
                        required: true,
                    },
                    phoneNumber: {
                        type: "string",
                        required: true
                    },
                    email: {
                        type: "string",
                        required: true,
                    },
                    loss_address: {
                        type: "string",
                        required: true,
                    },
                    country: {
                        type: 'string',
                        required: true,
                        enum: convert_array_to_object_for_dropdown_data(utils_data_for_form.countries),
                    },
                    city: {
                        type: 'string',
                        required: true,
                        enum: convert_array_to_object_for_dropdown_data(utils_data_for_form.canada_cites),
                    },
                    province: {
                        type: 'string',
                        required: true,
                        enum: convert_array_to_object_for_dropdown_data(utils_data_for_form.canada_provinces),
                    },
                    postalCode: {
                        type: "string",
                        required: true
                    },
                    type_of_loss: {
                        type: 'string',
                        required: true,
                        enum: convert_array_to_object_for_dropdown_data(utils_data_for_form.type_of_loss),
                    },
                    carrier_name: {
                        type: 'string',
                        required: true,
                        enum: convert_array_to_object_for_dropdown_data(utils_data_for_form.carrier_name),
                    },
                    claim_adjuster: {
                        type: 'string',
                        required: true,
                    },
                    claim_number: {
                        type: 'string',
                        required: true,
                    },
                    policy_number: {
                        type: 'string',
                        required: true,
                    },
                }
            }}

            options={{
                type: 'object',
                fields: {
                    name: {
                        type: "text",
                        label: "Name:",
                        // description: "Select Your Requester Name",
                        // placeholder: "Select Your Requester Name",
                        autofocus: true,
                        readOnly: false,
                    },
                    phoneNumber: {
                        type: "text",
                        label: "Phone Number:",
                        // description: "Select Your Requester Name",
                        // placeholder: "Select Your Requester Name",
                        autofocus: true,
                        readOnly: false,
                    },
                    email: {
                        type: "email",
                        label: "Email:",
                        // description: "Select Your Requester Name",
                        // placeholder: "Select Your Requester Name",
                        autofocus: true,
                        readOnly: false,
                    },
                    loss_address: {
                        type: "text",
                        label: "Loss Address:",
                        // description: "Select Your Requester Name",
                        // placeholder: "Select Your Requester Name",
                        autofocus: true,
                        readOnly: false,
                    },
                    country: {
                        type: "dropdown",
                        label: "Country:",
                        // description: "Select Your Requester Name",
                        // placeholder: "Select Your Requester Name",
                        autofocus: true,
                        readOnly: false,
                    },
                    city: {
                        type: "dropdown",
                        label: "City:",
                        // description: "Select Your Requester Name",
                        // placeholder: "Select Your Requester Name",
                        autofocus: true,
                        readOnly: false,
                    },
                    province: {
                        type: "dropdown",
                        label: "Province:",
                        // description: "Select Your Requester Name",
                        // placeholder: "Select Your Requester Name",
                        autofocus: true,
                        readOnly: false,
                    },
                    postalCode: {
                        type: "text",
                        label: "Postal Code:",
                        // description: "Select Your Requester Name",
                        // placeholder: "Select Your Requester Name",
                        autofocus: true,
                        readOnly: false,
                    },
                    type_of_loss: {
                        type: "dropdown",
                        label: "Type of Loss:",
                        // description: "Select Your Requester Name",
                        // placeholder: "Select Your Requester Name",
                        autofocus: true,
                        readOnly: false,
                    },
                    carrier_name: {
                        type: "dropdown",
                        label: "Carrier Name:",
                        // description: "Select Your Requester Name",
                        // placeholder: "Select Your Requester Name",
                        autofocus: true,
                        readOnly: false,
                    },
                    claim_adjuster: {
                        type: "text",
                        label: "Claim Adjuster:",
                        // description: "Select Your Requester Name",
                        // placeholder: "Select Your Requester Name",
                        autofocus: true,
                        readOnly: false,
                    },
                    claim_number: {
                        type: "text",
                        label: "Claim Number:",
                        // description: "Select Your Requester Name",
                        // placeholder: "Select Your Requester Name",
                        autofocus: true,
                        readOnly: false,
                    },
                    policy_number: {
                        type: "text",
                        label: "Policy Number:",
                        // description: "Select Your Requester Name",
                        // placeholder: "Select Your Requester Name",
                        autofocus: true,
                        readOnly: false,
                    },
                }
            }}

            onSubmit={handle_claim_information}
        />
    )
}

export default ClaimInformation
