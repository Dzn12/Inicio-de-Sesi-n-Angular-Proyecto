import { Component, ElementRef, ViewChild } from '@angular/core';
import { BooksService } from '../../book.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-search-box',
  template: `
 
    <input type="text"
      class="form-control"
      placeholder="Search"
      (keyup.enter)="searchBook()"
      #txtBookInput
    >
  `,
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @ViewChild('txtBookInput') public bookInput!: ElementRef<HTMLInputElement>;
  books: any[] = [];
 
  constructor(private booksService: BooksService, private router: Router) {}
 
  searchBook() {
    const newTag = this.bookInput.nativeElement.value.trim();
    if (newTag.length < 5) {
      alert('Enter more characters in the search');
      return;
    }
 
    this.booksService.searchBooks(newTag).subscribe(
      (data) => {
        if (data.length > 0) {
          const firstBookId = data[0].id;
          this.router.navigate(['/book-description', firstBookId]);
        } else {
          alert('No books found with that title.');
        }
      },
      (error: any) => {
        console.error('Error when searching for books:', error);
      }
    );
 
    this.bookInput.nativeElement.value = '';
  }
}
 
