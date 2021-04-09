import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicacionesGenerales } from 'src/app/models/publicacionesGenerales';
import { PublicacionesGeneralesService } from 'src/app/services/publicaciones-generales.service';
import { AngularFireStorage } from 'angularfire2/storage';
import { AlertController, LoadingController } from '@ionic/angular';
import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-publicacion-detalle',
  templateUrl: './publicacion-detalle.page.html',
  styleUrls: ['./publicacion-detalle.page.scss'],
})
export class PublicacionDetallePage implements OnInit {

  publicacion : PublicacionesGenerales = new PublicacionesGenerales();
  public user: Usuarios=new Usuarios();
  
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  

  constructor(private angularFireStorage: AngularFireStorage,
              private router: Router,
              private alertCtrt: AlertController,
              private usuarioService: UsuarioService,
              private publicacionesService: PublicacionesGeneralesService,
              private activateRoute: ActivatedRoute,
              public loadingController: LoadingController) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      this.usuarioService.getUsuario(paramMap.get('idUser')).subscribe(res => {this.user =res;});
      this.publicacionesService.getPublicacion(paramMap.get('idPublicacion')).subscribe(res=> {this.publicacion = res;});
    });
  }

}
