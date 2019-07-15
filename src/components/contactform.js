import React from 'react'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

class ContactForm extends React.Component {
    
    state = {
        comments: "",
        email: "",
        identity: "",
        name: "",
        school: "Metis",
        other: "",
        otherDescription: "",
        thankyou: false,
    }

    handleChange = e => {
        e.preventDefault()
        this.setState({ [e.target.name] : e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": form.getAttribute("name"),
            ...this.state
          })
        })
        .then(() => {
            this.setState({
                comments: "",
                email: "",
                identity: "",
                name: "",
                school: "",
                other: "",
                thankyou: true
            })
        })
          .catch(error => alert(error));
      };

    render() {
        return (
            <div className="border-2 border-gray-300 shadow-xl rounded-lg m-2 lg:m-10 p-8">
                <h2 className="mt-4 text-center">Additional Questions</h2>
                <p>We're here to help for every step of your journey. Please reach out to <a href="mailto:customertrust@skills.fund" className="text-primary">CustomerTrust@skills.fund</a>, check out our <a href="https://skills.fund/frequently-asked-questions" target="_blank" rel="noreferrer noopener" className="text-primary">Financing FAQs</a>, or browse the resources on <a href="https://skills.fund/frequently-asked-questions" target="_blank" rel="noreferrer noopener" className="text-primary">our blog</a>. Thank you!</p>
                <form className="text-center" name="metis_contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={this.handleSubmit}>
                    <input type="hidden" name="form-name" value="make_school_contact" />
                    <div className="w-full mb-8">
                        <label className="block text-gray-700 text-sm font-bold" htmlFor="name">Name</label>
                        <input onChange={this.handleChange} value={this.state.name} name="name" className="shadow appearance-none border md:w-1/3 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Your name" required/>
                    </div>
                    <div className="w-full mb-8">
                        <label className="block text-gray-700 text-sm font-bold" htmlFor="email">Email</label>
                        <input onChange={this.handleChange} value={this.state.email} name="email" className="shadow appearance-none border md:w-1/3 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Your email address" required/>
                    </div>
                    <div className="w-full mb-8">
                        <label className="block text-gray-700 text-sm font-bold" htmlFor="school">School Name</label>
                        <input onChange={this.handleChange} name="school" value={this.state.school} className="shadow appearance-none border md:w-1/3 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Name of your school" required/>
                    </div>
                    <div className="w-full mb-8 flex flex-col items-center">
                        <label className="block text-gray-700 text-sm font-bold" htmlFor="identity">I am a...</label>
                        <select required name="identity" onChange={this.handleChange} className="block appearance-none md:w-1/3 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option value="">Select One</option>
                            <option value="student">Student</option>
                            <option value="school-representative">School Representative</option>
                            <option value="other">Other</option>
                        </select>
                            {this.state.identity === "other" && <input onChange={this.handleChange} name="otherDescription" value={this.state.otherDescription} className="mt-3 shadow appearance-none border-2 border-primary w-1/3 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Other description (if applicable)"/>}
                    </div>
                    <div className="w-full mb-8">
                        <label className="block text-gray-700 text-sm font-bold" htmlFor="comments">Question and/or Comment</label>
                        <textarea onChange={this.handleChange} value={this.state.comments} name="comments" className="shadow appearance-none border md:w-1/3 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter any questions or comments here" required/>
                    </div>
                    <button type="submit" className="uppercase bg-primary py-2 px-4 rounded-full shadow-lg text-white">Send Me More Info</button>
                </form>
                {this.state.thankyou && <p className="text-center text-primary">Thanks for getting in touch! We'll reach out with more information soon.</p>}
            </div> 
        )
    }
}

export default ContactForm