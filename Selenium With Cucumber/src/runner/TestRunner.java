package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features=".",
		glue={"stepDefinition"},
		plugin={"html:target/cucumber-html-report","json:target/cucumber.json",
				"rerun:target/rerun.txt"}
		)
		
public class TestRunner {

}