import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<{
                          initialInvestment: number,
                          expectedReturn: number,
                          duration: number,
                          annualInvestment: number
                        }>()
  @Input() enterdInitialInvestment = '0';
  @Input() enterdAnnualInvestment = '0';
  @Input() enterdExpectedReturn = '5';
  @Input() enterdDuration = '10';

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