import { Component, OnInit,  VERSION } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  public testFormGroup: FormGroup;
  constructor(){}

  ngOnInit() {
    this.testFormGroup = new FormGroup({
      testField: new FormControl({value: null, disabled: true})
    })
  }

  fillValue() {
    this.testFormGroup.patchValue({
      testField: "Test Value"
    })
  }

  getValue() {
    console.log(this.testFormGroup.value)
  }
}
