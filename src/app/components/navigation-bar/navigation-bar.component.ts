import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  @Input() navBar: string = '';
  @Input() link: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
