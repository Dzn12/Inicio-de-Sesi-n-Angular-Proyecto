import { Component } from '@angular/core';
import { User } from '../usuer.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {

  usuario: User = new User();
  isLoggedIn: boolean = false;
  inicioSesionExitoso: boolean = false;
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  loginUser() {
    this.userService.loginUser(this.usuario).pipe(
      tap((respuesta: any) => {
        console.log(this.usuario);
        console.log('Inicio de sesión exitoso Angular:', respuesta);

        // Verifica si la respuesta indica un inicio de sesión exitoso (ajusta según tu API)
        if (respuesta && respuesta.token != null ) {
          this.inicioSesionExitoso = true;
          this.isLoggedIn = true;

          // Almacena el token en el localStorage
          this.userService.saveToken(respuesta.token);

          // Almacena el ID en el localStorage
          localStorage.setItem('userId', respuesta.id);

          this.router.navigate(['/dashboard']);
        } else {
          // Puedes manejar otras respuestas exitosas aquí si es necesario
          this.errorMessage = 'Error en el inicio de sesión: Inicio de sesión no exitoso.';
          console.error(this.errorMessage);
        }
        // Manejar la respuesta del inicio de sesión
      }),
      catchError((error: any) => {
        this.errorMessage = 'Error en el inicio de sesión: ' + error.message;
        console.error(this.errorMessage);
        // Manejar el error
        return of(null); // Devuelve un observable vacío para evitar errores en la cadena
      })
    ).subscribe();
  }
}
