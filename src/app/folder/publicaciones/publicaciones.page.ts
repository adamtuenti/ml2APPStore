import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicacionesGenerales } from 'src/app/models/publicacionesGenerales';
import { PublicacionesGeneralesService } from 'src/app/services/publicaciones-generales.service';
import { Publicidad } from 'src/app/models/publicidad';
import { PublicidadService } from 'src/app/services/publicidad.service';
import { AngularFireStorage } from 'angularfire2/storage';
import { AlertController, LoadingController } from '@ionic/angular';
import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Variables } from 'src/app/models/variables';
import { VariablesService } from 'src/app/services/variables.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.page.html',
  styleUrls: ['./publicaciones.page.scss'],
})
export class PublicacionesPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  idUser;

  publicaciones : PublicacionesGenerales[] = [];
  publicidad: Publicidad[] = []
  public user: Usuarios=new Usuarios();
  variables : Variables = new Variables();
  
  constructor(private angularFireStorage: AngularFireStorage,
              private router: Router,
              private alertCtrt: AlertController,
              private publicacionesService: PublicacionesGeneralesService,
              private variablesService: VariablesService,
              private usuarioService: UsuarioService,
              private publicidadService: PublicidadService,
              private activateRoute: ActivatedRoute,
              public loadingController: LoadingController) { }

  ngOnInit() {
    this.publicacionesService.getPublicaciones().subscribe(res=> {this.publicaciones = res;});
    this.publicidadService.getPublicidad().subscribe(res => {this.publicidad = res;this.shuffle(this.publicidad)});
    this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => {this.user =res;});
    this.idUser = localStorage.getItem('userId');
    this.variablesService.getVariable('wCIVneApMUwcOvDwIneJ').subscribe(res=> {this.variables = res;});
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
  }

  aumentarVisitaPublicacion(id:string,usuario:string,publicacion:PublicacionesGenerales){
    publicacion.Visitas= publicacion.Visitas + 1
    this.publicacionesService.updatePublicacion(id,publicacion)
    this.router.navigate(['/publicacion-detalle',id,usuario]); 
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array
  }

  validarPremium(){
    if(this.user.Publicaciones >= this.variables.NumeroPublicaciones){
      if(this.user.Premium){
        this.router.navigate(['/crear-publicaciones-generales']);
      }else{
        this.serPremium()

      }

    }else{
      this.router.navigate(['/crear-publicaciones-generales']);
    }

  }

  async serPremium() {

    const alert = await this.alertCtrt.create({
      cssClass: 'my-custom-class',
      header: 'Ya excedió el número de publicaciones gratis ('+this.variables.NumeroPublicaciones.toString()+')',
      
      message: 'Para poder realizar más publicaciones, diríjase a su perfil y solicite ser premium.',


      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
           // console.log('Confirm Cancel: blah');
          }
        }
      ]
    });
    await alert.present();
  }

}
