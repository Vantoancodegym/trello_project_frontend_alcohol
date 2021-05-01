import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {UserService} from '../../service/user/user.service';
import {IUser} from '../../interface/i-user';
import {ICardUser} from '../../interface/icard-User';

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

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.getAppUserSelected(this.card_id);
  }
  getAppUserSelected(id: number){
    this.userService.getListSelected(id).subscribe(users =>{
      this.users = users;
    })
  }
  @Output()
  isAddUser = new EventEmitter();
  createAppUser(){
    // @ts-ignore
    this.card_user.card?.id = this.card_id;
    // @ts-ignore
    this.card_user.appUser?.id= +this.appUser_id;
    console.log(this.card_user)
    this.userService.addAppUserToCard(this.card_user).subscribe(() =>{
      this.isAddUser.emit(true);
      this.getAppUserSelected(this.card_id);
      this.appUser_id ="selected";
    })

  }
}
