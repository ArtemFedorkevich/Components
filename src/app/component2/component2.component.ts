import { Component, OnDestroy } from '@angular/core';
import { interval, of, Subject } from 'rxjs';
import { take, delay, repeat, filter, switchMap, mergeMap, exhaustMap, takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})

export class Component2 implements OnDestroy {
  numbers = interval(1000).pipe(take(20));
  private destroy$ = new Subject<void>();

  constructor() {
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  task1() {
    this.numbers.pipe(
      takeUntil(this.destroy$),
      switchMap((val) => of(val).pipe(delay(200), repeat(1000)))
    ).subscribe((result) => console.log(result));
  }

  task2() {
    interval(100).pipe(
      take(10),
      repeat()
    ).subscribe((result) => console.log(result));
  }

  task3() {
    this.numbers.pipe(
      takeUntil(this.destroy$),
      filter((val) => val % 2 === 0),
      exhaustMap((val) => of(val).pipe(delay(400), repeat(5)))
    ).subscribe((result) => console.log(result));
  }

  task4() {
    this.numbers.pipe(
      takeUntil(this.destroy$),
      mergeMap((val) => of(val).pipe(delay(300), repeat(5)))
    ).subscribe((result) => console.log(result));
  }
}
