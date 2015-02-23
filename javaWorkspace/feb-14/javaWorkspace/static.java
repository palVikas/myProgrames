class Test {
	 static int id = 100;
	 String ravi;

	Test(){
		id++;
	}
}

class MainTest{	
	public static void main(String[] args) {
		Test test1 = new Test();
		System.out.println(Test.id);
		Test test2 = new Test();
		System.out.println(Test.id);
		Test test3 = new Test();
		System.out.println(Test.id);
		System.out.println(test3.ravi);

		int i=45;
		byte b = (byte)i;
		System.out.println(b);

		char c = 'A';
		int j = (int)c;
		System.out.println(j);
		
	}
}