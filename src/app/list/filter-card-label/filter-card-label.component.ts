import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {LabelService} from '../../service/labelService/label.service';
import {CardService} from '../../service/cardService/card.service';
import {ILabel} from '../../interface/label';
import {ICard} from '../../interface/i-card';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {ActivatedRoute, Router} from '@angular/router';
import {IBoard} from '../../interface/i-board';
import {BoardService} from '../../service/boardService/board.service';

@Component({
  selector: 'app-filter-card-label',
  templateUrl: './filter-card-label.component.html',
  styleUrls: ['./filter-card-label.component.scss']
})
export class FilterCardLabelComponent implements OnInit {
  listLabel: ILabel[] = [];
  listCard: ICard[] = [];
  label_id: number = 0;
  // @ts-ignore
  modalRef: BsModalRef;
  board_id: number = 0;
  board: IBoard = {};
  constructor(private modalService: BsModalService,private labelService:LabelService,
              private  cardService:CardService, private activatedRoute: ActivatedRoute,
              private boardService:BoardService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paraMap =>{
      this.board_id = Number(paraMap.get("id"));
      this.boardService.findBoarById(this.board_id).subscribe(data =>{
        this.board = data;
      })
    })
    this.getAllLabel();
  }
  getAllLabel(){
    this.labelService.getAllLabel().subscribe(data =>{
      this.listLabel = data;
    })
  }
  getAllCardByLabel(label_id:any){
    this.cardService.getCardByLabel(this.board_id,label_id).subscribe( data =>{
      this.listCard = data;
      console.log(this.listCard);
      console.log('a')
    })
  }
  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, {class: 'center modal-lg'})
    );
  }
}
