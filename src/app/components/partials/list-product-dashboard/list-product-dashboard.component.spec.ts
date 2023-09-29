import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductDashboardComponent } from './list-product-dashboard.component';

describe('ListProductDashboardComponent', () => {
  let component: ListProductDashboardComponent;
  let fixture: ComponentFixture<ListProductDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListProductDashboardComponent]
    });
    fixture = TestBed.createComponent(ListProductDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
