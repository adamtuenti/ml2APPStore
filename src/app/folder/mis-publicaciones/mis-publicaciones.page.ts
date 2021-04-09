import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicacionesGenerales } from 'src/app/models/publicacionesGenerales';
import { PublicacionesGeneralesService } from 'src/app/services/publicaciones-generales.service';
import { AngularFireStorage } from 'angularfire2/storage';
import { AlertController, LoadingController } from '@ionic/angular';
import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-mis-publicaciones',
  templateUrl: './mis-publicaciones.page.html',
  styleUrls: ['./mis-publicaciones.page.scss'],
})
export class MisPublicacionesPage implements OnInit {

  idUser = localStorage.getItem('userId');
  public user: Usuarios=new Usuarios();

  publicaciones : PublicacionesGenerales[] = [];
  condicion: boolean;

  constructor(private angularFireStorage: AngularFireStorage,
              private router: Router,
              private alertCtrt: AlertController,
              private usuarioService: UsuarioService,
              private publicacionesService: PublicacionesGeneralesService,
              private activateRoute: ActivatedRoute,
              public loadingController: LoadingController) { }

  ngOnInit() {
    this.publicacionesService.getPublicaciones().subscribe(res=> {this.publicaciones = res;this.condicion = this.getDatos();});
    this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => {this.user =res;})
  }

  getDatos(){
    for(let i= 0; i<this.publicaciones.length; i++){
      if(this.publicaciones[i].Usuario == this.idUser){     
            return false;      
      }
    }
    return true;
  }

  async alert(id) {
    const alert = await this.alertCtrt.create({
      cssClass: 'my-custom-class',
      header: "¿Desea eliminar esta publicación?",
      buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              //console.log('Confirm Cancel: blah');
            }
          }, {
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
    this.publicacionesService.removePublicacion(id)
    // this.user.Publicaciones = this.user.Publicaciones - 1;
    // this.usuarioService.updateUsuario(this.idUser,this.user)
  }

}
