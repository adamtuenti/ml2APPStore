import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Productos } from 'src/app/models/productos';
import { ProductosService } from 'src/app/services/productos.service';
import { AngularFireStorage } from 'angularfire2/storage';
import { AlertController, LoadingController } from '@ionic/angular';
import { MensajeErrorService } from 'src/app/services/mensaje-error.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.page.html',
  styleUrls: ['./editar-producto.page.scss'],
})
export class EditarProductoPage implements OnInit {

  producto: Productos = new Productos();
  image;
  image1;
  file0: File;
  file1: File;
  loading: HTMLIonLoadingElement;
  idProducto;

  constructor(private productosService: ProductosService,
              private router: Router,
              private activateRoute: ActivatedRoute,
              private angularFireStorage: AngularFireStorage,
              public loadingController: LoadingController,
              private mensajeErrorService: MensajeErrorService,
              private alertCtrt: AlertController) { }

  ngOnInit() {

    this.activateRoute.paramMap.subscribe(paramMap => {
      this.idProducto = paramMap.get('idProducto');
      this.productosService.getProducto(paramMap.get('idProducto')).subscribe(res=> {this.producto = res;this.image = res.Foto1;this.image1 = res.Foto2;});
    });
  }

  async presentLoading(mensaje: string) {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: mensaje,
      //duration: 2000
    });
    return this.loading.present();
  }


  readURL(event): void {
    if (event.target.files && event.target.files[0]) {
        this.file0 = event.target.files[0];

        const reader = new FileReader();
        reader.onload = e => this.image = reader.result;

        reader.readAsDataURL(this.file0);
    }
  }

  readURL1(event): void {
    if (event.target.files && event.target.files[0]) {
        this.file1 = event.target.files[0];

        const reader = new FileReader();
        reader.onload = e => this.image1 = reader.result;

        reader.readAsDataURL(this.file1);
    }
  }

  async UpdateProducto(form):Promise<void>{
   // this.presentLoading("Espere por favor...");
    this.presentLoading("Espere por favor...")

    var precio;
    var titulo;
    var descripcion;

    if(form.value.precio == ''){
      precio = this.producto.Precio
    }else{
      precio = form.value.precio
    }

    if(form.value.titulo == ''){
      titulo = this.producto.Titulo
    }else{
      titulo = form.value.titulo
    }

    if(form.value.descripcion == ''){
      descripcion = this.producto.Descripcion
    }else{
      descripcion = form.value.descripcion
    }


    this.UpdateProductoCompleto(precio,titulo,descripcion,this.image,this.image1)

    
  }

  async UpdateProductoCompleto(precio: number, titulo: string, descripcion:string,downloadURL:string, downloadURL1:string){
    this.producto.Precio = precio;
    this.producto.Foto1 = downloadURL;
    this.producto.Foto2 = downloadURL1;
    this.producto.Titulo = titulo;
    this.producto.Descripcion = descripcion;
    this.productosService.updateProducto(this.idProducto, this.producto).
    then(
      auth=>{
        this.loading.dismiss();
        
        this.router.navigate(['/mis-productos'])
       
       
      }  
    ).catch(async error => {
      this.loading.dismiss();
      var mensaje=error.code.split('/')[1];
      const presentarMensaje = this.mensajeErrorService.AuthErrorCodeSpanish(mensaje);
      this.failedAlert(presentarMensaje)
    })
  }


  async failedAlert(text: string) {
    const alert = await this.alertCtrt.create({
     cssClass: 'my-custom-class',
     header: text,
    buttons: [{
    text: 'OK',
      handler: () => {
        
      }
    }]   
    });
    await alert.present();
  }

}
