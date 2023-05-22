import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

//custom interface to loosely couple the guard with the underlying component
export interface CanComponentDeactivate {

    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class WarnUserGuard implements CanDeactivate<CanComponentDeactivate> {
 
    canDeactivate(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return component.canDeactivate();
    }
    
}