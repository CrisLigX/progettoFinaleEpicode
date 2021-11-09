import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserimentoProvinceComuniComponent } from './inserimento-province-comuni.component';

describe('InserimentoProvinceComuniComponent', () => {
  let component: InserimentoProvinceComuniComponent;
  let fixture: ComponentFixture<InserimentoProvinceComuniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserimentoProvinceComuniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InserimentoProvinceComuniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
