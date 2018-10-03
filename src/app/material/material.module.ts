import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule, MatCardModule, MatExpansionModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatListModule,
    MatCardModule,
    MatExpansionModule
  ],
  declarations: []
})
export class MaterialModule { }
