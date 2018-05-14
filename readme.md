# Power BI Dataview Transformer

It's not very easy to parse the dataview coming from Power BI Custom Visuals.

This library helps you transform the dataview object into an array of objects that is defined in your capabilities json.

For Example:
```json
{
    "dataRoles": [
        {
            "displayName": "Width Data",
            "name": "width",
            "kind": "Measure"
        },
        {
            "displayName": "Target Height Data",
            "name": "targetHeight",
            "kind": "Measure"
        },
        {
            "displayName": "Actual Height Data",
            "name": "actualHeight",
            "kind": "Measure"
        },
        {
            "displayName": "Label Name",
            "name": "name",
            "kind": "Grouping",
            "preferredTypes": [
                {
                    "text": true
                }
            ]
        }
    ],
  ...
}
```

The Transformed array will look like this

```js
[
  {name: 'One', actualHeight: 10, targetHeight: 100, width: 15},
  {name: 'One', actualHeight: 20, targetHeight: 200, width: 25},
  {name: 'One', actualHeight: 30, targetHeight: 300, width: 35},
  {name: 'One', actualHeight: 40, targetHeight: 400, width: 45}
]
```

## How to Use

To Install: `npm install --save powerbi-dataview-transformer`

1. In `pbiviz.json`, Add `"node_modules/powerbi-dataview-transformer/dist/index.js"` under `ExternalJS` array.
1. In `tsconfig.json`, Add `"node_modules/powerbi-dataview-transformer/types.d.ts"` under `files` array.
1. Then in your `visual.ts`:

```ts
interface Window {
  d3: typeof d3;
  _: typeof _;
  dataviewTransformer: typeof dataviewTransformer; // <-- this line
}

class Visual {
  ...

  type Datum = {
    name: string,
    actualHeight: number,
    targetHeight: number,
    width: number
  }

  public update(options: VisualUpdateOptions) {
      // parse data

      const dataView: DataView = options.dataViews[0]
      const transformedData = window.dataviewTransformer.categoryTransform<Datum>(dataview)
      // transformedData = [{name: 'One', width: 15, targetHeight: 100, actualHeight: 10}, ...]
  }
}
```
