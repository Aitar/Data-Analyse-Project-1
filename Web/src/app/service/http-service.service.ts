import { Injectable } from '@angular/core';
import { serverUrl } from '../../assets/Config';
import {BehaviorSubject} from "rxjs";
import {Trip, Flow, Statistic} from "../../assets/Trip";
import {HttpClient} from "@angular/common/http";
import {map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  serverUrl: string = serverUrl;

  private _trips = new BehaviorSubject<Trip[]>([]);
  private _flows = new BehaviorSubject<Flow[]>([]);
  private _statistic = new BehaviorSubject<Statistic[]>([]);

  constructor(private http: HttpClient) { }

  get trips() {
    return this._trips.asObservable();
  }

  get flows() {
    return this._flows.asObservable();
  }

  get statistic() {
    return this._statistic.asObservable();
  }

  /**
   * 获取所有的旅途信息
   */
  getAllTrips() {
    return this.http.get<{[key: string] : Trip}>(this.serverUrl + 'all')
      .pipe(
        map(res => {
          let trips = [];
          for(let key in res) {
            if(res.hasOwnProperty(key)) {
              let trip = new Trip();
              trip.inStation = res[key].inStation;
              trip.outStation = res[key].outStation;
              trip.inTime = res[key].inTime;
              trip.outTime = res[key].outTime;
              trip.price = res[key].price;
              trips.push(trip);
            }//if
          }//for
          return trips;
        }), tap(trips => {
          this._trips.next(trips);
        })
      );
  }

  /**
   * 获取流量前十的车站的流量信息
   */
  getFlowCount() {
    return this.http.get<{[key: string] : Flow}>(this.serverUrl + 'all-flow')
      .pipe(
        map(res => {
          let flows = [];
          for(let key in res) {
            if(res.hasOwnProperty(key)) {
              let flow = new Flow();
              flow.inFlow = res[key].inFlow;
              flow.outFlow = res[key].outFlow;
              flow.station = res[key].station;
              flows.push(flow);
            }//if
          }//for
          return flows;
        }), tap(flows => {
          this._flows.next(flows);
        })
      );
  }

  /**
   * 获取统计信息，目前主要用于获取百分比信息
   * @param weekDay 需要获取百分比所在的周内日
   * @param hour 索要获取百分比数据所在的小时
   * 两个参数全填 -1，则是获取所有站点的信息
   */
  getStatistic(weekDay: number, hour: number) {
    let key;
    if(weekDay == -1 && hour == -1) {
      key = weekDay * 10 + hour;
    } else {
      key = 'all';
    }
    return this.http.get<{[key: string] : Statistic}>(this.serverUrl + 'percent/' + key)
      .pipe(
        map(res => {
          let stats = [];
          for(let key in res) {
            if(res.hasOwnProperty(key)) {
              let stat = new Statistic();
              stat.station = res[key].station;
              stat.station = res[key].percent;
              stats.push(stat);
            }
          }
          return stats;
        }), tap(stats => {
          this._statistic.next(stats);
        })
      )
  }

}
