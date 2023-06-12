const express = require('express');
const { GoogleSpreadsheet } = require('google-spreadsheet');

const app = express();
const PORT = 3000;


const creds = require('./secret.json');

// Have created google sheet ID and hardcoded right now
const doc = new GoogleSpreadsheet('1szj_Pslwa5gWmUVqcbGXpI-nUwJ_x2YOqm8MdEtqY7Q');


app.use(express.urlencoded({ extended: true }));


const namePattern = /^[a-zA-Z ]*$/;
const mobilePattern = /^\d{10}$/;

// HTML form
app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Enter User Details</h1>
        <form action="/submit" method="post">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" pattern="[A-Za-z ]+" required><br><br>
          <label for="mobileNumber">Mobile Number:</label>
          <input type="text" id="mobileNumber" name="mobileNumber" pattern="[0-9]{10}" required><br><br>
          <input type="submit" value="Submit">
        </form>
      </body>
    </html>
  `);
});


app.post('/submit', async (req, res) => {
  try {
    const { name, mobileNumber } = req.body;

    // Validate name and mobile number
    if (!namePattern.test(name) || !mobilePattern.test(mobileNumber)) {
      throw new Error('Invalid name or mobile number');
    }

   
    await doc.useServiceAccountAuth(creds);

    
    await doc.loadInfo();

    // Access the first sheet of the document
    const sheet = doc.sheetsByIndex[0];

    // Append the data to the sheet
    await sheet.addRow({ 'Name': name, 'Mobile Number': mobileNumber });

    res.send(`
      <html>
        <body>
          <h1>Data recorded successfully!</h1>
          <p>Name: ${name}</p>
          <p>Mobile Number: ${mobileNumber}</p>
          <a href="/">Back to Form</a>
        </body>
      </html>
    `);
  } catch (error) {
    console.error('Error recording data:', error);
    res.send(`
      <html>
        <body>
          <h1>An error occurred while recording data.</h1>
          <a href="/">Back to Form</a>
        </body>
      </html>
    `);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

