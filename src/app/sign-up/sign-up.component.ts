import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { SignUpService } from './sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  sucesso: boolean = false;
  user: User = {
    id : null,
    cpf: "0000000000",
    name: "Senhor(a)",
    email: "Entre seu email",
    password:"*****",
    phone: "(xx)xxxxx-xxxx"

  };

  a: any;

  constructor(private signUp: SignUpService) { }

  ngOnInit() {
    this.a = JSON.stringify(this.signUp.getAllUsers());
  }

  onSubmit() {
    this.sucesso = true;
    
    return this.signUp.signUpNewUser(this.user);
  }

  debug() {
    return JSON.stringify(this.user);
  }


}
