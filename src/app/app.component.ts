import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public htmlCode = `<!--Info message-->
<a mdbBtn color="info" class="waves-light" (click)="showInfo()" mdbWavesEffect>Info message</a>
<!--Warning message-->
<a mdbBtn color="warning" class="waves-light" (click)="showWarning()" mdbWavesEffect>Warning message</a>
<!--Success message-->
<a mdbBtn color="success" class="waves-light" (click)="showSuccess()" mdbWavesEffect>Success message</a>
<!--Error message-->
<a mdbBtn color="danger" class="waves-light" (click)="showError()" mdbWavesEffect>Error message</a>`;

  public tsCode = `import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.html',
  styleUrls: ['./toastr.scss']
})
export class ToastrComponent {

  constructor(
    private toastr: ToastrService) { }

  public showInfo(message: string = 'Hi! I am info message.', title: string = 'Info'): void {
    this.toastr.info(message, title, { closeButton: true, timeOut: 3000 });
  }

  public showWarning(message: string = 'Hi! I am warning message.', title: string = 'Warning'): void {
    this.toastr.warning(message, title, { closeButton: true, timeOut: 3000 });
  }

  public showSuccess(message: string = 'Hi! I am success message', title: string = 'Success'): void {
    this.toastr.success(message, title, { closeButton: true, timeOut: 3000 });
  }

  public showError(message: string = 'Hi! I am error message.', title: string = 'Error'): void {
    this.toastr.error(message, title, { closeButton: true, timeOut: 3000 });
  }
}`;

  public cssCode = `@import '../colors';
@import '../variables';

.btn {
  padding: 0.375rem 0.75rem;
  text-transform: unset;
  background-color: $primary-darkgold !important;
  border-radius: $rounding-size-sm;
  color: #fff;
  margin: 0;

  .icon-btn {
    margin-right: 3px;
  }
}`;
}
