import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContactService } from '../../contact.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() data
  @Output() personRemoved:EventEmitter<number> = new EventEmitter<number>()
  
  constructor( private contactService: ContactService ) { }

  ngOnInit() {
  }

  public removePerson(id:number){
    this.contactService.removePerson(id)
    .subscribe( result => {
      if ( result ) 
        this.personRemoved.emit(id)
    })
  }

}
