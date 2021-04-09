import { Component, OnInit } from '@angular/core';
import { Servicios } from 'src/app/models/servicios';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-crear-servicio',
  templateUrl: './crear-servicio.page.html',
  styleUrls: ['./crear-servicio.page.scss'],
})
export class CrearServicioPage implements OnInit {

  public servicio: Servicios = new Servicios();
  loading: HTMLIonLoadingElement;
  image: string | ArrayBuffer;

  file: File;

  constructor(private angularFireStorage: AngularFireStorage,
              private router: Router,
              private alertCtrt: AlertController,
              private servicioService: ServiciosService,
              private activateRoute: ActivatedRoute,
              public loadingController: LoadingController) { }

  ngOnInit() {
  }

  crearServicio(form){
    this.presentLoading("Espere por favor...");
    this.servicio.Titulo = form.value.titulo;
    this.servicio.Descripcion = form.value.descripcion;
    this.servicio.Usuario = localStorage.getItem('userId');
    this.servicio.Visibilidad = true;
    this.servicio.Visitas = 0;

    this.guardarServicio();
 
   
    

    
    
  }



  async presentLoading(mensaje: string) {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: mensaje,
      //duration: 2000
    });
    return this.loading.present();
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

  readURL(event): void {
    if (event.target.files && event.target.files[0]) {
        this.file = event.target.files[0];

        const reader = new FileReader();
        reader.onload = e => this.image = reader.result;

        reader.readAsDataURL(this.file);
    }
  }

  guardarServicio(){
    
    var storageRef = this.angularFireStorage.storage.ref()


    
    storageRef.child(this.file.name).put(this.file)
    .then(
            data=>{
                    data.ref.getDownloadURL().then(
                        downloadURL => {
                              this.guardarCompleto(downloadURL)  
                      
                        }
                    ).catch(err=>{this.loading.dismiss(), this.failedAlert("Error al cargar la foto")});
                    

            }
    )     


  }

  guardarCompleto(downloadURL: string){
    this.servicio.Foto = downloadURL;
    this.servicioService.addServicio(this.servicio).then(
      auth=>{
        
        this.loading.dismiss();


        this.router.navigate(["/servicios"])
      }       
    ).catch(async error => {
      this.loading.dismiss();
      this.failedAlert("Algo salió mal, inténtelo de nuevo");
    })
  }

}
