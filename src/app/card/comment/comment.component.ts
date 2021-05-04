import { Component, OnInit } from '@angular/core';
import {CommentService} from '../../service/commentService/comment.service';
import {IComment} from '../../interface/i-comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  comment: IComment = {};
  constructor(private commentService:CommentService) { }

  ngOnInit(): void {
  }
  createComment(){
    this.commentService.createComment(this.comment).subscribe(()=>{
      console.log("tạo mới thành công");
    })
  }

}
