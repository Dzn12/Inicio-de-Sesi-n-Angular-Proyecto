import { Component } from '@angular/core';
import { User } from '../usuer.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  usuario: User = new User();
  confirmPassword: string = '';
  passwordsMismatch: boolean = false; // Bandera que indica diferentes contraseñas

  registroExitoso: boolean = false;
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  registerUser() {
    // Borra el mensaje de error antes de validar
    this.errorMessage = '';

    // Verifica que todos los campos estén llenos y que las contraseñas coincidan
    if (!this.usuario.nombre || !this.usuario.correo || !this.usuario.password || !this.confirmPassword) {
      this.errorMessage = 'Por favor, completa todos los campos.';
      return;
    }

    // Verifica si el correo electrónico tiene un formato válido
    if (!this.validateEmail(this.usuario.correo)) {
      this.errorMessage = 'Por favor, introduce un correo electrónico válido.';
      return;
    }

    // Verifica que las contraseñas coincidan
    if (!this.validatePasswords()) {
      return;
    }

    // Registro de usuario
    this.userService.registerUser(this.usuario).pipe(
      tap((respuesta: any) => {
        console.log('Registro exitoso:', respuesta);

        if (respuesta && respuesta.message === 'Usuario registrado exitosamente.') {
          this.registroExitoso = true;
          this.router.navigate(['/inicio-sesion']);
        } else {
          this.errorMessage = 'Error en el registro: Registro no exitoso';
          console.error(this.errorMessage);
        }
      }),
      catchError((error: any) => {
        if (error.status === 409) {
          this.errorMessage = 'Error en el registro: El correo electrónico ya está en uso.';
        } else if (error.status === 400 && error.error && error.error.message === 'Passwords no coinciden') {
          this.errorMessage = 'Error en el registro: Las contraseñas no coinciden.';
        } else {
          this.errorMessage = 'Error en el registro: ' + error.message;
        }
        console.error(this.errorMessage);
        return of(null);
      })
    ).subscribe();
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailRegex.test(email);
    if (isValid) {
      this.errorMessage = ''; // Si es válido, borra el mensaje de error
    }
    return isValid;
  }

  validatePasswords(): boolean {
    if (this.usuario.password !== this.confirmPassword) {
      this.passwordsMismatch = true;
      return false;
    } else {
      this.passwordsMismatch = false;
      return true;
    }
  }
}
