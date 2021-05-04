import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICard} from '../../interface/i-card';
import {CardService} from '../../service/cardService/card.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {IUser} from '../../interface/i-user';
import {UserService} from '../../service/user/user.service';


// @ts-ignore
@Component({
  selector: 'app-show-card-by-list-id',
  templateUrl: './show-card-by-list-id.component.html',
  styleUrls: ['./show-card-by-list-id.component.scss']
})
export class ShowCardByListIdComponent implements OnInit {
  @Input()
  list_id: any = 0;
  card_id: any = 0;
  users: IUser[] = [];
  cards: ICard[] =[]
  constructor(private cardService: CardService, private userService: UserService) {

  }

  ngOnInit(): void {
    this.showCardsByListId(this.list_id);
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
  @Output()
  isChanged = new EventEmitter();
  changeOutput(){
    this.isChanged.emit(true)
  }
  changePositionCard(cards: ICard[]){
    for (let i = 0; i < cards.length; i++) {
      cards[i].position = i;
    }
    this.cardService.changePositionCard(cards).subscribe(() =>{
    })
  }
<<<<<<< HEAD

=======
>>>>>>> bb5b5aed835fec6f3c210259b90c41d8a578f8b5
}
