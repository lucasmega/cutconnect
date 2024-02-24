import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { PageModuleModule } from './page-module/page-module.module';

import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () => import('./page-module/page-module.module').then(m => m.PageModuleModule)
  },
  {
    path: '**', 
    redirectTo: 'sign-in',
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    PageModuleModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
