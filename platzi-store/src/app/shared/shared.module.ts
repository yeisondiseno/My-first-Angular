import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './directive/highlight/highlight.directive';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ExponentialPipe,
    HighlightDirective
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ExponentialPipe,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class SharedModule { }
