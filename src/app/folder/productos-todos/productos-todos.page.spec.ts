import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductosTodosPage } from './productos-todos.page';

describe('ProductosTodosPage', () => {
  let component: ProductosTodosPage;
  let fixture: ComponentFixture<ProductosTodosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosTodosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductosTodosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
