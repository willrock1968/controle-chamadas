// shared.module.ts
import { NgModule } from '@angular/core';
import { BrDateFormatPipe } from '../pipes/date-format.pipe';

@NgModule({
  declarations: [BrDateFormatPipe],
  exports: [BrDateFormatPipe],
})
export class SharedModule {}