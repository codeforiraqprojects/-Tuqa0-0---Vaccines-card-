import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
//import { AlertController } from '@ionic/angular';
//import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DataService} from '../data.service';
import { Data } from 'src/model/data';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
 
  data: Data ={
    
    name: '',
    age: '',
    d1: '',//string
    d2: '',//string
    d3: '',//string
    d4:'',//string
    d5:'',//string
    d6:'',//string
    d7:'',//string
    d8:''
  };

  constructor(db: AngularFireDatabase,
 //public alertController: AlertController,
  private router: Router,
  public dataService: DataService) {

   
  }

  
 // addbaby(data){

 //    this.dataService.addbaby(data).then(ref =>{
 
      //this.showAlert()
  //    this.router.navigate(['/babycards'])
  //  })
 // };


 
 
  co(data: Data){



    this.dataService.co(data)
   
      //this.showAlert()
      this.router.navigate(['/babycards'])

      console.log ('table');
    
  }

 


  // showAlert() {
    //let alert = this.alertController.create({
      //title: 'Greate!',
     // subTitle: 'Thanks for helping Me!',
     // buttons: ['OK']
   // });
    //alert.present();
 // };

  

}