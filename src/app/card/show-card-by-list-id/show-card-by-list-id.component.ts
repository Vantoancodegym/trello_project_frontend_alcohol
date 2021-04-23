import {Component, Input, OnInit} from '@angular/core';
import {ICard} from '../../interface/i-card';
import {CardService} from '../../service/cardService/card.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


// @ts-ignore
@Component({
  selector: 'app-show-card-by-list-id',
  templateUrl: './show-card-by-list-id.component.html',
  styleUrls: ['./show-card-by-list-id.component.scss']
})
export class ShowCardByListIdComponent implements OnInit {
  @Input()
  list_id: any = 0;
  // @Input("listId")
  // get listId(){
  //   return this.list_id;
  // }
  // set listId(value){
  //   let  v = Number(value);
  //   this.list_id = Number.isNaN(v)? 0 : v;
  // }

  cards: ICard[] =[]

  constructor(private cardService: CardService) {

  }

  ngOnInit(): void {
    this.showCardsByListId(this.list_id);
    console.log(this.list_id)
  }
  showCardsByListId(id: number){
    this.cardService.findCardsByListId(id).subscribe(result => {
      this.cards = result;
    })
  }
  drop(event: CdkDragDrop<ICard[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.changePositionCard(event.container.data);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      // @ts-ignore
      event.container.data[event.currentIndex].list.id = event.container.id;
      this.changePositionCard(event.container.data)
    }
  }
  changePositionCard(cards: ICard[]){
    for (let i = 0; i < cards.length; i++) {
      cards[i].position = i;
    }
    this.cardService.changePositionCard(cards).subscribe(() =>{
    })
  }



}
