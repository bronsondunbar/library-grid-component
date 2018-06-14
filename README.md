
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
			gridItems={data}
			gridItemMinWidth="100"
			gridItemLayout="1x1"
			gridItemColour="#262626"
			gridItemFill="#ffffff"
			gridItemShadow={true}
			gridItemBorder={false}
			gridItemBorderRadius="5"
			gridItemAlignment="center" />
	)
}

```

| Prop                 | Values                                  |
| :------------------- | :-------------------------------------- |
| gridItems            | Object                                  |
| gridItemMinWidth     | Min width for each item                 |
| gridItemLayout       | 1x1, 2x1, 3x1, 4x1                      |
| gridItemColour       | HEX colour code                         |
| gridItemFill         | HEX colour code                         |
| gridItemShadow       | true or false                           |
| gridItemBorder       | true or false                           |
| gridItemBorderColour | HEX colour code                         |
| gridItemBorderRadius | Pixels                                  |
| gridItemAlignment    | Alignment of data (left, right, center) |