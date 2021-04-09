import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Productos } from 'src/app/models/productos';
import { ProductosService } from 'src/app/services/productos.service';
import { AlertController } from '@ionic/angular';
import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Variables } from 'src/app/models/variables';
import { VariablesService } from 'src/app/services/variables.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  productos: Productos[] = [];
  textoBuscar = '';
  categoria;
  public user: Usuarios=new Usuarios();
  condicion: boolean = false;
  variables : Variables = new Variables();

  constructor(private productosService: ProductosService,
              private router: Router,
              private usuarioService: UsuarioService,
              private variablesService: VariablesService,
              private alertCtrt: AlertController,
              private activateRoute: ActivatedRoute,) { }

  ngOnInit() {

    this.activateRoute.paramMap.subscribe(paramMap => {
      this.categoria = paramMap.get('categoria');
      this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => {this.user =res;});
      this.variablesService.getVariable('wCIVneApMUwcOvDwIneJ').subscribe(res=> {this.variables = res;});
      this.productosService.getProductos().subscribe(res=> {this.productos = res;this.condicion = this.getDatos();this.shuffle(this.productos)});
    });
    
  }

  buscar(event){
    const texto = event.target.value
    this.textoBuscar=texto;
  }

  getDatos(){
    for(let i= 0; i<this.productos.length; i++){
      if(this.productos[i].Categoria == this.categoria){     
            return false;      
      }
    }
    return true;
  }

  aumentarVisita(id:string,productos:Productos){
    productos.Visitas= productos.Visitas + 1
    this.productosService.updateProducto(id,productos)
      this.router.navigate(['/producto-detalle',productos.id,productos.Vendedor]); 
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  validarVendedor(){
    if(this.user.Vendedor){
      if(this.user.Productos >= this.variables.NumeroProductos){
        if(this.user.Premium){
          this.router.navigate(['/crear-producto',this.categoria]);
        }else{
          this.serPremium();
        }
      }else{
        this.router.navigate(['/crear-producto',this.categoria]);
      }
      

    }else{
      this.serVendedor()

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

  async serVendedor() {

    const alert = await this.alertCtrt.create({
      cssClass: 'my-custom-class',
      header: 'Su cuenta no es de vendedor',
      
      message: 'Para poder subir un producto, diríjase a su perfil y solicite ser vendedor.',


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
