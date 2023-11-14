@ChannelSchedule
Feature: Channel Schedule
   As a consumer of IBL API
   I want to get the schedules of channels along with meta data

   # Background: IBL url
   # Given the user has correct IBL url
   # When the channel schedule is requested

   Scenario Outline: Verify element Id and episode type
      Given the user has correct IBL url
      When the channel schedule is requested
      Then all the channel elements has id
      And the channel elements episode is of type '<elementType>'
      Examples:
         | elementType |
         | episode     |

   Scenario: Verify episode title
      Given the user has correct IBL url
      When the channel schedule is requested
      Then all the episode has a title

   Scenario: Verify only one live episode exists
      Given the user has correct IBL url
      When the channel schedule is requested
      Then only one episode is live

   Scenario: Verify transmission date
      Given the user has correct IBL url
      When the channel schedule is requested
      Then transmission start is before transmission end

   Scenario: Verify response header
      Given the user has correct IBL url
      When the channel schedule is requested
      Then response header has valid date value