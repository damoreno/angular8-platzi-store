import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

import {ProductsComponent} from './products/components/products/products.component';
import {ContactComponent} from './contact/contact.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {LayoutComponent} from './layout/layout.component';

import {AdminGuard} from './guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        // perimite generar la precarga de modulos mediante lazy loading
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        canActivate: [AdminGuard],
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'products/:id',
        component: ProductDetailComponent
      },
      {
        path: 'contact',
        canActivate: [AdminGuard],
        component: ContactComponent
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ]
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // realiza la precarga de todos los modulos solo
    // si el navegador está disponible
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
