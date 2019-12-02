import {Component, OnInit} from '@angular/core';
import {User} from '../autentificacao/user';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent implements OnInit {

  usuario: User;

  constructor(private route: Router) {
    this.usuario = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }

  sair() {
    localStorage.clear();
    localStorage.setItem('update', 'sim');
    this.route.navigate(['home']);
  }
}
