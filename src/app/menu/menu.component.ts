import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  menuButton() {
    var x = document.getElementById("icon");

    if (x.className === "icon") {
      x.className += " close";
    } else {
      x.className = "icon";
    }

  }

  activateMenu() {
    this.menuButton();
    var x = document.getElementById("menu");

    if (x.className === "menu") {
      x.className += " showMenu";
    } else {
      x.className = "menu";
    }

    this.activateleft();
    this.activateright();
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
