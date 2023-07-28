import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninComponent } from './signin.component';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let page:any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigninComponent]
    });
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    page = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(false).toBeTruthy();
  });
});
