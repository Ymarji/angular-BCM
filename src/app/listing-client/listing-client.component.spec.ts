import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingClientComponent } from './listing-client.component';

describe('ListingClientComponent', () => {
  let component: ListingClientComponent;
  let fixture: ComponentFixture<ListingClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
