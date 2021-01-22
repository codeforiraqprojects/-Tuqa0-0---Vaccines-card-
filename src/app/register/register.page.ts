import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


data = {
  email:  '',
  password: ''
}



  constructor(public dataService: DataService,private router: Router) { }

  ngOnInit() {
  }

  register(){


    let credentials = {
      email: this.data.email,
      password: this.data.password
          }
      
      this.dataService.signUpWithEmail(credentials).then(
        ()=> this.router.navigateByUrl('tabs'),
        error => console.log('error')
      )

  }

 
goToLogin(){
  this.router.navigate(['/login'])
}




}
