import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SigninComponent } from './components/signin/signin.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ShowUsersComponent } from './components/show-users/show-users.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToastrModule,ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserDetailsComponent } from './components/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SigninComponent,
    AddUserComponent,
    ShowUsersComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({}),
  ],
  providers: [ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
