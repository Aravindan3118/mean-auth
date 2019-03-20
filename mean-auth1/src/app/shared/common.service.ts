import { Injectable } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { HttpParams,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  registerForm: FormGroup = new FormGroup({
    _id: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });   

  loginForm: FormGroup = new FormGroup({   
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  constructor(public http:HttpClient) { }
  
  getHttpParams(data: any) {
    let httpParams = new HttpParams();
    Object.keys(data).forEach(function (key) {
      httpParams = httpParams.append(key, data[key]);
    });
    return httpParams;
  }

  get(url, data){
    const httpParams = this.getHttpParams(data);
    return this.http.get('http://172.16.6.154:3700/' + url, { params: httpParams })
  }

  post(url,data){
    return this.http.post('http://172.16.6.154:3700/' + url, data)
  }

  delete(url,id){
    return this.http.delete('http://172.16.6.154:3700/' + url+'/'+id)
  }
  getById(url,id){
    return this.http.get('http://172.16.6.154:3700/' + url+'/'+id)
  }
  put(url,data){
    return this.http.put('http://172.16.6.154:3700/' + url, data)
  }
}
