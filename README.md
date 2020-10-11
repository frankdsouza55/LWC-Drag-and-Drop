# LWC-Drag-and-Drop
This is a generic & customizable component built using Salesforce [Lightning Web Components](https://developer.salesforce.com/docs/component-library/documentation/en/lwc) and [SLDS](https://www.lightningdesignsystem.com/) style which allows the user to reorder a list of items in the desired sequence.

## Demo
[![YouTube video demo](http://img.youtube.com/vi/6Usg_YlD9yE/0.jpg)](https://youtu.be/6Usg_YlD9yE)

## Installation
Download and upload `dragAndDrop` & `dragAndDropChild` lightning web components to your salesforce org. Add the `dragAndDrop` to any app page.

## Usage
The `dragAndDrop` component works on a list of options with each option having two required fields `id` and `sequence`.
```javascript
options = [
        {
            'id': 1,
            'title': 'Title 1',
            'subtitle': 'Subtitle 1',
            'sequence': 1,
        },
    ];
```
Once an item is reordered, its sequence is updated based on the new location in the list.
The `id` and `sequence` mapping can later be used to store the order of the options.
