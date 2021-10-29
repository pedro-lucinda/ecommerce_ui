#### Table

- [Ecommerce](#ecommerce) - [1. REQUIREMENTS](#1-requirements) - [2. TECHS](#2-techs) - [3. ENVS](#3-envs) - [4. STARTING](#4-starting)

# Ecommerce
https://ecommerce-ui-pi.vercel.app/

### 1. REQUIREMENTS

- [x] Should be mobile first.
- [x] Search and filters should update the products in the page.
- [x] Click add to cart should update sub total amount in top right button correctly.
- [x] Click add to cart should update the button itself for 2 seconds as in the design.
- [x] Shouldn't be any action on sub total button.
- [x] Pagination should work properly.

### 2. TECHS

- NextJS
- Prettier
- Eslint
- Styled Components
- React Icons
- StoryBook
- Husky
- Yarn
- Dato CMS

### 3. ENVS

| Name                                 | Value | Description              |
| ------------------------------------ | ----- | ------------------------ |
| NEXT_PUBLIC_API_TOKEN                | ...   | Dato CMS API TOKEN       |
| NEXT_PUBLIC_DATO_GRAPHQL_URL         | ...   | Dato Graphql URL         |
| NEXT_PUBLIC_DATO_GRAPHQL_URL_PREVIEW | ...   | Dato Graphql Preview URL |

### 4. STARTING

```bash
# Clone this project
$ git clone https://github.com/pedro-lucinda/ecommerce_ui

# Access
$ cd ecommerce_ui

# Install dependencies
$ yarn install

# Add Environment Variables on the root of the project
$ touch .env.local

# Run Project
$ yarn dev

# The server will initialize in the <http://localhost:3000>
```
