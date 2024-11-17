import { Component, signal, output } from '@angular/core';
import { InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  calculate = output<InvestmentInput>()
  enterdInitialInvestment = signal('0');
  enterdAnnualInvestment = signal('0');
  enterdExpectedReturn = signal('5');
  enterdDuration = signal('10');

  constructor(private investmentService: InvestmentService) {}

  onSummit() {
    this.investmentService.onCulateInvestmentResults(
      {
        initialInvestment: +this.enterdInitialInvestment(),
        expectedReturn: +this.enterdExpectedReturn(),
        duration: +this.enterdDuration(),
        annualInvestment: +this.enterdAnnualInvestment()
      }
    )
    this.enterdInitialInvestment.set('0');
    this.enterdAnnualInvestment.set('0');
    this.enterdExpectedReturn.set('5');
    this.enterdDuration.set('10');
  }
}