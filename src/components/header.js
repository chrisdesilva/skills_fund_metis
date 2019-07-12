import PropTypes from "prop-types"
import React from "react"
import makeSchool from "../images/make_school_logo.png"
import skillsFund from "../images/skillsFund_logo.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div className="w-full flex justify-center items-center pt-1 px-2 lg:px-0"
      // style={{
      //   margin: `0 auto`,
      //   width: `100%`,
      //   paddingTop: `1.45rem`,
      //   display: `flex`,
      //   justifyContent: `center`,
      //   alignItems: `center`
      // }}
    >
        <a
          href="https://www.makeschool.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src={makeSchool} 
            alt="Make School logo"
            style={{
              height: `60px`
            }} 
          />
        </a>
        <a
          href="https://skills.fund/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src={skillsFund} 
            alt="Skills Fund logo"
            style={{
              height: `45px`
            }} 
          />
        </a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
