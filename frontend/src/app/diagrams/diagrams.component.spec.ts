import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DiagramsComponent } from './diagrams.component';

describe('DiagramsComponent', () => {
  let component: DiagramsComponent;
  let fixture: ComponentFixture<DiagramsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
