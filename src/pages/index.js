import React from 'react'
import Homepage from '../components/homepage'
import ReactGA from 'react-ga'

const trackingId = "UA-68312423-5"
ReactGA.initialize(trackingId, {
  debug: false,
  titleCase: false,
  gaOptions: {
    siteSpeedSampleRate: 100
  }
})

class IndexPage extends React.Component {

  componentDidMount() {
    const ReactPixel =  require('react-facebook-pixel');
    ReactPixel.init('928181257515785');
  }

  render() {
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
}

export default IndexPage
