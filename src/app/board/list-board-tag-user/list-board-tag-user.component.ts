
import { Component, OnInit } from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {IBoard} from "../../interface/i-board";
import {BoardService} from "../../service/boardService/board.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {AuthenService} from "../../service/authenServie/authen.service";

@Component({
  selector: 'app-list-board-tag-user',
  templateUrl: './list-board-tag-user.component.html',
  styleUrls: ['./list-board-tag-user.component.scss']
})
export class ListBoardTagUserComponent implements OnInit {
  boards: IBoard[] = [
  ];
  id = 0;

  constructor(private boardService: BoardService,
              private router: Router,
              private authenService: AuthenService) {
  }
  findAllBoard_tagUser() {
    let id = this.authenService.currentUserValue.id;
    if (id != null) {
      this.boardService.getBoardTagUser(id).subscribe(boards => {
        this.boards = boards;
      });
    }
  }

  ngOnInit(): void {
    this.findAllBoard_tagUser();
  }

}
