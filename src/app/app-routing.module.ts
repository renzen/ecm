import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideotorialsComponent } from '../app/videotorials/videotorials.component';
import { FaqsComponent } from '../app/faqs/faqs.component';
import { ContactUsComponent } from '../app/contact-us/contact-us.component';
import { DownloadAppComponent } from '../app/download-app/download-app.component';
import { HomeComponent } from './home/home.component';
import { ApplyNewServiceComponent } from './apply-new-service/apply-new-service.component';
import { UpgradeExistingServiceComponent } from './upgrade-existing-service/upgrade-existing-service.component';
import { CheckApplicationStatusComponent } from './check-application-status/check-application-status.component';
import { ReportProblemComponent } from './report-problem/report-problem.component';
import { ReportStatusComponent } from './report-status/report-status.component';
import { BillingComponent } from './billing/billing.component';
import { AfterSalesComponent } from './after-sales/after-sales.component';
import { BillingSummaryComponent } from './billing-summary/billing-summary.component';
import { PayBillsComponent } from './pay-bills/pay-bills.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'videotorials',
    component: VideotorialsComponent,
  },
  {
    path: 'faqs',
    component: FaqsComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'download-app',
    component: DownloadAppComponent,
  },
  {
    path: 'apply-new-service',
    component: ApplyNewServiceComponent,
  },
  {
    path: 'upgrade-existing-service',
    component: UpgradeExistingServiceComponent,
  },
  {
    path: 'check-application-status',
    component: CheckApplicationStatusComponent,
  },
  {
    path: 'report-problem',
    component: ReportProblemComponent,
  },
  {
    path: 'report-status',
    component: ReportStatusComponent,
  },
  {
    path: 'billing',
    component: BillingComponent,
  },
  {
    path: 'after-sales',
    component: AfterSalesComponent,
  },
  {
    path: 'billing-summary',
    component: BillingSummaryComponent,
  },
  {
    path: 'pay-bills',
    component: PayBillsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
