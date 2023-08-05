import { useState } from "react";
import AddInvestment from "./AddInvestment";
import InvestmentTable from "./InvestmentTable";


export default function Investment() {


    const [userInput, setUserInput] = useState(null);
    const yearlyData = []; // per-year results

    const calculateHandler = (userInput) => {
        setUserInput(userInput);
        console.log('Calculate');
    };
    
    if (userInput) {
        let currentSavings = +userInput['current-savings']; 
        const yearlyContribution = +userInput['yearly-contribution']; 
        const expectedReturn = +userInput['expected-return'] / 100;
        const duration = +userInput['duration'];

        
        for (let i = 0; i < duration; i++) {
            const yearlyInterest = currentSavings * expectedReturn;
            currentSavings += yearlyInterest + yearlyContribution;
            yearlyData.push({
                year: i + 1,
                yearlyInterest: yearlyInterest,
                savingsEndOfYear: currentSavings,
                yearlyContribution: yearlyContribution,
            });
        }
        console.log(yearlyData);
     }


    return (
        <div>
            <AddInvestment onCalculate={calculateHandler} />

            {!userInput && <p style={{'textAlign':"center"}}>No yearly data available!</p>}
            {userInput && <InvestmentTable yearData={yearlyData} initialInvestment={userInput['current-savings']} />}
            
        </div>
        
    );
}