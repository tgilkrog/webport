import { Component, OnInit } from '@angular/core';
import { Projects } from '../projects';
import { ProDataService } from '../pro-data.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('0.5s ease-out', style({ opacity: '1' })),
      ]),
    ]),
  ],
})
export class ProjectsComponent implements OnInit {
  projects: Projects[];
  games: Projects[];
  opgaver: Projects[];
  Opgave: any;
  ShowSemester = true;
  ShowGames = false;
  ShowOpgaver = false;

  constructor(private ps: ProDataService) {
    this.projects = ps.getAllProjects();
    this.games = ps.getAllGames();
    this.opgaver = ps.getAllOpgaver();
    this.Opgave = this.projects[this.projects.length - 1];
  }

  ngOnInit() {

  }

  getGames() {
    this.projects = this.ps.getAllGames();
    this.Opgave = this.games[this.games.length - 1];
  }

  getSemester() {
    this.projects = this.ps.getAllProjects();
    this.Opgave = this.projects[this.projects.length - 1];
  }

  getOpgaver() {
    this.projects = this.ps.getAllOpgaver();
    this.Opgave = this.opgaver[this.opgaver.length - 1];
  }
}
