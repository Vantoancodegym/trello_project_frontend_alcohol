import { Component, OnInit } from '@angular/core';
import {LabelService} from '../service/labelService/label.service';
import {CardService} from '../service/cardService/card.service';
import {ILabel} from '../interface/label';
import {ICard} from '../interface/i-card';

@Component({
  selector: 'app-filter-card-label',
  templateUrl: './filter-card-label.component.html',
  styleUrls: ['./filter-card-label.component.scss']
})
export class FilterCardLabelComponent implements OnInit {
  listLabel: ILabel[] = [];
  listCard: ICard[] = [];
  label_id: number = 0;
  constructor(private labelService:LabelService, private  cardService:CardService) { }

  ngOnInit(): void {
    this.getAllLabel();
  }
  getAllLabel(){
    this.labelService.getAllLabel().subscribe(data =>{
      this.listLabel = data;
    })
  }
  getAllCardByLabel(){
    this.cardService.getCardByLabel(this.label_id).subscribe( data =>{
      this.listCard = data;
    })
  }
}
