import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact.class';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  public people:Contact[]

  constructor( private contactService: ContactService ) { 
    this.getAllPeople()
  }

  ngOnInit() {
  }

  public getAllPeople() {
    this.contactService.getAllPeople()
    .subscribe( result => {
      this.people = result
    })
  }

}
