export class Capitulo {
    id: number = 0;
    titulo: string = '';
    contenido: string = '';
    num_capitulo: number = 0;
  
    constructor(id: number = 0, titulo: string = '', contenido: string = '', num_capitulo: number = 0) {
      this.id = id;
      this.titulo = titulo;
      this.contenido = contenido;
      this.num_capitulo = num_capitulo;
    }
  }
  