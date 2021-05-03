import { Component, OnInit } from '@angular/core';
import {LabelService} from '../service/labelService/label.service';
import {CardService} from '../service/cardService/card.service';
import {ILabel} from '../interface/label';

@Component({
  selector: 'app-filter-card-label',
  templateUrl: './filter-card-label.component.html',
  styleUrls: ['./filter-card-label.component.scss']
})
export class FilterCardLabelComponent implements OnInit {
  listLabel: ILabel[] = [];
  labelSelected: number = 0;
  constructor(private labelService:LabelService, private  cardService:CardService) { }

  ngOnInit(): void {
    this.getAllLabel();
  }
  getAllLabel(){
    this.labelService.getAllLabel().subscribe(data =>{
      this.listLabel = data;
    })
  }

}
