import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component'
import { FooterComponent } from './shared/footer/footer.component'
import { IndexComponent } from './pages/index/index.component'
import { AboutComponent } from './pages/about/about.component'
import { HttpClientModule } from '@angular/common/http';

//Importación de la interfaz
import { Pelicula } from './interfaces/pelicula';

//Importación del servicio
import { DatosService } from './providers/datos.service'





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent, IndexComponent, AboutComponent, HttpClientModule],
  providers: [DatosService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DataMovies';
  //Atributo con el tipo de dato de la interfaz
  public data: Pelicula[] = [];
  //Inyección de dependencia del servicio
  constructor(private dataProvider: DatosService) { }
  //Ejecución de la petición y suscripción de la respuesta

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => {
      let dataArray = (response as Pelicula[]);
      this.data = dataArray.slice(0, 10);
    })
  }
}
