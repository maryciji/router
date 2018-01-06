import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Stock} from '../stock/stock.component';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
/**
 * Created by zhailiang on 2017/6/22.
 */


/*当前组件以来注入*/
@Injectable()
export class StockResolve implements Resolve<Stock> {

  constructor(private router: Router) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Stock | Observable<Stock> | Promise<Stock> {

    let id = route.params['id'];

    if (id == 1) {
      console.log('拦截传递参数');
      return new Stock(1, 'IBM');
    } else {
      this.router.navigate(['/home']);
      return undefined;
    }

  }


}
