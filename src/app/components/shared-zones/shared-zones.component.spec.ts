import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedZonesComponent } from './shared-zones.component';

describe('SharedZonesComponent', () => {
  let component: SharedZonesComponent;
  let fixture: ComponentFixture<SharedZonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedZonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedZonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
