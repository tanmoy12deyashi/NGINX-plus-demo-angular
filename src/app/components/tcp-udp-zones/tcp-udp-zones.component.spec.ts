import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcpUdpZonesComponent } from './tcp-udp-zones.component';

describe('TcpUdpZonesComponent', () => {
  let component: TcpUdpZonesComponent;
  let fixture: ComponentFixture<TcpUdpZonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcpUdpZonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcpUdpZonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
