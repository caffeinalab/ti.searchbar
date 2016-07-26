# Ti.Searchbar

### com.caffeina.titanium.searchbar

Titanium Widget to display a search bar.

![image](https://s3.amazonaws.com/f.cl.ly/items/193d1L3E0r3Y2g1t2g0l/Screen%20Recording%202016-07-26%20at%2010.56%20AM.gif)

## Installation

#### Via Gittio

```
gittio install com.caffeina.titanium.searchbar
```

#### Via Github

Download the latest release, and add in your *config.json*, under `dependencies`:

```json
"dependencies": {
    "com.caffeina.titanium.searchbar": "*"
}
```

## Fully stylable via TSS

Watch the `widget.tss` file for all options and override the rules with ID instead of class.

## Usage

In you XML file:

```xml
<TitleControl>
    <Widget id="searchBar" src="com.caffeina.titanium.searchbar" title="Caffeina" />
</TitleControl>
```

In your JS file:

```js
$.searchBar.on('change', function(e) {
    // Filter your data using e.value
})
```

## Constructor options

#### `animationsDuration` (Number, default: `400`)

The duration of the animations.

#### `title` (String, default: `Ti.App.name`)

The title for the label.

## API

#### `.setSearchMode()`

Set the UI in search mode.

#### `.setTitleMode()`

Set the UI in title mode.
