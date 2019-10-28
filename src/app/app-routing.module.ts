import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomepageComponent } from "./homepage/homepage.component";
import { EducationComponent } from "./education/education.component";
import { SkillsComponent } from "./skills/skills.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ProjectinfoComponent } from "./projectinfo/projectinfo.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  { path: "", redirectTo: "Forside", pathMatch: "full" },
  {
    path: "Forside",
    data: { depth: 1 },
    component: HomepageComponent
  },
  {
    path: "Uddannelse",
    data: { depth: 2 },
    component: EducationComponent
  },
  {
    path: "Kompetencer",
    data: { depth: 3 },
    component: SkillsComponent
  },
  {
    path: "Projekter",
    data: { depth: 4 },
    component: ProjectsComponent
  },
  {
    path: "Om Mig",
    data: { depth: 5 },
    component: AboutComponent
  },
  {
    path: 'Projekter/:id',
    data: { depth: 6 },
    component: ProjectinfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
