import { UpperCasePipe } from "@angular/common";
import { Directive, ElementRef, OnInit } from "@angular/core";
import { NgControl } from "@angular/forms";

@Directive({
  selector: "[applyPipe]"
})
export class ApplyPipeDirective implements OnInit {
  private uppercasePipe = new UpperCasePipe();
  constructor(private ngControl: NgControl, private el: ElementRef) {}

  ngOnInit() {
    this.ngControl.control.valueChanges.subscribe(value => {
      this.el.nativeElement.value = this.uppercasePipe.transform(value);
    });
  }
}
