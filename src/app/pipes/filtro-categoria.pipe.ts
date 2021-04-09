import { Pipe, PipeTransform } from '@angular/core';
import { Categorias } from '../models/categorias';

@Pipe({
  name: 'filtroCategoria'
})
export class FiltroCategoriaPipe implements PipeTransform {

  transform(categorias: Categorias[], texto: string): Categorias[] {
    if(texto.length === 0){return categorias}
      texto=texto.toLocaleLowerCase()
      return categorias.filter(categoria => {
        return categoria.Nombre.toLocaleLowerCase().includes(texto);
      });
  }

}
