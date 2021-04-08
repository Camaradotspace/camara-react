---
title: Changelog
section: Getting Started
slug: /docs/changelog/
order: 5
---

# Changelog

`Camara` strictly follows [semantic versioning](https://semver.org/)

## Latest

### v1.0.0-beta.26 (Wed Apr 7, 2021)

- `Flex` component:
  - ❗ Breaking: `alignSelf` prop has been removed
  - ❗ Breaking: `flex` prop has been removed
- `Image` component:
  - ❗ Breaking: The image width is no longer explicitly defined. This property can be set by using the `width` prop

#### Authors: 1

- ᑭᖇᗴᔕᕼ ᗝᑎƳᗴᗴ ([@Preshonyee](https://github.com/Preshonyee))

---

### v1.0.0-beta.25 (Mon Apr 5, 2021)

- ❗ Breaking: `Layout` component has been removed
- ❗ Breaking: `Form` component has been removed
- ❗ Breaking: `TestComponent` component has been removed

#### Authors: 1

- ᑭᖇᗴᔕᕼ ᗝᑎƳᗴᗴ ([@Preshonyee](https://github.com/Preshonyee))

---

### v1.0.0-beta.24 (Mon Apr 5, 2021)

- `Flex` component:
  - 🆕 `direction` props sets the flex direction
  - 🆕 `alignContent` prop aligns the flex items across the cross axis
  - 🆕 `alignItems` prop sets the flex container align-items property
  - 🆕 `alignSelf` prop sets align-self property on the flex children
  - 🆕 `flex` prop sets the flex property on the flex children

#### Authors: 1

- ᑭᖇᗴᔕᕼ ᗝᑎƳᗴᗴ ([@Preshonyee](https://github.com/Preshonyee))

---

### v1.0.0-beta.23 (Sat Apr 3, 2021)

- `Spacer` component:
  - ❗ Breaking: all previous props have been removed.
  - 🆕 `bottom` prop sets the spacer at the bottom
  - 🆕 `top` prop sets the spacer at the top
  - 🆕 `both` prop sets the spacer at the vertical axis
  - 🆕 `children` prop sets the content of the spacer

#### Authors: 1

- ᑭᖇᗴᔕᕼ ᗝᑎƳᗴᗴ ([@Preshonyee](https://github.com/Preshonyee))

---

### v1.0.0-beta.22 (Sat Apr 3, 2021)

- `Box` component:
  - 🆕 `height` prop sets the height of the box.
  - 🆕 `color` prop sets the background color of the box
  - 🆕 `overflow` prop sets the overflow property of the box
  - 🆕 `border` prop sets border property of the box.
  - 🆕 `position` prop sets the position property of the box.
  - 🆕 `minWidth` prop sets the minimum width of the box.
  - 🆕 `minHeight` prop sets the minimum height of the box.
  - 🆕 `maxWidth` prop sets the maximum width of the box.
  - 🆕 `maxHeight` prop sets the maximum height of the box.
  - 🆕 `role` prop sets the ARIA role of the box.
  - 🆕 `pt` prop sets the `padding-top` property of the box.
  - 🆕 `pb` prop sets the `padding-bottom` property of the box.
  - 🆕 `pl` prop sets the `padding-left` property of the box.
  - 🆕 `pr` prop sets the `padding-right` property of the box.
  - 🆕 `px` prop sets the `horizontal padding` property of the box.
  - 🆕 `py` prop sets the `vertical padding` property of the box.
  - 🆕 `pd` prop sets the `all axis padding` property of the box.
  - 🆕 `mt` prop sets the `margin-top` property of the box.
  - 🆕 `mb` prop sets the `margin-bottom` property of the box.
  - 🆕 `ml` prop sets the `margin-left` property of the box.
  - 🆕 `mr` prop sets the `margin-right` property of the box.
  - 🆕 `mx` prop sets the `horizontal margin` property of the box.
  - 🆕 `my` prop sets the `vertical margin` property of the box.
  - 🆕 `mg` prop sets the `all axis margin` property of the box.

#### Authors: 1

- ᑭᖇᗴᔕᕼ ᗝᑎƳᗴᗴ ([@Preshonyee](https://github.com/Preshonyee))

---

### v1.0.0-beta.21 (Sat Apr 3, 2021)

- `TextArea` component:
  - ✨ `type` prop is no longer required

#### Authors: 1

- ᑭᖇᗴᔕᕼ ᗝᑎƳᗴᗴ ([@Preshonyee](https://github.com/Preshonyee))

---

### v1.0.0-beta.20 (Sat Apr 3, 2021)

- `TextArea` component:
  - ❗ Breaking: `value` prop has been removed and deprecated.
  - ❗ Breaking: `cols` prop has been removed and deprecated.
  - ❗ Breaking: `form_id` prop has been removed and deprecated.
  - 🆕 `label` prop sets the textarea label.
  - 🆕 `name` prop sets name of the textarea
  - 🆕 `helperText` prop allows for adding additional context to textarea fields.
  - 🆕 `resizable` prop sets if the textarea is drag

#### Authors: 1

- ᑭᖇᗴᔕᕼ ᗝᑎƳᗴᗴ ([@Preshonyee](https://github.com/Preshonyee))

---

### v1.0.0-beta.19 (Fri Apr 2, 2021)

- `Anchor` component:
  - ❗ Breaking: `color` prop has been removed and deprecated.
  - 🆕 `href` prop sets the link destination URL.
  - 🆕 `asNew` prop sets the option to open link in new tab

#### Authors: 1

- ᑭᖇᗴᔕᕼ ᗝᑎƳᗴᗴ ([@Preshonyee](https://github.com/Preshonyee))

---

### v1.0.0-beta.18 (Fri Apr 2, 2021)

- `Input` component:
  - ❗ Breaking: remove `validator` support, this should not be taken care of by the library.
  - ❗ Breaking: trim input type. `type` prop now only accepts 4 values - 'email', 'number', 'password', 'text'.
  - ❗ Breaking: remove `id`, `value`, `htmlFor`, `validators`, and `onChange` props. All this should be taken care of with default HTML input attributes.
  - 🆕 `helperText` prop allows for adding additional context to input fields.
  - 🆕 `inline` prop sets how the input should be displayed
  - ✨ position of the `required` indicator has been moved to prefix the input fields.
  - ✨ clean up component default props

#### Authors: 1

- ᑭᖇᗴᔕᕼ ᗝᑎƳᗴᗴ ([@Preshonyee](https://github.com/Preshonyee))

---

### v1.0.0-beta.17 (Fri Apr 2, 2021)

- `Tag` component:

  - ✨ fix reduce scale of `size` prop
  - 🆕 `children` prop to set content of tag

#### Authors: 1

- ᑭᖇᗴᔕᕼ ᗝᑎƳᗴᗴ ([@Preshonyee](https://github.com/Preshonyee))

---

### v1.0.0-beta.16 (Fri Apr 2, 2021)

- `Text` component:

  - 🆕 `weight` prop sets the font-weight
  - 🆕 `italic` prop sets the font style to italic
  - 🆕 `inline` prop sets the text on the same line in relation to its parent
  - 🆕 `align` prop sets the alignment of the text
  - 🆕 `underline` prop sets the text format to underline
  - 🆕 `size` prop sets the size of the text
  - 🆕 `strike` prop sets the text format to strike-through
  - 🆕 `style` prop sets the CSS properties for the text component

#### Authors: 1

- ᑭᖇᗴᔕᕼ ᗝᑎƳᗴᗴ ([@Preshonyee](https://github.com/Preshonyee))

---

### v1.0.0-beta.15 (Fri Apr 2, 2021)

- `Image` component:

  - ❗ Breaking: `imageUrl` and `imageAlt` props are now required by default. Prior imports of the `Image` component that didn't define this props would break.

- Update `Card` component stories

#### Authors: 1

- ᑭᖇᗴᔕᕼ ᗝᑎƳᗴᗴ ([@Preshonyee](https://github.com/Preshonyee))

---

### v1.0.0-beta.14 (Fri Apr 2, 2021)

- `Title` component:

  - ❗ Breaking: `Title` component is no longer exported from `Text`, it's now a standalone component. Import it from `Title`.
  - 🆕 `align` prop sets the text-align property of the title component

#### Authors: 1

- ᑭᖇᗴᔕᕼ ᗝᑎƳᗴᗴ ([@Preshonyee](https://github.com/Preshonyee))

---

### v1.0.0-beta.13 (Fri Apr 2, 2021)

- `Card` component:

  - ❗ Breaking: all padding related props are now removed and deprecated.
  - ❗ Breaking: `width` and `height` props are now of the string type. This helps to make setting their values very flexible.
  - 🆕 `bordered` prop sets border on the card component
  - 🆕 `children` prop controls the card contents

#### Authors: 1

- ᑭᖇᗴᔕᕼ ᗝᑎƳᗴᗴ ([@Preshonyee](https://github.com/Preshonyee))

---

### v1.0.0-beta.12 (Wed Mar 31, 2021)

- `Image` component:

  - ❗ Breaking: `imageURL` prop is now renamed to `imageUrl`, both still work the same way. It's simply a name change.
  - ❗ Breaking: `width` prop is removed and deprecated. Setting the image width can be set with default image HTML width attribute.
  - 🆕 `imageAlt` prop sets the description of the image
  - 🆕 `loading` prop controls if the image should be deferred when its off the screen
  - 🆕 `fit` prop sets the image object-fit property

#### Authors: 1

- ᑭᖇᗴᔕᕼ ᗝᑎƳᗴᗴ ([@Preshonyee](https://github.com/Preshonyee))

---

### v1.0.0-beta.11 (Tue Mar 30, 2021)

- `Badge` component:
  - 🆕 `color` prop sets the color of the badge text
  - 🆕 `text` prop sets the text of the badge
  - 🆕 `shape` prop sets the shape of the badge
  - 🆕 `position` prop sets the position of the badge relative to the parent element
  - ✨ `default` option of `size` prop has been replaced with `medium`.

#### Authors: 1

- ᑭᖇᗴᔕᕼ ᗝᑎƳᗴᗴ ([@Preshonyee](https://github.com/Preshonyee))

---

### v1.0.0-beta.10 (Mon Mar 29, 2021)

- `Avatar` component:
  - 🆕 `imageAlt` prop allows for adding alternative text to describe the avatar image.
  - 🆕 `username` prop sets a the initials when an initial is to be used.
  - 🆕 `color` prop sets the color of the initials
  - 🆕 `icon` prop sets a custom icon for the avatar.
  - 🆕 `shape` prop determines the shape of the avatar.
  - 🆕 `fit` prop sets the `object-fit` property of the avatar.
  - 🆕 `initialsSize` prop sets the font size of the initials text.
  - ✨ `size` prop now accepts numbers.
  - ✨ `backgroundColor` prop now works for `initials` and `icon` avatar too

#### Authors: 1

- ᑭᖇᗴᔕᕼ ᗝᑎƳᗴᗴ ([@Preshonyee](https://github.com/Preshonyee))

---

### v1.0.0-beta.9 (Sat Mar 27, 2021)

A change has been made to how the project gets updated. Going forward every new `beta` version is going to focus solely on a single component and try to improve on the component across its Storybook stories, docs, test, and real-world usage. This way I can move incrementally while knowing that I are thinking about each component in a comprehensive manner.

- `Button` component:
  - ❌ remove `primary` prop option for setting the type of button.
  - 🆕 `variant` prop is now used for setting the type of button from `primary`, `secondary` or `ghost`.
  - ✨ `size` prop now updated with `large`, `small` and `medium` options.
  - 🆕 `block` prop sets the option to fit button width to the full width of the parent
  - 🆕 `loading` prop add a loading spinner indicator to be used when users have to wait for the result of their action after pressing a button.
  - 🆕 `disabled` prop adds a visual indicator that a button is not interactive and restricts it from being pressed.
  - 🆕 `danger` prop adds a visual indicator that the button action is destructive and irreversible in some case
  - ❌ remove `orientation` prop.
  - ✨ rename `rounded` prop to `pill` to accurately describe the button shape
  - ✨ hover, active and focused state has been improved.

#### Authors: 1

- ᑭᖇᗴᔕᕼ ᗝᑎƳᗴᗴ ([@Preshonyee](https://github.com/Preshonyee))

---

### v1.0.0-beta.8 (Thur Feb 04, 2021)

- minor package update

#### Authors: 1

- ᑭᖇᗴᔕᕼ ᗝᑎƳᗴᗴ ([@Preshonyee](https://github.com/Preshonyee))

---

### v1.0.0-beta.7 (Wed Feb 03, 2021)

- minor package update

#### Authors: 1

- ᑭᖇᗴᔕᕼ ᗝᑎƳᗴᗴ ([@Preshonyee](https://github.com/Preshonyee))

---

### v1.0.0-beta.6 (Wed Feb 03, 2021)

Rebuild from the ground-up. This changes everything!!!

- The previous bundler cli `microbundle` had a lot of issues with generating typescript definitions and wasn't flexible for me to modify its behavior.  
  After loads of inconsistencies and mess I had to rewrite the core library to make use of rollup directly.
  This has made bundling the library much more solid and consistent than before. A lot has changed, I had to touch every single file but somehow keep the same APIs for each components.
  This lays a much more solid foundation for future version of Camara

#### Authors: 1

- ᑭᖇᗴᔕᕼ ᗝᑎƳᗴᗴ ([@Preshonyee](https://github.com/Preshonyee))

---

### v1.0.0-beta.5 (Tue Feb 02, 2021)

- 🔼 minor version bump
- ❌ remove GitHub actions workflow file
- ❓ still debugging declaration file issue

#### Authors: 1

- ᑭᖇᗴᔕᕼ ᗝᑎƳᗴᗴ ([@Preshonyee](https://github.com/Preshonyee))

---

### v1.0.0-beta.4 (Tue Feb 02, 2021)

- BREAKING:
  - ❗ `avatar` size prop now takes in predefined values as against number input
- ✨ refactored project dependencies and configs
- 🚀 fix continuous integration with `auto`
- 🐛 `Camara` no longer bundles the `stories` and `playground` folder on build

#### Authors: 1

- ᑭᖇᗴᔕᕼ ᗝᑎƳᗴᗴ ([@Preshonyee](https://github.com/Preshonyee))

---

### v1.0.0-beta.3 (Tue Feb 02, 2021)

- 🆕 changed the way components are bundled and exported
- ❌ removed `colors` as package dependency
- ❌ removed `polished` as package dependency
- ❌ removed support for bundling `css-modules`
- 🚀 updated rollup configs

#### Authors: 1

- ᑭᖇᗴᔕᕼ ᗝᑎƳᗴᗴ ([@Preshonyee](https://github.com/Preshonyee))

---

### v1.0.0-beta.2 (Fri Jan 29, 2021)

- 🆕 `image` component. This works differently from the `avatar` component
- 💄 Update `$black100` color token to lighter shade of black
- Avatar
  - 🆕 Add prop `stories` for `avatar` component. This gives the Instagram-like avatar look and feel
  - ⚡ `imageUrl` default props now switches to Unsplash and replaces Picsum.photos
- Flex
  - 🆕 Add prop `justify` for setting flex alignment properties
  - 🆕 Add prop `wrap` for setting wrap property on flex items
  - 🆕 Add prop `width` to set width property on flex container
- Text
  - 💄 default margins have been updated for `BodyText` component
- Title
  - 🆕 Add prop `color` to set color property dynamically

#### Authors: 1

- ᑭᖇᗴᔕᕼ ᗝᑎƳᗴᗴ ([@Preshonyee](https://github.com/Preshonyee))

---

### v1.0.0-beta.1 (Thur Jan 28, 2021)

- new:

  - Camara moves into `beta` and follows more strict semantic versioning
  - New layout related components `flex`, `spacer` and `box` added
  - added typescript type definitions for styled-components
  - `text` component has a new variant 'strong'
  - `title` component has a new prop 'thin'

- improved:
  - improved CSS global reset, resetting is much broader now and targets more elements
  - `avatar` component has better defaults
  - height, padding and line-height of `button` component is removed

#### Authors: 1

- ᑭᖇᗴᔕᕼ ᗝᑎƳᗴᗴ ([@Preshonyee](https://github.com/Preshonyee))

---

### v0.2.0 (Sun Nov 8, 2020)

- new:

  - switched from `stitches.js` to `styled-components` for styling library
  - `button` component
  - `badge` component
  - `divider` component
  - `card` component
  - `link` component
  - `avatar` component
  - `input` component
  - `textarea` component
  - `layout` component
  - `tag` component
  - `text` component
  - add component generator utility

- improved:
  - improved support for `eslint`, `prettier` and `typescript`

#### Authors: 1

- ᑭᖇᗴᔕᕼ ᗝᑎƳᗴᗴ ([@Preshonyee](https://github.com/Preshonyee))

---

### v0.1.0 (Tue Oct 27, 2020)

- new:

  - (chore): library setup
  - add support for airbnb `eslint` and `prettier` style guide
  - add support for `storybookjs`

#### Authors: 1

- ᑭᖇᗴᔕᕼ ᗝᑎƳᗴᗴ ([@Preshonyee](https://github.com/Preshonyee))

---

### v0.1.11 (Tue Sep 29 2020)

🐛 Bug Fix

- feat(components): update typography APIs [#4](https://github.com/Camaradotspace/camara-react/pull/4) ([@Preshonyee](https://github.com/Preshonyee))

#### Authors: 1

- ᑭᖇᗴᔕᕼ ᗝᑎƳᗴᗴ ([@Preshonyee](https://github.com/Preshonyee))

---

### v0.1.10 (Sun Sep 27 2020)

⚠️ Pushed to `master`

- create pull request template ([@Preshonyee](https://github.com/Preshonyee))

#### Authors: 1

- ᑭᖇᗴᔕᕼ ᗝᑎƳᗴᗴ ([@Preshonyee](https://github.com/Preshonyee))

---

### v0.1.9 (Sun Sep 27 2020)

⚠️ Pushed to `master`

- Update issue templates ([@Preshonyee](https://github.com/Preshonyee))

#### Authors: 1

- ᑭᖇᗴᔕᕼ ᗝᑎƳᗴᗴ ([@Preshonyee](https://github.com/Preshonyee))

---

### v0.1.8 (Fri Sep 25 2020)

🐛 Bug Fix

- resolve merge conflicts [#3](https://github.com/Camaradotspace/camara-react/pull/3) ([@Preshonyee](https://github.com/Preshonyee))
  ⚠️ Pushed to `master`

- Merge branch 'components-typography/preshonyee' into master ([@Preshonyee](https://github.com/Preshonyee))

#### Authors: 1

- ᑭᖇᗴᔕᕼ ᗝᑎƳᗴᗴ ([@Preshonyee](https://github.com/Preshonyee))

---

### v0.1.7 (Fri Sep 25 2020)

⚠️ Pushed to `master`

- Merge branch 'master' of [](https://github.com/Camaradotspace/camara-react) into master ([@Preshonyee](https://github.com/Preshonyee))
- chore: upgrade packages ([@Preshonyee](https://github.com/Preshonyee))

#### Authors: 1

- ᑭᖇᗴᔕᕼ ᗝᑎƳᗴᗴ ([@Preshonyee](https://github.com/Preshonyee))

---

### v0.1.6 (Fri Sep 25 2020)

⚠️ Pushed to `master`

- chore: update packages ([@Preshonyee](https://github.com/Preshonyee))

#### Authors: 1

- ᑭᖇᗴᔕᕼ ᗝᑎƳᗴᗴ ([@Preshonyee](https://github.com/Preshonyee))

---

### v0.1.5 (Mon Sep 07 2020)

🐛 Bug Fix

- resolve merge confict [#2](https://github.com/Camaradotspace/camara-react/pull/2) ([@Preshonyee](https://github.com/Preshonyee))
  ⚠️ Pushed to `master`

- Merge branch 'alpha' ([@Preshonyee](https://github.com/Preshonyee))

#### Authors: 1

- ᑭᖇᗴᔕᕼ ᗝᑎƳᗴᗴ ([@Preshonyee](https://github.com/Preshonyee))

---

### v0.1.4 (Sun Sep 06 2020)

🐛 Bug Fix

- Merge conflict resolved [#1](https://github.com/Camaradotspace/camara-react/pull/1) ([@Preshonyee](https://github.com/Preshonyee))
  ⚠️ Pushed to `master`

- fix(config): reinstall packages ([@Preshonyee](https://github.com/Preshonyee))
- fix(config): fix auto release script ([@Preshonyee](https://github.com/Preshonyee))
- fix(config): update lock file ([@Preshonyee](https://github.com/Preshonyee))
- Merge branch 'alpha' ([@Preshonyee](https://github.com/Preshonyee))

#### Authors: 1

- ᑭᖇᗴᔕᕼ ᗝᑎƳᗴᗴ ([@Preshonyee](https://github.com/Preshonyee))

---

### v0.1.3 (Sat Sep 05 2020)

⚠️ Pushed to `master`

- Merge branch 'master' of [](https://github.com/Camaradotspace/camara-react) ([@Preshonyee](https://github.com/Preshonyee))
- Revert "feat(components): add image rendering and loading state to avatar" ([@Preshonyee](https://github.com/Preshonyee))
- fix(config): fix bundle watch issues ([@Preshonyee](https://github.com/Preshonyee))
- fix(config): reinstall packages ([@Preshonyee](https://github.com/Preshonyee))
- fix(config): reinstall packages ([@Preshonyee](https://github.com/Preshonyee))

#### Authors: 1

- ᑭᖇᗴᔕᕼ ᗝᑎƳᗴᗴ ([@Preshonyee](https://github.com/Preshonyee))

---

### v0.1.2 (Thu Sep 03 2020)

⚠️ Pushed to `master`

- testing ci/cd for storybook ([@Preshonyee](https://github.com/Preshonyee))
- testing automating the setups and bullet-proofing it.

#### Authors: 1

- ᑭᖇᗴᔕᕼ ᗝᑎƳᗴᗴ ([@Preshonyee](https://github.com/Preshonyee))

---

### v0.1.1 (Thu Sep 03 2020)

- Created first version of the design system with `Avatar` and `Button` components

#### Authors: 1

- ᑭᖇᗴᔕᕼ ᗝᑎƳᗴᗴ ([@Preshonyee](https://github.com/Preshonyee))

---
