import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons-bar',
  templateUrl: './buttons-bar.component.html',
  styleUrls: ['./buttons-bar.component.scss']
})
export class ButtonsBarComponent implements OnInit {

  @Output() savePeople:EventEmitter<void> = new EventEmitter<void>()

  constructor() { }

  ngOnInit() {
  }

  saveAll() {
    this.savePeople.emit()
  }

}
