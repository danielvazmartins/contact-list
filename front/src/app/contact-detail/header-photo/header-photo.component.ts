import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-photo',
  templateUrl: './header-photo.component.html',
  styleUrls: ['./header-photo.component.scss']
})
export class HeaderPhotoComponent implements OnInit {

  @Input() name

  constructor() { }

  ngOnInit() {
  }

}
