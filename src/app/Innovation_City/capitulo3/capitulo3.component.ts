import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Capitulo } from '../../capitulo.model';

@Component({
  selector: 'app-capitulo3',
  templateUrl: './capitulo3.component.html',
  styleUrls: ['./capitulo3.component.css']
})
export class Capitulo3Component implements OnInit{

  capitulo: Capitulo | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getCapituloById(8); // Aquí puedes poner el ID del capítulo que deseas mostrar
  }

  getCapituloById(id: number): void {
    this.userService.getCapitulo(id)
      .subscribe(
        capitulo => {
          this.capitulo = capitulo;
        },
        error => {
          console.error('Error al obtener el capítulo:', error);
        }
      );
  }
}
