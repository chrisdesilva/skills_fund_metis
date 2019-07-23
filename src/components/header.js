import PropTypes from "prop-types"
import React from "react"
import schoolLogo from "../images/metis_logo.png"
import skillsFund from "../images/skillsFund_logo.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div className="flex justify-center">
      <div className="w-full md:w-1/2 lg:w-1/3 flex justify-around items-center py-8 px-2 lg:px-0 mt-8">
          <a
            href="https://www.thisismetis.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src={schoolLogo} 
              alt="Metis logo"
              className="h-12"
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
              className="h-10"
            />
          </a>
      </div>
    </div>
    <div className="flex justify-center items-center">
      <h3 className="font-light mb-1">Metis tuition made easy</h3>
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
