import React, { useState } from 'react'
import ReactGA from 'react-ga'
import ReactPixel from 'react-facebook-pixel'
import marching from '../images/PeopleMarchColor.png'
import { UnmountClosed as Collapse } from 'react-collapse'

const LoanApp = React.forwardRef((props, ref) => {

    const [email, setEmail] = useState('')
    const [disclaimers, showDisclaimers] = useState(false)
    const thankYouMsg = 'Thanks for applying! Your loan application has opened in a new window.'
    const [submitted, isSubmitted] = useState(false)
    const handleChange = e => {
        setEmail(e.target.value)
    }

    // lender code can be found in loan parameters
    const redirectLoanApp = e => {
        window.open("https://sf.privateloan.studentloan.org/external/LoanApplication.do?lenderCode=SKMETA19", "_blank", "noopener noreferrer")
    };

    const trackGoogleAnalyticsEvent = e => {
            ReactGA.event({
                category: 'Apply Now Button',
                action: 'click',
                label: 'submitted loan application'
            })
    }

    const trackFacebookPixel = () => {
        ReactPixel.track('InitiateCheckout', {
            value: 7200.00,
            currency: 'USD'
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        var url = 'https://api.hsforms.com/submissions/v3/integration/submit/3871135/0abd7292-985c-43fe-8480-0759a6cba99e'
        const hsCookie = document.cookie.split(';').reduce((cookies, cookie) => {
            const [ name, value ] = cookie.split('=').map(c => c.trim());
            cookies[name] = value;
            return cookies;
          }, {});
        var data = {
        "fields": [
            {
            "name": "email",
            "value": `${email}`
            },
            {
            "name": "stakeholder_type",
            "value": "Student"
            },
            {
            "name": "program_name",
            "value": "Data Science Bootcamp"
            },
            {
            "name": "school",
            "value": "Metis"
            },
            {
            "name": "student_loan_application_status",
            "value": "BLA Click Email Submitted"
            },
            {
            "name": "clicked_begin_loan_application_bla",
            "value": "BLA Click"
            },
        ],
        "context": {
            "hutk": hsCookie.hubspotutk, // include this parameter and set it to the hubspotutk cookie value to enable cookie tracking on your submission
            "pageUri": `${props.pageUri}`,
            "pageName": `${props.schoolName} | Skills Fund`,
            "ipAddress": `${props.IP}`
        }
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(response => console.log('success', response))
        .catch(error => console.log('error: ', error))
        
        trackGoogleAnalyticsEvent()
        trackFacebookPixel()
        redirectLoanApp()
        isSubmitted(true)
    }

    
    return (
        <div ref={ref} className="flex flex-col items-center justify-center pt-8 mx-2 lg:mx-10 rounded shadow-xl bg-purple-150">
            <h2>Loan Application</h2>
            <div className="rounded shadow-2xl p-8 mx-4 bg-white">
                {/* update with school name, remove cost of living if school does not offer it */}
                <h3 className="text-center font-normal">{props.schoolName} Tuition and Cost of Living Financing</h3>
                <div className="flex justify-center">
                    <img className="w-auto" src={marching} alt="People marching and carrying flags" loading="lazy"/>
                </div>
            <form className="metis_apply_now_GA program-apply flex flex-col items-center" onSubmit={handleSubmit}>
                <label htmlFor="email">Email address</label>
                <input className="border-2 rounded border-primary text-center py-2 mb-4 w-64" type="email" name="email" placeholder="Enter your email address" onChange={handleChange} value={email} required />
                <div className="hidden">
                    <input readOnly type="text" name="Stakeholder Type" value="Student"/>
                    <input readOnly type="text" name="Program Name" value="Data Science Bootcamp"/>
                    <input readOnly type="text" name="School" value="Metis"/>
                    <input readOnly type="text" name="Student Loan Application Status" value="BLA Click Email Submitted"/>
                    <input readOnly type="text" name="Clicked Begin Loan Application BLA" value="BLA Click"/>
                </div>
                {submitted ? thankYouMsg : <input className="opacityApply uppercase bg-primary p-3 mb-2 w-40 rounded-full shadow-lg text-white cursor-pointer" value="APPLY NOW" type="submit"/>}
                {!submitted && <p className="pt-5 text-xs italic mb-0 px-8 text-center">Please note: clicking Apply Now will open your loan application in a new tab</p>}
            </form>
            </div>
            <div className="px-8 text-sm">
                <p className="text-center mt-8">If you are a cosigner, begin the addendum now by clicking <a className="text-primary" href="https://sf.privateloan.studentloan.org/Cosigner.do?execution=e1s1" rel="noreferrer noopener" target="_blank">here</a>.</p>
                <p className="text-center text-primary cursor-pointer font-bold" onClick={() => showDisclaimers(!disclaimers)}>Disclaimers</p>
            <Collapse isOpened={disclaimers} springConfig={{stiffness: 150, damping: 40}}>
                <div>
                    <p><strong>Before you begin, please read these important notes:</strong></p>
                    <p>Customer identification policy:</p>
                    <p>For the purpose of the following notice, the words "you" and "your" mean the Borrower and the Cosigner. All applicants: Important Federal Law Notice - Important information about procedures for opening a new account: To help the government fight the funding of terrorism and money laundering activities, federal law requires all financial institutions to obtain, verify, and record information that identifies each person who opens an account. What this means for you: When you open an account, we will ask for your name, address, date of birth and other information that will allow us to identify you. We may also ask to see your driver's license or other identifying documents.</p>
                    <p>Consent to share data:</p>
                    <p>By clicking the box below and beginning the application, I consent under Federal and state privacy laws to NIMAA providing to Skills Fund information related to my application, enrollment, and completion, including but not limited to information contained in my original application and supplements as well as information regarding my completion, graduation, and post-program outcomes information.</p>
                    <p><strong>While in the application, please note:</strong></p>
                    <p>1. DO NOT use the browser Back button. Using the browser Back button may cause invalid information and delay the processing of your loan.</p>
                    <p>2. Your application will not be complete until it has been signed and submitted along with any required documentation.</p>
                    <p className="mb-0 pb-4">3. You will need the address and phone number of 3 references to complete your application, including one relative not living with you. Others may be friends, employers, etc.</p>
                </div>
            </Collapse>
            </div>
        </div>
    )
})

export default LoanApp