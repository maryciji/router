import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
/**
 * Created by zhailiang on 2017/6/22.
 */
export class PermissionGuard implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    var hasPermission: boolean = Math.random() < 0.5;

    if (!hasPermission) {
      console.log('用户无权访问此股票详情');
    }

    return hasPermission;
  }

}
