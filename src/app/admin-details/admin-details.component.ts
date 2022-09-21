import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {

  admin:any;
  id : any;
  constructor(private adminservice:AdminService,private route:ActivatedRoute,private router:Router) { 
   }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    // this.admin = new this.admin();
    this.adminservice.getAdminById(this.id).subscribe(data =>{
      this.admin = data;
      console.log(this.admin);

    });
  }

}
