import { Component, OnInit } from '@angular/core';
import { Comentarios } from 'src/app/models/comentarios';
import { ComentariosService } from 'src/app/services/comentarios.service';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-comentarios-local',
  templateUrl: './comentarios-local.page.html',
  styleUrls: ['./comentarios-local.page.scss'],
})
export class ComentariosLocalPage implements OnInit {

  comentarios:Comentarios[] = [];
  idLocal;
  public comentario: Comentarios=new Comentarios();
  public user: Usuarios=new Usuarios();
  idUser;
  idPropietario;
  condicion: boolean;
  usuarios:Usuarios[] = [];


  constructor(private comentariosService: ComentariosService,
              private activateRoute: ActivatedRoute,
              private usuarioService: UsuarioService,
              private alertCtrt: AlertController) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      this.idLocal = paramMap.get('idLocal');
      this.idPropietario = paramMap.get('idPropietario');
      this.comentariosService.getComentarios().subscribe(res => {this.comentarios = res;this.condicion = this.getDatos()});
      this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => {this.user =res;});
      this.idUser = localStorage.getItem('userId');
      this.usuarioService.getUsuarios().subscribe(res => this.usuarios = res);
    });
    
  }

  getDatos(){
    for(let i= 0; i<this.comentarios.length; i++){
      if(this.comentarios[i].Empresa == this.idLocal){     
            return false;      
      }
    }
    return true;
  }

  async alert(id) {
    const alert = await this.alertCtrt.create({
     cssClass: 'my-custom-class',
     header: "¿Desea eliminar este comentario?",
    buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            //console.log('Confirm Cancel: blah');
          }
        }, 
        {
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
    this.comentariosService.removeComentario(id)
  }

  async crearComentario() {

    const alert = await this.alertCtrt.create({
      cssClass: 'my-custom-class',
      //header: 'Agregar comentario:',
      
      message: 'Agregar un comentario',
      inputs: [
        {
          name: 'comentario',
          placeholder: 'Comentario...',
          type: 'text'
          
        },
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
            if(data.curso != ""){
              this.agregarComentario(data.comentario)
            }else if(data.curso== ""){
              
              //this.failedAlert("El campo email es requerido");
            }
          }
        }
      ]
    });
    await alert.present();
  }

  agregarComentario(comentario:string){
    var fechaActual = new Date();
    this.comentario.Empresa = this.idLocal;
    this.comentario.Usuario = this.idUser;
    this.comentario.Descripcion = comentario;
    this.comentario.Fecha = fechaActual.toString();
    this.comentariosService.addComentario(this.comentario);

  }

}
