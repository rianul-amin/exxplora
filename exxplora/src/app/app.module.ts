import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PasswordModule } from 'primeng/password';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { CardModule } from 'primeng/card';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { FileUploadModule } from 'primeng/fileupload';
import { InputOtpModule } from 'primeng/inputotp';
import { StepperModule } from 'primeng/stepper';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainPanelComponent } from './components/main-panel/main-panel.component';
import { RightMenuComponent } from './components/right-menu/right-menu.component';
import { DomainCardComponent } from './components/domain-card/domain-card.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { OtpVerificationComponent } from './components/otp-verification/otp-verification.component';
import { ProfileSetupComponent } from './components/profile-setup/profile-setup.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeftMenuComponent,
    ProfileCardComponent,
    HeaderComponent,
    NavbarComponent,
    MainPanelComponent,
    RightMenuComponent,
    DomainCardComponent,
    SignUpComponent,
    OtpVerificationComponent,
    ProfileSetupComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    InfiniteScrollModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    CheckboxModule,
    ToggleButtonModule,
    CalendarModule,
    ChipsModule,
    FileUploadModule,
    HttpClientModule,
    FormsModule,
    InputOtpModule,
    StepperModule,
    IconFieldModule,
    InputIconModule,
    PasswordModule,
    BrowserAnimationsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
