import {Component, OnInit} from '@angular/core';
import {IBoard} from "../../interface/i-board";
import {BoardService} from "../../service/boardService/board.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-list-board-tag-user',
  templateUrl: './list-board-tag-user.component.html',
  styleUrls: ['./list-board-tag-user.component.scss']
})
export class ListBoardTagUserComponent implements OnInit {
  boards: IBoard[] = [];
  // @ts-ignore
  sub: Subscription;
  id = 0;

  constructor(private boardService: BoardService,
              private router: Router,
              private act: ActivatedRoute) {
    this.sub = this.act.paramMap.subscribe((p: ParamMap) => {
      // @ts-ignore
      this.id = +p.get('id');
      this.findAllBoard_tagUser(this.id);
    });
  }

  // @ts-ignore
  // tslint:disable-next-line:typedef
  findAllBoard_tagUser(id: number) {
    this.boardService.getBoardTagUser(id).subscribe(boards => {
      this.boards = boards;
    });
  }

  ngOnInit(): void {
  }

}
