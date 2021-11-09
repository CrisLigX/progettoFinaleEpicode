import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FattureDettaglioComponent } from './fatture-dettaglio.component';

describe('FattureDettaglioComponent', () => {
  let component: FattureDettaglioComponent;
  let fixture: ComponentFixture<FattureDettaglioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FattureDettaglioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FattureDettaglioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
