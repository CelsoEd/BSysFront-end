import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarBarbeariasComponent } from './listar-barbearias.component';

describe('ListarBarbeariasComponent', () => {
  let component: ListarBarbeariasComponent;
  let fixture: ComponentFixture<ListarBarbeariasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarBarbeariasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarBarbeariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
