import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../interface/i-user";
import {IComment} from "../../interface/i-comment";
import {CommentService} from "../../service/commentService/comment.service";
import {CardService} from "../../service/cardService/card.service";
import {AuthenService} from "../../service/authenServie/authen.service";
import {ICard} from '../../interface/i-card';
import {INotification} from '../../interface/i-notification';
import {NoticficationService} from '../../service/notificationService/noticfication.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input()
  card_id: number = 0;
  content: string ="";
  appUser: IUser ={};
  comment: IComment = {};
  listComment:IComment[] = [];
  card: ICard ={};
  constructor(private commentService:CommentService,private cardService:CardService,
              private authenService:AuthenService,private noticficationService: NoticficationService) { }

  ngOnInit(): void {
    this.cardService.findCardById(this.card_id).subscribe(data=>{
      this.comment.card = data;
      this.card = data;
    })
    this.getAllComment(this.card_id);
  }
  getAllComment(id: number){
    this.commentService.getAllComment(id).subscribe(result =>{
      this.listComment = result;
      console.log(this.listComment);
    })
  }
  createComment(){
    this.commentService.createComment(this.comment).subscribe(()=>{
      console.log("tạo mới thành công");
      this.getAllComment(this.card_id);
      this.createNotification();
    })
    this.comment.content = "";
  }
  createNotification(){
    // @ts-ignore
    this.noticficationService.getUsersByBoard(this.card.list.board?.id).subscribe(users => {
      let notification: INotification = {
        content: this.authenService.currentUserValue.username + " comment on : " + this.card.title,
        appUser: users
      }
      console.log(notification)
      this.noticficationService.createNotification(notification);

    })
  }
}

