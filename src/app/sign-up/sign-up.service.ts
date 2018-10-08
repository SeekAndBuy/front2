import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SignUpService {

  private baseUrl = "http://localhost:8080/users/"

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(this.baseUrl);
  }

  signUpNewUser(user: User) {
    return this.http.post(this.baseUrl, user);
  }
}
