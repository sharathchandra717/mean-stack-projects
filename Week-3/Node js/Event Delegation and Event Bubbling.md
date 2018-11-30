## Event Bubbling
Event bubbling process starts with the element that triggered the event and then bubbles up to the containing elements in the hierachy.  
This means that anytime you click one of our bound anchor tags, you are effectively clicking the entire document body! This is called event bubbling or event propagation.  
It happens from bottom to top.

## Event Delegation
If we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.  
Event delegation allows us to attach a single event listener, to a parent element, that will fire for all descendants matching a selector.   
It happens from top to bottom .
