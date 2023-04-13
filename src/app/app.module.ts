import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms'
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SuporteComponent } from './components/suporte/suporte.component';

import { CommunityComponent } from './components/community/community.component';
import { FormsModule } from '@angular/forms';

import { FooterComponent } from './components/footer/footer.component';
import { SimpleRegisterComponent } from './components/simple/authenticate/simple-register/simple-register.component';
import { SimpleLoginComponent } from './components/simple/authenticate/simple-login/simple-login.component';
import { SimpleAuthComponent } from './components/simple/authenticate/simple-auth/simple-auth.component';
import { SimpleAuthBgComponent } from './components/simple/authenticate/simple-auth-bg/simple-auth-bg.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    SuporteComponent,
    FooterComponent,
    SimpleRegisterComponent,
    SimpleLoginComponent,
    SimpleAuthComponent,
    SimpleAuthBgComponent,
    CommunityComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
