import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {UserService} from '../../service/user/user.service';
import {IUser} from '../../interface/i-user';
import {ICardUser} from '../../interface/icard-User';
import {NoticficationService} from '../../service/notificationService/noticfication.service';
import {AuthenService} from '../../service/authenServie/authen.service';
import {INotification} from '../../interface/i-notification';
import {CardService} from '../../service/cardService/card.service';
import {ICard} from '../../interface/i-card';

@Component({
  selector: 'app-add-member-for-card',
  templateUrl: './add-member-for-card.component.html',
  styleUrls: ['./add-member-for-card.component.scss']
})
export class AddMemberForCardComponent implements OnInit {
  @Input()
  card_id: number =0;
  appUser_id: any ="selected";
  users: IUser[] =[];
  card_user : ICardUser ={
    card:{},
    appUser:{}
  };
  card: ICard ={};

  constructor(private userService : UserService, private noticficationService: NoticficationService,
              private authenService: AuthenService, private cardService: CardService) { }

  ngOnInit(): void {
    this.getAppUserSelected(this.card_id);
    this.getCardById(this.card_id);
  }
  getAppUserSelected(id: number){
    this.userService.getListSelected(id).subscribe(users =>{
      this.users = users;
    })
  }
  getCardById(id: number) {
    this.cardService.findCardById(id).subscribe(card => {
      this.card = card;
    })
  }
  @Output()
  isAddUser = new EventEmitter();
  createAppUser(){
    // @ts-ignore
    this.card_user.card?.id = this.card_id;
    // @ts-ignore
    this.card_user.appUser?.id= +this.appUser_id;
    this.createNotification();
    console.log(this.card_user)
    this.userService.addAppUserToCard(this.card_user).subscribe(() =>{
      this.isAddUser.emit(true);
      this.getAppUserSelected(this.card_id);
      this.appUser_id ="selected";
    })
  }
  createNotification(){
      // @ts-ignore
        let notification: INotification = {
          content: this.authenService.currentUserValue.username + " tag you to be member of " + this.card.title ,
          appUser: [{
            id: this.appUser_id
          }]
        }
        console.log(notification)
        this.noticficationService.createNotification(notification);
    }
}
