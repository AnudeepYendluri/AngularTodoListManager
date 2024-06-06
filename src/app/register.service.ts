import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }


  registerUser(formData: any) { 
    return this.http.post<any>('http://localhost:8080/register', formData); 
  }
}
