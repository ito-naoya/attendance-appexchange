import { LightningElement, api } from 'lwc';
import skillsUrl from "@salesforce/resourceUrl/skills"


export default class SkillSection extends LightningElement {

    @api skillName1;
    @api skillBarValue1;
    @api skillName2;
    @api skillBarValue2;
    @api skillName3;
    @api skillBarValue3;
    @api skillName4;
    @api skillBarValue4;

    skillImage = skillsUrl;
}