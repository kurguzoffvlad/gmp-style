import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmpStyleComponent } from './gmp-style.component';

describe('GmpStyleComponent', () => {
  let component: GmpStyleComponent;
  let fixture: ComponentFixture<GmpStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmpStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmpStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
