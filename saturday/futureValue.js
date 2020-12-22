/*
private static double calculateFutureValue(double monthlyInvestment, double monthlyInterestRate, int months) {
		double futureValue = 0.0;
		for (int i = 1; i <= months; i++) {
			futureValue = (futureValue + monthlyInvestment) * (1 + monthlyInterestRate);
		}
		return futureValue;
	}

*/
function calculateFutureValue(monthlyInv, monthlyInterestRate, months){
//calculate future value ...
let futureValue = 0;
for (let i =1; i <= months; i++){
    futureValue = (futureValue + monthlyInv) * (1 + monthlyInterestRate);

}
return futureValue;
}
let futValue = calculateFutureValue(100, 0.01, 120);
console.log(futValue);