import {Component, Input, OnInit} from '@angular/core';
import {ILabel} from '../../interface/label';
import {LabelService} from '../../service/labelService/label.service';

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

  constructor(private labelService: LabelService) { }

  ngOnInit(): void {
    this.getLabelSelected(this.card_id);
  }
  getLabelSelected(id: number){
    this.labelService.getListSelected(id).subscribe(labels =>{
      this.labels = labels;
    })
  }
  createLabel(){
    console.log(this.label_id)
  }

}
