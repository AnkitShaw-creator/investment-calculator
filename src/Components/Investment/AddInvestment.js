
import { useState } from 'react';
import './AddInvestment.css'


const initialInputState = {
    'current-savings': 1000,
    'yearly-contribution': 100,
    'expected-return': 7,
    'duration': 6,
};


const AddInvestment = (props) => {
    
    const [userInput, setUserInput] = useState(initialInputState);


    const formSubmitHandler = (event) => { 
        event.preventDefault();
        console.log('Submit');

        props.onCalculate(userInput);
    };

    const formResetHandler = (event) => { 
        event.preventDefault();
        setUserInput(initialInputState);
    };

    const inputChangeHandler = (input, value) => { 
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                [input]: +value
            };
        });


    };

    return (
        <div>
            <form className="form" onSubmit={formSubmitHandler}>
                <div className="input-group">
                    <p>
                        <label htmlFor="current-savings">Current Savings ($)</label>
                        <input type="number" id="current-savings"
                            value={userInput['current-savings']}
                            onChange={(event) => inputChangeHandler('current-savings', event.target.value)} />
                    </p>
                    <p>
                        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                        <input type="number" id="yearly-contribution"
                            value={userInput['yearly-contribution']}
                            onChange={(event) => inputChangeHandler('yearly-contribution', event.target.value)} />
                    </p>
                </div>
                <div className="input-group">
                    <p>
                        <label htmlFor="expected-return">Expected Interest (%, per year)</label>
                        <input type="number" id="expected-return"
                            value={userInput['expected-return']}
                            onChange={(event) => inputChangeHandler('expected-return', event.target.value)} />
                    </p>
                    <p>
                        <label htmlFor="duration">Investment Duration (years)</label>
                        <input type="number" id="duration"
                            value={userInput['duration']}
                            onChange={(event) => inputChangeHandler('duration', event.target.value)} />
                    </p>
                </div>
                <p className="actions">
                    <button type="reset" className="buttonAlt" onClick={formResetHandler}>
                        Reset
                    </button>
                    <button type="submit" className="button">
                        Calculate
                    </button>
                </p>
            </form>
        </div>
    );

};


export default AddInvestment;





