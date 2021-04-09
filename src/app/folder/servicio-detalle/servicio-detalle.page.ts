import { Component, OnInit } from '@angular/core';
import { Servicios } from 'src/app/models/servicios';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';
import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-servicio-detalle',
  templateUrl: './servicio-detalle.page.html',
  styleUrls: ['./servicio-detalle.page.scss'],
})
export class ServicioDetallePage implements OnInit {

  servicio : Servicios = new Servicios();
  user: Usuarios = new Usuarios();
  constructor(private router: Router,
              private usuarioService: UsuarioService,
              private activateRoute: ActivatedRoute,
              private servicioService: ServiciosService,) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      this.usuarioService.getUsuario(paramMap.get('idUser')).subscribe(res => {this.user =res;});
      this.servicioService.getServicio(paramMap.get('idServicio')).subscribe(res=> {this.servicio = res;});
    });
  }

}
