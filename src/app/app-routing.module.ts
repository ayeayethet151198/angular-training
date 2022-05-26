import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//pages.
import { Day10UserListComponent } from './pages/day10-user-list/day10-user-list.component';
import { Day10UserRegistrationComponent } from './pages/day10-user-registration/day10-user-registration.component';
import { TestDay11Component } from './pages/test-day11/test-day11.component';
import { Test1PageComponent } from './pages/test1-page/test1-page.component';
import { Test2PageComponent } from './pages/test2-page/test2-page.component';
import { Test3PageComponent } from './pages/test3-page/test3-page.component';
import { Test4PageComponent } from './pages/test4-page/test4-page.component';
import { Test5PageComponent } from './pages/test5-page/test5-page.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { AssignmentDay11Component } from './pages/assignment-day11/assignment-day11.component';
import { AssignmentDay12Component } from './pages/assignment-day12/assignment-day12.component';
import { AssignmentDay14Component } from './pages/assignment-day14/assignment-day14.component';
import { AssignmentDay15Component } from './pages/assignment-day15/assignment-day15.component';
import { AssignmentDay16Component } from './pages/assignment-day16/assignment-day16.component';
import { AssignmentDay18Component } from './pages/assignment-day18/assignment-day18.component';
import { AssignmentDay19Component } from './pages/assignment-day19/assignment-day19.component';
import { AssignmentDay20Component } from './pages/assignment-day20/assignment-day20.component';
import { NotFondPageComponent } from './pages/not-fond-page/not-fond-page.component';
import { AssignmentDay22Component } from './pages/assignment-day22/assignment-day22.component';
import { AssignmentDay23Component } from './pages/assignment-day23/assignment-day23.component';
import { AssignmentDay24Component } from './pages/assignment-day24/assignment-day24.component';
import { AssignmentDay25Component } from './pages/assignment-day25/assignment-day25.component';
import { PostControlComponent } from './pages/post-control/post-control.component';
import { AssignmentDay26Component } from './pages/assignment-day26/assignment-day26.component';
import { AssignmentDay27Component } from './pages/assignment-day27/assignment-day27.component';

//guards
import { UserGuard } from './guards/user.guard';

//resolvers
import { PostResolver } from './resolvers/post.resolver';

const routes: Routes = [
  {
    path: 'test1',
    component: Test1PageComponent
  },
  {
    path: 'test2',
    component: Test2PageComponent
  },
  {
    path: 'test3',
    component: Test3PageComponent
  },
  {
    path: 'test4',
    component: Test4PageComponent
  },
  {
    path: 'test5',
    component: Test5PageComponent
  },
  {
    path: 'userRegistration',
    component: UserRegistrationComponent
  },
  {
    path: 'userList',
    component: UserListComponent
  },
  {
    path: 'day10-registration',
    component: Day10UserRegistrationComponent
  },
  {
    path: 'day10-list',
    component: Day10UserListComponent
  },
  {
    path: 'test/day11',
    component: TestDay11Component
  },
  {
    path: 'member/register',
    component: AssignmentDay11Component,
  },
  {
    path: 'day12',
    component: AssignmentDay12Component,
    canActivate: [UserGuard]
  },
  {
    path: 'day14',
    component: AssignmentDay14Component,
    canActivate: [UserGuard]
  },
  {
    path: 'day15',
    component: AssignmentDay15Component
  },
  {
    path: 'day16',
    component: AssignmentDay16Component
  },
  {
    path: 'day18',
    component: AssignmentDay18Component
  },
  {
    path: 'day19',
    component: AssignmentDay19Component
  },
  {
    path: 'day20',
    component: AssignmentDay20Component,
    canActivate: [UserGuard]
  },
  {
    path: 'day22/:id',
    component: AssignmentDay22Component,
    canActivate: [UserGuard]
  },
  {
    path: 'login',
    component: AssignmentDay23Component,
  },
  {
    path: 'day24',
    component: AssignmentDay24Component
  },
  {
    path: 'post',
    component: PostControlComponent
  },
  {
    path: 'post/:id',
    component: PostControlComponent,
    resolve: { post: PostResolver }
  },
  {
    path: 'day25',
    component: AssignmentDay25Component,
  },
  {
    path: 'day26',
    component: AssignmentDay26Component,
  },
  {
    path: 'day27',
    component: AssignmentDay27Component,
  },
  {
    path: '**',
    component: NotFondPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
