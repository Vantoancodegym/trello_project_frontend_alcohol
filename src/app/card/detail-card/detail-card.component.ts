import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {ICard} from '../../interface/i-card';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {CardService} from '../../service/cardService/card.service';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class DetailCardComponent implements OnInit {
  @Input()
  card_id: any = 0;
  card: ICard = {};
  // @ts-ignore
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService, private cardService: CardService) {
  }

  getCardById(id: number) {
    this.cardService.findCardById(id).subscribe(card => {
      this.card = card;
    })
  }
  update(){
    this.getCardById(this.card_id);
  }

  ngOnInit(): void {
    this.getCardById(this.card_id);
  }

  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, {class: 'center modal-lg'})
    );
  }
}

