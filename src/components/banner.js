import React from "react"
import banner from "../images/metis_hero.png"
import Button from "./button"

const Banner = props => (
    <div>
        <div className="bg-cover text-white flex flex-col justify-center items-center relative z-0" style={{backgroundImage: `url(${banner})`, height: '25rem'}} id="banner">

            <h2 className="text-3xl lg:text-4xl font-normal text-center mb-5 mt-24">Experience Immersive Data Science Instruction at Metis</h2>
            <h3 className="text-base lg:text-xl font-light text-center">Know exactly what you'll pay with Skills Fund</h3>
            <div className="flex flex-col lg:flex-row">
                <Button
                    buttonClassName="uppercase bg-secondary p-3 lg:mr-4 w-40 rounded-full shadow-lg text-white"
                    divClassName="flex justify-center mt-5"
                    text="how it works"
                    onClick={props.howItWorksOnClick}
                />
                <Button
                    buttonClassName="uppercase bg-tertiary p-3 mb-8 lg:mb-0 lg:ml-4 w-40 rounded-full shadow-lg text-white"
                    divClassName="flex justify-center mt-5"
                    text="apply now"
                    onClick={props.applyNowOnClick}
                />
            </div>
        </div>
    </div>
)

export default Banner;