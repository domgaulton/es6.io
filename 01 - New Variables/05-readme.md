# Const vs Let

## Leading Opinions

### Mathias Binans
* Use `const` by default
* Use `let` only if rebinding (updating)
* Never use `var`

### Kyle Simpson
* Use `var` for top level scopes across many variables
* Use `let` for localised functions
* Refactor let to `const` after code is written and you're sure it won't be updated again