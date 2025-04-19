package Arrays.Sorting;

/**
 * @Intitution : move the smallest element to left, sorts the array;
 * @Approach : find the minimum element index then swap the first index
 * @Complexity : Time : O(N^2), Space : O(1)  
 * 
*/

class SelectionSort
{
	
	void selectionSort(int arr[])
	{

	    int n = arr.length;
	    for(int i=0;i<n-1;i++){
	        int minI = i;
	        for(int j=i;j<n;j++){
	            if(arr[j] < arr[minI]){
	                minI = j;
	            }
	            
	            
	        }
            swap(arr,i,minI);
	                
	    }
	    
	    
	}
	void swap(int []arr,int i, int j){
	    int temp = arr[i];
	    arr[i] = arr[j];
	    arr[j] = temp;
	    
	}
}