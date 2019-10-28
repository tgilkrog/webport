import { Component, OnInit } from '@angular/core';
import { Projects } from '../projects';
import { ActivatedRoute } from '@angular/router';
import { ProDataService } from '../pro-data.service';

@Component({
  selector: 'app-projectinfo',
  templateUrl: './projectinfo.component.html',
  styleUrls: ['./projectinfo.component.css']
})

export class ProjectinfoComponent implements OnInit {
  id: Object;
  project: Projects;

  constructor(private _route: ActivatedRoute, private ps: ProDataService) {
    this.id = +this._route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.project = this.getdat(this.id);
  }

  getdat(id) {
    var project = this.ps.getProjectById(id);
    var game = this.ps.getGametById(id);
    var opgave = this.ps.getOpgaverById(id);

    if (project != null) {
      return project;
    }
    else if (game != null) {
      return game;
    }
    else if (opgave != null) {
      return opgave;
    }
  }
}
