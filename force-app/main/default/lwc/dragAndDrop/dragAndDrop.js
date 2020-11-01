import { LightningElement } from 'lwc';

export default class DragAndDrop extends LightningElement {
    options = [
        {
            'id': 1,
            'title': 'Title 1',
            'subtitle': 'Subtitle 1',
            'sequence': 1,
        },
        {
            'id': 2,
            'title': 'Title 2',
            'subtitle': 'Subtitle 2',
            'sequence': 2,
        },
        {
            'id': 3,
            'title': 'Title 3',
            'subtitle': 'Subtitle 3',
            'sequence': 3,
        },
        {
            'id': 5,
            'title': 'Title 5',
            'subtitle': 'Subtitle 5',
            'sequence': 5,
        },
        {
            'id': 4,
            'title': 'Title 4',
            'subtitle': 'Subtitle 4',
            'sequence': 4,
        },
    ];

    dragSource;
    dropDestination;

    get optsize() {
        return this.options.length;
    }

    connectedCallback() {
        this.sortOptions();
    }

    handleDragStart(event) {
        this.dragSource = JSON.parse(JSON.stringify(event.detail));
    }

    handleDrop(event) {
        this.dropDestination = JSON.parse(JSON.stringify(event.detail));
        this.reorder();
    }

    sortOptions() {
        // Sort the options based on sequence number
        this.options.sort(function (a, b) {
            return a.sequence - b.sequence;
        });
    }

    resetSequence() {
        // Reset the sequence number for each item starting from 1
        let seq = 1;
        let oldOptions = this.options;
        oldOptions.forEach(element => {
            element.sequence = seq++;
        });
        this.options = [...oldOptions];
    }

    reorder() {
        // Swap the sequence numbers between the source & destination item and sort them
        let oldOptions = this.options;
        oldOptions.forEach(element => {
            if (element.id === this.dragSource.id) {
                element.sequence = parseInt(this.dropDestination.sequence);
            }
            if (element.id === this.dropDestination.id) {
                element.sequence = parseInt(this.dragSource.sequence);
            }
        });
        this.options = [...oldOptions];
        this.sortOptions();
    }

    handleRemoveItem(event) {
        // Remove an item from the list based on the id of the item clicked
        let removeId = event.detail;
        let index = this.options.findIndex(option => option.id === removeId);
        let oldOptions = this.options;
        oldOptions.splice(index, 1);
        this.options = [...oldOptions];
        this.resetSequence();
    }
}
