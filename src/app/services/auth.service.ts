import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private url = 'https://api.workflowdev.pluto-men.com';
  private deviceType = "web";

  constructor(private http: HttpClient) { }

  signIn(email: string, password: string): Observable<{}> {
    return this.http.post<{}>(`${this.url}/backend/account/login`, {email,password,deviceType:this.deviceType});
  }

  isSignedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
