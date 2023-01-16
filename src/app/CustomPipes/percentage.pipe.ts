import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage',
})
// export class PercentagePipe implements PipeTransform {
//   transform(value: any) {
//     return value * 100;
//   }
// }
export class PercentagePipe implements PipeTransform {
  transform(value: number, totalMarks: number, decimal: number) {
    console.log('Percentage Pipe Called');
    return ((value / totalMarks) * 100).toFixed(decimal);
  }
}
