import { Component, Input } from '@angular/core'
import { ContactComponent } from '../contact/contact.component';

@Component({
    selector: 'my-modal',
    templateUrl: 'my-modal.component.html',
    styleUrls: ['../app.component.css']
})
export class MyModalComponent{
    @Input()
    address: ContactComponent
}