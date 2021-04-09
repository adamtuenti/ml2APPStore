import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Locales } from 'src/app/models/locales';
import { LocalesService } from 'src/app/services/locales.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { MensajeErrorService } from 'src/app/services/mensaje-error.service';

@Component({
  selector: 'app-editar-local',
  templateUrl: './editar-local.page.html',
  styleUrls: ['./editar-local.page.scss'],
})
export class EditarLocalPage implements OnInit {

  idLocal;
  public local: Locales = new Locales();
  idUser;
  idPropietario;
  image;
  file: File;
  loading: HTMLIonLoadingElement;

  constructor(private router: Router,
              private activateRoute: ActivatedRoute,
              private localesService: LocalesService,
              public loadingController: LoadingController,
              private mensajeErrorService: MensajeErrorService,
              private alertCtrt: AlertController) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
    this.idLocal = paramMap.get('idLocal');
    this.idPropietario = paramMap.get('idPropietario');
    this.localesService.getLocal(paramMap.get('idLocal')).subscribe(res=> {this.local = res;this.image = res.Foto});
    this.idUser = localStorage.getItem('userId');
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
        this.file = event.target.files[0];

        const reader = new FileReader();
        reader.onload = e => this.image = reader.result;

        reader.readAsDataURL(this.file);
    }
  }

  async UpdateLocal(form):Promise<void>{
   // this.presentLoading("Espere por favor...");
    this.presentLoading("Espere por favor...");

    var nombre;
    var telefono;
    var horario;
    var domicilio;
    var redSocial;
    var descripcion;
    var referencia;

    if(form.value.nombre == ''){
      nombre = this.local.Nombre;
    }
    else{
      nombre = form.value.nombre;
    }

    if(form.value.horario == ''){
      horario = this.local.HorarioAtencion;
    }
    else{
      horario = form.value.horario
    }


    if(form.value.domicilio == ''){
      domicilio = this.local.Domicilio;
    }
    else{
      domicilio = form.value.domicilio
    }

    if(form.value.redSocial == ''){
      redSocial = this.local.RedSocial;
    }
    else{
      redSocial = form.value.redSocial
    }

    if(form.value.descripcion == ''){
      descripcion = this.local.Descripcion;
    }
    else{
      descripcion = form.value.descripcion
    }

    if(form.value.referencia == ''){
      referencia = this.local.Referencia;
    }
    else{
      referencia = form.value.referencia
    }


    var primeros;

    if(form.value.telefono!=''){
      telefono = form.value.telefono;
      primeros = telefono.slice(0,3);

    }else{
      telefono = this.local.Telefono;
      primeros = telefono.slice(0,3);
    }
    

    
    
    if(telefono.slice(0,1)==0){
      telefono = '+593' + telefono.slice(1,telefono.length);
    }
    else if(primeros == '+593'){
      telefono = telefono
    }


      this.UpdateLocalCompleto(nombre,telefono,horario,domicilio,redSocial,descripcion,referencia,this.image)

    // }else{
    //   this.UpdateLocalCompleto(form.value.nombre,telefono,form.value.horario,this.local.Domicilio,form.value.redSocial,form.value.descripcion,form.value.referencia,this.image)
    // }
    

    
  }

  async UpdateLocalCompleto(nombre: string, telefono: string, horario:string,domicilio:string,redSocial:string,descripcion:string,referencia:string,downloadURL:string){
    this.local.Nombre = nombre;
    this.local.Referencia = referencia;
    this.local.Telefono = telefono;
    this.local.Descripcion = descripcion;
    this.local.HorarioAtencion = horario;
    this.local.RedSocial = redSocial;
    this.local.Foto = downloadURL;
    this.local.Domicilio = domicilio;
    this.localesService.updateLocal(this.idLocal, this.local).
    then(
      auth=>{
        this.loading.dismiss();
        this.router.navigate(['/detalle-local',this.idLocal,this.idPropietario])
       
       
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
