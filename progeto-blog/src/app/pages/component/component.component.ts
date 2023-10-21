import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {
  @Input()
  photoCover:string = ""
  @Input()
  cardTitle:string = ""
  @Input()
  cardDescription:string = ""
  private id:string | null = "0"
  /*@Input()
  Id:string = "0"*/
  
  constructor(
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id"))

      this.setValuesToComponent(this.id)
}
  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]
    if(result){
      this.cardTitle = result.title
      this.cardDescription = result.description
      this.photoCover = result.photoCover
    }
  }
}


