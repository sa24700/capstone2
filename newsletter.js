 
//
// Create a newsletter campaign
//
var SibApiV3Sdk = require('sib-api-v3-sdk');
var defaultClient = SibApiV3Sdk.ApiClient.instance;
var mongoose = require('mongoose')
require( 'dotenv').config();
// Instantiate the client\
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;
var apiInstance = new SibApiV3Sdk.EmailCampaignsApi();
var emailCampaigns = new SibApiV3Sdk.CreateEmailCampaign();
// Define the campaign settings\
emailCampaigns.name = "Campaign sent via the API";
emailCampaigns.subject = "My subject";
emailCampaigns.sender = {"name": "From name", "email":"anshuman.kashyap@sendinblue.com"};
emailCampaigns.type = "classic";
// Content that will be sent\
emailCampaigns.htmlContent = 'Congratulations! You successfully sent this example campaign via the Sendinblue API.'
// Select the recipients\
const users = mongoose.model("users", userSchema);
const emailArray = users.find({newsletter: True})
emailCampaigns.recipients = {listIds}
// Schedule the sending in one hour\
emailCampaigns.scheduledAt = '2018-01-01 00:00:01'

// Make the call to the client\
apiInstance.createEmailCampaign(emailCampaigns).then(function(data) {
console.log('API called successfully. Returned data: ' + data);
}, function(error) {
console.error(error);
});