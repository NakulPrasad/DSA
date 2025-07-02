# [Design Browser History](https://leetcode.com/problems/design-browser-history/description/)

You have a browser of one tab where you start on the homepage and you can visit another url, get back in the history number of steps or move forward in the history number of steps.

Implement the BrowserHistory class:

- BrowserHistory(string homepage) Initializes the object with the homepage of the browser.
- void visit(string url) Visits url from the current page. It clears up all the forward history.
- string back(int steps) Move steps back in history. If you can only return x steps in the history and steps > x, you will return only x steps. Return the current url after moving back in history at most steps.
- string forward(int steps) Move steps forward in history. If you can only forward x steps in the history and steps > x, you will forward only x steps. Return the current url after forwarding in history at most steps.

```java
class BrowserHistory {
    String current;
    Stack<String> st1 = new Stack<String>();
    Stack<String> st2 = new Stack<String>();
    public BrowserHistory(String homepage) {
        this.current = homepage;
        st1.push(homepage);

    }
    
    public void visit(String url) {
        while(!st2.isEmpty()){
            st2.pop();
        }
        st1.push(url);
        this.current = url;
    }
    
    public String back(int steps) {
        while(st1.size() != 1 && steps --> 0){
            st2.push(st1.pop());
        }
        // if(!st1.isEmpty())
        this.current = st1.peek();
        return this.current;
    }
    
    public String forward(int steps) {
        while(!st2.isEmpty() && steps-->0){
            st1.push(st2.pop());
        }
        this.current = st1.peek();
        return this.current;
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * BrowserHistory obj = new BrowserHistory(homepage);
 * obj.visit(url);
 * String param_2 = obj.back(steps);
 * String param_3 = obj.forward(steps);
 */
```