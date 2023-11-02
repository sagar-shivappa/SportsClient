import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketHomeComponent } from './cricket-home.component';

describe('CricketHomeComponent', () => {
  let component: CricketHomeComponent;
  let fixture: ComponentFixture<CricketHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CricketHomeComponent]
    });
    fixture = TestBed.createComponent(CricketHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
