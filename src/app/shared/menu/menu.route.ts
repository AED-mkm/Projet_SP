import {MenuComponent} from "./menu.component";
import {Route} from "@angular/router";

export const menuRoute: Route = {
  path:'',
  component: MenuComponent,
  outlet: 'menu'
};
