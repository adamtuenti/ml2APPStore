import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoriasLocalesPage } from './categorias-locales.page';

describe('CategoriasLocalesPage', () => {
  let component: CategoriasLocalesPage;
  let fixture: ComponentFixture<CategoriasLocalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriasLocalesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriasLocalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
