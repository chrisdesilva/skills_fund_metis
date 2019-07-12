import React from 'react'

class LoanCalculator extends React.Component {

    state={
        defaultLoanAmount: 10000,
        loanAmount: null
    }

    updateLoanAmount = e => {
        this.setState({
            loanAmount: Number(e.target.value)
        })
    }

    render() {
        return (
            <div className="flex flex-col justify-center m-2 lg:m-10">
                <div className="shadow-xl rounded h-auto p-8 flex flex-col items-center">
                    <h3 className="uppercase text-center">calculate your payment</h3>
                    <div className="flex flex-col justify-center w-1/2 md:w-1/3 lg:w-1/5">
                        <label className="text-xs text-center">Enter a loan amount:</label>
                        <input onChange={this.updateLoanAmount} className="rounded border-2 border-primary p-3 mb-5 text-primary text-center text-2xl" maxLength="6" placeholder="$10,000" />
                    </div>
                    <p className="text-center text-xs m-3"><i>*The Annual Percentage Rate (APR) shown is estimated based on the loan type, origination fee, and approximate program length. The actual APR may be slightly different than the example provided based on loan type and program length. To learn how an Annual Percentage Rate (APR) is calculated, <a href="https://skills.fund/resources/how-is-an-apr-calculated" rel="noreferrer noopener">visit our blog.</a></i></p>
                </div>
            </div>
        )
    }
}

export default LoanCalculator