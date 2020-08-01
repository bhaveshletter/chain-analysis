import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestBlockComponent } from './latest-block.component';

describe('LatestBlockComponent', () => {
  let component: LatestBlockComponent;
  let fixture: ComponentFixture<LatestBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
