import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  @Input() navBar: string = '';
  @Input() link: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  public goHome() {
    this.router.navigate([this.link]);
  }

}
