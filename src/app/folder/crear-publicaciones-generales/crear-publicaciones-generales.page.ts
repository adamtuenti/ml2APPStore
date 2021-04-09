import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicacionesGenerales } from 'src/app/models/publicacionesGenerales';
import { PublicacionesGeneralesService } from 'src/app/services/publicaciones-generales.service';
import { AngularFireStorage } from 'angularfire2/storage';
import { AlertController, LoadingController } from '@ionic/angular';
import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-crear-publicaciones-generales',
  templateUrl: './crear-publicaciones-generales.page.html',
  styleUrls: ['./crear-publicaciones-generales.page.scss'],
})
export class CrearPublicacionesGeneralesPage implements OnInit {

  public publicacion: PublicacionesGenerales = new PublicacionesGenerales();
  loading: HTMLIonLoadingElement;
  image: string | ArrayBuffer;
  image1: string | ArrayBuffer;
  public user: Usuarios=new Usuarios();
  idUser;

  file: File;
  file1: File;

  constructor(private angularFireStorage: AngularFireStorage,
              private router: Router,
              private usuarioService: UsuarioService,
              private alertCtrt: AlertController,
              private publicacionesService: PublicacionesGeneralesService,
              private activateRoute: ActivatedRoute,
              public loadingController: LoadingController) { }

  ngOnInit() {
    this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => {this.user =res;});
    this.idUser = localStorage.getItem('userId');
  }

  crearPublicacion(form){
    this.presentLoading("Espere por favor...");
    var fechaActual = new Date();
    this.publicacion.Titulo = form.value.titulo;
    this.publicacion.Descripcion = form.value.descripcion;
    this.publicacion.Usuario = localStorage.getItem('userId');
    this.publicacion.Visitas = 0;
    this.publicacion.Visibilidad = true;
    this.publicacion.Fecha = fechaActual.toString();

    this.guardarPublicacion();
 
   
    

    
    
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

  readURL1(event): void {
    if (event.target.files && event.target.files[0]) {
        this.file1 = event.target.files[0];

        const reader = new FileReader();
        reader.onload = e => this.image1 = reader.result;

        reader.readAsDataURL(this.file1);
    }
  }

  guardarPublicacion(){
    
    var storageRef = this.angularFireStorage.storage.ref()

    var storageRef1 = this.angularFireStorage.storage.ref()

    
    storageRef.child(this.file.name).put(this.file)
    .then(
            data=>{
                    data.ref.getDownloadURL().then(
                        downloadURL => {

                          if(this.file1 != null){
                            storageRef1.child(this.file1.name).put(this.file1)
                            .then(
                              data1=>{data1.ref.getDownloadURL().then(
                                downloadURL1 =>this.guardarCompleto(downloadURL, downloadURL1)  
                                )}
                            ).catch(err=>{this.loading.dismiss(), this.failedAlert("Error al cargar la foto 1")});

                          }
                          else{
                            this.guardarCompleto(downloadURL, '')
                          }
                          
                            
                            
                          
                      
                        }
                    ).catch(err=>{this.loading.dismiss(), this.failedAlert("Error al cargar la foto 2")});
                    

            }
    )     


  }

  guardarCompleto(downloadURL: string, downloadURL1: string){
    this.publicacion.Foto = downloadURL;
    this.publicacion.Foto1 = downloadURL1;
    this.user.Publicaciones = this.user.Publicaciones + 1;
    this.usuarioService.updateUsuario(this.idUser,this.user);
    this.publicacionesService.addPublicacion(this.publicacion).then(
      auth=>{
        
        this.loading.dismiss();


        this.router.navigate(["/publicaciones"])
      }       
    ).catch(async error => {
      this.loading.dismiss();
      this.failedAlert("Algo salió mal, inténtelo de nuevo");
    })
  }
  
}
