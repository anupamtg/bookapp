import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../api.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  single:any;
  slug:any;
  sub:any;
  date:any;
  constructor(public apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.SingleBlog();
  }
  SingleBlog() {
    this.sub = this.route.params.subscribe(params => {
      this.slug = params["product"];
      console.log(this.slug);
    });
    const slugURL = this.slug.split("-");
    const blogID = slugURL.pop();
    console.log(blogID);
    this.apiService.getUserData(blogID).subscribe(response => {
      this.single = response;
      console.log(this.single);
    });
  }
}
