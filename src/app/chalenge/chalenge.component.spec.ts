import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChalengeComponent } from './chalenge.component';

describe('ChalengeComponent', () => {
  let component: ChalengeComponent;
  let fixture: ComponentFixture<ChalengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChalengeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChalengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
