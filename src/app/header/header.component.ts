import {Component, OnInit, TemplateRef} from '@angular/core';
import {AuthenService} from '../service/authenServie/authen.service';
import {INotification} from '../interface/i-notification';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  notifications: INotification[] = [];
  // @ts-ignore
  modalRef: BsModalRef;
  constructor(public authenService: AuthenService, private modalService: BsModalService) { }

  ngOnInit(): void {
  }
  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'center modal-lg' })
    );
  }

}
