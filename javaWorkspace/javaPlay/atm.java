class atm {
	public static void main(String args[]) {
		int amount,i,no_of_notes;
		int result[];
		int notes[] ={1000,500,100,50,20,10,5,2,1};
		amount = Integer.parseInt(args[0]);
		for(i=0;i<notes.length;i++){
			if(amount>=notes[i])
			System.out.println((+notes[i]+":"+amount/notes[i]));
			amount = amount%notes[i];
		}	
	};
		
}
		