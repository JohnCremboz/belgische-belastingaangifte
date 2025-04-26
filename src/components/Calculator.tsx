import React, { useState } from 'react';

const Calculator: React.FC = () => {
    const [income, setIncome] = useState<number>(0);
    const [deductions, setDeductions] = useState<number>(0);
    const [taxResult, setTaxResult] = useState<number | null>(null);

    const handleIncomeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIncome(Number(event.target.value));
    };

    const handleDeductionsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDeductions(Number(event.target.value));
    };

    const calculateTax = () => {
        const taxableIncome = income - deductions;
        let tax = 0;

        if (taxableIncome > 0) {
            // Simplified tax brackets for demonstration purposes
            if (taxableIncome <= 10000) {
                tax = taxableIncome * 0.25;
            } else if (taxableIncome <= 20000) {
                tax = 2500 + (taxableIncome - 10000) * 0.30;
            } else {
                tax = 2500 + 3000 + (taxableIncome - 20000) * 0.40;
            }
        }

        setTaxResult(tax);
    };

    return (
        <div>
            <h1>Belastingsaangifte Calculator</h1>
            <div>
                <label>
                    Inkomsten:
                    <input type="number" value={income} onChange={handleIncomeChange} />
                </label>
            </div>
            <div>
                <label>
                    Aftrekken:
                    <input type="number" value={deductions} onChange={handleDeductionsChange} />
                </label>
            </div>
            <button onClick={calculateTax}>Bereken Belasting</button>
            {taxResult !== null && (
                <div>
                    <h2>Te Betalen Belasting: €{taxResult.toFixed(2)}</h2>
                </div>
            )}
        </div>
    );
};

export default Calculator;