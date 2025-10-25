import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterationHomeComponent } from './registeration-home.component';

describe('RegisterationHomeComponent', () => {
  let component: RegisterationHomeComponent;
  let fixture: ComponentFixture<RegisterationHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterationHomeComponent],
    });
    fixture = TestBed.createComponent(RegisterationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
