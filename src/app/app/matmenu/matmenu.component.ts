import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
// import{ Const} from '../../models/matmenu.model';

@Component({
  selector: 'app-matmenu',
  templateUrl: './matmenu.component.html',
  styleUrls: ['./matmenu.component.css'],
})
export class MatmenuComponent implements OnInit {
  // @Input() const: Const;

  @Input() menuData: any[] = [];
  @Output() onMenuClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    console.log(this.menuData);
  }

  /*
  @created: Dhanashri Abhang
  @updated: Dhanashri Abhang
  @param event: menu clicked event
  @description: Emit event when menu is clicked.
  
 */

  showMainList(event: any, data: any, temp: any) {
    console.log('button is clicked');
    if (event) {
      this.onMenuClicked.emit(data);
      // this.onMenuClicked.emit(temp);
      console.log(temp);
      // console.log(data.name);
      // console.log(data.value);
    }
  }
}
