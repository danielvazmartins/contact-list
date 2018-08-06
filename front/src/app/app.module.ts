import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { HeaderComponent } from './contact-list/header/header.component';
import { ListItemComponent } from './contact-list/list-item/list-item.component';
import { HeaderPhotoComponent } from './contact-detail/header-photo/header-photo.component';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsBarComponent } from './contact-detail/buttons-bar/buttons-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactDetailComponent,
    HeaderComponent,
    ListItemComponent,
    HeaderPhotoComponent,
    ButtonsBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AngularMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
