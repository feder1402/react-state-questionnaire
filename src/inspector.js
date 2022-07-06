// Enables xstate state machine inspector for debugging
// See https://xstate.js.org/docs/packages/xstate-inspect/

import {inspect} from "@xstate/inspect";

var url = new URL(window.location.href);
var params = new URLSearchParams(url.search);
var debug = params.get("debug");

if (process.env.NODE_ENV === "development" && debug) {
  if(debug === "true") {
    inspect({iframe: false});
  }
}

