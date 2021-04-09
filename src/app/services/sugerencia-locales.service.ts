import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { sugerenciaCategoriaLocal } from '../models/sugerenciaCategoriaLocal';
// import firebase from 'firebase/app';
// import 'firebase/firestore';



@Injectable({
  providedIn: 'root'
})
export class SugerenciaLocalesService {

  private sugerenciasCollection: AngularFirestoreCollection <sugerenciaCategoriaLocal>;
  private sugerencias: Observable<sugerenciaCategoriaLocal[]>;

  constructor(private firestore: AngularFirestore) {
    this.sugerenciasCollection = firestore.collection('SugerenciasCategoriasLocales');
    this.sugerencias = this.sugerenciasCollection.snapshotChanges().pipe(map(
      actions =>{
        return actions.map( a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        })
      }
    ))
  }

  addSugerencia(sugerencia:sugerenciaCategoriaLocal){
    return this.sugerenciasCollection.add({...sugerencia});
  }

}
