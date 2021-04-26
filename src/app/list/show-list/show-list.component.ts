import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {IList} from '../../interface/i-list';
import {ListService} from '../../service/listService/list.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {IBoard} from '../../interface/i-board';
import {AuthenService} from '../../service/authenServie/authen.service';
import {BoardService} from '../../service/boardService/board.service';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements OnInit {
// @ts-ignore
  sub: Subscription;
  _lists: IList[] = [];
  board_id: number =1;
  list_id: number =1;
  // @ts-ignore
  board: IBoard;
  // @ts-ignore
  @Input() placeholder: string;
  // @ts-ignore
  @Input() listIndex: number;
  input: string = "";


  constructor(private listService: ListService,  private activatedRoute: ActivatedRoute,
              public authenService: AuthenService ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.board_id = +paramMap.get("boardId");
      this.findListByBoardId(this.board_id);
      this.findBoardById(this.board_id);
    })
  }
  update(){
    this.findListByBoardId(this.board_id);
    this.findBoardById(this.board_id);
  }

  ngOnInit(): void {
  }

  findListByBoardId(id: number){
    return this.listService.getListByBoardId(id).subscribe(result =>{
      this._lists = result;
    })
  }
  drop(event: CdkDragDrop<IList[]>) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.changeListPosition(event.container.data);
  }
  changeListPosition(lists: IList[]){
    for (let i = 0; i < lists.length; i++) {
      lists[i].position = i
    }
    this.listService.editPositionList(lists).subscribe(() => {})
  }
  // mung write
  findBoardById(id: number){
    return this.listService.getBoardById(id).subscribe(result => {
      // @ts-ignore
      this.board = result;
    })
  }
}
