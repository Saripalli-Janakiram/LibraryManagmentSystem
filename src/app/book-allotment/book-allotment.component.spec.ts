import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAllotmentComponent } from './book-allotment.component';

describe('BookAllotmentComponent', () => {
  let component: BookAllotmentComponent;
  let fixture: ComponentFixture<BookAllotmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookAllotmentComponent]
    });
    fixture = TestBed.createComponent(BookAllotmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
