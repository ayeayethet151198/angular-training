import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1PageComponent } from './pages/test1-page/test1-page.component';
import { Test2PageComponent } from './pages/test2-page/test2-page.component';
import { Test3PageComponent } from './pages/test3-page/test3-page.component';
import { Test4PageComponent } from './pages/test4-page/test4-page.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Test5PageComponent } from './pages/test5-page/test5-page.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Day10UserRegistrationComponent } from './pages/day10-user-registration/day10-user-registration.component';
import { Day10UserListComponent } from './pages/day10-user-list/day10-user-list.component';
import { NgMaterialModule } from './ng-material/ng-material.module';

@NgModule({
  declarations: [
    AppComponent,
    Test1PageComponent,
    Test2PageComponent,
    Test3PageComponent,
    Test4PageComponent,
    Test5PageComponent,
    UserRegistrationComponent,
    UserListComponent,
    Day10UserRegistrationComponent,
    Day10UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
