
# Grid Component

Grid component for React

```
npm install --save library-grid-component
```

| Prop                 | Default | Values                                      |
| :------------------- |:------- | :------------------------------------------ |
| gridItems            | none    | Data object                                 |
| gridItemColour       | #000000 | HEX colour code for text                    |
| gridItemFill         | #ffffff | HEX colour code for background              |
| gridItemBorder       | false   | True or False value for item border         |
| gridItemBorderColour | none    | HEX colour code border colour               |
| gridItemAlignment    | left    | Alignment of the data (left, right, center) |

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