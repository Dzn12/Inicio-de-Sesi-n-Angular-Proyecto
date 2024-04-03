
  export class User {
    id_usuario: number = 0;
    nombre: string = '';
    correo: string = '';
    password: string = '';
    rol: string = ''; // Agrega la propiedad 'rol'
  
    constructor(id_usuario: number = 0, nombre: string = '', correo: string = '', password: string = '', rol: string = '') {
      this.id_usuario = id_usuario;
      this.nombre = nombre;
      this.correo = correo;
      this.password = password;
      this.rol = rol; // Inicializa la propiedad 'rol'
    }
  }
  