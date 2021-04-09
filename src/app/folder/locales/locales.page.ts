import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Locales } from 'src/app/models/locales';
import { LocalesService } from 'src/app/services/locales.service';
import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-locales',
  templateUrl: './locales.page.html',
  styleUrls: ['./locales.page.scss'],
})
export class LocalesPage implements OnInit {
  locales : Locales[] = [];
  categoria: string;
  textoBuscar = '';
  condicion: boolean = false;
  idUser;
  public user: Usuarios=new Usuarios();
  
  constructor(private router: Router,
              private localesService: LocalesService,
              private usuarioService: UsuarioService,
              private alertCtrt: AlertController,
              private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      this.categoria = paramMap.get('id');
      this.idUser = localStorage.getItem('userId');
      this.localesService.getLocales().subscribe(res=> {this.locales = res;this.condicion = this.getDatos()});
      this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => {this.user =res;});
    });   
  }

  validarVendedor(){
    if(this.user.Vendedor){
      this.router.navigate(['/crear-local',this.categoria]);

    }else{
      this.serVendedor()

    }
  }

  async serVendedor() {

    const alert = await this.alertCtrt.create({
      cssClass: 'my-custom-class',
      header: 'Su cuenta no es de vendedor',
      
      message: 'Para poder usar esta función, vaya a su perfil y solicite ser vendedor.',


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


  getDatos(){
    for(let i= 0; i < this.locales.length; i++){
      if(this.locales[i].CategoriaLocal == this.categoria){     
            return false;      
      }
    }
    return true;
  }

  buscar(event){
    const texto = event.target.value
    this.textoBuscar=texto;
  }

}
// babaco