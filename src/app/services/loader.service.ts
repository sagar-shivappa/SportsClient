import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  loading$ = new Subject<boolean>();
  constructor() {}

  show() {
    this.loading$.next(true);
    console.log('load', this.loading$);
  }
  hide() {
    this.loading$.next(false);
    console.log('off load', this.loading$);
  }
}
