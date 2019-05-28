var reporter = require('cucumber-html-reporter');

process.on('unhandledRejection', (err, p) => {
  console.log('An unhandledRejection occurred');
  console.log(`Rejected Promise: ${p}`);
  console.log(`Rejection: ${err}`);
});

var options = {
  name: "GWT Framework",
  brandTitle: "Pruebas Unitarias y de Aceptación",
  theme: 'bootstrap',
  jsonFile: 'target/reports/report.json',
  output: 'target/reports/report.html',
  reportSuiteAsScenarios: true,
  launchReport: false,
  metadata: {
    "App Version":"0.3.2",
    "Test Environment": "TEST",
    "Browser": "None",
    "Platform": "Docker Linux",
    "Parallel": "Scenarios",
    "Executed": "Remote"
  }
};
 
reporter.generate(options);
