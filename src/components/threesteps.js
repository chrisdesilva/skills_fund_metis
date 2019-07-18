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
                    <p>Use the loan calculator below to know exactly what you'll pay <strong>before</strong> you apply. You can borrow up to $15,500 for tuition and $10,000 for cost of living.</p>
                </div>
                <div className="flex flex-col items-center mx-2 lg:w-1/3 px-12 lg:px-0">
                    <p className="rounded-full h-10 w-10 flex items-center justify-center border border-secondary">2</p>
                    <h3 className="uppercase">select your campus</h3>
                    <p>Choose from one of four Metis locations including Chicago, Seattle, New York City, and San Francisco.</p>
                </div>
                <div className="flex flex-col items-center mx-2 lg:w-1/2 px-12">
                    <p className="rounded-full h-10 w-10 flex items-center justify-center border border-secondary">3</p>
                    <h3 className="uppercase">apply for funding!</h3>
                    <p className="m-0">You'll be on your way to an exciting career in tech as part of Metis' powerful network.</p>
                    <Button
                        buttonClassName="uppercase bg-tertiary p-3 rounded-full shadow-lg text-white"
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