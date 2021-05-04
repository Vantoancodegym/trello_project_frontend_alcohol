import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {ICard} from '../../interface/i-card';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {CardService} from '../../service/cardService/card.service';
import {Router} from '@angular/router';
import {ListService} from '../../service/listService/list.service';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss']
})
export class EditCardComponent implements OnInit {
  @Input()
  card_id: any = 0;
  card: ICard ={};
  // @ts-ignore
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private cardService: CardService, private router: Router) {
  }
  getCardById(id: number){
    this.cardService.findCardById(id).subscribe(card => {
      this.card = card;
    })
  }

  ngOnInit(): void {
    this.getCardById(this.card_id);
  }
  @Output()
  isUpdate = new EventEmitter();
  editCard(){
    this.cardService.editCard(this.card_id, this.card).subscribe(() =>{
      this.isUpdate.emit(true);
    });
  }
  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'center modal-lg' })
    );
  }

}
