/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { Preset } from '@superset-ui/core';
// import ArcChartPlugin from './layers/Arc';
// import GeoJsonChartPlugin from './layers/Geojson';
// import GridChartPlugin from './layers/Grid';
// import HexChartPlugin from './layers/Hex';
// import CustomMultiChartPlugin from './CustomMulti';
// import PathChartPlugin from './layers/Path';
// import PolygonChartPlugin from './layers/Polygon';
// import ScatterChartPlugin from './layers/Scatter';
import CustomScatterChartPlugin from './layers/CustomScatter';
// import ScreengridChartPlugin from './layers/Screengrid';

export default class CustomDeckGLChartPreset extends Preset {
  constructor() {
    super({
      name: 'deck.gl charts',
      plugins: [
        // new ArcChartPlugin().configure({ key: 'deck_custom_arc' }),
        // new GeoJsonChartPlugin().configure({ key: 'deck_custom_geojson' }),
        // new GridChartPlugin().configure({ key: 'deck_custom_grid' }),
        // new HexChartPlugin().configure({ key: 'deck_custom_hex' }),
        //  new CustomMultiChartPlugin().configure({ key: 'deck_custom_multi' }),
        // new PathChartPlugin().configure({ key: 'deck_custom_path' }),
        // new PolygonChartPlugin().configure({ key: 'deck_custom_polygon' }),
        // new ScatterChartPlugin().configure({ key: 'deck_new_scatter' }),
        new CustomScatterChartPlugin().configure({ key: 'deck_custom_scatter' }),
        // new ScreengridChartPlugin().configure({ key: 'deck_custom_screengrid' }),
      ],
    });
  }
}
