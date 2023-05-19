import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpUpstreamsComponent } from './http-upstreams.component';

describe('HttpUpstreamsComponent', () => {
  let component: HttpUpstreamsComponent;
  let fixture: ComponentFixture<HttpUpstreamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpUpstreamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpUpstreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
