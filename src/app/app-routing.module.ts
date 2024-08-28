import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { TreeFolderComponent } from './tree-folder/tree-folder.component';

const routes: Routes = [
  {
    path: 'nabar',
    component: NavbarComponent
  },
  {
    path:'treeFolder',
    component:TreeFolderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
