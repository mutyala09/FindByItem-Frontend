import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import {Admin} from '../admin';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { AdminDetailsComponent } from '../admin-details/admin-details.component';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  admins : any;

  constructor(private adminService: AdminService,private router: Router) { 
  }
  ngOnInit(): void {
    this.getAdmins();
  }
       getAdmins(){
        this.adminService.getAdminsList().subscribe(data =>{
          this.admins = data;
        });
      }
      adminDetails(id:any){
        this.router.navigate(['admin-details',id])
       }
       
      updateAdmin(id: number){
        this.router.navigate(['update-admin',id]);
    }
       deleteAdmin(id: number){
         this.adminService.deleteAdmin(id).subscribe(data =>{
            console.log(data);
          this.getAdmins();
    
         })
        }
        
    
    }


