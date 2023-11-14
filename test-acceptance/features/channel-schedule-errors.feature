@ChannelScheduleErrors
Feature: Channel Schedule Errors
   As a consumer of IBL API
   I want to validate the error response from the API, given invalid input
   
   Scenario Outline: Verify response status code for invalid request
      Given the user has correct IBL base url
      When the channel schedule is requested for a given date of '<date>'
      Then the api returns error response with status code as <statusCode>
         And error response has property 'details'
         And error response has property 'http_response_code'
      Examples:
         | date       | statusCode |
         | 2023-09-11 | 404        |