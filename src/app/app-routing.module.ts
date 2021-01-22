import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    //loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
	loadChildren: () => import('./start/start.module').then(m => m.StartPageModule)
  },
   
   { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'babycards', loadChildren: './babycards/babycards.module#BabycardsPageModule' },
  { path: 'start', loadChildren: './start/start.module#StartPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'vacciontable', loadChildren: './vacciontable/vacciontable.module#VacciontablePageModule' },
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
