import {NgModule} from '@angular/core';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RouterModule} from '@angular/router';
import {SignupComponent} from "./auth/signup/signup.component";
import {SigninComponent} from "./auth/signin/signin.component";

const appRoutes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
