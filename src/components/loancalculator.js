import React from 'react'
import { UnmountClosed as Collapse } from 'react-collapse'

class LoanCalculator extends React.Component {

    state={
        defaultLoanAmount: 10000,
        loanAmount: 10000,
        min: 2000,
        max: 25500,
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
        interestPayment2: null,
        showOptions: false
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
        this.setState({ monthlyPayment1: payment36, monthlyPayment2: payment60, loanAmount: borrowedAmount, showOptions: true })
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
                    <h3 className="text-center">Calculate Your Monthly Payments</h3>
                    <div className="flex flex-col justify-center w-1/2 md:w-1/3">
                        <label className="text-xs text-center">Enter a loan amount:</label>
                        <input type="number" onChange={this.updateLoanAmount} className="rounded border-2 border-primary p-3 mb-5 text-primary text-center text-2xl" maxLength="6" placeholder="$10,000" />
                    </div>
                    {this.state.min > this.state.loanAmount || this.state.loanAmount > this.state.max ? <p className="text-red-500 text-xs">Please enter a number between {this.state.min} and {this.state.max}</p> : <button className="opacityApply uppercase bg-primary p-3 mb-4 lg:ml-4 w-48 rounded-full shadow-lg text-white" onClick={this.calculateMonthlyPayment}>Calculate payments</button>}
                    <p className="m-0 text-center">Students may borrow from ${this.state.min} to ${this.state.max}</p>
                    <p className="text-xs text-center hidden lg:inline">Make interest-only payments while in the program. Two months after completion, begin full payments.</p>
                    <Collapse isOpened={this.state.showOptions} springConfig={{stiffness: 150, damping: 40}}>
                        <div className="px-4 md:px-12 py-8 flex flex-col lg:flex-row">
                            <div className="flex flex-col mb-8 lg:mb-0 lg:mr-12">
                                <h3 className="text-primary text-center font-normal">Option 1</h3>
                                <h4 className="text-primary text-center font-normal">36-Month Fixed Rate Loan</h4>
                                <p className="m-0 text-center">{this.state.rate1}% Interest Rate, {this.state.apr1}% APR*</p>
                                <p className="text-xs text-center lg:hidden">Make interest-only payments while in the program. Two months after completion, begin full payments.</p>
                                <p className="font-bold text-center my-4">Payments:</p>
                                <div className="flex mb-4 text-center">
                                    <div className="border-primary border-b w-1/2 mx-5">
                                        Interest-Only Period
                                    </div>
                                    <div className="border-primary border-b w-1/2 mx-5">
                                        Full Payment Period
                                    </div>
                                </div>
                                <div className="flex text-center">
                                    <div className="w-1/2">
                                        {this.state.interestPayment1 ? <p className="m-0 text-primary text-2xl">${this.state.interestPayment1}</p>: <p className="m-0 text-primary text-2xl">$77.91</p>}
                                    </div>
                                    <div className="w-1/2">
                                        {this.state.monthlyPayment1 ? <p className="m-0 text-primary text-2xl">${this.state.monthlyPayment1}</p>: <p className="m-0 text-primary text-2xl">$330.67</p>}
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
                            <div className="flex flex-col lg:ml-12">
                                <h3 className="text-primary text-center lg:mt-0 font-normal">Option 2</h3>
                                <h4 className="text-primary text-center lg:mt-0 font-normal">60-Month Fixed Rate Loan</h4>
                                <p className="m-0 text-center">{this.state.rate2}% Interest Rate, {this.state.apr2}% APR*</p>
                                <p className="text-xs text-center lg:hidden">Make interest-only payments while in the program. Two months after completion, begin full payments.</p>
                                <p className="font-bold text-center my-4">Payments:</p>
                                <div className="flex mb-4 text-center">
                                    <div className="border-primary border-b w-1/2 mx-5">
                                        Interest-Only Period
                                    </div>
                                    <div className="border-primary border-b w-1/2 mx-5">
                                        Full Payment Period
                                    </div>
                                </div>
                                <div className="flex text-center">
                                    <div className="w-1/2">
                                        {this.state.interestPayment2 ? <p className="m-0 text-primary text-2xl">${this.state.interestPayment2}</p>: <p className="m-0 text-primary text-2xl">$95.25</p>}
                                    </div>
                                    <div className="w-1/2">
                                        {this.state.monthlyPayment2 ? <p className="m-0 text-primary text-2xl">${this.state.monthlyPayment2}</p>: <p className="m-0 text-primary text-2xl">226.07</p>}
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
                        </div>
                    </Collapse>
                    <Collapse isOpened={this.state.showOptions} springConfig={{stiffness: 150, damping: 40}}>
                        <p className="text-center text-xs m-0 p-3"><i>*The Annual Percentage Rate (APR) shown is estimated based on the loan type, origination fee, and approximate program length. The actual APR may be slightly different than the example provided based on loan type and program length. To learn how an Annual Percentage Rate (APR) is calculated, <a href="https://skills.fund/resources/how-is-an-apr-calculated" rel="noreferrer noopener">visit our blog.</a></i></p>
                    </Collapse>
                </div>
            </div>
        )
    }
}

export default LoanCalculator