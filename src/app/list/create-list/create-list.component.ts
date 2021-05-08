import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {ListService} from "../../service/listService/list.service";
import {IList} from "../../interface/i-list";
import {CardService} from "../../service/cardService/card.service";
import {BoardService} from "../../service/boardService/board.service";
import {Router} from "@angular/router";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.scss']
})
export class CreateListComponent implements OnInit {
  @Input()
  board_id: any = 0;
  // @ts-ignore
  list: IList ={
    board: {
      id: 0
    }
  };
  // @ts-ignore
  modalRef: BsModalRef;
  constructor(private listService: ListService, private boardService: BoardService, private router: Router,private modalService: BsModalService) { }

  ngOnInit(): void {
  }
  @Output()
  isCreate = new EventEmitter();
  createList(){
    // @ts-ignore
    this.list.board?.id = this.board_id;
    console.log(this.list)
    this.listService.createList(this.list).subscribe( () =>{
      // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      // this.router.onSameUrlNavigation = 'reload';
      // // @ts-ignore
      // this.router.navigateByUrl("/board/" + this.list?.board?.id) ;
      this.isCreate.emit(true);
    })
  }
  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'center modal-lg' })
    );
  }
}
