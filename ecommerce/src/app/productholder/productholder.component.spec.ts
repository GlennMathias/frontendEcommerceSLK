import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductholderComponent } from './productholder.component';

describe('ProductholderComponent', () => {
  let component: ProductholderComponent;
  let fixture: ComponentFixture<ProductholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
