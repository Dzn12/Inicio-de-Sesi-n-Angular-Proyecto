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
  isLoggedIn: boolean = false;
 

  registroExitoso: boolean = false;
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  registerUser() {
    this.userService.registerUser(this.usuario).pipe(
      tap((respuesta: any) => {
        console.log('Registro exitoso:', respuesta);

        // Verifica si la respuesta indica un registro exitoso (ajusta según tu API)
        if (respuesta && respuesta.message === 'Usuario registrado exitosamente.') {
          this.registroExitoso = true;
          this.router.navigate(['/inicio-sesion']);
        } else {
          // Puedes manejar otras respuestas exitosas aquí si es necesario
          this.errorMessage = 'Error en el registro: Registro no exitoso';
          console.error(this.errorMessage);
        }
      }),
      catchError((error: any) => {
        this.errorMessage = 'Error en el registro: ' + error.message;
        console.error(this.errorMessage);
        // Manejar el error
        return of(null); // Devuelve un observable vacío para evitar errores en la cadena
      })
    ).subscribe();
  }
}
