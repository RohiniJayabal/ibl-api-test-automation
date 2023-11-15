Scenario 1: Episodes that has audio description should have been added with category "Audio Described".  
Given the user has correct IBL url
  And the channel schedule is requested
  And the channel schedule is received successfully
When an episode is identified as audio described (audio_described = true)
Then the category contains 'audio described'

Scenario 2: Verify all episodes requires TV licence
Given the user has correct IBL url
When the channel schedule is received successfully
Then verify all episodes requires TV licence

Scenario 3: Verify Channel title 
Given the user has correct IBL url
When the channel schedule is requested
   And the channel schedule is received successfully
Then the channel title should be 'BBC One'
   And the master brand title is 'BBC One' 

Scenario 4: Verify Channel programs has Scheduled start date and Scheduled end date
Given the user has correct IBL url
When the channel schedule is requested
   And the channel schedule is received successfully
Then channel programs has Scheduled start date and Scheduled end date

Scenario 5: Verify Channel programs has Transmission start date and Transmission end date
Given the user has correct IBL url
When the channel schedule is requested
   And the channel schedule is received successfully
Then channel programs has transmission start date and transmission end date