import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductHomeComponent } from './list-product-home.component';

describe('ListProductHomeComponent', () => {
  let component: ListProductHomeComponent;
  let fixture: ComponentFixture<ListProductHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListProductHomeComponent]
    });
    fixture = TestBed.createComponent(ListProductHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
