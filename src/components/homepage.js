import React, { lazy } from 'react'
import ReactGA from 'react-ga'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Banner from '../components/banner'
import LeadContent from '../components/leadcontent'
import ThreeSteps from '../components/threesteps'

const LoanCalculator = lazy(() => import('../components/loancalculator'))  
const LoanApp = lazy(() => import('./loanapp'))  
const LeadCaptureForm = lazy(() => import('./leadcaptureform'))  
const InfoButtonContainer = lazy(() => import('../components/infobuttoncontainer'))  
const TermInfo = lazy(() => import('./terminfo'))  
const FAQ = lazy(() => import('./faq'))  
const Eligibility = lazy(() => import('./eligibility'))  
const ContactForm  = lazy(() => import('./contactform')) 


class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          termInfo: true,
          faq: false,
          eligibility: false,
          contact: false,
          lenderCode: ''
        }
        this.threesteps = React.createRef();
        this.apply = React.createRef();
      }

    
      scrollToContent = () => {
        this.threesteps.current.scrollIntoView({ behavior: 'smooth' });
        ReactGA.event({
          category: 'How It Works Button',
          action: 'click'
        })
      }

      scrollToApply = () => {
        this.apply.current.scrollIntoView({ behavior: 'smooth' });
        ReactGA.event({
          category: 'Apply Now Button',
          action: 'click',
          label: 'banner'
        })
      }

      scrollToApply2 = () => {
        this.apply.current.scrollIntoView({ behavior: 'smooth' });
        ReactGA.event({
          category: 'Apply Now Button',
          action: 'click',
          label: 'getting started'
        })
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
            <SEO title='Metis' />
            <Banner 
                howItWorksOnClick={this.scrollToContent}  
                applyNowOnClick={this.scrollToApply}  
            />
            <LeadContent 
              schoolName='Metis'
            />
            <ThreeSteps
              onClick={this.scrollToApply2} 
              ref={this.threesteps}
            />
              <LoanCalculator />
              <LoanApp 
                ref={this.apply}
                lenderCode={this.state.lenderCode}
              />
              <LeadCaptureForm />
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