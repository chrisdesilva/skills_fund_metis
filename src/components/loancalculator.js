import React from 'react'

class LoanCalculator extends React.Component {

    state={
        defaultLoanAmount: 10000,
        loanAmount: 10000,
        min: 2000,
        max: 15500,
        origFee: 0.04,
        k: 5,
        term1: 36,
        term2: 60,
        rate1: 8.99,
        rate2: 10.99,
        apr1: 11.16,
        apr2: 12.51,
        monthlyPayment1: null,
        interestPayment1: null,
        monthlyPayment2: null,
        interestPayment2: null
    }

    updateLoanAmount = e => {
        this.setState({
            loanAmount: Number(e.target.value)
        })
    }

    calculateMonthlyPayment = e => {
        this.updateLoanAmount(e)
        const monthlyRate36 = (8.99 / 100) / 12
        const monthlyRate60 = (10.99 / 100) / 12
        const borrowedAmount = this.state.loanAmount
        const totalLoan = borrowedAmount * (1 + this.state.origFee)
        const pv = totalLoan
        let payment36 = Number((monthlyRate36 * pv) / (1 - (1 / Math.pow(1 + monthlyRate36, 36)))).toFixed(2)
        let payment60 = Number((monthlyRate60 * pv) / (1 - (1 / Math.pow(1 + monthlyRate60, 60)))).toFixed(2)
        this.setState({ monthlyPayment1: payment36, monthlyPayment2: payment60, loanAmount: borrowedAmount })
        this.calculateInterest36()
        this.calculateInterest60()
    }

    calculateInterest36 = () => {
        let interest = (this.state.loanAmount * (1 + this.state.origFee) / 12 * (8.99 / 100)).toFixed(2)
        this.setState({ interestPayment1: Number(interest) })
    }

    calculateInterest60 = () => {
        let interest = (this.state.loanAmount * (1 + this.state.origFee) / 12 * (10.99 / 100)).toFixed(2)
        this.setState({ interestPayment2: Number(interest) })
    }

    render() {
        return (
            <div className="flex flex-col justify-center m-2 lg:m-10">
                <div className="shadow-xl rounded h-auto p-8 flex flex-col items-center">
                    <h3 className="uppercase text-center">calculate your payment</h3>
                    <div className="flex flex-col justify-center w-1/2 md:w-1/3">
                        <label className="text-xs text-center">Enter a loan amount:</label>
                        <input type="number" onChange={this.updateLoanAmount} className="rounded border-2 border-primary p-3 mb-5 text-primary text-center text-2xl" maxLength="6" placeholder="$10,000" />
                    </div>
                    {this.state.min > this.state.loanAmount || this.state.loanAmount > this.state.max ? <p className="text-red-500 text-xs">Please enter a number between {this.state.min} and {this.state.max}</p> : <button className="bg-primary px-2 py-3 mb-2 rounded text-white uppercase" onClick={this.calculateMonthlyPayment}>Calculate payments</button>}
                    <p className="m-0 text-center">Students may borrow from ${this.state.min} to ${this.state.max}</p>
                    <div className="shadow-xl rounded px-4 md:px-12 py-8 flex flex-col">
                        <h3 className="text-primary text-center font-normal">36-Month Fixed Rate</h3>
                        <p className="m-0 text-center">{this.state.rate1}% Interest Rate, {this.state.apr1}% APR*</p>
                        <p className="text-xs text-center">Make interest-only payments while in program & two months after, then begin full payments.</p>
                        <p className="font-bold text-center">Payments:</p>
                        <div className="flex mb-4 text-center">
                            <div className="border-secondary border-b w-1/2 mr-5">
                                Interest-Only Period
                            </div>
                            <div className="border-secondary border-b w-1/2 ml-5">
                                Full Payment Period
                            </div>
                        </div>
                        <div className="flex text-center">
                            <div className="w-1/2">
                                {this.state.interestPayment1 ? <p className="m-0 text-secondary text-2xl">${this.state.interestPayment1}</p>: <p>--</p>}
                            </div>
                            <div className="w-1/2">
                                {this.state.monthlyPayment1 ? <p className="m-0 text-secondary text-2xl">${this.state.monthlyPayment1}</p>: <p>--</p>}
                            </div>
                        </div>
                        <div className="flex text-center text-xs">
                            <div className="w-1/2">
                                per month
                            </div>
                            <div className="w-1/2">
                                per month
                            </div>
                        </div>
                        <h3 className="text-primary text-center mt-12 font-normal">60-Month Fixed Rate</h3>
                        <p className="m-0 text-center">{this.state.rate2}% Interest Rate, {this.state.apr2}% APR*</p>
                        <p className="text-xs text-center">Make interest-only payments while in program & two months after, then begin full payments.</p>
                        <p className="font-bold text-center">Payments:</p>
                        <div className="flex mb-4 text-center">
                            <div className="border-secondary border-b w-1/2 mr-5">
                                Interest-Only Period
                            </div>
                            <div className="border-secondary border-b w-1/2 ml-5">
                                Full Payment Period
                            </div>
                        </div>
                        <div className="flex text-center">
                            <div className="w-1/2">
                                {this.state.interestPayment2 ? <p className="m-0 text-secondary text-2xl">${this.state.interestPayment2}</p>: <p>--</p>}
                            </div>
                            <div className="w-1/2">
                                {this.state.monthlyPayment2 ? <p className="m-0 text-secondary text-2xl">${this.state.monthlyPayment2}</p>: <p>--</p>}
                            </div>
                        </div>
                        <div className="flex text-center text-xs">
                            <div className="w-1/2">
                                per month
                            </div>
                            <div className="w-1/2">
                                per month
                            </div>
                        </div>
                    </div>
                    <p className="text-center text-xs m-3"><i>*The Annual Percentage Rate (APR) shown is estimated based on the loan type, origination fee, and approximate program length. The actual APR may be slightly different than the example provided based on loan type and program length. To learn how an Annual Percentage Rate (APR) is calculated, <a href="https://skills.fund/resources/how-is-an-apr-calculated" rel="noreferrer noopener">visit our blog.</a></i></p>
                </div>
            </div>
        )
    }
}

export default LoanCalculator