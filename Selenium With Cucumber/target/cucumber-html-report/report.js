$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Verify login",
  "description": "",
  "id": "verify-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify login with valid credentials",
  "description": "",
  "id": "verify-login;verify-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Open login screen",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "wait for page to load",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I enter valid \"kartik9@yopmail.com\" and \"password1\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I click logout link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should logout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.open_login_screen()"
});
formatter.result({
  "duration": 29190136338,
  "status": "passed"
});
formatter.match({
  "location": "Login.wait_for_page_to_load()"
});
formatter.result({
  "duration": 36931829,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kartik9@yopmail.com",
      "offset": 15
    },
    {
      "val": "password1",
      "offset": 41
    }
  ],
  "location": "Login.i_enter_valid_username_and_password(String,String)"
});
formatter.result({
  "duration": 1801327278,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_on_submit_button()"
});
formatter.result({
  "duration": 1314891065,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_login_successfully()"
});
formatter.result({
  "duration": 10687535,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_logout_link()"
});
formatter.result({
  "duration": 152164857,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\".//*[@id\u003d\u0027header-account\u0027]/div/ul/li[5]/aa\"}\n  (Session info: chrome\u003d63.0.3239.132)\n  (Driver info: chromedriver\u003d2.34.522940 (1a76f96f66e3ca7b8e57d503b4dd3bccfba87af1),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 39 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027KARTIK\u0027, ip: \u0027192.168.1.107\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.34.522940 (1a76f96f66e3ca7b8e57d503b4dd3bccfba87af1), userDataDir\u003dC:\\Users\\Kartik\\AppData\\Local\\Temp\\scoped_dir8016_1066}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d63.0.3239.132, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 1fdce894f0896d848c46fc753b5e70f8\n*** Element info: {Using\u003dxpath, value\u003d.//*[@id\u003d\u0027header-account\u0027]/div/ul/li[5]/aa}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat stepDefinition.Login.i_click_logout_link(Login.java:64)\r\n\tat ✽.And I click logout link(features/Login.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Login.i_should_logout_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("features/Login_1.feature");
formatter.feature({
  "line": 1,
  "name": "Verify admin login",
  "description": "",
  "id": "verify-admin-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify admin login with valid credentials",
  "description": "",
  "id": "verify-admin-login;verify-admin-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Open google",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I close google",
  "keyword": "And "
});
formatter.match({
  "location": "Login.open_google()"
});
