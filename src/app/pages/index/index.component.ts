import { Component ,ViewChild,ElementRef} from '@angular/core';
import { CommonModule } from '@angular/common';


//Importación de la interfaz
import { Pelicula } from '../../interfaces/pelicula';
//Importación del servicio
import { DatosService } from '../../providers/datos.service'


@Component({
  selector: 'app-index',
  providers: [DatosService],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  title = 'DataMovies';
  filterPelicula ='';
  //Atributo con el tipo de dato de la interfaz
  public data: Pelicula[] = [];
  //Inyección de dependencia del servicio
  constructor(private dataProvider: DatosService) { }
  //Ejecución de la petición y suscripción de la respuesta

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => {
      let dataArray = (response as Pelicula[]);
      this.data = dataArray.slice(0, 15);
    })
  }
  
  
}

