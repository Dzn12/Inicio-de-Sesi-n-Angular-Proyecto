import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Obra } from '../book.model';
import { Genero } from '../genero.model';
import { ComentarioService } from '../comentario.service';
import { FavoritoService } from '../favorito.service';

@Component({
  selector: 'app-book-description',
  templateUrl: './book-description.component.html',
  styleUrls: ['./book-description.component.css']
})
export class BookDescriptionComponent implements OnInit {
  obra: Obra | undefined;
  generos: Genero[] = [];
  nuevoComentario: string = '';

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private comentarioService: ComentarioService,
    private favoritoService: FavoritoService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.loadObraById(id);
      this.loadGenerosByObraId(id);
    });
  }

  loadObraById(id: number): void {
    this.userService.getObraById(id).subscribe(
      (obra: Obra) => {
        this.obra = obra;
      },
      (error) => {
        console.error('Error al cargar la obra:', error);
      }
    );
  }

  loadGenerosByObraId(id: number): void {
    this.userService.getGenerosByObraId(id).subscribe(
      (generos: Genero[]) => {
        this.generos = generos;
      },
      (error) => {
        console.error('Error al cargar los géneros:', error);
      }
    );
  }

  agregarComentario(): void {
    if (this.obra) {
      const idObra = this.obra.id;
      const Idusuario = Number(localStorage.getItem('userId'));

      const texto = this.nuevoComentario;

      this.comentarioService.agregarComentario(idObra, Idusuario, texto).subscribe(
        response => {
          console.log('Comentario agregado:', response);
          this.nuevoComentario = '';
        },
        error => {
          console.error('Error al agregar comentario:', error);
        }
      );
    }
  }

  agregarFavorito(): void {
    if (this.obra) {
      const idObra = this.obra.id;
      const IdUsuario = Number(localStorage.getItem('userId'));
   
      this.favoritoService.agregarFavorito(idObra, IdUsuario).subscribe(
        response => {
          console.log('Obra agregada a favoritos:', response);
          alert('Obra agregada a favoritos');
        },
        error => {
          console.error('Error al agregar a favoritos:', error);
          alert('Error al agregar a favoritos');
        }
      );
    }
  }

}
