# Handcrafted Furniture Marketplace PoC

## Stage 1 - Product Vision

### Product Idea
CraftNest is a premium marketplace for handcrafted furniture where buyers discover distinctive pieces from independent makers, boutique studios, and specialized workshops. The PoC demonstrates a startup-grade marketplace with rich product storytelling, seller storefronts, custom order requests, and lightweight admin operations.

### Value Proposition
- Buyers get access to original, story-rich furniture that feels more personal than mass retail.
- Sellers get a polished digital storefront without needing to build their own ecommerce infrastructure.
- The marketplace creates trust through curation, transparent maker profiles, production lead times, and product moderation.

### Target Users
- Design-conscious homeowners furnishing a room with statement pieces.
- Interior designers sourcing artisan furniture for clients.
- Independent makers who need visibility, customer leads, and order management.
- Marketplace operators curating quality and balancing supply with demand.

### Differentiation
- Focus on handcrafted furniture, not general crafts.
- Strong emphasis on maker identity, materials, dimensions, and lead time transparency.
- Built-in custom furniture request flow for made-to-order work.
- Premium editorial look closer to Chairish or 1stDibs than a generic commodity store.

## Stage 2 - Product Goals

### User Goals
- Discover unique furniture that matches style, room, material, and budget.
- Trust seller quality before purchasing.
- Request custom work for dimensions, materials, or finish changes.
- Manage wishlists, carts, and orders in one place.

### Business Goals
- Validate demand for curated artisan furniture online.
- Attract high-quality sellers with low onboarding friction.
- Increase conversion through premium merchandising and simplified checkout.
- Build operational visibility for admin review, moderation, and seller approval.

### Marketplace Goals
- Maintain a balanced, trustworthy supply side.
- Showcase enough variety across categories to support browsing.
- Encourage both direct purchases and custom order lead generation.
- Demonstrate moderation and approval controls required for scale.

## Stage 3 - User Personas

### Buyer Persona: Sofia, Design-Conscious Homeowner
- Motivations: furnish a home with pieces that feel personal, high-quality, and lasting.
- Pain points: mass-market furniture feels generic; quality is hard to assess online; custom work is difficult to request.
- Behaviour: browses by room and material, saves favorites, compares dimensions carefully, contacts sellers before high-ticket purchases.

### Seller Persona: Marco, Independent Furniture Maker
- Motivations: reach buyers beyond local traffic, present craftsmanship professionally, secure custom commissions.
- Pain points: limited marketing reach, no polished ecommerce presence, time lost answering repeated questions.
- Behaviour: uploads new pieces in small batches, highlights materials/process, prefers clear order and message visibility.

### Admin Persona: Lena, Marketplace Curator
- Motivations: protect marketplace quality, approve credible sellers, keep catalog visually strong and trustworthy.
- Pain points: inconsistent seller submissions, low-quality product photography, lack of centralized moderation tools.
- Behaviour: reviews seller applications, moderates listings, tracks catalog health and order activity through dashboards.

## Stage 4 - User Roles

### Guest
- View homepage, categories, catalog, product pages, seller storefronts.
- Search and filter products.
- Start seller application.
- Cannot save wishlist, checkout, or message sellers.

### Buyer
- All guest permissions.
- Manage profile, wishlist, cart, and checkout simulation.
- Submit reviews and custom requests.
- View orders and message sellers.

### Seller
- All buyer public browsing permissions.
- Manage seller profile and storefront.
- Create, edit, and archive products.
- View orders, messages, and incoming custom requests.
- Cannot approve own account or moderate platform content.

### Admin
- Full platform visibility.
- Approve or reject seller applications.
- Moderate products and seller content.
- View marketplace health metrics, orders, and custom request activity.

## Stage 5 - Marketplace Features

### Public Marketplace
- Homepage with hero story, curated collections, featured makers, trust indicators, and category discovery.
- Category pages for dining, seating, tables, storage, bedroom, and decor.
- Catalog with grid/list browsing, sorting, filtering, and search.
- Product page with image gallery, specifications, seller card, reviews, and customization availability.
- Seller storefront with brand story, product grid, lead times, and ratings.

### Buyer Features
- Wishlist for saved items.
- Cart with quantity and pricing summary.
- Checkout simulation with shipping/payment placeholders.
- Custom furniture request form linked to seller or category.
- Orders list and status timeline.

### Seller Features
- Seller dashboard with performance summary.
- Product creation and editing.
- Order overview.
- Message inbox for buyer questions.
- Custom request management.

### Admin Features
- Seller approval queue.
- Product moderation queue.
- Platform overview for sellers, products, orders, and requests.

## Stage 6 - Information Architecture

### Public
- `/`
- `/catalog`
- `/catalog?category=:slug`
- `/product/:id`
- `/seller/:id`
- `/custom-request`

### Buyer
- `/wishlist`
- `/cart`
- `/checkout`
- `/account/orders`

### Seller
- `/seller/dashboard`
- `/seller/products`
- `/seller/products/new`
- `/seller/orders`
- `/seller/messages`
- `/seller/requests`

### Admin
- `/admin`
- `/admin/sellers`
- `/admin/products`

## Stage 7 - UX Flows

### Browse Furniture
1. User lands on homepage and explores featured categories.
2. User opens catalog and applies filters for category, material, price, and lead time.
3. User sorts by featured, newest, or price.
4. User scans product cards and opens a product detail page.

### Open Product
1. User selects a product card.
2. Product page loads gallery, materials, dimensions, lead time, reviews, and seller summary.
3. User either adds item to cart, saves to wishlist, or contacts seller via custom request.

### Add to Cart
1. User clicks `Add to Cart`.
2. Cart drawer confirms item and shows subtotal.
3. User continues shopping or navigates to full cart page.

### Checkout
1. User reviews cart items and summary.
2. User enters simulated shipping and payment details.
3. System creates a mock order with `pending_confirmation` status.
4. Confirmation screen shows order number and seller lead time.

### Open Seller Storefront
1. User clicks seller card from product page or catalog badge.
2. Storefront displays maker story, rating, specialties, and listed products.
3. User browses more products or starts a custom request.

### Send Custom Order Request
1. User opens custom request form from product page, storefront, or dedicated page.
2. User selects category, budget range, dimensions, materials, and request details.
3. Request is submitted with mock status `submitted`.
4. Seller sees the request in dashboard.

### Seller Adds Product
1. Seller opens dashboard and clicks `Add Product`.
2. Seller completes title, category, pricing, materials, dimensions, lead time, and images.
3. Product enters `pending_review` state.
4. Admin later approves the listing for public visibility.

### Admin Approves Seller
1. Admin opens seller approval queue.
2. Admin reviews application, profile completeness, portfolio, and workshop details.
3. Admin changes status to `approved`.
4. Seller dashboard is activated.

## Stage 8 - Domain Model

### users
- id
- role
- first_name
- last_name
- email
- phone
- avatar_url
- password_hash
- status
- created_at
- updated_at

### buyers
- id
- user_id
- saved_style_tags
- preferred_materials
- shipping_city
- shipping_country

### sellers
- id
- user_id
- store_name
- slug
- approval_status
- short_bio
- country
- city
- lead_time_min_days
- lead_time_max_days
- rating_average
- review_count
- response_time_hours
- accepts_custom_orders
- featured_image_url

### seller_profiles
- id
- seller_id
- brand_story
- craftsmanship_notes
- studio_size
- founded_year
- specialties
- shipping_regions
- instagram_url
- website_url

### categories
- id
- name
- slug
- description
- hero_image_url

### materials
- id
- name
- slug
- type
- finish_options

### products
- id
- seller_id
- category_id
- title
- slug
- sku
- description
- story
- price
- currency
- stock_status
- quantity_available
- lead_time_days
- is_customizable
- rating
- review_count
- status
- created_at
- updated_at

### dimensions
- id
- product_id
- width_cm
- depth_cm
- height_cm
- weight_kg
- seat_height_cm

### product_images
- id
- product_id
- image_url
- alt_text
- sort_order

### product_materials
- id
- product_id
- material_id
- material_label

### reviews
- id
- product_id
- buyer_id
- rating
- title
- body
- reviewer_name
- created_at

### wishlist_items
- id
- buyer_id
- product_id
- created_at

### carts
- id
- buyer_id
- currency
- subtotal
- shipping_estimate
- total
- updated_at

### cart_items
- id
- cart_id
- product_id
- quantity
- unit_price
- line_total

### orders
- id
- buyer_id
- seller_id
- order_number
- status
- currency
- subtotal
- shipping_amount
- total
- shipping_name
- shipping_address_line1
- shipping_city
- shipping_country
- placed_at

### order_items
- id
- order_id
- product_id
- product_title
- quantity
- unit_price
- line_total

### custom_requests
- id
- buyer_id
- seller_id
- category_id
- subject
- description
- budget_min
- budget_max
- preferred_materials
- width_cm
- depth_cm
- height_cm
- due_date
- status
- created_at

### messages
- id
- thread_type
- buyer_id
- seller_id
- order_id
- custom_request_id
- sender_role
- body
- created_at

## Stage 9 - Database Schema (Logical)

### Core Relationships
- `users` 1:1 `buyers`
- `users` 1:1 `sellers`
- `sellers` 1:1 `seller_profiles`
- `sellers` 1:N `products`
- `categories` 1:N `products`
- `products` 1:1 `dimensions`
- `products` 1:N `product_images`
- `products` N:M `materials` through `product_materials`
- `products` 1:N `reviews`
- `buyers` 1:N `wishlist_items`
- `buyers` 1:1 `carts`
- `carts` 1:N `cart_items`
- `buyers` 1:N `orders`
- `sellers` 1:N `orders`
- `orders` 1:N `order_items`
- `buyers` 1:N `custom_requests`
- `sellers` 1:N `custom_requests`
- `buyers` and `sellers` participate in `messages`

### Notes
- Seller approval is stored on `sellers.approval_status`.
- Product moderation is stored on `products.status`.
- Review aggregates are denormalized onto `products` and `sellers` for fast reads.

## Stage 10 - Mock Data Design

### Dataset Targets
- 20 products
- 5 sellers
- 6 categories
- 10 reviews
- 5 orders
- 5 custom requests

### Data Quality Rules
- Every product includes realistic title, narrative description, dimensions, materials, price, and images.
- Products span six categories with varied lead times and customization settings.
- Sellers represent different workshop identities and geographies.
- Orders and requests demonstrate both direct purchase and bespoke commission behaviour.

## Stage 11 - API Design

### Public Endpoints
- `GET /api/home`
- `GET /api/categories`
- `GET /api/products`
- `GET /api/products/{id}`
- `GET /api/sellers`
- `GET /api/sellers/{id}`

### Buyer Endpoints
- `GET /api/wishlist`
- `POST /api/wishlist/toggle`
- `GET /api/cart`
- `POST /api/cart/add`
- `POST /api/cart/remove`
- `POST /api/checkout`
- `GET /api/orders`
- `POST /api/custom-request`

### Seller Endpoints
- `GET /api/seller/dashboard`
- `GET /api/seller/products`
- `POST /api/seller/products`
- `GET /api/seller/orders`
- `GET /api/seller/messages`
- `GET /api/seller/custom-requests`

### Admin Endpoints
- `GET /api/admin/overview`
- `GET /api/admin/sellers/pending`
- `POST /api/admin/sellers/{id}/approve`
- `GET /api/admin/products/pending`
- `POST /api/admin/products/{id}/approve`

### Response Shape
All endpoints return a production-style envelope:

```json
{
  "data": {},
  "meta": {},
  "message": "optional human readable status"
}
```

## Stage 12 - Frontend SPA Architecture

### Router
- Public routes for home, catalog, product, seller store, cart, checkout, and custom request.
- Buyer account route for orders.
- Seller dashboard routes.
- Admin demo routes.

### State Management
- `marketplaceStore` holds products, categories, sellers, and home content.
- `cartStore` holds cart items, totals, and checkout state.
- In this scaffold, stores use Vue reactive state to keep the setup lightweight for a PoC.

### API Service Layer
- `api.js` provides typed-by-convention methods that mirror backend endpoints.
- Services centralize mock fetch logic so frontend can later switch to a real Laravel API without page rewrites.

### Page Structure
- Home
- Catalog
- ProductDetail
- SellerStore
- Cart
- Checkout
- SellerDashboard
- AdminDemo

### Component Hierarchy
- `AppShell`
- `SiteHeader`
- `CategoryGrid`
- `FilterSidebar`
- `ProductCard`
- `ProductGallery`
- `ProductSpecs`
- `SellerCard`
- `ReviewList`
- `CustomOrderForm`
- `DashboardStatCard`

## Stage 13 - UI Component System

### Reusable Components
- `ProductCard`: thumbnail, title, seller, price, rating, lead time.
- `ProductGallery`: primary image with secondary gallery rail.
- `ProductSpecs`: materials, dimensions, lead time, customization tags.
- `SellerCard`: workshop identity block with trust indicators.
- `FilterSidebar`: category, material, price, customizable, and lead time filters.
- `CategoryGrid`: homepage category exploration.
- `CartDrawer`: quick access to added products.
- `ReviewList`: customer proof and review snippets.
- `CustomOrderForm`: structured commission request form.
- `DashboardStatCard`: metric summaries for seller/admin dashboards.

## Stage 14 - Design System

### Visual Direction
Warm, editorial, and premium. The UI should feel like a design marketplace rather than a generic admin template.

### Color Palette
- `--color-ink: #1f1a17`
- `--color-walnut: #6f4e37`
- `--color-sand: #efe4d6`
- `--color-ivory: #fbf7f1`
- `--color-clay: #c67c4e`
- `--color-sage: #7a8b78`
- `--color-border: #d9cbb9`

### Typography
- Headings: `"Cormorant Garamond", serif`
- Body/UI: `"Manrope", sans-serif`

### Spacing System
- 8px base scale
- Key tokens: 8, 12, 16, 24, 32, 48, 64

### Grid
- Max width 1280px
- 12-column desktop grid
- 2-column tablet compression
- 1-column mobile stack

### Card Style
- Soft ivory cards
- Thin warm border
- Large image ratios
- Rounded corners around 20px
- Subtle shadow for depth

### Buttons
- Primary: walnut background, ivory text
- Secondary: transparent with walnut border
- Tertiary: text action

## Stage 15 - Laravel Mock Backend

### Routes
- Use `routes/api.php` with REST-like route grouping.
- Controllers return JSON only.

### Controllers
- `HomeController`
- `CategoryController`
- `ProductController`
- `SellerController`
- `CartController`
- `CheckoutController`
- `CustomRequestController`
- `SellerDashboardController`
- `AdminController`

### Mock Data Provider
- `MockData.php` loads JSON files from `backend/mock-data`.
- Controllers compose payloads from a single provider to keep endpoint behavior consistent.

## Stage 16 - Project Folder Structure

```text
backend/
  app/Http/Controllers/
  routes/
  mock-data/
frontend/
  src/
    components/
    pages/
    router/
    services/
    stores/
    assets/
docs/
```

## Stage 17 - Code Scaffold

Code scaffold includes:
- Laravel API route definitions.
- Mock controllers returning structured JSON envelopes.
- JSON datasets for marketplace entities.
- Vue SPA entry, router, pages, shared components, and service layer.

## Stage 18 - Demo Scenarios

### Scenario 1: Buyer Browsing
- Open homepage, enter catalog, filter by dining tables and oak, inspect product detail, add item to cart.

### Scenario 2: Buyer Custom Request
- Open seller storefront, launch custom request form, submit a bespoke dining table request with dimensions and budget.

### Scenario 3: Seller Product Creation
- Open seller dashboard, review metrics, open create-product route, submit a new listing into pending review.

### Scenario 4: Admin Approval
- Open admin demo, inspect pending seller and product queues, approve one seller and one listing.

## Stage 19 - Future Scalability

### Payments
- Add payment intents and webhooks via Stripe or Adyen.
- Support deposits for custom work and milestone captures.

### Shipping
- Introduce shipping profiles, freight quotes, region restrictions, and white-glove delivery options.

### Reviews
- Enforce verified purchase reviews.
- Add seller-level review aggregation and moderation tooling.

### AI Recommendations
- Personalized related products based on style, category, saved items, and browsing history.
- AI-assisted custom request intake that converts free text into structured requirements.

### Search
- Replace mock filtering with Elasticsearch, Meilisearch, or Algolia.
- Support semantic discovery by material, style, room, and dimensions.
