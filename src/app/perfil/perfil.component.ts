import { Component, OnInit } from '@angular/core';
import { FavoritoService } from '../favorito.service';
 
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  nombre: string | null = null;
  email: string | null = null;
  favoritos: any[] = [];
  obra: any; // Assuming you have an "obra" property that you use in the component
 
  constructor(private favoritoService: FavoritoService) {}
 
  ngOnInit() {
    this.nombre = localStorage.getItem('nombre');
    this.email = localStorage.getItem('email');
    const userId = localStorage.getItem('userId');
 
    if (userId) {
      this.cargarFavoritos(parseInt(userId));
    }
  }
 
  cargarFavoritos(usuarioId: number): void {
    this.favoritoService.obtenerFavoritosUsuario(usuarioId).subscribe(
      (data) => {
        this.favoritos = data;
      },
      (error) => {
        console.error('Error al cargar los favoritos:', error);
      }
    );
  }
 
  agregarFavorito(obra: any): void {
    if (obra) {
      const idObra = obra.ID;
      const idUsuario = Number(localStorage.getItem('userId'));
 
      this.favoritoService.agregarFavorito(idObra, idUsuario).subscribe(
        response => {
          console.log('Obra agregada a favoritos:', response);
          alert('Obra agregada a favoritos');
          this.cargarFavoritos(idUsuario); // Refresh the list of favorites
        },
        error => {
          console.error('Error al agregar a favoritos:', error);
          alert('Error al agregar a favoritos');
        }
      );
    } else {
      console.error('Error: Obra no definida');
    }
  }
}