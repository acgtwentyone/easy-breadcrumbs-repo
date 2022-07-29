# React Native Breadcrumbs

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/acgtwentyone/easy-breadcrumbs-repo#readme)&nbsp;&nbsp;![GitHub repo size](https://img.shields.io/github/repo-size/acgtwentyone/easy-breadcrumbs-repo)&nbsp;&nbsp;![GitHub issues](https://img.shields.io/github/issues-raw/acgtwentyone/easy-breadcrumbs-repo)&nbsp;&nbsp;![GitHub last commit](https://img.shields.io/github/last-commit/acgtwentyone/easy-breadcrumbs-repo)

Android / ios package to create customizable breadcrumbs to use in react native projects.

Breadcrumbs made easy. Usefull for exemple, let's say we are using this library to create a breadcrumbs to navigate between folders.

## Install
Make sure you have [node](https://nodejs.org/en/) and instaled globaly. Open your terminal and then type the following command

```
npm i react-native-easy-breadcrumbs
```

## Usage

Import this module:
```javascript
import { Crumb, EasyBreadcrumb } from 'react-native-easy-breadcrumbs'
```

Use as a component
``` javascript
// initial crumb items, he we set one item, feel free to initialize it with more itens
const [crumbs, setCrumbs] = useState([
    { id: 0, title: 'Root' }
])

// initial selected crumbs, must be one crumb item
const [selectedCrumb, setSelectedCrumb] = useState<Crumb>({
    id: 0,
    title: 'Root',
})

// on crumb press event handler
const __onCrumbPress = (crumb: Crumb) => {
    console.log(crumb.id)
    // console.log('Selected', `Crumb ${crumb.title} selected`)
}

// your crumbs component call
<EasyBreadcrumb
    crumbs={crumbs}
    setCrumbs={setCrumbs}
    selectedCrumb={selectedCrumb}
    setSelectedCrumb={setSelectedCrumb}
    onCrumbPress={(crumb) => __onCrumbPress(crumb)}
/>
```

Please check the example folder.

## API
Here is the customization properties you may use in order to customize your breadcrumb. There is brief description of prop, type, option, and description 

| prop                        | type          | description                                                                 |
| --------------------------- |:-------------:|:----------------------------------------------------------------------------|
| flatlist                    | boolean       | if to use flatlist to show crumbs. default to true                          |
| horizontal                  | boolean       | if to use flatlist horizontally                                             |
| crumbs                      | array         | array of crumb items                                                        |
| onCrumbPress                | function      | callback when crumb is pressed                                              |
| containerStyle              | object        | crumb container style                                                       |
| selectedCrumbTextStyle      | object        | selected cumb text style                                                    |
| selectedCrumbItemStyle      | object        | selected crumb container style                                              |
| selectedCrumbStyle          | object        | outside crumb container style (applied to the touchable opacity component)  |
| selectedCrumb               | object        | selected crumb                                                              |
| setCrumbs                   | function      | function to update crumbs or set crumbs                                     |
| setSelectedCrumb            | function      | function to set selected crumb                                              |
| unselectedCrumbStyle        | object        | style to be applied to all not selected crumbs container                    |
| unselectedCrumbItemStyle    | object        | style to be applied to all not selected crumbs item container               |
| unselectedCrumbTextStyle    | object        | style to be applied to all not selected crumbs text                         |
| contentContainerStyle       | object        | flatlist content style                                                      |
| flatlistProps               | object        | style to override over flatlist                                             |


## Maintainers

[@acgtwentyone](https://github.com/acgtwentyone)

## Contributing

See the [contributing file](https://github.com/acgtwentyone/easy-breadcrumbs-repo/blob/main/CONTRIBUTING.md)!

## Community
This package is open source. Please read the [code-of-conduting](https://github.com/acgtwentyone/easy-breadcrumbs-repo/blob/main/CODE_OF_CONDUCT.md)

Small note: If editing the README, please conform to the [standard-readme](https://github.com/acgtwentyone/easy-breadcrumbs-repo#readme) specification.

## License

[MIT](https://github.com/acgtwentyone/easy-breadcrumbs-repo/blob/main/LICENSE) © 2021 Antonio Goncalves
