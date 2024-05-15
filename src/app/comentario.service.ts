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
  agregarComentario(idObra: number, usuarioId: number, texto: string): Observable<any> {//para manejar datos asincronos
    const comentarioData = { idObra, usuarioId, texto }; // Objeto con los datos del comentario
    return this.http.post<any>(this.apiUrl, comentarioData); // Realiza una solicitud POST a la API con los datos del comentario y devuelve un Observable
  }
}
 