import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.sass'],
})
export class Page404Component implements OnInit {
  message: string = "Page doesn't EXISTS!";
  constructor() {}

  ngOnInit(): void {}
}
