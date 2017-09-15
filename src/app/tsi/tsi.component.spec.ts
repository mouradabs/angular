import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsiComponent } from './tsi.component';

describe('TsiComponent', () => {
  let component: TsiComponent;
  let fixture: ComponentFixture<TsiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
