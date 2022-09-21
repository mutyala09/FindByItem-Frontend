import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';


const routes: Routes = [
  {path:'admins', component: AdminListComponent },
  {path:'create-admin', component: CreateAdminComponent},
  {path:'',redirectTo:'admins',pathMatch:'full'},
  {path:'update-admin/:id', component:UpdateAdminComponent},
  {path:'admin-details/:id', component:AdminDetailsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
