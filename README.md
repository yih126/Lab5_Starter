# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Name: Yizhen Han  
Partner(s): None

## Unit Testing Questions

1. I would not use only a unit test to test the full message feature, because sending a message involves multiple parts working together, such as the input box, send button, user data, and message display. This is better tested with an integration or end-to-end test.

2. Yes, I would use a unit test to test the max message length feature, because it is a small independent piece of logic. A unit test can check that messages over 80 characters are rejected and messages under 80 characters are accepted.