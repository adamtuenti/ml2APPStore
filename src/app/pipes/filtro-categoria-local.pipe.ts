import { Pipe, PipeTransform } from '@angular/core';
import { CategoriasLocales } from '../models/categoriasLocales';

@Pipe({
  name: 'filtroCategoriaLocal'
})
export class FiltroCategoriaLocalPipe implements PipeTransform {

  quitarAcentos(cadena){
    const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
    return cadena.split('').map( letra => acentos[letra] || letra).join('').toString();	
  }

  transform(categoriasLocales: CategoriasLocales[], texto: string): CategoriasLocales[] {
    if(texto.length === 0){return categoriasLocales}
      texto=texto.toLocaleLowerCase()
      texto = this.quitarAcentos(texto)
      return categoriasLocales.filter(categoriaLocal => {
        var local = categoriaLocal.Nombre.toLocaleLowerCase()
        local = this.quitarAcentos(local)
        return local.includes(texto);
      });
  }

}