import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {
  private apiUrl = '/api/favoritos';


  constructor(private http: HttpClient) {}

  agregarFavorito(idObra: number, idUsuario: number): Observable<any> {
    const body = { idObra, idUsuario };
    return this.http.post(this.apiUrl, body);
  }

  // Método para obtener los favoritos del usuario
  obtenerFavoritosUsuario(usuarioId: number): Observable<any[]> {
    const url = `${this.apiUrl}/${usuarioId}`;
    return this.http.get<any[]>(url);
  }
}
