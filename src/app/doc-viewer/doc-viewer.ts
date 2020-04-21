import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'doc-viewer',
  templateUrl: './doc-viewer.html',
  styleUrls: ['./doc-viewer.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DocViewerComponent  {
  @Input() ts: string;
  @Input() css: string;
  @Input() html: string;
}
