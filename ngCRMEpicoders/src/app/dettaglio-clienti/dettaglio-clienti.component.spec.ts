import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioClientiComponent } from './dettaglio-clienti.component';

describe('DettaglioClientiComponent', () => {
  let component: DettaglioClientiComponent;
  let fixture: ComponentFixture<DettaglioClientiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettaglioClientiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioClientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
