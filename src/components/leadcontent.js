import React from 'react'
import marching from '../images/PeopleMarchColor.png'

const LeadContent = props => (
    <div className="flex flex-col text-center my-8">
        <h2>{props.schoolName} empowers you to shape the world</h2>
        <div className="flex justify-center">
            <img className="w-auto" src={marching} alt="People marching and carrying flags" />
        </div>
        <p>Metis accelerates data science learning for individuals, companies, and institutions through corporate training and accredited, immersive bootcamps. Metis partners with Skills Fund so more students like you can access their revolutionary program.</p>
    </div>
)

export default LeadContent