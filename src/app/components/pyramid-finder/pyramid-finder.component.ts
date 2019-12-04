import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { PyramidService } from "../../services/pyramid.service";

@Component({
  selector: "app-pyramid-finder",
  templateUrl: "./pyramid-finder.component.html",
  styleUrls: ["./pyramid-finder.component.scss"]
})
export class PyramidFinderComponent implements OnInit {
  constructor(private pyramidService: PyramidService) {}

  public isPyramid = false;
  public beganFinding = false;
  public triedWord;
  public pyramidForm = new FormGroup({
    triedPyramid: new FormControl("")
  });

  ngOnInit() {}

  onSubmit() {
    // Process if pyramid with service data here
    this.beganFinding = true;
    this.isPyramid = this.pyramidService.findIfPyramid(
      this.pyramidForm.value.triedPyramid
    );
    this.triedWord = this.pyramidForm.value.triedPyramid;
  }
}
