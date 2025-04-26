export interface UserInput {
    income: number;
    deductions: number;
    taxCredits: number;
}

export interface TaxResult {
    taxableIncome: number;
    taxDue: number;
    netIncome: number;
}