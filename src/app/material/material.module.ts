import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatListModule,
  MatCardModule,
  MatExpansionModule,
  MatButtonModule,
  MatInputModule,
  MatDatepickerModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule
  ],
  declarations: []
})
export class MaterialModule {
}
