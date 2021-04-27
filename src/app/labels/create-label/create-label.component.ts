import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ILabel} from '../../interface/label';
import {LabelService} from '../../service/labelService/label.service';
import {ICardLabel} from '../../interface/icard-label';

@Component({
  selector: 'app-create-label',
  templateUrl: './create-label.component.html',
  styleUrls: ['./create-label.component.scss']
})
export class CreateLabelComponent implements OnInit {
  @Input()
  card_id: number =0;
  label_id: any ="selected";
  labels: ILabel[] =[];
  card_label : ICardLabel ={
    card:{},
    labels:{}
  };

  constructor(private labelService: LabelService) { }

  ngOnInit(): void {
    this.getLabelSelected(this.card_id);
  }
  getLabelSelected(id: number){
    this.labelService.getListSelected(id).subscribe(labels =>{
      this.labels = labels;
    })
  }
  @Output()
  isAddLabel = new EventEmitter();
  createLabel(){
    // @ts-ignore
    this.card_label.card?.id = this.card_id;
    // @ts-ignore
    this.card_label.labels?.id= +this.label_id;
    console.log(this.card_label)
    this.labelService.addLabelToCard(this.card_label).subscribe(() =>{
      this.isAddLabel.emit(true);
      this.getLabelSelected(this.card_id);
      this.label_id ="selected";
    })

  }

}
