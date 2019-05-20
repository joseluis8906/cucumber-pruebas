var reporter = require('cucumber-html-reporter');

process.on('unhandledRejection', (err, p) => {
  console.log('An unhandledRejection occurred');
  console.log(`Rejected Promise: ${p}`);
  console.log(`Rejection: ${err}`);
});

var options = {
  theme: 'bootstrap',
  jsonFile: 'target/reports/report.json',
  output: 'target/reports/report.html',
  reportSuiteAsScenarios: true,
  launchReport: false,
  metadata: {
    "App Version":"0.3.2",
    "Test Environment": "STAGING",
    "Browser": "Chrome  54.0.2840.98",
    "Platform": "Windows 10",
    "Parallel": "Scenarios",
    "Executed": "Remote"
  }
};
 
reporter.generate(options);
