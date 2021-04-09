import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireStorage } from 'angularfire2/storage';

import { LoadingController } from '@ionic/angular';
import { MensajeErrorService } from 'src/app/services/mensaje-error.service';

import { Variables } from 'src/app/models/variables';
import { VariablesService } from 'src/app/services/variables.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  file: File;
  file1: File;
  imageSrc: string | ArrayBuffer;
  loading: HTMLIonLoadingElement;

  variables : Variables = new Variables();

  constructor(private angularFireStorage: AngularFireStorage,
              private authService:AuthService,
              private variablesService: VariablesService,
              private router: Router,
              private mensajeErrorService: MensajeErrorService,
              private alertCtrt: AlertController,
              public loadingController: LoadingController,
             ) { }

  ngOnInit() {
    this.variablesService.getVariable('wCIVneApMUwcOvDwIneJ').subscribe(res=> {this.variables = res;});
    
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
        reader.onload = e => this.imageSrc = reader.result;

        reader.readAsDataURL(this.file);
    }
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }



  async RegistrarUser(form):Promise<void>{
    if (this.ValidateEmail(form.value.email)==false){
      const alert = await this.alertCtrt.create({
        message: 'Ingrese un correo valido.',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }
    if ((String(form.value.email)).length<6){
      const alert = await this.alertCtrt.create({
        message: 'Contraseña demasiado corta, ingrese almenos 6 caracteres.',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }
    
    this.presentLoading("Espere por favor...");
    var telefono = form.value.telefono;
    var primeros = telefono.slice(0,3);
    if(telefono.slice(0,1)==0){
      telefono = '+593' + telefono.slice(1,telefono.length);
    }
    else if(primeros == '+593'){
      telefono = telefono
    }

    var nombre = this.capitalizeFirstLetter(form.value.nombre)
    var apellido = this.capitalizeFirstLetter(form.value.apellido)

      
    this.guardarArchivo(nombre, apellido,form.value.email, form.value.password, form.value.ciudadela, form.value.manzana, form.value.villa, telefono);
    
  }

  guardarArchivo(nombre:string, apellido: string, email:string, password:string, ciudadela:string ,manzana:string, villa: string, telefono: string){
    
    var storageRef = this.angularFireStorage.storage.ref()

    
    storageRef.child(this.file.name).put(this.file)
    .then(
            data=>{
                    data.ref.getDownloadURL().then(
                        downloadURL => {
                          
                            this.RegistrarUserCompleto(nombre, apellido, email, password, ciudadela, manzana, villa, telefono, downloadURL)  

                      
                        }
                    ).catch(err=>{this.loading.dismiss(), this.failedAlert("Error al cargar la foto de perfil, intentelo de nuevo")});
                    

            }
    )     


  }

 

  
  async RegistrarUserCompleto(nombre:string, apellido: string, email:string, password:string, ciudadela:string ,manzana:string, villa: string, telefono: string, downloadURL:string){
    this.authService.registerUser(nombre, apellido, email, password, ciudadela, manzana, villa, telefono, downloadURL).
    then(
      auth=>{
        this.loading.dismiss();

        this.authService.loginUser(email, password).
        then(
          (res)=>{
            localStorage.setItem('userId', res.user.uid);
            localStorage.setItem('Fondo','#FBC8B5');
            localStorage.setItem('FotoPerfil',downloadURL);                   
            this.router.navigateByUrl('/categorias');
        },
          
          async error => {
            var mensaje=error.code.split('/')[1]
            const presentarMensaje = this.mensajeErrorService.AuthErrorCodeSpanish(mensaje);
            const alert = await this.alertCtrt.create({
              message: presentarMensaje,
              buttons:[{text: 'ok', role: 'cancel'}],      
            });
            await alert.present();
          
          }
        )



        
          ///this.router.navigateByUrl("/categorias")
       
       
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

  ValidateEmail(mail:string){
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail))
      {
        return (true)
      }
        return (false)
    }

  

}