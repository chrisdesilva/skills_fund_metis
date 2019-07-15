import React from 'react'
import HubspotForm from 'react-hubspot-form'

const LeadCaptureForm = () => {
    return (
        <div className="mx-10 rounded flex flex-col pt-5 mt-5 justify-center bg-secondary items-center">
            <h3>Get a Head Start</h3>
            <p>We'll send you our step-by-step guide to paying for your program.</p>
            <HubspotForm 
                portalId='3871135'
                formId='cf53efdd-75c1-4db4-bfb8-563885cc7680'
            />
        </div>
    )
}

export default LeadCaptureForm