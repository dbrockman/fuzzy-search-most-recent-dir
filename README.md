# fuzzy-search-most-recent-dir

[![Greenkeeper badge](https://badges.greenkeeper.io/dbrockman/fuzzy-search-most-recent-dir.svg)](https://greenkeeper.io/)

Print the name of the most recently modified directory that matches a fuzzy search

## Usage

```sh
fuzzy-search-most-recent-dir <directory> <fuzzy-search-pattern>
```

## Purpose

I wanted a fast way to `cd` between different projects.
The `cdd` function below jumps to the most recently modified project directory that matches the fuzzy search.
For example `cdd featfla` would `cd` directly to the _feature-flag-api_ directory.
`cdd` without any search pattern will `cd` to the most recently modified project.

```sh
cdd() {
  cd `fuzzy-search-most-recent-dir /path/to/projects "$1"`
}
```
