import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarUbicationComponent } from './buscar-ubication.component';

describe('BuscarUbicationComponent', () => {
  let component: BuscarUbicationComponent;
  let fixture: ComponentFixture<BuscarUbicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarUbicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarUbicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
