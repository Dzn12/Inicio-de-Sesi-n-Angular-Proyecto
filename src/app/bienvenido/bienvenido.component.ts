import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { PopupComponent } from '../popup/popup.component'; // Importa el componente de popup

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
  showPopup: boolean = false; // Inicialmente, el popup está oculto

  openPopup() {
    this.showPopup = true; // Muestra el popup cuando se llama esta función
  }

  closePopup() {
    this.showPopup = false; // Oculta el popup cuando se llama esta función
  }
  
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
 
  @ViewChild('slidesContainer') slidesContainer: ElementRef;

  mouseDownX: number = 0;
  mouseMoveX: number = 0;
  isDragging: boolean = false;
  constructor() {
    this.slidesContainer = new ElementRef(document.createElement('div'));
  }

  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.mouseDownX = event.clientX;
    this.mouseMoveX = 0;
  }

  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      this.mouseMoveX = event.clientX - this.mouseDownX;
      // Ajusta el carrusel en función del desplazamiento del ratón
      // Puedes usar esta información para calcular cuánto mover el carrusel
      const newTranslateX = -this.currentSlide * (330 / this.slidesa.length) + (this.mouseMoveX / this.slidesa.length);
      this.slidesContainer.nativeElement.style.transform = `translateX(${newTranslateX}%)`;
    }
  }

  onMouseUp() {
    if (this.isDragging) {
      // Determina la dirección del movimiento y ajusta el carrusel según sea necesario
      if (this.mouseMoveX > 0) {
        this.prevSlide();
      } else if (this.mouseMoveX < 0) {
        this.nextSlide();
      }
      this.isDragging = false;
    }
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMoveWindow(event: MouseEvent) {
    this.onMouseMove(event);
  }

  @HostListener('window:mouseup')
  onMouseUpWindow() {
    this.onMouseUp();
  }

  ngOnDestroy() {
    // Eliminar suscriptores de eventos al destruir el componente
    window.removeEventListener('mousemove', this.onMouseMoveWindow);
    window.removeEventListener('mouseup', this.onMouseUpWindow);
  }
}
