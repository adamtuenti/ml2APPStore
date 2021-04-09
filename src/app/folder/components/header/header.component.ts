import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  text: string;
  @Input('nombre') nombre : string;
  
  FotoPerfil;

  constructor() { 
  }

  ngOnInit(){
    this.FotoPerfil = localStorage.getItem('FotoPerfil')
    this.text = this.nombre;
  }

}
