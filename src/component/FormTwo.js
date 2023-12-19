import { Edit2, ProfileCircle } from 'iconsax-react'
import React, { useEffect, useState } from 'react'
import A1DropDown from './formComponentTwo/A1DropDown'
import './ComponentTwo.css'
import A2DropDown from './formComponentTwo/A2DropDown'
import ClaimInformation from './formComponentTwo/ClaimInformation'
import TypeOfLoss from './formComponentTwo/TypeOfLoss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

const FormTwo = () => {
    const [a1Dropdown, setA1Dropdown] = useState()
    const [a2Dropdown, setA2Dropdown] = useState()
    const [name, setName] = useState()
    const [phoneNumber, setPhonenumber] = useState()
    const [email, setEmail] = useState()
    const [lossAddress, setLossAddress] = useState()
    const [country, setCountry] = useState()
    const [province, setProvince] = useState()
    const [postalCode, setPostalCode] = useState()
    const [claimInformation, setClaimInformation] = useState(false)
    const [generalInformation, setGeneralInformation] = useState()


    useEffect(() => {
        if(name && phoneNumber && email && lossAddress && country && province && postalCode){
            setClaimInformation(true)
        }else{
            setClaimInformation(false)
        }
    },[name,phoneNumber,email,lossAddress,country,province,postalCode])
    console.log(claimInformation)
    return (
        <div style={{ width: "50%", margin: "auto" }}>
            <div style={{ width: "100%", display: "flex" }}>
                <ProfileCircle
                    size="32"
                    color="#2ccce4"
                    variant="Bold"
                    style={{ marginRight: "1rem" }}
                />
                <div className='dropdown-header' style={{ width: "100%", display: "flex", justifyContent: "space-between", border: "1px solid #ccc", borderRadius: "5px" }}>
                    <p style={{ display: "flex", padding: "0", margin: "0", alignItems: "center", marginLeft: "1rem", color: "#1B2559", fontWeight: 500 }}>Lets begin the survey, <strong style={{fontWeight: 800, fontSize: "16px"}}>Your Information</strong></p>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", paddingRight: "1rem"}}>
                        <FontAwesomeIcon icon={faPen} />
                    </div>
                </div>
            </div>
            <div className='a1-dropdown-container' style={{ width: "100%", display: "flex", marginTop: "2rem", marginLeft: "1rem" }}>
                <ProfileCircle
                    size="32"
                    color="#2ccce4"
                    variant="Bold"
                    style={{ marginRight: "1rem" }}
                />
                <div className='a1-dropdown' style={{ width: "100%", height: "100%" }}>
                    <A1DropDown setA1Dropdown={setA1Dropdown} />
                </div>
            </div>

            {a1Dropdown && <div style={{ width: "100%", display: "flex", marginTop: "2rem" }}>
                <ProfileCircle
                    size="32"
                    color="#2ccce4"
                    variant="Bold"
                    style={{ marginRight: "1rem" }}
                />
                <div className='dropdown-header' style={{ width: "100%", display: "flex", justifyContent: "space-between", border: "1px solid #ccc", borderRadius: "5px" }}>
                    <p style={{ display: "flex", padding: "0", margin: "0", alignItems: "center", marginLeft: "1rem", color: "#1B2559", fontWeight: 500 }}>Choose Requester Name:</p>
                </div>
            </div>}

            {a1Dropdown && <div className='a2-dropdown-container' style={{ width: "100%", display: "flex", marginTop: "2rem", marginLeft: "1rem" }}>
                <ProfileCircle
                    size="32"
                    color="#2ccce4"
                    variant="Bold"
                    style={{ marginRight: "1rem" }}
                />
                <div className='a2-dropdown' style={{ width: "100%", height: "100%" }}>
                    <A2DropDown setA2Dropdown={setA2Dropdown} />
                </div>
            </div>}

            {a2Dropdown && <div style={{ width: "100%", display: "flex", marginTop: "2rem" }}>
                <ProfileCircle
                    size="32"
                    color="#2ccce4"
                    variant="Bold"
                    style={{ marginRight: "1rem" }}
                />
                <div className='dropdown-header' style={{ width: "100%", display: "flex", justifyContent: "space-between", border: "1px solid #ccc", borderRadius: "5px" }}>
                    <p style={{ display: "flex", padding: "0", margin: "0", alignItems: "center", marginLeft: "1rem", color: "#1B2559", fontWeight: 500 }}>Add some more information here,<strong>Claim Information</strong></p>
                </div>
            </div>}

            {a2Dropdown && <div className='a2-dropdown-container' style={{ width: "100%", display: "flex", marginTop: "2rem", marginLeft: "1rem" }}>
                <ProfileCircle
                    size="32"
                    color="#2ccce4"
                    variant="Bold"
                    style={{ marginRight: "1rem" }}
                />
                
                <div className='a2-dropdown' style={{ width: "100%", height: "100%" }}>
                    <ClaimInformation name={name} phoneNumber={phoneNumber} email={email} lossAddress={lossAddress} country={country} province={province} postalCode={postalCode} setName={setName} setPhonenumber={setPhonenumber} setEmail={setEmail} setLossAddress={setLossAddress} setCountry={setCountry} setProvince={setProvince} setPostalCode={setPostalCode} />
                </div>
            </div>}

            {claimInformation && <div style={{ width: "100%", display: "flex", marginTop: "1rem" }}>
                <ProfileCircle
                    size="32"
                    color="#2ccce4"
                    variant="Bold"
                    style={{ marginRight: "1rem" }}
                />
                <div className='dropdown-header' style={{ width: "100%", display: "flex", justifyContent: "space-between", border: "1px solid #ccc", borderRadius: "5px" }}>
                    <p style={{ display: "flex", padding: "0", margin: "0", alignItems: "center", marginLeft: "1rem" }}>Add details about {" "}<strong>Type of Loss</strong></p>
                </div>
            </div>}

            {claimInformation && <div className='a2-dropdown-container' style={{ width: "100%", display: "flex", marginTop: "0.5rem" }}>
                <ProfileCircle
                    size="32"
                    color="#2ccce4"
                    variant="Bold"
                    style={{ marginRight: "1rem" }}
                />
                
                <div className='a2-dropdown' style={{ width: "100%", height: "100%" }}>
                    <TypeOfLoss  />
                </div>
            </div>}

        </div>
    )
}

export default FormTwo

