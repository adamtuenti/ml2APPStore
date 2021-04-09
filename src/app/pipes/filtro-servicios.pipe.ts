import { Pipe, PipeTransform } from '@angular/core';
import { Servicios } from '../models/servicios';

@Pipe({
  name: 'filtroServicios'
})
export class FiltroServiciosPipe implements PipeTransform {

  transform(servicios: Servicios[], texto: string): Servicios[] {
    if(texto.length === 0){return servicios}
      texto=texto.toLocaleLowerCase()
      return servicios.filter(servicio => {
        return servicio.Descripcion.toLocaleLowerCase().includes(texto) ||
            servicio.Titulo.toLocaleLowerCase().includes(texto) 
      });
  }

}
