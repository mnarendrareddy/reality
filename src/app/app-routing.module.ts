import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{  WelcomePageContainer } from './containers/welcome/welcome-page.container';


const routes: Routes = [
    {
        path:'',  component:WelcomePageContainer,
        
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }