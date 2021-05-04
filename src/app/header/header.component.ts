import { Component, OnInit } from '@angular/core';
import {AuthenService} from '../service/authenServie/authen.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public authenService: AuthenService) { }

  ngOnInit(): void {
  }

}
