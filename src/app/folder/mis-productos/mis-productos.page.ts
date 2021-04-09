import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Productos } from 'src/app/models/productos';
import { ProductosService } from 'src/app/services/productos.service';
import { AlertController } from '@ionic/angular';
import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-mis-productos',
  templateUrl: './mis-productos.page.html',
  styleUrls: ['./mis-productos.page.scss'],
})
export class MisProductosPage implements OnInit {

  productos: Productos[] = [];
  textoBuscar = '';
  condicion: boolean;
  public user: Usuarios=new Usuarios();
  idUser;

  constructor(private productosService: ProductosService,
              private router: Router,
              private usuarioService: UsuarioService,
              private activateRoute: ActivatedRoute,
              private alertCtrt: AlertController) { }

  ngOnInit() {

    this.idUser = localStorage.getItem('userId');
    this.productosService.getProductos().subscribe(res=> {this.productos = res;this.condicion = this.getDatos()});
    this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => {this.user =res;})

    
  }

  buscar(event){
    const texto = event.target.value
    this.textoBuscar=texto;
  }

  getDatos(){
    for(let i= 0; i<this.productos.length; i++){
      if(this.productos[i].Vendedor == this.idUser){     
            return false;      
      }
    }
    return true;
  }

  async alert(id) {
    const alert = await this.alertCtrt.create({
     cssClass: 'my-custom-class',
     header: "¿Desea eliminar este producto?",
    buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            //console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Elminar',
          handler: (data) => {
            this.remove(id)                  
          }
        }
      ]
    });
    await alert.present();
  }
  remove(id){
    this.productosService.removerProducto(id);
    this.user.Productos = this.user.Productos - 1;
    this.usuarioService.updateUsuario(this.idUser,this.user)
  }

  

}