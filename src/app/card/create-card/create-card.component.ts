import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {ICard} from '../../interface/i-card';
import {CardService} from '../../service/cardService/card.service';
import {Router} from '@angular/router';
import {ListService} from '../../service/listService/list.service';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss']
})
export class CreateCardComponent implements OnInit {
  @Input()
  list_id: any =0;
  card: ICard = {};
  // @ts-ignore
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private cardService: CardService, private router: Router, private listService: ListService) {

  }
  ngOnInit() {
    this.listService.findListById(this.list_id).subscribe(list => {
      // @ts-ignore
      this.card.list = list;
    })
  }
  createCard(){
    this.cardService.createCard(this.card).subscribe(() =>{
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      // @ts-ignore
      this.router.navigateByUrl("/board/" + this.card.list?.board?.id) ;
    })
  }

  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'center modal-lg' })
    );
  }

}
