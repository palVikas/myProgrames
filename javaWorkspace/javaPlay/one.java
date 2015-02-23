class calculator{
	public static void main(String args[]) {
		int first_value,second_value;
		first_value = Integer.parseInt(args[0]);
		second_value = Integer.parseInt(args[1]);

		System.out.println("add of two number : "+mathFunc.add(first_value,second_value));
		System.out.println("sub of two number : "+mathFunc.sub(first_value,second_value));
		System.out.println("multiply of two number : "+mathFunc.multiply(first_value,second_value));
		System.out.println("devide of two number : "+mathFunc.divide(first_value,second_value));
		System.out.println("power of two number : "+mathFunc.power(first_value,second_value));

	}

}

class mathFunc{
	public static int add(int x,int y){
		return x+y;
	};

	public static int sub(int x,int y){
		return x-y;
	};

	public static int multiply(int x,int y){
		return x*y;
	};

	public static int divide(int x,int y){
		return x/y;
	};

	public static int power(int x,int y){
		return x^y;
	};
}
