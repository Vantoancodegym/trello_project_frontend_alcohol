import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {ICard} from '../../interface/i-card';
import {CardService} from '../../service/cardService/card.service';
import {Router} from '@angular/router';
import {ListService} from '../../service/listService/list.service';
import {NoticficationService} from '../../service/notificationService/noticfication.service';
import {IUser} from '../../interface/i-user';
import {INotification} from '../../interface/i-notification';
import {AuthenService} from '../../service/authenServie/authen.service';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss']
})
export class CreateCardComponent implements OnInit {
  @Input()
  list_id: any =0;
  card: ICard = {};
  userList: IUser[] =[];
  // @ts-ignore
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private cardService: CardService, private router: Router,
              private listService: ListService, private noticficationService: NoticficationService,
              private authenService: AuthenService) {

  }
  ngOnInit() {
    this.listService.findListById(this.list_id).subscribe(list => {
      // @ts-ignore
      this.card.list = list;
    })
  }
  @Output()
  isCreated = new EventEmitter();
  createCard() {
    this.cardService.createCard(this.card).subscribe(() => {
      // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      // this.router.onSameUrlNavigation = 'reload';
      // // @ts-ignore
      // this.router.navigateByUrl("/board/" + this.card.list?.board?.id) ;
      this.isCreated.emit(true);
    })
    this.createNotification();

  }
  createNotification(){
    // @ts-ignore
    this.noticficationService.getUsersByBoard(this.card.list.board?.id).subscribe(users => {
      this.userList = this.noticficationService.getListNoticeUser(users);
      let notification: INotification = {
        content: this.authenService.currentUserValue.username + " create new card: " + this.card.title,
        appUser: this.userList
      }
      console.log(notification)
      this.noticficationService.createNotification(notification);

    })
  }

  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'center modal-lg' })
    );
  }

}
