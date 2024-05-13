import { Component, OnInit } from '@angular/core'; // Importa OnInit si aún no está importado.
import { UserService } from '../user.service';
 
@Component({
  selector: 'app-administracion',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdministracionComponent implements OnInit { // Asegúrate de implementar OnInit.
  isAdmin: boolean = false;
  usuarios: any[] = [];
 
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
      (respuesta: any) => {
        console.log('Usuario eliminado:', respuesta);
        // Eliminar el usuario de la lista de usuarios para actualizar la interfaz de usuario.
        this.usuarios = this.usuarios.filter(u => u.id !== userId);
      },
      (error: any) => {
        console.error('Error al eliminar usuario:', error);
        // Manejar el error, por ejemplo, mostrar un mensaje al usuario.
      }
    );
  }
}