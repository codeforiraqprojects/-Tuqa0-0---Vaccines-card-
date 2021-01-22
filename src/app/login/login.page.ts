import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


data = {
  email:  '',
  password: ''
}
  

  constructor(public dataService: DataService,private router: Router) { }

  ngOnInit() {
  }

  
  login(){

    let credentials = {
email: this.data.email,
password: this.data.password
    }

this.dataService.signInWithEmail(credentials).then(
  ()=> this.router.navigateByUrl('tabs'),
  error => console.log('error')
)

  }




goToRegister(){
  this.router.navigate(['/register'])
}

}

