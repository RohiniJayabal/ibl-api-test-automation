import { AxiosResponse } from "axios";
import { isEmpty, isNil } from "lodash";

export type TOrgAndProductIds = {
  orgId: string;
  orgEnvId: string;
  productId?: string;
  productEnvId?: string;
};

export class Utils {
  private static KEYCLOAK_UPSTREAM_SERVICE = 'keycloak';

  static hasAllElementsHasId(
    response: AxiosResponse<any, any>,
  ): boolean {
    const channelElements: any[] = response?.data?.schedule?.elements;
    for(const element of channelElements) {
        if(isNil(element.id) || isEmpty(element.id)){
          return false;
        }
    }
    return true;
  }

  static hasAllElementsAreEpisode(
    response: AxiosResponse<any, any>,
  ): boolean {
    const channelElements: any[] = response?.data?.schedule?.elements;
    for(const element of channelElements) {
        if(!element.episode.type || element.episode.type !== 'episode'){
          return false;
        }
    }
    return true;
  }

  static hasAllEpisodesHasTitle(
    response: AxiosResponse<any, any>,
  ): boolean {
    const channelElements: any[] = response?.data?.schedule?.elements;
    for(const element of channelElements) {
        if(!element.episode?.title || isNil(element.episode.title) || isEmpty(element.episode.title)){
          return false;
        }
    }
    return true;
  }

  static hasOnlyOneEpisodeLive(
    response: AxiosResponse<any, any>,
  ): boolean {
    const channelElements: any[] = response?.data?.schedule?.elements;
    let numberOfLiveEpisodes = 0;
    for(const element of channelElements) {
        if(element.episode?.live){
          numberOfLiveEpisodes++;
        }
    }
    return numberOfLiveEpisodes === 1;
  }

  static isValidTransmssionDateTime(
    response: AxiosResponse<any, any>,
  ): boolean {
    const channelElements: any[] = response?.data?.schedule?.elements;
    for(const element of channelElements) {
        if(element.transmission_start > element.transmission_end){
          return false;
        }
    }
    return true;
  }

  static responseHeaderHasValidDate(
    response: AxiosResponse<any, any>,
  ): boolean {
    const dateString: string = response?.headers?.date;
    return this.isToday(new Date(dateString));
  }

  static isToday(date: Date): boolean {
    const now = new Date()

    return date.getDate() === now.getDate() &&
         date.getMonth() === now.getMonth() &&
         date.getFullYear() === now.getFullYear()
  }
}
