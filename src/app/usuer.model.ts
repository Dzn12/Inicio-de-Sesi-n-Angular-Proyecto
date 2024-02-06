export class User {
    id_usuario: number = 0;
    nombre: string = '';
    correo: string = '';
    password: string = '';
  
    constructor(id_usuario: number = 0, nombre: string = '', correo: string = '', password: string = '') {
      this.id_usuario = id_usuario;
      this.nombre = nombre;
      this.correo = correo;
      this.password = password;
    }
  }
  
  