import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';



@Component({
  selector: 'app-vacciontable',
  templateUrl: './vacciontable.page.html',
  styleUrls: ['./vacciontable.page.scss'],
})
//
export class VacciontablePage implements OnInit {

 
 

  
  constructor(public dataService: DataService) {  
  

  }
  ngOnInit(): void {

  
  }
  

}