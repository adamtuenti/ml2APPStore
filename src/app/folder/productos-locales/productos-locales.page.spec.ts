import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductosLocalesPage } from './productos-locales.page';

describe('ProductosLocalesPage', () => {
  let component: ProductosLocalesPage;
  let fixture: ComponentFixture<ProductosLocalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosLocalesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductosLocalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
