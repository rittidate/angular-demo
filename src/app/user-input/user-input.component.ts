import { Component, EventEmitter, input, output } from '@angular/core';
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
  enterdInitialInvestment = '0';
  enterdAnnualInvestment = '0';
  enterdExpectedReturn = '5';
  enterdDuration = '10';

  onSummit() {
    this.calculate.emit(
        {
        initialInvestment: +this.enterdInitialInvestment,
        expectedReturn: +this.enterdExpectedReturn,
        duration: +this.enterdDuration,
        annualInvestment: +this.enterdAnnualInvestment
      }
    )
  }
}