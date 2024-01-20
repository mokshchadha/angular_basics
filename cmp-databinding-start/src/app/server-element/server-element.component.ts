import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent implements OnInit {
  @Input('myserver') element: { name: string; type: string; content: string };

  constructor() {}

  ngOnInit(): void {}
}
