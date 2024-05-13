import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../usuer.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  nombre: string | null = null;
  email: string | null = null;

  constructor() {}

  ngOnInit() {
    this.nombre = localStorage.getItem('nombre');
    this.email = localStorage.getItem('email');
  }
}