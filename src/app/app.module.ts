import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageContainer } from './containers/welcome/welcome-page.container';
import {  BannerComponent } from './components/banner/banner.component';
import { ContactCusomponent} from './components/contactus/contactus.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LayoutModule} from '@angular/cdk/layout';
import { WorkComponent} from './components/work/work.component';
import { WhatdoComponent} from './components/whatdo/whatdo.component';
import{ NotdoComponent} from './components/notdo/notdo.component';
import { ForyouComponent} from './components/foryou/foryou.component';
import { AgentssayComponent} from './components/agentssay/agentssay.component';
import{FooterComponent} from './components/footer/footer.component'
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    WelcomePageContainer,
    BannerComponent,
    ContactCusomponent,
    WorkComponent,
    WhatdoComponent,
    NotdoComponent,
    ForyouComponent,
    AgentssayComponent,
    FooterComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    LayoutModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
