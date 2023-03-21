import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeOneComponent } from './edite-one.component';

describe('EditeOneComponent', () => {
  let component: EditeOneComponent;
  let fixture: ComponentFixture<EditeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
