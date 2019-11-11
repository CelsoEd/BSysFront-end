import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFreelancerComponent } from './listar-freelancer.component';

describe('ListarFreelancerComponent', () => {
  let component: ListarFreelancerComponent;
  let fixture: ComponentFixture<ListarFreelancerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarFreelancerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
