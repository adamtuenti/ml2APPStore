import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductoLocalEditarPage } from './producto-local-editar.page';

describe('ProductoLocalEditarPage', () => {
  let component: ProductoLocalEditarPage;
  let fixture: ComponentFixture<ProductoLocalEditarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoLocalEditarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductoLocalEditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
