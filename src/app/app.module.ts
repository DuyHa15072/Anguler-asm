import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { BlogComponent } from './pages/blog/blog.component';
import { WorkComponent } from './pages/work/work.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { ListBlogComponent } from './components/blog/list-blog/list-blog.component';
import { AddBlogComponent } from './components/blog/add-blog/add-blog.component';
import { ListUserComponent } from './components/auth/list-user/list-user.component';
import { AddUserComponent } from './components/auth/add-user/add-user.component';
import { ListWorkComponent } from './components/work/list-work/list-work.component';
import { AddWorkComponent } from './components/work/add-work/add-work.component';
import { EditBlogComponent } from './components/blog/edit-blog/edit-blog.component';
import { EditWorkComponent } from './components/work/edit-work/edit-work.component';
import { DetailWorkComponent } from './pages/detail-work/detail-work.component';
import { EditUserComponent } from './components/auth/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    WorkComponent,
    SignupComponent,
    SigninComponent,
    ListBlogComponent,
    AddBlogComponent,
    ListUserComponent,
    AddUserComponent,
    ListWorkComponent,
    AddWorkComponent,
    EditBlogComponent,
    EditWorkComponent,
    DetailWorkComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
