# E-COMMERCE

1️⃣ ERD: Entities and Relationships

🏷️ brand
brand_id (PK)
name
description
logo_url

📂 product_category
category_id (PK)
name
description

📦 product
product_id (PK)
name
base_price
brand_id (FK → brand)
category_id (FK → product_category)

🧾 product_item
product_item_id (PK)
product_id (FK → product)
stock_quantity
price_override (nullable)

🖼️ product_image
image_id (PK)
product_id (FK → product)
image_url
is_primary (boolean)

🎨 color
color_id (PK)
name
hex_code

🔄 product_variation
variation_id (PK)
product_item_id (FK → product_item)
color_id (FK → color)
size_option_id (FK → size_option)

📏 size_category
size_category_id (PK)
name (e.g., Shoe Sizes, Shirt Sizes)

📐 size_option
size_option_id (PK)
value (e.g., S, M, 42)
size_category_id (FK → size_category)

📚 attribute_category
attribute_category_id (PK)
name

🧪 attribute_type
attribute_type_id (PK)
name (e.g., Text, Number, Boolean)

🧵 product_attribute
attribute_id (PK)
product_id (FK → product)
name
value
attribute_type_id (FK → attribute_type)
attribute_category_id (FK → attribute_category)


📐 ERD Relationships (Summary)
A product belongs to one brand and one category
A product has many product_items
A product_item has many product_variations
A product_variation links to one color and one size_option
A size_option belongs to one size_category
A product has many product_attributes
Each attribute links to a type and category


![188ECOMMERCE ERD](https://github.com/user-attachments/assets/2eb9fd8c-aea6-461b-9ed6-8b0b991ad890)






