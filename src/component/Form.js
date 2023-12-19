import React, { useState } from 'react'

import A1DropDown from './formComponent/A1DropDown';
import A2DropDown from './formComponent/A2DropDown';
import ClaimInformation from './formComponent/ClaimInformation';
import GeneralInformation from './formComponent/GeneralInformation';
import { Edit2, ProfileCircle } from 'iconsax-react';

const Form = () => {
    const [a1Dropdown, setA1Dropdown] = useState()
    const [a2Dropdown, setA2Dropdown] = useState()
    const [claimInformation, setClaimInformation] = useState()
    const [generalInformation, setGeneralInformation] = useState()
    
    return (
        <div style={{ width: "50%", margin: "auto" }}>
            <div style={{width: "100%", display: "flex" }}>
                <ProfileCircle
                    size="32"
                    color="#2ccce4"
                    variant="Bold"
                    style={{marginRight: "1rem"}}
                />
                <div className='dropdown-header' style={{width: "100%", display: "flex", justifyContent: "space-between", border: "1px solid #ccc", borderRadius: "5px"}}>
                    <p style={{ display: "flex", padding: "0", margin: "0", alignItems: "center", marginLeft: "1rem" }}>Lets begin the survey, Your Information</p>
                    <Edit2 size="24" color="#2ccce4" variant="Outline" />
                </div>
            </div>
            <div className='a1-dropdown-container' style={{width: "100%", display: "flex", marginTop: "1rem" }}>
                <ProfileCircle
                    size="32"
                    color="#2ccce4"
                    variant="Bold"
                    style={{marginRight: "1rem"}}
                />
                <div className='a1-dropdown' style={{ width: "100%", height: "100%"}}>
                    <A1DropDown setA1Dropdown={setA1Dropdown}/>
                </div>
            </div>

            {a1Dropdown && <div className='a2-dropdown-container' style={{width: "100%", display: "flex", marginTop: "1rem" }}>
                <ProfileCircle
                    size="32"
                    color="#2ccce4"
                    variant="Bold"
                    style={{marginRight: "1rem"}}
                />
                <div className='a2-dropdown' style={{ width: "100%", height: "100%"}}>
                    <A2DropDown setA2Dropdown={setA2Dropdown}/>
                </div>
            </div>}
            {a2Dropdown && <div className='claim-information-container' style={{width: "100%", display: "flex", marginTop: "1rem" }}>
                <ProfileCircle
                    size="32"
                    color="#2ccce4"
                    variant="Bold"
                    style={{marginRight: "1rem"}}
                />
                <div className='claim-information' style={{ width: "100%", height: "100%"}}>
                    <ClaimInformation setClaimInformation={setClaimInformation}/>
                </div>
            </div>}
            <div>
                {claimInformation && <GeneralInformation setGeneralInformation={setGeneralInformation}/>}
            </div>
        </div>
    )
}

export default Form
