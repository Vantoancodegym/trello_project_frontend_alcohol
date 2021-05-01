import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {ICard} from '../../interface/i-card';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {CardService} from '../../service/cardService/card.service';
import {Router} from '@angular/router';
import {ILabel} from '../../interface/label';
import {ICardLabel} from '../../interface/icard-label';
import {LabelService} from '../../service/labelService/label.service';

@Component({
  selector: 'app-add-member-for-card',
  templateUrl: './add-member-for-card.component.html',
  styleUrls: ['./add-member-for-card.component.scss']
})
export class AddMemberForCardComponent implements OnInit {
  @Input()
  card_id: number =0;
  label_id: any ="selected";
  labels: ILabel[] =[];
  card_label : ICardLabel ={
    card:{},
    labels:{}
  };

  constructor(private labelService: LabelService) { }

  ngOnInit(): void {
    this.getLabelSelected(this.card_id);
  }
  getLabelSelected(id: number){
    this.labelService.getListSelected(id).subscribe(labels =>{
      this.labels = labels;
    })
  }
  @Output()
  isAddLabel = new EventEmitter();
  createLabel(){
    // @ts-ignore
    this.card_label.card?.id = this.card_id;
    // @ts-ignore
    this.card_label.labels?.id= +this.label_id;
    console.log(this.card_label)
    this.labelService.addLabelToCard(this.card_label).subscribe(() =>{
      this.isAddLabel.emit(true);
      this.getLabelSelected(this.card_id);
      this.label_id ="selected";
    })

  }
}
