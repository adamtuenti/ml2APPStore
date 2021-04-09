import { Component, OnInit } from '@angular/core';
import { Categorias } from 'src/app/models/categorias';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  categorias: Categorias[] = [];
  textoBuscar = '';
  numeroOpcion = 1;

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit() {
    this.categoriasService.getCategorias().subscribe(res=> {this.categorias = res;});
  }

  buscar(event){
    const texto = event.target.value
    this.textoBuscar=texto;
  }

}
