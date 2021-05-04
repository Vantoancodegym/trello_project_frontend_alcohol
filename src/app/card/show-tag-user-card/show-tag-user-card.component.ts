import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../../service/user/user.service';
import {IUser} from '../../interface/i-user';

@Component({
  selector: 'app-show-tag-user-card',
  templateUrl: './show-tag-user-card.component.html',
  styleUrls: ['./show-tag-user-card.component.scss']
})
export class ShowTagUserCardComponent implements OnInit {
  @Input()
  card_id: any = 0;
  users: IUser[] =[];
  constructor( private userService:UserService) { }

  ngOnInit(): void {
    this.getUsers(this.card_id);
  }
  getUsers(id: number){
    this.userService.getAppUserByCard(id).subscribe( reuslt =>{
      this.users = reuslt;
      console.log(this.users)
    })
  }
}
