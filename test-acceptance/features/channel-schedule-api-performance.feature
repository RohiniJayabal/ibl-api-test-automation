@ChannelSchedule
Feature: Channel Schedule Performance
   As a consumer of IBL API
   I want to get the schedules of channels along with meta data in stipulated response times

   @Selected
   Scenario: Get channel schedules within expected response times
      Given the user has correct IBL url
      When the channel schedule is requested
      Then the channel schedule is received successfully
      And the channel schedule is received within stipulated time of 1000 ms