import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from "../../service/http-service.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(private httpService: HttpServiceService) { }

  ngOnInit(): void {}

}
