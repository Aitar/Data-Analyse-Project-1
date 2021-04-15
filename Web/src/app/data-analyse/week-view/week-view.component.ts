import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.css']
})
export class WeekViewComponent implements OnInit {

  disabled = false;
  value1 = 30;
  day = 1;
  hour = 0;

  constructor() { }

  ngOnInit(): void {
  }


}
