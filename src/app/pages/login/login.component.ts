import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    username: '',
    password: '',
  }

  constructor(private snak:MatSnackBar,private login:LoginService) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log("login working");

    if(this.loginData.username.trim()=='' || this.loginData.username==null){

      this.snak.open("Username is required",'',{
        duration:3000,
      });
      return;

    }
    if(this.loginData.password.trim()=='' || this.loginData.password==null){

      this.snak.open("Password is required",'',{
        duration:3000,
      });
      return;

    }

    // request to server to generate token
    this.login.generteToken(this.loginData).subscribe(
      (data:any)=>{
        console.log("success");
        console.log(data);
        
        
      },
      (error)=>{
        console.log('Error');
        console.log(error);
        
      }
    );

  }

}
