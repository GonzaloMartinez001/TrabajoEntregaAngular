import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamePageComponent } from './game-page/game-page.component';
import { GamepediaaccountComponent } from './gamepedia-account/gamepedia-account.component';
import { GamepediaBrachofficesComponent } from './gamepedia-brachoffices/gamepedia-brachoffices.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'games',
    pathMatch: 'full'
  },
  {
    path: 'games',
    component: GamePageComponent
  },
  {
    path: 'account',
    component: GamepediaaccountComponent
  },
  {
    path: 'branchoffices',
    component: GamepediaBrachofficesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
