exports['e2e requests / passes'] = `

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    1.2.3                                                                              │
  │ Browser:    FooBrowser 88                                                                      │
  │ Specs:      1 found (request_spec.js)                                                          │
  │ Searched:   cypress/integration/request_spec.js                                                │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  request_spec.js                                                                 (1 of 1)


  redirects + requests
    ✓ gets and sets cookies from cy.request
    ✓ visits to a different superdomain will be resolved twice
    ✓ automatically follows redirects
    ✓ can turn off following redirects that set a cookie
    ✓ can turn off automatically following redirects
    ✓ follows all redirects even when they change methods
    ✓ can submit json body
    ✓ can submit form url encoded body
    ✓ can send qs query params
    ✓ passes even on non 2xx or 3xx status code
    ✓ sets Accept header to */* by default
    ✓ can override the accept header
    ✓ does not duplicate request cookies on 302 redirect
    ✓ can make requests that take more than \`responseTimeout\` to complete


  14 passing


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        14                                                                               │
  │ Passing:      14                                                                               │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     request_spec.js                                                                  │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: /XXX/XXX/XXX/cypress/videos/request_spec.js.mp4                 (X second)


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  request_spec.js                          XX:XX       14       14        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        XX:XX       14       14        -        -        -  


`

exports['e2e requests fails when network immediately fails 1'] = `

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    1.2.3                                                                              │
  │ Browser:    FooBrowser 88                                                                      │
  │ Specs:      1 found (request_http_network_error_failing_spec.js)                               │
  │ Searched:   cypress/integration/request_http_network_error_failing_spec.js                     │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  request_http_network_error_failing_spec.js                                      (1 of 1)


  when network connection cannot be established
    1) fails


  0 passing
  1 failing

  1) when network connection cannot be established
       fails:
     CypressError: \`cy.request()\` failed trying to load:

http://localhost:16795/

We attempted to make an http request to this URL but the request failed without a response.

We received this error at the network level:

  > Error: connect ECONNREFUSED 127.0.0.1:16795

-----------------------------------------------------------

The request we sent was:

Method: GET
URL: http://localhost:16795/

-----------------------------------------------------------

Common situations why this would fail:
  - you don't have internet access
  - you forgot to run / boot your web server
  - your web server isn't accessible
  - you have weird network configuration settings on your computer

https://on.cypress.io/request
      [stack trace lines]
  
  From Node.js Internals:
    RequestError: Error: connect ECONNREFUSED 127.0.0.1:16795
      [stack trace lines]
    




  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      0                                                                                │
  │ Failing:      1                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  1                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     request_http_network_error_failing_spec.js                                       │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Screenshots)

  -  /XXX/XXX/XXX/cypress/screenshots/request_http_network_error_failing_spec.js/when     (1280x720)
      network connection cannot be established -- fails (failed).png                                


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: /XXX/XXX/XXX/cypress/videos/request_http_network_error_fail     (X second)
                          ing_spec.js.mp4                                                           


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✖  request_http_network_error_failing_      XX:XX        1        -        1        -        - │
  │    spec.js                                                                                     │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✖  1 of 1 failed (100%)                     XX:XX        1        -        1        -        -  


`

exports['e2e requests fails on status code 1'] = `

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    1.2.3                                                                              │
  │ Browser:    FooBrowser 88                                                                      │
  │ Specs:      1 found (request_status_code_failing_spec.js)                                      │
  │ Searched:   cypress/integration/request_status_code_failing_spec.js                            │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  request_status_code_failing_spec.js                                             (1 of 1)


  when status code isnt 2xx or 3xx
    1) fails


  0 passing
  1 failing

  1) when status code isnt 2xx or 3xx
       fails:
     CypressError: \`cy.request()\` failed on:

http://localhost:2294/statusCode?code=503

The response we received from your web server was:

  > 503: Service Unavailable

This was considered a failure because the status code was not \`2xx\` or \`3xx\`.

If you do not want status codes to cause failures pass the option: \`failOnStatusCode: false\`

-----------------------------------------------------------

The request we sent was:

Method: GET
URL: http://localhost:2294/statusCode?code=503
Headers: {
  "Connection": "keep-alive",
  "user-agent": "foo",
  "accept": "*/*",
  "accept-encoding": "gzip, deflate"
}

-----------------------------------------------------------

The response we got was:

Status: 503 - Service Unavailable
Headers: {
  "x-powered-by": "Express",
  "content-type": "text/plain; charset=utf-8",
  "content-length": "19",
  "etag": "W/13-52060a5f",
  "date": "Fri, 18 Aug 2017    XX:XX GMT",
  "connection": "keep-alive"
}
Body: Service Unavailable


https://on.cypress.io/request
      [stack trace lines]




  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      0                                                                                │
  │ Failing:      1                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  1                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     request_status_code_failing_spec.js                                              │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Screenshots)

  -  /XXX/XXX/XXX/cypress/screenshots/request_status_code_failing_spec.js/when status     (1280x720)
      code isnt 2xx or 3xx -- fails (failed).png                                                    


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: /XXX/XXX/XXX/cypress/videos/request_status_code_failing_spe     (X second)
                          c.js.mp4                                                                  


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✖  request_status_code_failing_spec.js      XX:XX        1        -        1        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✖  1 of 1 failed (100%)                     XX:XX        1        -        1        -        -  


`

exports['e2e requests prints long http props on fail 1'] = `

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    1.2.3                                                                              │
  │ Browser:    FooBrowser 88                                                                      │
  │ Specs:      1 found (request_long_http_props_failing_spec.js)                                  │
  │ Searched:   cypress/integration/request_long_http_props_failing_spec.js                        │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  request_long_http_props_failing_spec.js                                         (1 of 1)


  when status code isnt 2xx or 3xx
    1) fails


  0 passing
  1 failing

  1) when status code isnt 2xx or 3xx
       fails:
     CypressError: \`cy.request()\` failed on:

http://localhost:2294/myreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallylong

The response we received from your web server was:

  > 404: Not Found

This was considered a failure because the status code was not \`2xx\` or \`3xx\`.

If you do not want status codes to cause failures pass the option: \`failOnStatusCode: false\`

-----------------------------------------------------------

The request we sent was:

Method: GET
URL: http://localhost:2294/myreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallylong
Headers: {
  "Connection": "keep-alive",
  "user-agent": "foo",
  "accept": "*/*",
  "accept-encoding": "gzip, deflate"
}

-----------------------------------------------------------

The response we got was:

Status: 404 - Not Found
Headers: {
  "x-powered-by": "Express",
  "content-security-policy": "default-src 'self'",
  "x-content-type-options": "nosniff",
  "content-type": "text/html; charset=utf-8",
  "content-length": "301",
  "date": "Fri, 18 Aug 2017    XX:XX GMT",
  "connection": "keep-alive"
}
Body: <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET /myreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallyreallylong</pre>
</body>
</html>

https://on.cypress.io/request
      [stack trace lines]




  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      0                                                                                │
  │ Failing:      1                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  1                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     request_long_http_props_failing_spec.js                                          │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Screenshots)

  -  /XXX/XXX/XXX/cypress/screenshots/request_long_http_props_failing_spec.js/when st     (1280x720)
     atus code isnt 2xx or 3xx -- fails (failed).png                                                


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: /XXX/XXX/XXX/cypress/videos/request_long_http_props_failing     (X second)
                          _spec.js.mp4                                                              


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✖  request_long_http_props_failing_spe      XX:XX        1        -        1        -        - │
  │    c.js                                                                                        │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✖  1 of 1 failed (100%)                     XX:XX        1        -        1        -        -  


`
