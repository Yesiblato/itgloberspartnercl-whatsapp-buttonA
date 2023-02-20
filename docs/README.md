# WHATSAPP BUTTON COMPONENT

![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)

This is a custom component that allows you to connect customers with a personalized service through the WhatsApp application.

In this component we worked with the following technologies:

- Vtex.
- React.
- Typescript.
- TACHYONS - Css Toolkit.

## Component's images.

![whatsapp button](https://user-images.githubusercontent.com/87024446/219828772-4041cd17-78b9-497c-afa5-112809770905.JPG)

![Whatsapp store](https://user-images.githubusercontent.com/87024446/220191543-f6babd5a-a691-4e7b-aa88-3c9e30866ef0.png)

## Configuration 

### Step 1 - Clone.

Cloning the following repository:

- [Repository](https://github.com/Yesiblato/itgloberspartnercl-whatsapp-buttonA)

### Step 2 - Edit the Manifest.json.

Enter the manifest.json file and make the following changes to: `vendor`, `name`, `version`, `title` and `description`
as shown in the following example:

```js
{
  "vendor": "itgloberspartnercl",
  "name": "whatsapp-button",
  "version": "0.0.1",
  "title": "WhatsApp Button Component",
  "description": "Botón de componente para whatsApp que recibirá un teléfono, un logo y un mensaje",
}
```
Also, check that the file has the following builders:

```js
  "builders": {
    "react": "3.x",
    "messages": "1.x",
    "docs": "0.x",
    "store": "0.x"
  }
```
### Step 3 - Install node-modules.

To carry out this installation of Node-Modules, it must be located in the `react` folder of the application and execute the `yarn` command, and will have all the necessary units to use this template installed.

### Step 4 - Execute the preview.

After performing the previous steps you can verify if its component is running by running the `Vtex Link` command if everything works correctly should see in` Sending locale change event`.

If the console shows any error, please verify the previous steps and re -execute `vtex link`.

### Step 5 - Deploy the component

Finally, to use the component you must add it to the `dependencies` in the `manifest.json` of your store (store-theme) as follows:

- vendor.name : version. 

For example:
```js
  "dependencies": {
    "itgloberspartnercl.whatsapp-button": "0.x",
  }
```
And add the whatsapp-button block to the store-theme. For example:

```js
{
  "whatsapp-button": {
    "props": {
      "logo": "assets/img/whatsapp-logo.png",
      "phone": "3125661727",
      "message": "Adidas Store",
      "width":"100px",
      "height":"100px"
    }
  }
}
```

## Whatsapp-button props.

| Prop name    | Type            | Description                                                                               | Default value    |
| ------------ | --------------- | ----------------------------------------------------------------------------------------- | ---------------- | 
| `logo`       | `String`        | Define the url of the image that will be used for the whatsapp button                     | `undefined` |
| `phone`      | `String`        | Defines the WhatsApp number that the store uses to provide customer  service              | `3125661727` |
| `message`    | `String`        | Define the welcome message that the client will see when entering the WhatsApp chat       | `Adidas store` |
| `width`      | `Number`        | Define the width of the button                                                            | `70px` |
| `height`     | `Number`        | Define the height of the button                                                           | `70px` |


## Contributors ✨

Yesica Johana Blanco Torregrosa
