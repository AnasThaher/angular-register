import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {

  transform(list: any[], proparity:string): any {

    console.log("hi i am runing ");
  }

}
