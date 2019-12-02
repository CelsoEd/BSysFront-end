import {Component, OnInit} from '@angular/core';
import {__await} from 'tslib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  update: string;

  constructor() {
    this.update = localStorage.getItem('update');
    if (this.update === 'sim') {
      localStorage.setItem('update', 'nao');
      window.parent.location.reload();
    }
  }

  ngOnInit() {
  }

}
