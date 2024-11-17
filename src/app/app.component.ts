import { Component, Input } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentInput } from './investment-input.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, InvestmentResultsComponent, UserInputComponent]
})
export class AppComponent {
  resultData?:{
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[]

  onCulateInvestmentResults(data: InvestmentInput) {
    const {
    initialInvestment,
    expectedReturn,
    duration,
    annualInvestment
    } = data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
    annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
    });
    }

    this.resultData = annualData;
  }

}
