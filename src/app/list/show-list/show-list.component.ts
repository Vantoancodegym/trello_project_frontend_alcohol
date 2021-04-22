import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {IList} from '../../interface/i-list';
import {ListService} from '../../service/listService/list.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {ICard} from '../../interface/i-card';

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

  constructor(private listService: ListService,  private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.board_id = +paramMap.get("boardId");
      this.findListByBoardId(this.board_id);
      console.log(this._lists)
      console.log(this.board_id)
    })
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


}
