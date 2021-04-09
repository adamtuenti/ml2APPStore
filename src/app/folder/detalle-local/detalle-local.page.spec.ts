import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalleLocalPage } from './detalle-local.page';

describe('DetalleLocalPage', () => {
  let component: DetalleLocalPage;
  let fixture: ComponentFixture<DetalleLocalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleLocalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleLocalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
