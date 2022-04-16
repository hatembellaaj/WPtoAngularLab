import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProchainessessionsComponent } from './prochainessessions.component';

describe('ProchainessessionsComponent', () => {
  let component: ProchainessessionsComponent;
  let fixture: ComponentFixture<ProchainessessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProchainessessionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProchainessessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
