// import { binding, given, then, when} from 'cucumber-tsflow';
// import { spec, expect } from 'pactum';
// import Spec from 'pactum/src/models/Spec';

// @binding()
// export class ChannelScheduleSteps {
//   private iblTestApi!: string; 
//   private spec: Spec = new Spec;
//   private iblApiResponse: any;

//   @given(/^the user has correct IBL url$/)
//   public initializeApiCall() {
//     this.iblTestApi = 'https://testapi.io/api/RMSTest/ibltest';
//   }

//   @when(/^the channel schedule is requested$/)
//   public async requestChannelSchedule() {
//     this.iblApiResponse = await spec().get(this.iblTestApi).useLogLevel('ERROR');
//   }

//   @then(/^the channel schedule is received successfully$/)
//   public verifyApiResponse() {
//     expect(this.iblApiResponse, spec).should.have.status(200);
//   }

//   @then(/^the channel schedule is received within stipulated time$/)
//   public verifyApiResponseTimes() {
//     expect(this.iblApiResponse, spec).should.have.responseTimeLessThan(200);
//   }
// }

import { binding, given, then, when} from 'cucumber-tsflow';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { assert } from 'chai';
import { Utils } from './utils/utils';

const instance = axios.create();

instance.interceptors.request.use((config) => {
  config.headers['request-startTime'] = process.hrtime()
  return config
})

instance.interceptors.response.use((response) => {
  const start = response.config.headers['request-startTime']
  const end = process.hrtime(start)
  const milliseconds = Math.round((end[0] * 1000) + (end[1] / 1000000))
  response.headers['request-duration'] = milliseconds
  return response
})

@binding()
export class ChannelScheduleSteps {
  iblTestApi!: string; 
  iblApiResponse!: AxiosResponse<any, any>;

  @given(/^the user has correct IBL url$/)
  public initializeApiCall() {
    this.iblTestApi = 'https://testapi.io/api/RMSTest/ibltest';
  }

  @when(/^the channel schedule is requested$/)
  public async requestChannelSchedule() {
    this.iblApiResponse = await instance.get(this.iblTestApi);
  }

  @then(/^the channel schedule is received successfully$/)
  public verifyApiResponse() {
    assert.equal(this.iblApiResponse.status, 200);
  }

  @then('the channel schedule is received within stipulated time of {int} ms')
  public verifyApiResponseTimes(expectedMaxResponseTimeInMs: number) {
    assert.isAtMost(this.iblApiResponse.headers['request-duration'], expectedMaxResponseTimeInMs);
  }

  @then(/^all the channel elements has id$/)
  public verifyChannelElementsHasId() {
    assert.isTrue(Utils.hasAllElementsHasId(this.iblApiResponse));
  }

  @then('the channel elements episode is of type {string}')
  public verifyChannelElementsType(type: string) {
    assert.isTrue(Utils.hasAllElementsAreEpisode(this.iblApiResponse));
  }

  @then('all the episode has a title')
  public verifyAllEpisodeHasTitle() {
    assert.isTrue(Utils.hasAllEpisodesHasTitle(this.iblApiResponse));
  }

  @then('only one episode is live')
  public verifyOnlyOneEpisodeIsLive() {
    assert.isTrue(Utils.hasOnlyOneEpisodeLive(this.iblApiResponse));
  }

  @then('transmission start is before transmission end')
  public verifyTransmissionDate() {
    assert.isTrue(Utils.isValidTransmssionDateTime(this.iblApiResponse));
  }

  @then('response header has valid date value')
  public verifyResponseHeaderDateValue() {
    assert.isTrue(Utils.responseHeaderHasValidDate(this.iblApiResponse));
  }
}

