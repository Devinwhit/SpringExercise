import { Component, OnInit } from '@angular/core';
import {PipelineService} from '../services/pipeline/pipeline.service';
import {Pipeline} from '../models/pipeline';

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.css']
})
export class PipelineComponent implements OnInit {

  pipeline: Pipeline;

  constructor(private pipelineService: PipelineService) { }

  ngOnInit() {
    this.getPipeline();
  }

  getPipeline(): void {
    this.pipelineService.getPipelineStatus()
      .subscribe(response => {
        this.pipeline = response[0];
      });
  }

}
