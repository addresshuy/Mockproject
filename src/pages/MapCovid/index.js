import React, { useState, useEffect } from "react";
import Highchart from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import _ from "lodash";

highchartsMap(Highchart);
const initOptions = {
  chart: {
    height: 500,
  },
  title: {
    text: null,
  },
  mapNavigation: {
    enabled: true,
  },
  colorAxis: {
    min: 0,
    stops: [
      [0.2, "#FFC4AA"],
      [0.4, "#FF8A66"],
      [0.6, "#FF392B"],
      [0.8, "#B71525"],
      [1, "#7A0826"],
    ],
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "bottom",
  },
  series: [
    {
      mapData: {},
      name: "Confirmed Cases",
      joinBy: ["hc-key", "key"],
    },
  ],
};

export default function Map({ mapData, countries }) {
  const [options, setOptions] = useState({});

  useEffect(() => {
    if (mapData && countries && Object.keys(mapData).length) {
      const data = mapData.features.map((feature, index) => {
        const findValue = countries.find(
          (country) => country.countryInfo.iso2 === feature.id
        );
        return {
          key: feature.properties["hc-key"],
          value: findValue?.cases || index,
        };
      });
      setOptions({
        ...initOptions,
        series: [
          {
            ...initOptions.series[0],
            mapData: mapData,
            data: data,
          },
        ],
      });
    }
  }, []);
  return (
    <div className="analytics__map">
      <HighchartsReact
        highcharts={Highchart}
        options={options}
        constructorType="mapChart"
      />
    </div>
  );
}
