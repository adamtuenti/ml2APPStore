import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductosLocales } from 'src/app/models/productosLocales';
import { ProductosLocalesService } from 'src/app/services/productos-locales.service';
import { AlertController } from '@ionic/angular';
import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Variables } from 'src/app/models/variables';
import { VariablesService } from 'src/app/services/variables.service';

@Component({
  selector: 'app-productos-locales',
  templateUrl: './productos-locales.page.html',
  styleUrls: ['./productos-locales.page.scss'],
})
export class ProductosLocalesPage implements OnInit {

  productos: ProductosLocales[] = [];
  textoBuscar = '';
  idLocal;
  idPropietario;
  idUser;
  condicion: boolean;
  public user: Usuarios=new Usuarios();
  variables : Variables = new Variables();

  constructor(private productosService: ProductosLocalesService,
              private router: Router,
              private variablesService: VariablesService,
              private activateRoute: ActivatedRoute,
              private usuarioService: UsuarioService,
              private alertCtrt: AlertController) { }

  ngOnInit() {

    this.activateRoute.paramMap.subscribe(paramMap => {
      this.idLocal = paramMap.get('idLocal');
      this.idPropietario = paramMap.get('idPropietario');
      this.variablesService.getVariable('wCIVneApMUwcOvDwIneJ').subscribe(res=> {this.variables = res;});
      this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => {this.user =res;});
      this.productosService.getProductos().subscribe(res=> {this.productos = res;this.condicion = this.getDatos()});
      this.idUser = localStorage.getItem('userId');
    });
    
  }

  buscar(event){
    const texto = event.target.value
    this.textoBuscar=texto;
  }


  getDatos(){
    for(let i= 0; i<this.productos.length; i++){
      if(this.productos[i].Local == this.idLocal){     
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
     this.productosService.removerProducto(id)
  }

  validarVendedor(){
    if(this.user.Productos>this.variables.NumeroProductos){
      if(this.user.Premium){
        this.router.navigate(['/crear-producto-local',this.idLocal, this.idPropietario]);

      }else{
        this.serPremium()
      }
    }else{
      this.router.navigate(['/crear-producto-local',this.idLocal, this.idPropietario]);
    }

  }

  async serPremium() {

    const alert = await this.alertCtrt.create({
      cssClass: 'my-custom-class',
      header: 'Ya excedió el número de productos gratis ('+this.variables.NumeroProductos.toString()+')',
      
      message: 'Para poder subir más productos, diríjase a su perfil y solicite ser premium.',


      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
           // console.log('Confirm Cancel: blah');
          }
        }
      ]
    });
    await alert.present();
  }



  

}
