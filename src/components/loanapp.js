import React from 'react'
import HubspotForm from 'react-hubspot-form'
import marching from '../images/PeopleMarchColor.png'

const LoanApp = () => {
    return (
        <div className="flex flex-col items-center justify-center py-8 mx-2 lg:mx-10 rounded shadow-xl">
            <h3 className="uppercase">apply for funding</h3>
            <div className="flex justify-center">
                <img className="w-auto" src={marching} alt="People marching and carrying flags" />
            </div>
            <HubspotForm
                portalId='3871135'
                formId='373d1cf3-11e4-4798-be11-65ad5b5619a6'
            />
        </div>
    )
}

export default LoanApp