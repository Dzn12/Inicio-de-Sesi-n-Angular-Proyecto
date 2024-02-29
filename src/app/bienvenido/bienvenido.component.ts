import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {
  slides = [
    {
      image: '../../../assets/Henry.jpg',
      title: 'First slide label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
      image: '../../../assets/Henry.jpg',
      title: 'Second slide label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
      image: '../../../assets/Henry.jpg',
      title: 'Second slide label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    }
    // Agrega más objetos para más diapositivas
  ];

  slidesa = [
    {
      image: '../../../assets/Henry.jpg',
      title: 'First slide label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
      image: '../../../assets/warhammer-40000-space-marine-2.webp',
      title: 'Second slide label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
      image: '../../../assets/Henry.jpg',
      title: 'Third slide label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
      image: '../../../assets/warhammer_40k-19.jpg',
      title: 'Third slide label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
      image: '../../../assets/Henry.jpg',
      title: 'Third slide label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
      image: '../../../assets/Henry.jpg',
      title: 'Third slide label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
      image: '../../../assets/Henry.jpg',
      title: 'Third slide label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
      image: '../../../assets/sombradioses_destacada.jpg',
      title: 'Third slide label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
      image: '../../../assets/1366_2000.jpeg',
      title: 'Third slide label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
      image: '../../../assets/1366_2000.jpeg',
      title: 'Third slide label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    }
    // Agrega más objetos para más diapositivas
  ];
  currentSlide = 0;

  prevSlide() {
    this.currentSlide = Math.max(0, this.currentSlide - 1);
  }

  nextSlide() {
    // Verificar si el índice actual está en la última imagen
    if (this.currentSlide >= this.slidesa.length - 3) {
      // Si estamos en la última imagen, retroceder al inicio
      this.currentSlide = 0;
    } else {
      // Avanzar al siguiente slide
      this.currentSlide++;
    }
  }
  

  ngOnInit() {
    setInterval(() => {
      this.nextSlide();
    }, 3000); // 3000 milisegundos = 3 segundos
  }

  goToSlide(index: number) {
    if (index >= this.slidesa.length) {
      this.currentSlide = 0; // Regresar al primer índice si se supera la cantidad de imágenes
    } else {
      this.currentSlide = index;
    }
  }
  
  
}
