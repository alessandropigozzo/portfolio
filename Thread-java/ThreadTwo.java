package thread;

public class ThreadTwo implements Runnable{
	
	int y;
	
	public ThreadTwo() {
		
	}
	
	public ThreadTwo(int y) {
		this.y = y;
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
			System.out.println("io sono il run del metodo 2 e valgo "+ i);
			}
	}

}
