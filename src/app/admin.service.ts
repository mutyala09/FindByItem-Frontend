import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  private baseURL = "http://localhost:8080/";
  constructor(private httpClient:HttpClient) {

  }
    getAdminsList(){
      return this.httpClient.get(this.baseURL+'admins');
    }
    createAdmin(admin:Admin):Observable<Object>{
      return this.httpClient.post(this.baseURL+'addadmin',admin);
    }
    getAdminById(id: any){
      return this.httpClient.get(this.baseURL+'admin/' + id);
    }
    updateAdmin(id: any,admin : any){
      return this.httpClient.put(this.baseURL+'updateadmin/'+id,admin);
    }
    deleteAdmin(id: any){
      return this.httpClient.delete(this.baseURL+'admins/'+ id);
    }

}



