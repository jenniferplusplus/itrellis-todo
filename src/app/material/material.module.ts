import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatListModule,
  MatCardModule,
  MatExpansionModule,
  MatButtonModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    BrowserAnimationsModule,
    FormsModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule
  ],
  declarations: []
})
export class MaterialModule {
}
