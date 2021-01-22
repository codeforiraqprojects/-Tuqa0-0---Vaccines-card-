import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase,AngularFireObject} from '@angular/fire/database';
import { Data } from '../../model/data';

//import { AlertController } from '@ionic/angular';
//import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DataService} from '../data.service';

import { AngularFireAuth } from 'angularfire2/auth';



@Component({
  selector: 'app-babycards',
  templateUrl: './babycards.page.html',
  styleUrls: ['./babycards.page.scss'],
})
export class BabycardsPage implements OnInit {



 babycard:AngularFireObject<Data>;
  data: Data = {
    name: '',//string
    age:'',//date
    d1: '',//string
    d2: '',//string
    d3: '',//string
    d4:'',//string
    d5:'',//string
    d6:'',//string
    d7:'',//string
    d8:''
  };
 

  itemArray=[];
  myObject = []


  constructor(public db: AngularFireDatabase ,public dataService: DataService,private router: Router,afAuth:AngularFireAuth) {


    
      
            
          
    

     
 this.babycard = db.object('card');
      this.babycard.snapshotChanges().subscribe(action => {
       
       if (action.payload.val() == null  || action.payload.val() == undefined ) {
         console.log('no data' )
        }

        else {

        this.itemArray.push(action.payload.val() )
        this.myObject =Object.entries(this.itemArray[0])
   
        }
      
       });
    
      
  }
 


   deletecard(data:Data){
   this.dataService.deletecard(data ).then( ()=>{
     this.router.navigateByUrl('tabs/tab1')
     console.log('deleted')
   })
   console.log(data)

   
 }

 

 ngOnInit() {
    
}




}

