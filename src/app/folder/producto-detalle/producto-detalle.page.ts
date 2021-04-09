import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Productos } from 'src/app/models/productos';
import { Usuarios } from 'src/app/models/usuario';
import { ProductosService } from 'src/app/services/productos.service'; 
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.page.html',
  styleUrls: ['./producto-detalle.page.scss'],
})
export class ProductoDetallePage implements OnInit {
  public user: Usuarios=new Usuarios();

  public producto: Productos=new Productos();
  idProducto: string;
  idVendedor: string;

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };


  constructor(private productosService: ProductosService,
    private router: Router,
    private usuarioService: UsuarioService,
    private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      const idProducto = paramMap.get('id');
      this.idProducto = idProducto;
      const idVendedor = paramMap.get('vendedor');
      this.idVendedor = idVendedor;

      this.productosService.getProducto(idProducto).subscribe(res=> {this.producto = res});
      this.usuarioService.getUsuario(idVendedor).subscribe(res=> this.user = res);

    });
  }

}
