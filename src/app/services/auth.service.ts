import { Injectable } from '@angular/core';
import { FirebaseAuth } from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { rejects } from 'assert';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { UsuarioService } from './usuario.service';


import { Variables } from '../models/variables';
import { VariablesService } from './variables.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  variables : Variables = new Variables();


  constructor(private router: Router,
              private firestore: AngularFirestore,
              private variablesService: VariablesService,
              private usuarioService: UsuarioService) { }

  loginUser(email:string, password:string):Promise<firebase.auth.UserCredential>{


    
    return new Promise ((resolve, reject)=>{ 
      firebase.auth().signInWithEmailAndPassword(email, password).then( res=>{ 
        localStorage.setItem('userId', res.user.uid);


      resolve(res);   
      }).catch(err => reject(err))
    })
  }

  registerUser(nombre:string, apellido: string, email:string, password:string, ciudadela:string ,manzana:string, villa: string, telefono: string, downloadURL:string):Promise<any>{
    
    this.variablesService.getVariable('wCIVneApMUwcOvDwIneJ').subscribe(res=> {this.variables = res;});

    

    return new Promise ((resolve, reject)=>{
      firebase.auth().createUserWithEmailAndPassword(email, password).then( res=>{ 

        if(this.variables.RegistroVendedores){
            this.firestore.collection('Usuarios').doc(res.user.uid).set({
            Nombre: nombre,
            Apellido: apellido,
            Correo: email,
            Ciudadela: ciudadela,
            Foto: downloadURL,
            Manzana: manzana,
            Premium: true,
            Publicaciones: 0,
            Productos: 0,
            Vendedor: true,
            Telefono: telefono,
            Villa: villa,
            Verificacion: false,
            EsperaPremium: false

          });

        }else{
          this.firestore.collection('Usuarios').doc(res.user.uid).set({
            Nombre: nombre,
            Apellido: apellido,
            Correo: email,
            Ciudadela: ciudadela,
            Foto: downloadURL,
            Manzana: manzana,
            Premium: false,
            Publicaciones: 0,
            Productos: 0,
            Vendedor: false,
            Telefono: telefono,
            Villa: villa,
            Verificacion: false,
            EsperaPremium: false

          });

        }
        
        
      
        
    
       


      resolve(res);

      });  
    })
  }

  resetPassword(email:string):Promise<void>{
    return firebase.auth().sendPasswordResetEmail(email);
  }

  logOutUser(){
     firebase.auth().signOut().then(
      ()=> 
      (localStorage.clear(),
      this.router.navigateByUrl("/login"))
    );
  }

}