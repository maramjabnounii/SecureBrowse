const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 2500;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql0',
  database: 'blacklist',
  insecureAuth: true
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err);
    return;
  }
  console.log('Connected to the database');
});

app.use(cors());

// GET route to retrieve URL data from the database
app.get('/urls', (req, res) => {
  connection.query('SELECT url FROM list', (error, results, fields) => {
    if (error) {
      console.error('Error executing query: ', error);
      res.status(500).send('Internal Server Error');
      return;
    }

    // Extracting URLs from the results
    const urls = results.map(entry => entry.url);

    res.json(urls);
  });
});

// GET route to retrieve phishing URLs from the database
app.get('/phishing_list', (req, res) => {
  connection.query('SELECT url FROM list WHERE threat_category = "phishing"', (error, results, fields) => {
    if (error) {
      console.error('Error executing query: ', error);
      res.status(500).send('Internal Server Error');
      return;
    }

    // Extracting URLs from the results
    const Urls = results.map(entry => entry.url);

    res.json(Urls);
  });
});

// GET route to retrieve spam URLs from the database
app.get('/spam_list', (req, res) => {
  connection.query('SELECT url FROM list WHERE threat_category = "spam"', (error, results, fields) => {
    if (error) {
      console.error('Error executing query: ', error);
      res.status(500).send('Internal Server Error');
      return;
    }

    // Extracting URLs from the results
    const Urls = results.map(entry => entry.url);

    res.json(Urls);
  });
});

// GET route to retrieve malware URLs from the database
app.get('/malware_list', (req, res) => {
  connection.query('SELECT url FROM list WHERE threat_category = "malware"', (error, results, fields) => {
    if (error) {
      console.error('Error executing query: ', error);
      res.status(500).send('Internal Server Error');
      return;
    }

    // Extracting URLs from the results
    const Urls = results.map(entry => entry.url);

    res.json(Urls);
  });
});

// GET route to retrieve botnet URLs from the database
app.get('/Botnet_list', (req, res) => {
  connection.query('SELECT url FROM list WHERE threat_category = "Botnet"', (error, results, fields) => {
    if (error) {
      console.error('Error executing query: ', error);
      res.status(500).send('Internal Server Error');
      return;
    }

    // Extracting URLs from the results
    const Urls = results.map(entry => entry.url);

    res.json(Urls);
  });
});

// GET route to retrieve cryptocurrencies URLs from the database
app.get('/cryptocurrencies_list', (req, res) => {
  connection.query('SELECT url FROM list WHERE threat_category = "cryptocurrencies"', (error, results, fields) => {
    if (error) {
      console.error('Error executing query: ', error);
      res.status(500).send('Internal Server Error');
      return;
    }

    // Extracting URLs from the results
    const Urls = results.map(entry => entry.url);

    res.json(Urls);
  });
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
