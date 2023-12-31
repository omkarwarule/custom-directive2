import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]',
  standalone: true
})
export class CustomStyleDirective {

  constructor(private obj:ElementRef)
  {
      console.log("inside constructor");
      obj.nativeElement.style.background='yellow';
      obj.nativeElement.style.fontWeight = 'bold'; 

  }
  //public color()
  //{
    // style.background='yellow';
  //}

}
