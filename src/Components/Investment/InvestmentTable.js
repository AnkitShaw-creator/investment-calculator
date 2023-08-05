import './InvestmentTable.css'


const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});


const InvestmentTable = (props) => {

    return (

        <div>
            <table className="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Total Savings</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {props.yearData.map(row => {
                        return (
                        <tr>
                            <td>{row.year}</td>
                            <td>{formatter.format(row.savingsEndOfYear)}</td>
                            <td>{formatter.format(row.yearlyInterest)}</td>
                            <td>{formatter.format(row.savingsEndOfYear - props.initialInvestment - row.yearlyContribution * row.year)}</td>
                                <td>{formatter.format(props.initialInvestment + row.yearlyContribution * row.year)}</td>
                            </tr>
                        );
                    }
                        
                )}
                </tbody>
            </table>
        </div>
    );

 };

export default InvestmentTable;