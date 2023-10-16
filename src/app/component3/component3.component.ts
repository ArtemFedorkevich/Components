import { Component, OnDestroy } from '@angular/core';
import { interval, combineLatest, Subject, forkJoin, zip} from 'rxjs';
import { take, map, toArray, takeUntil, exhaustMap, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})

export class Component3 implements OnDestroy {
  source1 = interval(200).pipe(take(10), map((val) => 'source1 val = ' + val));
  source2 = interval(300).pipe(take(10), map((val) => 'source2 val = ' + val));
  source3 = interval(400).pipe(take(10), map((val) => 'source3 val = ' + val));
  private destroy$ = new Subject<void>();

  constructor() {
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  task1() {
    combineLatest([this.source1, this.source2, this.source3]).pipe(
      takeUntil(this.destroy$),
      map(([val1, val2, val3]) => [val1, val2, val3])
    ).subscribe((result) => console.log(result));
  }

  task2() {
    forkJoin([this.source1, this.source2, this.source3]).pipe(
      takeUntil(this.destroy$),
      toArray()
    ).subscribe((result) => console.log(result));
  }

  task3() {
    zip(this.source1, this.source2, this.source3).pipe(
      takeUntil(this.destroy$)
    ).subscribe(([val1, val2, val3]) => console.log([val1, val2, val3]));
  }
}
