import React from 'react'
import HubspotForm from 'react-hubspot-form'

const ThreeSteps = React.forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <h2 className="text-secondary font-normal text-center">Funding in 3 Steps</h2>
            <div className="flex flex-col lg:flex-row justify-center text-center">
                <div className="flex flex-col items-center mx-2 lg:w-1/3">
                    <p className="rounded-full h-10 w-10 flex items-center justify-center border border-secondary">1</p>
                    <h3 className="uppercase">explore your options</h3>
                    <p>We show you everything you want to know about your loan <strong>before</strong> you apply</p> 
                </div>
                <div className="flex flex-col items-center mx-2 lg:w-1/3">
                    <p className="rounded-full h-10 w-10 flex items-center justify-center border border-secondary">2</p>
                    <h3 className="uppercase">get notified</h3>
                    <p>We'll send you a message as soon as you can apply.</p>
                    <HubspotForm
                        className="p-0" 
                        portalId="3871135"
                        formId="b6b11b56-324c-45cf-9271-cff426789b2b"
                    />
                </div>
                <div className="flex flex-col items-center mx-2 lg:w-1/3">
                    <p className="rounded-full h-10 w-10 flex items-center justify-center border border-secondary">3</p>
                    <h3 className="uppercase">apply for funding!</h3>
                    <p>You'll be on your way to an exciting career in tech as part of Make School's powerful network.</p> 
                </div>
            </div>
        </div>
    )
})

export default ThreeSteps