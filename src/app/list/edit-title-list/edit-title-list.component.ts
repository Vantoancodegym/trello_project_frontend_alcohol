import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {ListService} from "../../service/listService/list.service";
import {IList} from "../../interface/i-list";
import {Router} from "@angular/router";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
@Component({
  selector: 'app-edit-title-list',
  templateUrl: './edit-title-list.component.html',
  styleUrls: ['./edit-title-list.component.scss']
})
export class EditTitleListComponent implements OnInit {
  // @ts-ignore
  @Input()
  id: number = 0;
  list: IList = {
    title : "",
    board: {
      id: 0
    }
  }
  // @ts-ignore
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService,private listService: ListService,private router: Router) { }

  ngOnInit(): void {
    this.listService.findListById(this.id).subscribe( result => {
      this.list = result;
    })
  }
  @Output()
  isUpdate = new EventEmitter();
  editTitleList(){
    this.listService.editTitleList(this.list, this.id).subscribe(() =>{
      this.isUpdate.emit(true);
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      // @ts-ignore
      this.router.navigateByUrl("/board/" + this.list?.board?.id) ;
    });
  }

}
