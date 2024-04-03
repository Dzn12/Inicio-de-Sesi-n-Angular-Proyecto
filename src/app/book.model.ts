export class Obra {
    id: number = 0;
    titulo: string = '';
    descripcion: string = '';
    autor: string = '';
    
    constructor(id: number = 0, titulo: string = '', descripcion: string = '', autor: string = '') {
      this.id = id;
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.autor = autor;
    }
  }
  

  