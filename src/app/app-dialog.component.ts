import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StockQuotesService } from './app-sq.service';
import { StockSymbols } from './StockSymbols';
import { FilterPipe } from './filter.pipe'

@Component({
  selector: 'app-dialog',
  templateUrl: './app-dialog.component.html',
  styleUrls: ['./app-dialog.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})

/***************************************************************************************
  Credit: https://coryrylan.com/blog/build-a-angular-modal-dialog-with-angular-animate
* **************************************************************************************/
export class DialogComponent implements OnInit {
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  public myStockSymbols: StockSymbols[] = null;
  public searchableList: string[];
  public selectedSymbol: string = null;
  @Output() messageEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(private sqService: StockQuotesService) {
    this.searchableList = ['name', 'symbol']
  }

  ngOnInit() {
    this.sqService.getStockSymbols()
      .subscribe(
      symbols => this.myStockSymbols = symbols, //Bind to view
      err => {
        // Log errors if any
        console.log(err);
      });
  }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  onSelectedSymbol(symbol: string) {
    this.selectedSymbol = symbol;
    console.log("Symbol selected:" + symbol);
    this.messageEvent.emit(symbol);
  }

  scroll(el) {
    el.scrollIntoView();
  }
}
