import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {IList} from '../../interface/i-list';
import {ListService} from '../../service/listService/list.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {IBoard} from '../../interface/i-board';

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

  constructor(private listService: ListService,  private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.board_id = +paramMap.get("boardId");
      this.findListByBoardId(this.board_id);
      this.findBoardById(this.board_id);
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
  // mung write
  findBoardById(id: number){
    return this.listService.getListByBoardId(id).subscribe(result => {
      // @ts-ignore
      this.board = result;
    })
  }
  addNewList(){
// Do not add list or job with no name
//     if (this.input.trim()) {
//       // Add List
//       if (this.listIndex === undefined) {
//         this.listService.addNewList(this.input,this.board);
//         this.snackBar.open("New List was created successfully!", "Dismiss", {
//           duration: 2000,
//         });
//       }
//   //     // Add job
//   //     else {
//   //       this.listService.addNewJob(this.listIndex, this.input);
//   //
//   //       this.snackBar.open("New Job was created successfully!", "Dismiss", {
//   //         duration: 2000,
//   //       });
//   //     }
//   //
//   //     this.input = "";
//     }
  }
}
