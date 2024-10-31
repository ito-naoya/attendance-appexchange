import { LightningElement } from 'lwc';
import projectImage2Url from "@salesforce/resourceUrl/project2"
import heroImage2Url from "@salesforce/resourceUrl/hero2"
import certificationImage2Url from "@salesforce/resourceUrl/cerification"
import { NavigationMixin } from "lightning/navigation";


export default class QuickLinks extends NavigationMixin(LightningElement) {

    data = [
        {
            id:1,
            image: projectImage2Url,
            text: "Projects",
        },
        {
            id:2,
            image: heroImage2Url,
            text: "Skills",
        },
        {
            id:3,
            image: certificationImage2Url,
            text: "Certifications",
        }
    ]

    handleClick(e){
        let selectedCard = e.currentTarget.dataset.id;
        if(selectedCard == 1){
            this.navigateToPages("project__c")
        }else if(selectedCard == 2){
            this.navigateToPages("skill__c")
        }else{
            this.navigateToPages("certification__c")
        }
    }

    navigateToPages(pageApiName){
        this[NavigationMixin.Navigate]({
            type:"comm__namedPage",
            attributes:{
                name:pageApiName
            }
        })
    }
}