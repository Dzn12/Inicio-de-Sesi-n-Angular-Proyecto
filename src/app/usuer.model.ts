export class User {
  id_usuario: number = 0;
  nombre: string = '';
  correo: string = '';
  password: string = '';
  isAdmin: Boolean = false; // Agrega la propiedad 'isAdmin'

  constructor(id_usuario: number = 0, nombre: string = '', correo: string = '', password: string = '', isAdmin: Boolean = false) {
    this.id_usuario = id_usuario;
    this.nombre = nombre;
    this.correo = correo;
    this.password = password;
    this.isAdmin = isAdmin; // Inicializa la propiedad 'isAdmin'
  }
}
