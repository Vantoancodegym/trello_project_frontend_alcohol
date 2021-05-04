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
  avatar: string ='';
  name: string ='';

  constructor(private boardService: BoardService,
              private router: Router,
              private authenService: AuthenService){
    this.showAll();
  }


  // tslint:disable-next-line:typedef
  showAll() {
    let id = this.authenService.currentUserValue.id;
    console.log(this.authenService.currentUserValue)

    // @ts-ignore
    this.avatar = this.authenService.currentUserValue.avatar;
    console.log(this.avatar)
    // @ts-ignore
    this.name = this.authenService.currentUserValue.username;
    console.log(this.authenService.currentUserValue.id)

    // @ts-ignore
    this.boardService.getAllBoardByAppUser(id).subscribe(boards => {
      // @ts-ignore
      this.boards = boards;
    });
  }
  findBoardById(id: number){
    return this.boardService.getBoarById(id).subscribe(result => {
      // @ts-ignore
      this.board = result;
    })
  }

  ngOnInit(): void {
  }

}
