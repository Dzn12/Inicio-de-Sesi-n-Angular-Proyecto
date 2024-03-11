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
  userId: number | null = null;

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    // Obtener el userId desde otra fuente (por ejemplo, localStorage)
    const userIdString = localStorage.getItem('authToken');
  
    if (userIdString !== null) {
      
      const decodedToken: any = jwtDecode(userIdString);
      console.log(decodedToken)
      this.userId = decodedToken.username
    } else {
      // Manejar el caso en que 'userId' no está presente en localStorage
      console.error('No se encontró el userId en localStorage.');
    }
  }

  updateUser() {
    // Verificar si el usuario está autenticado antes de intentar la actualización
    if (this.userId !== null) {
      
      this.userService.updateUser(this.userId, this.usuario).subscribe(
        (respuesta: any) => {
          console.log('Actualización de datos exitosa:', respuesta);
          // Manejar la respuesta exitosa de la actualización
        },
        (error: any) => {
          console.error('Error en la actualización de datos:', error);
          // Manejar el error
        }
      );
    } else {
      console.error('No se encontró el userId. No se puede realizar la actualización.');
    }
  }
}
