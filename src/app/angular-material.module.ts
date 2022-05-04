import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [],
  imports: [],
  exports: [
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatIconModule,
        MatSelectModule,
        MatRadioModule,
        MatButtonModule,
  ]
})
export class AngularMaterailModule { }