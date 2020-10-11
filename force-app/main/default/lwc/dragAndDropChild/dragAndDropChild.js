import { api, LightningElement } from 'lwc';

export default class DragAndDropChild extends LightningElement {
    @api itemId;
    @api itemTitle;
    @api itemSubtitle;
    @api itemSequence;

    addCSS(className) {
        this.template.querySelector('[data-id="mainDiv"]').classList.add(className);
    }

    removeCSS(className) {
        this.template.querySelector('[data-id="mainDiv"]').classList.remove(className);
    }

    handleDragStart() {
        this.addCSS('slds-drop-zone');
        this.dispatchEvent(new CustomEvent('startdrag', {
            detail: {
                'id': this.itemId,
                'sequence': this.itemSequence
            }
        }));
    }

    handleDragOver(event) {
        event.preventDefault();
        this.addCSS('over');
        this.addCSS('slds-drop-zone');
    }

    handleDrop(event) {
        event.preventDefault();
        event.stopPropagation();
        this.removeCSS('over');
        this.removeCSS('slds-drop-zone');
        this.dispatchEvent(new CustomEvent('itemdrop', {
            detail: {
                'id': this.itemId,
                'sequence': this.itemSequence
            }
        }));
    }

    handleDragEnter() {
        this.addCSS('over');
        this.addCSS('slds-drop-zone');
    }

    handleDragLeave() {
        this.removeCSS('over');
        this.removeCSS('slds-drop-zone');
    }

    handleDragEnd() {
        this.removeCSS('over');
        this.removeCSS('slds-drop-zone');
    }

    handleRemoveClick() {
        this.dispatchEvent(new CustomEvent('removeitem', {
            detail: this.itemId
        }));
    }
}