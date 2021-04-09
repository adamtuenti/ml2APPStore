import { Component, OnInit } from '@angular/core';
import { CategoriasLocales } from 'src/app/models/categoriasLocales';
import { sugerenciaCategoriaLocal } from 'src/app/models/sugerenciaCategoriaLocal';
import { CategoriasLocalesService } from 'src/app/services/categorias-locales.service';
import { SugerenciaLocalesService } from 'src/app/services/sugerencia-locales.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-categorias-locales',
  templateUrl: './categorias-locales.page.html',
  styleUrls: ['./categorias-locales.page.scss'],
})
export class CategoriasLocalesPage implements OnInit {

  categorias: CategoriasLocales[] = [];
  textoBuscar = '';
  sugerenciaLocal : sugerenciaCategoriaLocal = new sugerenciaCategoriaLocal();

  constructor(private categoriasService: CategoriasLocalesService,
              private sugerenciaService: SugerenciaLocalesService,
              private alertCtrt: AlertController) { }

  ngOnInit() {
    this.categoriasService.getCategorias().subscribe(res=> {this.categorias = res;});
  }

  buscar(event){
    const texto = event.target.value
    this.textoBuscar=texto;
  }

  async crearLocal() {

    const alert = await this.alertCtrt.create({
      cssClass: 'my-custom-class',
      header: 'Sugerir una categoría:',
      
      // message: 'Nombre del curso:',
      inputs: [
        {
          name: 'local',
          placeholder: 'Nombre de la categoría',
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
              this.agregarLocal(data.local)
            }else if(data.local == ""){
              
              //this.failedAlert("El campo email es requerido");
            }
          }
        }
      ]
    });
    await alert.present();
  }

  agregarLocal(local:string){
    var fechaActual = new Date();
    this.sugerenciaLocal.Titulo = local;
    this.sugerenciaLocal.Visibilidad = true;
    this.sugerenciaLocal.Usuario = localStorage.getItem('userId');
    this.sugerenciaLocal.Tipo = 'categoriaLocal';
    this.sugerenciaLocal.Fecha = fechaActual.toString();;
    this.sugerenciaService.addSugerencia(this.sugerenciaLocal);

  }

}
