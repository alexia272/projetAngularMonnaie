import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  goToSomewhere(path) {
    console.log(path);
    switch (path) {
      case 'home':
        this.router.navigate(['']);
        break;
      case 'moneyConvertor':
        this.router.navigate(['MoneyConvertor']);
        break;
      case 'devise':
        this.router.navigate(['devises']);
        break;
    }

}

}
