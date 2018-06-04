
# Grid Component

Grid component for React

Install and save component as a dependency

```

npm install --save library-grid-component

```

Import component into your app

```

import Grid from 'library-grid-component'

```

Create an array of objects with the key being data

```

const gridData = [
	{ data: 'Item' },
	{ data: 'Item' },
	{ data: 'Item' }
]

```

Render the component with the object array we created as well as any other props that are needed

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

| Prop                 | Values                                  |
| :------------------- | :-------------------------------------- |
| gridItems            | Object                                  |
| gridItemColour       | HEX colour code                         |
| gridItemFill         | HEX colour code                         |
| gridItemBorder       | true or false                           |
| gridItemBorderColour | HEX colour code                         |
| gridItemAlignment    | Alignment of data (left, right, center) |