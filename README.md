# Collaborative Git Exercises - E-commerce Project

## Setup for Both Developers
Both developers should start by:
1. Creating a GitHub account (if you don't have one)
2. Developer 1 (you) should create a new repository named "ecommerce-site"
3. Developer 1 should add Developer 2 (your friend) as a collaborator

## Bundle 1: Basic Collaboration

### Developer 1 (You):
1. Create the initial project structure:
   - How would you initialize a new git repository?
   - Create `index.html` with basic e-commerce homepage structure
   - Create `styles.css` with basic styling
   - How would you make your first commit?
   - How would you push this to GitHub?

### Developer 2 (Your Friend):
1. Get access to the project:
   - How would you clone the repository you were invited to?
   - Create a new branch called `feature/product-list`
   - Add a `products.html` file with a basic product grid
   - How would you push this new branch to GitHub?

## Bundle 2: Parallel Development

### Developer 1 (You):
1. Start working on the shopping cart:
   - Create a new branch called `feature/shopping-cart`
   - Add `cart.js` with basic cart functionality
   - Add a cart section to `index.html`
   - Commit and push your changes
   - Create a pull request

### Developer 2 (Your Friend):
1. While Developer 1 is working on the cart:
   - Update the product grid in `products.html`
   - Add product images and descriptions
   - Add a "Add to Cart" button to each product
   - Push your changes
   - Create a pull request

## Bundle 3: Handling Conflicts

### Developer 1 (You):
1. Your cart implementation needs to integrate with products:
   - Pull the latest changes from main
   - Add cart functionality to the "Add to Cart" buttons
   - Modify the product grid layout to fit the cart
   - Push your changes

### Developer 2 (Your Friend):
1. Simultaneously improve the product grid:
   - Without pulling Developer 1's changes
   - Modify the same product grid layout differently
   - Push your changes
   - (This will create a conflict!)

## Bundle 4: Resolving Conflicts

### Developer 1 (You):
1. Handle the conflicting changes:
   - How would you identify what conflicts exist?
   - How would you get the latest changes?
   - Resolve the conflicts in the product grid layout
   - Push your resolved changes

### Developer 2 (Your Friend):
1. Update your work with the resolution:
   - How would you update your branch with the resolved conflicts?
   - Make any necessary adjustments to your code
   - Push the updated changes

## Bundle 5: Feature Integration

### Developer 1 (You):
1. Integrate payment processing:
   - Create a new branch `feature/payment`
   - Add `payment.js`
   - This depends on some cart functionality
   - Cherry-pick specific cart commits you need

### Developer 2 (Your Friend):
1. Work on order processing:
   - Create a branch `feature/orders`
   - Add `orders.js`
   - This also depends on some cart functionality
   - How would you get just the cart features you need?

## Bundle 6: Emergency Hotfix

### Developer 1 (You):
1. Handle a critical bug in the payment system:
   - Create a hotfix branch
   - Fix the bug
   - Get this fix into production (main branch)
   - How would you ensure Developer 2 gets this fix?

### Developer 2 (Your Friend):
1. Incorporate the urgent fix:
   - How would you get the hotfix into your order processing branch?
   - Ensure your new code works with the fix
   - Update your pull request

## Challenge Scenarios

### Developer 1 (You):
1. Experimental Feature:
   - Create a feature branch for a new recommendation system
   - After several commits, decide to try a different approach
   - How would you clean up your commit history?
   - How would you save only some of your changes?

### Developer 2 (Your Friend):
1. Feature Rollback:
   - After your code is merged, a bug is discovered
   - How would you find which commit introduced the bug?
   - How would you revert the problematic changes?
   - How would you let Developer 1 know about this issue?

## Advanced Challenges (Both Developers):
1. Release Management:
   - Create a release branch
   - Each developer cherry-pick their stable features
   - Handle any integration issues
   - Tag the release
   - Create release notes together