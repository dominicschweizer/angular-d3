import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3'
export class DeliveryMetric {
  state: string;
  stateDisplayValue: string;
  mean: number;
  stdDev: number;

  constructor(
    stateIn: any,
    stateDisplayValueIn: any,
    meanIn: any,
    stdDevIn: any
  ) {
    this.state = stateIn;
    this.stateDisplayValue = stateDisplayValueIn;
    this.mean = meanIn;
    this.stdDev = stdDevIn;
  }
}

export function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

@Component({
  selector: 'app-data-handler',
  templateUrl: './data-handler.component.html',
  styleUrls: ['./data-handler.component.css'],
})
export class DataHandlerComponent implements OnInit {
  chartData: any[] = [];

  deliveryMetrics: any = []

  constructor() {
    this.generateData()
  }

  ngOnInit(): void {}
  generateData() {
    this.chartData = [];
    this.deliveryMetrics = [];
    const meanPrepTime = randomInt(10, 11);
    const meanWaitTime = randomInt(8, 9);
    const meanTransitTime = randomInt(9, 10);

    const meanTotalTime = meanPrepTime + meanWaitTime + meanTransitTime;

    const sigmaPrepTime = randomInt(1, 1);
    const sigmaWaitTime = randomInt(2, 3);
    const sigmaTransitTime = randomInt(1, 2);

    const sigmaTotalTime = Math.floor(
      Math.sqrt(
        Math.pow(sigmaPrepTime, 2) +
          Math.pow(sigmaWaitTime, 2) +
          Math.pow(sigmaTransitTime, 2)
      )
    );

    this.deliveryMetrics.push(
      new DeliveryMetric(
        'preparing',
        'Preparation',
        meanPrepTime,
        sigmaPrepTime
      )
    );
    this.deliveryMetrics.push(
      new DeliveryMetric('ready', 'Waiting', meanWaitTime, sigmaWaitTime)
    );
    this.deliveryMetrics.push(
      new DeliveryMetric(
        'inTransit',
        'In Transit',
        meanTransitTime,
        sigmaTransitTime
      )
    );
    this.deliveryMetrics.push(
      new DeliveryMetric(
        'delivered',
        'Total delivery',
        meanTotalTime,
        sigmaTotalTime
      )
    );

    let prandomizer = d3.randomNormal(meanPrepTime, sigmaPrepTime);
    let wrandomizer = d3.randomNormal(meanWaitTime, sigmaWaitTime);
    let trandomizer = d3.randomNormal(meanTransitTime, sigmaTransitTime);

    const ptimes = [];
    const wtimes = [];
    const ttimes = [];
    const totaltimes = [];
    for (let i = 0; i < 500; i++) {
      const p = Math.floor(prandomizer());
      const w = Math.floor(wrandomizer());
      const t = Math.floor(trandomizer());
      const total = p + w + t;
      ptimes.push(p);
      wtimes.push(w);
      ttimes.push(t);
      totaltimes.push(total);
    }
    this.chartData.push(ptimes);
    this.chartData.push(wtimes);
    this.chartData.push(ttimes);
    this.chartData.push(totaltimes);
  }
}
