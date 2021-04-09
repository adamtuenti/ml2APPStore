import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Locales } from 'src/app/models/locales';
import { LocalesService } from 'src/app/services/locales.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-crear-local',
  templateUrl: './crear-local.page.html',
  styleUrls: ['./crear-local.page.scss'],
})
export class CrearLocalPage implements OnInit {
  categoria: string;
  public local: Locales= new Locales();
  loading: HTMLIonLoadingElement;

  image: string | ArrayBuffer;
  file: File;


  constructor(private router: Router,
              private angularFireStorage: AngularFireStorage,
              private alertCtrt: AlertController,
              public loadingController: LoadingController,
              private localesService: LocalesService,
              private activateRoute: ActivatedRoute) { }

  
  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      this.categoria = paramMap.get('id');
    });   
  }

  readURL(event): void {
    if (event.target.files && event.target.files[0]) {
        this.file = event.target.files[0];

        const reader = new FileReader();
        reader.onload = e => this.image = reader.result;

        reader.readAsDataURL(this.file);
    }
  }


  crearLocal(form){

    var telefono = form.value.telefono;
    var primeros = telefono.slice(0,3);
    if(telefono.slice(0,2)=='09'){
      telefono = '+593' + telefono.slice(1,telefono.length);
    }
    else if(primeros == '+593'){
      telefono = telefono
    }else{
      telefono = telefono;
    }

    this.presentLoading("Espere por favor...");
    this.local.Nombre = form.value.nombre;
    this.local.Descripcion = form.value.descripcion;
    this.local.Ciudadela = form.value.ciudadela;
    this.local.Manzana = form.value.manzana;
    this.local.Villa = form.value.villa;
    this.local.Telefono = telefono;
    this.local.RedSocial = form.value.redSocial;
    this.local.HorarioAtencion = form.value.horarioAtencion;
    this.local.Referencia = form.value.referencia;
    this.local.Usuario = localStorage.getItem('userId');
    this.local.CategoriaLocal = this.categoria;
    this.local.Visibilidad = true;
    this.local.Domicilio = form.value.domicilio;
    this.local.Calificacion = 5;
    this.guardarLocal();
  }

  guardarLocal(){

    var storageRef = this.angularFireStorage.storage.ref()

    
    storageRef.child(this.file.name).put(this.file)
    .then(
            data=>{
                    data.ref.getDownloadURL().then(
                        downloadURL => {      
                               this.crearLocalFinal(downloadURL)  
                        }
                    ).catch(err=>{this.loading.dismiss(), this.failedAlert("Error al cargar la foto")});
                    

            }
    )     

    
  }

  crearLocalFinal(downloadURL: string){
    this.local.Foto = downloadURL;
    this.localesService.addLocal(this.local).then(
      auth=>{
        
        this.loading.dismiss();


        this.router.navigate(["/locales",this.categoria])
      }       
    ).catch(async error => {
      this.loading.dismiss();
      this.failedAlert("Algo salió mal, inténtelo de nuevo");
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
