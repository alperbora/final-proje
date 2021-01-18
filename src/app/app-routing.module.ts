import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './modules/oyunlar/components/oyunlar/courses.component';
import { LoginComponent } from './modules/login/login.component';
import { combineAll } from 'rxjs/operators';
import { OrdersComponent } from './modules/orders/components/orders/orders.component';
import { AdminPanelComponent } from './modules/admin/admin-panel.component';
import { LoginService } from './modules/login/services/login.service';
import { AdminService } from './modules/admin/services/admin.service';
import { ShoppingCartComponent } from './modules/shoppingCart/shopping-cart.component';
import { SuccessOrderComponent } from './modules/orders/components/success-order/success-order.component';



const routes: Routes = [
  {
    path:'',
    component:CoursesComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'orders',
    component:OrdersComponent,
    canActivate:[LoginService]
  },
  {
    path:'admin-panel',
    component:AdminPanelComponent,
    canActivate:[LoginService,AdminService]
  },
  {
    path:'shooping-cart',
    component:ShoppingCartComponent
  },
  {
    path:'success-orde/:id',
    component:SuccessOrderComponent,
    canActivate:[LoginService]
  },
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
