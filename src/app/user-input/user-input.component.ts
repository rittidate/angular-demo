import { Component, signal, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  calculate = output<InvestmentInput>()
  enterdInitialInvestment = signal('0');
  enterdAnnualInvestment = signal('0');
  enterdExpectedReturn = signal('5');
  enterdDuration = signal('10');
  onSummit() {
    this.calculate.emit(
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