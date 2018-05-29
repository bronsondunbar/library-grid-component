
# Grid Component

Grid component for React

```
npm install --save library-grid-component
```

| Prop                 | Values                                  |
| :------------------- | :-------------------------------------- |
| gridItems            | Object                                  |
| gridItemColour       | HEX colour code                         |
| gridItemFill         | HEX colour code                         |
| gridItemBorder       | true or false                           |
| gridItemBorderColour | HEX colour code                         |
| gridItemAlignment    | Alignment of data (left, right, center) |

```
render () {
	const gridData = [
		{ data: 'Item' },
		{ data: 'Item' },
		{ data: 'Item' }
	]

	return (
		<GridComponent
			gridItems={gridData}
			gridItemColour="#ffffff"
			gridItemFill="#2bbde0"
			gridItemBorder={true}
			gridItemBorderColour="#2e3c54"
			gridItemAlignment="center" />
	)
}
 ```