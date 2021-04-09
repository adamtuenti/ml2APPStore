import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Publicidad } from '../models/publicidad';

@Injectable({
  providedIn: 'root'
})
export class PublicidadService {

  private publicidadCollection: AngularFirestoreCollection <Publicidad>;
  private publicidad: Observable<Publicidad[]>;

  constructor(private firestore: AngularFirestore) {
    this.publicidadCollection = firestore.collection('Publicidad'); //, ref => ref.where("Nombre", "==", "Celulares")
    this.publicidad = this.publicidadCollection.snapshotChanges().pipe(map(
      actions =>{
        return actions.map( a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        })
      }
    ))
   }
  getPublicidad(){
    return this.publicidad;
  }

}