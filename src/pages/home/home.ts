import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { CountryDataProvider } from "../../providers/rest-countries/rest-countries";
import { DetailsPage } from "../details/details";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  countries: any;
  segment: string;

  constructor(
    public navCtrl: NavController,
    public countryDataProvider: CountryDataProvider
  ) {
    this.getCountries();
    this.segment = "All";
  }

  getCountries() {
    this.countryDataProvider.getCountries().then(data => {
      this.countries = data;
      // console.log(this.countries.topNewsHeadlines)
    });
  }

  // Nav
  goToDetail(countryName: any) {
    this.navCtrl.push(DetailsPage, countryName);
  }
}
