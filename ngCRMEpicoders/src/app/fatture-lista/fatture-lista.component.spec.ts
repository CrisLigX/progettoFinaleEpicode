import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FattureListaComponent } from './fatture-lista.component';

describe('FattureListaComponent', () => {
  let component: FattureListaComponent;
  let fixture: ComponentFixture<FattureListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FattureListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FattureListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
