import { Component } from '@angular/core';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  template: `
  <!-- Navbar -->
<nav class="navbar">
  <div class="container">
    <h1 class="logo">Airbnb Clone</h1>
    <ul class="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
</nav>

<!-- Jumbotron -->
<div class="jumbotron">
  <div class="container">
    <h1>Welcome to Your Airbnb Clone</h1>
    <p>Find unique places to stay and things to do, all over the world.</p>
    <form>
      <input type="text" placeholder="Search for a destination...">
      <button type="submit">Search</button>
    </form>
  </div>
</div>

<!-- Footer -->
<footer>
  <div class="container">
    <p>&copy; 2024 Your Airbnb Clone. All rights reserved.</p>
  </div>
</footer>
  
  `,
  styleUrl: './housing-location.component.css'

  // styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {

}
