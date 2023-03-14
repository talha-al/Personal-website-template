import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
    console.log(this.route);


  }

  goToLink() {
    console.log(this.route.url);

  }

  selectedMenu(id: string) {
    console.log();

    if (this.route.url === id) return true;
    else return false;
  }



}
