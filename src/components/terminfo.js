import React from 'react'

const TermInfo = () => (
    <div className="border-2 border-gray-300 shadow-xl rounded-lg text-center m-2 lg:m-10 p-8">
       <h2 className="mt-4">More Info On Terms</h2>
        <div className="p-4">
            <table>
                <tbody>
                    <tr>
                        <th className="bg-secondary text-center text-white" colSpan="2">Skills Fund Loan</th>
                    </tr>
                    <tr>
                        <td className="text-center">Cosigners</td>
                        <td className="text-center">Note: Up to 1 cosigner might be required in some instances.</td> 
                    </tr>
                    <tr>
                        <td className="text-center">Origination Fee</td>
                        <td className="text-center">4.0% of loan requested (1)</td> 
                    </tr>
                    <tr>
                        <td className="text-center">Interest Rate (2)</td>
                        <td className="text-center">Fixed 11.49% interest rate</td> 
                    </tr>
                    <tr>
                        <td className="text-center">Cosigners</td>
                        <td className="text-center">Note: Up to 1 cosigner might be required in some instances.</td> 
                    </tr>
                </tbody>
            </table> 
        </div>
    </div>
)

export default TermInfo