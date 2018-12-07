import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeColor'
})
export class ChangeColorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value > 5){
      return 'green';
    }
    return 'red';
  }

}
