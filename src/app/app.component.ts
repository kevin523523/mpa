import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component'
import { FooterComponent } from './shared/footer/footer.component'
import { IndexComponent } from './pages/index/index.component'
import { AboutComponent } from './pages/about/about.component'
import { LoginComponent } from './pages/login/login.component'




@Component({
  selector: 'app-root',
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

}
