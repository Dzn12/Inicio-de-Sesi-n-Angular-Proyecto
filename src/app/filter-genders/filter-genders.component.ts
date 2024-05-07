import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Obra } from '../book.model';

@Component({
  selector: 'app-filter-genders',
  templateUrl: './filter-genders.component.html',
  styleUrls: ['./filter-genders.component.css'],
})
export class FilterGendersComponent implements OnInit {
  obras: Obra[] = [];
  generoId: number = 1; // ID del género "Action" por defecto

  generosDisponibles: { id: number, nombre: string }[] = [
    { id: 1, nombre: 'Action' },
    { id: 2, nombre: 'Adventure' },
    { id: 3, nombre: 'Romance' },
    { id: 4, nombre: 'Mystery' },
    { id: 5, nombre: 'Sfi-Fi' },
    { id: 6, nombre: 'History' },
    { id: 7, nombre: 'Science' },
    { id: 8, nombre: 'Dystopian' },
    { id: 9, nombre: 'Horror' },
    { id: 10, nombre: 'Fantasy' },
    { id: 11, nombre: 'Policy' },
    { id: 12, nombre: 'Suspense' },
    { id: 13, nombre: 'Thriller' },
    { id: 14, nombre: 'Comedy' },
    { id: 15, nombre: 'Fiction' }
  ];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getObrasByGenero();
  }

  getObrasByGenero(): void {
    this.userService.getObrasByGenero(this.generoId).subscribe(
      (obras: Obra[]) => {
        this.obras = obras;
      },
      (error) => {
        console.error('Error al obtener las obras por género:', error);
      }
    );
  }
}
