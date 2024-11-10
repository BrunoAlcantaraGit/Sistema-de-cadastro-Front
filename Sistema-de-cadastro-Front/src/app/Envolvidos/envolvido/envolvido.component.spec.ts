import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvolvidoComponent } from './envolvido.component';

describe('EnvolvidoComponent', () => {
  let component: EnvolvidoComponent;
  let fixture: ComponentFixture<EnvolvidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EnvolvidoComponent]
    });
    fixture = TestBed.createComponent(EnvolvidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
