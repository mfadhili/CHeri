import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/common/nav-bar/nav-bar.component';
import { MidNavComponent } from './components/common/mid-nav/mid-nav.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { SideNavComponent } from './components/common/side-nav/side-nav.component';
import { LoginComponent } from './components/access/login/login.component';
import { RegisterComponent } from './components/access/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChildrenComponent } from './components/children/children.component';
import { CareGiversComponent } from './components/care-givers/care-givers.component';
import { TherapyRecordsComponent } from './components/therapy-records/therapy-records.component';
import { AnnouncementsComponent } from './components/announcements/announcements.component';
import { HelpingHandsComponent } from './components/helping-hands/helping-hands.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MidNavComponent,
    FooterComponent,
    SideNavComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ChildrenComponent,
    CareGiversComponent,
    TherapyRecordsComponent,
    AnnouncementsComponent,
    HelpingHandsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
