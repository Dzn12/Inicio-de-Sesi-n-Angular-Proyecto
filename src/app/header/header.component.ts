import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls : ['./header.component.css']
})
export class HeaderComponent  {
  avatarIcon = '../../../assets/Henry.jpg';
 
  showMenu: boolean = false;
  isAdmin: boolean = false;  // Boolean to control admin access
 
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  ngOnInit() {
    this.isAdmin = localStorage.getItem('isAdmin') === 'true';
}
}