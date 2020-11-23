// built-in modules
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


interface userLogin{
  success:boolean
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = false;
  constructor(private http:HttpClient) { }

  // post the login info to api server
  userLoginDetail(username, password): Observable<userLogin> {
     return this.http.post<userLogin>('http://localhost:3000/api/userLogin',{
       username,
       password
     });
  }
  setLoggedIn(status: boolean){
    this.loggedInStatus= status;
  }

  get isLoggedIn(){
    return this.loggedInStatus;
  }
}
