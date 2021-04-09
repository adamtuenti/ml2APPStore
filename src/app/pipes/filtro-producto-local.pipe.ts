import { Pipe, PipeTransform } from '@angular/core';
import { ProductosLocales } from '../models/productosLocales';

@Pipe({
  name: 'filtroProductoLocal'
})
export class FiltroProductoLocalPipe implements PipeTransform {

  transform(productos: ProductosLocales[], texto: string): ProductosLocales[] {
    if(texto.length === 0){return productos}
      texto=texto.toLocaleLowerCase()
      return productos.filter(producto => {
        return producto.Titulo.toLocaleLowerCase().includes(texto)
      });
  }

}
