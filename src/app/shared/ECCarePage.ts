import { ApplyNewServiceService } from '../service/apply-new-service.service';


export class ecCarePage {

    returnValue: boolean = false;
    businessGroupAlpha: string = 'CBG';
    businessGroupSme: string = 'SME|SMEG';

    constructor(private service: ApplyNewServiceService) {

    }
    chkServiceId(serviceId: string) {
        
        try {
            if (serviceId == null && serviceId == '') {
                this.returnValue = false
            } else {
                this.service.svc_checkServiceId(serviceId).subscribe(res => {
                    if (res == null) {
                        this.returnValue = false;
                    }
                    if (res.IsResponseException) {
                        this.returnValue = false;
                    }
                    if (res.IsResponseError) {
                        this.returnValue = false;
                    }
                    if (!res.IsResponseSuccess) {
                        this.returnValue = false;
                    }
                    if (this.businessGroupAlpha.includes(res.BusinessGroup.toUpperCase())) {
                        this.returnValue = true;
                    }
                    if (this.businessGroupSme.includes(res.BusinessGroup.toUpperCase())) {
                        this.returnValue = true;
                    }
                })
            }
        } catch {
            this.returnValue = false;
        }

        return this.returnValue
    }

}