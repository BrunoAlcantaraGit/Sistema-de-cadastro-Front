import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvolvidoUpdateComponent } from './envolvido-update.component';

describe('EnvolvidoUpdateComponent', () => {
  let component: EnvolvidoUpdateComponent;
  let fixture: ComponentFixture<EnvolvidoUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnvolvidoUpdateComponent]
    });
    fixture = TestBed.createComponent(EnvolvidoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
