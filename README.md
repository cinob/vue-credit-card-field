# vue-credit-card-field-cinob

This repository is base on [vue-credit-card-field](https://github.com/actengage/vue-credit-card-field), Configurable `zip` options for `InlineCreditCardField` 

## Installation

#### NPM
    npm install vue-credit-card-field-cinob --save
#### YARN
    yarn add vue-credit-card-field-cinob

----

## Available Components

This repository contains multiple standalone components. You can import the component you want to use like so:

    import { CreditCardField, InlineCreditCardField } from 'vue-credit-card-field';
    
    export default {
        components: {
            CreditCardField,
            InlineCreditCardField
        }
    }

---

## CreditCardField

This is the standard credit card field. It has individual fields and not based on Stripe. Newer case studies suggest individual fields can give a better return. More studies show that only showing the fields that are relevant to no overwhelm the user and clutter the UI before the user as comitted will improve results. This field attempts to build on those principles.

![Basic Usage Example](screenshots/credit-card-field.gif)

    <CreditCardField v-model="card" />

---

## InlineCreditCardField

This field mimics Stripe's elements UI. It works well unless the space is too narrow and the fields start to overlap.

![Basic Usage Example](screenshots/basic-usage.gif)

![Error Handling Example](screenshots/error-handling.gif)

    <InlineCreditCardField :showZip="true" v-model="card" />

