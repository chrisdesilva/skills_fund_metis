import React from "react"
import Homepage from "../components/homepage";

const IndexPage = () => (
  <div>
    <form name="make_school_contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
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



export default IndexPage
