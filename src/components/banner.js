import React from "react"
import banner from "../images/metis_hero.png"
import Button from "./button"

const Banner = props => (
    <div>
        <div className="bg-cover text-white flex flex-col justify-center items-center relative z-0" style={{backgroundImage: `url(${banner})`, height: '25rem'}} id="banner">

            <h2 className="text-3xl lg:text-4xl font-normal text-center mb-5 mt-12">Experience Immersive Data Science Instruction at Metis</h2>
            <h3 className="text-base lg:text-xl font-light text-center">Know exactly what you'll pay with Skills Fund</h3>
            <Button
              buttonClassName="uppercase bg-secondary p-3 rounded-full shadow-lg text-white"
              divClassName="flex justify-center mt-5"
              text="see how skills fund works"
              onClick={props.onClick}
            />
        </div>
    </div>
)

export default Banner;