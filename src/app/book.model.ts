export class Obra {
  id: number = 0;
  titulo: string = '';
  descripcion: string = '';
  autor: string = '';
  rutaImagen: string = ''; // Agrega el campo para la ruta de la imagen
  
  constructor(id: number = 0, titulo: string = '', descripcion: string = '', autor: string = '', rutaImagen: string = '') {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.autor = autor;
    this.rutaImagen = rutaImagen;
  }
}
