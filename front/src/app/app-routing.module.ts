import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

const routes: Routes= [
  { path: '', component: ContactListComponent },
  { path: 'contact/:id', component: ContactDetailComponent },
  { path: 'contact', component: ContactDetailComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
