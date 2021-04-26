import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {ICard} from '../../interface/i-card';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {CardService} from '../../service/cardService/card.service';
import {Observable} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {IMediaFile} from '../../interface/media-file';
import {MediaFileService} from '../../service/mediaFile/media-file.service';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class DetailCardComponent implements OnInit {
  @Input()
  card_id: any = 0;
  card: ICard = {};
  // @ts-ignore
  modalRef: BsModalRef;
  url: string = "";
  // @ts-ignore
  selectedFile: File = null;
  // @ts-ignore
  downloadURL: Observable<string>;
  // @ts-ignore
  mediaFiles: IMediaFile[];

  constructor(private modalService: BsModalService, private cardService: CardService,
              private storage: AngularFireStorage, private mediaFileService: MediaFileService){
  }

  getCardById(id: number) {
    this.cardService.findCardById(id).subscribe(card => {
      this.card = card;
    })
  }
  getMediaFiles(id: number){
    this.mediaFileService.getMediaFilesByCardId(id).subscribe(result =>{
      this.mediaFiles = result;
    })
  }
  update(){
    this.getCardById(this.card_id);
    this.getMediaFiles(this.card_id)
  }

  ngOnInit(): void {
    this.getCardById(this.card_id);
    this.getMediaFiles(this.card_id);
  }

  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, {class: 'center modal-lg'})
    );
  }
  onFileSelected(event: any) {
    let n = Date.now();
    const file = event.target.files[0];
    const filePath = `trelloFIle/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.url = url;
              this.createMediaFile();
            }
          });
        })
      ).subscribe(url => {
      if (url) {
        console.log("Upload success");
      }
    });
  }
  createMediaFile(){
    let mediaFile: IMediaFile = {
      link: this.url,
      card: this.card
    }
    this.mediaFileService.createMediaFile(mediaFile).subscribe(() => {
      this.update()
    });
  }
}

