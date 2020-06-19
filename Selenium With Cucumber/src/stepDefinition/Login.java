package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login {
WebDriver driver;
	
   @Given("^Open login screen$")
   public void open_login_screen() throws Throwable {
    	System.setProperty("webdriver.chrome.driver", "C:\\eclipse\\drivers\\chromedriver_2.34.exe");
    	driver = new ChromeDriver();
    	driver.manage().window().maximize();   
    	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    	driver.get("http://live.guru99.com/index.php/");
	}
   
   @Given("^Open google$")
   public void open_google() throws Throwable {
    	String path1 = System.getProperty("user.dir");
		System.setProperty("webdriver.chrome.driver",path1+"\\web-driver\\chromedriver_2.34.exe");
    	driver = new ChromeDriver();
    	driver.manage().window().maximize();    
    	driver.get("https://www.google.co.in/");
	}
   @And("^I close google$") 
   public void i_close_google() throws Throwable {
		driver.quit();
	}
	@Given("^wait for page to load$")
	public void wait_for_page_to_load() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 60);
        wait.until(ExpectedConditions.titleContains("Home page"));
	}

	@When("^I enter valid \"(.*?)\" and \"(.*?)\"$")
	public void i_enter_valid_username_and_password(String username, String password) throws Throwable {
		driver.findElement(By.cssSelector("div.footer > div.links > ul > li.first > a[title=\"My Account\"]")).click();
        driver.findElement(By.xpath(".//*[@id='email']")).sendKeys(username);
        driver.findElement(By.xpath(".//*[@id='pass']")).sendKeys(password);
	}

	@When("^I click on submit button$")
	public void i_click_on_submit_button() throws Throwable {
		driver.findElement(By.xpath(".//*[@id='send2']")).click();
	}

	@Then("^I should login successfully$")
	public void i_should_login_successfully() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 60);
		wait.until(ExpectedConditions.titleContains("My Account"));
	}

	@Then("^I click logout link$")
	public void i_click_logout_link() throws Throwable {
		driver.findElement(By.xpath(".//*[@id='header']/div/div[2]/div/a/span[2]")).click();
        driver.findElement(By.xpath(".//*[@id='header-account']/div/ul/li[5]/aa")).click();
	}

	@Then("^I should logout successfully$")
	public void i_should_logout_successfully() throws Throwable {
		driver.quit();
	}

}