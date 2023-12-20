import { BucketCircle, Edit2, ProfileCircle } from 'iconsax-react'
import React, { useEffect, useState } from 'react'
import A1DropDown from './formComponentTwo/A1DropDown'
import './ComponentTwo.css'
import A2DropDown from './formComponentTwo/A2DropDown'
import ClaimInformation from './formComponentTwo/ClaimInformation'
import TypeOfLoss from './formComponentTwo/TypeOfLoss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import GeneralInformation from './formComponentTwo/GeneralInformation'
import Sidebar from './Sidebar'
import { Player } from '@lottiefiles/react-lottie-player';

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
    const [typeOfLoss, setTypeOfLoss] = useState()
    const [carrierName, setCarrierName] = useState()
    const [claimAdjuster, setClaimAdjuster] = useState()
    const [claimNumber, setClaimNumber] = useState()
    const [policyNumber, setPolicyNumber] = useState()
    const [claimInformation, setClaimInformation] = useState(false)
    const [lossForm, setLossForm] = useState(false)
    const [generalInformation, setGeneralInformation] = useState()
    const [loading, setLoading] = useState(false)
    const [componentName, setComponentName] = useState()


    useEffect(() => {
        if(name && phoneNumber && email && lossAddress && country && province && postalCode){
            console.log("I am here")
            setComponentName("ClaimInformation")
            setLoading(true)
            setTimeout(() => {
                setClaimInformation(true)
                setLoading(false)
            },1000)
        }else{
            console.log("I am not here")
            setTimeout(() => {
                setClaimInformation(false)
            }, 1000);
        }
    },[name,phoneNumber,email,lossAddress,country,province,postalCode])

    useEffect(() => {
        if(typeOfLoss && carrierName && claimAdjuster && claimNumber && policyNumber){
            setComponentName("TypeOfLoss")
            setLoading(true)
            setTimeout(() => {
                setLossForm(true)
                setLoading(false)
            }, 1000);
        }else{
            setTimeout(() => {
                setLossForm(false)
            }, 1000);
        }
    },[typeOfLoss, carrierName, claimAdjuster, claimNumber, policyNumber])

    console.log({claimInformation})

    return (
        <Sidebar >
            <div style={{ width: "70%" }}>
                <div style={{ width: "100%", display: "flex" }}>
                    <BucketCircle
                        size="32"
                        color="#ba68c8"
                        variant="Bold"
                        style={{ marginRight: "1rem" }}
                    />

                    <div className='dropdown-header' style={{ width: "100%", display: "flex", justifyContent: "space-between", border: "1px solid #E2E8F0", borderRadius: "5px" }}>
                        <p style={{ display: "flex", padding: "0", margin: "0", alignItems: "center", marginLeft: "1rem", color: "#1B2559", fontWeight: 500 }}>Lets begin the survey,<strong style={{ fontWeight: 800, fontSize: "16px" }}>Your Information</strong></p>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingRight: "1rem" }}>
                            {/* <FontAwesomeIcon icon={faPen} /> */}
                        </div>
                    </div>
                </div>
                <div className='a1-dropdown-container' style={{ width: "100%", display: "flex", marginTop: "2rem", gap: "1rem", marginLeft: "5rem" }}>
                    <div className='a1-dropdown' style={{ width: "100%", height: "100%" }}>
                        <A1DropDown setA1Dropdown={setA1Dropdown} setLoading={setLoading} setComponentName={setComponentName} />
                    </div>
                    <ProfileCircle
                        size="32"
                        color="#2ccce4"
                        variant="Bold"
                        style={{ marginRight: "1rem" }}
                    />
                </div>

                {(a1Dropdown || componentName == "A1Dropdown") && <div style={{ width: "100%", display: "flex", marginTop: "2rem" }}>
                    <BucketCircle
                        size="32"
                        color="#ba68c8"
                        variant="Bold"
                        style={{ marginRight: "1rem" }}
                    />
                    <div className='dropdown-header' style={{ width: "100%", display: "flex", justifyContent: "space-between", border: "1px solid #E2E8F0", borderRadius: "5px" }}>
                        {loading && componentName == 'A1Dropdown' ? <div style={{ height: "1rem", width: "2rem" }}><Player
                            src='https://lottie.host/9f20b063-66b0-4f8e-8fdf-aabdce9d42d8/K29Ig2Mf5Q.json'
                            className="player"
                            loop
                            autoplay
                        /></div> : <p style={{ display: "flex", padding: "0", margin: "0", alignItems: "center", marginLeft: "1rem", color: "#1B2559", fontWeight: 500 }}>Choose Requester Name:</p>}
                    </div>
                </div>}

                {a1Dropdown && <div className='a2-dropdown-container' style={{ width: "100%", display: "flex", gap: "1rem", marginTop: "2rem", marginLeft: "5rem" }}>
                    <div className='a2-dropdown' style={{ width: "100%", height: "100%" }}>
                        <A2DropDown setA2Dropdown={setA2Dropdown} setLoading={setLoading} setComponentName={setComponentName}/>
                    </div>
                    <ProfileCircle
                        size="32"
                        color="#2ccce4"
                        variant="Bold"
                        style={{ marginRight: "1rem" }}
                    />
                </div>}


                {(componentName == 'A2Dropdown' || a2Dropdown) && <div style={{ width: "100%", display: "flex", marginTop: "2rem" }}>
                    <BucketCircle
                        size="32"
                        color="#ba68c8"
                        variant="Bold"
                        style={{ marginRight: "1rem" }}
                    />
                    <div className='dropdown-header' style={{ width: "100%", display: "flex", justifyContent: "space-between", border: "1px solid #E2E8F0", borderRadius: "5px" }}>
                        {loading && componentName == 'A2Dropdown' ? <div style={{ height: "1rem", width: "2rem" }}><Player
                            src='https://lottie.host/9f20b063-66b0-4f8e-8fdf-aabdce9d42d8/K29Ig2Mf5Q.json'
                            className="player"
                            loop
                            autoplay
                        /></div> : <p style={{ display: "flex", padding: "0", margin: "0", alignItems: "center", marginLeft: "1rem", color: "#1B2559", fontWeight: 500 }}>Add some more information here,<strong>Claim Information</strong></p>}
                    </div>
                </div>}

                {a2Dropdown && <div className='a2-dropdown-container' style={{ width: "100%", display: "flex", gap: "1rem", marginTop: "2rem", marginLeft: "5rem" }}>

                    <div className='a2-dropdown' style={{ width: "100%", height: "100%" }}>
                        <ClaimInformation name={name} phoneNumber={phoneNumber} email={email} lossAddress={lossAddress} country={country} province={province} postalCode={postalCode} setName={setName} setPhonenumber={setPhonenumber} setEmail={setEmail} setLossAddress={setLossAddress} setCountry={setCountry} setProvince={setProvince} setPostalCode={setPostalCode} />
                    </div>
                    <ProfileCircle
                        size="32"
                        color="#2ccce4"
                        variant="Bold"
                        style={{ marginRight: "1rem" }}
                    />
                </div>}

                {(claimInformation || componentName == 'ClaimInformation') && <div style={{ width: "100%", display: "flex", marginTop: "2rem" }}>
                    <BucketCircle
                        size="32"
                        color="#ba68c8"
                        variant="Bold"
                        style={{ marginRight: "1rem" }}
                    />
                    <div className='dropdown-header' style={{ width: "100%", display: "flex", justifyContent: "space-between", border: "1px solid #E2E8F0", borderRadius: "5px" }}>
                    {loading && componentName == 'ClaimInformation' ? <div style={{ height: "1rem", width: "2rem" }}><Player
                            src='https://lottie.host/9f20b063-66b0-4f8e-8fdf-aabdce9d42d8/K29Ig2Mf5Q.json'
                            className="player"
                            loop
                            autoplay
                        /></div> : <p style={{ display: "flex", padding: "0", margin: "0", alignItems: "center", marginLeft: "1rem", color: "#1B2559", fontWeight: 500 }}>Add details about,<strong>Type of Loss</strong></p>}
                    </div>
                </div>}

                {claimInformation && <div className='a2-dropdown-container' style={{ width: "100%", display: "flex", gap: "1rem", marginTop: "2rem", marginLeft: "5rem" }}>

                    <div className='a2-dropdown' style={{ width: "100%", height: "100%" }}>
                        <TypeOfLoss setTypeOfLoss={setTypeOfLoss} setCarrierName={setCarrierName} setClaimAdjuster={setClaimAdjuster} setClaimNumber={setClaimNumber} setPolicyNumber={setPolicyNumber} claimAdjuster={claimAdjuster} claimNumber={claimNumber} policyNumber={policyNumber} />
                    </div>
                    <ProfileCircle
                        size="32"
                        color="#2ccce4"
                        variant="Bold"
                        style={{ marginRight: "1rem" }}
                    />
                </div>}

                {(lossForm || componentName == 'TypeOfLoss') && <div style={{ width: "100%", display: "flex", marginTop: "2rem" }}>
                    <BucketCircle
                        size="32"
                        color="#ba68c8"
                        variant="Bold"
                        style={{ marginRight: "1rem" }}
                    />
                    <div className='dropdown-header' style={{ width: "100%", display: "flex", justifyContent: "space-between", border: "1px solid #E2E8F0", borderRadius: "5px" }}>
                    {loading && componentName == 'TypeOfLoss' ? <div style={{ height: "1rem", width: "2rem" }}><Player
                            src='https://lottie.host/9f20b063-66b0-4f8e-8fdf-aabdce9d42d8/K29Ig2Mf5Q.json'
                            className="player"
                            loop
                            autoplay
                        /></div> : <p style={{ display: "flex", padding: "0", margin: "0", alignItems: "center", marginLeft: "1rem", color: "#1B2559", fontWeight: 500 }}>Add details on,<strong>General Information</strong></p>}
                    </div>
                </div>}

                {lossForm && <div className='a2-dropdown-container' style={{ width: "100%", display: "flex", gap: "1rem", marginTop: "2rem", marginLeft: "5rem" }}>

                    <div className='a2-dropdown' style={{ width: "100%", height: "100%" }}>
                        <GeneralInformation />
                    </div>
                    <ProfileCircle
                        size="32"
                        color="#2ccce4"
                        variant="Bold"
                        style={{ marginRight: "1rem" }}
                    />
                </div>}

            </div>
        </Sidebar>
    )
}

export default FormTwo