# SvelteKit 5 Shopping Cart

A learning project to explore SvelteKit 5's new features and state management capabilities.

## Learning Goals

### 1. Core SvelteKit 5 Features
- Implement the new `$state()` syntax for reactive state management
- Use the new `$props()` for component props
- Explore SvelteKit 5's new component lifecycle methods
- Practice with the new event handling syntax
- Implement type-safe routing using SvelteKit's file-based router

### 2. Shopping Cart Features
- Display a grid of products with images, prices, and descriptions
- Add/remove items from cart
- Adjust quantities in cart
- Calculate total price including any tax/shipping
- Persist cart data between page refreshes
- Show cart summary (number of items) in navigation
- Implement a checkout process
- Add loading states and error handling

### 4. UI/UX Features
- Responsive design for mobile and desktop
- Implement a cart slide-out/modal
- Add animations for adding/removing items
- Show success/error notifications
- Create loading skeletons
- Add sorting and filtering for products
- Implement search functionality
- Add pagination or infinite scroll

## Project Structure
```
src/
├── lib/
│   ├── components/
│   │   ├── Cart/
│   │   ├── Products/
│   │   └── UI/
│   ├── stores/
│   ├── types/
│   └── utils/
├── routes/
│   ├── +page.svelte
│   ├── +layout.svelte
│   ├── products/
│   └── cart/
└── app.html
```
