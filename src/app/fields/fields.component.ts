import { field } from './../models/field';
import { FieldServicesService } from './../field-services.service';
import { Component, OnInit } from '@angular/core';
import { database } from 'firebase';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.sass']
})
export class FieldsComponent implements OnInit {
  items: field[];
  
  options = ["Open", "Working", "About to Close", "Closed"];

  constructor(public service: FieldServicesService) { }

  ngOnInit() {
    this.service.getItems().subscribe(items => {
      console.log(items);
      this.items = items;
      //this.service.setItems("1","B","Closed")

      // this.ItemsCollection=this.afs.collection('items');
      // this.items=this.ItemsCollection.valueChanges();
      // this.snapshot = this.ItemsCollection.snapshotChanges();

      

    });
    //this.FieldServicesService.getItems();
    
    // this.setOnclick(option){
    //   this.items=option;
    // }

 
  }
  

 
  click(row, col,option) {
     console.log(row,col,option);
     this.service.setItems(col,row,option)
   }






}
