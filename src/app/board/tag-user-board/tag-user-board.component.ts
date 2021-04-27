import { Component, OnInit } from '@angular/core';
import {IBoard} from "../../interface/i-board";
import {Subscription} from "rxjs";
import {BoardService} from "../../service/boardService/board.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-tag-user-board',
  templateUrl: './tag-user-board.component.html',
  styleUrls: ['./tag-user-board.component.scss']
})
export class TagUserBoardComponent implements OnInit {
  constructor() {
  }
  ngOnInit(): void {
  }

}
