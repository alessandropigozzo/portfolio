package thread;

public class ThreadOne extends Thread{
	
	int x ; 
	public ThreadOne (int x) {
		this.x=x;
		System.out.println("io sono il costruttore della classe :  " + this.getClass().getName() + "e x vale : " +x );
	}
	
	public ThreadOne () {
		System.out.println("io sono il costruttore della classe :  " + this.getClass().getName());
	}

	@Override
	public void run() {
		for (int i = 0 ;i<=10;i++) {
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println("io sono il threadone e valgo "+ i);
		}
		
	}
	

}
