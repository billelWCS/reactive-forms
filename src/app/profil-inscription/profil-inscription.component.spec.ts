import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilInscriptionComponent } from './profil-inscription.component';

describe('ProfilInscriptionComponent', () => {
  let component: ProfilInscriptionComponent;
  let fixture: ComponentFixture<ProfilInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilInscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
