import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { HomeComponent } from './pages/home/home.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { AgePipe } from './shared/pipes/age.pipe';
import { MaterialModule } from './shared/ui/material/material.module';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { DeleteDialogComponent } from './shared/components/delete-dialog/delete-dialog.component';
import { AddTodolistComponent } from './pages/add-todolist/add-todolist.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    HomeComponent,
    UpdateUserComponent,
    AgePipe,
    ToolbarComponent,
    DeleteDialogComponent,
    AddTodolistComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    DeleteDialogComponent
  ]
})
export class AppModule { }
