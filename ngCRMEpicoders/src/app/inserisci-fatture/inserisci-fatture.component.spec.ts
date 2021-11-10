import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserisciFattureComponent } from './inserisci-fatture.component';

describe('InserisciFattureComponent', () => {
  let component: InserisciFattureComponent;
  let fixture: ComponentFixture<InserisciFattureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserisciFattureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InserisciFattureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
