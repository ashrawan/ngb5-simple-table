import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SimpleComponent} from './home-wrapper/simple/simple.component';
import {HomeWrapperComponent} from './home-wrapper/home-wrapper.component';
import {HomePageComponent} from './home-wrapper/home-page/home-page.component';
import {CustomCssComponent} from './home-wrapper/custom-css/custom-css.component';
import {ActionTemplateComponent} from './home-wrapper/action-template/action-template.component';
import {APP_ROUTES} from './home-wrapper/home.mode';

const routes: Routes = [
  {
    path: '',
    component: HomeWrapperComponent,
    children: [
      {path: '', component: HomePageComponent},
      {path: APP_ROUTES.SIMPLE_TABLE, component: SimpleComponent},
      {path: APP_ROUTES.CUSTOM_CSS, component: CustomCssComponent},
      {path: APP_ROUTES.ACTION_TEMPLATE, component: ActionTemplateComponent},
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
