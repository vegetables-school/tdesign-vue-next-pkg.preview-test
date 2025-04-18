---
title: Theme Customization
spline: explain
---

### Theme Customization with CSS Variables

TDesign's universal Design Tokens are declared using CSS Variables. We recommend using the method of replacing CSS Variables to customize the theme.

TDesign Provides 5 kinds of Design Token, including `colro`、`font`、`border-radius`、`box-shadow` and `size`, which can be covered in the project by declaring the CSS Variables

```CSS
/* Global */
--td-brand-color: orange;
--td-warning-color: yellow;
--td-error-color: red;
--td-success-color: green;

/* Component level, taking button as an example */
--td-button-primary-color: orange;
--td-button-light-color: yellow;
--td-button-danger-color: red;
```

Refer to [the complete TDesign Design Token](https://github.com/Tencent/tdesign-common/blob/develop/style/mobile/theme) here.

#### Use Theme Generator to customize CSS variables

<blockquote style="background-color: #d9e1ff; font-size: 15px; line-height: 26px;margin: 16px 0 0;padding: 16px; border-radius: 6px; color: #0052d9" >
<p>Tips: The official website of the mobile terminal is not yet connected to the `theme generator`. You can generate a CSS file locally through the desktop terminal. When importing the mobile terminal project, the usage method is the same as the desktop terminal.</p>
</blockquote>

Because there are many CSS variables involved, a more intuitive `theme generator` based on CSS variables is provided to help you quickly customize the theme you need. You can open our theme configuration generator by `clicking the floating button at the bottom of the official website`.

After configuring the theme CSS Variables you are satisfied with through the theme generator, please click `the download button`. We will export a new CSS file to your local computer. You only need to place the file in your project directory and import the CSS file in your project to get a TDesign with a brand new theme style.

### Using less Variables for fine-grained Customization of Components

If the project is implemented with the `less` technology stack and has more refined customization requirements for components, we have extracted most of the variables used in the component implementation process and provided them in the form of less variables.

```CSS
/* Button example */

@button-primary-color: var(--td-button-primary-color, @font-white-1);
@button-light-color: var(--td-button-light-color, @brand-color);
@button-danger-color: var(--td-button-danger-color, @font-white-1);

```

To modify these less variables, you need to import the component library ESM bundle:

```js
// tdesign-npm-name 替换为当前在使用的包名称
import TDesign from "tdesign-npm-name/esm";
// 引入组件库全局样式资源
import "tdesign-npm-name/esm/style/index.js";
```

Refer to [the documentation](https://github.com/Tencent/tdesign-common/blob/develop/develop-install.en-US.md) for the differences between bundles.

After that, you can modify the values of these variables in your project yourself.

```js
{
    loaderOptions: {
        less: {
            lessOptions: {
                modifyVars: {
                    '@brand-color': '#ebb105',
                },
                javascriptEnabled: true,
            },
        },
    }
}
```
