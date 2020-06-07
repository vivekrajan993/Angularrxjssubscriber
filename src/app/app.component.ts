import { Component } from '@angular/core';
import { map, filter, take } from "rxjs/operators";
import { interval, pipe } from "rxjs";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  ngOnInit() {
    interval(1000)
      .pipe(
        take(3),
        map(v => Date.now())
      )
      .subscribe(value => console.log("Subscriber: " + value));

    /*
  const middleware = pipe(
    take(3),
    map(v => Date.now())
  );

  interval(1000)
    .pipe(middleware)
    .subscribe(value => console.log("Subscriber: " + value));
    */
  }
}

