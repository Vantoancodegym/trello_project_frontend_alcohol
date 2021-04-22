import {Component, Input, OnInit} from '@angular/core';
import {CardService} from '../../service/cardService/card.service';
import {ICard} from '../../interface/i-card';

@Component({
  selector: 'app-show-card-by-list-id',
  templateUrl: './show-card-by-list-id.component.html',
  styleUrls: ['./show-card-by-list-id.component.scss']
})
export class ShowCardByListIdComponent implements OnInit {
  id: number =0;
  @Input('id')
  get phones(){
    return this.id;
  }
  set phones(value){
    let  v = Number(value);
    this.id = Number.isNaN(v)? 0 : v;
  }
  cards: ICard[] =[]

  constructor(private cardService: CardService) {
    this.showCardsByListId(this.id);
  }

  ngOnInit(): void {
  }
  showCardsByListId(id: number){
    this.cardService.findCardsByListId(id).subscribe(result => {
      this.cards = result;
    })

  }

}
