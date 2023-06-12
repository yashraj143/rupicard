## RupiCard Backend Task: Database using Google Sheet


### This Project use simple node js file
#### The application is running locally on port 3000 - http://localhost:3000/
#####

###### Have Exhausted Google Cloud Free Quota so just have tested my server.js with locally
####
##### Here are Configuration to do same:

#### Google console Configuration:
1. Create Project in google console -  https://console.cloud.google.com/
2. Create a new project or select an existing project from the project dropdown.
3. In the sidebar, click on "APIs & Services" and then select "Library".
4. Search for "Google Sheets API" and click on it.
5. Click the "Enable" button to enable the API for your project.
6. In the sidebar, click on "Credentials" and then select "Create Credentials" and choose "Service account".
7. Fill in the necessary details for the service account. You can leave the optional fields blank.
8. Under "Roles", select "Editor" or "Owner" to grant the service account access to your Google Sheets document.
9. Skip the "Grant users access to this service account" section and click "Done" to create the service account.
10. Locate the newly created service account in the "Credentials" tab and click on the pencil/edit icon.
11. In the "Keys" tab, click on "Add Key" and select "JSON" to download the JSON key file. This file is the secret.json file.
12. Save the downloaded secret.json file in the same directory as your Node.js script.

#### Google Sheet Configuration
1. Goto https://sheets.new
2. Add A1: Name and B1: Mobile Number
3. Share Google sheet and add service account email which we get from google configuration give edit access


#### Changes in server.js
1. Change Google SpreadSheet Id (which is hardcoded right now)

### - FAQ

- what is Google Sheet Id? How to find?
- Answer: After Creating Google sheet URL looks like https://docs.google.com/spreadsheets/d/SPREAD_SHEET_ID/edit so find Spread sheet id from that.


 

#### Steps to run:
1. npm install
2. node server.js
3. visit http://localhost:3000/ in browser


#### My Google Sheet:
https://docs.google.com/spreadsheets/d/1szj_Pslwa5gWmUVqcbGXpI-nUwJ_x2YOqm8MdEtqY7Q/edit


