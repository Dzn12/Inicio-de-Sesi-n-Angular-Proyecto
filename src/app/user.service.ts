
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { User } from './usuer.model'; // Asegúrate de ajustar la ruta correctamente
import { Capitulo } from './capitulo.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //private apiUrl = 'http://10.118.2.216:8000';
  //private apiUrl = 'http://127.0.0.1:8000';
  private apiUrl ="";
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

  getUser(userId: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/api/usuario/${userId}`).pipe(
      catchError(this.handleError<User>('getUser'))
    );
  }


  //updateUser(email:string ,userId: string, pswd: string): Observable<any> {
   // console.log("Hola que tal",userId);

   // const params = new HttpParams()
   // .set('name', userId)
   // .set('pswd', pswd);


   // return this.http.put(`${this.apiUrl}/api/usuario/editar/${email}`, {params}).pipe(
   //   catchError(this.handleError<any>('updateUser'))
   // );
 // }


 updateUser(email: string, name: string, pswd: string): Observable<any> {
  const body = { name, pswd }; // Crear el cuerpo de la petición directamente como un objeto

  return this.http.put(`${this.apiUrl}/api/usuario/editar/${email}`, body).pipe(
    catchError(this.handleError<any>('updateUser'))
  );
}








  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/${userId}`).pipe(
      catchError(this.handleError<any>('deleteUser'))
    );
  }

  getCapitulo(id: number): Observable<Capitulo> {
    return this.http.get<Capitulo>(`${this.apiUrl}/api/capitulos/${id}`).pipe(
      catchError(this.handleError<Capitulo>('getCapitulo'))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
