import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularMaterailModule } from './angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//pages.
import { AppComponent } from './app.component';
import { Test1PageComponent } from './pages/test1-page/test1-page.component';
import { Test2PageComponent } from './pages/test2-page/test2-page.component';
import { Test3PageComponent } from './pages/test3-page/test3-page.component';
import { Test4PageComponent } from './pages/test4-page/test4-page.component';
import { Test5PageComponent } from './pages/test5-page/test5-page.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { Day10UserRegistrationComponent } from './pages/day10-user-registration/day10-user-registration.component';
import { Day10UserListComponent } from './pages/day10-user-list/day10-user-list.component';
import { TestDay11Component } from './pages/test-day11/test-day11.component';
import { AssignmentDay11Component } from './pages/assignment-day11/assignment-day11.component';
import { AssignmentDay12Component } from './pages/assignment-day12/assignment-day12.component';
import { AssignmentDay14Component } from './pages/assignment-day14/assignment-day14.component';
import { AssignmentDay15Component } from './pages/assignment-day15/assignment-day15.component';
import { AssignmentDay16Component } from './pages/assignment-day16/assignment-day16.component';
import { AssignmentDay18Component } from './pages/assignment-day18/assignment-day18.component';
import { AssignmentDay19Component } from './pages/assignment-day19/assignment-day19.component';

//pipes
import { CustompipePipe } from './pipes/custompipe.pipe';
import { Custompipe1Pipe } from './pipes/custompipe1.pipe';

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
    Day10UserListComponent,
    TestDay11Component,
    AssignmentDay11Component,
    AssignmentDay12Component,
    AssignmentDay14Component,
    AssignmentDay15Component,
    AssignmentDay16Component,
    AssignmentDay18Component,
    AssignmentDay19Component,
    CustompipePipe,
    Custompipe1Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularMaterailModule,
  ],
  providers: [CustompipePipe, Custompipe1Pipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
