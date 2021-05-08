import {Component, OnInit, TemplateRef} from '@angular/core';
import {AuthenService} from '../service/authenServie/authen.service';
import {INotification} from '../interface/i-notification';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {NoticficationService} from '../service/notificationService/noticfication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  notifications: INotification[] = [];
  // @ts-ignore
  modalRef: BsModalRef;
  constructor(public authenService: AuthenService, private modalService: BsModalService, private noticficationService:NoticficationService) { }

  ngOnInit(): void {
    this.getNotification();
    this.connect();
  }
  getNotification(){
    this.noticficationService.getNotifications().subscribe(notifications =>{
      this.notifications = notifications
    })
  }
  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'center modal-lg' })
    );
  }
  clearNotification(){
    this.noticficationService.deleteNotificationByUser().subscribe(
      () =>{
        this.getNotification();
      }
    );
  }
  connect(){
    this.noticficationService._connect(this);
  }
  getConnect(){
    this.getNotification();
  }

}
