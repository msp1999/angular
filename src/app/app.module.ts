import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FirebaseModule } from './all-modules/firebase.module';
import { AuthService } from './pages/services/auth.service';
import { ProductService } from './pages/services/product.service';
import { CategoryService } from './pages/services/category.service';
import { SignInComponent } from './pages/forms/sign-in/sign-in.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductFormComponent } from './pages/forms/product-form/product-form.component';
import { CategoryFormComponent } from './pages/forms/category-form/category-form.component';
import { MaterialModule } from './all-modules/material.module';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    SignInComponent,
    ProductListComponent,
    CategoryListComponent,
    ProductFormComponent,
    CategoryFormComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    FirebaseModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  entryComponents: [ProductFormComponent],
  providers: [AuthService, ProductService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
