import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter' 
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg=='') return value;
    const resulPeliculas = [];
    for(const pel of value){
      if(pel.imdb_id.toLowerCase().includes(arg.toLowerCase()) || pel.title.toLowerCase().includes(arg.toLowerCase()) || pel.type.toLowerCase().includes(arg.toLowerCase()) || pel.type.toLowerCase().includes(arg.toLowerCase()) || pel.release_year.toLowerCase().includes(arg.toLowerCase())|| pel.runtime.toLowerCase().includes(arg.toLowerCase())){
        resulPeliculas.push(pel)
      }
    };
    return resulPeliculas;
  }

}


