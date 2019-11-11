import {Component, OnInit} from '@angular/core';
import {User} from '../autentificacao/user';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  usuario: User;

  constructor() {
    this.usuario = JSON.parse(localStorage.getItem('currentUser'));
  }


  ngOnInit() {
  }

}
