import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { trigger, transition, style, query, animate, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimation', [
      transition('1 => 2, 1 => 3, 1 => 4, 1 => 5, 1 => 6, 2 => 3, 2 => 4, 2 => 5, 2 => 6, 3 => 4, 3 => 5, 3 => 6, 4 => 5, 4 => 6', [
        style({ height: '100%', width: '100%' }),
        query(':enter', style({ transform: 'translateX(100%)' })),
        query(':enter, :leave', style({ position: 'absolute', top: 'auto', left: 0, right: 0 })),
        // animate the leave page away
        group([
          query(':leave', [
            animate('0.5s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(-100%)' })),
          ]),
          // and now reveal the enter
          query(':enter', animate('.5s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
        ]),
      ]),
      transition('6 => 5, 6 => 4, 6 => 3, 6 => 2, 6 => 1, 5 => 4, 5 => 3, 5 => 2, 5 => 1, 4 => 3, 4 => 2, 4 =>1, 3 => 2, 3 => 1, 2 => 1', [
        style({ height: '100%', width: '100%' }),
        query(':enter', style({ transform: 'translateX(-100%)' })),
        query(':enter, :leave', style({ position: 'absolute', top: 'auto', left: 0, right: 0 })),
        // animate the leave page away
        group([
          query(':leave', [
            animate('.5s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(100%)' })),
          ]),
          // and now reveal the enter
          query(':enter', animate('.5s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
        ]),
      ]),
    ])
  ]
})
export class AppComponent {
  title = 'tgport';

  location: string = '';

  constructor(private route: Router, private _route: ActivatedRoute) {
    this._route.url.subscribe(url => {
      this.location = this.route.url;
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  getDepth(outlet) {
    return outlet.activatedRouteData['depth'];
  }
}
