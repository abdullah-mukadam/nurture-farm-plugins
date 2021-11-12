## @nurture-farm-plugins/preset-chart-custom-deckgl

[![Version](https://img.shields.io/npm/v/@superset-ui/legacy-preset-chart-deckgl.svg?style=flat-square)](https://img.shields.io/npm/v/@superset-ui/legacy-preset-chart-deckgl.svg?style=flat-square)
[![David (path)](https://img.shields.io/david/apache-superset/superset-ui-plugins.svg?path=packages%2Fsuperset-ui-legacy-preset-chart-deckgl&style=flat-square)](https://david-dm.org/apache-superset/superset-ui-plugins?path=packages/superset-ui-legacy-preset-chart-deckgl)

This plugin provides Custom `deck.gl` for Superset.

### Usage

Import the preset and register. This will register custom chart plugins under `deck.gl`.

```js
import { DeckGLChartPreset } from '@nurture-farm-plugins/preset-chart-custom-deckgl';

new DeckGLChartPreset().register();
```

or register charts one by one. Configure `key`, which can be any `string`, and register the plugin.
This `key` will be used to lookup this chart throughout the app.

```js
import { CustomScatterChartPlugin } from '@nurture-farm-plugins/preset-chart-custom-deckgl';

new CustomScatterChartPlugin().configure({ key: 'deck_custom_scatter' }).register();
```

Then use it via `SuperChart`. See
[storybook](https://apache-superset.github.io/superset-ui-plugins-deckgl) for more details.

```js
<SuperChart
  chartType="deck_custom_scatter"
  width={600}
  height={600}
  formData={...}
  queriesData={[{
    data: {...},
  }]}
/>
```
