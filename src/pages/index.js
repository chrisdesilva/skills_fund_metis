import React from 'react'
import Homepage from '../components/homepage'
import ReactGA from 'react-ga'
import ReactPixel from 'react-facebook-pixel'

const options= {
  autoConfig: true,
  debug: false
}
ReactPixel.init('928181257515785', options)

const trackingId = "UA-68312423-5"
ReactGA.initialize(trackingId, {
  debug: false,
  titleCase: false,
  gaOptions: {
    siteSpeedSampleRate: 100
  }
})

const IndexPage = () => {
  return (
    <div>
      <form name="metis_contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="school"/>
        <input type="button" name="identity" />
        <input type="button" name="identity" />
        <input type="button" name="identity" />
        <input type="text" name="otherDescription" />
        <textarea name="comments" />
      </form>
      <Homepage />
    </div>
  )
}

export default IndexPage
