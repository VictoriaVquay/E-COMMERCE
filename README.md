
#  E-COMMERCE DATABASE DESIGN

## Entity-Relationship Diagram (ERD)

###  Brand
- `brand_id` (PK)  
- `name`  
- `description`  
- `logo_url`  

###  Product Category
- `category_id` (PK)  
- `name`  
- `description`  

###  Product
- `product_id` (PK)  
- `name`  
- `base_price`  
- `brand_id` (FK → Brand)  
- `category_id` (FK → Product Category)  

###  Product Item
- `product_item_id` (PK)  
- `product_id` (FK → Product)  
- `stock_quantity`  
- `price_override` (nullable)  

###  Product Image
- `image_id` (PK)  
- `product_id` (FK → Product)  
- `image_url`  
- `is_primary` (boolean)  

###  Color
- `color_id` (PK)  
- `name`  
- `hex_code`  

###  Product Variation
- `variation_id` (PK)  
- `product_item_id` (FK → Product Item)  
- `color_id` (FK → Color)  
- `size_option_id` (FK → Size Option)  

###  Size Category
- `size_category_id` (PK)  
- `name` (e.g., Shoe Sizes, Shirt Sizes)  

###  Size Option
- `size_option_id` (PK)  
- `value` (e.g., S, M, L, 42)  
- `size_category_id` (FK → Size Category)  

###  Attribute Category
- `attribute_category_id` (PK)  
- `name`  

###  Attribute Type
- `attribute_type_id` (PK)  
- `name` (e.g., Text, Number, Boolean)  

###  Product Attribute
- `attribute_id` (PK)  
- `product_id` (FK → Product)  
- `name`  
- `value`  
- `attribute_type_id` (FK → Attribute Type)  
- `attribute_category_id` (FK → Attribute Category)  


##  Relationships Summary

- A **product** belongs to one **brand** and one **category**
- A **product** has many **product_items**
- A **product_item** has many **product_variations**
- A **product_variation** links to one **color** and one **size_option**
- A **size_option** belongs to one **size_category**
- A **product** has many **product_attributes**
- Each attribute links to an **attribute_type** and **attribute_category**



##  ERD Diagram

![E-Commerce ERD](https://github.com/user-attachments/assets/2eb9fd8c-aea6-461b-9ed6-8b0b991ad890)



## Collaborators

- **Victoria Mwende**  
- **Paul Mburu**



