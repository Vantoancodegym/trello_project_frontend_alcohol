import {Component, OnInit} from '@angular/core';
import {IBoard} from '../../interface/i-board';
import {BoardService} from '../../service/boardService/board.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  board: IBoard = {
    id: 0,
    name: '',
    appUser: {
      id: 1,
      userName: '',
      email: '',
      password: '',
    }
  };

  constructor(private boardService: BoardService,
              private router: Router) {
  }

  // tslint:disable-next-line:typedef
  create() {
    this.boardService.createBoard(this.board).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  ngOnInit(): void {
  }


}
