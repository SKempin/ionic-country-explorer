import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

// import { MapPage } from "../map/map";
import { Chart } from "chart.js";

import { UnsplashProvider } from "../../providers/unsplash/unsplash";
import { OpenWeatherProvider } from "../../providers/open-weather/open-weather";
import { NewsProvider } from "../../providers/news/news";
import { OpenUrlProvider } from "../../providers/open-url/open-url";
import { SocialShareProvider } from "../../providers/social-share/social-share";
import { AppVersion } from "@ionic-native/app-version";

// declare let google: any;
// let markers = [];

@IonicPage()
@Component({
  selector: "page-details",
  templateUrl: "details.html",
  providers: [OpenUrlProvider, SocialShareProvider]
})
export class DetailsPage {
  country: any;
  photo: any;
  image: string;
  location: string;
  weather: any;
  topNewsHeadlines: any;
  articlesWithImages: any;
  temperaturesForecast: number[];

  @ViewChild("barCanvas") barCanvas;

  barChart: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public unsplashProvider: UnsplashProvider,
    public openWeatherProvider: OpenWeatherProvider,
    public newsProvider: NewsProvider,
    public openUrlProvider: OpenUrlProvider,
    public socialShareProvider: SocialShareProvider,
    private appVersion: AppVersion
  ) {
    this.country = this.navParams.data;
    this.temperaturesForecast = [];

    this.getWeather();
    this.getNews();
  }

  openURL(url: string, label: string) {
    this.openUrlProvider.openPage(url, label);
  }

  regularShare(countryName: string) {
    let message =
      "Discover more about " +
      countryName +
      " on the FREE " +
      this.appVersion.getAppName();
    this.socialShareProvider.regularShare(message);
  }

  renderChart() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: "bar",
      data: {
        labels: ["Min Temp", "Max Temp", "Current Temp"],
        datasets: [
          {
            label: "Todays Temperature (°C)",
            data: this.temperaturesForecast,
            backgroundColor: [
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 206, 86, 0.2)"
            ],
            borderColor: [
              "rgba(54, 162, 235, 1)",
              "rgba(255,99,132,1)",
              "rgba(255, 206, 86, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        animation: {
          duration: 2500
        },
        legend: {
          display: false
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }

  getPhoto() {
    this.unsplashProvider
      .getPhoto(this.country.name + "," + this.country.capital)
      .then(data => {
        this.photo = data;
        // if (this.photo.location.country == this.country.name) {
        this.image = this.photo.urls.small;
        this.location = this.photo.location;
        // }
        // console.log(this.photo);
        // console.log("photo color: " + this.photo.color);
      });
  }

  getWeather() {
    this.openWeatherProvider
      .getWeather(this.country.capital + "," + this.country.name)
      .then(data => {
        this.weather = data;
        this.temperaturesForecast.push(this.weather.main.temp_min);
        this.temperaturesForecast.push(this.weather.main.temp_max);
        this.temperaturesForecast.push(this.weather.main.temp);
        // console.log(this.temperaturesForecast);
      });
  }

  getNews() {
    this.newsProvider.getNews(this.country.alpha2Code).then(data => {
      this.topNewsHeadlines = data;
      this.articlesWithImages = this.topNewsHeadlines.articles.filter(function(
        item
      ) {
        return item.urlToImage != "" && item.urlToImage != null; // return only articles with an image
      });
      if (this.articlesWithImages.length > 3) {
        this.articlesWithImages.length = 3;
      } //limit to 3 articles
      // console.log(this.articlesWithImages)
    });
  }

  ionViewWillEnter() {
    this.getWeather();
  }

  ionViewDidEnter() {
    this.renderChart();
    this.getPhoto();
  }
}
