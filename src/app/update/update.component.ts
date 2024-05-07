// update.component.ts
import { Component, OnInit } from '@angular/core';
import { User } from '../usuer.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  usuario: User = new User();
  isLoggedIn: boolean = false;
  userId: string | null = null;
  pswd: string | null = null;
  nombre:string | null = null;
  email:string | null = null;
  updateSuccess: boolean = false;
  updateError: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    const userIdString = localStorage.getItem('authToken');

    if (userIdString !== null) {
      this.nombre = localStorage.getItem('nombre');
      this.userId = localStorage.getItem('userId');
      this.email = localStorage.getItem('email');
    } else {
      console.error('No se encontró el userId en localStorage.');
    }
  }

  updateUser() {
    if (this.userId !== null && this.pswd !== null && this.email !== null) {
      if (this.nombre === null || this.nombre.trim() === '') {
        console.error('No se proporcionaron datos para actualizar.');
        this.updateError = true;
        return;
      }

      if (!this.isNombreValid()) {
        console.error('El nombre solo puede contener letras y espacios.');
        this.updateError = true;
        return;
      }

      this.userService.updateUser(this.email, this.nombre, this.pswd).subscribe(
        (respuesta: any) => {
          console.log('Actualización de datos exitosa:', respuesta);
          this.updateSuccess = true;
          this.updateError = false;

          // Actualizar los datos del usuario en el localStorage
          localStorage.setItem('nombre', this.nombre || '');
          localStorage.setItem('email', this.email || '');
        },
        (error: any) => {
          console.error('Error en la actualización de datos:', error);
          this.updateError = true;
        }
      );
    } else {
      console.error('No se encontró el userId. No se puede realizar la actualización.');
    }
  }

  isNombreValid(): boolean {
    return /^[a-zA-Z\s]*$/.test(this.nombre || '');
  }
}
