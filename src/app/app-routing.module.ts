import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { HomeComponent } from './pages/home/home.component';
import { AddTodolistComponent } from './pages/add-todolist/add-todolist.component';


/**
 * Routes of my app...
 */
const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
   path: 'add', component: AddUserComponent
  },
  {
    path: 'addTodoList', component: AddTodolistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
