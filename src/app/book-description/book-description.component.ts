import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Obra } from '../book.model';

@Component({
  selector: 'app-book-description',
  templateUrl: './book-description.component.html',
  styleUrls: ['./book-description.component.css']
})
export class BookDescriptionComponent implements OnInit {
  obra: Obra | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id']; // Convertir el parámetro a número
      this.loadObraById(id);
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
}
