import React from 'react'
import Button from './button'

const ThreeSteps = React.forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <h2 className="text-secondary font-normal text-center">Getting Started</h2>
            <div className="flex flex-col lg:flex-row justify-center text-center">
                <div className="flex flex-col items-center mx-2 lg:w-1/2 px-12">
                    <p className="rounded-full h-10 w-10 flex items-center justify-center border border-secondary">1</p>
                    <h3 className="uppercase">explore your options</h3>
                    <p>We show you everything you want to know about your loan <strong>before</strong> you apply</p>
                </div>
                <div className="flex flex-col items-center mx-2 lg:w-1/3">
                    <p className="rounded-full h-10 w-10 flex items-center justify-center border border-secondary">2</p>
                    <h3 className="uppercase">select your campus</h3>
                    <p>Choose from one of five Metis locations including Chicago, Seattle, New York City, San Francisco, and Singapore.</p>
                </div>
                <div className="flex flex-col items-center mx-2 lg:w-1/2 px-12">
                    <p className="rounded-full h-10 w-10 flex items-center justify-center border border-secondary">3</p>
                    <h3 className="uppercase">apply for funding!</h3>
                    <p className="m-0">You'll be on your way to an exciting career in tech as part of Metis' powerful network.</p>
                    <Button
                        buttonClassName="uppercase bg-primary p-3 rounded-full shadow-lg text-white"
                        divClassName="flex justify-center mt-5"
                        text="apply now"
                        onClick={props.onClick}
                    /> 
                </div>
            </div>
        </div>
    )
})

export default ThreeSteps