import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3VizComponent } from './d3-viz.component';

describe('D3VizComponent', () => {
  let component: D3VizComponent;
  let fixture: ComponentFixture<D3VizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D3VizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D3VizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
