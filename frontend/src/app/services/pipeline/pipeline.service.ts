import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pipeline} from '../../models/pipeline';


@Injectable({
  providedIn: 'root'
})
export class PipelineService {

  constructor(private http: HttpClient) { }

  getPipelineStatus(): Observable<Pipeline[]> {
    return this.http.get<Pipeline[]>('https://gitlab.com/api/v4/projects/14551721/pipelines');
  }
}
