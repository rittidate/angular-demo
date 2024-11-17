import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { DashboardStatusComponent } from './dashboard-status/dashboard-status.component';
import { DashboardTrafficComponent } from './dashboard-traffic/dashboard-traffic.component';

import { DashboardTicketComponent } from './dashboard-ticket/dashboard-ticket.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent,
      DashboardStatusComponent,
      DashboardTrafficComponent,
      DashboardTicketComponent]
})
export class AppComponent {

}
