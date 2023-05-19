import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CachesComponent } from './caches.component';

describe('CachesComponent', () => {
  let component: CachesComponent;
  let fixture: ComponentFixture<CachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CachesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
