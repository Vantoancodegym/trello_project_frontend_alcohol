import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {ICard} from '../../interface/i-card';
import {CardService} from '../../service/cardService/card.service';
import {Router} from '@angular/router';

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
  constructor(private modalService: BsModalService, private cardService: CardService, private router: Router) { }
  ngOnInit() {
  }
  createCard(){
    this.card.list= {
      id : this.list_id,
    }
    this.cardService.createCard(this.card).subscribe(() =>{
      // @ts-ignore
      // this.router.navigateByUrl("/board/"+this.card.list.board.id);
      // alert("ok")
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      // @ts-ignore
      this.router.navigateByUrl("/board/" + this.card.list?.board?.id);    })
  }

  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'center modal-lg' })
    );
  }

}
