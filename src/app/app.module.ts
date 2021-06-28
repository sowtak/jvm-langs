import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { ViewPostComponent } from './post/view-post/view-post.component';
import { HomeComponent } from './home/home.component';
import { CreateMansionForumComponent } from './mansion-forum/create-mansion-forum/create-mansion-forum.component';
import { ListMansionForumsComponent } from './mansion-forum/list-mansion-forums/list-mansion-forums.component';
import { PostTileComponent } from './shared/post-tile/post-tile.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { MansionForumSidebarComponent } from './shared/mansion-forum-sidebar/mansion-forum-sidebar.component';
import { LikeButtonComponent } from './shared/like-button/like-button.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import {ReactiveFormsModule} from "@angular/forms";
import {EditorModule} from "@tinymce/tinymce-angular";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {HttpClientModule} from "@angular/common/http";
import {NgxWebstorageModule} from "ngx-webstorage";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignUpComponent,
    CreatePostComponent,
    ViewPostComponent,
    HomeComponent,
    CreateMansionForumComponent,
    ListMansionForumsComponent,
    PostTileComponent,
    SidebarComponent,
    SidebarComponent,
    MansionForumSidebarComponent,
    LikeButtonComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    EditorModule,
    FontAwesomeModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
