import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild
} from "@angular/core";

@Component({
  selector: "app-childcomponent",
  templateUrl: "./childcomponent.component.html",
  styleUrls: ["./childcomponent.component.css"]
})
export class ChildcomponentComponent implements OnInit {
  @Input() inputText = "";
  @Output() outputEvent: EventEmitter<string> = new EventEmitter();
  @ViewChild('childMessage') msgChild: ElementRef;
  //message: string = "";

  sendMessage() {
    this.outputEvent.emit(this.msgChild.nativeElement.value);
  }

  constructor() {}

  ngOnInit() {}
}
