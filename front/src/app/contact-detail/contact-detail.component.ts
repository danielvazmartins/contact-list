import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact, ContatType } from '../contact.class';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  public contactTypes:Array<ContatType> = [
    { value: 'email', name: 'E-mail' },
    { value: 'tel', name: 'Telefone' },
    { value: 'mobile', name: 'Whatsapp' },
    { value: 'other', name: 'Outro' },
  ]
  public action:string = 'new'
  public person:Contact = new Contact()

  constructor( 
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(params => {
      if ( params.id ) {
        this.action = 'edit'
        contactService.getOnePerson(params.id)
        .subscribe( result => {
          if ( result )
            this.person = result
        })
      } else {
        this.action = 'new'
        // New people - inicializaum contato em branco
        this.person.contacts = [{
          id: null,
          type: '', 
          contact: ''
        }]
      }
    })
  }

  ngOnInit() {
  }


  public savePeople() {
    // New people
    if ( this.action == 'new' ) {
      this.contactService.createPerson(this.person)
      .subscribe( result => {
        if ( result )
          this.router.navigate(['/'])
      })
    } else {
      // Update people
      this.contactService.updatePerson(this.person)
      .subscribe( result => {
        if ( result )
          this.router.navigate(['/'])
      })
    }
  }

  // Acrescenta um contato vazio na tela
  public addContact() { 
    this.person.contacts.push({
      id: null,
      type: null, 
      contact: ''
    })
  }
}
