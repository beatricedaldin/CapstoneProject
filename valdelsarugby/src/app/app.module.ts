import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './models/user/user.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { RegFormComponent } from './components/reg-form/reg-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { PostsFormComponent } from './components/posts-form/posts-form.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsletterComponent } from './pages/newsletter/newsletter.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { SignupinComponent } from './pages/signupin/signupin.component';
import { ShopComponent } from './pages/shop/shop.component';
import { DocsComponent } from './pages/docs/docs.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ItemComponent } from './pages/item/item.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    CalendarComponent,
    RegFormComponent,
    SignupFormComponent,
    PostsFormComponent,
    HomeComponent,
    NewsletterComponent,
    ContactsComponent,
    SignupinComponent,
    ShopComponent,
    DocsComponent,
    ProfileComponent,
    ItemComponent,
    TeamsComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
