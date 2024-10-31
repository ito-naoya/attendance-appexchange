import { LightningElement, track, api } from "lwc";
import chartJs from "@salesforce/resourceUrl/ChartJs";
import { loadScript } from "lightning/platformResourceLoader";

export default class BarGraphSample extends LightningElement {
  @track isChartJsInitialized = false;
  chart;

  async connectedCallback() {
    console.log("chartJs path: " + chartJs)
    await Promise.all([
      loadScript(this, chartJs),
    ])
      .then(() => {
        this.isChartJsInitialized = true;
      })
      .catch((e) => console.error(e));

    if (!this.isChartJsInitialized) return;

    const config = {
      type: "bar",
      data: {
        labels: ["1月", "2月", "3月", "4月", "5月", "6月"],
        datasets: [
          {
            label: "売上",
            data: [120, 80, 97, 105, 94, 110],
            backgroundColor: "#E1BEE7"
          }
        ]
      },
      options: {
        // animations: {
        //     tension: {
        //       duration: 2000,
        //       easing: 'linear',
        //       from: 3,
        //       to: 0,
        //       loop: true
        //     }
        //   },
        plugins: {
          datalabels: {
            font: {
              size: 13
            },
            formatter: function (value, context) {
              return value.toString() + "万円";
            }
          }
        }
      }
    };

    const ctx = this.template.querySelector("canvas.chart").getContext("2d");
    this.chart = new window.Chart(ctx, config);
    // サイズ設定
    this.chart.canvas.parentNode.style.height = "100%";
    this.chart.canvas.parentNode.style.width = "100%";
  }
}