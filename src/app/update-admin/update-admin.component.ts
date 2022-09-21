import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {
  id :any;
  admin:any;
  constructor(private adminservice:AdminService,private route: ActivatedRoute, private router: Router) { 
    this.admin ={"name" : "",
                  "password" : "",
                  "id" : -1};
  
    }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log("update admin id " + this.id)
    this.adminservice.getAdminById(this.id).subscribe(data => {
      this.admin = data;
      console.log("get admin" + this.admin)
}, error => console.log(error));
  }
  onSubmit(){
    this.adminservice.updateAdmin(this.id, this.admin).subscribe( data =>{
      this.goToAdminList();
    }, error => console.log(error));
    
  }
  goToAdminList(){
    this.router.navigate(['/admins']);
  }

  }



