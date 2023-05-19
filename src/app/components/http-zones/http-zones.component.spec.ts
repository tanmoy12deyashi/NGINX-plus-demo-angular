import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpZonesComponent } from './http-zones.component';

describe('HttpZonesComponent', () => {
  let component: HttpZonesComponent;
  let fixture: ComponentFixture<HttpZonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpZonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpZonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
