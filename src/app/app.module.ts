import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostDetailsComponent } from './post-details/post-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { FriendRequestComponent } from './friend-request/friend-request.component';
import { MyFriendsComponent } from './my-friends/my-friends.component';
import { UpdateProfilePicComponent } from './update-profile-pic/update-profile-pic.component';
import { HeaderComponent } from './layout/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    PostDetailsComponent,
    UserListComponent,
    TextBoxComponent,
    FriendRequestComponent,
    MyFriendsComponent,
    UpdateProfilePicComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



