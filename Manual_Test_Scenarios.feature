Scenario 1 : Verify Channel title 
Given the user has correct IBL url
When the channel schedule is requested
   And the channel schedule is received successfully
Then the channel title should be bbc_one_london 

Scenario 2 : Verify Channel programs has Scheduled start date and Scheduled end date
Given the user has correct IBL url
When the channel schedule is requested
   And the channel schedule is received successfully
Then channel programs has Scheduled start date
   And channel programs has Scheduled end date

Scenario 3 : Verify Channel programs has Transmission start date and Transmission end date
Given the user has correct IBL url
When the channel schedule is requested
   And the channel schedule is received successfully
Then channel programs has transmission start date   
   And channel programs has transmission end date

Scenario 4 : Verify childrens field and parent id
Given the user has correct IBL url
When the channel schedule is requested
     And the channel schedule is received successfully.
Then childrens field equals false
    And  parent id field is not empty

Scenario 6: Category audio described has audio description as true
Given the user has correct IBL url
When the channel schedule is requested
  And the channel schedule is received successfully
  And the category contains audio described
Then audio described field should be equal to true





