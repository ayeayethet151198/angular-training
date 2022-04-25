import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test1PageComponent } from './pages/test1-page/test1-page.component';
import { Test2PageComponent } from './pages/test2-page/test2-page.component';
import { Test3PageComponent } from './pages/test3-page/test3-page.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
