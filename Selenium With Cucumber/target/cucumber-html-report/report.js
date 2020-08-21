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
  "duration": 36803441383,
  "status": "passed"
});
formatter.match({
  "location": "Login.wait_for_page_to_load()"
});
formatter.result({
  "duration": 13061926,
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
  "duration": 1775873185,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_on_submit_button()"
});
formatter.result({
  "duration": 1502243951,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_login_successfully()"
});
formatter.result({
  "duration": 19335901,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_logout_link()"
});
formatter.result({
  "duration": 10152447210,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\".//*[@id\u003d\u0027header-account\u0027]/div/ul/li[5]/aa\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027II31-7DHY4Q2\u0027, ip: \u0027192.168.99.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u002711.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}), userDataDir\u003dC:\\Users\\kartikp\\AppData\\Local\\Temp\\scoped_dir9568_1429991623}, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dANY, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:20572}, acceptInsecureCerts\u003dfalse, browserVersion\u003d83.0.4103.116, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dwindows, setWindowRect\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 409829a9ec652a35e5669d4538a07cfd\n*** Element info: {Using\u003dxpath, value\u003d.//*[@id\u003d\u0027header-account\u0027]/div/ul/li[5]/aa}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat stepDefinition.Login.i_click_logout_link(Login.java:68)\r\n\tat ✽.And I click logout link(features/Login.feature:9)\r\n",
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
formatter.result({
  "duration": 6103819852,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_close_google()"
});
formatter.result({
  "duration": 25760731259,
  "status": "passed"
});
});