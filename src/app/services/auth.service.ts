import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { Observable, of, throwError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) {

   }
   setToken(token:string){
    localStorage.setItem('token',token)
   }
   getToken(){
    return localStorage.getItem('token')
   }
   isLoggedIn(){
    return this.getToken()!==null;
   }
   loging(userInfo: {email:string, password:string}):Observable<string|boolean>{
    if(userInfo.email==='admin@gmail.com'&& userInfo.password==='admin123'){
      this.setToken("asdfasdfasdfasdf")
      return of(true)
    }
    return throwError(()=>new Error('Имя пльзователя и пароль не верны!'))
   }
}
