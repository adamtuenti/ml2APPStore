import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductosLocales } from '../models/productosLocales';

@Injectable({
  providedIn: 'root'
})
export class ProductosLocalesService {
  private ComentariosCollection: AngularFirestoreCollection <ProductosLocales>;
  private Comentarios: Observable<ProductosLocales[]>;

  constructor(firestore: AngularFirestore) {
    this.ComentariosCollection = firestore.collection('ProductosLocales');
    this.Comentarios = this.ComentariosCollection.snapshotChanges().pipe(map(
      actions =>{
        return actions.map( a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        })
      }
    ))
  }


  getProductos(){
    return this.Comentarios;
  }

  getProducto(id:string){
    return this.ComentariosCollection.doc<ProductosLocales>(id).valueChanges();
  }

  addProducto(productosLocales:ProductosLocales){
    return this.ComentariosCollection.add({...productosLocales});
  } 


  updateProducto(id:string, ProductosLocales:ProductosLocales){
    return this.ComentariosCollection.doc(id).update({...ProductosLocales});
  }

  removerProducto(id:string){
    return this.ComentariosCollection.doc(id).delete();
  }

  
  
}