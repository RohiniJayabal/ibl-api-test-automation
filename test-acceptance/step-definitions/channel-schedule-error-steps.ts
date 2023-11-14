import { binding, given, then, when} from 'cucumber-tsflow';
import { spec, expect } from 'pactum';
import { assert } from 'chai';

@binding()
export class ChannelScheduleErrorSteps {
  private iblTestApi!: string; 
  private iblApiResponse: any;

  @given(/^the user has correct IBL base url$/)
  public initializeApiCall() {
    this.iblTestApi = 'https://testapi.io/api/RMSTest/ibltest';
  }

  @when('the channel schedule is requested for a given date of {string}')
  public async requestChannelScheduleForGivenDate(date: string) {
    this.iblApiResponse = await spec().get(`${this.iblTestApi}/${date}`).useLogLevel('ERROR');
  }

  @then('the api returns error response with status code as {int}')
  public verifyApiErrorResponse(statusCode: number) {
    expect(this.iblApiResponse, spec).should.have.status(statusCode);
  }

  @then('error response has property {string}')
  public verifyErrorResponseProperties(property: string) {
    assert.isDefined(this.iblApiResponse.body?.error[property]);
  }
}

