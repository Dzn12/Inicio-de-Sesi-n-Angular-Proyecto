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
  isLoggedIn: boolean = false;
  passwordsMismatch: boolean = false; // Bandera que indica diferentes pswds

  registroExitoso: boolean = false;
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  registerUser() {
    // Valida pswds antes de enviar el formulario
    if (this.validatePasswords()) {
      this.userService.registerUser(this.usuario).pipe(
        tap((respuesta: any) => {
          console.log('Registro exitoso:', respuesta);

          // Verifica si la respuesta indica un registro exitoso
          if (respuesta && respuesta.message === 'Usuario registrado exitosamente.') {
            this.registroExitoso = true;
            this.router.navigate(['/inicio-sesion']);
          } else {
            // Mostrar mensaje de error genérico si la respuesta no es la esperada
            this.errorMessage = 'Error en el registro: Registro no exitoso';
            console.error(this.errorMessage);
          }
        }),
        catchError((error: any) => {
          // Manejar diferentes tipos de errores y mostrar mensajes de error específicos
          if (error.status === 409) {
            this.errorMessage = 'Error en el registro: El correo electrónico ya está en uso.';
          } else if (error.status === 400 && error.error && error.error.message === 'Passwords no coinciden') {
            this.errorMessage = 'Error en el registro: Las contraseñas no coinciden.';
          } else {
            this.errorMessage = 'Error en el registro: ' + error.message;
          }
          console.error(this.errorMessage);
          // Devuelve un observable vacío para evitar errores en la cadena
          return of(null);
        })
      ).subscribe();
    }
  }

  validatePasswords(): boolean {
    if (this.usuario.password !== this.confirmPassword) {
      this.passwordsMismatch = true; // Establecer la bandera de contraseñas no coinciden
      return false; // Indicar que las contraseñas no coinciden
    } else {
      this.passwordsMismatch = false; // Las contraseñas coinciden, restablecer la bandera
      return true; // Indicar que las contraseñas coinciden
    }
  }

}
