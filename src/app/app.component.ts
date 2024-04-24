import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, HousingLocationComponent],
  // templateUrl: './app.component.html',
  template: `

  

  
  
  <section class="results">
    <app-housing-location></app-housing-location>
  </section>


`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homes';
  
}
