import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hallo',
  templateUrl: './hallo.component.html',
  styleUrls: ['./hallo.component.scss']
})
export class HalloComponent implements OnInit {
  public title = "Angelika";

  constructor() { }

  ngOnInit(): void {
  }

  public onClick() {
    alert("siema")
  }
  

}
