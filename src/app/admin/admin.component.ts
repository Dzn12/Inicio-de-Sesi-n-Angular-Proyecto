import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-administracion',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdministracionComponent implements OnInit {
  isAdmin: boolean = false;
  usuarios: any[] = [];
  mensaje: string = ''; // Propiedad para manejar el mensaje de éxito

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.isAdmin = true; // Asumiendo que la verificación de administrador se hace de manera más segura en un entorno de producción.
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.userService.getUsers().subscribe(
      (usuarios: any[]) => {
        this.usuarios = usuarios;
      },
      (error: any) => {
        console.error('Error al cargar usuarios:', error);
        // Aquí puedes manejar errores, por ejemplo, mostrando un mensaje de error en la interfaz de usuario.
      }
    );
  }

  eliminarUsuario(userId: number) {
    if (!this.isAdmin) {
      console.error('No tienes permiso para eliminar usuarios.');
      return;
    }
  
    this.userService.deleteUser(userId).subscribe(
      response => {
        console.log('Usuario eliminado:', response);
        this.usuarios = this.usuarios.filter(u => u.id !== userId);
        this.mensaje = 'Usuario eliminado con éxito.';
        setTimeout(() => {
          this.mensaje = ''; // Restablece el mensaje después de 3 segundos
        }, 3000);
      },
      error => {
        console.error('Error al eliminar usuario:', error);
        // Aquí puedes manejar errores, por ejemplo, mostrando un mensaje al usuario.
      }
    );
  }
}  




