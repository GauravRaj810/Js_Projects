- for user conviencence we use Question section
- improves seo , enhances User experience ....

in this project i use question-btn  class for visibility of the question - ans , icon 

# two ways to do ---- 
1. using selectors inside the element - 
 # here i first select the article tag as class questions then after i run a loop for retreiving all for same then after selected the plus button icon  it simply show the text from retrieving the content which is hiding as show=text class i.e usign toggle property .............
 
2. traversing the dom - 
 # used show-text class using toggle functionalites also adds parent element to access to parrent and then when user click on the button then the question text ans got visibel again click then toggle functinalities work and the minus icon visible due to show-text , minus-icon stuffs .........