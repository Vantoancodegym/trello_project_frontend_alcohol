import {Component, OnInit} from '@angular/core';
import {IBoard} from '../../interface/i-board';
import {BoardService} from '../../service/boardService/board.service';
import {AuthenService} from '../../service/authenServie/authen.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  boards: IBoard[] = [];

  constructor(private boardService: BoardService, public authenService:AuthenService) {
    this.showAll();
  }

  // @ts-ignore
  showAll(): Board[] {
    this.boardService.showALl().subscribe(boards => {
      this.boards = boards;
      console.log(this.boards);
    });
  }
  ngOnInit(): void {
  }

}
