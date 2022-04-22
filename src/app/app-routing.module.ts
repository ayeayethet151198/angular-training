import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test1PageComponent } from './pages/test1-page/test1-page.component';

const routes: Routes = [
  {
    path: 'test1',
    component: Test1PageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
