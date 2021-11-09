import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FattureClienteComponent } from './fatture-cliente.component';

describe('FattureClienteComponent', () => {
  let component: FattureClienteComponent;
  let fixture: ComponentFixture<FattureClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FattureClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FattureClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
