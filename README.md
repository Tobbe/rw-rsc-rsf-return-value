# Redwood RSC Demo 4

Repo demonstrating the RedwoodJS React Server Components implementation

This app shows calling a server function and receiving a return value

## How to run

`yarn install`

`yarn rw build -v && yarn rw serve`

## What to do

Look at Demo 2 first. This one builds on that one

1. Not using `mutate()` here, so the server won't force a refresh. Instead we
   update client state to update the UI.
2. Using `await` to wait for the server function to finish executing
3. Can also do a (hard) refresh of the page in the browser and notice how
   client side state (the client counter) is forgotten/reset but the server
   state is still the same as before refreshing. You could also do this in
   Demo 2, but I chose not to highlight it there.
