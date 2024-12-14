import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  showMenu = false;
  showDropDwon = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

  dropDown(){
    this.showDropDwon=!this.showDropDwon;
  }

}
