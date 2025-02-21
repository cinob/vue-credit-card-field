<template>
    <div id="app" class="container">
        <h1>inline-credit-card-field</h1>

        <h3>Overview</h3>

        <p>
            This component is meant to be a standalone Vue component that mimics the UX
            of the Stripe.js credit card field without using an iframe AND is compatible
            with Boostrap v4. This component is no way meant to replace Stripe.js if you
            are already using it.
        </p>

        <h3>Basic Usage</h3>

        <inline-credit-card-field v-model="card"></inline-credit-card-field>

        <p>
            The field works like most input fields and will update the model reactively.
            The card is represent as an object with various properties associated with
            the input.
        </p>

        <div class="alert alert-info">
            {{ card }}
        </div>

        <hr>

        <h3>Responsive Container</h3>

        <div class="row">
            <div class="col-sm-3">
                <inline-credit-card-field v-model="card"></inline-credit-card-field>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4">
                <inline-credit-card-field v-model="card"></inline-credit-card-field>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-5">
                <inline-credit-card-field v-model="card"></inline-credit-card-field>
            </div>
        </div>

        <hr>

        <h3>Sizes</h3>

        <inline-credit-card-field size="sm"></inline-credit-card-field>
        <inline-credit-card-field size="md"></inline-credit-card-field>
        <inline-credit-card-field size="lg"></inline-credit-card-field>

        <hr>

        <h3>Activity Indicator</h3>

        <inline-credit-card-field :activity="showActivity"></inline-credit-card-field>

        <button v-if="!showActivity" class="btn btn-primary" @click="showActivity = true">Show Activity</button>
        <button v-if="showActivity" class="btn btn-danger" @click="showActivity = false">Hide Activity</button>

        <hr>

        <h3>Error Handling</h3>

        <p>
            You will most likely be do some processing on the backend to send the
            information gathered to the server that will inevitable result in an
            error of some kind. Errors can be passed in two ways: string or object.
        </p>

        <h4>String</h4>

        <inline-credit-card-field error="Pass an error back from the server..."></inline-credit-card-field>

        <h4>Object</h4>

        <p>
            Notice, if you pass an object of errors, the name attribute is required to
            mark which key/value pair to use. An error may be a string or an array of
            strings.
        </p>

        <inline-credit-card-field name="credit_card" :errors="{'credit_card': ['This is error #1', 'This is error #2']}"></inline-credit-card-field>

        <hr>

        <h3>Events Callbacks</h3>

        <p>
            Use the event callbacks to generate a card token, add additional error handling,
            or to send the card data for processing.
        </p>

        <inline-credit-card-field
            @change="lastChangeEvent = $event"
            @valid="lastValidEvent = $event"
            @invalid="lastInvalidEvent = $event"
            @complete="lastCompleteEvent = $event">
        </inline-credit-card-field>

        <div v-if="lastChangeEvent" class="alert alert-warning">
            Card Change Event: {{ lastChangeEvent }}
        </div>

        <div v-if="lastInvalidEvent" class="alert alert-danger">
            Card Invalid Event: {{ lastInvalidEvent }}
        </div>

        <div v-if="lastValidEvent" class="alert alert-info">
            Card Valid Event: {{ lastValidEvent }}
        </div>

        <div v-if="lastCompleteEvent" class="alert alert-success">
            Card Complete Event: {{ lastCompleteEvent }}
        </div>
    </div>
</template>

<script>
import InlineCreditCardField from '../src/Components/InlineCreditCardField'

export default {

  components: {
    InlineCreditCardField
  },

  data () {
    return {
      card: {},
      showActivity: false,
      lastChangeEvent: null,
      lastValidEvent: null,
      lastInvalidEvent: null,
      lastCompleteEvent: null
    }
  }

}
</script>
