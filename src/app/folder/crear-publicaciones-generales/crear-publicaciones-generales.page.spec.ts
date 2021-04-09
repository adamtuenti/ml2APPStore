import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearPublicacionesGeneralesPage } from './crear-publicaciones-generales.page';

describe('CrearPublicacionesGeneralesPage', () => {
  let component: CrearPublicacionesGeneralesPage;
  let fixture: ComponentFixture<CrearPublicacionesGeneralesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPublicacionesGeneralesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearPublicacionesGeneralesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
