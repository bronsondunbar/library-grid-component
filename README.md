
# Grid Component

Grid component for React

| Prop                 | Default | Values                                                                   |
| :------------------- |:------- | :----------------------------------------------------------------------- |
| gridItems            | none    | Object of data                                                           |
| gridItemColour       | #000000 | Any HEX colour code for the text colour                                  |
| gridItemFill         | #ffffff | Any HEX colour code for the background colour                            |
| gridItemBorder       | false   | True or False value for displaying a border around each item in the grid |
| gridItemBorderColour | none    | Any HEX colour code for the border colour                                |
| gridItemAlignment    | left    | Alignment of the data in each item (left, right, center)                 |

```
const gridData = [
  { data: 'Item' },
  { data: 'Item' },
  { data: 'Item' }
]

<GridComponent
  gridItems={gridData}
  gridItemColour="#ffffff"
  gridItemFill="#2bbde0"
  gridItemBorder={true}
  gridItemBorderColour="#2e3c54"
  gridItemAlignment="center" />
 ```