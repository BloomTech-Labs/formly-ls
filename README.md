# Formly Lambda School

## Projecct Description
 This app is built to be a form to collect data about prospective Lambda School Students. 
 
## Steps to install
  * `npm install`
  * `npm run build`

  * Windows:
    * navigate to your hosts file at `%systemroot%\system32\drivers\etc.`
    * add these to your hosts:
      * `127.0.0.1    localhost.test`
      * `127.0.0.1    apply.localhost.test`
    * `npm run dev-win` or `npm run devw`
    * naviagte to `localhost:3000`
    * or just go to `apply.localhost.test:3000` as you will be redirected there anyways
  * Linux/Mac
    * navigate to your hosts file at `/etc/hosts`
    * add these to your hosts:
      * `127.0.0.1    localhost.test`
      * `127.0.0.1    apply.localhost.test`
    * `npm run dev-unix` or `npm run devm` or `npm run devl`
    * naviagte to `localhost:3000`
    * or just go to `apply.localhost.test:3000` as you will be redirected there anyways

## Todo

  * add support for a date input
  * make `TextArea` match the one on [lambdaschool](https://lambdaschool.com/apply-cs)
  * make options position themselves correctly (ie) some options go on the same line, some go on their own line, some go in a grid
  * vertical align option button content
  * make buttons react correctly to being selected (ie) add check mark, flash border, change CharIcon background color
  * validate required fields on submit, focus first invalid field
  * add progress bar
  * post formdata
  * finish styling

## Materialize-React
 * [Docs](https://react-materialize.github.io/#/)
