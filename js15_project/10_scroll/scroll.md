1. scroll behaviour - for scrolling the links smoother ...
2. Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.

// ********** smooth scroll ************


-  Selects anchor links (.scroll-link) for smooth scrolling.

-  Prevents default anchor link behavior (no instant jump to section).

-  Grabs the target section based on the link’s href attribute.

-  Calculates the position to scroll to, adjusting for:

            The navigation bar height (navHeight).
            Whether the navbar is fixed or not.
            The height of the links container (containerHeight).

-  Scrolls smoothly to the calculated position.

-  Closes the navigation menu if it's a collapsible one.



# element.offsetTop is the distance from the top of the page to the target section (the section you're scrolling to) .........We subtract navHeight to account for the space taken by the fixed or regular navigation bar at the top.

