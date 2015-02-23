public class Calc{	
	private int value;
	public Calc(int init){
		this.value = init;
	}
	public int getValue(){
		return value;
	}
	public void add(int newValue){
		value += newValue;
	}
	public String toString(){
		return "[Calc:" + value + "]";
	}	
	public int squre(int a){
		 return  a*a;
	}	

	public int fact(int value){
		 if(value==1 || value==0)
		 	return 1;
		 return value*fact(value-1);
	}

}