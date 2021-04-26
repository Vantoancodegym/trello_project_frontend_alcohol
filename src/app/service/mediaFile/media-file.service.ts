import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IMediaFile} from '../../interface/media-file';
const URL_BACKEND = environment.api_url
@Injectable({
  providedIn: 'root'
})
export class MediaFileService {

  constructor(private httpClient: HttpClient) {}
  getMediaFilesByCardId(id: number): Observable<IMediaFile[]>{
    return this.httpClient.get<IMediaFile[]>(URL_BACKEND + "mediafile/findByCard/"+id);
  }
  createMediaFile(mediaFile: IMediaFile): Observable<any>{
    return this.httpClient.post(URL_BACKEND + "mediafile/create", mediaFile);
  }
}
