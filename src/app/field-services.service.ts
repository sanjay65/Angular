import { element } from 'protractor';
import { database } from 'firebase';
import { field } from './models/field';
//import { AngularFireStoreCollecton } from '@angular/fire/firestore';
//import { AngularFirestoreModule } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
//import {Observable} from
import { Observable } from 'rxjs';
//import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FieldServicesService {
  ItemsCollection: AngularFirestoreCollection<field>;
  items: Observable<field[]>;
  snapshot:any;
  constructor(public afs: AngularFirestore) {
    
    this.items = this.afs.collection('Departments').valueChanges();
    this.snapshot =this.afs.collection('Departments').snapshotChanges();
     }
     setItems(office,col,status){
       let name=null;
       if(office=="0"){
         name="Office"
       }
       else if(office=="1"){
         name="Office2";
       }
       else if(office=="2"){
        name="Office3";
      }
      else if(office=="3"){
        name="office4";
      }
      
       let temp={}
       temp[col]=status;
       console.log(name,temp);
       this.afs.collection('Departments').doc(name).update(temp)
       .then(
         res => {
           console.log(res);
         }
       ).catch(
         e=>{
           console.log(e);
         }
       )
       

     }
 

      getItems(){
        return this.items;
      }
     
} 

     
