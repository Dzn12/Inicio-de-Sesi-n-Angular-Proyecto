
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { User } from './usuer.model'; // Asegúrate de ajustar la ruta correctamente

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://10.118.2.216:8000';
//private apiUrl = 'http://127.0.0.1:8000';

private tokenKey = 'authToken'; // Define una clave para el token en el localStorage

  constructor(private http: HttpClient) { }

  registerUser(usuario: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/usuario/registro`, usuario).pipe(
      catchError(this.handleError<any>('registerUser'))
    );  
  }

  loginUser(usuario: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/usuario/login`, usuario).pipe(
      catchError(this.handleError<any>('loginUser'))
    );
  }

  // Método para guardar el token en el localStorage
  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Método para obtener el token del localStorage
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }


  updateUser(userId: number, usuario: User): Observable<any> {
    return this.http.put(`${this.apiUrl}/api/usuario/editar/${userId}`, usuario).pipe(
      catchError(this.handleError<any>('updateUser'))
    );
  }
  
  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/${userId}`).pipe(
      catchError(this.handleError<any>('deleteUser'))
    );
  }

  
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}