import {Component, OnInit} from '@angular/core';
import {User} from '../autentificacao/user';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent implements OnInit {

  usuario: User;

  constructor() {
    this.usuario = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }

  sair() {
    localStorage.clear();
    window.parent.location.reload();
  }
}
