import { Component, OnInit } from '@angular/core';
import {CardService} from "../../service/cardService/card.service";
import {ICard} from "../../interface/i-card";

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss']
})
export class SearchCardComponent implements OnInit {
  input: string = "";
  input1: string = "";
  list: ICard[] = [];
  constructor(private cardService:CardService) { }

  ngOnInit(): void {
    this.cardService.showAllCard().subscribe(result =>{
      this.list = result;
    })
  }
  searchCardByContentOrTitle(){
    if(this.input == ""){
      this.ngOnInit();
    } else {
      this.list = this.list.filter(res => {
        return res.title?.toLocaleLowerCase().match(this.input.toLocaleLowerCase())
          || res.content?.toLocaleLowerCase().match(this.input.toLocaleLowerCase());
      })
    }
  }
}
