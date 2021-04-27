import {Component, OnInit} from '@angular/core';
import {IBoard} from '../../interface/i-board';
import {Subscription} from 'rxjs';
import {BoardService} from '../../service/boardService/board.service';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-list-board-app-user',
  templateUrl: './list-board-app-user.component.html',
  styleUrls: ['./list-board-app-user.component.scss']
})
export class ListBoardAppUserComponent implements OnInit {
  boards: IBoard[] = [
    {
      id: 0,
      name: '23',
      appUser: {
        id: 1,
        userName: 'hiếu',
        password: '1224',
        email: 'faf',
        avatar: 'dd'
      }
    },
    {
      id: 1,
      name: 'kf',
      appUser: {
        id: 1,
        userName: 'hiếu',
        password: '1224',
        email: 'faf',
        avatar: 'dd'
      }
    }
  ] ;
  sub: Subscription;
  id = 0;

  constructor(private boardService: BoardService,
              private router: Router,
              private avt: ActivatedRoute) {
    this.sub = this.avt.paramMap.subscribe((p: ParamMap) => {
      // @ts-ignore
      this.id = +p.get('id');
      this.showAll(this.id);
    });
  }


  // tslint:disable-next-line:typedef
  showAll(id: number) {
    this.boardService.getAllBoardByAppUser(id).subscribe(boards => {
      // @ts-ignore
      this.boards = boards;
      console.log(this.boards);
    });
  }

  ngOnInit(): void {
  }

}
