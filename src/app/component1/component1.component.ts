import { Component, OnDestroy } from '@angular/core';
import { interval, of, Subject } from 'rxjs';
import { take, map, filter, switchMap, concatMap, mergeMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})

export class Component1 implements OnDestroy {
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
      switchMap((val) => of(val * 3))
    ).subscribe((result) => console.log(result));
  }

  task2() {
    this.numbers.pipe(
      take(7)
    ).subscribe((result) => console.log(result));
  }

  task3() {
    this.numbers.pipe(
      takeUntil(this.destroy$),
      filter((val) => val % 2 === 0)
    ).subscribe((result) => console.log(result));
  }
}