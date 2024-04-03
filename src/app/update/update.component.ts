// update.component.ts
import { jwtDecode } from 'jwt-decode';
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
  nombre:string ="";
  updateSuccess: boolean = false;
  updateError: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    // Obtener el userId desde otra fuente (por ejemplo, localStorage)
    const userIdString = localStorage.getItem('authToken');
      
    console.log("INIT UPDATE",userIdString);
    if (userIdString !== null) {
      
      const decodedToken: any = jwtDecode(userIdString);
      console.log(decodedToken)

      this.nombre = this.usuario.nombre;
      this.userId = decodedToken.username;
      this.pswd = decodedToken.pswd;

      console.log(this.nombre)

    } else {
      // Manejar el caso en que 'userId' no está presente en localStorage
      console.error('No se encontró el userId en localStorage.');
    }
  }

  updateUser() {
    // Verificar si el usuario está autenticado antes de intentar la actualización
    if (this.userId !== null && this.pswd !== null) {
      // Verificar si se han realizado cambios en los datos del usuario
      if (this.usuario.nombre === null || this.usuario.nombre.trim() === '') {
        console.error('No se proporcionaron datos para actualizar.');
        this.updateError = true;
        return; // Salir del método sin realizar la actualización
      }
  
      // Verificar si el nombre contiene solo letras y espacios
      if (!this.isNombreValid()) {
        console.error('El nombre solo puede contener letras y espacios.');
        this.updateError = true;
        return; // Salir del método sin realizar la actualización
      }
  
      // Se han proporcionado datos para actualizar y el nombre es válido, proceder con la actualización
      this.userService.updateUser(this.userId, this.usuario.nombre, this.pswd).subscribe(
        (respuesta: any) => {
          console.log('Actualización de datos exitosa:', respuesta);
          this.updateSuccess = true;
          this.updateError = false; //
          // Manejar la respuesta exitosa de la actualización
        },
        (error: any) => {
          console.error('Error en la actualización de datos:', error);
          this.updateError = true;
          // Manejar el error
        }
      );
    } else {
      console.error('No se encontró el userId. No se puede realizar la actualización.');
    }
  }
  
  // Método para verificar si el nombre contiene solo letras y espacios
  isNombreValid(): boolean {
    return /^[a-zA-Z\s]*$/.test(this.usuario.nombre || '');
  }
  


}  
