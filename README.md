#Sew-Me

Sew me is an application that allows users to feel a part of the creation process when purchasing customized clothing. 
The customer can pick out a pattern that has fabric type and length recommendations based on the type of garment or the size of the garment the user requires. 
After selecting the clothing pattern, the user is then prompted to pick out the fabric that they would like each part of their garment to be sewn with. 
The user must use a fabric texture that aligns with what the pattern fabric recommendations. 
After making the selections, the user can add the clothes to the cart and purchase them.  
Stretch Goal: I would like a drag and drop feature where the user can interact with the application like playing with a paper doll where the user can put the clothes on an avatar and change the color to the fabric color that they picked out so they can visualize what the clothes may look like on them.

**Demo User**

In order to explore features that are granted to logged-in users. Please click on the Demo Login button in the top right-hand 
corner of the nav bar.

**Feature list**

  - Users
    1. A user can create an account.
    2. A previous user can log in.
    3. A logged in user can log out.
    4. Anyone interested in visualizing logged-in view as a Demo User can click on the Demo Login button.
  
  - Categories
    1. All users can query patterns matching a specific category by clicking on the link matching the desired particle of clothing.
  
  - Product Listings
    1. All users should be able to view pattern and fabric listings
    
  - Tailor Made
    1. A logged in user should be able to create a tailor made object by first selecting a Single Pattern Listing, 
    then the tailor made button to add the information to the Tailor Made State. After adding the pattern to the tailor state, search for
    the desired fabric texture and click the tailor made button to add this to the tailor state.
    2. Once a pattern and fabric choice have been added to the tailor made state, the authenticated user can click on the 
    add to cart button for the ability to purchase this tailored item.
    3. The price of tailor made item is the sum of the pattern, fabric, and $50 toward sewing labor.
    
  - Search
    1. All users are able to to create a search request.
    2. The search feature queries for all patterns based on pattern company, pattern type, and type of clothing.
    3. The search feature also queries for all fabrics based on fabric type.
    4. The user can update their search by typing in a new listing into the search bar and querying a new set of product lists.
    5. Clicking on a link to another feature or doing a new search will change the queried view.
    
  - Shopping Cart
    1. A logged-in user should be able to add a product, fabric, or tailor made object to the shopping cart.
    2. A logged-out user will be prompted to log in if attempting to add an item to the shopping cart.
    3. A logged-in user should be able to delete any item from the shopping cart.
    4. A logged-in user should be able to view the total for all of the items in the cart.
  
**React Components**

  - Categories
  - Home Page
  - Login Form Page
  - Login Form Modal
  - Navigation
  - Product Page
  - Search
  - Second Nav
  - Shopping Cart
  - Signup Form Page
  - Signup Form Modal
  - Tailor Page
  
**Database Schema**

**Frontend Routes** 

  - "/"
 
    This is the link to the Home Landing Page. This page has instructions about the steps to create a 
    tailor made item. First add a pattern to tailor made state then second the fabric.
    
  - "/search"

    This is the link that displays after clicking the search button.

  - "/patterns/:id"

    This is the link to the pattern description for a single pattern.

  - "/fabrics/:id"

    This is the link to the fabric description for a single fabric.
    
  - "/tailor"

    This is the link to create a tailored outfit. It is reached when first clicking on the tailor this button for a pattern and then searching and clicking the tailor this button for a fabric.
    
  - "/cart"

    This is the link to the Shopping Cart Landing page.
  
  - "/coat"

    This is the link to the coat category query.
    
  - "/dress"

    This is the link to the dress category query.
    
  - "/jacket"

    This is the link to the jacket category query.
    
  - "/jumper"

    This is the link to the jumper category query.
    
  - "/pants"

    This is the link to the pants category query.
  
  - "/shirt"

    This is the link to the shirt category query.
  
  - "/skirt"

    This is the link to the skirt category query.
  
  - "/suit"

    This is the link to the suit category query.
    
  - "/FAQ"

    This is the link to my About Me FAQ page. Please look to learn a little about me as a developer and link to my linked-in, github, and angellist.
  
**API Routes** 

**Redux store**
