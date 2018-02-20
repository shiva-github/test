import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { trigger,style,transition,animate,keyframes,query,stagger,group, state, animateChild } from '@angular/animations';




import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MeComponent } from './me/me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
  AppComponent,
  HeaderComponent,
  FooterComponent,
  MeComponent,
  PortfolioComponent,
  ContactComponent
  ],
  imports: [
  BrowserModule, 
  BrowserAnimationsModule,
  RouterModule.forRoot([
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: '', component: MeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: '**', component: MeComponent} 
    ], {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
