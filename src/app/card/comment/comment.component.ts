import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../interface/i-user";
import {IComment} from "../../interface/i-comment";
import {CommentService} from "../../service/commentService/comment.service";
import {CardService} from "../../service/cardService/card.service";
import {AuthenService} from "../../service/authenServie/authen.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input()
  card_id: number = 0;
  content: string ="";
  test: boolean = false;
  appUser: IUser ={};
  comment: IComment = {};
  listComment:IComment[] = [];
  constructor(private commentService:CommentService,private cardService:CardService,
              private authenService:AuthenService) { }

  ngOnInit(): void {
    this.cardService.findCardById(this.card_id).subscribe(data=>{
      this.comment.card = data;
    })
    this.commentService.getAllComment(this.card_id).subscribe(result =>{
      this.listComment = result;
      console.log(this.listComment);
    })
    if(this.listComment != []){
      this.test = true;
    }
  }
  createComment(){
    this.commentService.createComment(this.comment).subscribe(()=>{
      console.log("tạo mới thành công");
    })
    this.comment.content = "";
  }
}

