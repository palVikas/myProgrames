import org.junit.Test;
import static org.junit.Assert.*;
public class CalcTest{
	@Test
	public void newCalcIsInitializedWithGivenValue(){
		Calc c = new Calc(5);
		assertEquals(5,c.getValue());
	}

	@Test
	public void canAddANumberToCalculator(){
		Calc c = new Calc(3);
		c.add(5);
		assertEquals(8,c.getValue());			
	}

	@Test
	public void toStringGivesValuealong(){
		Calc c = new Calc(5);
		assertEquals("[Calc:5]",c.toString());
	}

	@Test
	public void squre_of_two_number(){
		Calc c = new Calc(5);
		assertEquals(25,c.squre(5));
	}

	@Test
	public void factorial(){
		Calc c = new Calc(4);
		assertEquals(24,c.fact(4));
	}
}