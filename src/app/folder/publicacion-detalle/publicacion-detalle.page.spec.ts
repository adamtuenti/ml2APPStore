import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PublicacionDetallePage } from './publicacion-detalle.page';

describe('PublicacionDetallePage', () => {
  let component: PublicacionDetallePage;
  let fixture: ComponentFixture<PublicacionDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicacionDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PublicacionDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
