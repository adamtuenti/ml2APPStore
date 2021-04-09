import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Locales } from 'src/app/models/locales';
import { LocalesService } from 'src/app/services/locales.service';
import { CalificacionesLocales } from 'src/app/models/calificacionesLocales';
import { CalificacionesService } from 'src/app/services/calificaciones.service';
import { AlertController } from '@ionic/angular';
import { Comentarios } from 'src/app/models/comentarios';
import { ComentariosService } from 'src/app/services/comentarios.service';

@Component({
  selector: 'app-detalle-local',
  templateUrl: './detalle-local.page.html',
  styleUrls: ['./detalle-local.page.scss'],
})
export class DetalleLocalPage implements OnInit {

  idLocal;
  public local: Locales = new Locales();
  public calificacion: CalificacionesLocales = new CalificacionesLocales();
  public calificaciones: CalificacionesLocales [] = [];
  public comentario: Comentarios=new Comentarios();

  idUser;
  idPropietario;
  calificarBool;
  valor;

  constructor(private router: Router,
              private activateRoute: ActivatedRoute,
              private localesService: LocalesService,
              private calificacionesService: CalificacionesService,
              private alertCtrt: AlertController,
              private comentariosService: ComentariosService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
    this.idLocal = paramMap.get('idLocal');
    this.idPropietario = paramMap.get('idPropietario');
    this.localesService.getLocal(paramMap.get('idLocal')).subscribe(res=> {this.local = res;});
    this.idUser = localStorage.getItem('userId');
    this.calificacionesService.getCalificaciones().subscribe(res => {this.calificaciones = res; this.calificarBool = this.validarCalificacion();})
    });
  }

  validarCalificacion(){
    for(let i= 0; i < this.calificaciones.length; i++){
      if(this.calificaciones[i].Usuario == this.idUser && this.calificaciones[i].Local == this.idLocal){
        this.valor = this.calificaciones[i].Calificacion; 
        return true;

      }
    }
    return false;
  }

  calificar(form){
    this.calificacion.Usuario = this.idUser;
    this.calificacion.Local = this.idLocal;
    this.calificacion.Calificacion = parseInt(form.value.estrellas,10);
    this.calificacionesService.addCalificacion(this.calificacion);
    this.local.Calificacion = Math.round((this.local.Calificacion + parseInt(form.value.estrellas,10)) / 2);
    this.localesService.updateLocal(this.idLocal, this.local);
    this.alertaComentario();

  }

  async alertaComentario() {

    const alert = await this.alertCtrt.create({
      cssClass: 'my-custom-class',
      header: '¿Tienes algun comentario acerca del local?',
      
      // message: 'Nombre del curso:',
      inputs: [
        {
          name: 'local',
          placeholder: 'Comentario del local',
          type: 'text'
          
        }
      ],

      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
           // console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            if(data.local != ""){
              this.agregarComentario(data.local)
            }else if(data.local == ""){
              
              //this.failedAlert("El campo email es requerido");
            }
          }
        }
      ]
    });
    await alert.present();
  }

  agregarComentario(local:string){
    var fechaActual = new Date();
    this.comentario.Empresa = this.idLocal;
    this.comentario.Usuario = this.idUser;
    this.comentario.Descripcion = local;
    this.comentario.Fecha = fechaActual.toString();
    this.comentariosService.addComentario(this.comentario);

  }

}
