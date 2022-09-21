import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent implements OnInit {

 admin!: Admin;
constructor(private adminService: AdminService,private router: Router) {
 
  this.admin ={"name" : "",
  "password" : "",
  "id" : -1};

 }

  ngOnInit(): void {
  }
  saveAdmin(){
    this.adminService.createAdmin(this.admin).subscribe( data =>{
      console.log(data);
      this.goToAdminList()
    },
    error => console.log(error));
  }
  goToAdminList(){
    this.router.navigate(['/admins']);
  }

onSubmit(){
  console.log(this.admin);
  this.saveAdmin();

}
}
