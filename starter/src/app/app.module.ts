import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { ContactComponent } from './contact/contact.component'
import { MyModalComponent } from './my-modal/my-modal.component'
import { AppComponent } from './app.component'

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, ContactComponent, MyModalComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
