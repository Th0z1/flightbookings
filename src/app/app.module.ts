import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AppRoutes} from './app.route.module';

import { AppComponent } from './app.component';
import { ExploreComponent } from './component/explore/explore.component';
import { FormComponent } from './component/form/form.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ViewComponent } from './component/view/view.component';
import { EventComponent } from './component/event/event.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';

import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    ExploreComponent,
    FormComponent,
    HomeComponent,
    NavbarComponent,
    ViewComponent,
    EventComponent,
    AboutComponent,
    ContactComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
