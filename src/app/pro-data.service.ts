import { Injectable } from '@angular/core';
import projects from '../assets/data/projects.json';


@Injectable({
  providedIn: 'root'
})
export class ProDataService {

  constructor() { }

  getAllProjects() {
    return projects.projects;
  }

  getAllOpgaver() {
    return projects.opgaver;
  }

  getAllGames() {
    return projects.games;
  }

  getProjectById(id) {
    for (let item of projects.projects) {
      if (item.id === id) {
        return item;
      }
    }
  }
  getGametById(id) {
    for (let item of projects.games) {
      if (item.id === id) {
        return item;
      }
    }
  }

  getOpgaverById(id) {
    for (let item of projects.opgaver) {
      if (item.id === id) {
        return item;
      }
    }
  }

  getLatest() {
    let item = projects.projects[projects.projects.length - 1];
    return item;
  }
}
