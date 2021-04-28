import {Component, OnInit} from '@angular/core';
import {IBoard} from '../../interface/i-board';
import {Subscription} from 'rxjs';
import {BoardService} from '../../service/boardService/board.service';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {AuthenService} from "../../service/authenServie/authen.service";

@Component({
  selector: 'app-list-board-app-user',
  templateUrl: './list-board-app-user.component.html',
  styleUrls: ['./list-board-app-user.component.scss']
})
export class ListBoardAppUserComponent implements OnInit {
  boards: IBoard[] = [
  ] ;
  id = 0;

  constructor(private boardService: BoardService,
              private router: Router, private authenService: AuthenService){
    this.showAll();
  }


  // tslint:disable-next-line:typedef
  showAll() {
    let id = this.authenService.currentUserValue.id;
    // @ts-ignore
    this.boardService.getAllBoardByAppUser(id).subscribe(boards => {
      // @ts-ignore
      this.boards = boards;
      console.log(this.boards);
    });
  }

  ngOnInit(): void {
  }

}
