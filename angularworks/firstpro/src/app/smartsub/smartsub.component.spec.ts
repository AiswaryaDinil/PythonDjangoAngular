import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartsubComponent } from './smartsub.component';

describe('SmartsubComponent', () => {
  let component: SmartsubComponent;
  let fixture: ComponentFixture<SmartsubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartsubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
