#### Table

- [Ecommerce](#ecommerce) - [1. REQUIREMENTS](#1-requirements) - [2. TECHS](#2-techs) - [3. ENVS](#3-envs) - [4. STARTING](#4-starting)

# Ecommerce

### 1. REQUIREMENTS

- [ ] Should be mobile first.
- [ ] Search and filters should update the products in the page.
- [ ] Click add to cart should update sub total amount in top right button correctly.
- [ ] Click add to cart should show the notification “Added to cart successfully for 2 seconds.
- [ ] Click add to cart should update the button itself for 2 seconds as in the design.
- [ ] Shouldn't be any action on sub total button.
- [ ] Pagination should work properly.

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
$ git clone https://github.com/pedro-lucinda

# Access
$ cd

# Install dependencies
$ yarn install

# Run Husky
$ yarn prepare

# Run Project
$ yarn dev

# The server will initialize in the <http://localhost:3000>
```
