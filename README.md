# react-native-easy-breadcrumbs

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/acgtwentyone/easy-breadcrumbs-repo#readme)

Android / ios package to create customizable breadcrumbs to use in react native projects

No need to re-invent the wheel. Its already been done. Just use it and take advantage of open source projects.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Install
Make sure you have [node](https://nodejs.org/en/) and instaled globaly. And just run this command

```
npm i react-native-easy-breadcrumbs
```

## Usage

Import this module:
```
import { Crumb, EasyBreadcrumb } from 'react-native-easy-breadcrumbs'
```

Use as a component
```
const [crumbs, setCrumbs] = useState([
    { id: 0, title: 'Root' }
])
const [selectedCrumb, setSelectedCrumb] = useState<Crumb>({
    id: 0,
    title: 'Root',
})

<EasyBreadcrumb
    crumbs={crumbs}
    setCrumbs={setCrumbs}
    selectedCrumb={selectedCrumb}
    setSelectedCrumb={setSelectedCrumb}
    onCrumbPress={(crumb) => __onCrumbPress(crumb)}
/>
```

#### for concrete example, please check the example folder in this repo

## API
Here is the customization properties you may use in order to customize your breadcrumb. There is brief description of prop, type, option, and description 

| prop                        | type          | description                                                                 |
| --------------------------- |:-------------:|:----------------------------------------------------------------------------|
| chevron                     | boolean       | if to show chevron icon near of the crumb text. default to true             |
| chevronStyle                | object        | style of the chevron icon (applied to the react native image)               |
| crumbs                      | array         | array of crumb items                                                        |
| onCrumbPress                | function      | callback when crumb is pressed                                              |
| containerStyle              | object        | crumb container style                                                       |
| selectedCrumbTextStyle      | object        | selected cumb text style                                                    |
| chevronWidth                | number        | chevron width (chevron image width)                                         |
| chevronHeight               | number        | chevron height (chevron image height)                                       |
| selectedCrumbItemStyle      | object        | selected crumb container style                                              |
| selectedCrumbStyle          | object        | outside crumb container style (applied to the touchable opacity component)  |
| selectedCrumb               | object        | selected crumb                                                              |
| setCrumbs                   | function      | function to update crumbs or set crumbs                                     |
| setSelectedCrumb            | function      | function to set selected crumb                                              |
| scrollable                  | boolean       | if crumbs container is scrollable. default to true                          |
| unselectedCrumbStyle        | object        | style to be applied to all not selected crumbs container                    |
| unselectedCrumbItemStyle    | object        | style to be applied to all not selected crumbs item container               |
| unselectedCrumbTextStyle    | object        | style to be applied to all not selected crumbs text                         |


## Maintainers

[@acgtwentyone@gmail.com](https://github.com/acgtwentyone)

## Contributing

See [the contributing file](contributing.md)!

PRs accepted.

Small note: If editing the README, please conform to the [standard-readme](https://github.com/acgtwentyone/easy-breadcrumbs-repo/blob/main/LICENSE) specification.

## License

MIT © 2021 Antonio Goncalves
