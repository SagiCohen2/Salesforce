import { LightningElement, api } from 'lwc';
import { FlowNavigationFinishEvent, FlowNavigationNextEvent } from 'lightning/flowSupport';

export default class AutoFinishFlow extends LightningElement {

    @api message = '!איש קשר נוצר בהצלחה ✅';
    @api delaySeconds = 2;
    @api availableActions = [];

    connectedCallback() {
        var self = this;
        setTimeout(function() {
            if (self.availableActions.find(action => action === 'FINISH')) {
                self.dispatchEvent(new FlowNavigationFinishEvent());
            } else if (self.availableActions.find(action => action === 'NEXT')) {
                self.dispatchEvent(new FlowNavigationNextEvent());
            }
        }, self.delaySeconds * 1000);
    }
}
