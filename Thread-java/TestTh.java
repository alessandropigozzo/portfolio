package thread;


//ricorda di implementare run 


public class TestTh {

	public static void main(String[] args)  {
		
//			String s1 = "oggi è mercoledì";
//			String s2 = "19";
//			String s3 = "e l'estata è arrivata (finalmente)";
//			
//			
//			System.out.println(s1);
//			try {
//				Thread.sleep(3000);
//				System.out.println(s2);
//				Thread.sleep(2000);
//				System.out.println(s3);
//				
//			} catch (InterruptedException e) {
//				System.out.println("interruptedException"+e );
//			}
//			
//			
		
		ThreadOne one = new ThreadOne(10);
		
		one.start();			//per farlo partire in contemporanea
		
		for (int i = 0 ;i<=10;i++) {
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			System.out.println("io sono il main e valgo "+ i);
			}
		
		Runnable runnable = new ThreadTwo(10);
		Thread tt = new Thread(runnable);
		tt.start();
	
			
	}

}
