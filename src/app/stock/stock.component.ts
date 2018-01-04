import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  private stockId: number;
  private isPro: boolean;
  private num: string;
  private foucs: boolean = false;

  constructor(private  routeInfo: ActivatedRoute) {
  }

  ngOnInit() {
    /*参数订阅*/
    this.routeInfo.params.subscribe((params: Params) => this.stockId = params['id']);
    this.isPro = this.routeInfo.snapshot.data[0]['isPro'];
    this.num = this.routeInfo.snapshot.data[0]['num'];
    /*1    快照参数传递*/
    /*this.stockId = this.routeInfo.snapshot.queryParams['id'];*/
    /*2    快照参数传递*/
    /*this.stockId = this.routeInfo.snapshot.params['id'];*/
  }

  isFocus() {
    return this.foucs;
  }

}
