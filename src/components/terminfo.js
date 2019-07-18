import React from 'react'

const TermInfo = () => (
    <div className="border-2 border-gray-300 shadow-xl rounded-lg text-center m-2 lg:m-10 p-8">
       <h2 className="mt-4">More Info On Terms</h2>
        <div className="p-0 md:p-4 hidden lg:inline">
            <table>
                <tbody>
                    <tr>
                        <th className="bg-secondary text-center text-white">Skills Fund Loan</th>
                        <th className="bg-secondary text-center text-white">36 Month</th>
                        <th className="bg-secondary text-center text-white">60 Month</th>
                    </tr>
                    <tr>
                        <td className="text-center">Cosigners</td>
                        <td className="text-center" colSpan="2">Note: Up to 1 cosigner might be required in some instances.</td> 
                    </tr>
                    <tr>
                        <td className="text-center">Origination Fee</td>
                        <td className="text-center" colSpan="2">4.0% of loan requested (1)</td> 
                    </tr>
                    <tr>
                        <td className="text-center">Interest Rate (2)</td>
                        <td className="text-center">Fixed<br /> 8.99% interest rate, 11.16% estimated APR</td> 
                        <td className="text-center">Fixed<br /> 10.99% interest rate, 12.51% estimated APR</td> 
                    </tr>
                    <tr>
                        <td className="text-center">Capitalization of Interest</td>
                        <td className="text-center" colSpan="2"><strong>Interest-Only Loans:</strong> Interest not capitalized unless payments not made.</td> 
                    </tr>
                    <tr>
                        <td className="text-center">Payments Required While Enrolled?</td>
                        <td className="text-center" colSpan="2"><strong>Interest-Only Loans:</strong> Monthly interest payments are required.</td> 
                    </tr>
                    <tr>
                        <td className="text-center">Grace Period</td>
                        <td className="text-center" colSpan="2">Two-month period after the in-school period, following official program completion, and before interest and principal repayment begins. (3)<br /><br />
                        <strong>Interest-Only Loans:</strong> Interest-only payments are required while in school and in the grace period.</td> 
                    </tr>
                    <tr>
                        <td className="text-center">Post-Grace Period</td>
                        <td className="text-center" colSpan="2"><strong>Interest-Only Loans:</strong> Full repayments (principal and interest) are required.</td> 
                    </tr>
                    <tr>
                        <td className="text-center">Principal and Interest Repayment Term</td>
                        <td className="text-center">36 months (3 years)</td> 
                        <td className="text-center">60 months (5 years)</td> 
                    </tr>
                </tbody>
            </table>
            <p className="mt-16">This example shows the monthly payments of a $10,000 <strong>interest-only</strong> Skills Fund loan:</p>
            <table>
                <tbody>
                    <tr>
                        <th className="bg-secondary text-center text-white w-1/3">Example on a $10,000 loan</th>
                        <th className="bg-secondary text-center text-white w-1/3">36 Month</th>
                        <th className="bg-secondary text-center text-white w-1/3">60 Month</th>
                    </tr>
                    <tr>
                        <td className="text-center">Annual Percentage Rate</td>
                        <td className="text-center" >11.16% (4)</td> 
                        <td className="text-center" >12.51% (5)</td> 
                    </tr>
                    <tr>
                        <td className="text-center">Finance Charge (the dollar amount the credit will cost you)</td>
                        <td className="text-center">$2,293.64 (4)</td> 
                        <td className="text-center">$4,040.39 (5)</td> 
                    </tr>
                    <tr>
                        <td className="text-center">Interest-Only Monthly Payment</td>
                        <td className="text-center">$77.91 (4)</td> 
                        <td className="text-center">$95.25 (5)</td> 
                    </tr>
                    <tr>
                        <td className="text-center">Full Monthly (Principal and Interest) Payment</td>
                        <td className="text-center">$330.67 (4)</td> 
                        <td className="text-center">$226.07 (5)</td> 
                    </tr>
                </tbody>
            </table>
            <ul className="text-left px-5 md:px-20 list-disc">
                <li>(1) The 4.0% origination fee is assessed to all loans, and is added to the principal request, so for example, a $10,000 will generate a $400 origination charge that will increase the loaned amount to $10,400.</li>
                <li>(2) Interest rates are fixed and never vary.</li>
                <li>(3) Program completion dates are determined by the school, and full repayment begins 2 months after that date.</li>
                <li>(4) Annual Percentage Rate (APR): Finance charge and monthly payments are estimated based upon borrowing $10,000, a 4.0% origination fee, paying interest on the loan for 3 months while enrolled in the program and for a two-month grace period, then the 36-month principal and interest period.</li>
                <li>(5) Annual Percentage Rate (APR): Finance charge and monthly payments are estimated based upon borrowing $10,000, a 4.0% origination fee, paying interest on the loan for 3 months while enrolled in the program and for a two-month grace period, then the 60-month principal and interest period.</li>
            </ul> 
        </div>
        <div className="p-0 md:p-4 lg:hidden">
            <table>
                <tbody>
                    <tr>
                        <th className="bg-secondary text-center text-white">Skills Fund Loan - 36 Months</th>
                    </tr>
                    <tr>
                        <td className="text-center font-bold">Cosigners</td>
                    </tr>
                    <tr>
                        <td className="text-center">Note: Up to 1 cosigner might be required in some instances.</td> 
                    </tr>
                    <tr>
                        <td className="text-center font-bold">Origination Fee</td>
                    </tr>
                    <tr>
                        <td className="text-center">4.0% of loan requested (1)</td> 
                    </tr>
                    <tr>
                        <td className="text-center font-bold">Interest Rate (2)</td>
                    </tr>
                    <tr>
                        <td className="text-center">Fixed<br /> 8.99% interest rate, 11.16% estimated APR</td> 
                    </tr>
                    <tr>
                        <td className="text-center font-bold">Capitalization of Interest</td>
                    </tr>
                    <tr>
                        <td className="text-center"><strong>Interest-Only Loans:</strong> Interest not capitalized unless payments not made.</td> 
                    </tr>
                    <tr>
                        <td className="text-center font-bold">Payments Required While Enrolled?</td> 
                    </tr>
                    <tr>
                        <td className="text-center"><strong>Interest-Only Loans:</strong> Monthly interest payments are required.</td>
                    </tr>
                    <tr>
                        <td className="text-center font-bold">Grace Period</td>
                    </tr>
                    <tr>
                        <td className="text-center">Two-month period after the in-school period, following official program completion, and before interest and principal repayment begins. (3)<br /><br />
                        <strong>Interest-Only Loans:</strong> Interest-only payments are required while in school and in the grace period.</td> 
                    </tr>
                    <tr>
                        <td className="text-center font-bold">Post-Grace Period</td>
                    </tr>
                    <tr>
                        <td className="text-center"><strong>Interest-Only Loans:</strong> Full repayments (principal and interest) are required.</td> 
                    </tr>
                    <tr>
                        <td className="text-center font-bold">Principal and Interest Repayment Term</td> 
                    </tr>
                    <tr>
                        <td className="text-center">36 months (3 years)</td> 
                    </tr>
                    <tr>
                        <th className="bg-secondary text-center text-white">Skills Fund Loan - 60 Months</th>
                    </tr>
                    <tr>
                        <td className="text-center font-bold">Cosigners</td>
                    </tr>
                    <tr>
                        <td className="text-center">Note: Up to 1 cosigner might be required in some instances.</td> 
                    </tr>
                    <tr>
                        <td className="text-center font-bold">Origination Fee</td>
                    </tr>
                    <tr>
                        <td className="text-center">4.0% of loan requested (1)</td> 
                    </tr>
                    <tr>
                        <td className="text-center font-bold">Interest Rate (2)</td>
                    </tr>
                    <tr>
                        <td className="text-center">Fixed<br /> 10.99% interest rate, 12.51% estimated APR</td> 
                    </tr>
                    <tr>
                        <td className="text-center font-bold">Capitalization of Interest</td>
                    </tr>
                    <tr>
                        <td className="text-center"><strong>Interest-Only Loans:</strong> Interest not capitalized unless payments not made.</td> 
                    </tr>
                    <tr>
                        <td className="text-center font-bold">Payments Required While Enrolled?</td>
                    </tr>
                    <tr>
                        <td className="text-center"><strong>Interest-Only Loans:</strong> Monthly interest payments are required.</td> 
                    </tr>
                    <tr>
                        <td className="text-center font-bold">Grace Period</td>
                    </tr>
                    <tr>
                        <td className="text-center">Two-month period after the in-school period, following official program completion, and before interest and principal repayment begins. (3)<br /><br />
                        <strong>Interest-Only Loans:</strong> Interest-only payments are required while in school and in the grace period.</td> 
                    </tr>
                    <tr>
                        <td className="text-center font-bold">Post-Grace Period</td>
                    </tr>
                    <tr>
                        <td className="text-center"><strong>Interest-Only Loans:</strong> Full repayments (principal and interest) are required.</td> 
                    </tr>
                    <tr>
                        <td className="text-center font-bold">Principal and Interest Repayment Term</td>
                    </tr>
                    <tr>
                        <td className="text-center">60 months (5 years)</td> 
                    </tr>
                </tbody>
            </table>
            <p className="mt-16">This example shows the monthly payments of a $10,000 <strong>interest-only</strong> Skills Fund loan:</p>
            <table>
                <tbody>
                    <tr>
                        <th className="bg-secondary text-center text-white">Example on a $10,000 loan</th>
                    </tr>
                    <tr>
                        <th className="bg-secondary text-center text-white">36 Month Loan</th>
                    </tr>
                    <tr>
                        <td className="text-center font-bold">Annual Percentage Rate</td>
                    </tr>
                    <tr>
                        <td className="text-center" >11.16% (4)</td> 
                    </tr>
                    <tr>
                        <td className="text-center font-bold">Finance Charge (the dollar amount the credit will cost you)</td>
                    </tr>
                    <tr>
                        <td className="text-center">$2,293.64 (4)</td> 
                    </tr>
                    <tr>
                        <td className="text-center font-bold">Interest-Only Monthly Payment</td>
                    </tr>
                    <tr>
                        <td className="text-center">$77.91 (4)</td> 
                    </tr>
                    <tr>
                        <td className="text-center font-bold">Full Monthly (Principal and Interest) Payment</td>
                    </tr>
                    <tr>
                        <td className="text-center">$330.67 (4)</td> 
                    </tr>
                    <tr>
                        <th className="bg-secondary text-center text-white">60 Month Loan</th>
                    </tr>
                    <tr>
                        <td className="text-center font-bold">Annual Percentage Rate</td>    
                    </tr>
                    <tr>
                        <td className="text-center" >12.51% (5)</td> 
                    </tr>
                    <tr>
                        <td className="text-center font-bold">Finance Charge (the dollar amount the credit will cost you)</td>
                    </tr>
                    <tr>
                        <td className="text-center">$4,040.39 (5)</td> 
                    </tr>
                    <tr>
                        <td className="text-center font-bold">Interest-Only Monthly Payment</td> 
                    </tr>
                    <tr>
                        <td className="text-center">$95.25 (5)</td> 
                    </tr>
                    <tr>
                        <td className="text-center font-bold">Full Monthly (Principal and Interest) Payment</td>
                    </tr>
                    <tr>
                        <td className="text-center">$226.07 (5)</td> 
                    </tr>
                </tbody>
            </table>
            <ul className="text-left px-3 md:px-20 list-disc">
                <li>(1) The 4.0% origination fee is assessed to all loans, and is added to the principal request, so for example, a $10,000 will generate a $400 origination charge that will increase the loaned amount to $10,400.</li>
                <li>(2) Interest rates are fixed and never vary.</li>
                <li>(3) Program completion dates are determined by the school, and full repayment begins 2 months after that date.</li>
                <li>(4) Annual Percentage Rate (APR): Finance charge and monthly payments are estimated based upon borrowing $10,000, a 4.0% origination fee, paying interest on the loan for 3 months while enrolled in the program and for a two-month grace period, then the 36-month principal and interest period.</li>
                <li>(5) Annual Percentage Rate (APR): Finance charge and monthly payments are estimated based upon borrowing $10,000, a 4.0% origination fee, paying interest on the loan for 3 months while enrolled in the program and for a two-month grace period, then the 60-month principal and interest period.</li>
            </ul> 
        </div>
    </div>
)

export default TermInfo