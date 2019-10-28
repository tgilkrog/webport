import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  activateleft() {
    var r = document.getElementById("leftside");
    if (r.className === "leftside") {
      r.className += " show";
    } else {
      r.className = "leftside";
    }
  }

  activateright() {
    var r = document.getElementById("rightside");
    if (r.className === "rightside") {
      r.className += " show";
    } else {
      r.className = "rightside";
    }
  }

}
