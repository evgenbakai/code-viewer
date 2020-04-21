import { NgModule } from '@angular/core';
import { DocViewerComponent } from './doc-viewer';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

export function getHighlightLanguages() {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    css: () => import('highlight.js/lib/languages/scss'),
    xml: () => import('highlight.js/lib/languages/xml')
  };
}

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    HighlightModule,
  ],
  providers: [
    // CopierService,
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        highlight: 'all',
        languages: getHighlightLanguages(),
        lineNumbers: true,
      }
    }
  ],
  declarations: [DocViewerComponent],
  exports: [DocViewerComponent],
})
export class DocViewerModule { }
