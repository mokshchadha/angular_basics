import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { Observable } from 'rxjs-compat';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe((count) =>
    //   console.log(count)
    // );
    const customIntervalObservable = Observable.create(
      (observer) => {
        let count = 0;
        if (count === 10) {
          observer.complete(); // this is different from throwing a error
        }
        setInterval(() => {
          observer.next(count);
          count++;
        }, 1000);
      },
      (error) => {
        console.log(error); // throwing an error cancels the observer but does not complete it
      },
      () => {
        //this is a on-complete callback
      }
    );

    const observerableAfterPipe = customIntervalObservable.pipe(
      filter((e: number) => e % 2 === 0),
      map((e: number) => {
        return `Round :- ${e + 1}`;
      })
    );
    this.firstObsSubscription = observerableAfterPipe.subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}
