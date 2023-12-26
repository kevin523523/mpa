import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import{FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 
import { NavbarComponent } from './shared/navbar/navbar.component'
import { FooterComponent } from './shared/footer/footer.component'
import { IndexComponent } from './pages/index/index.component'
import { AboutComponent } from './pages/about/about.component'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes'; 

@NgModule({
  declarations: [AppComponent,FilterPipe,IndexComponent,NavbarComponent,FooterComponent],
  imports: [
    CommonModule,FormsModule,BrowserModule,RouterModule,HttpClientModule,RouterModule.forRoot(routes)
  ],
  bootstrap:[AppComponent]
})
export class AppModule { }
