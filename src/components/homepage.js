import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import LeadContent from "../components/leadcontent"
import ThreeSteps from "../components/threesteps"
import LoanCalculator from "../components/loancalculator"
import InfoButtonContainer from "../components/infobuttoncontainer"
import TermInfo from './terminfo'
import FAQ from './faq'
import Eligibility from './eligibility'
import ContactForm from './contactform'

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          termInfo: true,
          faq: false,
          eligibility: false,
          contact: false
        }
        this.threesteps = React.createRef();
      }
    
      scrollToContent = () => {
        this.threesteps.current.scrollIntoView({ behavior: 'smooth' });
      }
    
      activateMoreInfo = () => {
        this.setState({
          termInfo: true,
          faq: false,
          eligibility: false,
          contact: false
        })
      }
    
      activateFAQ = () => {
        this.setState({
          termInfo: false,
          faq: true,
          eligibility: false,
          contact: false
        })
      }
    
      activateEligibility = () => {
        this.setState({
          termInfo: false,
          faq: false,
          eligibility: true,
          contact: false
        })
      }
    
      activateContact = () => {
        this.setState({
          termInfo: false,
          faq: false,
          eligibility: false,
          contact: true
        })
      }
    
      render(){
        return (
          <Layout>
            <SEO title="Metis" />
            <Banner 
                onClick={this.scrollToContent}  
            />
            <LeadContent 
              schoolName="Metis"
            />
            <ThreeSteps 
              ref={this.threesteps}
            />
            <LoanCalculator />
            <InfoButtonContainer 
              info={this.activateMoreInfo}
              faq={this.activateFAQ}
              eligibility={this.activateEligibility}
              contact={this.activateContact}
            />
            {this.state.termInfo && <TermInfo />}
            {this.state.faq && <FAQ />}
            {this.state.eligibility && <Eligibility />}
            {this.state.contact && <ContactForm />}
          </Layout>
        )
      }
}

export default Homepage