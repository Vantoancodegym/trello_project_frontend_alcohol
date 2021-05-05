import {Component, Input, OnInit} from '@angular/core';
import {IBoard} from "../../interface/i-board";
import {Subscription} from "rxjs";
import {BoardService} from "../../service/boardService/board.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ITagUserBoard, Tag_user_board} from "../../interface/ITagUserBoard";
import {AuthenService} from "../../service/authenServie/authen.service";
import {IUser} from "../../interface/i-user";
import {subscribeOn} from "rxjs/operators";

@Component({
  selector: 'app-tag-user-board',
  templateUrl: './tag-user-board.component.html',
  styleUrls: ['./tag-user-board.component.scss']
})
export class TagUserBoardComponent implements OnInit {
  tagUserBoard: ITagUserBoard = {
    id: 0,
    board: {},
    appUser: {}
  };
  @Input()
  board_id: any = 0;
  listUser: IUser[] = [];

  constructor(private boardService: BoardService,
              private router: Router) {
    this.getListUser()
  }
  // tslint:disable-next-line:typedef
  getListUser() {
    this.boardService.showAllAppUser().subscribe(listUser =>{
      this.listUser = listUser;
      console.log(this.listUser)
    })
  }
  tagUser() {
    this.tagUserBoard.board.id = this.board_id;
    this.boardService.createTagUserBoard(this.tagUserBoard).subscribe(() => {
      for (let i = 0; i < this.listUser.length; i++) {
        if (this.tagUserBoard.appUser.id== this.listUser[i].id){
          this.listUser.splice(i, 1);
        }
      }
    });
  };
  ngOnInit(): void {
    }


}
