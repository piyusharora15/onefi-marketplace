export function calculateEmi(principal, tenure, annualInterestRate = 0) {
  if (!principal || !tenure) {
    return 0;
  }

  if (annualInterestRate === 0) {
    return principal / tenure;
  }

  const monthlyRate = annualInterestRate / 12 / 100;

  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
    (Math.pow(1 + monthlyRate, tenure) - 1);

  return emi;
}

export function roundCurrency(value) {
  return Math.round(value);
}
