import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductosLocales } from 'src/app/models/productosLocales';
import { ProductosLocalesService } from 'src/app/services/productos-locales.service';
import { AngularFireStorage } from 'angularfire2/storage';
import { AlertController, LoadingController } from '@ionic/angular';
import { MensajeErrorService } from 'src/app/services/mensaje-error.service';

@Component({
  selector: 'app-producto-local-editar',
  templateUrl: './producto-local-editar.page.html',
  styleUrls: ['./producto-local-editar.page.scss'],
})
export class ProductoLocalEditarPage implements OnInit {

  producto: ProductosLocales = new ProductosLocales();
  public image;
  file: File;
  loading: HTMLIonLoadingElement;
  idProducto;
  idLocal;
  idPropietario;

  constructor(private productosService: ProductosLocalesService,
              private router: Router,
              private activateRoute: ActivatedRoute,
              private angularFireStorage: AngularFireStorage,
              public loadingController: LoadingController,
              private mensajeErrorService: MensajeErrorService,
              private alertCtrt: AlertController) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      this.idProducto = paramMap.get('idProducto');
      this.idLocal = paramMap.get('idLocal');
      this.idPropietario = paramMap.get('idPropietario');
      this.productosService.getProducto(this.idProducto).subscribe(res => {this.producto =res; this.image=res.Foto});
    
    })

    
    
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
        this.file = event.target.files[0];

        const reader = new FileReader();
        reader.onload = e => this.image = reader.result;

        reader.readAsDataURL(this.file);
    }
  }


  async UpdateProducto(form):Promise<void>{
   // this.presentLoading("Espere por favor...");
    this.presentLoading("Espere por favor...");
    this.UpdateProductoCompleto(form.value.precio,form.value.titulo,this.image)

    
  }

  guardarArchivo(precio: number, titulo: string){
    //this.presentLoading("Espere por favor...");
    
    var storageRef = this.angularFireStorage.storage.ref()

    
    storageRef.child(this.file.name).put(this.file)
    .then(
            data=>{
                    data.ref.getDownloadURL().then(
                        downloadURL => {
                          this.UpdateProductoCompleto(precio, titulo, downloadURL)

                      
                        }
                    ).catch(err=>{this.loading.dismiss(), this.failedAlert("Error al cargar la foto de perfil, intentelo de nuevo")});
                    

            }
    )     


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

 

  
  async UpdateProductoCompleto(precio: number, titulo: string, downloadURL:string){
    this.producto.Precio = precio;
    this.producto.Foto = downloadURL;
    this.producto.Titulo = titulo;
    this.productosService.updateProducto(this.idProducto, this.producto).
    then(
      auth=>{
        this.loading.dismiss();
        
        this.router.navigate(['/productos-locales',this.idLocal,this.idPropietario])
       
       
      }  
    ).catch(async error => {
      this.loading.dismiss();
      var mensaje=error.code.split('/')[1];
      const presentarMensaje = this.mensajeErrorService.AuthErrorCodeSpanish(mensaje);
      this.failedAlert(presentarMensaje)
    })
  }




  

}

