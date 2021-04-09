import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Categorias } from '../models/categorias';
// import firebase from 'firebase/app';
// import 'firebase/firestore';



@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private categoriasCollection: AngularFirestoreCollection <Categorias>;
  private categorias: Observable<Categorias[]>;

  constructor(private firestore: AngularFirestore) {
    this.categoriasCollection = firestore.collection('Categorias', ref => ref.orderBy("Nombre", "asc"));
    this.categorias = this.categoriasCollection.snapshotChanges().pipe(map(
      actions =>{
        return actions.map( a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        })
      }
    ))
   }
  getCategorias(){
    return this.categorias;
  }

}