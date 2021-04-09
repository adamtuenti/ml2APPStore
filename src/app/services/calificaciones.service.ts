import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CalificacionesLocales } from '../models/calificacionesLocales';
// import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class CalificacionesService {

  private calificacionesCollection: AngularFirestoreCollection <CalificacionesLocales>;
  private calificaciones: Observable<CalificacionesLocales[]>;

  constructor(private firestore: AngularFirestore) {
    this.calificacionesCollection = firestore.collection('CalificacionesLocales');
    this.calificaciones = this.calificacionesCollection.snapshotChanges().pipe(map(
      actions =>{
        return actions.map( a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        })
      }
    ))
  }

  getCalificaciones(){
    return this.calificaciones
  }
  getCalificacion(id:string){
    return this.calificacionesCollection.doc<CalificacionesLocales>(id).valueChanges();
  }

  addCalificacion(calificacion:CalificacionesLocales){
    return this.calificacionesCollection.add({...calificacion});
  } 


}
