import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VideotorialsComponent } from './videotorials/videotorials.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DownloadAppComponent } from './download-app/download-app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { GetInTouchComponent } from './shared/get-in-touch/get-in-touch.component';
import { TopFaqsComponent } from './shared/top-faqs/top-faqs.component';
import { RelatedCustomercareComponent } from './shared/related-customercare/related-customercare.component';
import { EccmMsgComponent } from './shared/eccm-msg/eccm-msg.component';
//import { ApplyNewServiceComponent } from './apply-new-service/apply-new-service.component';
import { UpgradeExistingServiceComponent } from './upgrade-existing-service/upgrade-existing-service.component';
import { CheckApplicationStatusComponent } from './check-application-status/check-application-status.component';
import { ReportProblemComponent } from './report-problem/report-problem.component';
import { ReportStatusComponent } from './report-status/report-status.component';
import { BillingComponent } from './billing/billing.component';
import { AfterSalesComponent } from './after-sales/after-sales.component';
import { BillingSummaryComponent } from './billing-summary/billing-summary.component';
import { PayBillsComponent } from './pay-bills/pay-bills.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideotorialsComponent,
    FaqsComponent,
    ContactUsComponent,
    DownloadAppComponent,
    HeaderComponent,
    FooterComponent,
    GetInTouchComponent,
    TopFaqsComponent,
    RelatedCustomercareComponent,
    EccmMsgComponent,
    //ApplyNewServiceComponent,
    UpgradeExistingServiceComponent,
    CheckApplicationStatusComponent,
    ReportProblemComponent,
    ReportStatusComponent,
    BillingComponent,
    AfterSalesComponent,
    BillingSummaryComponent,
    PayBillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
