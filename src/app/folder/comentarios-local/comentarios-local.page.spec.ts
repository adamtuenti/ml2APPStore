import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComentariosLocalPage } from './comentarios-local.page';

describe('ComentariosLocalPage', () => {
  let component: ComentariosLocalPage;
  let fixture: ComponentFixture<ComentariosLocalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentariosLocalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComentariosLocalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
