import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Servicios } from 'src/app/models/servicios';
import { ServiciosService } from 'src/app/services/servicios.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mis-servicios',
  templateUrl: './mis-servicios.page.html',
  styleUrls: ['./mis-servicios.page.scss'],
})
export class MisServiciosPage implements OnInit {

  servicios: Servicios[] = [];
  condicion: boolean;
  idUser;

  constructor(private servicioService: ServiciosService,
              private router: Router,
              private activateRoute: ActivatedRoute,
              private alertCtrt: AlertController) { }

  ngOnInit() {

    this.idUser = localStorage.getItem('userId');
    this.servicioService.getServicios().subscribe(res=> {this.servicios = res;this.condicion = this.getDatos()});

    
  }


  getDatos(){
    for(let i= 0; i<this.servicios.length; i++){
      if(this.servicios[i].Usuario == this.idUser){     
            return false;      
      }
    }
    return true;
  }

  async alert(id) {
    const alert = await this.alertCtrt.create({
     cssClass: 'my-custom-class',
     header: "¿Desea eliminar su servicio?",
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
    this.servicioService.removeServicio(id);
  }

}
