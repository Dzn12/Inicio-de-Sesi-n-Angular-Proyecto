
// src/app/comentario.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  private apiUrl = 'http://localhost:8000/api/comentarios';
 
  constructor(private http: HttpClient) { }
 
  // Método para agregar un comentario
  agregarComentario(idObra: number, usuarioId: number, texto: string): Observable<any> {
    const comentarioData = { idObra, usuarioId, texto };
    return this.http.post<any>(this.apiUrl, comentarioData);
  }
 
  obtenerComentarios(idObra: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/obra/${idObra}`);
  }
}